import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import Header from 'components/Header';
import Footer from 'components/Footer';

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
