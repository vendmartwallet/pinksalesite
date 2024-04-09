import React from "react";

const Wallets = (props) => {
  return (
    <>
      <div className=" flex flex-col py-2 justify-center items-center border">
        <div className=" w-12 h-12">
          <img src={props.img} alt="" />
        </div>
        <div>
          <p className=" text-sm">{props.walletName}</p>
        </div>
      </div>
    </>
  );
};

export default Wallets;
