import React from "react";
import { Formik, FormikHelpers } from "formik";
import Button from "../../components/button";
import SettingField from "../../components/setting-field";
import Form from "../../components/form";
import SettingsWrapper from "../../components/settings-wrapper";
import TotalField from "../../components/total-field";
import TotalWrapper from "../../components/total-wrapper";
import Br from "../../components/br";
import { formatNumber } from "../../utils/format-number";
import { getMonthlyPay } from "../../utils/get-monthly-pay";
import { getContractTotal } from "../../utils/get-contract-total";

type PropsType = {};

interface FormikState {
  price: number;
  initial: number;
  term: number;
}

const FormLeasing: React.FC<PropsType> = (props) => {
  return (
    <Formik
      initialValues={{
        price: 3_300_000,
        initial: (420_000 / 3_300_000 * 100),
        term: 60,
      }}
      onSubmit={
        (
          values: FormikState, 
          { resetForm }: FormikHelpers<FormikState>
        ) => {
        resetForm();
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({
        values,
        isSubmitting,
        handleSubmit,
        setFieldValue,
      }) => {
        // результат работы формулы отличается от значения в фигме
        // console.log(   (3_300_000 - 420_000) * (0.05 * Math.pow((1 + 0.05), 60) / (Math.pow((1 + 0.05), 60) - 1))    );

        const { price, initial, term } = values;
        const monthlyPay = getMonthlyPay(price, initial, term);
        const contractTotal = getContractTotal(price, initial, term, monthlyPay)

        return (
          <Form onSubmit={handleSubmit}>
            <SettingsWrapper>
              <SettingField
                view={formatNumber(values.price)}
                lable="Стоимость автомобиля"
                mark="₽"
                fieldName="price"
                min={1_500_000}
                max={10_000_000}
                setFieldValue={setFieldValue}
                disabled={isSubmitting}
              />
              <SettingField
                view={`${formatNumber(
                  Math.ceil(values.price*values.initial/100)
                )} ₽`}
                lable="Первоначальный взнос"
                mark={`${Math.ceil(values.initial)}%`}
                fieldName="initial"
                min={10}
                max={60}
                setFieldValue={setFieldValue}
                disabled={isSubmitting}
              />
              <SettingField
                view={formatNumber(values.term)}
                lable="Срок лизинга"
                mark="мес."
                fieldName="term"
                min={6}
                max={120}
                setFieldValue={setFieldValue}
                disabled={isSubmitting}
              />
            </SettingsWrapper>
            <TotalWrapper>
              <TotalField
                lable="Сумма договора лизинга"
                value={`${formatNumber(contractTotal)} `}
              />
              <TotalField
                lable="Ежемесячный платеж от"
                value={`${ formatNumber(monthlyPay)} `}
              />
              <Br/>
              <Button
                disabled={isSubmitting}
                isSubmitting={isSubmitting}
                type="submit"
              >
                Оставить&nbsp;заявку
              </Button>
            </TotalWrapper>
          </Form>
        );
        
      }}
    </Formik>
  );
};

export default React.memo(FormLeasing) as typeof FormLeasing;