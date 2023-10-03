import { NextResponse } from "next/server";

export const GET = (req, res) => {
  return NextResponse.json([
    {
      id: 1,
      name: "Avinash",
    },
    {
      id: 2,
      name: "Smith",
    },
    {
      id: 3,
      name: "Jordan",
    },
    {
      id: 4,
      name: "David",
    },
    {
      id: 5,
      name: "Cris",
    },
    {
      id: 6,
      name: "Kieron",
    },
  ]);
};
