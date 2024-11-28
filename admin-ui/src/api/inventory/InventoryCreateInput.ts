import { PartCreateNestedManyWithoutInventoriesInput } from "./PartCreateNestedManyWithoutInventoriesInput";

export type InventoryCreateInput = {
  description?: string | null;
  grossAmount?: number | null;
  patrs?: PartCreateNestedManyWithoutInventoriesInput;
  quantity?: number | null;
};
