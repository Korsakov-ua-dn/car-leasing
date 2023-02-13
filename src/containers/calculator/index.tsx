import React, { useEffect } from "react";
import FormField from "../../components/form-field";

type PropsType = {};

const Calculator: React.FC<PropsType> = (props) => {

  useEffect(() => {
    // Инициализация страницы
  }, [])

  return (
    <div>
        <h1>Рассчитайте стоимость автомобиля в лизинг</h1>
        <FormField
          value={String(3300000)}
          lable="Стоимость автомобиля"
          mark="₽"
          onChange={()=>{}}
        />
         <FormField
          value={String(420000)}
          lable="Первоначальный взнос"
          mark="13%"
          onChange={()=>{}}
        />
    </div>
  );
};

export default React.memo(Calculator) as typeof Calculator;
