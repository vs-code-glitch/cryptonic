/* eslint-disable react/prop-types */
import CoinSearch from "../components/CoinSearch";
import Trending from "../components/Trending";

const Home = ({ coins }) => {
  console.log(coins)
  return (
    <div>
      
    
      <CoinSearch coins={coins} />
      <Trending/>
    </div>
  );
};

export default Home;
