import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriesRepository from '../../repositories/categories';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [inicialValues, setInicialValues] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoriesWithVideos) => {
        setInicialValues(categoriesWithVideos.categories);
      })
      .catch((err) => err);
  }, []);

  return (
    <PageDefault paddingAll={0} textButton="Novo Vídeo" routerButton="/register/video">
      <div>PELO AMOR DE DEUS!</div>

      {inicialValues.length === 0 && (<div>Loading...</div>)}

      {inicialValues.map((category, indice) => {
        if (indice === 0 && inicialValues[0].videos.length) {
          return (
            // eslint-disable-next-line no-underscore-dangle
            <div key={category._id}>
              <BannerMain
                videoTitle={inicialValues[0].videos[0].title}
                url={inicialValues[0].videos[0].url}
              />
              <Carousel
                ignoreFirstVideo
                category={inicialValues[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            // eslint-disable-next-line no-underscore-dangle
            key={category._id}
            category={category}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;
