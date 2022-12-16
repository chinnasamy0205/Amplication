import { Feature } from "../feature/Feature";
import { User } from "../user/User";

export type Requirement = {
  createdAt: Date;
  id: string;
  modelChanged: number | null;
  reqDesc: string | null;
  reqFeatureId?: Array<Feature>;
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
