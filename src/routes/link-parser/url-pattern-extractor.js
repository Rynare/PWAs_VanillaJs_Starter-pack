const UrlPatternExtractor = {
  startWith: (url) => {
    // Mencari tanda ':'
    const colonIndex = url.indexOf(":");

    if (colonIndex === -1) {
      return url;
    }
    // Potongan url pada cursor
    const firstUrl = url.substring(0, colonIndex - 1);

    return firstUrl;
  },

  getPatternParameter: (url) => {
    const urlSplits = url.split("/").filter((segment) => segment !== "");
    const parameters = {};
    urlSplits.forEach((segment, index) => {
      if (segment.startsWith(":")) {
        parameters[index] = segment.substring(1);
      }
    });
    return parameters;
  },
};

export default UrlPatternExtractor;
