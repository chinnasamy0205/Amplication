import { Account as TAccount } from "../api/account/Account";

export const ACCOUNT_TITLE_FIELD = "accountName";

export const AccountTitle = (record: TAccount): string => {
  return record.accountName || record.id;
};
