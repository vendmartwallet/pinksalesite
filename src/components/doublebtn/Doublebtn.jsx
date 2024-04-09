import React from "react";

const Doublebtn = (props) => {
  return (
    <>
      <button className="bg-[#FDEAF1] text-[#F95997] font-medium py-4 rounded-2xl">
        {props.title}
      </button>
    </>
  );
};

export default Doublebtn;
