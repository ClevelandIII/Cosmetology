import NormNavbar from "./NormNavbar";
import { Grid, Container, Ref, Visibility } from "semantic-ui-react";
import { createRef, useEffect } from "react";
import React from "react";
import { Redirect } from "react-router-dom";
import { useRouter } from "next/router";

const Layout = ({ children, stylist }) => {
  // Router.onRouteChangeStart = () => nprogress.start();
  // Router.onRouteChangeComplete = () => nprogress.done();
  // Router.onRouteChangeError = () => nprogress.done();

  //createRef refreshes on render()
  //useRef refreshes on router.reload()

  useEffect(() => {
    document.querySelector("body").classList.add("noScroll");
  });

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
          {/* <SignupLoginNav /> */}
          <NormNavbar />
          {/* <Container> */}
          {/*Div's good now*/}
          <div style={{ margin: "0 auto" }}>{children}</div>
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
          {/* </Container> */}
        </>
      )}
    </>
  );
};

export default Layout;
