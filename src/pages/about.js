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
      developer from NYC. I am currently interviewing for frontend internships
      positions (it's been going well!)
      <Link to="/">&larr; head back home </Link>
    </p>
    <Insta></Insta>
  </Layout>
);
