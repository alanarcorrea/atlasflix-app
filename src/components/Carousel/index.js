import React from 'react';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';

function Carousel({
  ignoreFirstvideo,
  category,
}) {
  const categoryTitle = category.name;
  const categoryColor = category.color;
  const categoryExtraLink = category.link_extra;
  const { videos } = category;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink
            && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
            )}
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

export default Carousel;
