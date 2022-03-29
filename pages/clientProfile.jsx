import React, { useState } from "react";
import { Button, Checkbox, Form, Icon } from "semantic-ui-react";

const ClientProfile = () => {
  const [user, setUser] = useState(false);

  return (
    <>
      <Form>
        <h3>Please Fill out the required fields</h3>

        <Form.Group unstackable widths={3}>
          <Form.Input
            label="First name"
            placeholder="First name"
            style={{ width: "435px", height: "126px" }}
          />
          <Form.Input
            label="Last name"
            placeholder="Last name"
            style={{ width: "435px", height: "126px" }}
          />
          <Form.Input
            label="Age"
            placeholder="Age"
            style={{ width: "435px", height: "126px" }}
          />
        </Form.Group>

        <Form.Group unstackable widths={3}>
          <Form.Input
            label="Appointment Date"
            placeholder="Appointment Date"
            style={{ width: "435px", height: "126px" }}
          />
          <Form.Input
            label="Service Request"
            placeholder="Service Request"
            style={{ width: "435px", height: "126px" }}
          />
          <Form.Input
          icon="medkit"
          iconPosition="left"
          size="big"
            label="Medical Problems and/or Allergies"
            placeholder="Medical Problems and/or Allergies"
            style={{ width: "435px", height: "126px" }}
          />
        </Form.Group>

        <Form.Group unstackable widths={3}>
          <Form.Input
            label="Address"
            placeholder="Address"
            style={{ width: "435px", height: "126px" }}
          />
          <Form.Input
            label="City"
            placeholder="City"
            style={{ width: "435px", height: "126px" }}
          />
          <Form.Input
            label="State"
            placeholder="State"
            style={{ width: "435px", height: "126px" }}
          />
        </Form.Group>

        <Form.Group unstackable widths={3}>
          <Form.Input
            label="Zip Code"
            placeholder="Zip Code"
            style={{ width: "435px", height: "126px" }}
          />
         
          <Form.Input
           icon="phone square"
           iconPosition="left"
           size="big"
            label="Phone"
            placeholder="(xxx)-xxx-xxx"
            style={{ width: "435px", height: "126px" }}
            
          />
          <Form.Input
           icon="mail"
           iconPosition="left"
           size="big"
            label="Email"
            placeholder="Email"
            style={{ width: "435px", height: "126px" }}
          />

          
        </Form.Group>

        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
};

export default ClientProfile;
