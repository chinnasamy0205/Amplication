import { AccountUpdateManyWithoutUsersInput } from "./AccountUpdateManyWithoutUsersInput";
import { AccountUserWhereUniqueInput } from "../accountUser/AccountUserWhereUniqueInput";
import { FeatureWhereUniqueInput } from "../feature/FeatureWhereUniqueInput";
import { ProjectUpdateManyWithoutUsersInput } from "./ProjectUpdateManyWithoutUsersInput";
import { RequirementUpdateManyWithoutUsersInput } from "./RequirementUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  hmProtestAccounts?: AccountUpdateManyWithoutUsersInput;
  hmProtestAccountUser?: AccountUserWhereUniqueInput | null;
  hmProtestFeature?: FeatureWhereUniqueInput | null;
  hmProtestProjects?: ProjectUpdateManyWithoutUsersInput;
  hmProtestRequirements?: RequirementUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  userDesc?: string | null;
  userEndDate?: Date | null;
  username?: string;
  userPlan?: "Basic" | "Full" | "Free" | null;
  userStatus?: "Active" | "InActive" | null;
  userStDate?: Date | null;
};
