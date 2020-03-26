import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './hcp-header';
import Footer from './hcp-footer';

import '../../styles/layout.scss';

const LayoutHCP = (props, { children }) => {
  return (
    <StaticQuery
      query={graphql`
        query HCPSiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main className={props.className ? `l-main ${props.className}` : 'l-main'}>{props.children}</main>
          <Footer />
        </>
      )}
    />
  );
};

LayoutHCP.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutHCP;
