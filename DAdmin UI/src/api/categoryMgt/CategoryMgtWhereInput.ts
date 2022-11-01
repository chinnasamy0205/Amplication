import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CategoryMgtWhereInput = {
  dateRefT?: DateTimeNullableFilter;
  dateRefT1?: DateTimeNullableFilter;
  id?: StringFilter;
  incremental?: StringNullableFilter;
  status?: "InAtive";
  totalCount?: StringNullableFilter;
  url?: StringNullableFilter;
  websiteName?: StringNullableFilter;
};
