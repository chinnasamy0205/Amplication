import { CategoryMgt as TCategoryMgt } from "../api/categoryMgt/CategoryMgt";

export const CATEGORYMGT_TITLE_FIELD = "websitename";

export const CategoryMgtTitle = (record: TCategoryMgt): string => {
  return record.websitename || record.id;
};
