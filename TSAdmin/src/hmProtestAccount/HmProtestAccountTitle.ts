import { HmProtestAccount as THmProtestAccount } from "../api/hmProtestAccount/HmProtestAccount";

export const HMPROTESTACCOUNT_TITLE_FIELD = "accountName";

export const HmProtestAccountTitle = (record: THmProtestAccount): string => {
  return record.accountName || record.id;
};
