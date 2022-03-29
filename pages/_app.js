import Layout from "../pages/components/layout/Layout";
import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import "../styles/customStyles.css";
import { redirectUser } from "./util/auth";
import { destroyCookie, parseCookies } from "nookies";
import { baseURL } from "./util/auth";
import axios from "axios";

function MyApp({ Component, pageProps }) {
  return (
    <Layout user={pageProps.user}>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async ({ ctx, Component }) => {
  const { token } = parseCookies(ctx);
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  const protectedRoutes = ["/"];
  const isProtectedRoute = protectedRoutes.includes(ctx.pathname);

  if (!token) {
    isProtectedRoute && redirectUser(ctx, "login");
  } else {
    try {
      const res = await axios.get(`${baseURL}/api/v1/auth`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { user } = res.data;

      if (user) !isProtectedRoute && redirectUser(ctx, "/");
      pageProps.user = user;
    } catch (error) {
      destroyCookie(ctx, "token");
      redirectUser(ctx, "/login");
    }
  }
  return { pageProps };
};

export default MyApp;
