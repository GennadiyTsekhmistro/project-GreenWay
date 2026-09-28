// Підказка: використай proxyToBackend(req, шлях_на_бекенді) з lib/api/proxy.ts (приклад — app/api/auth/login/route.ts)
// (!) У файлі дві функції з різними власниками — кожен змінює ТІЛЬКИ свою.
import { NextRequest } from 'next/server';

import { notImplemented } from '@/lib/api/proxy';

type Ctx = { params: Promise<{ locationId: string }> };

// Власник: TBD (див. docs/FRONTEND_TASKS.md)
export async function GET(_req: NextRequest, _ctx: Ctx) {
  return notImplemented('GET /api/locations/:locationId');
}

// Власник: TBD (див. docs/FRONTEND_TASKS.md)
export async function PATCH(_req: NextRequest, _ctx: Ctx) {
  return notImplemented('PATCH /api/locations/:locationId');
}
