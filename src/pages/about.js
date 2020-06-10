import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Insta from '../components/insta';

export default () => (
  <Layout>
    <h1> About me </h1>
    <p>
      {' '}
      My name is Anthony Jimenez and I work with computers every day. I am a web
      developer from NYC with a passion for JavaScript. I am currently pursuing
      my degree in Programming and Software Development. <br />
      <Link to="/">&larr; head back home </Link>
      <br /> <br />
      <Insta></Insta>
    </p>
  </Layout>
);
