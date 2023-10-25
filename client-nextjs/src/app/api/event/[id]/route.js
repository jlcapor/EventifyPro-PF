import { NextResponse } from "next/server";

export function GET(reques, {params}){
    return NextResponse.json('Obteniendo Tarea ' + params.id)
}