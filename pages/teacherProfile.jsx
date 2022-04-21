import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  Icon,
  Image,
  Divider,
  Dropdown,
  Segment,
} from "semantic-ui-react";
import axios from "axios";
// Very Similar to StudentProfile, only differences are studentList instead of clientList and
// class they teach/session

const TeacherProfile = ({ stylist }) => {
  // const [stylists, setStylist] = useState();
  const [stylists, setStylists] = useState([]);
  const Options = [
    {
      key: "Name",
      text: "Name",
      value: "Name",
    },
    {
      key: "Last Name",
      text: "Last Name",
      value: "Last Name",
    },
    {
      key: "Hours",
      text: "Hours",
      value: "Hours",
    },
    {
      key: "Year/Session",
      text: "Year/Session",
      value: "Year/Session",
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
    // console.log(stylists);
  }, []);

  return (
    <>
      <Grid stackable style={{ margin: "3rem" }}>
        <Grid.Column width={8} className="roz">
          <Grid.Row
            style={{ margin: "3.8rem", textAlign: "center" }}
            className="roz3"
          >
            <Image
              src={stylist.profilePicURL}
              avatar
              size="medium"
              bordered
              centered
              circular
            />
          </Grid.Row>
          <Grid.Row style={{ marginLeft: "15rem", textAlign: "center" }}>
            <Card>
              <Card.Content>
                <Card.Header>
                  {stylist.firstName} {stylist.lastName}
                </Card.Header>
                <Card.Meta>
                  <span className="date">
                    Teacher: {stylist.teacher} | Session: {stylist.session}
                  </span>
                </Card.Meta>
                <Card.Description>Teacher </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column
          width={7}
          style={{ textAlign: "center", marginTop: "10rem" }}
          className="roz2"
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
            <h1>Number of Students: {stylists.length}</h1>
          </Grid.Row>
        </Grid.Column>
      </Grid>

      <Grid className="tableindex" stackable style={{ padding: "3rem" }}>
        <Grid.Row className="mini3">
          <div style={{ textAlign: "center", paddingLeft: "4%" }}>
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
            textAlign: "center",
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
        <Grid.Row className="test" columns={3}>
          <>
            {stylists.map((stylist) => {
              return (
                <>
                  <Grid.Column
                    className="Indexcolumn clientListColumn"
                    key={stylist._id}
                    setStylists={stylists}
                    style={{ textAlign: "center" }}
                  >
                    <Segment className="indexCenter">
                      <p>
                        {stylist.firstName} {stylist.lastName}
                      </p>
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
                      <p>
                        {stylist.pastClients.map((client) => {
                          return <>{`${client[0]} `}</>;
                        })}
                      </p>
                    </Segment>
                  </Grid.Column>
                </>
              );
            })}
          </>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default TeacherProfile;
