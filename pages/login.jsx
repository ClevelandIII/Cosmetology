import { useEffect, useState } from "react";
import {
  Form,
  Segment,
  Divider,
  Button,
  Message,
  Header,
  Image,
  Grid,
} from "semantic-ui-react";
import catchErrors from "./util/catchErrors";
import axios from "axios";
import { setToken } from "./util/auth";
import Cookies from "js-cookie";

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
    const email = Cookies.get("email");

    if (email) setStylist((prev) => ({ ...prev, email: email }));
  }, []);

  return (
    <>


      <Divider hidden />

      <Form
        loading={formLoading}
        error={errorMsg !== null}
        onSubmit={handleSubmit}
        style={{ margin: "0 auto" }}
        className="loginComponent"
        textAlign="center"
      >
              <Header as="h2" color="orange" textAlign="center" style={{textDecoration: "underline", textDecorationColor: "	#B8B8B8"}} >
        Log-in to your account
      </Header>
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
