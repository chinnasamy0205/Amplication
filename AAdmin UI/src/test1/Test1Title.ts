import { Test1 as TTest1 } from "../api/test1/Test1";

export const TEST1_TITLE_FIELD = "id";

export const Test1Title = (record: TTest1): string => {
  return record.id || String(record.id);
};
