// Власник: Олександр (TL)
import { nextServer } from './client';
import type { SingleResponse } from '@/types/api';
import type { LoginRequest, RegisterRequest, User } from '@/types/user';

export const register = async (body: RegisterRequest) => {
  const { data } = await nextServer.post<SingleResponse<User>>('/auth/register', body);
  return data.data;
};

export const login = async (body: LoginRequest) => {
  const { data } = await nextServer.post<SingleResponse<User>>('/auth/login', body);
  return data.data;
};

export const logout = async () => {
  await nextServer.post('/auth/logout');
};

// Відновлення сесії після перезавантаження (AuthProvider). Працює, коли готовий GET /users/me.
export const getMe = async () => {
  const { data } = await nextServer.get<SingleResponse<User>>('/users/me');
  return data.data;
};
