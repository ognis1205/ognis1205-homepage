/**
 * @fileoverview Defines Home component.
 * @copyright Shingo OKAWA 2022
 */
import * as React from 'react';
import * as NextApp from 'next/app';
import * as Chakra from '@chakra-ui/react';
import * as ChakraConfig from '@/config/chakra';
import 'focus-visible/dist/focus-visible';
import '@/assets/styles/reset.css';

const Home: React.FC<NextApp.AppProps> = ({
  Component,
  pageProps,
}: NextApp.AppProps) => (
  <Chakra.ChakraProvider theme={ChakraConfig.Theme}>
    <Component {...pageProps} />
  </Chakra.ChakraProvider>
);

export default Home;
