import { SortOrder } from "../../util/SortOrder";

export type InventoryOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  grossAmount?: SortOrder;
  id?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
