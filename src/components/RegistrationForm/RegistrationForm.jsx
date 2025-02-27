import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import c from "./RegistrationForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Min length 3 characters!")
    .max(50, "Max length 50 characters!")
    .required("Enter name"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <div className="formWrapper">
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="form">
          <label className={c.label}>
            Name
            <Field
              className={c.input}
              type="text"
              name="name"
              placeholder="Name"
            />
            <ErrorMessage className={c.error} name="name" component="span" />
          </label>
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
            <ErrorMessage
              className={c.error}
              name="password"
              component="span"
            />
          </label>
          <button className={c.btn} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
