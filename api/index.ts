import { Login } from "../src/types/auth";

export function auth(login: Login) {
  return new Promise<boolean>((res) => {
    if (
      login?.username.toLowerCase() === "test" &&
      login?.password === "123456789"
    ) {
      res(true);
    } else {
      res(false);
    }
  });
}
