import React from 'react';
import { Clipboard, Alert, Platform } from 'react-native';
import Header from '../../layout/Header';
import {
  ImageNotData,
  ImageNotDataWrapper,
  AdBannerView,
  ProgressText,
  ProgressTextWrapper
} from './styles';
import parseUrl from '../../utils/parseUrl';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import uuid from 'uuid/v4';
import { AdMobBanner, AdMobInterstitial } from 'expo-ads-admob';
import DownloadFile from '../../components/DownloadFile';
import extractFileUrl from '../../utils/extractFileUrl';
import InstagramRequest from '../../services/instagramRequest';

const admobBanner =
  Platform.OS === 'ios'
    ? 'ca-app-pub-6434583569058734/6688146442'
    : 'ca-app-pub-6434583569058734/9889024853';
const admobnterstitial =
  Platform.OS === 'ios'
    ? 'ca-app-pub-6434583569058734/2748901433'
    : 'ca-app-pub-6434583569058734/5758208157';

class Home extends React.Component {
  state = {
    fileUrl: '',
    sourceUrl: null,
    sourceType: null,
    count: 0,
    downloading: false
  };

  async componentDidMount() {
    AdMobInterstitial.setAdUnitID(admobnterstitial);
    await MediaLibrary.requestPermissionsAsync();
  }

  handlePasteButton = fileUrl => () => {
    this.fireInterstitial();
    Clipboard.getString().then(dataPasted => {
      this.setState({ fileUrl: dataPasted });
    });
  };

  handleCheckUrl = async () => {
    this.fireInterstitial();
    const { fileUrl } = this.state;
    const { url: urlParsed, error: parseError } = parseUrl(fileUrl);
    if (parseError) {
      Alert.alert('Error', 'Invalid url');
      return;
    }
    const fileData = await InstagramRequest.getFileData(urlParsed);
    const { data, error, type } = extractFileUrl(fileData);
    if (error) {
      Alert.alert('Error', 'Try again');
      return;
    }
    this.setState({ fileUrl: '', sourceUrl: data, sourceType: type });
  };

  onChangeInput = fileUrl => {
    this.setState({ fileUrl });
  };

  resetDownload = () => {
    this.fireInterstitial();
    this.setState({ sourceUrl: null, sourceType: null });
  };

  downloadFile = () => {
    this.fireInterstitial();
    const { sourceType, sourceUrl } = this.state;
    this.setState({ downloading: true });
    FileSystem.downloadAsync(
      sourceUrl,
      FileSystem.documentDirectory +
        uuid() +
        (sourceType === 'GraphVideo' ? '.mp4' : '.jpg')
    )
      .then(async ({ uri }) => {
        MediaLibrary.saveToLibraryAsync(uri).then(() => {
          Alert.alert('Downloaded succesfully', 'Visit your gallery');
        });
        this.setState({ downloading: false });
        this.setState({ sourceUrl: null, sourceType: null });
      })
      .catch(error => {
        Alert.alert('Error', 'Try again');
      });
  };

  fireInterstitial = () => {
    this.setState(
      {
        count: this.state.count + 1
      },
      async () => {
        if (this.state.count % 4 === 0) {
          await AdMobInterstitial.requestAdAsync();
          await AdMobInterstitial.showAdAsync();
        }
      }
    );
  };

  render() {
    const { fileUrl, sourceType, sourceUrl, downloading } = this.state;

    return (
      <>
        <Header
          handlePasteButton={this.handlePasteButton}
          onChangeInput={this.onChangeInput}
          handleCheckUrl={this.handleCheckUrl}
          fileUrl={fileUrl}
        />
        {downloading && (
          <ProgressTextWrapper>
            <ProgressText>Downloading file</ProgressText>
            <ProgressText>Please wait...</ProgressText>
          </ProgressTextWrapper>
        )}
        {sourceUrl && (
          <DownloadFile
            uri={sourceUrl}
            sourceType={sourceType}
            downloadFile={this.downloadFile}
            resetDownload={this.resetDownload}
          />
        )}
        {!sourceUrl && (
          <ImageNotDataWrapper>
            <ImageNotData source={require('../../../assets/attach.png')} />
          </ImageNotDataWrapper>
        )}
        <AdBannerView>
          <AdMobBanner bannerSize='banner' adUnitID={admobBanner} />
        </AdBannerView>
      </>
    );
  }
}

export default Home;
