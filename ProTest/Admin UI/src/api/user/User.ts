import { Account } from "../account/Account";
import { JsonValue } from "type-fest";

export type User = {
  accounts?: Array<Account>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
