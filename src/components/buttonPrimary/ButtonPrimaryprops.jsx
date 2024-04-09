import React from "react";

const ButtonPrimaryprops = (props) => {
  return (
    <>
      <button className="bg-[#FDEAF1] text-[#F95997] font-medium p-3 rounded-2xl">
        {props.title}
      </button>
    </>
  );
};

export default ButtonPrimaryprops;
