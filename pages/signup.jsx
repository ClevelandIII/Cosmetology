import {
  Button,
  Divider,
  Form,
  Message,
  Segment,
  Radio,
  Select,
  Input,
} from "semantic-ui-react";
import { useState, useRef, useEffect } from "react";
import DragNDrop from "./components/common/DragNDrop";
import axios from "axios";
import catchErrors from "./util/catchErrors";
import { setToken } from "./util/auth";
let cancel;

const Signup = () => {
  const [stylists, setStylists] = useState([]);
  const [stylist, setStylist] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    className: "",
    teacherCode: "",
    session: "",
    teacher: "",
    studentYear: "",
    isTeacher: "",
    // userId: "",
  });

  const {
    firstName,
    lastName,
    email,
    password,
    className,
    session,
    teacherCode,
    teacher,
    studentYear,
    isTeacher,
    // userId
  } = stylist;

  // stylist.studentYear = test.value

  //* Form States */
  const [formLoading, setFormLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef(null);
  const [highlighted, setHighlighted] = useState(false);
  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);

  //Usestates for radio buttons
  //room for classname
  const [room1, setRoom1] = useState(false);
  const [room2, setRoom2] = useState(false);
  //session for session
  const [session1, setSession1] = useState(false);
  const [session2, setSession2] = useState(false);
  //year for year
  const [year1, setYear1] = useState(false);
  const [year2, setYear2] = useState(false);

  //* Functions */

  // const myFunction = (studentYear) => {
  //   // document.getElementById("result").value = stylist.studentYear;
  // };

  // Sets form loading to true while form is being submitted
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);

    //Initial declaration of profilePicURL
    let profilePicURL;

    if (teacherCode === "WestMecTeacherCode6997") {
      isTeacher = true;
    } else {
      isTeacher = false;
    }

    //Radio Button Checks
    if (room1 === true) {
      className = "Cosmetology 1";
    } else if (room2 === true) {
      className = "Cosmetology 2";
    }

    if (session1 === true) {
      session = "Session 1";
    } else if (session2 === true) {
      session = "Session 2";
    }

    if (year1 === true) {
      studentYear = "Year 1";
    } else if (year2 === true) {
      studentYear = "Year 2";
    }


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
        firstName,
        lastName,
        email,
        password,
        className,
        session,
        teacherCode,
        teacher,
        studentYear,
        isTeacher,
        profilePicURL,
        // userId,
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

  // const handleDropDown= (e,{value})=>setState({stateValue:value})

  // const anotherHandleChange = (e, { value }) => this.setState({ value })

  //* USE EFFECTS */
  useEffect(() => {
    setSubmitDisabled(
      !(
        (
          firstName &&
          lastName &&
          email &&
          password &&
          teacherCode &&
          className &&
          session &&
          teacher &&
          studentYear &&
          isTeacher
        )
        // userId
      )
    );
  }, [stylist]);

  const getStylists = async () => {
    try {
      const results = await axios.get(`http://localhost:3001/api/v1/stylists`);
      setStylists(results.data);
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getStylists();
  }, []);

  // const teachers = [
  //   { key: "1", text: "teachers here1", value: "TeacherId1", onClick: () => {} },
  //   { key: "2", text: "teachers here2", value: "TeacherId2" },
  // ];

  return (
    <>
    <iframe
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
          ></iframe>



          
      <Form
        style={{
          width: "80vw",
          margin: "0 auto",
          marginTop: "3rem",
          overflow: "scroll",
        }}
        loading={formLoading}
        error={errorMsg !== null}
        onSubmit={handleSubmit}
      >
        
        <Segment >
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
          >
            <Form.Radio
              label="Cosmetology 1"
              checked={room1}
              onClick={() => {
                setRoom1(true), setRoom2(false);
              }}
            />
            <Form.Radio
              label="Cosmetology 2"
              checked={room2}
              onClick={() => {
                setRoom2(true), setRoom1(false);
              }}
            />
          </Form.Input>
          <Form.Input
            required
            label="Teacher"
            placeholder="John Doe"
            name="teacher"
            value={teacher}
            onChange={handleChange}
            icon="male"
            iconPosition="left"
          >
            {/*Currently shows teachers, but you cannot select/unselect one yet. */}
            {stylists.map((iteration) => {
              if (iteration.isTeacher === "true") {
                return (
                  <>
                    <Form.Radio
                      label={iteration.firstName}
                      // checked={room1}
                      // onClick={() => {
                      //   setRoom1(true), setRoom2(false);
                      // }}
                    />
                  </>
                );
              } else {
                return <></>;
              }
            })}

            {/* <Form.Dropdown
              // commit this out if not working yet
              placeholder="Teacher"
              options={teachers}
            /> */}
          </Form.Input>
          <Form.Input
            label="Teacher code"
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
          >
            <Form.Radio
              label="Session 1"
              checked={session1}
              onClick={() => {
                setSession1(true), setSession2(false);
              }}
            />
            <Form.Radio
              label="Session 2"
              checked={session2}
              onClick={() => {
                setSession2(true), setSession1(false);
              }}
            />
          </Form.Input>

          {/* the year will be removed in the end it being used as testing now */}
          <Form.Input
            required
            label="Year"
            placeholder="Year 1"
            name="studentYear"
            value={studentYear}
            onChange={handleChange}
            icon="calendar alternate outline"
            iconPosition="left"
          >
            {/* <input
              type="radio"
              name="Year"
              onclick={myFunction(studentYear)}
              value="Year 1"
            />
            <input
              type="radio"
              name="Year"
              onclick={myFunction(studentYear)}
              value="Year 2"
            /> */}
            <Form.Radio
              label="Year 1"
              checked={year1}
              onClick={() => {
                setYear1(true), setYear2(false);
              }}
            />
            <Form.Radio
              label="Year 2"
              checked={year2}
              onClick={() => {
                setYear2(true), setYear1(false);
              }}
            />
          </Form.Input>

          <Button color="orange" content="Signup" icon="signup" type="submit" />
        </Segment>
      </Form>
      <Divider hidden />
    </>
  );
};

export default Signup;
