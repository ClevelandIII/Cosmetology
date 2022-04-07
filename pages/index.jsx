import axios from "axios";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";
import { baseURL } from "./util/auth";

const index = ({ stylist }) => {
  useEffect(() => {
    // document.title = `Welcome, ${stylist.firstName.split(" ")[0]}`;
    document.title = "Welcome Stylist"
  }, []);

  return <div>index page</div>;
};

export default index;
