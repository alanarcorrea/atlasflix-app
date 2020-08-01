import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function RegisterCategory() {
  const inicialValues = {
    name: '',
    description: '',
    color: '',
  };

  const { handleChange, values, clearForm } = useForm(inicialValues);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const url = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categories'
      : 'http://localhost:8080/categories';

    fetch(url)
      .then(async (response) => {
        const data = await response.json();
        setCategories([
          ...data,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.name}
      </h1>

      <form onSubmit={function handleSubmit(data) {
        data.preventDefault();
        setCategories([
          ...categories,
          values,
        ]);

        clearForm();
      }}
      >

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

        {categories.length === 0 && (
          <div>
            Loading...
          </div>
        )}

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categories.map((category) => (
          <li key={`${category.name}`}>
            {category.name}
            {' '}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default RegisterCategory;
