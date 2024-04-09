import React from "react";
import PinkSale from "../../assets/pinkmoon.png";

const TokenCardprops = () => {
  const Card = (props) => {
    return (
      <>
        <div className="price py-14 flex flex-col items-center rounded-2xl w-[70%] mx-auto">
          <div className=" h-20 w-20">
            <img src={props.img} alt="" />
          </div>
          <div className=" text-3xl font-semibold pt-2 leading-[40px] ">
            {props.price}
          </div>
          <div className=" text-md w-[80%] text-center pt-2 font-light">
            {props.description}
          </div>
        </div>
      </>
    );
  };
  return (

    <>
      <div className=" grid grid-cols-1 gap-7 pt-14">
       <div data-aos="zoom-in-right" data-aos-duration="2000">
       <Card
          img={PinkSale}
          price="Standard
          "
          description="Mint standard tokens on ETH, BSC, AVAX, Fantom, Polygon.

          "
        />
       </div>
        <div data-aos="zoom-in-left" data-aos-duration="2000">
        <Card
          img={PinkSale}
          price="Deflationary"
          description="Generate deflationary tokens with tax and/or charity functions."
        />
        </div>
        <div data-aos="zoom-in-right" data-aos-duration="2000">
        <Card
          img={PinkSale}
          price="Customization"
          description="Create a token sale for your own custom token easily."
        />
        </div>
        <div data-aos="zoom-in-left" data-aos-duration="2000">
        <Card
          img={PinkSale}
          price="Launchpad"
          description="Use the token you mint to create a launchpad with just a few clicks"
        />
        </div>
        <div>
        <Card
          img={PinkSale}
          price="Branding"
          description="Adding logo, social links, description, listing on PinkSale."
        />
        </div>

        <div data-aos="zoom-in-right" data-aos-duration="2000">
        <Card
          img={PinkSale}
          price="Management"
          description="The portal to help you easily update content for your launchpad."
        />
        </div>

        <div data-aos="zoom-in-left" data-aos-duration="2000">
        <Card
          img={PinkSale}
          price="Community"
          description="Promote your launchpad to thousands of buyers on PinkSale."
        />
        </div>
        <div data-aos="zoom-in-right" data-aos-duration="2000">
        <Card
          img={PinkSale}
          price="Locking
          "
          description="Lock your liquidity to PinkSwap, PancakeSwap after presale."
        />
        </div>
      </div>
    </>
  );
};

export default TokenCardprops;
