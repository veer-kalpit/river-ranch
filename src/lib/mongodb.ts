// lib/mongodb.ts
import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb+srv://admin:riverRanch@cluster0.n5kna6e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

if (!MONGODB_URI) throw new Error("MONGODB_URI is not defined");

export async function connectDB() {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(MONGODB_URI);
}
