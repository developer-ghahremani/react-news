import { DownIcon, UpIcon } from "components/icons";
import { parse, stringifyUrl } from "query-string";
import { useLocation, useNavigate } from "react-router-dom";

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

    if (!orderDirection) query.orderDirection = "desc";
    if (orderDirection === "desc") query.orderDirection = "asc";
    if (orderDirection === "asc") query.orderDirection = "desc";
    if (orderBy === "price" && orderDirection === "asc") query = {};

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
              orderBy === "price" && orderDirection === "desc" ? "red" : "gray"
            }
          />
          <DownIcon
            style={{ marginTop: "-10px" }}
            color={
              orderBy === "price" && orderDirection === "asc" ? "red" : "gray"
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
              orderBy === "marketCap" && orderDirection === "desc"
                ? "red"
                : "gray"
            }
          />
          <DownIcon
            style={{ marginTop: "-10px" }}
            color={
              orderBy === "marketCap" && orderDirection === "asc"
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
