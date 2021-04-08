import React from 'react';
// import Head from 'next/head';
import { Container } from 'semantic-ui-react';

import Header from './Header';
import 'semantic-ui-css/semantic.min.css';

const Layout = props => {
  return (
    <Container>
      {/* <Head>
        <link
          async
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@${props.versions.sui}/dist/semantic.min.css"
        />
      </Head> */}
      <Header />
      {props.children}
    </Container>
  );
};

export default Layout;
