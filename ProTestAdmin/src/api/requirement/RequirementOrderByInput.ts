import { SortOrder } from "../../util/SortOrder";

export type RequirementOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  modelChanged?: SortOrder;
  reqDesc?: SortOrder;
  reqId?: SortOrder;
  reqModelname?: SortOrder;
  reqModelpath?: SortOrder;
  reqName?: SortOrder;
  reqPrereq?: SortOrder;
  reqType?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
