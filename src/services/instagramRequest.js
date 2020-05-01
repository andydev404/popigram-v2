export default class InstagramRequest {
  static getFileData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(requstData => {
          resolve(requstData.graphql.shortcode_media);
        })
        .catch(err => reject('ERROR!'));
    });
  }
}
