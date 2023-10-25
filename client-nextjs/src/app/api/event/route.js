import { NextResponse } from "next/server"

export async function GET(){
    const res = await fetch('http://localhost:3001/events');
    const data = await res.json()
    return NextResponse.json(data)
}


export async function POST(request){
    const {nombre, apellido} = await request.json()
    return NextResponse.json({
        message: 'creando datos'
    })
}

export function PUT(){
    return NextResponse.json({
        message: 'actualizando datos'
    })
}


export function DELETE(){
    return NextResponse.json({
        message: 'eliminando datos'
    })
}
