import { HmProtestFeatureCreateNestedManyWithoutHmProtestRequirementsInput } from "./HmProtestFeatureCreateNestedManyWithoutHmProtestRequirementsInput";
import { UserCreateNestedManyWithoutHmProtestRequirementsInput } from "./UserCreateNestedManyWithoutHmProtestRequirementsInput";

export type HmProtestRequirementCreateInput = {
  modelChanged?: number | null;
  reqDesc?: string | null;
  reqFeatureId?: HmProtestFeatureCreateNestedManyWithoutHmProtestRequirementsInput;
  reqId?: string | null;
  reqModelname?: string | null;
  reqModelpath?: string | null;
  reqName?: string | null;
  reqPrereq?: string | null;
  reqType?: string | null;
  status?: "Active" | "InActive" | null;
  userId?: UserCreateNestedManyWithoutHmProtestRequirementsInput;
};
