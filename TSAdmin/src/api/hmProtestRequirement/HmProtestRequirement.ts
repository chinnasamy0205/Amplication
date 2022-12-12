import { HmProtestFeature } from "../hmProtestFeature/HmProtestFeature";
import { User } from "../user/User";

export type HmProtestRequirement = {
  createdAt: Date;
  id: string;
  modelChanged: number | null;
  reqDesc: string | null;
  reqFeatureId?: Array<HmProtestFeature>;
  reqId: string | null;
  reqModelname: string | null;
  reqModelpath: string | null;
  reqName: string | null;
  reqPrereq: string | null;
  reqType: string | null;
  status?: "Active" | "InActive" | null;
  updatedAt: Date;
  userId?: Array<User>;
};
