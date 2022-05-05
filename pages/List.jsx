import {
  Grid,
  Image,
  Dropdown,
  Modal,
  Loader,
  Card,
  Menu,
  Table,
  Segment,
  Button,
} from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
const defaultProfilePicURL = require("../server/util/defaultPic");

//Cleaned up list to be more consistent with every other list

const List = ({ stylist }) => {
  const [stylists, setStylists] = useState([]);
  const [semester, setSemester] = useState([]);
  const [teachLink, setTeachLink] = useState("");
  const [clients, setClients] = useState([]);
  const [stylistEmail, setStylistEmail] = useState("");
  const [open, setOpen] = useState(false);

  const getStylists = async () => {
    try {
      const results = await axios.get(`http://localhost:3001/api/v1/stylists`);
      setStylists(results.data);
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  };
  const getClients = async () => {
    try {
      const results = await axios.get(`http://localhost:3001/api/v1/client`);
      setClients(results.data);
      console.log(clients);
    } catch (error) {
      console.log(error);
    }
  };
  const getSemester = async () => {
    try {
      let currentDate = new Date();

      let currentMonth = currentDate.getMonth() + 1;
      // console.log(currentMonth);

      if (currentMonth >= 8 && currentMonth <= 12) {
        setSemester("Semester 1");
      } else if (currentMonth >= 1 && currentMonth <= 5) {
        setSemester("Semester 2");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getTeacher = async () => {
    if(stylist.teacher === "potassium"){
      setTeachLink("/1651522057278")
      // teachLink = "/1651522057278"
    } else if (stylist.teacher === "Sussy"){
      setTeachLink("/1651263834506")
      // teachLink = "/1651263834506"
    } else if (stylist.teacher === "davs"){
      setTeachLink("/1651624257170")
      // teachLink = "/1651624257170"
    } else {
      setTeachLink("/")
      // teachLink = "/"
    }
  }

  useEffect(() => {
    getStylists();
    getSemester();
    getClients();
    getTeacher();
  }, []);

  let decide = "";
  if (stylist.isTeacher === "true") {
    // setIsTeacher(true);
    decide = true;
  } else if (stylist.isTeacher === "false") {
    // setIsTeacher(false);
    decide = false;
  }

  // const loadMore = document.querySelector("#loadMore");
  // let currentItems = 2;
  // loadMore.addEventListener("click", (e) => {
  //   const elementList = [...document.querySelectorAll(".list .list-element")];
  //   for (let i = currentItems; i < currentItems + 2; i++) {
  //     if (elementList[i]) {
  //       elementList[i].style.display = "block";
  //     }
  //   }
  //   currentItems += 2;

  //   // Load more button will be hidden after list fully loaded
  //   if (currentItems >= elementList.length) {
  //     event.target.style.display = "none";
  //   }
  // });

  const Options = [
    {
      key: "Number of Visits",
      text: "Number of Visits",
      value: "Number of Visits",
    },
    {
      key: "First Visit",
      text: "First Visit",
      value: "First Visit",
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
  const Students = [
    {
      key: "Teacher",
      text: "Teacher",
      value: "Teacher",
    },
    {
      key: "Semester",
      text: "Semester",
      value: "Semester",
    },
    {
      key: "Year",
      text: "Year",
      value: "Year",
    },
    {
      key: "Name",
      text: "Name",
      value: "Name",
    },
  ];

  return (
    <>
      {decide ? (
        <>
          <div class="list">
            <Grid className="tableindex" stackable style={{ padding: "3rem" }}>
              <Grid.Row className="mini3">
                <div style={{ textAlign: "center" }}>
                  <h1>List of All Students</h1>
                  <Dropdown
                    placeholder="Sort By..."
                    fluid
                    selection
                    options={Students}
                    onChange={(e) => setSortType(e.target.value)}
                  />
                </div>
              </Grid.Row>
              <Grid.Row
                columns={4}
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
                    <Segment>Student</Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>Teacher</Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>Semester</Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>Year</Segment>
                  </Grid.Column>
                </>
              </Grid.Row>

              <Grid.Row className="containeindex" columns={4}>
                <>
                  {stylists.map((stylist) => {
                    if (stylist.isTeacher === "false") {
                      return (
                        <>
                          <Link href={`/${stylist.userId}`}>
                            <Grid.Column
                              className="Indexcolumn clientListColumn"
                              setStylists={stylists}
                              style={{
                                textAlign: "center",
                              }}
                            >
                              <img
                                className="listAvatar"
                                src={stylist.profilePicURL}
                              />
                              <Segment
                                style={{
                                  width: "70%",
                                  marginTop: "0",
                                  marginBottom: "1rem",
                                }}
                                floated="right"
                              >
                                {stylist.firstName.length > 15 ||
                                stylist.lastName.length > 15 ? (
                                  <>
                                    <p className="listLink">
                                      {stylist.firstName}
                                    </p>
                                  </>
                                ) : (
                                  <>
                                    <p className="listLink">
                                      {stylist.firstName} {stylist.lastName}
                                    </p>
                                  </>
                                )}
                              </Segment>
                            </Grid.Column>
                          </Link>

                          {/* Will eventually also show teacher */}
                          <Grid.Column
                            className="Indexcolumn"
                            setStylist={stylists}
                            style={{ textAlign: "center" }}
                          >
                            <Segment className="indexCenter">
                              <Link href={`/${teachLink}`}>
                              <p>{stylist.teacher}</p>
                              </Link>
                            </Segment>
                          </Grid.Column>

                          <Grid.Column
                            className="Indexcolumn"
                            setStylist={stylists}
                            style={{ textAlign: "center" }}
                          >
                            <Segment className="indexCenter">
                              <p>{stylist.session}</p>
                            </Segment>
                          </Grid.Column>

                          <Grid.Column
                            className="Indexcolumn"
                            setStylist={stylists}
                            style={{ textAlign: "center" }}
                          >
                            <Segment className="indexCenter">
                              <p>{stylist.studentYear}</p>
                            </Segment>
                          </Grid.Column>
                        </>
                      );
                    } else {
                      <></>;
                    }
                  })}
                </>
              </Grid.Row>
              <Grid.Column style={{ textAlign: "center" }} width={16}>
                <div class="showMore">
                  <Button
                    id="loadMore"
                    style={{ backgroundColor: "orange", color: "white" }}
                  >
                    🡣 Show All 🡣
                  </Button>
                </div>
              </Grid.Column>
            </Grid>
            <div class="Back2Top" style={{ left: "103rem" }}>
              <a href="#" className="Back2TopText">
                🠉
              </a>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <Grid className="tableindex" stackable style={{ padding: "3rem" }}>
              <Grid.Row className="mini3">
                <div style={{ textAlign: "center" }}>
                  <h1>List of All Clients</h1>
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
                columns={4}
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
                    <Segment>Client Name</Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>Stylist</Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>First Visited</Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>Last Visited</Segment>
                  </Grid.Column>
                </>
              </Grid.Row>

              <Grid.Row className="containeindex" columns={4}>
                <>
                  {clients.map((client) => {
                    return (
                      <>
                        <Grid.Column
                          className="Indexcolumn clientListColumn"
                          setClients={clients}
                          style={{
                            textAlign: "center",
                          }}
                        >
                          <img
                            className="listAvatar"
                            src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
                          />
                          <Segment
                            style={{
                              width: "70%",
                              marginTop: "0",
                              marginBottom: "1rem",
                            }}
                            floated="right"
                          >
                            {client.firstName.length > 15 ||
                            client.lastName.length > 15 ? (
                              <>
                                <p>{client.firstName}</p>
                              </>
                            ) : (
                              <>
                                <p>
                                  {client.firstName} {client.lastName}
                                </p>
                              </>
                            )}
                          </Segment>
                        </Grid.Column>

                        <Grid.Column
                          className="Indexcolumn"
                          key={client._id}
                          setClients={clients}
                          style={{ textAlign: "center" }}
                        >
                          <img className="listAvatar" src={client.stylistPic} />
                          <Segment
                            style={{
                              width: "70%",
                              marginTop: "0",
                              marginBottom: "1rem",
                            }}
                            floated="right"
                          >
                            <p>{client.stylistName.split("@")[0]}</p>
                          </Segment>
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
              <Grid.Column style={{ textAlign: "center" }} width={16}>
                <div class="showMore">
                  <Button
                    id="loadMore"
                    style={{ backgroundColor: "orange", color: "white" }}
                  >
                    🡣 Show All 🡣
                  </Button>
                </div>
              </Grid.Column>
            </Grid>
            <div class="Back2Top" style={{ left: "103rem" }}>
              <a href="#" className="Back2TopText">
                🠉
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default List;
