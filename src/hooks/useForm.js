import { useState, useEffect } from 'react';

function useForm(inicialValues) {
  const [values, setValues] = useState(inicialValues);
  const [isValidated, setIsValidated] = useState(false);

  useEffect(() => {
    const errors = Object.values(values).filter((value) => !value || value === '');
    const hasErrors = !!errors.length;
    setIsValidated(!hasErrors);
  }, [values]);

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
    isValidated,
    handleChange,
    clearForm,
  };
}

export default useForm;
