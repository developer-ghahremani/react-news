import { Route, Routes } from "react-router-dom";

import React from "react";
import routes from "./routes";

type Props = {};

const Pages = (props: Props) => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Routes>
  );
};

export default Pages;
