import React from "react";
// import Doublebtn from "../../components/doublebtn/Doublebtn";

const HeadSuite = () => {
  const HeadLine = (props) => {
    return (
      <>
        <div className=" px-5">
          <div>
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              className=" text-center text-[34px] text-[#222222] leading-[40px] font-semibold"
            >
              {props.header}
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="3000"
              className=" text-center font-normal text-[#222222] gap-5 text-[20px] pt-4"
            >
              {props.paragraph}
            </p>
          </div>

          {/* <div className=" grid grid-cols-1 gap-2">
          <Doublebtn title="Create Now"/>
          <Doublebtn title="Learn more"/>
          </div> */}
        </div>
      </>
    );
  };

  return (
    <>
      <div>
        <HeadLine
          header="A Suite of Tools for Token Sales."
          paragraph="A suite of tools were built to help you create your own tokens and launchpads in a fast, simple and cheap way, with no prior code knowledge required and 100% decentralized!"
        />
      </div>
    </>
  );
};

export default HeadSuite;
