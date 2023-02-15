import React from 'react';
import './style.scss';

type PropsType = {
  children: React.ReactNode | React.ReactNode[] | React.ReactElement
}

const SettingsWrapper:React.FC<PropsType> = (props) => {

  return (
    <div className={'Settings-wrapper'}>
      {props.children}
    </div>
  )
}

export default React.memo(SettingsWrapper);
