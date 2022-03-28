import React from "react";
import { Divider } from "semantic-ui-react";
import { Form, Segment, Button } from "semantic-ui-react";

const Login = () => {
  return (
    <>
      <Form>
        <Segment>
          <Form.Input
            required
            label="Email"
            placeholder="Email"
            value={email}
            name="email"
            type="email"
          ></Form.Input>
          <Form.Input
            required
            label="Password"
            placeholder="Password"
            value={password}
            name="password"
          ></Form.Input>
          <Divider hidden />
          <Button color="white" content="Login" icon="signup" type="submit" />
        </Segment>
      </Form>
    </>
  );
};

export default Login;
