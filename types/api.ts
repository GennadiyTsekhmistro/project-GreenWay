export type SingleResponse<T> = { data: T };

export type PaginatedResponse<T> = {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
  items: T[];
};

export type ApiError = { status: number; message: string };
