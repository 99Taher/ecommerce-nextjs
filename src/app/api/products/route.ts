import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const category = searchParams.get('category');
    const limit = parseInt(searchParams.get('limit') || '20');

    const where = category && category !== 'all' ? { category } : {};

    const products = await prisma.product.findMany({
      where,
      take: limit,
    });

    return NextResponse.json({
      success: true,
      data: products,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const product = await prisma.product.create({
      data: body,
    });

    return NextResponse.json(
      { success: true, data: product },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create product' },
      { status: 500 }
    );
  }
}