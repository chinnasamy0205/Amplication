import { ProjectCreateNestedManyWithoutFeaturesInput } from "./ProjectCreateNestedManyWithoutFeaturesInput";
import { RequirementCreateNestedManyWithoutFeaturesInput } from "./RequirementCreateNestedManyWithoutFeaturesInput";
import { UserCreateNestedManyWithoutFeaturesInput } from "./UserCreateNestedManyWithoutFeaturesInput";

export type FeatureCreateInput = {
  featureDesc?: string | null;
  featureEndDate?: Date | null;
  featureId: string;
  featureName: string;
  featurePrereq?: string | null;
  featureProjId?: ProjectCreateNestedManyWithoutFeaturesInput;
  featureStDate: Date;
  hmProtestRequirements?: RequirementCreateNestedManyWithoutFeaturesInput;
  userId?: UserCreateNestedManyWithoutFeaturesInput;
};
