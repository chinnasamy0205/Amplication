import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CategoryMgt2WhereInput = {
  dateRefT?: DateTimeNullableFilter;
  dateRefT1?: DateTimeNullableFilter;
  id?: StringFilter;
  incremental?: StringNullableFilter;
  status?: "Option1" | "Active" | "InActive";
  totalCount?: StringNullableFilter;
  url?: StringNullableFilter;
  websiteName?: StringNullableFilter;
};
