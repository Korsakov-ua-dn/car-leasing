import React, { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import "./style.scss";

// тип пропсов обычного button
type DefaultInputPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
type PropsType = DefaultInputPropsType & {
  children: string;
  disabled: boolean;
  isSubmitting: boolean;
};

const Button: React.FC<PropsType> = ({ 
  children, 
  disabled, 
  isSubmitting, 
  ...restProps 
}) => {
  const ClassN = ` ${disabled ? "Button disabled" : "Button"}`;
  
  return (
    <button
      className={ClassN}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default React.memo(Button) as typeof Button;
