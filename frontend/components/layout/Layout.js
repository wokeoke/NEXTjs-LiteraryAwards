import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import Wrapper from '@/styles/Layout.styled';

export default function Layout({ children, title, keywords, description }) {
  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
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
  title: 'NEXTjs Literary Awards',
  keywords: 'literary, awards, script, book, indonesia',
  description: 'Info and news NEXTjs literary awards',
};
