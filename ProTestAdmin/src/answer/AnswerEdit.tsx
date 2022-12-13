import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AnswerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="answervalue" source="answervalue" />
      </SimpleForm>
    </Edit>
  );
};
