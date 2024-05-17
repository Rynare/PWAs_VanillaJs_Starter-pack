const UrlParser = {
  urlSplitter: (url) => {
    const urlSplits = url.split("/").filter((segment) => segment !== "");
    const isStartWithHashtag = urlSplits[0] === "#";
    const result = isStartWithHashtag ? urlSplits.slice(1) : urlSplits;
    return result;
  },
};

export default UrlParser;
