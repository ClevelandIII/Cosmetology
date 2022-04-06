// import { Container, Grid, Ref, Sticky, Visibility } from "semantic-ui-react";
// import HeadTag from "./HeadTag";

// import nprogress from "nprogress";
// import Router from "next/router";


// import NormNavbar from "./NormNavbar";
import SignupLoginNav from "./SignupLoginNav";
import StudentProfile from "../../studentProfile"
// import ClientProfile from "../../clientProfile";

import { Grid, Container, Ref, Visibility } from "semantic-ui-react";
// import SearchComponent from "./SearchComponent";
// import SideMenu from "./SideMenu";
import StudentList from "../../studentList";
import studentList from "../../studentList";
import PageNotFound from "../../PageNotFound";
import { createRef } from "react";



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
            <Ref  innerRef={contextRef}>
              <Grid.Column >
                <Visibility context={contextRef}>{children}</Visibility>
              </Grid.Column>
            </Ref>
          {/* </div> */}
        </>
      ) : (
        <>
          <SignupLoginNav />
          <Container centered text style={{ paddingTop: "1rem", margin: "0 auto", textAlight: "center" }}>
            {children}
            
          </Container>
          <StudentProfile />
        </>
      )}
    </>
  );
};

export default Layout;
