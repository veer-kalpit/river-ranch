"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

const USERNAME = "admin";
const PASSWORD = "admin123";

export default function AdminDashboard() {
  const [auth, setAuth] = useState(false);
  const [login, setLogin] = useState({ username: "", password: "" });

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    phone: "",
    date: "",
    guests: 1,
    status: "booked",
  });
  const [editing, setEditing] = useState<string | null>(null);
  const client = useQueryClient();

  useEffect(() => {
    const saved = localStorage.getItem("auth");
    if (saved === "true") setAuth(true);
  }, []);

  const handleLogin = () => {
    if (login.username === USERNAME && login.password === PASSWORD) {
      setAuth(true);
      localStorage.setItem("auth", "true");
    } else {
      alert("Invalid credentials");
    }
  };

  const logout = () => {
    setAuth(false);
    localStorage.removeItem("auth");
  };

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: () => axios.get("/api/bookings").then((res) => res.data),
    enabled: auth,
  });

  const createBooking = useMutation({
    mutationFn: (newBooking: typeof form) =>
      axios.post("/api/bookings", newBooking),
    onSuccess: () => client.invalidateQueries({ queryKey: ["bookings"] }),
  });

  const updateBooking = useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: typeof form }) =>
      axios.put(`/api/bookings/${id}`, updates),
    onSuccess: () => client.invalidateQueries({ queryKey: ["bookings"] }),
  });

  const deleteBooking = useMutation({
    mutationFn: (id: string) => axios.delete(`/api/bookings/${id}`),
    onSuccess: () => client.invalidateQueries({ queryKey: ["bookings"] }),
  });

  const handleSubmit = () => {
    if (editing) {
      updateBooking.mutate({ id: editing, updates: form });
      setEditing(null);
    } else {
      createBooking.mutate(form);
    }
    
    setForm({
      fullname: "",
      email: "",
      phone: "",
      date: "",
      guests: 1,
      status: "booked",
    });
  };

  if (!auth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
          <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
          <input
            className="w-full px-3 py-2 mb-3 border rounded"
            placeholder="Username"
            value={login.username}
            onChange={(e) => setLogin({ ...login, username: e.target.value })}
          />
          <input
            type="password"
            className="w-full px-3 py-2 mb-3 border rounded"
            placeholder="Password"
            value={login.password}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
          <button
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Restaurant Admin Dashboard</h1>
        <button
          onClick={logout}
          className="text-sm text-red-600 underline hover:text-red-800"
        >
          Logout
        </button>
      </div>

      {/* Form */}
      <div className="p-4 space-y-3 border border-gray-200 rounded mb-6 bg-gray-50">
        <input
          className="w-full px-3 py-2 border rounded"
          placeholder="Full Name"
          value={form.fullname}
          onChange={(e) => setForm({ ...form, fullname: e.target.value })}
        />
        <input
          className="w-full px-3 py-2 border rounded"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="w-full px-3 py-2 border rounded"
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <input
          className="w-full px-3 py-2 border rounded"
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
        <input
          className="w-full px-3 py-2 border rounded"
          type="number"
          min={1}
          value={form.guests}
          onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })}
        />
        <label
          htmlFor="status"
          className="block text-sm font-medium text-gray-700"
        >
          Booking Status
        </label>
        <select
          id="status"
          className="w-full px-3 py-2 border rounded"
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option value="booked">Booked</option>
          <option value="cancelled">Cancelled</option>
        </select>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {editing ? "Update" : "Create"} Booking
        </button>
      </div>

      {/* Booking List */}
      <div className="space-y-4">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          bookings.map((b: { _id: string; fullname: string; email: string; phone: string; date: string; guests: number; status: string }) => (
            <div
              key={b._id}
              className="p-4 flex justify-between items-center border rounded bg-white shadow-sm"
            >
              <div>
                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(b.date).toLocaleDateString("en-GB")}
                </p>
                <p>
                  <strong>Name:</strong> {b.fullname}
                </p>
                <p>
                  <strong>Email:</strong> {b.email}
                </p>
                <p>
                  <strong>Phone:</strong> {b.phone}
                </p>
                <p>
                  <strong>Guests:</strong> {b.guests}
                </p>
                <p>
                  <strong>Status:</strong> {b.status}
                </p>
              </div>
              <div className="space-x-2">
                <button
                  className="px-3 py-1 border rounded hover:bg-gray-100"
                  onClick={() => {
                    setForm({
                      fullname: b.fullname,
                      email: b.email,
                      phone: b.phone,
                      date: b.date.split("T")[0],
                      guests: b.guests,
                      status: b.status,
                    });
                    setEditing(b._id);
                  }}
                >
                  Edit
                </button>
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => deleteBooking.mutate(b._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
