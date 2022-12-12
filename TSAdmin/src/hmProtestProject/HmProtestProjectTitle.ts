import { HmProtestProject as THmProtestProject } from "../api/hmProtestProject/HmProtestProject";

export const HMPROTESTPROJECT_TITLE_FIELD = "projectName";

export const HmProtestProjectTitle = (record: THmProtestProject): string => {
  return record.projectName || record.id;
};
