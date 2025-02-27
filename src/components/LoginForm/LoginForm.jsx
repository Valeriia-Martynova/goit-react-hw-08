import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import c from "./LoginForm.module.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values))
      .unwrap()
      .then((response) => {
        toast.success(`Welcome, ${response.name}`);
        navigate("/contacts", { replace: true });
      })
      .catch(() => toast.error("Wrong email or password"));

    resetForm();
  };

  return (
    <div className="formWrapper">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="form">
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
          </label>
          <button className={c.btn} type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
