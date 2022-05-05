import { Route, Routes } from "react-router-dom";

import React from "react";
import ScrollToTop from "components/ScrollToTop";
import routes from "./routes";

type Props = {};

const Pages = (props: Props) => {
  return (
    <ScrollToTop>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Routes>
    </ScrollToTop>
  );
};

export default Pages;
