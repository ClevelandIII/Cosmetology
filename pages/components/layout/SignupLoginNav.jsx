import { useRouter } from "next/router";
import Link from "next/link";
import {
  Menu,
  Container,
  Icon,
  Image,
  Button,
  Sidebar,
  Segment,
  Input,
  Message,
} from "semantic-ui-react";

const SignupLoginNav = () => {
  const router = useRouter();
  const isActive = (route) => router.pathname === route;
  //thanks peck
  const signupRoute = router.pathname === "/signup";

  return (
    <div>
      <Menu
        stackable
        secondary
        style={{
          overflow: "hidden",
          backgroundColor: "white",
          boxShadow: "0px 0.5px 2px 1px gray",
        }}
      >
        <Menu.Item>
          <Image
            alt="logo"
            src="https://i.postimg.cc/RFDtVvtb/cosmetology-Logo.png"
            size="small"
          />
        </Menu.Item>

        <Menu.Item name="testimonials" style={{ width: "50rem" }}>
          <h3>
            {signupRoute
              ? "Welcome user! Please create an account to log in."
              : "Welcome back user! Please enter your email and password to continue."}
          </h3>
        </Menu.Item>
        <Menu.Item position="right">
          <Message
            style={{
              backgroundColor: "red",
              borderRadius: "1px solid black",
              color: "white",
              padding: "0.5rem",
              textAlign: "center",
            }}
            header={signupRoute ? "Alreaty a user?" : "Not a user?"}
            content={
              <Button
                style={{ backgroundColor: "white", padding: "0.5rem" }}
                href={signupRoute ? "/login" : "/signup"}
                active={isActive("/login")}
                className="menuItem"
              >
                {signupRoute ? " Log in here" : " Get started here"}
              </Button>
            }
          />
        </Menu.Item>
      </Menu>
    </div>
  );
};

//I didnt want to delete everything from the old navbar, so i included it here if you needed it
{
  /*import { useRouter } from "next/router";
import Link from "next/link";
import {
  Menu,
  Container,
  Icon,
  Image,
  Button,
  Sidebar,
  Segment,
  Input,
} from "semantic-ui-react";

const Temp = () => {
  const router = useRouter();
  const isActive = (route) => router.pathname === route;

  return (
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
  );
};

export default Temp;
*/
}

export default SignupLoginNav;
