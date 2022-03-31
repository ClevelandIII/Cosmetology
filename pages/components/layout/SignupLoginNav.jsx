import { useRouter } from "next/router";
import Link from "next/link";
import { Menu, Container, Icon, Image, Button } from "semantic-ui-react";

const SignupLoginNav = () => {
  const router = useRouter();

  const isActive = (route) => router.pathname === route;

  return (
    // <Menu fluid borderless pointing secondary className="nav-bar navBar" >
    //   {/* <Menu.Menu text position="left">
    //   <Menu.Item position="left" header>
    //     <Icon name="bars" size="large" />
    //   </Menu.Item>
    //   </Menu.Menu> */}
    //   <Container text>
    //     <Link href="/">
    //       <Menu.Item header position="left">
    //         <Image
    //           size="small"
    //           src="https://i.postimg.cc/RFDtVvtb/cosmetology-Logo.png"
    //           // src="https://i.postimg.cc/s2jpD6Mq/NewLogo.png"
    //           // src="https://i.postimg.cc/GmSw3N2S/NewLogo.png"
    //         />
    //       </Menu.Item>
    //     </Link>
    //     <Link href="/login">
    //       <Menu.Item header active={isActive("/login")} position="left" style={{fontSize:"1.25rem"}} className="menuItem">
    //         <Icon name="sign in" size="big" />
    //         Login
    //       </Menu.Item>
    //     </Link>
    //     <Link href="/signup">
    //       <Menu.Item header active={isActive("/signup")} position="left" style={{fontSize:"1.25rem"}} className="menuItem">
    //         <Icon name="signup" size="big" />
    //         Sign Up
    //       </Menu.Item>
    //     </Link>
    //     <Menu.Item header style={{fontSize: "1.75rem"}} className="welcomeItem">

    //       Welcome student/teacher, please make an account or sign in to begin!
    //     </Menu.Item>
    //   </Container>
    <Menu
      fluid
      borderless
      pointing
      secondary
      className="nav-bar navBar"
      size="large"
    >
      <Container>
        <Menu.Item style={{ cursor: "pointer" }}>
          <Link href="/">
            <Image
              size="small"
              src="https://i.postimg.cc/RFDtVvtb/cosmetology-Logo.png"
            />
          </Link>
        </Menu.Item>
        <Menu.Item position="left">
          <Button
            href="/login"
            active={isActive("/login")}
            style={{ fontSize: "1.3rem", width: "12rem" }}
            className="menuItem"
            inverted
            color={isActive("/login") ? "blue" : "grey"}
          >
            <Icon name="sign in" size="large" />
            Log in
          </Button>
          <Button
            href="/signup"
            active={isActive("/signup")}
            style={{
              fontSize: "1.3rem",
              marginLeft: "0.5em",
              width: "12rem",
            }}
            className="menuItem"
            inverted
            color={isActive("/signup") ? "blue" : "grey"}
          >
            <Icon name="signup" size="large" />
            Sign Up
          </Button>
        </Menu.Item>
        <Menu.Item style={{ fontSize: "1.75rem" }}>
          <p className="welcomeItem">
            Welcome student/teacher, please make an account or sign in to begin!
          </p>
        </Menu.Item>
      </Container>
    </Menu>
    // </Menu>
  );
};

export default SignupLoginNav;
