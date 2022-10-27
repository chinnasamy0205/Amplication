import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InventoryWhereUniqueInput } from "../inventory/InventoryWhereUniqueInput";

export type PartWhereInput = {
  amount?: FloatNullableFilter;
  height?: StringNullableFilter;
  id?: StringFilter;
  inventory?: InventoryWhereUniqueInput;
  length?: StringNullableFilter;
  partName?: StringNullableFilter;
  partNumber?: StringNullableFilter;
  unit?: StringNullableFilter;
  weight?: StringNullableFilter;
  width?: StringNullableFilter;
};
