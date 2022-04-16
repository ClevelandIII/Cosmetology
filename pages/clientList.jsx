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

import React from "react";

const clientList = ({}) => {
  return (
    <>
     <body>
      <Grid className="StudentGrid" columns="equal" centered divided='vertically'  relaxed='very'>

        <Grid.Row >
          <Grid.Column className="column studentColumn">
            <Segment className="yearSemesterCenter">Name</Segment>
          </Grid.Column>
          <Grid.Column className="column studentColumn">
            <Segment className="yearSemesterCenter">Stylist</Segment>
          </Grid.Column>
          <Grid.Column className="column studentColumn">
            <Segment className="yearSemesterCenter">Date Created</Segment>
          </Grid.Column>
          <Grid.Column className="column">
            <Segment className="yearSemesterCenter">Date Updated</Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row className=" studentRow">
          <Grid.Column className="studentColumn">
            <Segment style={{width: "110%"}}>
              <Image className="studentListPic" src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" />{""}
              <p className="studentListName" style={{width: "80%"}}>First Last</p>
            </Segment>
          </Grid.Column>
          <Grid.Column className="studentColumn">
            <Segment style={{width: "110%"}}>
              <Image className="studentListPic" src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" />{" "}
              <p className="studentListName"style={{width: "80%"}}>Houston Solis</p>
            </Segment>
          </Grid.Column>
          <Grid.Column className="studentColumn">
            <Segment className="yearSemesterCenter" >4/8/2022</Segment>
          </Grid.Column>
          <Grid.Column >
            <Segment className="yearSemesterCenter">4/9/2022</Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className=" studentRow">
          <Grid.Column className="studentColumn">
            <Segment style={{width: "110%"}}>
              <Image className="studentListPic" src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" />{""}
              <p className="studentListName" style={{width: "80%"}}>Sabiha Meadows</p>
            </Segment>
          </Grid.Column>

          <Grid.Column className="studentColumn">
            <Segment style={{width: "110%"}}>
              <Image className="studentListPic" src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" />{" "}
              <p className="studentListName"style={{width: "80%"}}>Lorelai Doyle</p>
            </Segment>
          </Grid.Column>
          <Grid.Column className="studentColumn">
            <Segment className="yearSemesterCenter" >4/8/2022</Segment>
          </Grid.Column>
          <Grid.Column >
            <Segment className="yearSemesterCenter">4/9/2022</Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className=" studentRow">
          <Grid.Column className="studentColumn">
            <Segment style={{width: "110%"}}>
              <Image className="studentListPic" src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" />{""}
              <p className="studentListName" style={{width: "80%"}}>Shawn Mata</p>
            </Segment>
          </Grid.Column>

          <Grid.Column className="studentColumn">
            <Segment style={{width: "110%"}}>
              <Image className="studentListPic" src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" />{" "}
              <p className="studentListName"style={{width: "80%"}}>Edison Mair</p>
            </Segment>
          </Grid.Column>
          <Grid.Column className="studentColumn">
            <Segment className="yearSemesterCenter" >4/8/2022</Segment>
          </Grid.Column>
          <Grid.Column >
            <Segment className="yearSemesterCenter">4/9/2022</Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className=" studentRow">
          <Grid.Column className="studentColumn">
            <Segment style={{width: "110%"}}>
              <Image className="studentListPic" src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" />{""}
              <p className="studentListName" style={{width: "80%"}}>first last</p>
            </Segment>
          </Grid.Column>

          <Grid.Column className="studentColumn">
            <Segment style={{width: "110%"}}>
              <Image className="studentListPic" src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" />{" "}
              <p className="studentListName"style={{width: "80%"}}>first last</p>
            </Segment>
          </Grid.Column>
          <Grid.Column className="studentColumn">
            <Segment className="yearSemesterCenter" >4/8/2022</Segment>
          </Grid.Column>
          <Grid.Column >
            <Segment className="yearSemesterCenter">4/9/2022</Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className=" studentRow">
          <Grid.Column className="studentColumn">
            <Segment style={{width: "110%"}}>
              <Image className="studentListPic" src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" />{""}
              <p className="studentListName" style={{width: "80%"}}>first last</p>
            </Segment>
          </Grid.Column>
          <Grid.Column className="studentColumn">
            <Segment style={{width: "110%"}}>
              <Image className="studentListPic" src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" />{" "}
              <p className="studentListName"style={{width: "80%"}}>first last</p>
            </Segment>
          </Grid.Column>
          <Grid.Column className="studentColumn">
            <Segment className="yearSemesterCenter" >4/8/2022</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment className="yearSemesterCenter">4/9/2022</Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className=" studentRow">
          <Grid.Column className="studentColumn">
            <Segment style={{width: "110%"}}>
              <Image className="studentListPic" src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" />{""}
              <p className="studentListName" style={{width: "80%"}}>first last</p>
            </Segment>
          </Grid.Column>

          <Grid.Column className="studentColumn">
            <Segment style={{width: "110%"}}>
              <Image className="studentListPic" src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" />{" "}
              <p className="studentListName"style={{width: "80%"}}>first last</p>
            </Segment>
          </Grid.Column>
          <Grid.Column className="studentColumn">
            <Segment className="yearSemesterCenter" >4/8/2022</Segment>
          </Grid.Column>
          <Grid.Column >
            <Segment className="yearSemesterCenter">4/9/2022</Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className=" studentRow">
          <Grid.Column className="studentColumn">
            <Segment style={{width: "110%"}}>
              <Image className="studentListPic" src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" />{""}
              <p className="studentListName" style={{width: "80%"}}>first last</p>
            </Segment>
          </Grid.Column>

          <Grid.Column className="studentColumn">
            <Segment style={{width: "110%"}}>
              <Image className="studentListPic" src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" />{" "}
              <p className="studentListName"style={{width: "80%"}}>first last</p>
            </Segment>
          </Grid.Column>
          <Grid.Column className="studentColumn">
            <Segment className="yearSemesterCenter" >4/8/2022</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment className="yearSemesterCenter">4/9/2022</Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className=" studentRow">
          <Grid.Column className="studentColumn">
            <Segment style={{width: "110%"}}>
              <Image className="studentListPic" src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" />{""}
              <p className="studentListName" style={{width: "80%"}}>first last</p>
            </Segment>
          </Grid.Column>

          <Grid.Column className="studentColumn">
            <Segment style={{width: "110%"}}>
              <Image className="studentListPic" src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" />{" "}
              <p className="studentListName"style={{width: "80%"}}>first last</p>
            </Segment>
          </Grid.Column>
          <Grid.Column className="studentColumn">
            <Segment className="yearSemesterCenter" >4/8/2022</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment className="yearSemesterCenter">4/9/2022</Segment>
          </Grid.Column>
        </Grid.Row>
        
        
      </Grid >
      </body>
    </>
  );
};

export default clientList;
