import { HmProtestAccountUpdateManyWithoutHmProtestProjectsInput } from "./HmProtestAccountUpdateManyWithoutHmProtestProjectsInput";
import { UserUpdateManyWithoutHmProtestProjectsInput } from "./UserUpdateManyWithoutHmProtestProjectsInput";

export type HmProtestProjectUpdateInput = {
  accountId?: HmProtestAccountUpdateManyWithoutHmProtestProjectsInput;
  projectDesc?: string | null;
  projectEndDate?: Date | null;
  projectId?: string | null;
  projectName?: string | null;
  projectStDate?: Date | null;
  userId?: UserUpdateManyWithoutHmProtestProjectsInput;
};
