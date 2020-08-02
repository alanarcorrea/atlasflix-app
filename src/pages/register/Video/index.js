import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

function RegisterVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryNames = categories.map(({ name }) => name);
  const { handleChange, values } = useForm({
    title: '',
    url: '',
    category: '',
  });

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((data) => {
        setCategories(data.categories);
      });
  }, []);

  return (
    <PageDefault>

      <h1>Cadastro de vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        const choseCategory = categories.find((category) => category.name === values.category);

        videosRepository.create({
          title: values.title,
          url: values.url,
          // eslint-disable-next-line no-underscore-dangle
          categoryId: choseCategory._id,

        })
          .then(() => {
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="category"
          value={values.category}
          onChange={handleChange}
          suggestions={categoryNames}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <br />
      <br />

      <Link to="/register/category">
        Cadstrar Categoria
      </Link>
    </PageDefault>
  );
}

export default RegisterVideo;
