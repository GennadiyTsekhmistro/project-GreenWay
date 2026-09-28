export type User = {
  _id: string;
  name: string;
  email?: string;
  avatarUrl: string;
  articlesAmount: number;
};

export type RegisterRequest = { name: string; email: string; password: string };
export type LoginRequest = { email: string; password: string };
