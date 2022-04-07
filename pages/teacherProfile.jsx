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

      <Grid columns={4} divided style={{backgroundColor: "orange", width: "80vw", margin: "0 auto"}}>
    <Grid.Row>
      <Grid.Column floated width={4}>
       <Image src='https://freesvg.org/img/abstract-user-flat-4.png' style={{width: "30%"}}/>
       test
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
    </>
  );
};

export default TeacherProfile;
