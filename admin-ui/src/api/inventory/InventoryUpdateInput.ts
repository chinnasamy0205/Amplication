import { PartUpdateManyWithoutInventoriesInput } from "./PartUpdateManyWithoutInventoriesInput";

export type InventoryUpdateInput = {
  description?: string | null;
  grossAmount?: number | null;
  patrs?: PartUpdateManyWithoutInventoriesInput;
  quantity?: number | null;
};
