export default {
  actions: {
    async fetchUsers(context) {
      let response = await fetch(
        "https://github.com/AeolusG/SPA-on-Vue/blob/5d69d40c2460f3f45df54e698e18728cd7a1c04a/db.json"
      );
      let content = await response.json();

      context.commit("mutateUsers", content);
    },
    async getUser(ctx, id) {
        let response = await fetch(`https://github.com/AeolusG/SPA-on-Vue/blob/5d69d40c2460f3f45df54e698e18728cd7a1c04a/db.json/${id}`);
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
