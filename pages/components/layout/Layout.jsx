import { createRef } from "react";
import MenuExampleStackable from "./NormNavbar";
import NormNavbar from "./NormNavbar";
import SignupLoginNav from "./SignupLoginNav";
import isActive from "./SignupLoginNav";
import HeadTag from "./HeadTag";
import { Grid, Container, Ref, Visibility } from "semantic-ui-react";
// import SearchComponent from "./SearchComponent";
// import SideMenu from "./SideMenu";

const Layout = ({ children, user }) => {
  // Router.onRouteChangeStart = () => nprogress.start();
  // Router.onRouteChangeComplete = () => nprogress.done();
  // Router.onRouteChangeError = () => nprogress.done();

  //createRef refreshes on render()
  //useRef refreshes on router.reload()
  const contextRef = createRef();

  return (
    <>
      <HeadTag />
      {user ? (
        <>
          <NormNavbar />

          <div>
            <Ref innerRef={contextRef}>
              <Grid.Column>
                <Visibility context={contextRef}>{children}</Visibility>
              </Grid.Column>
            </Ref>
          </div>
        </>
      ) : (
        <>
          <SignupLoginNav />
          <Container text style={{ paddingTop: "1rem" }}>
            {children}
          </Container>
        </>
      )}
    </>
  );
};

export default Layout;
