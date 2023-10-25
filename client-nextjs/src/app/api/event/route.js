import { NextRequest, NextResponse } from "next/server";
import clienteAxios from "@/config/clienteAxios";


export async function POST(request) {
    const {page, size} = await request.json()
}