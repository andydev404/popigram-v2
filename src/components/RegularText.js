import React from 'react';
import styled from 'styled-components';
import { globalStyles } from '../constants';

const RegularText = ({ title, ...props }) => {
  return <Title {...props}>{title}</Title>;
};

const Title = styled.Text`
  font-family: 'lato-regular';
  opacity: ${props => (props.opacity ? props.opacity : 1)};
  font-size: ${props => (props.size ? props.size : 16)}px;
  text-align: ${props => (props.align ? props.align : 'left')};
  color: ${props => (props.color ? props.color : globalStyles.COLOR_WHITE)};
`;

export default RegularText;
