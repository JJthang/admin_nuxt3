import { LocaleTypes } from "../enums";

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: LocaleTypes.EN_US,
  compilation: {
    strictMessage: false,
    escapeHtml: true,
  },
}));
