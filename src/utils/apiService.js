import tokenService from "./tokenService";

const BASE_URL = "/api/";

export function postComment(post) {
  return fetch(BASE_URL + "comment", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(post),
  }).then(async (res) => {
    if (res.ok) return res.json();
    const json = await res.json();
    throw new Error(json.err);
  });
}

export function getComments() {
  return fetch(BASE_URL + "comment").then(async (res) => {
    if (res.ok) return res.json();
    const json = await res.json();
    throw new Error(json.err);
  });
}

// export default {
//   postComment,
//   getComments,
// };
