import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyToken, extractTokenFromHeader } from '@/lib/auth';

export async function DELETE(
  req: NextRequest,
  { params }: { params: { productId: string } }
) {
  try {
    const token = extractTokenFromHeader(req.headers.get('authorization'));

    if (!token) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json(
        { success: false, error: 'Invalid token' },
        { status: 401 }
      );
    }

    const cart = await prisma.cart.findUnique({
      where: { userId: decoded.id },
    });

    if (!cart) {
      return NextResponse.json(
        { success: false, error: 'Cart not found' },
        { status: 404 }
      );
    }

    await prisma.cartItem.delete({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId: params.productId,
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to remove from cart' },
      { status: 500 }
    );
  }
}