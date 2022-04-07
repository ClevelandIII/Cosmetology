import axios from "axios";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";
import { baseURL } from "./util/auth";

const index = ({ stylist }) => {
  useEffect(() => {
    document.title = `Welcome, ${stylist.firstname.split(" ")[0]}`;
  }, []);

  return <div>index page</div>;
};

export default index;
