import React, { useState } from "react";
import {
  Grid,
  Card,
  Icon,
  Image,
  Divider,
  Rating,
  Dropdown,
} from "semantic-ui-react";

const StudentProfile = () => {
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
      <div>
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
                  <Card.Header>Name Of the Stylist</Card.Header>
                  <Card.Meta>
                    <span className="date">Session & Teacher</span>
                  </Card.Meta>
                  <Card.Description>Stylist </Card.Description>
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
              <h1>Hours</h1>
            </Grid.Row>
            <Divider hidden />
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
              <h1>Clients</h1>
            </Grid.Row>
            <Divider hidden />
            <Grid.Row
              style={{
                border: "1px solid white",
                height: "5rem",
                background: "orange",
                color: "white",
                textAlign: "center",
                paddingTop: "1.6rem",
              }}
            >
              {/*This rating from semantic react allows the user to rank, but it dosent list an overall ranking. */}
              {/*If we want to instead record a visitors ranking we can, otherwise this might not work...*/}
              <Rating icon="star" defaultRating={0} maxRating={5} />
            </Grid.Row>
          </Grid.Column>
        </Grid>
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
            {/*Im only including two information bits here. */}
            {/*There is no reason to add the name of the stylist since this is their profile page. */}
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
    </>
  );
};

export default StudentProfile;
