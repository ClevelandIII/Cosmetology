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

//This is the sidebar itself. Currently it only fits to the navbar, but i will eventually make it fit to the page (I mean, unless everyone likes it)
//I also used the sidebar instead of the buttons because it looks better since there are more pages.
const VerticalSidebar = ({ animation, visible }) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction="left"
    icon="labeled"
    inverted
    vertical
    visible={visible}
    width="thin"
    style={{ backgroundColor: "#6ea1ff" }}
  >
    <Menu.Item as="a" href="/">
      <Icon name="home" />
      Home
    </Menu.Item>
    <Menu.Item as="a" href="/profile">
      <Icon name="user circle" />
      Profile
    </Menu.Item>
    <Menu.Item as="a" href="/clientProfile">
      <Icon name="add user" />
      New Visit
    </Menu.Item>
    <Menu.Item as="a" href="/StudentList">
      <Icon name="list ul" />
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
        style={{ overflow: "hidden", backgroundColor: "#6ea1ff" }}
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
              <Button color="red">Sign Out</Button>
            </Menu.Item>
          </Menu>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}

export default NormNavbar;
