import React from "react";
import { Formik, Form, Field } from "formik";

function validateEmail(value) {
  let error;

  if (!value) {
    error = "Required";
  } else if (value.length > 20) {
    error = "Name should not exceed 20 characters";
  } else if (!/^[a-zA-Z]*$/g.test(value)) {
    error = "Name should contain alphabet only";
  }
  return error;
}

function validateLastname(value) {
  let error;

  if (!value) {
    error = "Required";
  } else if (value.length > 20) {
    error = "Name should not exceed 20 characters";
  } else if (!/^[a-zA-Z]*$/g.test(value)) {
    error = "Last Name should contain alphabet only";
  }

  return error;
}
function validateClass(value) {
  let error;

  if (!value) {
    error = "Required";
  } else if (!/^[a-zA-Z0-9]*$/g.test(value)) {
    error = "Class should contain alphabets and numbers only";
  }

  return error;
}
function validateYop(value) {
  let error;

  if (!value) {
    error = "Required";
  } else if (!/^[0-9]*$/g.test(value)) {
    error = "Yop should contain numbers only";
  } else if (value > 2017) {
    error = "YOP should not exceed 2017";
  }

  return error;
}
function validatePercentage(value) {
  let error;

  if (!value) {
    error = "Required";
  } else if (!/^[0-9]*$/g.test(value)) {
    error = "Yop should contain numbers only";
  }

  return error;
}

const AdmissionForm = () => {
  const onSubmit = (values) => console.log(values);

  return (
    <div className="back">
      <div className="admission">
        <h3>Admission Form</h3>
        <Formik
          initialValues={{
            lastname: "",
            name: "",
            Class: "",
            yop: "",
            percentage: "",
          }}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="name" validate={validateEmail} placeholder="Name" />

              <p className="error">
                {errors.name && touched.name && errors.name}
              </p>

              <Field
                name="lastname"
                validate={validateLastname}
                placeholder="Last Name"
              />
              <p className="error">
                {errors.lastname && touched.lastname && errors.lastname}
              </p>
              <Field
                name="Class"
                validate={validateClass}
                placeholder="Class"
              />
              <p className="error">
                {errors.Class && touched.Class && errors.Class}
              </p>
              <Field
                name="yop"
                validate={validateYop}
                placeholder="Year Of Passing"
              />
              <p className="error">{errors.yop && touched.yop && errors.yop}</p>
              <Field
                name="percentage"
                validate={validatePercentage}
                placeholder="Percentage"
              />
              <p className="error">
                {errors.percentage && touched.percentage && errors.percentage}
              </p>

              <button
                type="submit"
                disabled={
                  errors.name ||
                  errors.lastname ||
                  errors.Class ||
                  errors.yop ||
                  errors.percentage
                }
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AdmissionForm;
