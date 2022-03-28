import React from "react";
import { Form, Segment, Divider, Button, Message } from "semantic-ui-react";


const login = () => {
  return (
    <>
      <img src="https://i.postimg.cc/RFDtVvtb/cosmetology-Logo.png" />
      <Divider />
      {/* <img src="https://i.postimg.cc/RFDtVvtb/cosmetology-Logo.png" />;
      <Divider />
      <img src="https://i.postimg.cc/RFDtVvtb/cosmetology-Logo.png" />;
      <Divider />
      <img src="https://i.postimg.cc/RFDtVvtb/cosmetology-Logo.png" />; */}
      <Form>
        <Segment>
          <Form.Input
            required
            label="Email"
            placeholder="Email"
            // value={email}
            name="email"
            type="email"
          ></Form.Input>
          <Form.Input
            required
            label="Password"
            placeholder="Password"
            // value={password}
            name="password"
          ></Form.Input>
          <Divider hidden />
          <Button color="white" content="Login" icon="signup" type="submit" />
        </Segment>
      </Form>
    </>
  );
};

export default login;
