import React from "react";
import axios from "axios";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { baseURL } from "./util/auth";

import {
  Grid,
  Divider,
  Button,
  Dropdown,
  Image,
  Header,
  Icon,
  Segment,
  Modal,
} from "semantic-ui-react";
import Link from "next/link";

//FOR MODAL, DONT DELETE
function exampleReducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return { open: true, dimmer: action.dimmer };
    case "CLOSE_MODAL":
      return { open: false };
    default:
      throw new Error();
  }
}

const index = ({ stylist, client }) => {
  useEffect(() => {
    document.title = `Welcome, ${stylist.firstName}`;
  }, []);
  const [clients, setClients] = useState([]);
  const [clientModal, setClientModal] = useState("");
  const [option, setOption] = useState("");
  const [sortType, setSortType] = useState("clients");

  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    dimmer: undefined,
  });
  const { open, dimmer } = state;

  const Options = [
    {
      id: 1,
      key: "Number of Visits",
      text: "Number of Visits",
      value: "Number of Visits",
    },
    {
      id: 2,
      key: "First Visit",
      text: "First Visit",
      value: "First Visit",
    },
    {
      id: 3,
      key: "Most Recently Created",
      text: "Most Recently Created",
      value: "Most Recently Created",
    },
    {
      id: 4,
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

  //( ͡° ͜ʖ ͡°)
  //(╯°□°)╯︵ ┻━┻
  let decide = "";
  if (stylist.isTeacher === "true") {
    // setIsTeacher(true);
    decide = true;
  } else if (stylist.isTeacher === "false") {
    // setIsTeacher(false);
    decide = false;
  }

  return (
    <>
      <div
        style={{ padding: "2rem", textAlign: "center" }}
        stylist={stylist.firstName}
      >
        <Grid style={{ textAlign: "center" }}>
          {stylist.isTeacher === "true" ? (
            <>
              <Grid.Row style={{ width: "100%" }} className="mini">
                <p>
                  {`Welcome ${stylist.firstName}. To get started, check on your students, or see all clients in the list below.`}
                </p>
              </Grid.Row>
              <Divider hidden />
              <Link href="/UserProfile">
                <Grid.Row className="mini2">
                  <Button style={{ backgroundColor: "orange" }}>
                    See Students
                  </Button>
                </Grid.Row>
              </Link>
            </>
          ) : (
            <>
              <Grid.Row style={{ width: "100%" }} className="mini">
                <p>
                  {`Welcome ${stylist.firstName}. To get started, add a new visitor, or update a visitor from the list
              below.`}
                </p>
              </Grid.Row>
              <Divider hidden />
              <Link href="/clientCreator">
                <Grid.Row className="mini2">
                  <Button style={{ backgroundColor: "orange" }}>
                    New Visitor
                  </Button>
                </Grid.Row>
              </Link>
            </>
          )}
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
                onChange={(e) => setSortType(e.target.value)}
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
                <Segment>First Visit</Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>Last Visited</Segment>
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
                      // setClients={clients}
                      style={{ textAlign: "center" }}
                      onClick={() => {
                        setClientModal(client._id);
                      }}
                    >
                      <Segment
                        className="indexCenter"
                        onClick={() =>
                          dispatch({ type: "OPEN_MODAL", dimmer: "blurring" })
                        }
                      >
                        <p>
                          {client.firstName} {client.lastName}
                        </p>
                      </Segment>

                      {client._id === clientModal ? (
                        <Modal
                          centered={false}
                          onClose={() => dispatch({ type: "CLOSE_MODAL" })}
                          open={open}
                        >
                          <>
                            <Modal.Content
                              className="indexClientInfo"
                              scrolling
                            >
                              <p>
                                <h3>First Name: {client.firstName}</h3>
                                <h3>Last Name: {client.lastName}</h3>
                                <h3>
                                  Appointment Date:
                                  {client.appointmentDate.split("T")[0]}
                                </h3>
                                <h3>
                                  Service Request: {client.serviceRequest}
                                </h3>
                                <h3>Hair Condition: {client.hairCondition}</h3>
                                <h3>
                                  Hair Classification:{" "}
                                  {client.hairClassification}
                                </h3>
                                <h3>Hair Density: {client.hairDensity}</h3>
                                <h3>
                                  Hair Elasticity: {client.hairElasticity}
                                </h3>
                                <h3>Hair Porosity: {client.hairPorosity}</h3>
                                <h3>Hair Length: {client.hairLength}</h3>
                                <h3>Hair Texture: {client.hairTexture}</h3>
                                <h3>
                                  Growth Patterns: {client.growthPatterns}
                                </h3>
                                <h3>
                                  Scalp Condition: {client.scalpClassification}
                                </h3>
                                <div style={{ textAlign: "center" }}>
                                  <h3>Additional Visits</h3>
                                  {client.visits.map((visit) => {
                                    return (
                                      <Segment style={{ textAlign: "left" }}>
                                        <h3>Visits: {`${visit[0]}, `}</h3>
                                        <h3>Hair Style: {`${visit[1]}, `}</h3>
                                        <h3>
                                          Special Treatments: {`${visit[2]}, `}
                                        </h3>
                                      </Segment>
                                    );
                                  })}
                                </div>
                              </p>
                            </Modal.Content>
                            <Modal.Actions>
                              <Button
                                content="Proceed"
                                labelPosition="right"
                                onClick={() =>
                                  dispatch({ type: "CLOSE_MODAL" })
                                }
                                warning
                              />
                            </Modal.Actions>
                          </>
                          {/* ) : (
                        <></>
                      )} */}
                        </Modal>
                      ) : (
                        <></>
                      )}
                    </Grid.Column>

                    <Grid.Column
                      className="Indexcolumn"
                      key={client._id}
                      setClients={clients}
                      style={{ textAlign: "center" }}
                    >
                      <Segment className="indexCenter">
                        <p>{client.dateCreated.split("T")[0]}</p>
                      </Segment>
                    </Grid.Column>

                    <Grid.Column
                      className="Indexcolumn"
                      key={client._id}
                      setClients={clients}
                      style={{ textAlign: "center" }}
                    >
                      <Segment className="indexCenter">
                        <p>{client.appointmentDate.split("T")[0]}</p>
                      </Segment>
                    </Grid.Column>
                  </>
                );
              })}
            </>
          </Grid.Row>
        </Grid>
      </div>
      {open ? (
        <div class="Back2Top" style={{ left: "51rem" }}>
          <a href="#" className="Back2Top">
            🡹
          </a>
        </div>
      ) : (
        <div class="Back2Top" style={{ left: "103rem" }}>
          <a href="#" className="Back2TopText">
            🡹
          </a>
        </div>
      )}
    </>
  );
};

export default index;
