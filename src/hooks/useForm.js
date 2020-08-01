import { useState } from 'react';

function useForm(inicialValues) {
  const [values, setValues] = useState(inicialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(data) {
    setValue(
      data.target.getAttribute('name'),
      data.target.value,
    );
  }

  function clearForm() {
    setValue(inicialValues);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
