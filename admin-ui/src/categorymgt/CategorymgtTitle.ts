import { Categorymgt as TCategorymgt } from "../api/categorymgt/Categorymgt";

export const CATEGORYMGT_TITLE_FIELD = "websiteName";

export const CategorymgtTitle = (record: TCategorymgt): string => {
  return record.websiteName || record.id;
};
