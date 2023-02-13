import React, { useEffect } from "react";

type PropsType = {};

const Calculator: React.FC<PropsType> = (props) => {

  useEffect(() => {
    // Инициализация страницы
  }, [])

  return (
    <div>
        <h1>Рассчитайте стоимость автомобиля в лизинг</h1>
    </div>
  );
};

export default React.memo(Calculator) as typeof Calculator;
