import NormNavbar from "./NormNavbar";
import { Grid, Ref, Visibility, Sticky, Segment } from "semantic-ui-react";
import { useEffect, createRef } from "react";
import React from "react";
import SignupLoginNav from "./SignupLoginNav";
import Search from "./SearchComponent";

// import { Link, Route, Switch, useLocation } from "react-router-dom";

const Layout = ({ children, stylist }, req, res) => {
  //commented out because it errored on build attempts
  // {
  //   stylist
  //     ? document.querySelector("body").classList.add("otherOrangeBackground")
  //     : document.querySelector("body").classList.add("orangeBackground");
  // }

  // const router = useRouter();
  // if (router.pathname === "/login") {
  //   document.querySelector("body").classList.add("otherOrangeBackground");
  // } else if (router.pathname === "/signup") {
  //   document.querySelector("body").classList.add("orangeBackground");
  // } else {
  //   console.log(`Testing for layout: ${router.pathname}`);
  // }

  return (
    <>
      {stylist ? (
        <>
          <NormNavbar stylist={stylist} style={{ maxHeight: "80px" }} />
          <div style={{ margin: "0 auto" }} stylist={stylist}>
            {children}
          </div>
<<<<<<< HEAD
          <Sticky context={contextRef}>
                    <Segment basic>
                      <Search />
                    </Segment>
                  </Sticky>
=======

          
>>>>>>> d5fee5910bbc23d63b9f2668d3305a5ceabf667e
        </>
      ) : (
        <>
          <SignupLoginNav />

          <div
            style={{ margin: "0 auto" }}
            className="signupLogin"
          >
            {children}
          </div>
        </>
      )}
    </>
  );
};

export default Layout;
