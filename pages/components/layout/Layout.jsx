// import { Container, Grid, Ref, Sticky, Visibility } from "semantic-ui-react";
// import HeadTag from "./HeadTag";
import isActive from "./Navbar"
import Navbar from "./Navbar";
import Login from "../../login";
import Signup from "../../signup";
import StudentProfile from "../../StudentProfile";
import ClientProfile from "../../clientProfile";
// import nprogress from "nprogress";
// import Router from "next/router";
import { createRef } from "react";
import HeadTag from "./HeadTag";
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
      <Navbar />
      <ClientProfile />
      {/* <StudentProfile /> */}
      
    </>
  );
};

export default Layout;
