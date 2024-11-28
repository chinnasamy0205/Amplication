import { Inventory } from "../inventory/Inventory";

export type Part = {
  amount: number | null;
  createdAt: Date;
  height: string | null;
  id: string;
  inventory?: Inventory | null;
  length: string | null;
  partName: string | null;
  partNumber: string | null;
  unit: string | null;
  updatedAt: Date;
  weight: string | null;
  width: string | null;
};
