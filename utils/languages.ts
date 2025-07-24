import { LocaleTypes } from "./enums";

export interface ILanguage {
  code: string;
  value: string;
  prefix: string;
  label: string;
  flag: string;
  text: string;
  alt: string;
  [key: string]: any;
}

export const Languages: ILanguage[] = [
  {
    id: 1,
    value: "ja",
    code: "ja-JP",
    text: "日本語",
    prefix: LocaleTypes.JA_JP,
    label: "JP",
    alt: "flag-japan",
    flag: "https://flagicons.lipis.dev/flags/4x3/jp.svg",
  },
  {
    id: 2,
    value: "en",
    code: "en-US",
    text: "English",
    prefix: LocaleTypes.EN_US,
    label: "EN",
    alt: "flag-english",
    flag: "https://flagicons.lipis.dev/flags/4x3/gb.svg",
  },
  {
    id: 3,
    value: "zh",
    code: "zh-CN",
    text: "简体中文",
    prefix: LocaleTypes.ZH_CN,
    label: "CN",
    alt: "flag-china",
    flag: "https://flagicons.lipis.dev/flags/4x3/cn.svg",
  },
  {
    id: 5,
    value: "tw",
    code: "zh-TW",
    text: "繁體中文",
    prefix: LocaleTypes.ZH_TW,
    label: "TW",
    alt: "flag-taiwan",
    flag: "https://flagicons.lipis.dev/flags/4x3/tw.svg",
  },
  {
    id: 4,
    value: "ko",
    code: "ko-KR",
    text: "한국어",
    prefix: LocaleTypes.KO_KR,
    label: "KR",
    alt: "flag-korea",
    flag: "https://flagicons.lipis.dev/flags/4x3/kr.svg",
  },
];
