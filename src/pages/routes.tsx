import Cryptos from "./Cryptos";
import Home from "./Home";
import { pageNames } from "constant";

const routes: { path: string; element: JSX.Element }[] = [
  {
    path: pageNames.home,
    element: <Home />,
  },
  {
    path: pageNames.crypto,
    element: <Cryptos />,
  },
];

export default routes;
