import { Answer as TAnswer } from "../api/answer/Answer";

export const ANSWER_TITLE_FIELD = "answervalue";

export const AnswerTitle = (record: TAnswer): string => {
  return record.answervalue || record.id;
};
