import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import Wrapper from '@/styles/Layout.styled';

export default function Layout({ children, title }) {
  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <div className="footer-padding"></div>
      <Footer />
    </Wrapper>
  );
}
