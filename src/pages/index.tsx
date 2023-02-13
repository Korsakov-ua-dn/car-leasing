import React from "react";
import MainLayout from "../containers/main-layout";
import Main from "./main";

const App:React.FC = () => {
  return (
    <MainLayout>
      <Main />
    </MainLayout>
  );
};

export default App;
