import React, { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import "./style.scss";

// тип пропсов обычного button
type DefaultInputPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
type PropsType = DefaultInputPropsType & {
  children: string;
};

const Button: React.FC<PropsType> = ({ children, ...restProps }) => {
  return (
    <button className="Button" {...restProps}>
      {children}
    </button>
  );
};

export default React.memo(Button) as typeof Button;
