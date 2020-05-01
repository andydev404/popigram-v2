import React from 'react';
import styled from 'styled-components/native';

const Image = ({ uri }) => {
  return <ImageFile source={{ uri }} />;
};

const ImageFile = styled.Image`
  width: 300px;
  height: 300px;
  border-radius: 5px;
`;

export default Image;
