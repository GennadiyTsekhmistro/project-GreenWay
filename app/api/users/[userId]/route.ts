// Власник: TBD (див. docs/FRONTEND_TASKS.md)
// Підказка: використай proxyToBackend(req, шлях_на_бекенді) з lib/api/proxy.ts (приклад — app/api/auth/login/route.ts)
import { NextRequest } from 'next/server';

import { notImplemented } from '@/lib/api/proxy';

type Ctx = { params: Promise<{ userId: string }> };

export async function GET(_req: NextRequest, _ctx: Ctx) {
  return notImplemented('GET /api/users/:userId');
}
