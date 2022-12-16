import { Requirement } from "../requirement/Requirement";
import { User } from "../user/User";

export type Feature = {
  createdAt: Date;
  featureDesc: string | null;
  featureEndDate: Date | null;
  featureId: string;
  featureName: string;
  featurePrereq: string | null;
  featureProjId: string | null;
  featureStDate: Date;
  hmProtestRequirements?: Array<Requirement>;
  id: string;
  updatedAt: Date;
  userId?: Array<User>;
};
