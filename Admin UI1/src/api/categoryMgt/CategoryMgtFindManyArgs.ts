import { CategoryMgtWhereInput } from "./CategoryMgtWhereInput";
import { CategoryMgtOrderByInput } from "./CategoryMgtOrderByInput";

export type CategoryMgtFindManyArgs = {
  where?: CategoryMgtWhereInput;
  orderBy?: Array<CategoryMgtOrderByInput>;
  skip?: number;
  take?: number;
};
