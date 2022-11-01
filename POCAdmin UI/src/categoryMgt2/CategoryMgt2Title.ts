import { CategoryMgt2 as TCategoryMgt2 } from "../api/categoryMgt2/CategoryMgt2";

export const CATEGORYMGT2_TITLE_FIELD = "websiteName";

export const CategoryMgt2Title = (record: TCategoryMgt2): string => {
  return record.websiteName || record.id;
};
