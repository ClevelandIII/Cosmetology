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
} from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import axios from "axios";

const clientList = ({}) => {
  const [clients, setClients] = useState([]);

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
    // console.log(clients);
  }, []);
  console.log(clients);


  const [stylists, setStylists] = useState([]);
 
  // const [classYear, setClassYear] = useState([])

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
    // getClassYear()
  }, []);

  return (
    <>
  
  <Grid className="StudentGrid" columns="equal" centered divided='vertically'  relaxed='very'>

<Grid.Row >
  <Grid.Column className="column studentColumn">
    <Segment className="yearSemesterCenter">Name</Segment>
  </Grid.Column>
  <Grid.Column className="column studentColumn">
    <Segment className="yearSemesterCenter">Stylist</Segment>
  </Grid.Column>
  <Grid.Column className="column" style={{left:"12%" }}>
    <Segment className="yearSemesterCenter">Date Created</Segment>
  </Grid.Column>
  <Grid.Column className="column">
    <Segment className="yearSemesterCenter">Date Updated</Segment>
  </Grid.Column>
</Grid.Row>

{clients.map((client) => {
    return (
      <>
<Grid.Row className=" studentRow">
  <Grid.Column className="studentColumn">
    <Segment style={{width: "110%"}}>
    
      <Image className="studentListPic" src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"/>{""}
     
      <p className="studentListName" style={{width: "80%"}}>{client.firstName} {client.lastName}</p>
    </Segment>
  </Grid.Column>
  <Grid.Column className="studentColumn">
    <Segment style={{width: "110%"}}>
    
      <Image className="studentListPic" src={client.stylistPic} />{" "}
      
      <p className="studentListName"style={{width: "80%"}}>{client.stylistName}</p>
    </Segment>
  </Grid.Column>
  <Grid.Column className="studentColumn">
    <Segment className="yearSemesterCenter" >{client.dateCreated}</Segment>
  </Grid.Column>
  <Grid.Column style={{ paddingLeft: "80px" }}>
    <Segment className="yearSemesterCenter">{client.dateCreated}</Segment>
  </Grid.Column>
</Grid.Row>
</>
            )
          })}
        
      </Grid >
    </>
  );
};

export default clientList;
