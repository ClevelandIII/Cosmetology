import React, { useState } from "react";
import axios from "axios";
// import Form from "../pages/components copy/Form";
// import Row from "../pages/components copy/Row";
// import Input from "../pages/components copy/Input";
// import Button from "../pages/components copy/Button";

const ResetPassword = (props) => {

    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        const body = {
            password,
            id: props.match.params.id
        };
        axios({
            url: "/auth/reset",
            data: body,
            method: "patch"
        }).then(() => {
            props.history.push("/login");
        })
    }

    return (
        <Form onSubmit={submitHandler}>
            <Row>
                <Input
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="New Password"
                />
            </Row>
            <Row>
                <Button>Save</Button>
            </Row>
        </Form>
    );
};

export default ResetPassword;

