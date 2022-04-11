import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Wrapper from "@/styles/Layout.styled";

export default function Layout({ children, title }) {
  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="container">
        <Navbar />
        <main>{children}</main>
      </div>
      <div className="footer-padding"></div>
      <Footer />
    </Wrapper>
  );
}

Layout.defaultProps = {
  title: "NEXTjs Literary Awards",
};
