import "../scss/style.scss";
import Navbar from "@/layout/navbar/navbar";
import Head from "next/head";
import "../scss/style.scss";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Github Repos</title>
      </Head>
      <Navbar />
      <div className="page">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
