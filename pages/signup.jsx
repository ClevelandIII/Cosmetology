import { Button, Divider, Form, Message, Segment } from "semantic-ui-react";
import { useState, useRef, useEffect } from "react";
import DragNDrop from "./components/common/DragNDrop";
import axios from "axios";
import catchErrors from "./util/catchErrors";
import { setToken } from "./util/auth";
let cancel;

const Signup = () => { 
  const [stylist, setStylist] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    className: "",
    teacherCode: "",
    session: "",
  });

  const {
    firstName,
    lastName,
    email,
    password,
    className,
    session,
    teacherCode,
  } = stylist;

  //* Form States */
  const [formLoading, setFormLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const [showPassword, setShowPassword] = useState(false);

  const inputRef = useRef(null);
  const [highlighted, setHighlighted] = useState(false);
  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);

  //* Functions */

  // Sets form loading to true while form is being submitted
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);

    //Initial declaration of profilePicURL
    let profilePicURL;

    if (media !== null) {
      const formData = new FormData();
      formData.append("image", media, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const res = await axios.post("/api/v1/uploads", formData);
      profilePicURL = res.data.src;
    }

    if (media !== null && !profilePicURL) {
      setFormLoading(false);
      return res.status(500).send("Image Upload Failure");
    }

    try {
      const res = await axios.post("/api/v1/user/signup", {
        stylist,
        profilePicURL,
      });

      setToken(res.data);
    } catch (error) {
      const errorMsg = catchErrors(error);
      setErrorMsg(errorMsg);
    }
    setFormLoading(false);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "media" && files.length > 0) {
      setMedia(() => files[0]);
      setMediaPreview(() => URL.createObjectURL(files[0]));
      setHighlighted(true);
    } else {
      setStylist((prev) => ({ ...prev, [name]: value }));
    }
  };

  //* USE EFFECTS */
  useEffect(() => {
    setSubmitDisabled(
      !(
        firstName &&
        lastName &&
        email &&
        password &&
        teacherCode &&
        className &&
        session
      )
    );
  }, [stylist]);

  return (
    <>
      <Form
        style={{ width: "80vw", margin: "0 auto", marginTop: "3rem" }}
        loading={formLoading}
        error={errorMsg !== null}
        onSubmit={handleSubmit}
      >
        <Segment>
          {/* This is where you drag and drop/upload your profile picture */}
          <DragNDrop
            inputRef={inputRef}
            handleChange={handleChange}
            media={media}
            setMedia={setMedia}
            mediaPreview={mediaPreview}
            setMediaPreview={setMediaPreview}
            highlighted={highlighted}
            setHighlighted={setHighlighted}
          />
          <Message
            error
            content={errorMsg}
            header="There was an Error!"
            icon="meh"
          />
          <Form.Input
            required
            label="First name"
            placeholder="John"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            icon="user"
            iconPosition="left"
          />

          <Form.Input
            required
            label="Last name"
            placeholder="Doe"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            icon="user"
            iconPosition="left"
          />

          <Form.Input
            required
            label="Email"
            placeholder="johndoe@example.com"
            name="email"
            value={email}
            onChange={handleChange}
            icon="envelope"
            iconPosition="left"
            type="email"
          />

          <Form.Input
            required
            label="Password"
            placeholder="password"
            name="password"
            value={password}
            onChange={handleChange}
            icon={{
              name: showPassword ? "eye slash" : "eye",
              circular: true,
              link: true,
              onClick: () => setShowPassword(!showPassword),
            }}
            iconPosition="left"
            type={showPassword ? "text" : "password"}
          />
          <Form.Input
            required
            label="Class"
            placeholder="Cosmetology I"
            name="className"
            value={className}
            onChange={handleChange}
            icon="book"
            iconPosition="left"
          />
          <Form.Input
            label="Teacher code"
            required
            placeholder="secret code"
            name="teacherCode"
            value={teacherCode}
            onChange={handleChange}
            icon="user secret"
            iconPosition="left"
          ></Form.Input>

          <Form.Input
            required
            label="Session"
            placeholder="Session 1"
            name="session"
            value={session}
            onChange={handleChange}
            icon="address book"
            iconPosition="left"
          ></Form.Input>
          <Button color="orange" content="Signup" icon="signup" type="submit" />
        </Segment>
      </Form>
      <Divider hidden />
    </>
  );
};

export default Signup;
