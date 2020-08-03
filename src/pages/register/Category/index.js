import React from 'react';
import { useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriesRepository from '../../../repositories/categories';

function RegisterCategory() {
  const history = useHistory();

  const inicialValues = {
    name: '',
    description: '',
    color: '#ff0000',
  };

  const {
    values, isValidated, handleChange, clearForm,
  } = useForm(inicialValues);

  function handleSubmit(event) {
    event.preventDefault();

    if (isValidated) {
      categoriesRepository.create({
        name: values.name,
        description: values.description,
        color: values.color,
      })
        .then(() => {
          history.push('/');
        });

      clearForm();
    }
  }

  return (
    <PageDefault textButton="Novo Vídeo" routerButton="/register/video">
      <h1>
        Cadastro de Categoria:
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button type="submit" disabled={!isValidated}>
          Cadastrar
        </Button>
      </form>

    </PageDefault>
  );
}

export default RegisterCategory;
