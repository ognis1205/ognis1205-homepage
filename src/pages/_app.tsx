/**
 * @fileoverview Defines Home component.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as NextApp from 'next/app';
import '@/assets/styles/reset.css';
import '@/assets/styles/globals.css';

const Home: React.FC<NextApp.AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default Home;
