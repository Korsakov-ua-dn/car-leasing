import React from 'react';
import './style.scss';

type PropsType = {
  children: React.ReactNode | React.ReactNode[] | React.ReactElement
}

const TotalWrapper:React.FC<PropsType> = (props) => {

  return (
    <div className={'Total-wrapper'}>
      {props.children}
    </div>
  )
}

export default React.memo(TotalWrapper);
