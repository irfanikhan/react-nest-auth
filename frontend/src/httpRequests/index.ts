import { httpService } from "./interceptor";

export const post = <T>(url: string, body: T) =>
  httpService({ url, method: "POST", data: body });


export const get = (url: string) => httpService({ url })