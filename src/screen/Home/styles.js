import styled from 'styled-components/native';

const ImageNotData = styled.Image`
  width: 100px;
  height: 100px;
`;

const ImageNotDataWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const AdBannerView = styled.View`
  padding: 20px;
  align-items: center;
`;

const ProgressText = styled.Text`
  text-align: center;
  font-family: 'lato-regular';
  margin-bottom: 5px;
`;

const ProgressTextWrapper = styled.View`
  margin-bottom: 15px;
`;

export {
  ProgressTextWrapper,
  ProgressText,
  ImageNotData,
  ImageNotDataWrapper,
  AdBannerView
};
