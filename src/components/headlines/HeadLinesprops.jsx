import React from "react";
import Doublebtn from "../../components/doublebtn/Doublebtn";

const HeadLinesprops = () => {
  const HeadLine = (props) => {
    return (
      <>
        <div data-aos="fade-up"
        data-aos-duration="1000" className=" px-5">
          <div>
            <h1 className=" text-center text-[38px] text-[#222222] leading-[50px] font-semibold">
              {props.header}
            </h1>
            <p className=" text-center font-normal text-[#222222] gap-5 text-[19px] pt-4">
              {props.paragraph}
            </p>
          </div>

          <div data-aos="fade-up"
        data-aos-duration="2000" className=" grid grid-cols-1 gap-2 mt-5">
            <Doublebtn title="Create Now" />
            <Doublebtn title="Learn more" />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div>
        <HeadLine
          header="The Launchpad Protocol for Everyone!"
          paragraph="PinkSale helps everyone to create their own tokens and token sales in few seconds.

Tokens created on PinkSale will be verified and published on explorer websites."
        />
      </div>
    </>
  );
};

export default HeadLinesprops;
