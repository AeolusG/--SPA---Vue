export default {
    actions: {
        async fetchUsers(context) {
         let response = await fetch("https://my-json-server.typicode.com/AeolusG/SPA-on-Vue/users");  
         let content = await response.json();
         
         context.commit('mutateUsers', content)
         }
     },
    mutations: {
        mutateUsers(state, users) {
            state.users = users
        }
    },
    state: {
        users: []
    },
    getters: {
        allUsers(state) {
            return state.users;
        }
    }
}