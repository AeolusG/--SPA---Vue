export default {
  actions: {
    async fetchUsers(context) {
      let response = await fetch(
        "https://my-json-server.typicode.com/AeolusG/SPA-on-Vue/users"
      );
      let users = await response.json();

      context.commit("setUsers", users);
    },
    async getUser(context, id) {
      let response = await fetch(
        `https://my-json-server.typicode.com/AeolusG/SPA-on-Vue/users/${id}`
      );
      let user = await response.json();

      context.commit("setUser", user);
    },
  },

  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
  },

  state: {
    users: [],
    user: null,
  },

  getters: {
    users(state) {
      return state.users;
    },
    oneUser(state) {
      return state.user;
    },
  },
};
