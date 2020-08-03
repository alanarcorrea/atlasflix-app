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
      {inicialValues.length === 0 && (<div>Loading...</div>)}

      {inicialValues.map((category, index) => {
        const { videos } = inicialValues[0];

        // eslint-disable-next-line no-underscore-dangle
        const categoryId = category._id;

        if (index === 0 && videos.length) {
          return (
            <div key={categoryId}>
              <BannerMain
                videoTitle={videos[0].title}
                url={videos[0].url}
              />
              <Carousel
                ignoreFirstVideo
                category={inicialValues[0]}
              />
            </div>
          )
        }

        return (
          <Carousel
            key={categoryId}
            category={category}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;
