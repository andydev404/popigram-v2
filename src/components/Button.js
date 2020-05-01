import React from 'react';
import styled from 'styled-components/native';
import { globalStyles } from '../constants';

const Button = ({ title, ...props }) => {
  return (
    <Wrapper {...props}>
      <ButtonText>{title}</ButtonText>
    </Wrapper>
  );
};

const ButtonText = styled.Text`
  color: ${globalStyles.COLOR_WHITE};
  font-family: 'lato-black';
  text-align: center;
  font-size: 16px;
  text-transform: uppercase;
`;

const Wrapper = styled.TouchableOpacity`
  background: ${globalStyles.LIGHT_ROSE};
  padding: 15px;
  margin-top: 15px;
  width: 140px;
  align-self: center;
  border-radius: 4px;
`;

export default Button;
