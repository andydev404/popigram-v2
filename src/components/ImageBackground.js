import React from 'react';
import { ImageBackground } from 'react-native';

const ImageBackgroundComp = ({ children }) => {
  return (
    <ImageBackground
      source={require('../../assets/headerBg.jpg')}
      style={{ width: '100%', height: 400 }}
    >
      {children}
    </ImageBackground>
  );
};

export default ImageBackgroundComp;
