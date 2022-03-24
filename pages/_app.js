import "../styles/globals.css";
import Layout from "./components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return(
  <Layout user={pageProps.user}>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp;
