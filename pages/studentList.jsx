import {
  Grid,
  Image,
  Divider,
  Container,
  Loader,
  Segment,
} from "semantic-ui-react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const studentList = () => {
  const [stylists, setStylists] = useState([]);
  const [semester, setSemester] = useState([]);
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

  // const getClassYear = async () => {
  //   try{
  //     if(stylist.className === "Cosmetology I"){
  //       setClassYear("Year 1")
  //     } else if(stylist.className === "Cosmetology II"){
  //       setClassYear("Year 2")
  //     }
  //     console.log(stylist.className);
  //   } catch (error){
  //     console.log(error);
  //   }
  // }

  const getSemester = async () => {
    try {
      let currentDate = new Date();

      let currentMonth = currentDate.getMonth() + 1;
      // console.log(currentMonth);

      if (currentMonth >= 8 && currentMonth <= 12) {
        setSemester("Semester 1");
      } else if (currentMonth >= 1 && currentMonth <= 5) {
        setSemester("Semester 2");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getStylists();
    getSemester();
    // getClassYear()
  }, []);

  return (
    <>
      <Grid
        className="StudentGrid"
        columns="equal"
        centered
        divided="vertically"
        relaxed="very"
      >
        <Grid.Row>
          <Grid.Column className="column studentColumn">
            <Segment className="yearSemesterCenter">Student</Segment>
          </Grid.Column>
          <Grid.Column className="column studentColumn">
            <Segment className="yearSemesterCenter">Teacher</Segment>
          </Grid.Column>
          <Grid.Column className="column" style={{ left: "12%" }}>
            <Segment className="yearSemesterCenter">Year</Segment>
          </Grid.Column>
          <Grid.Column className="column">
            <Segment className="yearSemesterCenter">Semester</Segment>
          </Grid.Column>
        </Grid.Row>

      {stylists.map(stylist => {
            if (stylist.isTeacher === "false") {
              return (
                <>
          <Grid.Row className=" studentRow">
            <Grid.Column className="studentColumn">
              <Segment style={{width: "110%"}}>
                <Image className="studentListPic" src={stylist.profilePicURL}/>
                <p className="studentListName" style={{width: "80%"}}>{stylist.firstName} {stylist.lastName}</p>
              </Segment>
            </Grid.Column>
            <Grid.Column className="studentColumn">
              <Segment style={{width: "110%"}}>
                <Image className="studentListPic" src="https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" />{" "}
                <p className="studentListName"style={{width: "80%"}}>{stylist.teacher}</p>
              </Segment>
            </Grid.Column>
            <Grid.Column className="studentColumn">
              <Segment className="yearSemesterCenter" >{stylist.studentYear}</Segment>
            </Grid.Column>
            <Grid.Column >
              <Segment className="yearSemesterCenter">{semester}</Segment>
            </Grid.Column>
          </Grid.Row>
  
          </>)
            }
      })}
        
      </Grid >
        
      </>)
    
        

}

export default studentList;
