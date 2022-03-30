import {
  Grid,
  Image,
  Divider,
  Container,
  Loader,
  Card,
} from "semantic-ui-react";

import React from "react";

const clientList = () => {
  return (
    <>
      <Container centered className="clientList" >
        <Grid centered stackable style={{ margin: "3rem" }}>
          <Grid.Column
            width={7}
            style={{ textAlign: "center", marginTop: "10rem" }}
          >
            <Grid.Row
              style={{
                border: "1px solid white",
                height: "5rem",
                color: "black",
                textAlign: "center",
                paddingTop: "1.2rem",
              }}
              className="cListHeader"
            >
              <h1>Client List</h1>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
};

export default clientList;
