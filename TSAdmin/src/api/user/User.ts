import { HmProtestAccount } from "../hmProtestAccount/HmProtestAccount";
import { HmProtestAccountUser } from "../hmProtestAccountUser/HmProtestAccountUser";
import { HmProtestFeature } from "../hmProtestFeature/HmProtestFeature";
import { HmProtestProject } from "../hmProtestProject/HmProtestProject";
import { HmProtestRequirement } from "../hmProtestRequirement/HmProtestRequirement";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  hmProtestAccounts?: Array<HmProtestAccount>;
  hmProtestAccountUser?: HmProtestAccountUser | null;
  hmProtestFeature?: HmProtestFeature | null;
  hmProtestProjects?: Array<HmProtestProject>;
  hmProtestRequirements?: Array<HmProtestRequirement>;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  userDesc: string | null;
  userEndDate: Date | null;
  username: string;
  userPlan?: "Basic" | "Full" | "Free" | null;
  userStatus?: "Active" | "InActive" | null;
  userStDate: Date | null;
};
