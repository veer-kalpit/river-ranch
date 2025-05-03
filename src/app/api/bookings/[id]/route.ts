import { NextRequest, NextResponse } from "next/server";

const SHEETS_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbw-fgEsMbbBelKdVyK2MZhWfVpFBevF5PsFgc8jstBrT9gDHyUDvHNNTZy86Zmc0Gzf/exec";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();

    const response = await fetch(
      `${SHEETS_WEBHOOK_URL}?action=update&id=${params.id}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error updating booking:", error);
    return NextResponse.json(
      { error: "Failed to update booking" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const response = await fetch(
      `${SHEETS_WEBHOOK_URL}?action=delete&id=${params.id}`,
      {
        method: "POST",
      }
    );

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error deleting booking:", error);
    return NextResponse.json(
      { error: "Failed to delete booking" },
      { status: 500 }
    );
  }
}
