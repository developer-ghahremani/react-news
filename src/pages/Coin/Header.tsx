import { HeartIcon, ShareIcon } from "components/icons";

import { Coin } from "models/Coin.model";
import React from "react";
import { useI18Next } from "i18n";

type Props = { coin: Coin };

const Header = (props: Props) => {
  const { t } = useI18Next();
  const options: { icon: JSX.Element; title?: string; onClick: () => void }[] =
    [
      {
        icon: <HeartIcon className="text-primary" size={20} />,
        onClick: () => {},
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
            className="coin-option-contianer"
            style={{ animationDelay: `${index / 2}s` }}
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
