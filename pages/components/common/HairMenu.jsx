import React from "react";
import {  Button, Form } from "semantic-ui-react";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showForm: false };
  }

  showForm = () => {

    
    return (
      <>
 <Form
      style={{
        backgroundColor: "orange",
        marginTop: "100px",
        padding: "50px",
      }}
    >
      <Form.Group unstackable widths={3}>
        <Form.Input
          label="Hair Condition"
         
          placeholder="Hair Condition"
          style={{ width: "435px", height: "96px" }}
        />
        <Form.Input
          label="Hair Classification"
          
          placeholder="Hair Classification"
          style={{ width: "435px", height: "96px" }}
        />
        <Form.Input
          label="Scalp Condition"
        
          placeholder="Scalp Condition"
          style={{ width: "435px", height: "96px" }}
        />
      </Form.Group>

      <Form.Group unstackable widths={3}>
        <Form.Input
          label="Hair Texture"
         
          placeholder="Hair Texture"
          style={{ width: "435px", height: "96px" }}
        />
        <Form.Input
          label="Growth Patterns"
          
          placeholder="Growth Patterns"
          style={{ width: "435px", height: "96px" }}
        />
        <Form.Input
          label="Hair Density"
          
          placeholder="Hair Density"
          style={{ width: "435px", height: "96px" }}
        />
      </Form.Group>

      <Form.Group unstackable widths={3}>
        <Form.Input
          label="Hair Porosity"
          
          placeholder="Hair Porosity"
          style={{ width: "435px", height: "96px" }}
        />

        <Form.Input
          label="Hair Elasticity"
          
          placeholder="Hair Elasticity"
          style={{ width: "435px", height: "96px" }}
        />
        <Form.Input
          label="Hair Length"
         
          placeholder="Hair Length"
          style={{ width: "435px", height: "96px" }}
        />
      </Form.Group>
    </Form>
</>
    );
  };



  render() {

    
  
    return (
        <>
                 
        <Button
          onClick={() => {
            this.setState({showForm:true})
            
          }}
         style={{ marginLeft: "200px",height: "80px", width: "1200px"}}
          content="Hair Menu"
          color="navy blue"
        />
     
        {this.state.showForm ? this.showForm() : null}
        <button
          onClick={() => {
            this.setState({showForm:false})
            
          }}
          style={{ marginLeft: "200px",height: "80px", width: "1200px"}}
        >
          close
        </button>
      </>
    )
        
  }
}


export default App;