import { AccountCreateNestedManyWithoutUsersInput } from "./AccountCreateNestedManyWithoutUsersInput";
import { AccountUserWhereUniqueInput } from "../accountUser/AccountUserWhereUniqueInput";
import { FeatureWhereUniqueInput } from "../feature/FeatureWhereUniqueInput";
import { ProjectCreateNestedManyWithoutUsersInput } from "./ProjectCreateNestedManyWithoutUsersInput";
import { RequirementCreateNestedManyWithoutUsersInput } from "./RequirementCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  hmProtestAccounts?: AccountCreateNestedManyWithoutUsersInput;
  hmProtestAccountUser?: AccountUserWhereUniqueInput | null;
  hmProtestFeature?: FeatureWhereUniqueInput | null;
  hmProtestProjects?: ProjectCreateNestedManyWithoutUsersInput;
  hmProtestRequirements?: RequirementCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  userDesc?: string | null;
  userEndDate?: Date | null;
  username: string;
  userPlan?: "Basic" | "Full" | "Free" | null;
  userStatus?: "Active" | "InActive" | null;
  userStDate?: Date | null;
};
