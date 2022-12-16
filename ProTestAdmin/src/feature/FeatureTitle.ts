import { Feature as TFeature } from "../api/feature/Feature";

export const FEATURE_TITLE_FIELD = "featureName";

export const FeatureTitle = (record: TFeature): string => {
  return record.featureName || record.id;
};
