export type Feedback = {
  _id: string;
  rate: number;
  description: string;
  userName: string;
  locationId?: string | { _id: string; name: string };
  createdAt?: string;
};
