import fetch from "isomorphic-fetch";

export default function fetchApi(method, url, data) {
  const body =
    method.toLowerCase() === "get" ? {} : { body: JSON.stringify(data) };

  return fetch(url, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest"
    },
    credentials: "same-origin",
    ...body
  }).then(response => response.json());
}
