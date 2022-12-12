import { AnswerWhereInput } from "./AnswerWhereInput";
import { AnswerOrderByInput } from "./AnswerOrderByInput";

export type AnswerFindManyArgs = {
  where?: AnswerWhereInput;
  orderBy?: Array<AnswerOrderByInput>;
  skip?: number;
  take?: number;
};
