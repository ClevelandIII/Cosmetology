import { Grid, Image, Divider, Container, Loader } from "semantic-ui-react";

import React from "react";

const studentList = () => {
  return (
    <>
      <Grid columns="four" divided>
        <Grid.Row>
          <Grid.Column>name</Grid.Column>
          <Grid.Column>teacher</Grid.Column>
          <Grid.Column>date create</Grid.Column>
          <Grid.Column>date upload</Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default studentList;
