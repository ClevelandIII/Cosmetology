import NormNavbar from "./NormNavbar";
import { Grid, Ref, Visibility } from "semantic-ui-react";
import { useEffect, createRef } from "react";
import React from "react";
import SignupLoginNav from "./SignupLoginNav";
// import { Link, Route, Switch, useLocation } from "react-router-dom";

const Layout = ({ children, stylist }, req, res) => {
  {
    stylist
      // ? useEffect(() => {
      //     document.querySelector("body").classList.remove("noScroll");
      //   })
      // : useEffect(() => {
      //     document.querySelector("body").classList.add("noScroll");
      //   });
      ?   useEffect(() => {
        document.querySelector("body").classList.add("otherOrangeBackground");
      })
      :   useEffect(() => {
        document.querySelector("body").classList.add("orangeBackground");
      });
  }

  // if (req.originalUrl === "http://localhost:3001/login") {
  //   useEffect(() => {
  //     document.querySelector("body").classList.add("noScroll");
  //   });
  // } else {
  //   useEffect(() => {
  //     document.querySelector("body").classList.remove("noScroll");
  //   });
  // }

  const contextRef = createRef();

  return (
    <>
      {stylist ? (
        <>
          <NormNavbar stylist={stylist} />

          {/* <Ref innerref={contextRef}>
            <Grid.Column>
              <Visibility context={contextRef}>{children}</Visibility>
            </Grid.Column>
          </Ref> */}
          <div style={{ margin: "0 auto" }} stylist={stylist}>
            {children}
          </div>
        </>
      ) : (
        <>
          <SignupLoginNav />

          <div style={{ margin: "0 auto" }} className="signupLogin">
            {children}
          </div>
          {/* <iframe
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
          ></iframe> */}
        </>
      )}
    </>
  );
};

export default Layout;
