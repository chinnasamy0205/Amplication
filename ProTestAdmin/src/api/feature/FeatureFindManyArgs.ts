import { FeatureWhereInput } from "./FeatureWhereInput";
import { FeatureOrderByInput } from "./FeatureOrderByInput";

export type FeatureFindManyArgs = {
  where?: FeatureWhereInput;
  orderBy?: Array<FeatureOrderByInput>;
  skip?: number;
  take?: number;
};
