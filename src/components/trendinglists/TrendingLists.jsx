import React from "react";
import Tradeview from "../../assets/tradeview.svg";

const TrendingLists = () => {
  const Trending = (props) => {
    return (
      <>
        <div className=" flex items-center gap-3">
          <div className=" flex items-center gap-2">
            <img src={props.img} alt="" />
            <h1 className=" font-semibold text-lg">{props.trendheader}</h1>
          </div>

          <div>
            <div>
              <p className=" flex items-center text-sm ">
                {props.harsh}
                <span className=" text-[#F95997] pl-2">{props.title}</span>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="scrollcontainer  flex gap-2 px-5 items-center overflow-scroll lg:overflow-hidden">
        <div>
          <Trending img={Tradeview} trendheader="Trending" />
        </div>
        <div className=" flex gap-1 items-center">
          <Trending harsh="#1" title="MyroFloki" />
          <Trending harsh="#1" title="MyroFloki" />
          <Trending harsh="#1" title="MyroFloki" />
          <Trending harsh="#1" title="MyroFloki" />
          <Trending harsh="#1" title="MyroFloki" />
          <Trending harsh="#1" title="MyroFloki" />
          <Trending harsh="#1" title="MyroFloki" />
          <Trending harsh="#1" title="MyroFloki" />
          <Trending harsh="#1" title="MyroFloki" />
        </div>
      </div>
    </>
  );
};

export default TrendingLists;
