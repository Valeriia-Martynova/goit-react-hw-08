import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import c from "./LoginForm.module.css";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={c.form}>
        <label className={c.label}>
          Email
          <Field
            className={c.input}
            type="email"
            name="email"
            placeholder="Email"
          />
          <ErrorMessage className={c.error} name="email" component="span" />
        </label>
        <label className={c.label}>
          Password
          <Field
            className={c.input}
            type="password"
            name="password"
            placeholder="Password"
          />
          <ErrorMessage className={c.error} name="password" component="span" />
        </label>
        <button className={c.btn} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
