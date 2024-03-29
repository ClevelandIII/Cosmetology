import Router from "next/router";
import cookie from "js-cookie";

// export const baseURL = `https://cosmetology.vercel.app/`;
export const baseURL = `http://localhost:3001/`;

export const logoutUser = (email) => {
  cookie.set("stylistEmail", email); 
  cookie.remove("token");
  Router.push("/login");
  Router.reload();
};

export const setToken = (token) => {
  cookie.set("token", token);
  Router.push("/");
};

export const redirectUser = (ctx, location) => {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    Router.push(location);
  }
};
