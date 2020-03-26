/**
 * Privacy bar snippets component
 */

import React from "react";
import Helmet from "react-helmet";

function PRIVBAR() {
  return (
    <Helmet
      script={[
        {
          type: "text/javascript",
          innerHTML: 'window.yourObject = { it: "works" }'
        }
      ]}
    />
  );
}

export default PRIVBAR;
