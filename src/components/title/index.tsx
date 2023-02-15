import React from 'react';
import './style.scss';

type PropsType = {
  children: React.ReactNode | React.ReactNode[] | React.ReactElement
}

const Title:React.FC<PropsType> = (props) => {

  return (
    <h1 className={'Title'}>
      {props.children}
    </h1>
  )
}

export default React.memo(Title);
