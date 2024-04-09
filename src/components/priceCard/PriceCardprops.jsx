import React from "react";

const PriceCardprops = () => {
  const Card = (props) => {
    return (
      <>
        <div className="price py-14 rounded-2xl text-center w-[70%] mx-auto">
          <div className=" text-4xl font-semibold leading-[40px] ">
            {props.price}
          </div>
          <div className=" text-md font-light">{props.description}</div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className=" grid grid-cols-1 gap-7 pt-14">
        <div data-aos="fade-right" data-aos-duration="2000">
          <Card price="$27.4M" description="Total Liquidity Raised" />
        </div>
        <div data-aos="fade-left" data-aos-duration="2000">
          <Card price="22568" description="Total Projects" />
        </div>
        <div data-aos="fade-right" data-aos-duration="2000">
          <Card price="2.6M" description="Total Participants" />
        </div>
        <div data-aos="fade-left" data-aos-duration="2000">
          <Card price="$77.1M" description="Total Values Locked" />
        </div>
      </div>
    </>
  );
};

export default PriceCardprops;
