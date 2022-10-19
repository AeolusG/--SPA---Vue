function getUsers() {
  return fetch("https://my-json-server.typicode.com/AeolusG/SPA-on-Vue/users")
    .then((result) => result.json())
    .then((response) => response);
}
function getUser(id) {
  return fetch(
    `https://my-json-server.typicode.com/AeolusG/SPA-on-Vue/users/${id}`
  )
    .then((result) => result.json())
    .then((response) => response);
}

export { getUsers, getUser };
