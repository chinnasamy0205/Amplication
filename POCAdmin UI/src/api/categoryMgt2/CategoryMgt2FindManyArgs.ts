import { CategoryMgt2WhereInput } from "./CategoryMgt2WhereInput";
import { CategoryMgt2OrderByInput } from "./CategoryMgt2OrderByInput";

export type CategoryMgt2FindManyArgs = {
  where?: CategoryMgt2WhereInput;
  orderBy?: Array<CategoryMgt2OrderByInput>;
  skip?: number;
  take?: number;
};
