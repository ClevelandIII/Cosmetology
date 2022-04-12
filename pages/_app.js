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
    <Layout stylist={pageProps.stylist}>
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

  const protectedRoutes = ["/", "/studentProfile"];
  const isProtectedRoute = protectedRoutes.includes(ctx.pathname);

  if (!token) {
    isProtectedRoute && redirectUser(ctx, "/login");
  } else {
    try {
      const res = await axios.get(`${baseURL}/api/v1/auth`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { stylist } = res.data;

      if (stylist) !isProtectedRoute && redirectUser(ctx, "/");
      pageProps.stylist = stylist;
    } catch (error) {
      destroyCookie(ctx, "token");
      redirectUser(ctx, "/login");
    }
  }

  return { pageProps };
};

export default MyApp;
