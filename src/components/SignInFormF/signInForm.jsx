import React, { useState } from "react";
import styles from "./SignInForm.module.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { SIGN_IN_SHEMA } from "utils/validationSchemas";

const initialState = {
  email: "",
  password: "",
};

const SignInForm = (props) => {
  //submitHandler - как форма должна обрабатываться (отправить данные на сервер и т.д.)
  //всё, что должно происходить после нажатия кнопки login

  //values - все значения, которые есть в форме
  //formikBag - объект со вспомогательными функциями
  const submitHandler = (values, formikBag) => {
    console.log(values);
    console.log(formikBag);
  };
  return (
    <Formik
      initialValues={initialState}
      validationSchema={SIGN_IN_SHEMA}
      onSubmit={submitHandler}
    >
      {(formikProps) => {
        console.log(formikProps);
        return (
          <Form className={styles.container}>
            <Field name="email" placeholder="E-mail" />
            <ErrorMessage
              name="email"
              children={(msg) => <div style={{ color: "red" }}>{msg}</div>}
            />
            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="article" />
            <button type="submit">Login</button>
            <button type="reset">Reset</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;

/*
 {formikProps.errors.email ? (<div>{formikProps.errors.email}</div>) : null}
 ===
 {formikProps.errors.email && <div>{formikProps.errors.email}</div>}
 вернет последнюю true, если оба true
*/
//==============================
/*
  {formikProps.errors.email && formikProps.touched.email && (<div>{formikProps.errors.email}</div>)}
  ===
  <ErrorMessage name='email'/>
*/
