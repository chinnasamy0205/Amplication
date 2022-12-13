import { HmProtestRequirement } from "../hmProtestRequirement/HmProtestRequirement";
import { User } from "../user/User";

export type HmProtestFeature = {
  createdAt: Date;
  featureDesc: string | null;
  featureEndDate: Date | null;
  featureId: string;
  featureName: string;
  featurePrereq: string | null;
  featureProjId: string | null;
  featureStDate: Date;
  hmProtestRequirements?: Array<HmProtestRequirement>;
  id: string;
  updatedAt: Date;
  userId?: Array<User>;
};
