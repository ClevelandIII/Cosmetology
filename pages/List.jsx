import {
  Grid,
  Image,
  Divider,
  Container,
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

const List = ({ stylist }) => {
  const [stylists, setStylists] = useState([]);
  const [semester, setSemester] = useState([]);
  const [clients, setClients] = useState([]);
  const [stylistEmail, setStylistEmail] = useState("");

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
  useEffect(() => {
    getStylists();
    getSemester();
    getClients();
  }, []);

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
      {decide ? (
        <>
          <Grid
            className="StudentGrid"
            columns="equal"
            centered
            divided="vertically"
            relaxed="very"
          >
            <Grid.Row>
              <Grid.Column className="column studentColumn">
                <Segment className="yearSemesterCenter">Student</Segment>
              </Grid.Column>
              <Grid.Column className="column studentColumn">
                <Segment className="yearSemesterCenter">Teacher</Segment>
              </Grid.Column>
              <Grid.Column className="column" style={{ left: "12%" }}>
                <Segment className="yearSemesterCenter">Year</Segment>
              </Grid.Column>
              <Grid.Column className="column">
                <Segment className="yearSemesterCenter">Semester</Segment>
              </Grid.Column>
            </Grid.Row>

            {stylists.map((stylist) => {
              if (stylist.isTeacher === "false") {
                return (
                  <>
                    <Grid.Row className=" studentRow">
                      <Grid.Column className="studentColumn">
                        <Segment style={{ width: "110%" }}>
                          <Image
                            className="avatar"
                            src={stylist.profilePicURL}
                          />
                          <Link href={`http://localhost:3001/${stylist.userId}`}>
                            <p
                              className="studentListName"
                              style={{ width: "80%" }}
                            >
                              {stylist.firstName} {stylist.lastName}
                            </p>
                          </Link>
                        </Segment>
                      </Grid.Column>
                      <Grid.Column className="studentColumn">
                        <Segment style={{ width: "110%" }}>
                          <Image
                            className="studentListPic"
                            src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
                          />{" "}
                          <p
                            className="studentListName"
                            style={{ width: "80%" }}
                          >
                            {stylist.teacher}
                          </p>
                        </Segment>
                      </Grid.Column>
                      <Grid.Column className="studentColumn">
                        <Segment className="yearSemesterCenter">
                          {stylist.studentYear}
                        </Segment>
                      </Grid.Column>
                      <Grid.Column>
                        <Segment className="yearSemesterCenter">
                          {semester}
                        </Segment>
                      </Grid.Column>
                    </Grid.Row>
                  </>
                );
              }
            })}
            <div class="showMore">
              <Button style={{backgroundColor:"white", color:"orange"}}>🡣 Show More 🡣</Button>
            </div>
            <div class="Back2Top" style={{left:"103rem"}}>
              <a href="#" className="Back2TopText" style={{right:"10px"}}>🠉</a>
            </div>
            
          </Grid>
        </>
      ) : (
        <>
          <Grid
            className="StudentGrid"
            columns="equal"
            centered
            divided="vertically"
            relaxed="very"
          >
            <Grid.Row>
              <Grid.Column className="column studentColumn">
                <Segment className="yearSemesterCenter">Name</Segment>
              </Grid.Column>
              <Grid.Column className="column studentColumn">
                <Segment className="yearSemesterCenter">Stylist</Segment>
              </Grid.Column>
              <Grid.Column className="column" style={{ left: "12%" }}>
                <Segment className="yearSemesterCenter">Date Created</Segment>
              </Grid.Column>
              <Grid.Column className="column">
                <Segment className="yearSemesterCenter">Date Updated</Segment>
              </Grid.Column>
            </Grid.Row>

            {clients.map((client) => {
              return (
                <>
                  <Grid.Row className="studentRow">
                    <Grid.Column className="studentColumn">
                      <Segment style={{ width: "110%" }}>
                        <Image
                          className="avatar"
                          src={defaultProfilePicURL}
                          style={{backgroundColor:"white"}}
                        />

                        <p className="studentListName" style={{ width: "80%" }}>
                          {client.firstName} {client.lastName}
                        </p>
                      </Segment>
                    </Grid.Column>

                    <Grid.Column className="studentColumn">
                      <Segment style={{ width: "110%" }}>
                        <Image
                          className="avatar"
                          src={client.stylistPic || defaultProfilePicURL}
                        />{" "}
                        <p className="studentListName" style={{ width: "80%" }}>
                          {/* {stylistEmail[0]} */}
                          {client.stylistName.split("@")[0]}
                        </p>
                      </Segment>
                    </Grid.Column>
                    <Grid.Column className="studentColumn">
                      <Segment className="yearSemesterCenter">
                        {client.dateCreated.split("T")[0]}
                      </Segment>
                    </Grid.Column>
                    <Grid.Column style={{ paddingLeft: "80px" }}>
                      <Segment className="yearSemesterCenter">
                        {client.dateCreated.split("T")[0]}
                      </Segment>
                    </Grid.Column>
                  </Grid.Row>
                </>
              );
            })}
            <div class="showMore">
              <Button style={{backgroundColor:"white", color:"orange"}}>🡣 Show More 🡣</Button>
            </div>
            <div class="Back2Top" style={{left:"103rem"}}>
              <a href="#" className="Back2TopText" style={{right:"10px"}}>🠉</a>
            </div>
          </Grid>
        </>
      )}
    </>
  );
};

export default List;
