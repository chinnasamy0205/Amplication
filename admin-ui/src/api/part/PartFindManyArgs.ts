import { PartWhereInput } from "./PartWhereInput";
import { PartOrderByInput } from "./PartOrderByInput";

export type PartFindManyArgs = {
  where?: PartWhereInput;
  orderBy?: Array<PartOrderByInput>;
  skip?: number;
  take?: number;
};
