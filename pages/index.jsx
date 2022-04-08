import axios from "axios";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { Grid, Divider, Button, Dropdown } from "semantic-ui-react";
import { baseURL } from "./util/auth";

const index = ({ stylist }) => {
  useEffect(() => {
    document.title = `Welcome, ${stylist.firstName.split(" ")[0]}`;
  })
  // document.title = `Welcome, ${stylist.firstName.split(" ")[0]}`;
  document.title = "Welcome Stylist";
  const Options = [
    {
      key: "Number of Visits",
      text: "Number of Visits",
      value: "Number of Visits",
    },
    {
      key: "Date Created",
      text: "Date Created",
      value: "Date Created",
    },
    {
      key: "Most Recently Created",
      text: "Most Recently Created",
      value: "Most Recently Created",
    },
    {
      key: "Name",
      text: "Name",
      value: "Name",
    },
  ];

  return (
    <div style={{ padding: "2rem", textAlign: "center" }} stylist={stylist}>
      <Grid>
        <Grid.Row style={{ marginLeft: "32%" }}>
          {`Welcome ${stylist}.`} To get started, add a new visitor, or update a
          visitor from the list below.
        </Grid.Row>
        <Divider hidden />
        <Grid.Row style={{ marginLeft: "44.5%" }}>
          <Button>Add New Visitor</Button>
        </Grid.Row>
      </Grid>
      <Divider hidden />
      <Grid stackable style={{ padding: "3rem" }}>
        <Grid.Row style={{ paddingLeft: "42%" }}>
          <div style={{ textAlign: "center" }}>
            <h1>Previous Clients</h1>
            <Dropdown
              placeholder="Sort By..."
              fluid
              selection
              options={Options}
            />
          </div>
        </Grid.Row>
        <Divider hidden />
        <Grid.Row
          style={{
            border: "1px solid white",
            height: "35rem",
            background: "orange",
            color: "white",
            textAlign: "center",
          }}
        >
          <Grid.Column
            width={4}
            style={{
              color: "white",
              margin: "2rem",
            }}
          >
            <Grid.Row>
              <h2>Client Name</h2>
            </Grid.Row>
            <Divider hidden />
            <Grid.Row
              style={{
                backgroundColor: "#d1d1d1",
                height: "80%",
              }}
            ></Grid.Row>
          </Grid.Column>
          <Grid.Column
            width={5}
            style={{
              color: "white",
              margin: "2rem",
            }}
          >
            <Grid.Row>
              <h2>First Added</h2>
            </Grid.Row>
            <Divider hidden />
            <Grid.Row
              style={{
                backgroundColor: "#d1d1d1",
                height: "80%",
              }}
            ></Grid.Row>
          </Grid.Column>
          <Grid.Column
            width={5}
            style={{
              color: "white",
              margin: "2rem",
            }}
          >
            <Grid.Row>
              <h2>Most Recent Appointment</h2>
            </Grid.Row>
            <Divider hidden />
            <Grid.Row
              style={{
                backgroundColor: "#d1d1d1",
                height: "80%",
              }}
            ></Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default index;
