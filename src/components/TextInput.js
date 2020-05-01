import React from 'react';
import styled from 'styled-components/native';
import { globalStyles } from '../constants';

const TextInput = props => {
  return <Input {...props} />;
};

const Input = styled.TextInput`
  background: ${globalStyles.COLOR_WHITE};
  padding: 15px;
  width: 100%;
  margin-top: 20px;
  border-radius: 4px;
  align-self: center;
  font-family: 'lato-regular';
`;

export default TextInput;
