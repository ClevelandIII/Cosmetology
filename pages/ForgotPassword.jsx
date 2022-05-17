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

// {({ isSubmitting }) => (
// <Button type="submit" disabled={isSubmitting}  content="Submit"
//               className="forgotPassword3"
//               >
//                                     {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
//                                     Submit
//                                 </Button>
//                                 )}
//           </form>
//         </Form.Group>
//       </Segment>
//       <Button href="/login">Back To Login</Button>
//     </Form>
//   );
// }

import React, { useState } from "react";
import { Form, Header, Segment, Button } from "semantic-ui-react";
import axios from "axios";
// import Form from "../pages/components copy/Form";
// import Row from "../pages/components copy/Row";
// import Input from "../pages/components c    sopy/Input";
// import Button from "../pages/components copy/Button";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      email,
    };
    axios({
      url: "/auth/forgot",
      data: body,
      method: "post",
    }).then((res) => {
      setEmailSent(true);
    });
  };

  let body;
  if (emailSent) {
    body = <span>An email with reset instructions is on its way</span>;
  } else {
    body = (
      // <Form onSubmit={submitHandler}>
      //     <Row>
      //         <Input
      //             name="email"
      //             placeholder="email"
      //             type="text"
      //             value={email}
      //             onChange={e => setEmail(e.target.value)}
      //         />
      //     </Row>
      //     <Row>
      //         <Button>Get reset link</Button>
      //     </Row>
      // </Form>

      <Form
        className="loginComponent"
        style={{
          width: "100px",
          margin: "0 auto",
          marginTop: "3rem",
        }}
        textAlign="center"
        onSubmit={submitHandler}
      >
        <Header as="h2" color="orange" textAlign="center">
          Enter Your Email
        </Header>
        <Segment>
          <Form.Group>
            <Form.Input
              required
              label="Email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              icon="envelope"
              iconPosition="left"
              type="email"
              className="forgotPassword2"
            />

            <Form.Button
              content="Submit"
              className="forgotPassword3"
              type="submit"
            />
          </Form.Group>
        </Segment>
        <Button href="/login">Back To Login</Button>
      </Form>
    );
  }

  return body;
};

export default ForgotPassword;
