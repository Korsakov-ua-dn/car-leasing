import React from "react";
import "./style.scss";

type PropsType = {
  // value: number;
};

const InputRange: React.FC<PropsType> = (props) => {

  const rangeChange = (e: any) => {
    let min = e.target.min;
    let max = e.target.max;
    let val = e.target.value;
    const result = ((val - min) * 100) / (max - min);
    e.target.style.backgroundSize = `${result}% 100%`;
    console.log(e.target.value);
  };
  
  return (
    <div className="Input-range" >
      <input 
        type="range"
        onChange={rangeChange}
        min="0"
        max="100"
        defaultValue="50"
      />
    </div>
  );
};

export default React.memo(InputRange) as typeof InputRange;
