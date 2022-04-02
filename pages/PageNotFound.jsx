import React from "react";
import { Card, Grid, Icon, Image, Statistic, Message } from "semantic-ui-react";

//Very basic but better than normal 404 page. Not yet implemented
const PageNotFound = () => (
  <>
    <div
      style={{
        margin: "0",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
      }}
    >
      <h1>404 Page Not Found</h1>
      <p>
        This page doesn't exist. Try re-entering the page, or using the navbar,
        which has all the pages.
      </p>
    </div>

    {/* <Grid
      verticalAlign="middle"
      style={{ backgroundColor: "red", height: "100%", margin: "0" }}
    >
      <Grid.Column textAlign="center">
        <Statistic inverted>
          <Statistic.Value>404</Statistic.Value>
          <Statistic.Label>Error</Statistic.Label>
        </Statistic>

        <Message color="red" inverted>
          <Message.Header>Description</Message.Header>
          <p>Not found</p>
        </Message>
      </Grid.Column>
    </Grid> */}
  </>
);

export default PageNotFound;
