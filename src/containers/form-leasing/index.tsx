import React from "react";
import { Formik, FormikHelpers } from "formik";
import Button from "../../components/button";
import FormField from "../../components/form-field";
import { formatNumber } from "../../utils/formatNumber";
import Form from "../../components/form";

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
        price: 3_300_000,
        initial: 420_000,
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
        isSubmitting,
        handleSubmit,
      }) => {
        return (
          <Form onSubmit={handleSubmit}>
            <>
              <FormField
                view={formatNumber(values.price)}
                lable="Стоимость автомобиля"
                mark="₽"
                fieldName="price"
                min={1_500_000}
                max={10_000_000}
              />
              <FormField
                view={`${formatNumber(values.initial)} ₽`}
                lable="Первоначальный взнос"
                mark={`${Math.ceil(values.initial/values.price*100)}%`}
                fieldName="initial"
                min={values.price/100*10}
                max={values.price/100*60}
              />
              <FormField
                view={formatNumber(values.term)}
                lable="Срок лизинга"
                mark="мес."
                fieldName="term"
                min={6}
                max={120}
              />
              <Button isSubmitting={isSubmitting} type="submit">Оставить заявку</Button>
            </>
          </Form>
        );
      }}
    </Formik>
  );
};

export default React.memo(FormLeasing) as typeof FormLeasing;
