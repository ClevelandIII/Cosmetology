import React from "react";
import { Button, Divider, Form, Message, Segment } from "semantic-ui-react";

const Signup = () => {
  return (
    <>
      <Form>
        <Segment>
          <Form.Input
            label="First name"
            required
            placeholder="John"
            name="firstName"
            // value={name}
          ></Form.Input>

          <Form.Input
            label="Last name"
            required
            placeholder="Doe"
            name="lastName"
            // value={name}
          ></Form.Input>

          <Form.Input
            label="Email"
            required
            placeholder="johndoe@example.com"
            name="email"
            // value={email}
            type="email"
          ></Form.Input>

          <Form.Input
            label="Password"
            required
            placeholder=""
            name="password"
            type="password"
            // value={password}
          ></Form.Input>

          <Form.Input
            label="Class"
            required
            placeholder=""
            name="class"
          ></Form.Input>

          <Form.Input
            label="Teacher code"
            required
            placeholder=""
            name="teacherCode"
          ></Form.Input>

          <Form.Input
            label="Session"
            required
            placeholder=""
            name="session"
          ></Form.Input>
        </Segment>
      </Form>
      <Divider hidden />
      <Button color="orange" content="Login" icon="signup" type="submit" />
    </>
  );
};

export default Signup;

