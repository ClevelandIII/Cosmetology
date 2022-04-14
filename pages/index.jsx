import axios from "axios";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { baseURL } from "./util/auth";
import {
  Grid,
  Divider,
  Button,
  Dropdown,
  Route,
  Menu,
  Icon,
} from "semantic-ui-react";
import Link from "next/link";

const index = ({ stylist }) => {
  useEffect(() => {
    document.title = `Welcome, ${stylist.firstName}`;
  }, []);

  // document.title = "Welcome Stylist";
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
            {`Welcome ${stylist.firstName}.`} To get started, add a new visitor,
            or update a visitor from the list below.
          </p>
        </Grid.Row>
        <Divider hidden />
        <Link href="/clientCreator">
          <Grid.Row className="mini2">
            ""
            <Button>New Visitor</Button>
          </Grid.Row>
        </Link>
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
            
          {/* ~~~~~~~~~~~~~~~~~~~~~~~Client Name~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

          <Grid.Column className="clientListColumn"
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
            <Grid.Row className="clientListRow">William gill</Grid.Row>
            <Grid.Row className="clientListRow">Daniel Nijdl</Grid.Row>
            <Grid.Row className="clientListRow">Cleveland Williams</Grid.Row>
            <Grid.Row className="clientListRow">Jason Enciso</Grid.Row>
            <Grid.Row className="clientListRow">Abdi Torres</Grid.Row>
            <Grid.Row className="clientListRow">Joshua Ruvalcaba</Grid.Row>
            <Grid.Row className="clientListRow">Rando Filler</Grid.Row>
            <Grid.Row className="clientListRow">first Last</Grid.Row>
            <Grid.Row className="clientListRow">first Last</Grid.Row>
            <Grid.Row className="clientListRow">first Last</Grid.Row>
            <Grid.Row className="clientListRow">first Last</Grid.Row>
            <Grid.Row className="clientListRow">first Last</Grid.Row>
            <Grid.Row className="clientListRow">first Last</Grid.Row>
            <Grid.Row className="clientListRow">first Last</Grid.Row>
            <Grid.Row className="clientListRow">first Last</Grid.Row>
            <Grid.Row className="clientListRow">first Last</Grid.Row>
            <Grid.Row className="clientListRow">first Last</Grid.Row>
            


          </Grid.Column>

          {/* ~~~~~~~~~~~~~~~~~~~~~~~First Added~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

          <Grid.Column className="clientListColumn"
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
            <Grid.Row className="clientListRow">4/13/22</Grid.Row>
            <Grid.Row className="clientListRow">4/14/22</Grid.Row>
            <Grid.Row className="clientListRow">4/18/22</Grid.Row>
            <Grid.Row className="clientListRow">5/15/22</Grid.Row>
            <Grid.Row className="clientListRow">12/13/22</Grid.Row>
            <Grid.Row className="clientListRow">1/30/22</Grid.Row>
            <Grid.Row className="clientListRow">4/20/22</Grid.Row>
            <Grid.Row className="clientListRow">1/2/34</Grid.Row>
            <Grid.Row className="clientListRow">1/2/34</Grid.Row>
            <Grid.Row className="clientListRow">1/2/34</Grid.Row>
            <Grid.Row className="clientListRow">1/2/34</Grid.Row>
            <Grid.Row className="clientListRow">1/2/34</Grid.Row>
            <Grid.Row className="clientListRow">1/2/34</Grid.Row>
            <Grid.Row className="clientListRow">1/2/34</Grid.Row>
            <Grid.Row className="clientListRow">1/2/34</Grid.Row>
            <Grid.Row className="clientListRow">1/2/34</Grid.Row>
            <Grid.Row className="clientListRow">1/2/34</Grid.Row>

          </Grid.Column>

          {/* ~~~~~~~~~~~~~~~~~~~~~~~Latest Visit~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

          <Grid.Column className="clientListColumn"
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
            <Grid.Row className="clientListRow">4/15/22</Grid.Row>
            <Grid.Row className="clientListRow">5/15/22</Grid.Row>
            <Grid.Row className="clientListRow">6/13/22</Grid.Row>
            <Grid.Row className="clientListRow">7/20/22</Grid.Row>
            <Grid.Row className="clientListRow">8/25/23</Grid.Row>
            <Grid.Row className="clientListRow">9/15/23</Grid.Row>
            <Grid.Row className="clientListRow">11/15/23</Grid.Row>
            <Grid.Row className="clientListRow">1/2/34</Grid.Row>
            <Grid.Row className="clientListRow">1/2/34</Grid.Row>
            <Grid.Row className="clientListRow">1/2/34</Grid.Row>
            <Grid.Row className="clientListRow">1/2/34</Grid.Row>
            <Grid.Row className="clientListRow">1/2/34</Grid.Row>
            <Grid.Row className="clientListRow">1/2/34</Grid.Row>
            <Grid.Row className="clientListRow">1/2/34</Grid.Row>
            <Grid.Row className="clientListRow">1/2/34</Grid.Row>
            <Grid.Row className="clientListRow">1/2/34</Grid.Row>
            <Grid.Row className="clientListRow">1/2/34</Grid.Row>
            


          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default index;
