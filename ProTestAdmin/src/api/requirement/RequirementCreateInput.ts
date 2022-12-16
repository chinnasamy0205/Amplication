import { FeatureCreateNestedManyWithoutRequirementsInput } from "./FeatureCreateNestedManyWithoutRequirementsInput";
import { UserCreateNestedManyWithoutRequirementsInput } from "./UserCreateNestedManyWithoutRequirementsInput";

export type RequirementCreateInput = {
  modelChanged?: number | null;
  reqDesc?: string | null;
  reqFeatureId?: FeatureCreateNestedManyWithoutRequirementsInput;
  reqId?: string | null;
  reqModelname?: string | null;
  reqModelpath?: string | null;
  reqName?: string | null;
  reqPrereq?: string | null;
  reqType?: string | null;
  status?: "Active" | "InActive" | null;
  userId?: UserCreateNestedManyWithoutRequirementsInput;
};
