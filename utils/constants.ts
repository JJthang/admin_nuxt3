import { LocaleTypes } from "./enums";

export const CLIENT_SESSION_KEY = "__Auth.client_session";
export const MYSTAYS_ACCESS_TOKEN_KEY = "__Auth.mystays_access_token";
export const TRIPLA_AUTH_TOKEN_KEY = "__Auth.tripla_auth_token";
export const TRIPLA_AUTH_REFRESH_TOKEN_KEY = "__Auth.tripla_auth_refresh_token";
export const CAPILLARY_AUTH_TOKEN_KEY = "__Auth.capillary_token";
export const MYSTAYS_SESSION_KEY = "__Mh.session";
export const COUPON_CODE = "OFF5";
export const GUESTS_KEY = "guests";
export const SOMEONE_ELSE_KEY = "__Mh.someone-else-info";
export const FROM_GUEST_PAGE_KEY = "is-from-guest-page";
export const STATIC_PASSWORD = "!!Mystays@123!!";

export const BOOKING_DEFAULT_DATA = {
  NUMBER_ADULTS: 2,
  MAX_ADULTS: 8,
  MIN_ADULTS: 1,
  NUMBER_CHILDREN: 0,
  MAX_CHILDREN: 10,
  MIN_CHILDREN: 0,
  NUMBER_ROOMS: 1,
  MAX_ROOMS: 8,
};

export const DEFAULT_LOCALE = LocaleTypes.EN_US;
export const DEFAULT_PROD_LOCALE = LocaleTypes.JA_JP;
export const DEFAULT_PHONE_PREFIX = "81";
export const DEFAULT_COUNTRY_CODE = "jp";
export const DEFAULT_COUNTRY_PHONE_PREFIX = "81__jp";
export const DEFAULT_MYSTAYS_PHONE_NUMBER = "+81334343939";

export const LOCALES = [
  LocaleTypes.EN_US,
  LocaleTypes.JA_JP,
  LocaleTypes.KO_KR,
  LocaleTypes.ZH_CN,
  LocaleTypes.ZH_TW,
];

export const LOCALES_OBJ = [
  {
    code: LocaleTypes.EN_US,
    file: "en-us.json",
  },
  {
    code: LocaleTypes.JA_JP,
    file: "ja-jp.json",
  },
  {
    code: LocaleTypes.KO_KR,
    file: "ko-kr.json",
  },
  {
    code: LocaleTypes.ZH_CN,
    file: "zh-cn.json",
  },
  {
    code: LocaleTypes.ZH_TW,
    file: "zh-tw.json",
  },
];

export const PROVIDE_INJECT_KEY = {
  BOOKING_WIDGET_CONFIG: "widgetConfig",
  GUEST_DETAIL_CONTEXT: "guestContext",
  PAYMENT_CONTEXT: "paymentContext",
  KID_TIERS_CONFIG: "kidTiersConfig",
};

export const CARD_TYPES = [
  {
    label: "VISA",
    value: "visa",
    src: "../assets/svg/visa.svg",
  },
  {
    label: "Mastercard",
    value: "mastercard",
    src: "../assets/svg/mastercard.svg",
  },
  {
    label: "JCB",
    value: "jcb",
    src: "../assets/svg/jcb.svg",
  },
  {
    label: "American Express",
    value: "americanexpress",
    src: "../assets/svg/american_express.svg",
  },
  {
    label: "Diners Club",
    value: "dinersclub",
    src: "../assets/svg/dinners.svg",
  },
];
