import { HmProtestRequirementCreateNestedManyWithoutHmProtestFeaturesInput } from "./HmProtestRequirementCreateNestedManyWithoutHmProtestFeaturesInput";
import { UserCreateNestedManyWithoutHmProtestFeaturesInput } from "./UserCreateNestedManyWithoutHmProtestFeaturesInput";

export type HmProtestFeatureCreateInput = {
  featureDesc?: string | null;
  featureEndDate?: Date | null;
  featureId: string;
  featureName: string;
  featurePrereq?: string | null;
  featureProjId?: string | null;
  featureStDate: Date;
  hmProtestRequirements?: HmProtestRequirementCreateNestedManyWithoutHmProtestFeaturesInput;
  userId?: UserCreateNestedManyWithoutHmProtestFeaturesInput;
};
