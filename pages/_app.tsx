import "tailwindcss/tailwind.css";
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';
//import { Noto_Sans_JP } from 'next/font/google';

/*
const notoSansJapanese = Noto_Sans_JP({
  weight: '400',
  preload: false,
});
*/

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className='font-mono'>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

export default MyApp;
