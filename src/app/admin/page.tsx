"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { useEffect, useState, ReactNode } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Modal from "./Model"; // Import the Modal component

const USERNAME = "admin";
const PASSWORD = "admin123";

const allSlots = [
  "09:00 am - 12:00 pm",
  "12:00 pm - 03:00 pm",
  "03:00 pm - 06:00 pm",
  "06:00 pm - 09:00 pm",
];

export default function AdminDashboard() {
  const [auth, setAuth] = useState(false);
  const [login, setLogin] = useState({ username: "", password: "" });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const [form, setForm] = useState({
    fullname: "",
    phone: "",
    checkIn: "",
    slot: "",
    guests: 1,
    status: "booked",
    date: "", // Added date property
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
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["bookings"] });
      setShowBookingForm(false);
    },
  });

  const updateBooking = useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: typeof form }) =>
      axios.put(`/api/bookings/${id}`, updates),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["bookings"] });
      setShowBookingForm(false);
    },
  });

  const deleteBooking = useMutation({
    mutationFn: (id: string) => axios.delete(`/api/bookings/${id}`),
    onSuccess: () => client.invalidateQueries({ queryKey: ["bookings"] }),
  });

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault?.();

    const normalizedDate =
      form.checkIn || new Date().toISOString().split("T")[0];

    if (editing) {
      updateBooking.mutate({
        id: editing,
        updates: { ...form, date: normalizedDate },
      });
      setEditing(null);
    } else {
      createBooking.mutate(
        {
          ...form,
          date: normalizedDate,
        },
        {
          onSuccess: () => {
            const message = `Your booking has been confirmed! 
Name: ${form.fullname}
Phone: ${form.phone}
Date: ${form.checkIn}
Guests: ${form.guests}
Slot: ${form.slot}`;

            const whatsappURL = `https://wa.me/91${
              form.phone
            }?text=${encodeURIComponent(message)}`;

            window.open(whatsappURL, "_blank");
          },
        }
      );
    }

    setForm({
      fullname: "",
      phone: "",
      checkIn: "",
      slot: "",
      guests: 1,
      status: "booked",
      date: "",
    });
  };

  interface Booking {
    _id: string;
    fullname: string;
    phone: string;
    checkIn: string;
    slot: string;
    guests: number;
    status: string;
    date: string;
  }

  const selectedBookings: Booking[] = bookings.filter(
    (b: Booking) =>
      selectedDate &&
      new Date(b.checkIn).toLocaleDateString("en-CA") ===
        selectedDate.toLocaleDateString("en-CA")
  );

  const getAvailableSlots = (date: string) => {
    const booked: string[] = bookings
      .filter((b: Booking) => b.checkIn?.split("T")[0] === date)
      .map((b: Booking) => b.slot);
    return allSlots.filter((slot) => !booked.includes(slot));
  };

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      const today = new Date(new Date().toDateString());
      if (date < today) return "bg-gray-300 text-gray-500 rounded-full";

      const dateString = date.toLocaleDateString("en-CA");
      const bookingsOnDate = bookings.filter(
        (b: Booking) =>
          new Date(b.checkIn).toLocaleDateString("en-CA") === dateString
      );
      const bookedSlots: string[] = bookingsOnDate.map((b: Booking) => b.slot);
      const fullyBooked = allSlots.every((slot) => bookedSlots.includes(slot));

      if (fullyBooked) {
        return "bg-fully-booked rounded-full";
      }

      return "bg-available rounded-full";
    }
  };

  const tileDisabled = ({ date, view }: { date: Date; view: string }) => {
    if (view !== "month") return false;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today) return true; // Disable past dates

    const dateISO = date.toISOString().split("T")[0];
    const slots = bookings
      .filter((booking: Booking) => booking.date === dateISO)
      .map((booking: Booking) => booking.slot);

    return slots.length === allSlots.length; // Disable if fully booked
  };

  if (!auth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-[#205781] p-6 rounded shadow-md w-full max-w-sm mx-auto mt-10">
          <h2 className="text-xl font-semibold mb-4 text-white text-center">
            Admin Login
          </h2>
          <Image
            src={logo}
            alt="Logo"
            className="w-[130px] min-w-[130px] h-fit object-cover relative z-[50] lg:mt-10 self-center mx-auto"
          />
          <div className="space-y-3">
            <input
              className="w-full px-3 py-2 mb-3 border border-white rounded text-white bg-transparent focus:outline-none"
              placeholder="Username"
              value={login.username}
              onChange={(e) => setLogin({ ...login, username: e.target.value })}
            />
            <input
              type="password"
              className="w-full px-3 py-2 mb-3 border border-white rounded text-white bg-transparent focus:outline-none"
              placeholder="Password"
              value={login.password}
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
            />
            <button
              className="w-full py-2 text-white rounded bg-blue-600 hover:bg-blue-700 focus:outline-none"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Restaurant Admin Dashboard</h1>
        <div className="space-x-10">
          <button
            onClick={() => setShowBookingForm((prev) => !prev)} // Toggle form visibility
            className="text-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 px-4 py-2 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Create Booking
          </button>
          <button
            onClick={logout}
            className="text-sm text-red-600 underline hover:text-red-800"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Calendar */}
      <div className="mb-6 flex flex-row items-center gap-4">
        <Calendar
          onChange={(value) =>
            setSelectedDate(value instanceof Date ? value : null)
          }
          value={selectedDate}
          tileClassName={tileClassName}
          tileDisabled={tileDisabled}
        />

        <div className="flex flex-col gap-2 mt-10">
          <p className="bg-red-500 p-2 rounded text-white">
            Red - Fully Booked
          </p>
          <p className="bg-green-500 p-2 rounded text-white">
            Green - Available Slot
          </p>
        </div>
      </div>

      {/* Selected Bookings */}
      {selectedDate && (
        <div className="mb-6 p-4 border rounded bg-gray-50">
          <h3 className="font-bold mb-2">
            Bookings on {selectedDate.toLocaleDateString("en-CA")}
          </h3>

          {selectedBookings.length === 0 ? (
            <p>No bookings on this date.</p>
          ) : (
            <ul className="space-y-2">
              {selectedBookings.map((b) => (
                <li
                  key={b._id}
                  className="p-3 border rounded bg-white shadow-sm flex justify-between"
                >
                  <div>
                    <p>
                      <strong>Name:</strong> {b.fullname}
                    </p>
                    
                    <p>
                      <strong>Guests:</strong> {b.guests}
                    </p>
                    <p>
                      <strong>Slot:</strong> {b.slot}
                    </p>
                  </div>
                  <div className="space-x-2">
                    <button
                      className="text-sm text-blue-600 underline"
                      onClick={() => {
                        setForm({
                          fullname: b.fullname,
                          phone: b.phone,
                          checkIn: b.checkIn?.split("T")[0] || "",
                          slot: b.slot,
                          guests: b.guests,
                          status: b.status,
                          date: b.date || "", // Ensure the date property is included
                        });
                        setEditing(b._id);
                        setShowBookingForm((prev) => !prev);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="text-sm text-red-600 underline"
                      onClick={() => deleteBooking.mutate(b._id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Modal for Booking Form */}
      <Modal isOpen={showBookingForm} onClose={() => setShowBookingForm(false)}>
        <div className="p-4 space-y-3">
          <h3 className="text-lg font-bold">Booking Form</h3>
          <input
            className="w-full px-3 py-2 border rounded"
            placeholder="Full Name"
            value={form.fullname}
            onChange={(e) => setForm({ ...form, fullname: e.target.value })}
          />
         
          <input
            className="w-full px-3 py-2 border rounded"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <input
            type="date"
            className="w-full px-3 py-2 border rounded"
            value={form.checkIn}
            onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
          />
          <select
            className="w-full px-3 py-2 border rounded"
            value={form.slot}
            onChange={(e) => setForm({ ...form, slot: e.target.value })}
          >
            <option value="">Select Slot</option>
            {getAvailableSlots(form.checkIn).map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          <input
            type="number"
            className="w-full px-3 py-2 border rounded"
            placeholder="Number of Guests"
            value={form.guests}
            onChange={(e) =>
              setForm({ ...form, guests: Number(e.target.value) })
            }
          />
          <button
            onClick={handleSubmit}
            className="w-full py-2 bg-blue-600 text-white rounded"
          >
            Submit Booking
          </button>
        </div>
      </Modal>

      {/* Booking List */}
      <div className="space-y-4">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          bookings.map(
            (b: {
              slot: ReactNode;
              _id: string;
              fullname: string;
              phone: string;
              checkIn: string;
              guests: number;
            }) => (
              <div
                key={b._id}
                className="flex justify-between p-4 border rounded bg-gray-100"
              >
                <div>
                  <p>
                    <strong>Name:</strong> {b.fullname}
                  </p>
                  
                  <p>
                    <strong>Phone:</strong> {b.phone}
                  </p>
                  <p>
                    <strong>Guests:</strong> {b.guests}
                  </p>
                  <p>
                    <strong>Slot:</strong> {b.slot}
                  </p>
                  <p>
                    <strong>Check-In:</strong>{" "}
                    {new Date(b.checkIn).toLocaleDateString()}
                  </p>
                </div>
                <button
                  className="text-sm text-red-600 underline"
                  onClick={() => deleteBooking.mutate(b._id)}
                >
                  Delete
                </button>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
}
