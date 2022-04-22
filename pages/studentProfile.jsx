import React, { useEffect, useState } from "react";
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
} from "semantic-ui-react";
import axios from "axios";
// Very Similar to StudentProfile, only differences are studentList instead of clientList and
// class they teach/session

const StudentProfile = ({ stylist }) => {
  const [stylists, setStylist] = useState();
  const [hidden, setHidden] = useState(false);
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

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "media" && files.length > 0) {
      setMedia(() => files[0]);
      setMediaPreview(() => URL.createObjectURL(files[0]));
      setHighlighted(true);
    } else {
      setStylist((prev) => ({ ...prev, [name]: value }));
    }
  };

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
                <Card.Description>Stylist </Card.Description>
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
            {hidden ? (
              <div>
                <h1>
                  Hours:
                  <input
                    style={{ borderRadius: "20px", width: "30%" }}
                    placeholder={stylist.hours}
                    name="firstName"
                    value=""
                    className="hour"
                  />
                  <button>Submit</button>
                </h1>
              </div>
            ) : (
              <div>
                <h1>
                  Hours: {stylist.hours}
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
            {/* <Icon
                name="plus"
                onClick={() => {
                  //   try {
                  //   stylist.hours.push([
                  //     client.firstName,
                  //     client.lastName,
                  //     client.dateCreated,
                  //     client.appointmentDate,
                  //   ]);
                  //   console.log(`stylist`, stylist);
                  //   await stylist.save();
                  //   // console.log(`stylist2`, stylist);
                  //   return res.status(200).send("All Good");
                  // } catch (error) {
                  //   console.log(error);
                  // }
                }}
              /> */}
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
            <h1>Number of Clients: {stylist.pastClients.length}</h1>
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
      ;
      <Grid className="tableindex" stackable style={{ padding: "3rem" }}>
        <Grid.Row className="mini3">
          <div style={{ textAlign: "center" }}>
            <h1>All Clients of {stylist.firstName}</h1>
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

        <Grid.Row className="test" columns={3}>
          <>
            {stylist.pastClients.map((client) => {
              console.log(client);
              return (
                <>
                  <Grid.Column
                    className="Indexcolumn clientListColumn"
                    style={{ textAlign: "center" }}
                  >
                    <Popup
                      trigger={
                        <Segment className="indexCenter">
                          <p>{`${client[0]} ${client[1]}`}</p>
                        </Segment>
                      }
                      hoverable
                      position="top center"
                    >
                      <h4>Add Visit </h4>
                      <h4>Hair Style</h4>
                      <h4>Special Treatments</h4>
                    </Popup>
                  </Grid.Column>
                  <Grid.Column
                    className="Indexcolumn"
                    style={{ textAlign: "center" }}
                  >
                    <Segment className="indexCenter">
                      <p>{client[2]}</p>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column
                    className="Indexcolumn"
                    style={{ textAlign: "center" }}
                  >
                    <Segment className="indexCenter">
                      <p>{client[3]}</p>
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
export default StudentProfile;
