import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Simple file-based storage (no database needed!)
// For production with many guests, switch to Supabase/PostgreSQL
const DATA_FILE = path.join(process.cwd(), "data", "rsvp.json");

function ensureDataDir() {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, "[]", "utf-8");
  }
}

function readRSVPs() {
  ensureDataDir();
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(raw);
}

function writeRSVPs(data: unknown[]) {
  ensureDataDir();
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, attendance, guests, message } = body;

    if (!name) {
      return NextResponse.json({ error: "Nama wajib diisi" }, { status: 400 });
    }

    const rsvps = readRSVPs();
    rsvps.push({
      id: Date.now(),
      name,
      attendance: attendance || "hadir",
      guests: parseInt(guests) || 1,
      message: message || "",
      createdAt: new Date().toISOString(),
    });

    writeRSVPs(rsvps);

    return NextResponse.json({ success: true, total: rsvps.length });
  } catch (error) {
    console.error("RSVP error:", error);
    return NextResponse.json({ error: "Gagal menyimpan" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const rsvps = readRSVPs();
    return NextResponse.json({
      total: rsvps.length,
      hadir: rsvps.filter((r: { attendance: string }) => r.attendance === "hadir").length,
      tidak: rsvps.filter((r: { attendance: string }) => r.attendance === "tidak").length,
      mungkin: rsvps.filter((r: { attendance: string }) => r.attendance === "mungkin").length,
      data: rsvps,
    });
  } catch {
    return NextResponse.json({ total: 0, data: [] });
  }
}
