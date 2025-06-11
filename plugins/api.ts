import { useCookie } from "#app";
import { ofetch as ohMyFetch } from "ofetch";

export default defineNuxtPlugin((nuxtApp) => {
  const {
    public: { BASE_URL },
  } = useRuntimeConfig();

  const session = useCookie("access_token");
  const api = ohMyFetch.create({
    baseURL: BASE_URL as string,
    onRequest({ request, options, error }) {
      if (session.value) {
        options.headers.set("Authorization", `Bearer ${session.value}`);
      }
    },
    async onResponseError({ response }) {
      if (response.status === 401) {
        await nuxtApp.runWithContext(() => navigateTo("/login"));
      }
    },
  });

  return {
    provide: {
      api,
    },
  };
});
