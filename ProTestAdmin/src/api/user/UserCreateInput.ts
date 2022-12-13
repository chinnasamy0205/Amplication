import { HmProtestAccountCreateNestedManyWithoutUsersInput } from "./HmProtestAccountCreateNestedManyWithoutUsersInput";
import { HmProtestAccountUserWhereUniqueInput } from "../hmProtestAccountUser/HmProtestAccountUserWhereUniqueInput";
import { HmProtestFeatureWhereUniqueInput } from "../hmProtestFeature/HmProtestFeatureWhereUniqueInput";
import { HmProtestProjectCreateNestedManyWithoutUsersInput } from "./HmProtestProjectCreateNestedManyWithoutUsersInput";
import { HmProtestRequirementCreateNestedManyWithoutUsersInput } from "./HmProtestRequirementCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  hmProtestAccounts?: HmProtestAccountCreateNestedManyWithoutUsersInput;
  hmProtestAccountUser?: HmProtestAccountUserWhereUniqueInput | null;
  hmProtestFeature?: HmProtestFeatureWhereUniqueInput | null;
  hmProtestProjects?: HmProtestProjectCreateNestedManyWithoutUsersInput;
  hmProtestRequirements?: HmProtestRequirementCreateNestedManyWithoutUsersInput;
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
