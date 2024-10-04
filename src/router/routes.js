import User from "../components/User.vue";
import UsersList from "../components/UsersList.vue"

const routes = [
    {
      path: "/",
      name: "UsersList",
      component: UsersList,
    },
    {
      path: "/:id",
      name: "User",
      component: User,
    },
  ];

  export default routes;