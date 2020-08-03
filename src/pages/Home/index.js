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
      

      {inicialValues.map((category, indice) => {
        if (indice === 0 && inicialValues[0].videos.length) {
          const video = inicialValues[0].videos[0];

          console.log('Video:', video);

          return (
            
            <p>------ {video.title}</p>
            
            // eslint-disable-next-line no-underscore-dangle
            <div key={category._id}>
              <BannerMain
                videoTitle={video.title}
                url={video.url}
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
