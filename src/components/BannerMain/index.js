import React from 'react';
import PropTypes from 'prop-types';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import { BannerMainContainer, ContentAreaContainer, WatchButton } from './styles';

function BannerMain(props) {
  const { videoTitle, url } = props;

  const youTubeID = getYouTubeId(url);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

  function getYouTubeId(youtubeURL) {
    return youtubeURL
      .replace(
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
        '$7',
      );
  }

  console.log('URL:', bgUrl);

  return (
    <BannerMainContainer backgroundImage={bgUrl}>

      <p>
        -------------
        {bgUrl}
      </p>

      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            {videoTitle}
          </ContentAreaContainer.Title>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <VideoIframeResponsive
            youtubeID={youTubeID}
          />
          <WatchButton>
            Assistir
          </WatchButton>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}

BannerMain.defaultProps = {
  videoTitle: '',
  url: '',
};

BannerMain.propTypes = {
  videoTitle: PropTypes.string,
  url: PropTypes.string,
};

export default BannerMain;
