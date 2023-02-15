import React from "react";
import "./style.scss";

type PropsType = {
  value: string;
  lable: string;
};

const TotalField: React.FC<PropsType> = (props) => {
  return (
    <div className="Form__field Total-field">
      <label className="Form__lable">{props.lable}</label>
      <div className="Total-field__value">
        {props.value}
      </div>
    </div>
  );
};

export default React.memo(TotalField) as typeof TotalField;
