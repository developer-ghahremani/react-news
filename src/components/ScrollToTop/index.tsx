// ScrollToTop.jsx

import React, { useEffect } from "react";

import { useLocation } from "react-router";

type Props = { children: React.ReactNode };

const ScrollToTop = (props: Props) => {
  const location = useLocation();
  // useEffect(() => {
  //   window.scroll({ behavior: "smooth", top: 0 });
  // }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
