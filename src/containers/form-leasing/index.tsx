import React from "react";
import { Formik, FormikHelpers } from "formik";
import Button from "../../components/button";
import FormField from "../../components/form-field";
import { formatNumber } from "../../utils/format-number";
import Form from "../../components/form";

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
      onSubmit={(values: FormikState, { setSubmitting }: FormikHelpers<FormikState>) => {
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
        setFieldValue,
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
                setFieldValue={setFieldValue}
              />
              <FormField
                view={`${formatNumber(Math.ceil(values.price*values.initial/100))} ₽`}
                lable="Первоначальный взнос"
                mark={`${Math.ceil(values.initial)}%`}
                fieldName="initial"
                min={10}
                max={60}
                setFieldValue={setFieldValue}
              />
              <FormField
                view={formatNumber(values.term)}
                lable="Срок лизинга"
                mark="мес."
                fieldName="term"
                min={6}
                max={120}
                setFieldValue={setFieldValue}
              />
              <Button isSubmitting={isSubmitting} type="submit">
                Оставить заявку
              </Button>
            </>
          </Form>
        );
      }}
    </Formik>
  );
};

export default React.memo(FormLeasing) as typeof FormLeasing;
