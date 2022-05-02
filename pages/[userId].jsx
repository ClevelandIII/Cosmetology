import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { parseCookies } from "nookies";
import Cookies from "js-cookie";

import {
  Grid,
  Card,
  Icon,
  Image,
  Divider,
  Rating,
  Dropdown,
  Segment,
} from "semantic-ui-react";

const profilePage = ({ stylist, profile }) => {
  const router = useRouter();
  const [stylists, setStylist] = useState([]);
  const [hidden, setHidden] = useState(false);
  const [hours, setHours] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  let user = stylist.userId;
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
      setStylist(results.data);
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
    if (stylist.isTeacher === "false") {
      return count++;
    } else {
      count = count;
    }
    return console.log(count);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    let hour = hours

    try {
      const res = await axios.patch("/api/v1/user/UserProfile", {
        hour,
        user
      });
      setToken(res.data);

      // console.log("tester");
      // const results = await axios.get(`http://localhost:3001/api/v1/stylists`);
      // stylists = results.data;

      // let Testr = stylists.find((stylist) => stylist.email === stylist.email);

      // const stylist = await StylistModel.findById(Testr._id);
      // stylist.hours.push(hours);
      // await stylist.save();
      setHidden(false);
    } catch (error) {
      console.log(error);
    }
    setFormLoading(false);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "media" && files.length > 0) {
      setMedia(() => files[0]);
      setMediaPreview(() => URL.createObjectURL(files[0]));
      setHighlighted(true);
    } else {
      setHours(value);
    }
  };

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
            <Grid.Row className="test" columns={3}>
              <>
                {stylists.map((stylist) => {
                  if (stylist.isTeacher === "false") {
                    return (
                      <>
                        <Grid.Column
                          className="Indexcolumn clientListColumn"
                          key={stylist._id}
                          setStylists={stylists}
                          style={{ textalign: "center" }}
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
                          style={{ textalign: "center" }}
                        >
                          <Segment className="indexCenter">
                            <p>{stylist.hours}</p>
                          </Segment>
                        </Grid.Column>
                        <Grid.Column
                          className="Indexcolumn"
                          key={stylist._id}
                          setStylists={stylists}
                          style={{ textalign: "center" }}
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
              <Grid.Row
                style={{
                  border: "1px solid white",
                  height: "5rem",
                  background: "orange",
                  color: "white",
                  textalign: "center",
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
              <div style={{ textalign: "center" }}>
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
                textalign: "center",
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
                        style={{ textalign: "center" }}
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
                        style={{ textalign: "center" }}
                      >
                        <Segment className="indexCenter">
                          <p>{client[2]}</p>
                        </Segment>
                      </Grid.Column>
                      <Grid.Column
                        className="Indexcolumn"
                        style={{ textalign: "center" }}
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
      )}
    </>
  );
  // // const { userId } = router.query;
  // // const ownAccount = stylist?._id === stylist?._id;
  // const Options = [
  //   {
  //     key: "Number of Visits",
  //     text: "Number of Visits",
  //     value: "Number of Visits",
  //   },
  //   {
  //     key: "Date Created",
  //     text: "Date Created",
  //     value: "Date Created",
  //   },
  //   {
  //     key: "Most Recently Created",
  //     text: "Most Recently Created",
  //     value: "Most Recently Created",
  //   },
  //   {
  //     key: "Name",
  //     text: "Name",
  //     value: "Name",
  //   },
  // ];

  // if (!stylist) return null;

  // return (
  //   <>
  //     <div>
  //       <Grid stackable style={{ margin: "3rem" }}>
  //         <Grid.Column width={8} className="roz">
  //           <Grid.Row
  //             style={{ margin: "3.8rem", textalign: "center" }}
  //             className="roz3"
  //           >
  //             <Image
  //               src={profile.profilePicURL}
  //               avatar
  //               size="medium"
  //               bordered
  //               centered
  //               circular
  //             />
  //           </Grid.Row>
  //           <Grid.Row style={{ marginLeft: "15rem", textalign: "center" }}>
  //             <Card>
  //               <Card.Content>
  //                 <Card.Header>
  //                   {profile.firstName} {profile.lastName}
  //                 </Card.Header>
  //                 <Card.Meta>
  //                   <span className="date">
  //                     Teacher: {profile.teacher} | Session: {profile.session}
  //                   </span>
  //                 </Card.Meta>
  //                 <Card.Description>Stylist </Card.Description>
  //               </Card.Content>
  //             </Card>
  //           </Grid.Row>
  //         </Grid.Column>
  //         <Grid.Column
  //           width={7}
  //           style={{ textalign: "center", marginTop: "10rem" }}
  //           className="roz2"
  //         >
  //           <Grid.Row
  //             style={{
  //               border: "1px solid white",
  //               height: "5rem",
  //               background: "orange",
  //               color: "white",
  //               textalign: "center",
  //               paddingTop: "1.2rem",
  //             }}
  //           >
  //             <h1>Hours</h1>
  //           </Grid.Row>
  //           <Divider hidden />
  //           <Grid.Row
  //             style={{
  //               border: "1px solid white",
  //               height: "5rem",
  //               background: "orange",
  //               color: "white",
  //               textalign: "center",
  //               paddingTop: "1.2rem",
  //             }}
  //           >
  //             <h1>Clients</h1>
  //           </Grid.Row>
  //           <Divider hidden />
  //           <Grid.Row
  //             style={{
  //               border: "1px solid white",
  //               height: "5rem",
  //               background: "orange",
  //               color: "white",
  //               textalign: "center",
  //               paddingTop: "1.6rem",
  //             }}
  //           >
  //             {/*This rating from semantic react allows the user to rank, but it dosent list an overall ranking. */}
  //             {/*If we want to instead record a visitors ranking we can, otherwise this might not work...*/}
  //             <Rating icon="star" defaultRating={0} maxRating={5} />
  //           </Grid.Row>
  //         </Grid.Column>
  //       </Grid>
  //       <Grid className="tableindex" stackable style={{ padding: "3rem" }}>
  //         <Grid.Row className="mini3">
  //           <div style={{ textalign: "center" }}>
  //             <h1>Previous Clients</h1>
  //             <Dropdown
  //               placeholder="Sort By..."
  //               fluid
  //               selection
  //               options={Options}
  //             />
  //           </div>
  //         </Grid.Row>
  //         <Grid.Row
  //           columns={3}
  //           style={{
  //             border: "2px solid white",
  //             // height: "35rem",
  //             background: "orange",
  //             color: "black",
  //             textalign: "center",
  //             // overflow: "scroll",
  //             justifyContent: "space-evenly",
  //           }}
  //         >
  //           <>
  //             <Grid.Column>
  //               <Segment>Client</Segment>
  //             </Grid.Column>
  //             <Grid.Column>
  //               <Segment>Last Visited</Segment>
  //             </Grid.Column>
  //             <Grid.Column>
  //               <Segment>Date Created</Segment>
  //             </Grid.Column>
  //           </>
  //         </Grid.Row>
  //         <Grid.Row className="test" columns={3}>
  //           <>
  //             <Grid.Column className="Indexcolumn clientListColumn">
  //               <Segment className="indexCenter">
  //                 Hugemclarge biggieweight
  //               </Segment>
  //             </Grid.Column>
  //             <Grid.Column className="Indexcolumn">
  //               <Segment className="indexCenter">1/2/34</Segment>
  //             </Grid.Column>
  //             <Grid.Column className="Indexcolumn">
  //               <Segment className="indexCenter">1/2/34</Segment>
  //             </Grid.Column>

  //             <Grid.Column className="Indexcolumn clientListColumn">
  //               <Segment className="indexCenter">Well Fargo</Segment>
  //             </Grid.Column>
  //             <Grid.Column className="Indexcolumn">
  //               <Segment className="indexCenter">1/2/34</Segment>
  //             </Grid.Column>
  //             <Grid.Column className="Indexcolumn">
  //               <Segment className="indexCenter">1/2/34</Segment>
  //             </Grid.Column>

  //             <Grid.Column className="Indexcolumn clientListColumn">
  //               <Segment className="indexCenter">Well Fargo</Segment>
  //             </Grid.Column>
  //             <Grid.Column className="Indexcolumn">
  //               <Segment className="indexCenter">1/2/34</Segment>
  //             </Grid.Column>
  //             <Grid.Column className="Indexcolumn">
  //               <Segment className="indexCenter">1/2/34</Segment>
  //             </Grid.Column>

  //             <Grid.Column className="Indexcolumn clientListColumn">
  //               <Segment className="indexCenter">Well Fargo</Segment>
  //             </Grid.Column>
  //             <Grid.Column className="Indexcolumn">
  //               <Segment className="indexCenter">1/2/34</Segment>
  //             </Grid.Column>
  //             <Grid.Column className="Indexcolumn">
  //               <Segment className="indexCenter">1/2/34</Segment>
  //             </Grid.Column>

  //             <Grid.Column className="Indexcolumn clientListColumn">
  //               <Segment className="indexCenter">Well Fargo</Segment>
  //             </Grid.Column>
  //             <Grid.Column className="Indexcolumn">
  //               <Segment className="indexCenter">1/2/34</Segment>
  //             </Grid.Column>
  //             <Grid.Column className="Indexcolumn">
  //               <Segment className="indexCenter">1/2/34</Segment>
  //             </Grid.Column>

  //             <Grid.Column className="Indexcolumn clientListColumn">
  //               <Segment className="indexCenter">Well Fargo</Segment>
  //             </Grid.Column>
  //             <Grid.Column className="Indexcolumn">
  //               <Segment className="indexCenter">1/2/34</Segment>
  //             </Grid.Column>
  //             <Grid.Column className="Indexcolumn">
  //               <Segment className="indexCenter">1/2/34</Segment>
  //             </Grid.Column>

  //             <Grid.Column className="Indexcolumn clientListColumn">
  //               <Segment className="indexCenter">Well Fargo</Segment>
  //             </Grid.Column>
  //             <Grid.Column className="Indexcolumn">
  //               <Segment className="indexCenter">1/2/34</Segment>
  //             </Grid.Column>
  //             <Grid.Column className="Indexcolumn">
  //               <Segment className="indexCenter">1/2/34</Segment>
  //             </Grid.Column>

  //             <Grid.Column className="Indexcolumn clientListColumn">
  //               <Segment className="indexCenter">Well Fargo</Segment>
  //             </Grid.Column>
  //             <Grid.Column className="Indexcolumn">
  //               <Segment className="indexCenter">1/2/34</Segment>
  //             </Grid.Column>
  //             <Grid.Column className="Indexcolumn">
  //               <Segment className="indexCenter">1/2/34</Segment>
  //             </Grid.Column>

  //             <Grid.Column className="Indexcolumn clientListColumn">
  //               <Segment className="indexCenter">Well Fargo</Segment>
  //             </Grid.Column>
  //             <Grid.Column className="Indexcolumn">
  //               <Segment className="indexCenter">1/2/34</Segment>
  //             </Grid.Column>
  //             <Grid.Column className="Indexcolumn">
  //               <Segment className="indexCenter">1/2/34</Segment>
  //             </Grid.Column>

  //             <Grid.Column className="Indexcolumn clientListColumn">
  //               <Segment className="indexCenter">Well Fargo</Segment>
  //             </Grid.Column>
  //             <Grid.Column className="Indexcolumn">
  //               <Segment className="indexCenter">1/2/34</Segment>
  //             </Grid.Column>
  //             <Grid.Column className="Indexcolumn">
  //               <Segment className="indexCenter">1/2/34</Segment>
  //             </Grid.Column>

  //             <Grid.Column className="Indexcolumn clientListColumn">
  //               <Segment className="indexCenter">Well Fargo</Segment>
  //             </Grid.Column>
  //             <Grid.Column className="Indexcolumn">
  //               <Segment className="indexCenter">1/2/34</Segment>
  //             </Grid.Column>
  //             <Grid.Column className="Indexcolumn">
  //               <Segment className="indexCenter">1/2/34</Segment>
  //             </Grid.Column>
  //           </>
  //         </Grid.Row>
  //       </Grid>
  //     </div>
  //   </>
  // );
};

profilePage.getInitialProps = async (ctx) => {
  try {
    const { userId } = ctx.query;
    console.log(userId)
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
