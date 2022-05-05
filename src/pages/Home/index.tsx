import Cryptos from "components/Cryptos";
import LatestNews from "components/LatestNews";
import { MainLayout } from "components/layout";

const Home = () => {
  return (
    <MainLayout>
      <LatestNews className="mt-8" />
      <Cryptos limit={20} />
    </MainLayout>
  );
};

export default Home;
