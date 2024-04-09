import React from "react";
import Headline1 from "../../components/headline1/Headline1";
import Navbar from "../../components/navbar/Navbar";
import TrendingLists from "../../components/trendinglists/TrendingLists";
import HeadLinesprops from "../../components/headlines/HeadLinesprops";
import PriceCardprops from "../../components/priceCard/PriceCardprops";
import TokenCardprops from "../../components/tokenCard/TokenCardprops";
import HeadSuite from "../../components/headsuite/HeadSuite";
import Ecosystem from "../../components/ecosystem/Ecosystem";
import ProtocolCard from "../../components/protocolcard/ProtocolCard";
import Disclaimer from "../../components/disclaimer/Disclaimer";

const Home = () => {
  return (
    <>
      <div className=" overflow-hidden">
        <Headline1 />
        <Navbar />
        <TrendingLists />
        <div className=" pt-32">
          <HeadLinesprops />
        </div>
        <PriceCardprops />
        <div className=" pt-32">
          <HeadSuite />
        </div>
        <TokenCardprops />
        <div className=" pt-32">
          <Ecosystem />
        </div>
        <ProtocolCard />
        <Disclaimer />
      </div>
    </>
  );
};

export default Home;
