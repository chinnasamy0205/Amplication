import { HmProtestFeatureUpdateManyWithoutHmProtestRequirementsInput } from "./HmProtestFeatureUpdateManyWithoutHmProtestRequirementsInput";
import { UserUpdateManyWithoutHmProtestRequirementsInput } from "./UserUpdateManyWithoutHmProtestRequirementsInput";

export type HmProtestRequirementUpdateInput = {
  modelChanged?: number | null;
  reqDesc?: string | null;
  reqFeatureId?: HmProtestFeatureUpdateManyWithoutHmProtestRequirementsInput;
  reqId?: string | null;
  reqModelname?: string | null;
  reqModelpath?: string | null;
  reqName?: string | null;
  reqPrereq?: string | null;
  reqType?: string | null;
  status?: "Active" | "InActive" | null;
  userId?: UserUpdateManyWithoutHmProtestRequirementsInput;
};
