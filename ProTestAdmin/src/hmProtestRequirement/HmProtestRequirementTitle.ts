import { HmProtestRequirement as THmProtestRequirement } from "../api/hmProtestRequirement/HmProtestRequirement";

export const HMPROTESTREQUIREMENT_TITLE_FIELD = "reqModelname";

export const HmProtestRequirementTitle = (
  record: THmProtestRequirement
): string => {
  return record.reqModelname || record.id;
};
