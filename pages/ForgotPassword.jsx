// import React from "react";
// import emailjs from "@emailjs/browser";
// import { Form, Header, Segment, Button } from "semantic-ui-react";

// export default function FormExampleClearOnSubmit() {
//   function sendEmail(e) {
//     e.preventDefault();

//     emailjs
//       .sendForm("gmail", "template_ncqog7g", e.target, "rYtYO3hXAgyqGhX3V")
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//     e.target.reset();
//   }

//   return (
//     <Form
//       className="loginComponent"
//       style={{
//         width: "100px",
//         margin: "0 auto",
//         marginTop: "3rem",
//       }}
//       textAlign="center"
//     >
//       <Header as="h2" color="orange" textAlign="center">
//         Enter Your Email
//       </Header>
//       <Segment>
//         <Form.Group>
//           <form onSubmit={sendEmail}>
            
//             <Form.Input type="text" name="user_name" label="Name"  className="forgotPassword2" placeholder="Name"/>
//             <Form.Input
//               required
//               label="Email"
//               placeholder="Email"
//               name="email"
//               icon="envelope"
//               iconPosition="left"
//               type="email"
//               className="forgotPassword2"
//             />


//             <Form.Button
//               content="Submit"
//               className="forgotPassword3"
//               type="submit"
//             />
//           </form>
//         </Form.Group>
//       </Segment>
//       <Button href="/login">Back To Login</Button>
//     </Form>
//   );
// }

// // /* eslint-disable no-console */
// // import React, { Component} from 'react';
// // import TextField from '@material-ui/core/TextField';
// // import axios from 'axios';
// // import LinkButtons from './components/LinkButtons';
// // import SubmitButtons from './components/SubmitButtons';
// // import HeaderBar from './components/HeaderBar'
// // import inputStyle from './components/ButtonStyles'
// // import forgotButton from './components/ButtonStyles'
// // import homeButton from './components/ButtonStyles'
// // import registerButton from './components/ButtonStyles'

// // // import {

// // //   registerButton,
// // //   homeButton,
// // //   forgotButton,
// // //   inputStyle,
// // //   HeaderBar,
// // // } from '../pages/components';

// // const title = {
// //   pageTitle: 'Forgot Password Screen',
// // };

// // class ForgotPassword extends Component {
// //   constructor() {
// //     super();

// //     this.state = {
// //       email: '',
// //       showError: false,
// //       messageFromServer: '',
// //       showNullError: false,
// //     };
// //   }

// //   handleChange = name => (event) => {
// //     this.setState({
// //       [name]: event.target.value,
// //     });
// //   };

// //   sendEmail = async (e) => {
// //     e.preventDefault();
// //     const { email } = this.state;
// //     if (email === '') {
// //       this.setState({
// //         showError: false,
// //         messageFromServer: '',
// //         showNullError: true,
// //       });
// //     } else {
// //       try {
// //         const response = await axios.post(
// //           'http://localhost:3003/forgotPassword',
// //           {
// //             email,
// //           },
// //         );
// //         console.log(response.data);
// //         if (response.data === 'recovery email sent') {
// //           this.setState({
// //             showError: false,
// //             messageFromServer: 'recovery email sent',
// //             showNullError: false,
// //           });
// //         }
// //       } catch (error) {
// //         console.error(error.response.data);
// //         if (error.response.data === 'email not in db') {
// //           this.setState({
// //             showError: true,
// //             messageFromServer: '',
// //             showNullError: false,
// //           });
// //         }
// //       }
// //     }
// //   };

// //   render() {
// //     const {
// //  email, messageFromServer, showNullError, showError
// // } = this.state;

// //     return (
// //       <div>
// //         <HeaderBar title={title} />
// //         <form className="profile-form" onSubmit={this.sendEmail}>
// //           <TextField
// //             style={inputStyle}
// //             id="email"
// //             label="email"
// //             value={email}
// //             onChange={this.handleChange('email')}
// //             placeholder="Email Address"
// //           />
// //           <SubmitButtons
// //             buttonStyle={forgotButton}
// //             buttonText="Send Password Reset Email"
// //           />
// //         </form>
// //         {showNullError && (
// //           <div>
// //             <p>The email address cannot be null.</p>
// //           </div>
// //         )}
// //         {showError && (
// //           <div>
// //             <p>
// //               That email address isn&apos;t recognized. Please try again or
// //               register for a new account.
// //             </p>
// //             <LinkButtons
// //               buttonText="Register"
// //               buttonStyle={registerButton}
// //               link="/register"
// //             />
// //           </div>
// //         )}
// //         {messageFromServer === 'recovery email sent' && (
// //           <div>
// //             <h3>Password Reset Email Successfully Sent!</h3>
// //           </div>
// //         )}
// //         <LinkButtons buttonText="Go Home" buttonStyle={homeButton} link="/" />
// //       </div>
// //     );
// //   }
// // }

// // export default ForgotPassword;

// // import React, { Component, useState} from "react";

// // // import { Form, Header, Segment, Button } from 'semantic-ui-react'

// // import TextField from "@material-ui/core/TextField";

// // import SubmitButtons from "../pages/components/SubmitButtons";

// // class FormExampleClearOnSubmit extends Component {

// //   state = {};

// //   sendEmail = async (e) => {

// //     e.preventDefault();

// //     const { email, password } = stylist;

// //     if (email === "") {

// //       this.setState({

// //         showError: false,

// //         messageFromServer: "",

// //         showNullError: true,

// //       });

// //     } else {

// //       try {

// //         const response = await axios.post(

// //           "http://localhost:3001/api/v1/forgotPassword", {email}

// //         );

// //         console.log(response.data);

// //         if (response.data === "recovery email sent") {

// //           this.setState({

// //             showError: false,

// //             messageFromServer: "recovery email sent",

// //             showNullError: false,

// //           });

// //         }

// //       } catch (error) {

// //         console.error(error.response.data);

// //         if (error.response.data === "email not in db") {

// //           this.setState({

// //             showError: true,

// //             messageFromServer: "",

// //             showNullError: false,

// //           });

// //         }

// //       }

// //     }

// //   };

// //   handleChange = (name) => (event) => {

// //     this.setState({

// //       [name]: event.target.value,

// //     });

// //   };

// //   render() {

// //     const { email, messageFromServer, showNullError, showError } = this.state;

// //     return (

// //       <div>

// //         <form onSubmit={this.sendEmail}>

// //           <TextField

// //             id="email"

// //             label="email"

// //             value={email}

// //             onChange={this.handleChange("email")}

// //             placeholder="Email Address"

// //           />

// //           <SubmitButtons buttonText="Send Password Reset Email" />

// //           {showNullError && (

// //             <div>

// //               <p>The email address cannot be null.</p>

// //             </div>

// //           )}

// //         </form>

// //       </div>

// //     );

// //   }

// // }

// // export default FormExampleClearOnSubmit;


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

const ForgotPassword = () => {
  const [stylist, setStylist] = useState({
    email: "",
    password: "",
  });

  const { email } = stylist;
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
      const res = await axios.post("/api/v1/user/login", { email });
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
    setSubmitDisabled(!(email));
  }, [stylist]);

  useEffect(() => {
    document.title = "Welcome Back";
    const email = Cookies.get("stylistEmail");

    if (email) setStylist((prev) => ({ ...prev, email }));
  }, []);

 function resetPassword(email){
   return auth.sendPasswordResetEmail(email)
 }



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
          Password Reset
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
          <Divider hidden />
          <Button
            color="orange"
            content="Reset Password"
            icon="unlock alternate"
            type="submit"
            disabled={submitDisabled}
            className="loginButton"
          />
        </Segment>
        <Link href="/login" ><p className="forgotPassword"> Login</p></Link>
      </Form>
    </>
  );
};

export default ForgotPassword;
