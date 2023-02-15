import React, { useLayoutEffect } from "react";
import Layout from "../../components/layout";

type PropsType = {
  children: React.ReactNode | React.ReactNode[] | React.ReactElement
};

const MainLayout: React.FC<PropsType> = (props) => {

  useLayoutEffect(() => {
    // Инициализация приложения
  }, [])

  return (
    <Layout>
      { props.children }
    </Layout>
  );
};

export default React.memo(MainLayout);
