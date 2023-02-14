import React, {
  useState,
  useCallback,
  MouseEvent,
  KeyboardEvent,
  ChangeEvent,
} from "react";
import { useField } from "formik";
import InputRange from "../input-range";
import InputText from "../input-text";
import { prepareValue } from "../../utils/prepare-value";
import "./style.scss";

type PropsType = {
  view: string;
  lable: string;
  mark: string;
  fieldName: any;
  min: number;
  max: number;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
};

const FormField: React.FC<PropsType> = (props) => {
  const [field] = useField(props.fieldName);
  const [isActive, setActive] = useState(false);

  const callbacks = {
    onClick: useCallback((e: MouseEvent<HTMLDivElement>) => {
      setActive(true);
    }, []),

    onBlur: useCallback(() => {
      setActive(false);
    }, []),

    onKeyDown: useCallback((e: KeyboardEvent<HTMLInputElement>) => {
      e.key === "Enter" && callbacks.onBlur();
      //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),

    onChange: useCallback((e: ChangeEvent<HTMLInputElement>) => {
      const value = prepareValue(e.target.value, props.min, props.max);
      props.setFieldValue(props.fieldName, value);
      //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  };

  const ClassN = `${isActive ? "Form-field active" : "Form-field"}`;

  return (
    <div
      className={ClassN}
      onClick={callbacks.onClick}
      onBlur={callbacks.onBlur}
    >
      <label className="Form-field__lable">{props.lable}</label>
      <div className="Form-field__inputs-wrapper">
        <InputText
          view={props.view}
          mark={props.mark}
          formikProps={field}
          isActive={isActive}
          onKeyDown={callbacks.onKeyDown}
          onChange={callbacks.onChange}
        />
        <InputRange
          value={field.value}
          min={props.min}
          max={props.max}
          formikProps={field}
        />
      </div>
    </div>
  );
};

export default React.memo(FormField) as typeof FormField;
