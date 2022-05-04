import LatestNews from "components/LatestNews";
import { MainLayout } from "components/layout";
import React from "react";
import { useI18Next } from "i18n";

const Home = () => {
  return (
    <MainLayout>
      <LatestNews className="mt-8" />
    </MainLayout>
  );
};

export default Home;
