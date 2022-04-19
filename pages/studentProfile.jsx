import React, { useState } from "react";
import { useRouter } from "next/router";
import {useState, useEffect} from "react"
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

const StudentProfile = ({stylist}) => {

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
                  <Card.Header>{stylist.firstName} {stylist.lastName}</Card.Header>
                  <Card.Meta>
                    <span className="date">Teacher: {stylist.teacher} || Session: {stylist.session}</span>
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
        <Grid className='tableindex' stackable style={{ padding: "3rem" }}>
        <Grid.Row className="mini3">
          <div style={{ textAlign: "center"}}>
            <h1>Previous Clients</h1>
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
        <Grid.Row className="test"
          columns={3}
        >
          <>
            <Grid.Column className="Indexcolumn clientListColumn">
              <Segment className="indexCenter">Hugemclarge biggieweight</Segment>
            </Grid.Column>
            <Grid.Column className="Indexcolumn">
              <Segment className="indexCenter">1/2/34</Segment>
            </Grid.Column>
            <Grid.Column className="Indexcolumn">
              <Segment className="indexCenter">1/2/34</Segment>
            </Grid.Column>

            <Grid.Column className="Indexcolumn clientListColumn">
              <Segment className="indexCenter">Well Fargo</Segment>
            </Grid.Column>
            <Grid.Column className="Indexcolumn">
              <Segment className="indexCenter">1/2/34</Segment>
            </Grid.Column>
            <Grid.Column className="Indexcolumn">
              <Segment className="indexCenter">1/2/34</Segment>
            </Grid.Column>

            <Grid.Column className="Indexcolumn clientListColumn">
              <Segment className="indexCenter">Well Fargo</Segment>
            </Grid.Column>
            <Grid.Column className="Indexcolumn">
              <Segment className="indexCenter">1/2/34</Segment>
            </Grid.Column>
            <Grid.Column className="Indexcolumn">
              <Segment className="indexCenter">1/2/34</Segment>
            </Grid.Column>

            <Grid.Column className="Indexcolumn clientListColumn">
              <Segment className="indexCenter">Well Fargo</Segment>
            </Grid.Column>
            <Grid.Column className="Indexcolumn">
              <Segment className="indexCenter">1/2/34</Segment>
            </Grid.Column>
            <Grid.Column className="Indexcolumn">
              <Segment className="indexCenter">1/2/34</Segment>
            </Grid.Column>

            <Grid.Column className="Indexcolumn clientListColumn">
              <Segment className="indexCenter">Well Fargo</Segment>
            </Grid.Column>
            <Grid.Column className="Indexcolumn">
              <Segment className="indexCenter">1/2/34</Segment>
            </Grid.Column>
            <Grid.Column className="Indexcolumn">
              <Segment className="indexCenter">1/2/34</Segment>
            </Grid.Column>

            <Grid.Column className="Indexcolumn clientListColumn">
              <Segment className="indexCenter">Well Fargo</Segment>
            </Grid.Column>
            <Grid.Column className="Indexcolumn">
              <Segment className="indexCenter">1/2/34</Segment>
            </Grid.Column>
            <Grid.Column className="Indexcolumn">
              <Segment className="indexCenter">1/2/34</Segment>
            </Grid.Column>

            <Grid.Column className="Indexcolumn clientListColumn">
              <Segment className="indexCenter">Well Fargo</Segment>
            </Grid.Column>
            <Grid.Column className="Indexcolumn">
              <Segment className="indexCenter">1/2/34</Segment>
            </Grid.Column>
            <Grid.Column className="Indexcolumn">
              <Segment className="indexCenter">1/2/34</Segment>
            </Grid.Column>

            <Grid.Column className="Indexcolumn clientListColumn">
              <Segment className="indexCenter">Well Fargo</Segment>
            </Grid.Column>
            <Grid.Column className="Indexcolumn">
              <Segment className="indexCenter">1/2/34</Segment>
            </Grid.Column>
            <Grid.Column className="Indexcolumn">
              <Segment className="indexCenter">1/2/34</Segment>
            </Grid.Column>

            <Grid.Column className="Indexcolumn clientListColumn">
              <Segment className="indexCenter">Well Fargo</Segment>
            </Grid.Column>
            <Grid.Column className="Indexcolumn">
              <Segment className="indexCenter">1/2/34</Segment>
            </Grid.Column>
            <Grid.Column className="Indexcolumn">
              <Segment className="indexCenter">1/2/34</Segment>
            </Grid.Column>

            <Grid.Column className="Indexcolumn clientListColumn">
              <Segment className="indexCenter">Well Fargo</Segment>
            </Grid.Column>
            <Grid.Column className="Indexcolumn">
              <Segment className="indexCenter">1/2/34</Segment>
            </Grid.Column>
            <Grid.Column className="Indexcolumn">
              <Segment className="indexCenter">1/2/34</Segment>
            </Grid.Column>

            <Grid.Column className="Indexcolumn clientListColumn">
              <Segment className="indexCenter">Well Fargo</Segment>
            </Grid.Column>
            <Grid.Column className="Indexcolumn">
              <Segment className="indexCenter">1/2/34</Segment>
            </Grid.Column>
            <Grid.Column className="Indexcolumn">
              <Segment className="indexCenter">1/2/34</Segment>
            </Grid.Column>
          </>
        </Grid.Row>
      </Grid>
      
      </div>
    </>
  );
};

export default StudentProfile;
