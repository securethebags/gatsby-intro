import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import Image from 'gatsby-image';
export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <p>Posted by {post.frontmatter.author}</p>
    <MDXRenderer>{post.body}</MDXRenderer>
    <ReadLink to="/">&larr; back to home page</ReadLink>
  </Layout>
);

export default PostTemplate;
