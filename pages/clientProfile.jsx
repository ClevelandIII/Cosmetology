// import {
//     Button,
//     Divider,
//     Form,
//     Message,
//     Segment,
//     Dropdown,
//     Checkbox,
//   } from "semantic-ui-react";
//   import { useState, useRef, useEffect } from "react";
//   import axios from "axios";
//   import catchErrors from "./util/catchErrors";
//   import { setToken } from "./util/auth";
//   import React, { useState } from "react";
//   import HairMenu from "../pages/components/common/HairMenu";
  
//   let cancel;
  
//   const ClientCreator = () => {
//     const [client, setClient] = useState({
//       firstName: "",
//       lastName: "",
//       email: "",
//       age: "",
//       appointmentDate: "",
//       serviceRequest: "",
//     });
  
//     const { firstName, lastName, email, age, appointmentDate, serviceRequest } =
//       client;
  
//     //* Form States */
//     const [formLoading, setFormLoading] = useState(false);
//     const [errorMsg, setErrorMsg] = useState(null);
//     const [submitDisabled, setSubmitDisabled] = useState(true);
  
//     const [showPassword, setShowPassword] = useState(false);
  
//     const inputRef = useRef(null);
//     const [highlighted, setHighlighted] = useState(false);
//     const [media, setMedia] = useState(null);
//     const [mediaPreview, setMediaPreview] = useState(null);
  
//     //* Functions */
  
//     // Sets form loading to true while form is being submitted
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       setFormLoading(true);
  
//       try {
//         const res = await axios.post("/api/v1/client/clientCreator", {
//           client,
//         });
//         setToken(res.data);
//       } catch (error) {
//         const errorMsg = catchErrors(error);
//         setErrorMsg(errorMsg);
//       }
//       setFormLoading(false);
//     };
  
//     const handleChange = (e) => {
//       const { name, value, files } = e.target;
  
//       if (name === "media" && files.length > 0) {
//         setMedia(() => files[0]);
//         setMediaPreview(() => URL.createObjectURL(files[0]));
//         setHighlighted(true);
//       } else {
//         setClient((prev) => ({ ...prev, [name]: value }));
//       }
//     };
  
//     //* USE EFFECTS */
//     useEffect(() => {
//       setSubmitDisabled(
//         !(
//           firstName &&
//           lastName &&
//           email &&
//           age &&
//           appointmentDate &&
//           serviceRequest
//         )
//       );
//     }, [client]);
  
//     return (
//       <>
//         <Form
//           style={{ width: "80vw", margin: "0 auto", marginTop: "3rem" }}
//           loading={formLoading}
//           error={errorMsg !== null}
//           onSubmit={handleSubmit}
//         >
//           <Segment>
//             {/* This is where you drag and drop/upload your profile picture */}
//             <Message
//               error
//               content={errorMsg}
//               header="There was an Error!"
//               icon="meh"
//             />
//             <Form.Input
//               required
//               label="First name"
//               placeholder="John"
//               name="firstName"
//               value={firstName}
//               onChange={handleChange}
//               icon="user"
//               iconPosition="left"
//             />
  
//             <Form.Input
//               required
//               label="Last name"
//               placeholder="Doe"
//               name="lastName"
//               value={lastName}
//               onChange={handleChange}
//               icon="user"
//               iconPosition="left"
//             />
  
//             <Form.Input
//               required
//               label="Email"
//               placeholder="johndoe@example.com"
//               name="email"
//               value={email}
//               onChange={handleChange}
//               icon="envelope"
//               iconPosition="left"
//               type="email"
//             />
  
//             <Form.Input
//               required
//               label="age"
//               placeholder="age"
//               name="age"
//               value={age}
//               onChange={handleChange}
//               icon="birthday cake"
//               iconPosition="left"
//               type="text"
//             />
//             <Form.Input
//               required
//               label="appointment Date"
//               placeholder={Date.now()}
//               name="appointmentDate"
//               value={appointmentDate}
//               onChange={handleChange}
//               icon="time"
//               iconPosition="left"
//             />
//             <Form.Input
//               label="serviceRequest"
//               required
//               placeholder="serviceRequest"
//               name="serviceRequest"
//               value={serviceRequest}
//               onChange={handleChange}
//               icon="user"
//               iconPosition="left"
//             ></Form.Input>
//             <Button color="orange" content="Signup" icon="signup" type="submit" />
//           </Segment>
//         </Form>
//         <Divider hidden />
//       </>
//     );
//   };
  
//   export default ClientCreator;
  