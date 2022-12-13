import { HmProtestRequirementUpdateManyWithoutHmProtestFeaturesInput } from "./HmProtestRequirementUpdateManyWithoutHmProtestFeaturesInput";
import { UserUpdateManyWithoutHmProtestFeaturesInput } from "./UserUpdateManyWithoutHmProtestFeaturesInput";

export type HmProtestFeatureUpdateInput = {
  featureDesc?: string | null;
  featureEndDate?: Date | null;
  featureId?: string;
  featureName?: string;
  featurePrereq?: string | null;
  featureProjId?: string | null;
  featureStDate?: Date;
  hmProtestRequirements?: HmProtestRequirementUpdateManyWithoutHmProtestFeaturesInput;
  userId?: UserUpdateManyWithoutHmProtestFeaturesInput;
};
