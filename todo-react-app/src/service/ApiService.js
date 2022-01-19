import { API_BASE_URL } from "../app-config";

export function call(api, method, request) {
  let options = {
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    url: API_BASE_URL + api,
    method: method,
  };
  if (request) {
    // GET method
    options.body = JSON.stringify(request);
  }
  return fetch(options.url, options).then((res) =>
    res.json().then((json) => {
      if (!res.ok) {
        // res.ok 가 true면 정상 <-> 에러 응답
        return Promise.reject(json);
      }
      return json;
    })
  );
}
