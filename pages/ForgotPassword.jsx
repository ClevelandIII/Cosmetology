import React, { Component } from 'react'
import { Form, Header, Segment } from 'semantic-ui-react'

class FormExampleClearOnSubmit extends Component {
  state = {}


  handleSubmit = () => this.setState({ email: '', })

  render() {
    const { email } = this.state

    return (
      <Form className="loginComponent"  style={{
        width: "100px",
        margin: "0 auto",
        marginTop: "3rem",
        overflow: "scroll",
      }}  textAlign="center">
          <Header
          as="h2"
          color="orange"
          textAlign="center"
        >
          Enter Your Email
        </Header>
        <Segment>
        <Form.Group>
        <Form.Input
            required
            label="Email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.handleChange}
            icon="envelope"
            iconPosition="left"
            type="email"
            className="forgotPassword2"
            />
          
          <Form.Button content='Submit'className="forgotPassword3" />
        </Form.Group>
        </Segment>
      </Form>
    )
  }
}

export default FormExampleClearOnSubmit
