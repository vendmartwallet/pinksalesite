import React from "react";

const ButtonSecprops = (props) => {
  return (
    <>
      <div className=" flex items-center gap-2 bg-[#F3F3F4] p-3 rounded-2xl">
        <img src={props.img} alt="" className="lg:block hidden" />
        <button className="">{props.title}</button>
      </div>
    </>
  );
};

export default ButtonSecprops;
