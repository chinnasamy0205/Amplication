import { AccountUpdateManyWithoutProjectsInput } from "./AccountUpdateManyWithoutProjectsInput";
import { FeatureUpdateManyWithoutProjectsInput } from "./FeatureUpdateManyWithoutProjectsInput";
import { UserUpdateManyWithoutProjectsInput } from "./UserUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  accountId?: AccountUpdateManyWithoutProjectsInput;
  features?: FeatureUpdateManyWithoutProjectsInput;
  projectDesc?: string | null;
  projectEndDate?: Date | null;
  projectId?: string | null;
  projectName?: string | null;
  projectStDate?: Date | null;
  userId?: UserUpdateManyWithoutProjectsInput;
};
