import { AccountUpdateManyWithoutProjectsInput } from "./AccountUpdateManyWithoutProjectsInput";
import { UserUpdateManyWithoutProjectsInput } from "./UserUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  accountId?: AccountUpdateManyWithoutProjectsInput;
  projectDesc?: string | null;
  projectEndDate?: Date | null;
  projectId?: string | null;
  projectName?: string | null;
  projectStDate?: Date | null;
  userId?: UserUpdateManyWithoutProjectsInput;
};
