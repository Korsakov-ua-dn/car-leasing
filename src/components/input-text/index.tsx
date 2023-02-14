import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
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
  isActive: boolean;
};

const InputText: React.FC<PropsType> = ({
  view,
  mark,
  formikProps,
  isActive,
  ...restProps
}) => {

  /* вытащил value для того что бы инпут стал неуправляемым
     это позволит удобно редактировать данные пользователю */
  const { value, ...rest } = formikProps;

  return (
    <div className="Input-text">
      {
        isActive 
        ? <input
            type="text"
            {...rest}
            {...restProps}
            autoFocus
            defaultValue={value}
          />
        : <span className="Input-text__view">{view}</span>
      }
      <span className="Input-text__mark">{mark}</span>
    </div>
  );
};

export default React.memo(InputText) as typeof InputText;
