import React, { useEffect } from "react";
import Calculator from "../../containers/calculator";

type PropsType = {};

const Main: React.FC<PropsType> = (props) => {

  useEffect(() => {
    // Инициализация страницы "Main"
  }, [])

  return (
    <Calculator/>
  );
};

export default React.memo(Main) as typeof Main;
