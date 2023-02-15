import React, { useEffect } from "react";
import Title from "../../components/title";
import Wrapper from "../../components/wrapper";
import FormLeasing from "../../containers/form-leasing";

type PropsType = {};

const Main: React.FC<PropsType> = (props) => {

  useEffect(() => {
    // Инициализация страницы "Main"
  }, [])

  return (
    <Wrapper>
      <Title>
        Рассчитайте стоимость<br/> автомобиля в&nbsp;лизинг
      </Title>
      <FormLeasing/>
    </Wrapper>
  );
};

export default React.memo(Main) as typeof Main;
