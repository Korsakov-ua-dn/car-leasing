import React, { KeyboardEvent, DetailedHTMLProps, InputHTMLAttributes, useCallback, useState } from "react";
import "./style.scss";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
type PropsType = DefaultInputPropsType & {
  view: string;
  mark: string;
  formikProps: any;
};

const InputText: React.FC<PropsType> = ({
  view,
  mark,
  formikProps,
  ...restProps
}) => {
  const [editMode, setEditMode] = useState(false);

  // const { onChange } = formikProps.onChange;
  
  const callbacks = {
    onClick: useCallback(() => setEditMode(true), []),
    onBlur: useCallback(() => setEditMode(false), []),
    onKeyDown: useCallback(
      (e: KeyboardEvent<HTMLInputElement>) => {
      e.key === 'Enter' && callbacks.onBlur();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  }

  return (
    <div className="Input-text" onClick={callbacks.onClick}>
      {
        editMode 
        ? <input
            type="text"
            {...restProps}
            {...formikProps}
            autoFocus
            onBlur={callbacks.onBlur}
            onKeyDown={callbacks.onKeyDown}
          />
        : <span className="Input-text__view">{view}</span>
      }
      <span className="Input-text__mark">{mark}</span>
    </div>
  );
};

export default React.memo(InputText) as typeof InputText;
