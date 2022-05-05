import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import Cookies from "js-cookie";
import Link from "next/link";

import {
  Grid,
  Card,
  Image,
  Divider,
  Dropdown,
  Segment,
  Rating,
  Popup,
  Icon,
  Button,
  Form,
} from "semantic-ui-react";
import axios from "axios";

//currently bugged. When logged in as a teacher, it would show my other account's profile picture instead of the teachers picture
//This is when you click on the profile link, not when you click on a student
const profilePage = ({ stylist, profile }) => {
  const router = useRouter();
  const [stylists, setStylists] = useState([]);
  const [hidden, setHidden] = useState(false);
  const [hours, setHours] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const [initalDate, setInitalDate] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [teachName, setTeachName] = useState("");
  const [clients, setClients] = useState([]);
  const [clientUser, setClientUser] = useState("")

  useEffect(() => {
    setTeachName(stylist.firstName);
  }, []);

  //In the future, option will allow for the sort buttons to work
  const [option, setOption] = useState("");

  //This variable updates hours on the page so that the user doesnt have to reset to see their new hours.
  //Thats what i would say... If it actually worked! For now the user will have to reset to see the hours.
  const [actualHours, setActualHours] = useState("");
  useEffect(() => {
    setActualHours(stylist.hours);
  }, []);

  let user = stylist.userId;
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
  const getStylists = async () => {
    try {
      const results = await axios.get(`http://localhost:3001/api/v1/stylists`);
      setStylists(results.data);
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getStylists();
    console.log(stylists);
  }, []);

  //Separates the teachers from the students
  let count = 0;
  stylists.map((stylist) => {
    if (stylist.isTeacher === "false" && stylist.teacher === teachName) {
      return count++;
    } else {
      count = count;
    }
    return console.log(count);
  });

  const [visit, setVisit] = useState({
    addVisits: "",
    hairStyle: "",
    specialTreatment: "",
  });
  const { addVisits, hairStyle, specialTreatment } = visit;

  //Hours Start
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    let hour = hours;

    try {
      const res = await axios.patch("/api/v1/user/UserProfile", {
        hour,
        user,
      });
      setToken(res.data);
    } catch (error) {
      console.log(error);
    }
    setHours("");
    setFormLoading(false);
    setHidden(false);
    setActualHours(stylist.hours);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setHours(value);
  };
  //Hours End

  //Visit Start
  const handleSubmit2 = async (e) => {
    e.preventDefault();
    setFormLoading(true);

    try {
      const res = await axios.patch("/api/v1/client/clientCreator", {
        addVisits,
        hairStyle,
        specialTreatment,
        clientUser
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
  //Visit End


  let decide = "";
  if (stylist.isTeacher === "true") {
    // setIsTeacher(true);
    decide = true;
  } else if (stylist.isTeacher === "false") {
    // setIsTeacher(false);
    decide = false;
  }

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

  return (
    <>
      {decide ? (
        <>
          <Grid stackable style={{ margin: "3rem" }}>
            <Grid.Column width={8} className="roz">
              <Grid.Row
                style={{ margin: "3.8rem", textalign: "center" }}
                className="roz3"
              >
                <Image
                  src={profile.profilePicURL}
                  // avatar
                  className="profileAvatar"
                  size="medium"
                  bordered
                  centered
                  circular
                />
              </Grid.Row>
              <Grid.Row style={{ marginLeft: "15rem", textalign: "center" }}>
                <Card>
                  <Card.Content>
                    <Card.Header>
                      {profile.firstName} {profile.lastName}
                    </Card.Header>
                    <Card.Meta>
                      <span className="date">
                        Teacher: {profile.teacher} | Session: {profile.session}
                      </span>
                    </Card.Meta>
                    <Card.Description>Teacher </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column
              width={7}
              style={{ textalign: "center", marginTop: "10rem" }}
              className="roz2"
            >
              <Grid.Row
                style={{
                  border: "1px solid white",
                  height: "5rem",
                  background: "orange",
                  color: "white",
                  textalign: "center",
                  paddingTop: "1.2rem",
                }}
              >
                <h1>Number of Students: {count}</h1>
              </Grid.Row>
            </Grid.Column>
          </Grid>

          <Grid className="tableindex" stackable style={{ padding: "3rem" }}>
            <Grid.Row className="mini3">
              <div style={{ textalign: "center", paddingLeft: "4%" }}>
                <h1>All Students</h1>
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
                textalign: "center",
                // overflow: "scroll",
                justifyContent: "space-evenly",
              }}
            >
              <>
                <Grid.Column>
                  {/*These categories are made as requested by Mr. Peck */}
                  <Segment>Students</Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment>Total Hours</Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment>Total Clients</Segment>
                </Grid.Column>
              </>
            </Grid.Row>
            {/*Thanks Daniel, made the styling easy */}
            <Grid.Row className="containeindex" columns={3}>
              <>
                {stylists.map((stylist) => {
                  if (
                    stylist.isTeacher === "false" &&
                    stylist.teacher === teachName
                  ) {
                    return (
                      <>
                        <Grid.Column
                          className="Indexcolumn clientListColumn"
                          key={stylist._id}
                          setStylists={stylists}
                          style={{ textAlign: "center" }}
                        >
                          <Segment className="indexCenter listLink">
                            <Link
                              className="listLink"
                              href={`/${stylist.userId}`}
                            >
                              <p>
                                {stylist.firstName} {stylist.lastName}
                              </p>
                            </Link>
                          </Segment>
                        </Grid.Column>
                        <Grid.Column
                          className="Indexcolumn"
                          key={stylist._id}
                          setStylists={stylists}
                          style={{ textAlign: "center" }}
                        >
                          <Segment className="indexCenter">
                            <p>{stylist.hours}</p>
                          </Segment>
                        </Grid.Column>
                        <Grid.Column
                          className="Indexcolumn"
                          key={stylist._id}
                          setStylists={stylists}
                          style={{ textAlign: "center" }}
                        >
                          <Segment className="indexCenter">
                            <p>{stylist.pastClients.length}</p>
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
          </Grid>
        </>
      ) : (
        <>
          <Grid stackable style={{ margin: "3rem" }}>
            <Grid.Column width={8} className="roz">
              <Grid.Row
                style={{ margin: "3.8rem", textalign: "center" }}
                className="roz3"
              >
                <Image
                  src={profile.profilePicURL}
                  className="profileAvatar"
                  size="medium"
                  bordered
                  centered
                  circular
                />
              </Grid.Row>
              <Grid.Row style={{ marginLeft: "15rem", textalign: "center" }}>
                <Card>
                  <Card.Content>
                    <Card.Header>
                      {profile.firstName} {profile.lastName}
                    </Card.Header>
                    <Card.Meta>
                      <span className="date">
                        Teacher: {profile.teacher} | Session: {profile.session}
                      </span>
                    </Card.Meta>
                    <Card.Description>Stylist</Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Row>
            </Grid.Column>

            <Grid.Column
              width={7}
              style={{ textalign: "center", marginTop: "10rem" }}
              className="roz2"
            >
              <Grid.Row
                style={{
                  border: "1px solid white",
                  height: "5rem",
                  background: "orange",
                  color: "white",
                  textalign: "center",
                  paddingTop: "1.2rem",
                }}
              >
                {hidden ? (
                  <Form onSubmit={handleSubmit} loading={formLoading}>
                    <h1>
                      Hours:
                      <input
                        style={{
                          borderRadius: "20px",
                          width: "30%",
                          height: "1rem",
                          marginLeft: "2%",
                        }}
                        placeholder={stylist.hours}
                        name="firstName"
                        value={hours}
                        className="hour"
                        onChange={handleChange}
                        type="number"
                      />
                      <button
                        type="submit"
                        style={{
                          color: "white",
                          backgroundColor: "orange",
                          cursor: "pointer",
                          marginLeft: "2%",
                          border: "1px solid black",
                        }}
                      >
                        Submit
                      </button>
                    </h1>
                  </Form>
                ) : (
                  <div>
                    <h1>
                      Hours: {actualHours}
                      <Icon
                        name="plus"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setHidden(true);
                        }}
                      />
                    </h1>
                  </div>
                )}
              </Grid.Row>
              <Divider hidden />
              <Grid.Row
                style={{
                  border: "1px solid white",
                  height: "5rem",
                  background: "orange",
                  color: "white",
                  textalign: "center",
                  paddingTop: "1.2rem",
                }}
              >
                <h1>Number of Clients: {stylist.pastClients.length}</h1>
              </Grid.Row>
              <Divider hidden />
              {/* <Grid.Row
                style={{
                  border: "1px solid white",
                  height: "5rem",
                  background: "orange",
                  color: "white",
                  textalign: "center",
                  paddingTop: "1.6rem",
                }}
              > */}
              {/*This rating from semantic react allows the user to rank, but it dosent list an overall ranking. */}
              {/* If we want to instead record a visitors ranking we can, otherwise this might not work... */}
              {/* <Rating icon="star" defaultRating={0} maxRating={5} /> */}
              {/* </Grid.Row> */}
            </Grid.Column>
          </Grid>

          <Grid className="tableindex" stackable style={{ padding: "3rem" }}>
            <Grid.Row className="mini3">
              <div style={{ textAlign: "center" }}>
                <h1>All Clients of {stylist.firstName}</h1>
                <Dropdown
                  placeholder="Sort By..."
                  fluid
                  selection
                  options={Options}
                  // onClick={() => {
                  //   console.log("1");
                  // }}
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
                  {/*These categories are made as requested by Mr. Peck */}
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
                  if (client.stylistName === stylist.email) {
                    return (
                      <>
                        <Grid.Column
                          className="Indexcolumn clientListColumn"
                          style={{ textAlign: "center" }}
                        >
                          <Popup
                            trigger={
                              <Segment className="indexCenter">
                                <p>{`${client.firstName} ${client.lastName}`}</p>
                              </Segment>
                            }
                            hoverable
                            pinned
                            on="click"
                            position="top center"
                            onClick={() => {setClientUser(client._id)}}
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
                          style={{ textAlign: "center" }}
                        >
                          <Segment className="indexCenter">
                            <p>{client.dateCreated.split("T")[0]}</p>
                          </Segment>
                        </Grid.Column>
                        <Grid.Column
                          className="Indexcolumn"
                          style={{ textAlign: "center" }}
                        >
                          <Segment className="indexCenter">
                            <p>{client.appointmentDate.split("T")[0]}</p>
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
          </Grid>
        </>
      )}
    </>
  );
};

profilePage.getInitialProps = async (ctx) => {
  try {
    const { userId } = ctx.query;
    console.log(userId);
    const { token } = parseCookies(ctx);
    const res = await axios.get(
      `http://localhost:3001/api/v1/profile/${userId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const { profile } = res.data;
    return { profile };
  } catch (error) {
    console.log(error);
  }
};

export default profilePage;
