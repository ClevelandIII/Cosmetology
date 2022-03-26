import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const ClientProfile = () => (
  <Form>
      <h3>Please Fill out the required fields</h3>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <label>Birthday</label>
      <input placeholder='Birthday' />
    </Form.Field>
    <Form.Field>
      <label>Appointment Date</label>
      <input placeholder='Appointment Date' />
    </Form.Field>
    <Form.Field>
      <label>Service Request:</label>
      <input placeholder='Service Request' />
    </Form.Field>
    <Form.Field>
      <label>Medical Problems and/or Allergies</label>
      <input placeholder='Medical Problems and/or Allergies' />
    </Form.Field>
    <Form.Field>
      <label>Address</label>
      <input placeholder='Address' />
    </Form.Field>
    <Form.Field>
      <label>City</label>
      <input placeholder='City' />
    </Form.Field>
    <Form.Field>
      <label>State</label>
      <input placeholder='State' />
    </Form.Field>
    <Form.Field>
      <label>Zip Code</label>
      <input placeholder='Zip Code' />
    </Form.Field>
    <Form.Field>
      <label>Phone</label>
      <input placeholder='Phone' />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input placeholder='Email' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default ClientProfile