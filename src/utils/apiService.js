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

export function editComment(id, text){
  console.log("id", id)
  console.log("text", text)
  fetch(`${BASE_URL}comment/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      text
    })
  }).then(res => res.json())
  .then(data => console.log(data))
}

export function deleteComment(id){
  fetch(`${BASE_URL}comment/${id}`, {
    method: "DELETE"
  }).then(res => res.json())
  .then(data => console.log(data))
}

// export default {
//   postComment,
//   getComments,
// };
