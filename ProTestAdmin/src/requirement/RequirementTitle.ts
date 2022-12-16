import { Requirement as TRequirement } from "../api/requirement/Requirement";

export const REQUIREMENT_TITLE_FIELD = "reqModelname";

export const RequirementTitle = (record: TRequirement): string => {
  return record.reqModelname || record.id;
};
