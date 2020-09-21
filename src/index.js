import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { LocaleProvider } from "antd";
import koKR from "antd/lib/locale-provider/ko_KR";
import enUS from "antd/lib/locale-provider/en_US";

import { i18nClient } from "./i18n";

const antResources = {
  ko: koKR,
  "ko-KR": koKR,
  en: enUS,
  "en-US": enUS,
};

ReactDOM.render(
  <LocaleProvider locale={antResources[i18nClient.language]}>
    <App />
  </LocaleProvider>,
  document.getElementById("root")
);
