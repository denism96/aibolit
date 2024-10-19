import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProfileView from "../views/profile/ProfileView.vue";
import AboutUsView from "../views/AboutUsView.vue";
import NewsView from "../views/NewsView.vue";
import ContactsView from "../views/ContactsView.vue";
import BlogView from "../views/BlogView.vue";
import RecordReception from "../components/make_an_appointment/RecordReception.vue";

export const router = createRouter({
  routes: [
    {
      name: "home",
      path: "/",
      component: HomeView,
    },
    {
      name: "profile",
      path: "/profile",
      component: ProfileView,
    },
    {
      name: "about",
      path: "/about",
      component: AboutUsView,
    },
    {
      name: "new",
      path: "/news",
      component: NewsView,
    },
    {
      name: "contacts",
      path: "/contacts",
      component: ContactsView,
    },
    {
      name: "blog",
      path: "/blog",
      component: BlogView,
    },
    {
      name: "record",
      path: "/record",
      component: RecordReception,
    },
  ],
  history: createWebHistory(),
});
