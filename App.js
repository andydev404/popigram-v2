import React from 'react';
import { StatusBar, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import * as Font from 'expo-font';
import { globalStyles } from './src/constants';
import Home from './src/screen/Home';

class App extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      'lato-black': require('./assets/fonts/Lato-Black.ttf'),
      'lato-regular': require('./assets/fonts/Lato-Regular.ttf')
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { fontLoaded } = this.state;

    if (!fontLoaded) return null;
    return (
      <Container>
        <ScrollView
          keyboardShouldPersistTaps='never'
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <StatusBar barStyle='light-content' />
          <Home />
        </ScrollView>
      </Container>
    );
  }
}

export default App;

const Container = styled.View`
  flex: 1;
  background: ${globalStyles.LIGHT_BG};
`;
