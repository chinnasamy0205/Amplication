import { Part as TPart } from "../api/part/Part";

export const PART_TITLE_FIELD = "partName";

export const PartTitle = (record: TPart): string => {
  return record.partName || record.id;
};
