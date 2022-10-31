import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CategorymgtWhereInput = {
  dateRefT?: DateTimeNullableFilter;
  dateRefT1?: DateTimeNullableFilter;
  id?: StringFilter;
  increment?: IntNullableFilter;
  status?: "Option1";
  totalRecord?: StringNullableFilter;
  url?: StringNullableFilter;
  websiteName?: StringNullableFilter;
};
