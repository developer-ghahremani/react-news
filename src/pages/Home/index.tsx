import Cryptos from "components/Cryptos";
import LatestNews from "components/LatestNews";
import { MainLayout } from "components/layout";

const Home = () => {
  return (
    <MainLayout>
      <Cryptos limit={20} />
      <LatestNews className="mt-8" />
    </MainLayout>
  );
};

export default Home;
