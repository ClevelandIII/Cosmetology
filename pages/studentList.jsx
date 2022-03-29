import { Grid, Image, Divider, Container, Loader } from "semantic-ui-react";

import React from "react";


const studentList = () => {
  return (
    <>
      <Grid columns="four" divided>
        <Grid.Row style={{
            borderBottom: "2px solid navy",
            // height: "35rem",
            background: "orange",
            color: "white",
            justifyContent: "space-evenly"
          }}>
          <Grid.Column style={{background:"white", color:"black", width:"20rem", borderRight:"1rem solid orange", textAlign:"center"}}>name</Grid.Column>
          <Grid.Column style={{background:"white", color:"black", width:"20rem", borderRight:"1rem solid orange", textAlign:"center"}}>teacher</Grid.Column>
          <Grid.Column style={{background:"white", color:"black", width:"20rem", borderRight:"1rem solid orange", textAlign:"center"}}>date create</Grid.Column>
          <Grid.Column style={{background:"white", color:"black", width:"20rem", borderRight:"1rem solid orange", textAlign:"center"}}>date upload</Grid.Column>
        </Grid.Row>
        
        <Grid.Row style={{
            // borderLeft: "20px solid navy",
            // borderRight: "20px solid navy",
            height: "9rem",
            background: "orange",
            color: "white",
            textAlign: "center",
            // justifyContent: "center"
          }}>
          <Grid.Column>beep bop</Grid.Column>
          <Grid.Column>ms.skddo bep</Grid.Column>
          <Grid.Column>4/20/69</Grid.Column>
          <Grid.Column>2/4/70</Grid.Column>

          <Grid.Column>beep bop</Grid.Column>
          <Grid.Column>ms.skddo bep</Grid.Column>
          <Grid.Column>4/20/69</Grid.Column>
          <Grid.Column>2/4/70</Grid.Column>

        </Grid.Row>
      </Grid>
    </>
  );
};

export default studentList;
