import React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import Button from "../../components/button";
import FormField from "../../components/form-field";
import { formatNumber } from "../../utils/formatNumber";

type PropsType = {};

interface Values {
  price: number;
  initial: number;
  term: number;
}

const FormLeasing: React.FC<PropsType> = (props) => {
  return (
    <Formik
      initialValues={{
        price: 3300000,
        initial: 420000,
        term: 60,
      }}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      {({
        values,
      }) => {
        return (
          <Form>
            <FormField
              view={formatNumber(values.price)}
              lable="Стоимость автомобиля"
              mark="₽"
              onChange={() => {}}
              fieldName="price"
            />
            <FormField
              view={`${formatNumber(values.initial)} ₽`}
              lable="Первоначальный взнос"
              mark="13%"
              onChange={() => {}}
              fieldName="initial"
            />
            <FormField
              view={formatNumber(values.term)}
              lable="Срок лизинга"
              mark="мес."
              onChange={() => {}}
              fieldName="term"
            />
            <Button type="submit">Оставить заявку</Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default React.memo(FormLeasing) as typeof FormLeasing;
