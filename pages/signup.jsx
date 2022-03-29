import React from "react";
import { Button, Divider, Form, Message, Segment } from "semantic-ui-react";

const signup = () => {
  return (
    <>
     <Form>
    <Form.Input>
      
    </Form.Input>
    Signup Page

          <Form.input
            label="email"
            required
            placeholder="email"
            name="email"
            // value={email}
            type="email"
          ></Form.input>

          <Form.Input
            label="password"
            required
            placeholder="password"
            name="password"
            // value={password}
          ></Form.Input>

          <Form.Input
            label="class"
            required
            placeholder="class"
            name="class"
          ></Form.Input>

          <Form.Input
            label="teacherCode"
            required
            placeholder="teacherCode"
            name="teacherCode"
          ></Form.Input>

          <Form.Input
            label="session"
            required
            placeholder="session"
            name="session"
          ></Form.Input>
        </Segment>
      </Form>
    </>
  );
};

export default signup;
