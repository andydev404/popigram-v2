export default function(url) {
  let urlRequest = url.split('/?')[0] + '?__a=1';
  if (!urlRequest.includes('https://www.instagram.com/p')) {
    return {
      url: null,
      error: true
    };
  }

  return {
    url: urlRequest,
    error: false
  };
}
