import { CategoryMgt as TCategoryMgt } from "../api/categoryMgt/CategoryMgt";

export const CATEGORYMGT_TITLE_FIELD = "websiteName";

export const CategoryMgtTitle = (record: TCategoryMgt): string => {
  return record.websiteName || record.id;
};
