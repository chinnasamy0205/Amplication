import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  projectDesc?: SortOrder;
  projectEndDate?: SortOrder;
  projectId?: SortOrder;
  projectName?: SortOrder;
  projectStDate?: SortOrder;
  updatedAt?: SortOrder;
};
