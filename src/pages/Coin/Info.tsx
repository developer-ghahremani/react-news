import { Coin } from "models/Coin.model";
import React from "react";
import millify from "millify";
import { useI18Next } from "i18n";

type Props = { coin: Coin };

const CoinInfo = (props: Props) => {
  const { t } = useI18Next();

  const options: { title: string; icon?: JSX.Element; value: any }[] = [
    {
      title: t("general.price"),
      value: `$ ${millify(parseFloat(props.coin.price))}`,
    },
    {
      title: t("general.webSiteLink"),
      value: (
        <a
          href={props.coin.websiteUrl}
          target="_blank"
          rel="noopener noreferrer">
          {props.coin.name}
        </a>
      ),
    },
    {
      title: t("general.priceTOBTC"),
      value: `$ ${millify(parseFloat(props.coin.btcPrice))}`,
    },
    {
      title: t("general.rank"),
      value: `${props.coin.rank}`,
    },
    {
      title: t("general.24hVolume"),
      value: `$ ${millify(parseFloat(props.coin["24hVolume"]))}`,
    },
    {
      title: t("general.marketCap"),
      value: `$ ${millify(parseFloat(props.coin["marketCap"]))}`,
    },
    {
      title: t("general.numberOfMarkets"),
      value: `$ ${props.coin["numberOfMarkets"]}`,
    },
    {
      title: t("general.numberOfExchanges"),
      value: `$ ${props.coin["numberOfExchanges"]}`,
    },
    {
      title: t("general.allTimeHigh"),
      value: `$ ${millify(
        parseFloat(props.coin["allTimeHigh"]?.price || "0")
      )}`,
    },
    {
      title: t("general.coinRankingLink"),
      value: (
        <a
          href={props.coin.coinrankingUrl}
          target="_blank"
          rel="noopener noreferrer">
          {t("general.coinRankingLink")}
        </a>
      ),
    },
    {
      title: t("general.links"),
      value: (
        <div className="flex flex-col">
          {props.coin.links?.map((ttt) => (
            <a href={ttt.url} target="_blank" rel="noopener noreferrer">
              {ttt.name}
            </a>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="md:grid-cols-2 grid col-span-1 gap-4">
      <div className="flex flex-col">
        <p className="text-2xl font-bold">{`${props.coin.name} (${props.coin.symbol})`}</p>
        <p
          className="mt-4"
          dangerouslySetInnerHTML={{
            __html: props.coin.description || "",
          }}></p>
      </div>
      <div className="bg-primary bg-opacity-10 h-fit flex flex-col p-2 rounded-lg">
        <p className="text-2xl font-bold">{`${props.coin.name} ${t(
          "general.detail"
        )}`}</p>
        {options.map((item) => (
          <div className="flex flex-col w-full mt-2">
            <div className="flex items-center justify-between">
              <p>{item.title}</p>
              <p className="font-bold">{item.value}</p>
            </div>
            <span className="bg-primary w-full h-[1.5px] bg-opacity-60 my-2"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinInfo;
