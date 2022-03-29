// import { Container, Grid, Ref, Sticky, Visibility } from "semantic-ui-react";
import HeadTag from "./HeadTag";
import Navbar from "./Navbar"
// import Login from "../../login";
// import Signup from "../../signup";
// import StudentProfile from "../../StudentProfile";
import ClientProfile from "../../clientProfile";
import Router from "next/router";
// import  StudentList  from "../../studentList"
import  ClientList  from "../../clientList"
// import nprogress from "nprogress";
// import Router from "next/router";
import { createRef } from "react";
import TeacherProfile from "../../teacherProfile";



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
      {/* <Login />
      <Signup /> */}
      <ClientList />
    </>
  );
};

export default Layout;
