import { defineStore } from "pinia";

export const useTokenStore = defineStore("auth", {
  state: () => ({
    clientSession: "",
    mystaysAccessToken: "",
  }),
  actions: {
    saveClientSession(clientSession: string) {
      this.clientSession = clientSession;
    },
    saveMystaysAccessToken(mystaysAccessToken: string) {
      this.mystaysAccessToken = mystaysAccessToken;
    },
  },
});
