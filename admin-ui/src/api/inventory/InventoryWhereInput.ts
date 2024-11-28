import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PartListRelationFilter } from "../part/PartListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type InventoryWhereInput = {
  description?: StringNullableFilter;
  grossAmount?: FloatNullableFilter;
  id?: StringFilter;
  patrs?: PartListRelationFilter;
  quantity?: IntNullableFilter;
};
