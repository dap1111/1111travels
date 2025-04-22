import './sass/style.scss';
import Footer from './ui/Footer/Footer';
import { Playfair_Display, Jost, Satisfy } from 'next/font/google';

export const metadata = {
  title: 'TravelPro - Adventure Tour and Travel Agency NextJs Template',
};

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--primary-font',
});
const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--secondary-font',
});
const satisfy = Satisfy({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--ternary-font',
});

const footerData = {
  logo: '/images/footer_logo.svg',
  bgImgUrl: '/images/footer_bg.jpeg',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Codescribe" />
        <link rel="icon" href="/images/favicon.png" sizes="any" />
      </head>
      <body
        className={`${playfair.variable} ${jost.variable} ${satisfy.variable}`}
      >
        {children}
        <Footer {...footerData} />
      </body>
    </html>
  );
}
