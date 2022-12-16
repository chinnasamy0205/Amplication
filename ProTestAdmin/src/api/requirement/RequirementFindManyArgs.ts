import { RequirementWhereInput } from "./RequirementWhereInput";
import { RequirementOrderByInput } from "./RequirementOrderByInput";

export type RequirementFindManyArgs = {
  where?: RequirementWhereInput;
  orderBy?: Array<RequirementOrderByInput>;
  skip?: number;
  take?: number;
};
