import { parse, stringifyUrl } from "query-string";
import { useLocation, useNavigate } from "react-router-dom";

import { Coin } from "models/Coin.model";
import { LineChart } from "components/general";
import Loading from "components/Loading";
import { useGetCoinHistoryQuery } from "store/service";
import { useI18Next } from "i18n";

type Props = { coin: Coin };

const Chart = (props: Props) => {
  const { t } = useI18Next();
  const { search, pathname } = useLocation();
  const { timePeriod } = parse(search);
  const timePeriods = ["3h", "24h", "7d", "30d", "3m"];
  const navigate = useNavigate();

  const { isFetching, data, isError } = useGetCoinHistoryQuery({
    uuid: props.coin.uuid,
    timePeriod: typeof timePeriod === "string" ? timePeriod : undefined,
  });

  const handleChangeTimePeriod = (timeP: string) => {
    navigate(
      stringifyUrl({
        url: pathname,
        query: { coin: props.coin.uuid, timePeriod: timeP },
      })
    );
  };

  if (isError) return <p>{t("general.errorOccured")}</p>;
  if (isFetching || !data)
    return (
      <div className="h-[700px]">
        <Loading />
      </div>
    );
  return (
    <div className="flex flex-col items-center">
      <LineChart
        axisBottom={t("general.date")}
        axisLeft={t("general.price")}
        data={[
          {
            id: props.coin.symbol,
            color: props.coin.color,
            data: data?.data.history.map((item) => ({
              x: new Date(item.timestamp * 1000),
              y: parseFloat(item.price),
            })),
          },
        ]}
      />
      <div className="border-primary flex my-8 border-[1px] rounded-md p-[1px]">
        {timePeriods.map((item) => (
          <div
            onClick={() => handleChangeTimePeriod(item)}
            className={`px-2 cursor-pointer py-1 ${
              timePeriod === item ? "bg-primary text-white rounded-md" : ""
            }`}>
            <p className="text-sm font-bold">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chart;
