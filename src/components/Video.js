import React from 'react';
import { Video } from 'expo-av';

const VideoComp = ({ uri }) => {
  return (
    <Video
      source={{
        uri
      }}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode='contain'
      useNativeControls
      shouldPlay
      isLooping
      style={{ width: 300, height: 300 }}
    />
  );
};

export default VideoComp;
