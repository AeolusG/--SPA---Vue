export default {
  actions: {
    async fetchUsers(context) {
      let response = await fetch(
        "https://my-json-server.typicode.com/AeolusG/SPA-on-Vue/users"
      );
      let content = await response.json();

      context.commit("mutateUsers", content);
    },
    async getUser(ctx, id) {
        let response = await fetch(`https://my-json-server.typicode.com/AeolusG/SPA-on-Vue/users/${id}`);
        let user = await response.json();

        ctx.commit('mutateUser', user)
    },
  },
 
  mutations: {
    mutateUsers(state, users) {
      state.users = users;
    },
    mutateUser(state, user) {
        state.user = user;
    }
  },
  state: {
    users: [],
    user: null
  },
  getters: {
    allUsers(state) {
      return state.users;
    },
    oneUser(state) {
        return state.user
    }
  },
};
