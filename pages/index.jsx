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
  Segment,
} from "semantic-ui-react";
import Link from "next/link";

const index = ({ stylist, client }) => {
  useEffect(() => {
    document.title = `Welcome, ${stylist.firstName}`;
  }, []);
  const [clients, setClients] = useState([]);

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

  const getClients = async () => {
    try {
      const results = await axios.get(`http://localhost:3001/api/v1/client`);
      setClients(results.data);
      console.log(clients);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getClients();
    // console.log(stylists);
  }, []);
  console.log(clients);
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
            <Button style={{ backgroundColor: "orange" }}>New Visitor</Button>
          </Grid.Row>
        </Link>
      </Grid>
      {/* <Divider hidden /> */}
      <Grid className="tableindex" stackable style={{ padding: "3rem" }}>
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
        <Grid.Row
          columns={3}
          style={{
            border: "2px solid white",
            // height: "35rem",
            background: "orange",
            color: "black",
            textAlign: "center",
            // overflow: "scroll",
            justifyContent: "space-evenly",
          }}
        >
          <>
            <Grid.Column>
              <Segment>Client</Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>Last Visited</Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>Date Created</Segment>
            </Grid.Column>
          </>
        </Grid.Row>
        <Grid.Row className="containeindex" columns={3}>
          <>
            {clients.map((client) => {
              return (
                <>
                  <Grid.Column
                    className="Indexcolumn clientListColumn"
                    key={client._id}
                    setClients={clients}
                    style={{ textAlign: "center" }}
                  >
                    <Segment className="indexCenter">
                      <p>
                        {client.firstName} {client.lastName}
                      </p>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column
                    className="Indexcolumn"
                    key={client._id}
                    setClients={clients}
                    style={{ textAlign: "center" }}
                  >
                    <Segment className="indexCenter">
                      <p>{client.dateCreated}</p>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column
                    className="Indexcolumn"
                    key={client._id}
                    setClients={clients}
                    style={{ textAlign: "center" }}
                  >
                    <Segment className="indexCenter">
                      <p>{client.dateCreated}</p>
                    </Segment>
                  </Grid.Column>
                </>
              );
            })}
          </>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default index;
