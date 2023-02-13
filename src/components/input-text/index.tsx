import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import "./style.scss";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type PropsType = DefaultInputPropsType & {
  value: string;
  mark: string;
};

const InputText: React.FC<PropsType> = ({value, mark, ...restProps}) => {
  
  return (
    <div className="Input-text" >
      <input
        type="text"
        value={value}
        {...restProps}
      />
      <span className="Input-text__mark">{mark}</span>
    </div>
  );
};

export default React.memo(InputText) as typeof InputText;
