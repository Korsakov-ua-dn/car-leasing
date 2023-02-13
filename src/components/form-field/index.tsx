import React from "react";
import { useField } from 'formik';
import InputRange from "../input-range";
import InputText from "../input-text";
import "./style.scss";

type PropsType = {
  view: string;
  lable: string
  mark: string;
  fieldName: any,
  min: number;
  max: number;
};

const FormField: React.FC<PropsType> = (props) => {

  const [field, meta, helpers] = useField(props.fieldName);

  return (
    <div className="Form-field" >
      <label className="Form-field__lable">{props.lable}</label>
      <div className="Form-field__inputs-wrapper">
        <InputText 
          view={props.view}
          mark={props.mark}
          formikProps={field}
        />
        <InputRange
          value={field.value}
          min={props.min}
          max={props.max}
          formikProps={field}
        />
      </div>
    </div>
  );
};

export default React.memo(FormField) as typeof FormField;
