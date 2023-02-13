import React from "react";
import InputRange from "../input-range";
import InputText from "../input-text";
import "./style.scss";

type PropsType = {
  value: string;
  lable: string
  mark: string;
  onChange: () => void;
};

const FormField: React.FC<PropsType> = (props) => {

  const rangeChange = (e: any) => {
    let min = e.target.min;
    let max = e.target.max;
    let val = e.target.value;
    const result = ((val - min) * 100) / (max - min);
    e.target.style.backgroundSize = `${result}% 100%`;
    console.log(e.target.value);
  };
  
  return (
    <div className="Form-field" >
      <label className="Form-field__lable">{props.lable}</label>
      <div className="Form-field__inputs-wrapper">
        <InputText value={props.value} mark={props.mark}/>
        <InputRange />
      </div>
    </div>
  );
};

export default React.memo(FormField) as typeof FormField;
