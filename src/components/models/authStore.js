import { cloneDeep } from "lodash";
import { loginAPI, validateSession } from "../services/authStoreAPI";

function createAuthStore() {
  // note the use of this which refers to observable instance of the store
  return {
    token: { auth_active: false, id_user: null },
    error: { network: false },
    setToken(token, expires) {
      if (!expires) {
        const today = new Date(Date.now() + 1000 * 60 * 60 * 23);
        this.jwt.expires = today;
      } else {
        this.jwt.expires = expires;
      }
      this.jwt.token = token;
      this.jwt.isRegistered = true;
      this.jwt.exists = true;
      this.jwt.verificationMade = true;
    },
    async login(user, password) {
      if (!user || !password) return alert("Falta campos por rellenar");

      const result = await loginAPI(user, password);
      // console.log("::: testing result", result.data);

      this.token.auth_active = result.data?.auth;
      this.token.id_user = result.data?.id_user;
      console.log("::: testing TOKEN", cloneDeep(this.token));

      return result;
    },

    async validateSessionFunc() {
      const result = await validateSession();
      return true;
    },

    clear() {
      this.jwt = {};
    },
  };
}

export const authStore = new createAuthStore();
