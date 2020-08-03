import React from 'react';
import PropTypes from 'prop-types';
import { VideoCardGroupContainer, Title } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';

function Carousel({
  ignoreFirstvideo,
  category,
}) {
  return (
    <VideoCardGroupContainer>
      {category.name && (
        <>
          <Title style={{ backgroundColor: category.color || 'red' }}>
            {category.name}
          </Title>
        </>
      )}
      <Slider>
        {category.videos.map((video, index) => {
          if (ignoreFirstvideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.title}>
              <VideoCard
                videoTitle={video.title}
                videoURL={video.url}
                categoryColor={category.color}
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
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    videos: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default Carousel;
