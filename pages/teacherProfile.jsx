import React, { useState } from "react";
import { Grid, Card, Icon, Image, Divider, Dropdown } from "semantic-ui-react";

// Very Similar to StudentProfile, only differences are studentList instead of clientList and
// class they teach/session
const TeacherProfile = () => {
  const [user, setUser] = useState(false);
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
    <>
      <Grid stackable style={{ margin: "3rem" }}>
        <Grid.Column width={8}>
          <Grid.Row style={{ margin: "3.8rem" }}>
            <Image
              src="https://freesvg.org/img/abstract-user-flat-4.png"
              avatar
              size="large"
              bordered
              centered
              circular
            />
          </Grid.Row>
          <Divider hidden />
          <Grid.Row style={{ marginLeft: "9.2rem", textAlign: "center" }}>
            <Card>
              <Card.Content>
                <Card.Header>Teachers Name</Card.Header>
                <Card.Meta>
                  <span className="date">Session</span>
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Row>
        </Grid.Column>

        <Grid.Column
          width={7}
          style={{ textAlign: "center", marginTop: "10rem" }}
        >
          <Grid.Row
            style={{
              border: "1px solid white",
              height: "5rem",
              background: "orange",
              color: "white",
              textAlign: "center",
              paddingTop: "1.2rem",
            }}
          >
            <h1>Number of Students</h1>
          </Grid.Row>
        </Grid.Column>
      </Grid>

      <Grid stackable style={{ padding: "3rem" }}>
        <Grid.Row style={{ paddingLeft: "42%" }}>
          <div style={{ textAlign: "center" }}>
            <h1>Students</h1>
            <Dropdown
              placeholder="Sort By..."
              fluid
              selection
              options={Options}
            />
          </div>
        </Grid.Row>
        <Divider hidden />

        {/* List of Students */}
        <Grid.Row
          style={{
            border: "1px solid white",
            height: "35rem",
            background: "orange",
            color: "white",
            textAlign: "center",
          }}
        >
          {/* Student Name */}
          <Grid.Column
            width={3}
            style={{
              color: "white",
              marginLeft: "5rem",
            }}
          >
            <Grid.Row>
              <h2>Student Name</h2>
            </Grid.Row>
            <Divider hidden />
            <Grid.Row
              style={{
                backgroundColor: "#d1d1d1",
                height: "80%",
              }}
            ></Grid.Row>
          </Grid.Column>

          {/* Period */}
          <Grid.Column
            width={3}
            style={{
              color: "white",
              marginLeft: "5rem",
            }}
          >
            <Grid.Row>
              <h2>Period</h2>
            </Grid.Row>
            <Divider hidden />
            <Grid.Row
              style={{
                backgroundColor: "#d1d1d1",
                height: "80%",
              }}
            ></Grid.Row>
          </Grid.Column>

          {/* Year */}
          <Grid.Column
            width={3}
            style={{
              color: "white",
              marginLeft: "5rem",
            }}
          >
            <Grid.Row>
              <h2>Year</h2>
            </Grid.Row>
            <Divider hidden />
            <Grid.Row
              style={{
                backgroundColor: "#d1d1d1",
                height: "80%",
              }}
            ></Grid.Row>
          </Grid.Column>

          {/* Semester */}
          <Grid.Column
            width={3}
            style={{
              color: "white",
              marginLeft: "5rem",
            }}
          >
            <Grid.Row>
              <h2>Semester</h2>
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
    </>
  );
};

export default TeacherProfile;
