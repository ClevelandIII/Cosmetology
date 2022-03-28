import React, { useState } from "react";
import { Grid, Card, Icon, Image, Divider } from "semantic-ui-react";

const StudentProfile = () => {
  const [user, setUser] = useState(false);
  return (
    <>
      <Grid stackable style={{ padding: "3rem" }}>
        <Grid.Column width={7}>
          <>
            <Card>
              <Image
                src="https://i.postimg.cc/RFDtVvtb/cosmetology-Logo.png"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                  Matthew is a musician living in Nashville.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
          </>
        </Grid.Column>
        <Grid.Column width={7}>
          <Grid.Row>
            <div
              style={{
                border: "1px solid white",
                background: "orange",
                color: "white",
              }}
            >
              Hours
            </div>
          </Grid.Row>
          <Divider />
          <Grid.Row>
            <div
              style={{
                border: "1px solid white",
                background: "orange",
                color: "white",
              }}
            >
              Clients
            </div>
          </Grid.Row>
          <Divider />
          <Grid.Row>
            <div
              style={{
                border: "1px solid white",
                background: "orange",
                color: "white",
              }}
            >
              Rating
            </div>
          </Grid.Row>
        </Grid.Column>
      </Grid>
      <div style={{ padding: "3rem" }}>
        <div
          style={{
            border: "2px solid black",
            height: "30rem",
          }}
        >
          Previous Clients
        </div>
      </div>
    </>
  );
};

export default StudentProfile;
