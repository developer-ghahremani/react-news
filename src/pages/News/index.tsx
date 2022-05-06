import LatestNews from "components/LatestNews";
import { MainLayout } from "components/layout";
import React from "react";

type Props = {};

const News = (props: Props) => {
  return (
    <MainLayout>
      <LatestNews />
    </MainLayout>
  );
};

export default News;
