import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  firstName?: SortOrder;
  hmProtestAccountUserId?: SortOrder;
  hmProtestFeatureId?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  userDesc?: SortOrder;
  userEndDate?: SortOrder;
  username?: SortOrder;
  userPlan?: SortOrder;
  userStatus?: SortOrder;
  userStDate?: SortOrder;
};
