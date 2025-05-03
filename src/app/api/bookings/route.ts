import { NextRequest, NextResponse } from "next/server";

interface BookingData {
  start: string;
  end: string;
  name: string;
  email: string;
  phone?: string;
  guests?: number;
  special?: string; // renamed from 'notes'
}

const SHEETS_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbw-fgEsMbbBelKdVyK2MZhWfVpFBevF5PsFgc8jstBrT9gDHyUDvHNNTZy86Zmc0Gzf/exec";

const validateBooking = (data: BookingData) => {
  const { start, end, name, email } = data;

  if (!start || !end || !name || !email) {
    throw new Error("Missing required fields: start, end, name, email.");
  }

  const startDate = new Date(start);
  const endDate = new Date(end);

  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    throw new Error("Invalid date format. Use ISO format YYYY-MM-DD.");
  }

  if (endDate < startDate) {
    throw new Error("End date cannot be before start date.");
  }
};

export async function GET() {
  try {
    const response = await fetch(SHEETS_WEBHOOK_URL);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json(
      { error: "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body: BookingData = await req.json();

    validateBooking(body);

    const sanitizedData: BookingData = {
      ...body,
      phone: body.phone ? String(body.phone) : undefined,
      guests: body.guests ? Number(body.guests) : undefined,
      special: body.special ? String(body.special) : undefined,
    };

    const sheetsResponse = await fetch(SHEETS_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sanitizedData),
    });

    const result = await sheetsResponse.json();

    if (!result.success) {
      throw new Error(result.message || "Booking submission failed");
    }

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 400 }
    );
  }
}

// Optional CORS support
export function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}
