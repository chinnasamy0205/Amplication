import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CategoryMgtWhereInput = {
  dateRefT?: DateTimeNullableFilter;
  daterefT1?: DateTimeNullableFilter;
  id?: StringFilter;
  increment?: StringNullableFilter;
  status?: "Option1";
  totalRecord?: StringNullableFilter;
  url?: StringNullableFilter;
  websitename?: StringNullableFilter;
};
