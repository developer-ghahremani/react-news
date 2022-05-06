import CoinChart from "components/CoinChart";
import CoinInfo from "./Info";
import Header from "./Header";
import Loading from "components/Loading";
import { MainLayout } from "components/layout";
import { parse } from "query-string";
import { useGetCoinQuery } from "store/service";
import { useLocation } from "react-router-dom";

const Coin = () => {
  const { search } = useLocation();
  const { coin } = parse(search);
  const { isFetching, data } = useGetCoinQuery({
    uuid: typeof coin === "string" ? coin : undefined,
  });

  if (isFetching || !data)
    return (
      <MainLayout>
        <Loading />
      </MainLayout>
    );
  return (
    <MainLayout>
      <Header coin={data?.data.coin} />
      <CoinChart coin={data.data.coin} />
      <CoinInfo coin={data.data.coin} />
    </MainLayout>
  );
};

export default Coin;
