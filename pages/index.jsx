import axios from "axios";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { baseURL } from "./util/auth";
<<<<<<< HEAD
import { Grid, Divider, Button, Dropdown } from "semantic-ui-react";
=======
import {
  Grid,
  Divider,
  Button,
  Dropdown,
  Route,
  Menu,
  Icon,
} from "semantic-ui-react";
>>>>>>> 6c8fada2362b50ca72537585b5052d829bcdf724
import Link from "next/link";

const index = ({ stylist }) => {
  useEffect(() => {
    document.title = `Welcome, ${stylist.firstName}`;
  }, []);
<<<<<<< HEAD
  const name = stylist.firstName;

=======

  // document.title = "Welcome Stylist";
>>>>>>> 6c8fada2362b50ca72537585b5052d829bcdf724
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

  //Ninja Coding!!! Yaaa! No but actually all the classnames are mini in order, and those are for organization with ipad css
  return (
    <div
      style={{ padding: "2rem", textAlign: "center" }}
      stylist={stylist.firstName}
    >
      <Grid style={{ textAlign: "center" }}>
        <Grid.Row style={{ width: "100%" }} className="mini">
          <p>
<<<<<<< HEAD
            {`Welcome, ${name}. `}To get started, add a new visitor, or update a
            visitor from the list below.
=======
            {`Welcome ${stylist.firstName}.`} To get started, add a new visitor,
            or update a visitor from the list below.
>>>>>>> 6c8fada2362b50ca72537585b5052d829bcdf724
          </p>
        </Grid.Row>
        <Divider hidden />
        <Link href="/clientProfile">
          <Grid.Row className="mini2">
<<<<<<< HEAD
            <Button as="a" href="/clientProfile">
              Add New Visitor
            </Button>
          </Grid.Row>
        </Link>
        {/* <a href="/gg">click me</a> */}
=======
            <Button>New Visitor</Button>
          </Grid.Row>
        </Link>
>>>>>>> 6c8fada2362b50ca72537585b5052d829bcdf724
      </Grid>
      <Divider hidden />
      <Grid stackable style={{ padding: "3rem" }}>
        <Grid.Row className="mini3">
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
            justifyContent: "space-between",
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
            width={4}
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
            width={4}
            style={{
              color: "white",
              margin: "2rem",
            }}
          >
            <Grid.Row>
              <h2>Latest Visit</h2>
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
