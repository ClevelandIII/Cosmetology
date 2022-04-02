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
import { createRef } from "react";
import TeacherProfile from "../../teacherProfile";

const Layout = ({ children, stylist }) => {
  // Router.onRouteChangeStart = () => nprogress.start();
  // Router.onRouteChangeComplete = () => nprogress.done();
  // Router.onRouteChangeError = () => nprogress.done();

  //createRef refreshes on render()
  //useRef refreshes on router.reload()
  const contextRef = createRef();

  return (
    <>
      {stylist ? (
        <>
          {/* <HeadTag /> */}
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
          <Container>
            {/*Something in Container makes the styling weird. For example, try StudentProfile in Container vs outside container*/}
            {/* {children} */}
          </Container>
        </>
      )}
    </>
  );
};

export default Layout;
