import { HmProtestAccountUpdateManyWithoutUsersInput } from "./HmProtestAccountUpdateManyWithoutUsersInput";
import { HmProtestAccountUserWhereUniqueInput } from "../hmProtestAccountUser/HmProtestAccountUserWhereUniqueInput";
import { HmProtestFeatureWhereUniqueInput } from "../hmProtestFeature/HmProtestFeatureWhereUniqueInput";
import { HmProtestProjectUpdateManyWithoutUsersInput } from "./HmProtestProjectUpdateManyWithoutUsersInput";
import { HmProtestRequirementUpdateManyWithoutUsersInput } from "./HmProtestRequirementUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  hmProtestAccounts?: HmProtestAccountUpdateManyWithoutUsersInput;
  hmProtestAccountUser?: HmProtestAccountUserWhereUniqueInput | null;
  hmProtestFeature?: HmProtestFeatureWhereUniqueInput | null;
  hmProtestProjects?: HmProtestProjectUpdateManyWithoutUsersInput;
  hmProtestRequirements?: HmProtestRequirementUpdateManyWithoutUsersInput;
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
