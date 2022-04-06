import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Form, Segment, Divider, Button, Message } from "semantic-ui-react";
import axios from "axios";
import { setToken } from "./util/auth";
import catchErrors from "./util/catchErrors";

const Login = () => {
  const [stylist, setStylist] = useState({
    email: "",
    password: "",
  });

  const { email, password } = stylist;
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  //* Handlers ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStylist((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormLoading(true);

    try {
      const res = await axios.post("/api/v1/user/login", { stylist });
      setToken(res.data);
    } catch (error) {
      console.log(error);
      const errorMsg = catchErrors(error);
      setErrorMsg(errorMsg);
    }

    setFormLoading(false);
  };

  //* UseEffects ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

  useEffect(() => {
    setSubmitDisabled(!(email && password));
  }, [stylist]);
  useEffect(() => {
    document.title = "Welcome Back";
    const stylistEmail = Cookies.get("stylistEmail");
    if (stylistEmail) setStylist((prev) => ({ ...prev, email: stylistEmail }));
  }, []);

  return (
    <>
      {/* <img src="https://i.postimg.cc/RFDtVvtb/cosmetology-Logo.png" /> */}
      <Divider hidden />
      {/* <img src="https://i.postimg.cc/RFDtVvtb/cosmetology-Logo.png" />;
      <Divider />
      <img src="https://i.postimg.cc/RFDtVvtb/cosmetology-Logo.png" />;
      <Divider />
      <img src="https://i.postimg.cc/RFDtVvtb/cosmetology-Logo.png" />; */}
      <Form
        loading={formLoading}
        error={errorMsg !== null}
        onSubmit={handleSubmit}
      >
        <Message
          error
          header="Oops!"
          content={errorMsg}
          onDismiss={() => setErrorMsg(null)}
        />
        <Segment>
          <Form.Input
            required
            label="Email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
            icon="envelope"
            iconPosition="left"
            type="email"
          ></Form.Input>
          <Form.Input
            required
            label="Password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
            icon={{
              name: showPassword ? "eye slash" : "eye",
              circular: true,
              link: true,
              onClick: () => setShowPassword(!showPassword),
            }}
            iconPosition="left"
            type={showPassword ? "text" : "password"}
          />
          <Divider hidden />
          <Button
            color="orange"
            content="Login"
            icon="signup"
            type="submit"
            disabled={submitDisabled}
            className="loginButton"
          />
        </Segment>
      </Form>
    </>
  );
};

export default Login;
