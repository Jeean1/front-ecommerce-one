import { loginAPI } from "../services/authStoreAPI";

function createAuthStore() {
  // note the use of this which refers to observable instance of the store
  return {
    user: { visited: false },
    jwt: { isRegistered: false, verificationMade: false, exists: false },
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

      const today = new Date(Date.now() + 1000 * 60 * 60 * 23);
      if (result && !result.response && !result.notFoundError) {
        this.jwt.token = result.data.accessToken;
        this.jwt.expires = today;
        this.jwt.isRegistered = true;
        this.jwt.exists = true;
        this.jwt.verificationMade = true;
        this.error.network = false;
        return result;
      }

      return false;
    },

    clear() {
      this.jwt = {};
    },
  };
}

export const authStore = new createAuthStore();
