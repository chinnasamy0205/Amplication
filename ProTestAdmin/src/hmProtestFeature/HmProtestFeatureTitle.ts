import { HmProtestFeature as THmProtestFeature } from "../api/hmProtestFeature/HmProtestFeature";

export const HMPROTESTFEATURE_TITLE_FIELD = "featureName";

export const HmProtestFeatureTitle = (record: THmProtestFeature): string => {
  return record.featureName || record.id;
};
