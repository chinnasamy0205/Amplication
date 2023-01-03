import { ProjectUpdateManyWithoutFeaturesInput } from "./ProjectUpdateManyWithoutFeaturesInput";
import { RequirementUpdateManyWithoutFeaturesInput } from "./RequirementUpdateManyWithoutFeaturesInput";
import { UserUpdateManyWithoutFeaturesInput } from "./UserUpdateManyWithoutFeaturesInput";

export type FeatureUpdateInput = {
  featureDesc?: string | null;
  featureEndDate?: Date | null;
  featureId?: string;
  featureName?: string;
  featurePrereq?: string | null;
  featureProjId?: ProjectUpdateManyWithoutFeaturesInput;
  featureStDate?: Date;
  hmProtestRequirements?: RequirementUpdateManyWithoutFeaturesInput;
  userId?: UserUpdateManyWithoutFeaturesInput;
};
