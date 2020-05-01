import React from 'react';
import styled from 'styled-components';
import { globalStyles } from '../constants';
import Constants from 'expo-constants';

const BoldText = ({ title, ...props }) => {
  return <Title {...props}>{title}</Title>;
};

const Title = styled.Text`
  font-family: 'lato-black';
  opacity: ${props => (props.opacity ? props.opacity : 1)};
  font-size: ${props => (props.size ? props.size : 25)}px;
  text-align: ${props => (props.align ? props.align : 'left')};
  color: ${props => (props.color ? props.color : globalStyles.COLOR_WHITE)};
`;

export default BoldText;
