import { useEffect, useState } from "react";
import {
  Form,
  Segment,
  Divider,
  Button,
  Message,
  Header,
} from "semantic-ui-react";
import catchErrors from "./util/catchErrors";
import axios from "axios";
import { setToken } from "./util/auth";
import Cookies from "js-cookie";
import Link from "next/link";
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { accountService } from "./_services/account.service";
import { alertService } from "./_services/alert.service";
const Login = ({ history, location }) => {
  const [stylist, setStylist] = useState({
    email: "",
    password: "",
  });

  const initialValues = {
    email: '',
    password: ''
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
  password: Yup.string().required('Password is required')
});

function onSubmit({ email, password }, { setSubmitting }) {
  alertService.clear();
  accountService.login(email, password)
      .then(() => {
          const { from } = location.state || { from: { pathname: "/" } };
          history.push(from);
      })
      .catch(error => {
          setSubmitting(false);
          alertService.error(error);
      });
}

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
      const res = await axios.post("/api/v1/user/login", { email, password });
      setToken(res.data);
      console.log("User Logged In");
    } catch (error) {
      console.log(error);
      console.log("User Login Error");

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
    const email = Cookies.get("stylistEmail");

    if (email) setStylist((prev) => ({ ...prev, email }));
  }, []);

  const divStyle = {
    overflowY: "hidden",
  };

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
        <Header
          as="h2"
          color="orange"
          textAlign="center"
          style={{
            textDecoration: "underline",
            textDecorationColor: "	#B8B8B8",
          }}
        >
          Log-in to your account
        </Header>
        <Message
          error
          header="Oops!"
          content={errorMsg}
          onDismiss={() => setErrorMsg(null)}
        />
        <Segment>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {({ errors, touched }) => (
            <>
          <Form.Input
            required
            label="Email"
            placeholder="Email"
            name="email"
            value={email}
            className={(errors.email && touched.email ? ' is-invalid' : '')}
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
            className={(errors.password && touched.password ? ' is-invalid' : '')}
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
          </>
          )}
          </Formik>
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
        <Link href="/ForgotPassword" ><p className="forgotPassword"> Forgot Password ?</p></Link>
      </Form>
    </>
  );
};

export default Login;
