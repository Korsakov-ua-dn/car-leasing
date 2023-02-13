import React from "react";
import { FieldHookConfig, useField } from 'formik';
import InputRange from "../input-range";
import InputText from "../input-text";
import "./style.scss";

type PropsType = {
  view: string;
  lable: string
  mark: string;
  onChange: () => void;
  fieldName: any,
};

const FormField: React.FC<PropsType> = (props) => {

  const [field, meta, helpers] = useField(props.fieldName);

  const rangeChange = (e: any) => {
    let min = e.target.min;
    let max = e.target.max;
    let val = e.target.value;
    const result = ((val - min) * 100) / (max - min);
    e.target.style.backgroundSize = `${result}% 100%`;
    console.log(e.target.value);
  };

  // console.log(field);
  
  
  return (
    <div className="Form-field" >
      <label className="Form-field__lable">{props.lable}</label>
      <div className="Form-field__inputs-wrapper">
        <InputText view={props.view} mark={props.mark} formikProps={field}/>
        <InputRange />
      </div>
    </div>
  );
};

export default React.memo(FormField) as typeof FormField;
