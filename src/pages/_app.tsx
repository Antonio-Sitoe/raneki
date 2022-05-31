import { AppProps } from 'next/app';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;
