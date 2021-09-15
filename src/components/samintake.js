import React from "react";
import { Form } from "./samform";
import { Input, TextArea } from "./samformelement";

export default function App() {
  const onSubmit = data => console.log(data);

  return (
    <Form onSubmit={onSubmit}>
      <Input name="SamTitle" />
      <TextArea name="SamShortDescription" />

      <Input type="submit" value="Submit" />
    </Form>
  );
}