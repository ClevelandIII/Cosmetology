import Layout from "../pages/components/layout/Layout";
import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import "../styles/customStyles.css"

function MyApp({ Component, pageProps }) {
  return(
  <Layout user={pageProps.user} className="layoutPage">
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp;
