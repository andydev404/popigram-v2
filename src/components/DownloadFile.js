import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { globalStyles } from '../constants';
import Button from '../components/Button';
import { Ionicons } from '@expo/vector-icons';
import Image from './Image';
import Video from './Video';

const DownloadFile = ({ uri, resetDownload, sourceType, downloadFile }) => {
  return (
    <Container>
      <TouchableOpacity style={styles.removeButton} onPress={resetDownload}>
        <Ionicons name='md-trash' size={30} color={globalStyles.COLOR_WHITE} />
      </TouchableOpacity>
      {sourceType === 'GraphImage' && <Image uri={uri} />}
      {sourceType === 'GraphVideo' && <Video uri={uri} />}
      <Button title='Download' onPress={downloadFile} />
    </Container>
  );
};

const styles = StyleSheet.create({
  removeButton: {
    position: 'absolute',
    right: -10,
    top: -10,
    zIndex: 9,
    backgroundColor: globalStyles.LIGHT_ROSE,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30
  }
});

const Container = styled.View`
  align-items: center;
  width: 300px;
  align-self: center;
`;

export default DownloadFile;
