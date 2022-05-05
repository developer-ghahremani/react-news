import CryptoList from "components/Cryptos";
import { MainLayout } from "components/layout";
import React from "react";

type Props = {};

const Cryptos = (props: Props) => {
  return (
    <MainLayout>
      <CryptoList limit={50} />
    </MainLayout>
  );
};

export default Cryptos;
