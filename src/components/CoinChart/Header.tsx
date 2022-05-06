import { Coin } from "models/Coin.model";
import React from "react";
import millify from "millify";
import { useI18Next } from "i18n";

type Props = { coin: Coin };

const Header = (props: Props) => {
  const { t } = useI18Next();

  const options: { title: string; value: string; className?: string }[] = [
    {
      title: t("general.price"),
      value: `$ ${millify(parseFloat(props.coin.price))}`,
    },
    {
      title: t("general.24HChange"),
      value: `${props.coin.change}%`,
      className:
        parseInt(props.coin.change) > 0 ? "text-green:900" : "text-primary",
    },
  ];

  return (
    <div className="bg-primary bg-opacity-5 flex justify-between p-2 rounded-lg">
      <p className="text-2xl font-bold">
        {`${props.coin.symbol} ${t("general.price")} ${t("general.chart")}`}
      </p>
      <div className="rounded-lg border-primary flex border-[1px] px-3 py-1 border-opacity-70">
        {options.map((item) => (
          <div key={item.title} className="mx-3">
            <p className="text-xs font-bold">{item.title}</p>
            <p className={`text-base font-bold ${item.className}`}>
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
