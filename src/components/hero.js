import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { Global, css } from '@emotion/core';

const ImageBackground = styled(BackgroundImage)`
  background-position: top 70% center;
  background-size: cover;
  height: 100vh;
  margin-top: 0;
`;

const TextBox = styled('div')`
  margin-top: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-center;
  text-align: center;
  padding: 0 calc((100vw - 650px) / 2) 2rem;
  div {
    background-color: white;
    margin-top: 25%;
    min-height: 60vh;
    border-radius: 10%;
    opacity: 0.7;
  }
  h1 {
    text-shadow: 2px 2px 3px rebeccapurple;
    font-family: monospace;
  }
  h4 {
    margin-top: 15%;
    font-family: monospace;
    color: black;
  }
  p,
  a {
    color: #222;
    margin-top: 0;
    margin-top: 5%;
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
    <>
      <ImageBackground Tag="section" fluid={image.sharp.fluid} styles={css``}>
        <TextBox>
          <div>
            <h1>antyabstract</h1>
            <h4>Thanks for checking out my proto personal site!</h4>
            <p>
              This site will be updated often as I add new features and change
              the layout.
            </p>
          </div>
        </TextBox>
      </ImageBackground>
    </>
  );
};

export default Hero;
