import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AnswerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="answervalue" source="answervalue" />
      </SimpleForm>
    </Create>
  );
};
