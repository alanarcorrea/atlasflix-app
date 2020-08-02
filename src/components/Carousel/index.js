import React from 'react';
import PropTypes from 'prop-types';
import { VideoCardGroupContainer, Title } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';

function Carousel({
  ignoreFirstvideo,
  category,
}) {
  const categoryName = category.name;
  const categoryColor = category.color;
  const { videos } = category;

  return (
    <VideoCardGroupContainer>
      {categoryName && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryName}
          </Title>
        </>
      )}
      <Slider>
        {videos.map((videos, index) => {
          if (ignoreFirstvideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={videos.title}>
              <VideoCard
                videoTitle={videos.title}
                videoURL={videos.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

Carousel.defaultProps = {
  ignoreFirstvideo: 0,
};

Carousel.propTypes = {
  ignoreFirstvideo: PropTypes.number,
  category: PropTypes.objectOf.isRequired,

};

export default Carousel;
