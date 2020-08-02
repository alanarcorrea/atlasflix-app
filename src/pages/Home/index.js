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
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>

      {inicialValues.length === 0 && (<div>Loading...</div>)}

      {inicialValues.map((category, indice) => {
        if (indice === 0) {
          return (
            <div key={category._id}>
              <BannerMain
                videoTitle={inicialValues[0].videos[0].title}
                url={inicialValues[0].videos[0].url}
                // videoDescription={inicialValues[0].videos[0].description}
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
            key={category._id}
            category={category}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;
