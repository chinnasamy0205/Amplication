import { HmProtestAccountUser as THmProtestAccountUser } from "../api/hmProtestAccountUser/HmProtestAccountUser";

export const HMPROTESTACCOUNTUSER_TITLE_FIELD = "id";

export const HmProtestAccountUserTitle = (
  record: THmProtestAccountUser
): string => {
  return record.id || record.id;
};
