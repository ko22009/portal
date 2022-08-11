import { Login } from "../../types/auth";

export const AUTH_TYPE = "auth";

export const authAction = (login: Login) => ({
  type: AUTH_TYPE,
  payload: {
    login,
  },
});
