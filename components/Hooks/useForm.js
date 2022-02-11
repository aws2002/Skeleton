import React from "react";
export function useForm(initialValues) {
  const [values, setValues] = React.useState(initialValues);
  return [
    values,
    (event) => {
      const { name, value, type, checked } = event.target;
      setValues({
        ...values,
        [name]: type === "checkbox" ? checked : value,
      });
      console.log(values);
    },
  ];
}
