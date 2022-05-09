import {
  Grid,
  Popup,
  Dropdown,
  Segment,
  Button,
  Form,
} from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
const defaultProfilePicURL = require("../server/util/defaultPic");

const List = ({ stylist }) => {
  //For grabbing info
  const [stylists, setStylists] = useState([]);
  //For sorting that info
  // const [stylists2, setStylists2] = useState();

  const [semester, setSemester] = useState([]);
  const [teachLink, setTeachLink] = useState([]);
  const [clients, setClients] = useState([]);
  const [formLoading, setFormLoading] = useState(false);
  const [visit, setVisit] = useState({
    addVisits: "",
    hairStyle: "",
    specialTreatment: "",
  });
  const { addVisits, hairStyle, specialTreatment } = visit;
  const [clientUser, setClientUser] = useState("");

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    setFormLoading(true);

    try {
      const res = await axios.patch("/api/v1/client/clientCreator", {
        addVisits,
        hairStyle,
        specialTreatment,
        clientUser,
      });
      setToken(res.data);
    } catch (error) {
      console.log(error);
    }
    setVisit("");
    setFormLoading(false);
  };
  const handleChange2 = (e) => {
    const { name, value, files } = e.target;
    setVisit((prev) => ({ ...prev, [name]: value }));
  };

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
    try{
      if (stylist.teacher === "potassium") {
        setTeachLink("1651522057278");
        // teachLink = "/1651522057278"
      } else if (stylist.teacher === "Sussy") {
        setTeachLink("1651263834506");
        // teachLink = "/1651263834506"
      } else if (stylist.teacher === "davs") {
        setTeachLink("1651624257170");
        // teachLink = "/1651624257170"
      } else {
        setTeachLink("");
        // teachLink = "/"
      }
    }catch (error) {
      console.log(error);
    }

  };
  const setStylist = async () => {
    try {
      function Comparator(a, b) {
        // you can use the `String.prototype.toLowerCase()` method
        // if the comparison should be case insensitive
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
        return 0;
    }

      setStylists(stylists.sort(Comparator));
      console.log(stylists);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStylists();
    getSemester();
    getClients();
    getTeacher();
    setStylist();
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
                          <Popup
                            trigger={
                              <div>
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
                              </div>
                            }
                            hoverable
                            pinned
                            on="click"
                            position="top center"
                            onClick={() => {
                              setClientUser(client._id);
                            }}
                          >
                            <Form
                              loading={formLoading}
                              onSubmit={handleSubmit2}
                            >
                              <Form.Input
                                required
                                label="Add Visit"
                                placeholder="Today"
                                name="addVisits"
                                value={addVisits}
                                onChange={handleChange2}
                                icon="time"
                                iconPosition="left"
                                style={{ width: "300px", height: "42px" }}
                                type="text"
                              />
                              <Form.Input
                                label="Hair Style"
                                placeholder="Bob, Curly"
                                name="hairStyle"
                                value={hairStyle}
                                onChange={handleChange2}
                                icon="user"
                                iconPosition="left"
                                style={{ width: "300px", height: "42px" }}
                                type="text"
                              />
                              <Form.Input
                                label="Special Treatments"
                                placeholder="Additional Requirements"
                                name="specialTreatment"
                                value={specialTreatment}
                                onChange={handleChange2}
                                icon="star outline"
                                iconPosition="left"
                                style={{ width: "300px", height: "42px" }}
                                type="text"
                              />
                              <Button
                                color="orange"
                                inverted
                                content="Signup"
                                type="submit"
                              />
                            </Form>
                          </Popup>
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
