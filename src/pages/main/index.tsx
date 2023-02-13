import React, { useEffect } from "react";
import FormLeasing from "../../containers/form-leasing";

type PropsType = {};

const Main: React.FC<PropsType> = (props) => {

  useEffect(() => {
    // Инициализация страницы "Main"
  }, [])

  return (
    <div>
      <h1>Рассчитайте стоимость автомобиля в лизинг</h1>
      <FormLeasing/>
    </div>
  );
};

export default React.memo(Main) as typeof Main;
