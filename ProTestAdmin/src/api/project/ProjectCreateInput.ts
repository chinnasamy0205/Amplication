import { AccountCreateNestedManyWithoutProjectsInput } from "./AccountCreateNestedManyWithoutProjectsInput";
import { FeatureCreateNestedManyWithoutProjectsInput } from "./FeatureCreateNestedManyWithoutProjectsInput";
import { UserCreateNestedManyWithoutProjectsInput } from "./UserCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  accountId?: AccountCreateNestedManyWithoutProjectsInput;
  features?: FeatureCreateNestedManyWithoutProjectsInput;
  projectDesc?: string | null;
  projectEndDate?: Date | null;
  projectId?: string | null;
  projectName?: string | null;
  projectStDate?: Date | null;
  userId?: UserCreateNestedManyWithoutProjectsInput;
};
