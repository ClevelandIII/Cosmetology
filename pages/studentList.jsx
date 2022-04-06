import {
  Grid,
  Image,
  Divider,
  Container,
  Loader,
  Segment,
} from "semantic-ui-react";

import React from "react";

const studentList = () => {
  return (
    <>
      <Grid className="StudentGrid" columns="equal" centered divided='vertically'  relaxed='very'>

        <Grid.Row >
          <Grid.Column className="column">
            <Segment className="yearSemesterCenter">Student</Segment>
          </Grid.Column>
          <Grid.Column className="column">
            <Segment className="yearSemesterCenter">Teacher</Segment>
          </Grid.Column>
          <Grid.Column className="column">
            <Segment className="yearSemesterCenter">Year</Segment>
          </Grid.Column>
          <Grid.Column className="column">
            <Segment className="yearSemesterCenter">Semester</Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row className=" studentRow">
          <Grid.Column className="studentColumn">
            <Segment style={{width: "110%"}}>
              <Image className="studentListPic" src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" />{""}
              <p className="studentListName" style={{width: "80%"}}>William Gill</p>
            </Segment>
          </Grid.Column>
          <Grid.Column className="studentColumn">
            <Segment style={{width: "110%"}}>
              <Image className="studentListPic" src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" />{" "}
              <p className="studentListName"style={{width: "80%"}}>Abdi Romero</p>
            </Segment>
          </Grid.Column>
          <Grid.Column className="studentColumn">
            <Segment className="yearSemesterCenter" >2nd year</Segment>
          </Grid.Column>
          <Grid.Column className="studentColumn">
            <Segment className="yearSemesterCenter">3rd Semester</Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className=" studentRow">
          <Grid.Column className="studentColumn">
            <Segment style={{width: "110%"}}>
              <Image className="studentListPic" src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" />{""}
              <p className="studentListName" style={{width: "80%"}}>Cleveland Williams</p>
            </Segment>
          </Grid.Column>

          <Grid.Column className="studentColumn">
            <Segment style={{width: "110%"}}>
              <Image className="studentListPic" src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" />{" "}
              <p className="studentListName"style={{width: "80%"}}>Daniel Nijdl</p>
            </Segment>
          </Grid.Column>
          <Grid.Column className="studentColumn">
            <Segment className="yearSemesterCenter" >2nd year</Segment>
          </Grid.Column>
          <Grid.Column className="studentColumn">
            <Segment className="yearSemesterCenter">2nd Semester</Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className=" studentRow">
          <Grid.Column className="studentColumn">
            <Segment style={{width: "110%"}}>
              <Image className="studentListPic" src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" />{""}
              <p className="studentListName" style={{width: "80%"}}>Jason Enciso</p>
            </Segment>
          </Grid.Column>

          <Grid.Column className="studentColumn">
            <Segment style={{width: "110%"}}>
              <Image className="studentListPic" src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" />{" "}
              <p className="studentListName"style={{width: "80%"}}>Rando Filler</p>
            </Segment>
          </Grid.Column>
          <Grid.Column className="studentColumn">
            <Segment className="yearSemesterCenter" >1st year</Segment>
          </Grid.Column>
          <Grid.Column className="studentColumn">
            <Segment className="yearSemesterCenter">4th Semester</Segment>
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
            <Segment className="yearSemesterCenter" >1st year</Segment>
          </Grid.Column>
          <Grid.Column className="studentColumn">
            <Segment className="yearSemesterCenter">1st Semester</Segment>
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
            <Segment className="yearSemesterCenter" >1st year</Segment>
          </Grid.Column>
          <Grid.Column className="studentColumn">
            <Segment className="yearSemesterCenter">1st Semester</Segment>
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
            <Segment className="yearSemesterCenter" >1st year</Segment>
          </Grid.Column>
          <Grid.Column className="studentColumn">
            <Segment className="yearSemesterCenter">1st Semester</Segment>
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
            <Segment className="yearSemesterCenter" >1st year</Segment>
          </Grid.Column>
          <Grid.Column className="studentColumn">
            <Segment className="yearSemesterCenter">1st Semester</Segment>
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
            <Segment className="yearSemesterCenter" >1st year</Segment>
          </Grid.Column>
          <Grid.Column className="studentColumn">
            <Segment className="yearSemesterCenter">1st Semester</Segment>
          </Grid.Column>
        </Grid.Row>
        
        
      </Grid >
    </>

    // <>
    //   <Grid className="StudentGrid" columns="four" padded divided>
    //     <Grid.Row style={{
    //         borderBottom: "2px solid navy",
    //         // height: "35rem",
    //         background: "orange",
    //         color: "white",
    //         justifyContent: "center"
    //       }}>

    //       <Grid.Column style={{background:"white", color:"black", borderRight:"1rem solid orange", textAlign:"center", justifyContent: "spaceEvenly"}}>name</Grid.Column>
    //       <Grid.Column style={{background:"white", color:"black", borderRight:"1rem solid orange", textAlign:"center", justifyContent: "spaceEvenly"}}>teacher</Grid.Column>
    //       <Grid.Column style={{background:"white", color:"black", borderRight:"1rem solid orange", textAlign:"center", justifyContent: "spaceEvenly"}}>Year</Grid.Column>
    //       <Grid.Column style={{background:"white", color:"black", borderRight:"1rem solid orange", textAlign:"center", justifyContent: "spaceEvenly"}}>Semester</Grid.Column>
    //     </Grid.Row>

    //     <Grid.Row style={{
    //         // borderLeft: "20px solid navy",
    //         // borderRight: "20px solid navy",
    //         height: "9rem",
    //         background: "orange",
    //         color: "white",
    //         textAlign: "center",
    //         // justifyContent: "center"
    //       }}>
    //         {/* <img src="img_avatar.png" alt="Avatar" style="width:10%"></img> */}
    //       <Grid.Column><img src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" style={{width:"25%"}}></img>  beep bop</Grid.Column>
    //       <Grid.Column><img src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" style={{width:"25%"}}></img>  ms.skddo bep</Grid.Column>
    //       <Grid.Column>4/20/69</Grid.Column>
    //       <Grid.Column>2/4/70</Grid.Column>

    //       <Grid.Column><img src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" style={{width:"25%"}}></img>  beep bop</Grid.Column>
    //       <Grid.Column><img src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" style={{width:"25%"}}></img>  ms.skddo bep</Grid.Column>
    //       <Grid.Column>4/20/69</Grid.Column>
    //       <Grid.Column>2/4/70</Grid.Column>

    //     </Grid.Row>
    //   </Grid>
    // </>
  );
};

export default studentList;
