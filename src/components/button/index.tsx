import React, { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import "./style.scss";

// тип пропсов обычного button
type DefaultInputPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
type PropsType = DefaultInputPropsType & {
  children: string;
  isSubmitting: boolean;
};

const Button: React.FC<PropsType> = ({ children, isSubmitting, ...restProps }) => {
  // console.log(isSubmitting);
  
  return (
    <button className="Button" {...restProps}>
      {children}
    </button>
  );
};

export default React.memo(Button) as typeof Button;
