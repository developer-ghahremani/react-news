import { Sparklines, SparklinesLine } from "react-sparklines";

import { Coin as CoinModel } from "models/Coin.model";
import { Link } from "react-router-dom";
import React from "react";
import { millify } from "millify";
import { pageNames } from "constant";
import { stringifyUrl } from "query-string";

type Props = {
  coin: CoinModel;
};

const Coin = (props: Props) => {
  return (
    <Link
      to={stringifyUrl({
        url: pageNames.coin,
        query: { coin: props.coin.uuid },
      })}
      className="coin-item-contianer">
      <div className="flex items-center flex-1">
        <p>{props.coin.rank}</p>
        <div className="flex items-center mx-4">
          <img src={props.coin.iconUrl} className="w-8 h-8" alt="" />
          <div className=" flex flex-col mx-2">
            <p className="font-bold leading-none">{props.coin.name}</p>
            <p className="leading-none">{props.coin.symbol}</p>
          </div>
        </div>
      </div>

      <div className=" flex-1">
        <p className="font-bold text-center">{`$${millify(
          parseInt(props.coin.price)
        )}`}</p>
      </div>
      <div className="md:block flex-1 hidden">
        {props.coin.marketCap && (
          <p className="font-bold text-center">{`$${millify(
            parseInt(props.coin.marketCap)
          )}`}</p>
        )}
      </div>
      <Sparklines
        data={props.coin.sparkline.map((item) => parseInt(item))}
        style={{ width: "120px" }}>
        <SparklinesLine color={props.coin.color} />
      </Sparklines>
    </Link>
  );
};

export default Coin;
