import React, { useState } from "react";
import * as WebBrowser from "expo-web-browser";

export default Inappbrowser = async (url) => {
  await WebBrowser.openBrowserAsync(url);
};
