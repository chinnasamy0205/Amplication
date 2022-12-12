import { HmProtestAccountCreateNestedManyWithoutHmProtestProjectsInput } from "./HmProtestAccountCreateNestedManyWithoutHmProtestProjectsInput";
import { UserCreateNestedManyWithoutHmProtestProjectsInput } from "./UserCreateNestedManyWithoutHmProtestProjectsInput";

export type HmProtestProjectCreateInput = {
  accountId?: HmProtestAccountCreateNestedManyWithoutHmProtestProjectsInput;
  projectDesc?: string | null;
  projectEndDate?: Date | null;
  projectId?: string | null;
  projectName?: string | null;
  projectStDate?: Date | null;
  userId?: UserCreateNestedManyWithoutHmProtestProjectsInput;
};
