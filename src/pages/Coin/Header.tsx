import { HeartFilledIcon, HeartIcon, ShareIcon } from "components/icons";
import { useAppDispatch, useAppSelector } from "store";

import { Coin } from "models/Coin.model";
import React from "react";
import { toggleFavorite } from "store/favoriteCoins";
import { useI18Next } from "i18n";

type Props = { coin: Coin };

const Header = (props: Props) => {
  const { t } = useI18Next();
  const dispatch = useAppDispatch();
  const favoriteCoins = useAppSelector((s) => s.favoriteCoins);

  const hanleToggleFavo = () => {
    dispatch(toggleFavorite(props.coin));
  };

  const options: { icon: JSX.Element; title?: string; onClick: () => void }[] =
    [
      {
        icon: favoriteCoins.find((item) => item.uuid === props.coin.uuid) ? (
          <HeartFilledIcon
            className="text-primary animate__animated animate__heartBeat"
            size={20}
          />
        ) : (
          <HeartIcon
            className="text-primary animate__animated animate__heartBeat"
            size={20}
          />
        ),
        onClick: hanleToggleFavo,
        title: "favo",
      },
      {
        icon: <ShareIcon className="text-primary" size={20} />,
        onClick: () => {},
        title: "share",
      },
    ];

  return (
    <div>
      <div className="flex justify-end mt-4">
        {options.map((item, index) => (
          <div
            style={{ animationDelay: `${index / 2}s` }}
            className="coin-option-contianer"
            onClick={item.onClick}
            key={item.title}>
            {item.icon}
          </div>
        ))}
      </div>

      <div className="animate__animated animate__fadeInUp flex flex-col items-center">
        <div className="flex items-center">
          <img src={props.coin.iconUrl} className="w-8 h-8" alt="" />
          <p className="mx-4 text-2xl font-bold">{`${props.coin.name} (${
            props.coin.symbol
          }) ${t("general.price")}`}</p>
        </div>
        <p className="text-center">
          {props.coin.description
            ?.substring(
              props.coin.description.indexOf("<p>"),
              props.coin.description.indexOf("</p>")
            )
            .replaceAll("<p>", "")}
        </p>
      </div>
    </div>
  );
};

export default Header;
