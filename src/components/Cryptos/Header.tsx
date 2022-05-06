import { DownIcon, UpIcon } from "components/icons";
import { parse, stringifyUrl } from "query-string";
import { useLocation, useNavigate } from "react-router-dom";

import constants from "constant";
import { useI18Next } from "i18n";

const Header = () => {
  const { pathname, search } = useLocation();
  const { orderBy, orderDirection } = parse(search);
  const navigate = useNavigate();
  const { t } = useI18Next();

  const handlePriceClick = (order: "price" | "marketCap") => {
    let query: any = {
      orderBy: order,
    };

    if (!orderDirection) query.orderDirection = constants.desc;
    if (orderDirection === constants.desc) query.orderDirection = constants.asc;
    if (orderDirection === constants.asc) query.orderDirection = constants.desc;
    if (orderBy === constants.price && orderDirection === constants.asc)
      query = {};

    navigate(
      stringifyUrl({
        url: pathname,
        query,
      })
    );
  };

  return (
    <div className="flex">
      <div className=" flex-1">
        <p>{t("general.allCoins")}</p>
      </div>
      <div className=" flex items-center justify-center flex-1">
        <p className="cursor-pointer" onClick={() => handlePriceClick("price")}>
          {t("general.price")}
        </p>
        <div className="flex flex-col mx-2">
          <UpIcon
            color={
              orderBy === constants.price && orderDirection === constants.desc
                ? "red"
                : "gray"
            }
          />
          <DownIcon
            style={{ marginTop: "-10px" }}
            color={
              orderBy === constants.price && orderDirection === constants.asc
                ? "red"
                : "gray"
            }
          />
        </div>
      </div>
      <div className=" md:flex justify-center flex-1 hidden">
        <p
          className="cursor-pointer"
          onClick={() => handlePriceClick("marketCap")}>
          {t("general.marketCap")}
        </p>
        <div className="flex flex-col mx-2">
          <UpIcon
            color={
              orderBy === constants.marketCap &&
              orderDirection === constants.desc
                ? "red"
                : "gray"
            }
          />
          <DownIcon
            style={{ marginTop: "-10px" }}
            color={
              orderBy === constants.marketCap &&
              orderDirection === constants.asc
                ? "red"
                : "gray"
            }
          />
        </div>
      </div>
      <div className="w-[120px]  "></div>
    </div>
  );
};

export default Header;
