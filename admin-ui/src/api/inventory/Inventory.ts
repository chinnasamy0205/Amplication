import { Part } from "../part/Part";

export type Inventory = {
  createdAt: Date;
  description: string | null;
  grossAmount: number | null;
  id: string;
  patrs?: Array<Part>;
  quantity: number | null;
  updatedAt: Date;
};
