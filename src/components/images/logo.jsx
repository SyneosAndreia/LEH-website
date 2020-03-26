import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// This seems extremely boilerplatey, but we're only using staticQuery wrapped
// components for Site-wide graphics, aka: the logos, and maybe the dots overlay?
// The query ensures it goes through the fancy asset pipeline gatsby gives us.
// A page query (on the individual pages themselves) would likely be better for page-specific
// images, since that ensures the code-splitting won't load metadata and such for images not
// on the page.

const Logo = (props) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 341) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        className={props.className ? `logo ${props.className}` : 'logo'}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
);

export default Logo;