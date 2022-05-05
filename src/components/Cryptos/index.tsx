import { Link, useLocation } from "react-router-dom";

import { CoinItem } from "components/items";
import Header from "./Header";
import Loading from "components/Loading";
import { pageNames } from "constant";
import { parse } from "query-string";
import { useGetCoinsQuery } from "store/service";
import { useI18Next } from "i18n";

type Props = { limit: number };

const Cryptos = (props: Props) => {
  const { search, pathname } = useLocation();
  const { orderBy, orderDirection } = parse(search);
  const { t } = useI18Next();

  const { isFetching, data } = useGetCoinsQuery({
    limit: props.limit,
    orderBy: typeof orderBy === "string" ? orderBy : "marketCap",
    orderDirection:
      typeof orderDirection === "string" ? orderDirection : "desc",
  });

  if (isFetching) return <Loading />;
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="my-8 text-5xl">{t("general.cryptoCurrencies")}</h1>
        {pathname === pageNames.home && (
          <Link to={pageNames.crypto}>{t("general.showAll")}</Link>
        )}
      </div>
      <Header />

      {data?.data.coins.map((coin, index) => (
        <div
          className="animate__animated animate__fadeInUp animate__slow"
          style={{ animationDelay: `${index / 5}s` }}>
          <CoinItem coin={coin} key={coin.uuid} />
        </div>
      ))}
    </div>
  );
};

export default Cryptos;
