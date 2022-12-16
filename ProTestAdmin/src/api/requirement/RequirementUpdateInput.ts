import { FeatureUpdateManyWithoutRequirementsInput } from "./FeatureUpdateManyWithoutRequirementsInput";
import { UserUpdateManyWithoutRequirementsInput } from "./UserUpdateManyWithoutRequirementsInput";

export type RequirementUpdateInput = {
  modelChanged?: number | null;
  reqDesc?: string | null;
  reqFeatureId?: FeatureUpdateManyWithoutRequirementsInput;
  reqId?: string | null;
  reqModelname?: string | null;
  reqModelpath?: string | null;
  reqName?: string | null;
  reqPrereq?: string | null;
  reqType?: string | null;
  status?: "Active" | "InActive" | null;
  userId?: UserUpdateManyWithoutRequirementsInput;
};
