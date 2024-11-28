import { InventoryWhereUniqueInput } from "../inventory/InventoryWhereUniqueInput";

export type PartCreateInput = {
  amount?: number | null;
  height?: string | null;
  inventory?: InventoryWhereUniqueInput | null;
  length?: string | null;
  partName?: string | null;
  partNumber?: string | null;
  unit?: string | null;
  weight?: string | null;
  width?: string | null;
};
