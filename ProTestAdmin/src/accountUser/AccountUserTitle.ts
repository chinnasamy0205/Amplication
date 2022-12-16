import { AccountUser as TAccountUser } from "../api/accountUser/AccountUser";

export const ACCOUNTUSER_TITLE_FIELD = "id";

export const AccountUserTitle = (record: TAccountUser): string => {
  return record.id || record.id;
};
