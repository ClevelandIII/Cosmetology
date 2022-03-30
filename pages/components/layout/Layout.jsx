import { createRef } from "react";
import MenuExampleStackable from "./NormNavbar";
import NormNavbar from "./NormNavbar";
import SignupLoginNav from "./SignupLoginNav";

const Layout = ({ children, user }) => {
  // Router.onRouteChangeStart = () => nprogress.start();
  // Router.onRouteChangeComplete = () => nprogress.done();
  // Router.onRouteChangeError = () => nprogress.done();

  //createRef refreshes on render()
  //useRef refreshes on router.reload()
  const contextRef = createRef();

  return (
    <>
      <SignupLoginNav />
      <NormNavbar />
    </>
  );
};

export default Layout;
