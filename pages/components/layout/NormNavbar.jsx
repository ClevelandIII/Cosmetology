import React, { useState } from "react";
import {
  Button,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Input,
} from "semantic-ui-react";

//whole lotta semantic and a whole lotta random stuff from me

//This is the sidebar itself. Currently it only fits to the navbar, but i will eventually make it fit to the page
//(I mean, unless everyone likes it)
//I also used the sidebar instead of the buttons because it looks better since there are more pages.
const VerticalSidebar = ({ animation, visible }) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction="left"
    icon="labeled"
    vertical
    visible={visible}
    width="thin"
    style={{
      backgroundColor: "white",
    }}
  >
    <Menu.Item
      as="a"
      href="/"
      style={{
        color: "black",
      }}
    >
      <Icon
        name="home"
        color="black"
        style={{
          color: "black",
        }}
      />
      Home
    </Menu.Item>
    <Menu.Item
      as="a"
      href="/profile"
      style={{
        color: "black",
      }}
    >
      <Icon name="user circle" color="black" />
      Profile
    </Menu.Item>
    <Menu.Item
      as="a"
      href="/clientProfile"
      style={{
        backgroundColor: "white",
        color: "black",
      }}
    >
      <Icon name="add user" color="black" />
      New Visit
    </Menu.Item>
    <Menu.Item
      as="a"
      href="/StudentList"
      style={{
        backgroundColor: "white",
        color: "black",
      }}
    >
      <Icon name="list ul" color="black" />
      Client/Student List
    </Menu.Item>
  </Sidebar>
);

//Dispatch from semantic. Controls the animations of the sidebar
function exampleReducer(state, action) {
  switch (action.type) {
    case "CHANGE_ANIMATION":
      return { ...state, animation: action.animation, visible: !state.visible };
    case "CHANGE_DIRECTION":
      return { ...state, direction: action.direction, visible: false };
    default:
      throw new Error();
  }
}

//This is the navbar. Of course, search and sign out dont currently work, but the sidebar button does.
function NormNavbar() {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    animation: "overlay",
    direction: "left",
    visible: false,
  });

  const { animation, direction, visible } = state;
  const [hamDog, setHamDog] = useState(false);

  return (
    <div>
      <Sidebar.Pushable
        as={Segment}
        style={{
          overflow: "hidden",
          backgroundColor: "white",
          boxShadow: "0px 0.5px 2px 1px gray",
          borderRadius: "0",
          marginTop: "1rem",
        }}
      >
        <VerticalSidebar
          animation={animation}
          direction={direction}
          visible={visible}
        />

        <Sidebar.Pusher>
          <Menu stackable secondary>
            <Menu.Item name="features">
              {hamDog ? (
                <Icon
                  name="bars"
                  rotated="clockwise"
                  onClick={() => {
                    setHamDog(!hamDog);
                    dispatch({ type: "CHANGE_ANIMATION", animation: "push" });
                  }}
                  size="big"
                />
              ) : (
                <Icon
                  name="bars"
                  onClick={() => {
                    setHamDog(!hamDog);
                    dispatch({ type: "CHANGE_ANIMATION", animation: "push" });
                  }}
                  size="big"
                />
              )}
            </Menu.Item>
            <Menu.Item>
              <Image
                alt="logo"
                src="https://i.postimg.cc/RFDtVvtb/cosmetology-Logo.png"
                size="small"
              />
            </Menu.Item>

            <Menu.Item name="testimonials" style={{ width: "12rem" }}>
              <h3>Welcome User</h3>
            </Menu.Item>
            <Menu.Item
              name="testimonials"
              style={{ width: "35rem", marginLeft: "31rem" }}
            >
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <Menu.Item name="sign-in" position="right">
              <Button style={{ backgroundColor: "red", color: "white" }}>
                Sign Out
              </Button>
            </Menu.Item>
          </Menu>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}

export default NormNavbar;
