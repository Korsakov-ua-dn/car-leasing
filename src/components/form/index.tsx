import React from "react";
import "./style.scss";

type PropsType = {
  onSubmit:  (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  children: React.ReactNode | React.ReactNode[] | React.ReactElement;
};

const FormLeasing: React.FC<PropsType> = (props) => {
  return (
    <form className="Form" onSubmit={props.onSubmit}>
      { props.children }
    </form>
  );
};

export default React.memo(FormLeasing) as typeof FormLeasing;
