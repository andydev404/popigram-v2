import React, { useState } from 'react';
import styled from 'styled-components/native';
import BoldText from '../components/BoldText';
import RegularText from '../components/RegularText';
import TextInput from '../components/TextInput';
import ImageBackground from '../components/ImageBackground';
import Constants from 'expo-constants';
import Button from '../components/Button';

const Header = ({
  handlePasteButton,
  fileUrl,
  onChangeInput,
  submitUrl,
  handleCheckUrl
}) => {
  return (
    <ImageBackground>
      <Wrapper>
        <BoldText
          title='Popigram'
          align='center'
          style={{ marginTop: Constants.statusBarHeight + 20 }}
        />
        <RegularText
          title='Instagram photo & video downloader'
          align='center'
          opacity={0.7}
        />
        <TextInput
          placeholder='Paste instagram url here'
          value={fileUrl}
          autoCapitalize='none'
          clearButtonMode='always'
          returnKeyType='done'
          onChangeText={text => onChangeInput(text)}
        />
        <ButtonContainer>
          <Button title='Check url' onPress={handleCheckUrl} />
          <Button title='Paste' onPress={handlePasteButton(fileUrl)} />
        </ButtonContainer>
      </Wrapper>
    </ImageBackground>
  );
};

const Wrapper = styled.View`
  padding: 0 20px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export default Header;
