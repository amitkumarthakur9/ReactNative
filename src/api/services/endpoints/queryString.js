const querystring = (data) => {
  const urlEncodedData = Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
  return urlEncodedData;
};

export default querystring;
