import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, extractTokenFromHeader } from './auth';

export function withAuth(handler: Function) {
  return async (req: NextRequest) => {
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

    (req as any).user = decoded;
    return handler(req);
  };
}