import { Test1WhereInput } from "./Test1WhereInput";
import { Test1OrderByInput } from "./Test1OrderByInput";

export type Test1FindManyArgs = {
  where?: Test1WhereInput;
  orderBy?: Array<Test1OrderByInput>;
  skip?: number;
  take?: number;
};
