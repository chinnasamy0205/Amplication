import { AccountCreateNestedManyWithoutProjectsInput } from "./AccountCreateNestedManyWithoutProjectsInput";
import { UserCreateNestedManyWithoutProjectsInput } from "./UserCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  accountId?: AccountCreateNestedManyWithoutProjectsInput;
  projectDesc?: string | null;
  projectEndDate?: Date | null;
  projectId?: string | null;
  projectName?: string | null;
  projectStDate?: Date | null;
  userId?: UserCreateNestedManyWithoutProjectsInput;
};
