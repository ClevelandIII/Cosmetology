// import { Container, Grid, Ref, Sticky, Visibility } from "semantic-ui-react";
// import HeadTag from "./HeadTag";
// import isActive from "./Navbar"
// import Navbar from "./Navbar";
import Login from "../../login";
import Signup from "../../signup";
import StudentProfile from "../../StudentProfile";
import ClientProfile from "../../clientProfile";
import HairMenu from "../common/HairMenu";
// import nprogress from "nprogress";
import MenuExampleStackable from "./NormNavbar";
import NormNavbar from "./NormNavbar";
import SignupLoginNav from "./SignupLoginNav";
import isActive from "./SignupLoginNav";
import HeadTag from "./HeadTag";
import { Grid, Container, Ref, Visibility } from "semantic-ui-react";
// import SearchComponent from "./SearchComponent";
// import SideMenu from "./SideMenu";
import StudentList from "../../studentList";
import studentList from "../../studentList";
import PageNotFound from "../../PageNotFound";
import { createRef, useEffect } from "react";
import TeacherProfile from "../../teacherProfile";


const Layout = ({ children, stylist }) => {
  // Router.onRouteChangeStart = () => nprogress.start();
  // Router.onRouteChangeComplete = () => nprogress.done();
  // Router.onRouteChangeError = () => nprogress.done();

  //createRef refreshes on render()
  //useRef refreshes on router.reload()
  const contextRef = createRef();


  useEffect( () => { document.querySelector("body").classList.add("noScroll") } );


  return (
    <>
      {stylist ? (
        <>
          <HeadTag />
          <NormNavbar />

          {/* <div style={{ marginLeft: "1rem", marginRight: "1rem" }}> */}
          <Ref innerRef={contextRef}>
            <Grid.Column>
              <Visibility context={contextRef}>{children}</Visibility>
            </Grid.Column>
          </Ref>
          {/* </div> */}
        </>
      ) : (
        <>
          <SignupLoginNav />
          {/* <Container> */}
          {/*Something in Container makes the styling weird. For example, try StudentProfile in Container vs outside container*/}
          <div style={{ width: "50vw", margin: "0 auto" }}>{children}</div>
            <iframe
              src="https://streamable.com/e/rjm3r4?autoplay=1&nocontrols=1"
              autoPlay
              loop
              muted
              className="background-video"
              // style={{
              //   position: "absolute",
              //   width: "150%",
              //   left: "50%",
              //   top: "50%",
              //   height: "100%",
              //   objectFit: "cover",
              //   transform: "translate(-50%,-50%)",
              //   zIndex: "-1",
              // }}
            ></iframe>
          {/* </Container> */}
        </>
      )}
    </>
  );
};

export default Layout;
