import { Button, Divider, Form, Message, Segment } from "semantic-ui-react";
import { useState, useRef, useEffect } from "react";
import DragNDrop from "./components/common/DragNDrop";
import axios from "axios";
import catchErrors from "./util/catchErrors";
import { setToken } from "./util/auth";
let cancel;

const ClientCreator = () => {
  const [client, setClient] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    appointmentDate: "",
    serviceRequest: "",
  });

  const { firstName, lastName, email, age, appointmentDate, serviceRequest } =
    client;

  //* Form States */
  const [formLoading, setFormLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const [showPassword, setShowPassword] = useState(false);

  const inputRef = useRef(null);
  const [highlighted, setHighlighted] = useState(false);
  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);

  //* Functions */

  // Sets form loading to true while form is being submitted
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);

    try {
      const res = await axios.post("/api/v1/clientCreator", {
        client,
      });
      setToken(res.data);
    } catch (error) {
      const errorMsg = catchErrors(error);
      setErrorMsg(errorMsg);
    }
    setFormLoading(false);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "media" && files.length > 0) {
      setMedia(() => files[0]);
      setMediaPreview(() => URL.createObjectURL(files[0]));
      setHighlighted(true);
    } else {
      setClient((prev) => ({ ...prev, [name]: value }));
    }
  };

  //* USE EFFECTS */
  useEffect(() => {
    setSubmitDisabled(
      !(
        firstName &&
        lastName &&
        email &&
        age &&
        appointmentDate &&
        serviceRequest
      )
    );
  }, [client]);

  return (
    <>
      <Form
        style={{ width: "80vw", margin: "0 auto", marginTop: "3rem" }}
        loading={formLoading}
        error={errorMsg !== null}
        onSubmit={handleSubmit}
      >
        <Segment>
          {/* This is where you drag and drop/upload your profile picture */}
          <Message
            error
            content={errorMsg}
            header="There was an Error!"
            icon="meh"
          />
          <Form.Input
            required
            label="First name"
            placeholder="John"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            icon="user"
            iconPosition="left"
          />

          <Form.Input
            required
            label="Last name"
            placeholder="Doe"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            icon="user"
            iconPosition="left"
          />

          <Form.Input
            required
            label="Email"
            placeholder="johndoe@example.com"
            name="email"
            value={email}
            onChange={handleChange}
            icon="envelope"
            iconPosition="left"
            type="email"
          />

          <Form.Input
            required
            label="age"
            placeholder="age"
            name="age"
            value={age}
            onChange={handleChange}
            icon="birthday cake"
            iconPosition="left"
            type="text"
          />
          <Form.Input
            required
            label="appointment Date"
            placeholder={Date.now()}
            name="appointmentDate"
            value={appointmentDate}
            onChange={handleChange}
            icon="time"
            iconPosition="left"
          />
          <Form.Input
            label="serviceRequest"
            required
            placeholder="serviceRequest"
            name="serviceRequest"
            value={serviceRequest}
            onChange={handleChange}
            icon="user"
            iconPosition="left"
          ></Form.Input>
          <Button color="orange" content="Signup" icon="signup" type="submit" />
        </Segment>
      </Form>
      <Divider hidden />
    </>
  );
};

export default ClientCreator;

// import React, { useState } from "react";

// import { Button, Checkbox, Form, Dropdown } from "semantic-ui-react";
// import HairMenu from "../pages/components/common/HairMenu";

// const stateOptions = [
//   { key: "Alabama", value: "Alabama", text: "Alabama" },
//   { key: "Alaska", value: "Alaska", text: "Alaska" },
//   { key: "American Samoa", value: "American Samoa", text: "American Samoa" },
//   { key: "Arizona", value: "Arizona", text: "Arizona" },
//   { key: "Arkansas", value: "Arkansas", text: "Arkansas" },
//   { key: "California", value: "California", text: "California" },
//   { key: "Colorado", value: "Colorado", text: "Colorado" },
//   { key: "Connecticut", value: "Connecticut", text: "Connecticut" },
//   { key: "Delaware", value: "Delaware", text: "Delaware" },
//   {
//     key: "District of Columbia",
//     value: "District of Columbia",
//     text: "District of Columbia",
//   },
//   {
//     key: "Federated States of Micronesia",
//     value: "Federated States of Micronesia",
//     text: "Federated States of Micronesia",
//   },
//   { key: "Florida", value: "Florida", text: "Florida" },
//   { key: "Georgia", value: "Georgia", text: "Georgia" },
//   { key: "Guam", value: "Guam", text: "Guam" },
//   { key: "Hawaii", value: "Hawaii", text: "Hawaii" },
//   { key: "Idaho", value: "Idaho", text: "Idaho" },
//   { key: "Illinois", value: "Illinois", text: "Illinois" },
//   { key: "Indiana", value: "Indiana", text: "Indiana" },
//   { key: "Iowa", value: "Iowa", text: "Iowa" },
//   { key: "Kansas", value: "Kansas", text: "Kansas" },
//   { key: "Kentucky", value: "Kentucky", text: "Kentucky" },
//   { key: "Louisiana", value: "Louisiana", text: "Louisiana" },
//   { key: "Maine", value: "Maine", text: "Maine" },
//   {
//     key: "Marshall Islands",
//     value: "Marshall Islands",
//     text: "Marshall Islands",
//   },
//   { key: "Maryland", value: "Maryland", text: "Maryland" },
//   { key: "Massachusetts", value: "Massachusetts", text: "Massachusetts" },
//   { key: "Michigan", value: "Michigan", text: "Michigan" },
//   { key: "Minnesota", value: "Minnesota", text: "Minnesota" },
//   { key: "Mississippi", value: "Mississippi", text: "Mississippi" },
//   { key: "Missouri", value: "Missouri", text: "Missouri" },
//   { key: "Montana", value: "Montana", text: "Montana" },
//   { key: "Nebraska", value: "Nebraska", text: "Nebraska" },
//   { key: "Nevada", value: "Nevada", text: "Nevada" },
//   { key: "New Hampshire", value: "New Hampshire", text: "New Hampshire" },
//   { key: "New Jersey", value: "New Jersey", text: "New Jersey" },
//   { key: "New Mexico", value: "New Mexico", text: "New Mexico" },
//   { key: "New York", value: "New York", text: "New York" },
//   { key: "North Carolina", value: "North Carolina", text: "North Carolina" },
//   { key: "North Dakota", value: "North Dakota", text: "North Dakota" },
//   {
//     key: "Northern Mariana Islands",
//     value: "Northern Mariana Islands",
//     text: "Northern Mariana Islands",
//   },
//   { key: "Ohio", value: "Ohio", text: "Ohio" },
//   { key: "Oklahoma", value: "Oklahoma", text: "Oklahoma" },
//   { key: "Oregon", value: "Oregon", text: "Oregon" },
//   { key: "Palau", value: "Palau", text: "Palau" },
//   { key: "Pennsylvania", value: "Pennsylvania", text: "Pennsylvania" },
//   { key: "Puerto Rico", value: "Puerto Rico", text: "Puerto Rico" },
//   { key: "Rhode Island", value: "Rhode Island", text: "Rhode Island" },
//   { key: "South Carolina", value: "South Carolina", text: "South Carolina" },
//   { key: "South Dakota", value: "South Dakota", text: "South Dakota" },
//   { key: "Tennessee", value: "Tennessee", text: "Tennessee" },
//   { key: "Texas", value: "Texas", text: "Texas" },
//   { key: "Utah", value: "Utah", text: "Utah" },
//   { key: "Vermont", value: "Vermont", text: "Vermont" },
//   { key: "Virgin Island", value: "Virgin Island", text: "Virgin Island" },
//   { key: "Virginia", value: "Virginia", text: "Virginia" },
//   { key: "Washington", value: "Washington", text: "Washington" },
//   { key: "West Virginia", value: "West Virginia", text: "West Virginia" },
//   { key: "Wisconsin", value: "Wisconsin", text: "Wisconsin" },
//   { key: "Wyoming", value: "Wyoming", text: "Wyoming" },
// ];
// const ClientProfile = () => {
//   const [client, setClient] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     age: "",
//     appointmentDate: "",
//     serviceRequest: "",
//   });

//   const { firstName, lastName, email, age, appointmentDate, serviceRequest } =
//     client;

//   return (
//     <>
//       <Form>
//         <h3>Please Fill out the required fields</h3>

//         <Form.Group unstackable widths={3}>
//           <Form.Input
//             label="First name"
//             placeholder="First name"
//             style={{ width: "435px", height: "126px" }}
//           />
//           <Form.Input
//             label="Last name"
//             placeholder="Last name"
//             style={{ width: "435px", height: "126px" }}
//           />
//           <Form.Input
//             label="Age"
//             placeholder="Age"
//             style={{ width: "435px", height: "126px" }}
//           />
//         </Form.Group>

//         <Form.Group unstackable widths={3}>
//           <Form.Input
//             label="Appointment Date"
//             placeholder="Appointment Date"
//             style={{ width: "435px", height: "126px" }}
//           />
//           <Form.Input
//             label="Service Request"
//             placeholder="Service Request"
//             style={{ width: "435px", height: "126px" }}
//           />
//           <Form.Input
//             icon="medkit"
//             iconPosition="left"
//             size="big"
//             label="Medical Problems and/or Allergies"
//             placeholder="Medical Problems and/or Allergies"
//             style={{ width: "435px", height: "126px" }}
//           />
//         </Form.Group>

//         <Form.Group unstackable widths={3}>
//           <Form.Input
//             label="Address"
//             placeholder="Address"
//             style={{ width: "435px", height: "126px" }}
//           />
//           <Form.Input
//             label="City"
//             placeholder="City"
//             style={{ width: "435px", height: "126px" }}
//           />
//           <Dropdown
//             placeholder="Select State"
//             style={{ width: "435px", height: "126px", marginTop: "24px" }}
//             fluid
//             search
//             selection
//             options={stateOptions}
//           />
//         </Form.Group>

//         <Form.Group unstackable widths={3}>
//           <Form.Input
//             label="Zip Code"
//             placeholder="Zip Code"
//             style={{ width: "435px", height: "126px" }}
//           />

//           <Form.Input
//             icon="phone square"
//             iconPosition="left"
//             size="big"
//             label="Phone"
//             placeholder="(xxx)-xxx-xxx"
//             style={{ width: "435px", height: "126px" }}
//           />
//           <Form.Input
//             icon="mail"
//             iconPosition="left"
//             size="big"
//             label="Email"
//             placeholder="Email"
//             style={{ width: "435px", height: "126px" }}
//           />
//         </Form.Group>

//         <Form.Field>
//           <Checkbox
//             label="I agree to the Terms and Conditions"
//             style={{ marginTop: "20px", marginLeft: "50px" }}
//           />
//         </Form.Field>
//         <Button
//           type="submit"
//           style={{ marginLeft: "50px", height: "50px", width: "100px" }}
//         >
//           Submit
//         </Button>
//       </Form>
//       <HairMenu />
//     </>
//   );
// };

// export default ClientProfile;
