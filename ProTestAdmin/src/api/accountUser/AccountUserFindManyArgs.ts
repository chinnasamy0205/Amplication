import { AccountUserWhereInput } from "./AccountUserWhereInput";
import { AccountUserOrderByInput } from "./AccountUserOrderByInput";

export type AccountUserFindManyArgs = {
  where?: AccountUserWhereInput;
  orderBy?: Array<AccountUserOrderByInput>;
  skip?: number;
  take?: number;
};
