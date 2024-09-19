export type Order = {
  createdAt: Date;
  id: string;
  status?: "Option1" | null;
  totalPrice: number | null;
  updatedAt: Date;
};
