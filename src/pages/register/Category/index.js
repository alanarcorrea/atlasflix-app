import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriesRepository from '../../../repositories/categories';
import { Title } from '../../../components/Carousel/styles';

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
    <PageDefault textButton="Novo Vídeo" routerButton="/register/video">
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
          <Title style={{ backgroundColor: category.color || 'red', fontSize: '15px', margin: '10px' }}>
            {category.name}
          </Title>
        ))}
      </ul>

    </PageDefault>
  );
}

export default RegisterCategory;
