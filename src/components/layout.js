import React from 'react';
import { Global, css } from '@emotion/core';
import Header from './header';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/use-sitemetadata';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }
          * + * {
            margin-top: 0rem;
          }
          html,
          body {
            height: 100%;
            width: 100%;
            margin: 0;
            color: black;
            background-color: antiquewhite;
            font-size: 18px;
            line-height: 1.4;
          }
          > div {
            margin-top: 0;
          }
          p {
            line-height: 1.3;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #122;
            line-height: 1.1;
            + * {
              margin-top: 0.5rem;
            }
          }
          strong {
            color: #222;
          }
          li {
            margin-top: 0.25rem;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header></Header>
      <main
        css={css`
          margin: 2rem auto 4rem;
          max-width: 90vw;
          width: 550px;
        `}
      >
        {children}
      </main>
    </>
  );
};
export default Layout;
