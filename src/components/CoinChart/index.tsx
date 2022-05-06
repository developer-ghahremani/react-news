import Chart from "./Chart";
import { Coin } from "models/Coin.model";
import Header from "./Header";

type Props = { coin: Coin };

const CoinChart = (props: Props) => {
  return (
    <div className="mt-8">
      <Header coin={props.coin} />

      <Chart coin={props.coin} />
    </div>
  );
};

export default CoinChart;
