import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1> About me </h1>
    <p>
      {' '}
      My name is Anthony Jimenez and I work with computers every day. I am a web
      developer from NYC. I am currently interviewing for frontend internship
      positions.
    </p>
    <Link to="/">&larr; head back home </Link>
  </Layout>
);
