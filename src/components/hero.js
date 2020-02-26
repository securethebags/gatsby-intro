import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { Global, css } from '@emotion/core';

const ImageBackground = styled(BackgroundImage)`
  background-position: top 30% center;
  background-size: cover;
  height: 100vh;
`;

const TextBox = styled('div')`
  background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-center;
  text-align: center;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  h1 {
    text-shadow: 2px 2px 3px rebeccapurple;
    margin-top: 45%;
    font-family: monospace;
  }
  h4 {
    font-family: monospace;
    color: white;
    background-color: black;
  }
  p,
  a {
    color: #222;
    margin-top: 0;
    background-color: black;
    opacity: 0.9;
  }
  a {
    margin-top: 0.5rem;
  }
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "photocontext.jpeg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <ImageBackground
      Tag="section"
      fluid={image.sharp.fluid}
      styles={css`
        height: 100%;
        width: 100%;
      `}
    >
      <TextBox>
        <div>
          <h1>antyabstract</h1>
          <h4>Thanks for checking out my proto personal site!</h4>
        </div>
      </TextBox>
    </ImageBackground>
  );
};

export default Hero;
