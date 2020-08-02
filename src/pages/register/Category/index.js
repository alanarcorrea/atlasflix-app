import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriesRepository from '../../../repositories/categories';

function RegisterCategory() {
  const inicialValues = {
    name: '',
    description: '',
    color: '',
  };

  const { handleChange, values, clearForm } = useForm(inicialValues);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((data) => {
        setCategories(data.categories);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
      </h1>

      <form onSubmit={function handleSubmit(data) {
        data.preventDefault();

        categoriesRepository.create({
          name: values.name,
          description: values.description,
          color: values.color,
        })
          .then(() => {
            setCategories([
              ...categories,
              values,
            ]);
          });

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
