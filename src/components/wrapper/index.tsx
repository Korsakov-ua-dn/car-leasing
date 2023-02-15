import React from 'react';
import './style.scss';

type PropsType = {
  children: React.ReactNode | React.ReactNode[] | React.ReactElement
}

const Wrapper:React.FC<PropsType> = (props) => {

  return (
    <div className={'Wrapper'}>
      {props.children}
    </div>
  )
}

export default React.memo(Wrapper);
