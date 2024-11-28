import { SortOrder } from "../../util/SortOrder";

export type PartOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  height?: SortOrder;
  id?: SortOrder;
  inventoryId?: SortOrder;
  length?: SortOrder;
  partName?: SortOrder;
  partNumber?: SortOrder;
  unit?: SortOrder;
  updatedAt?: SortOrder;
  weight?: SortOrder;
  width?: SortOrder;
};
