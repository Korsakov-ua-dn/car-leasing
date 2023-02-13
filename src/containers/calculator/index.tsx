import React, { useEffect } from "react";
import FormLeasing from "../../components/form";

type PropsType = {};

const Calculator: React.FC<PropsType> = (props) => {
  useEffect(() => {
    // Инициализация страницы
  }, []);

  return (
    <div>
      <h1>Рассчитайте стоимость автомобиля в лизинг</h1>
      <FormLeasing/>
    </div>
  );
};

export default React.memo(Calculator) as typeof Calculator;
