import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import "./style.scss";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
type PropsType = DefaultInputPropsType & {
  value: number;
  min: number;
  max: number;
  formikProps: any;
};

const InputRange: React.FC<PropsType> = (props) => {

  let percentValue = ((props.value - props.min) / (props.max - props.min)) * 100;
  percentValue = percentValue < 0 ? 0 : percentValue
  percentValue = percentValue > 100 ? 100 : percentValue

  return (
    <div className="Input-range">
      <input
        type="range"
        min={props.min}
        max={props.max}
        style={{ backgroundSize: `${percentValue}% 100%` }}
        {...props.formikProps}
      />
    </div>
  );
};

export default React.memo(InputRange) as typeof InputRange;
