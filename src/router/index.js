import { useAuthStore } from "../stores/AuthStore";
import { createRouter, createWebHistory } from "vue-router";

// #######################
import PageNotFound from "../views/PageNotFound.vue";
import HomeView from "../views/HomeView.vue";
import HowView from "../views/HowView.vue";
import PricingView from "../views/PricingView.vue";
import LearnView from "../views/LearnView.vue";
import SupportView from "../views/SupportView.vue";
import AboutView from "../views/AboutView.vue";
import PodfestView from "../views/PodfestView.vue";
import BlogView from "../views/BlogView.vue";
import BlogArticle from "../views/BlogArticle.vue";
import RightsView from "../views/RightsView.vue";
import TermsView from "../views/TermsView.vue";
import UptimeView from "../views/UptimeView.vue";
import ArticlesView from "../views/ArticlesView.vue";
import ArticlesDetail from "../views/ArticlesDetail.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/:catchAll(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
  },
  {
    path: "/how-it-works",
    name: "how-it-works",
    component: HowView,
  },
  {
    path: "/pricing",
    name: "pricing",
    component: PricingView,
  },
  {
    path: "/learn",
    name: "learn",
    component: LearnView,
  },
  {
    path: "/support",
    name: "support",
    component: SupportView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/podfest",
    name: "podfest",
    component: PodfestView,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogView,
    props: true,
  },
  {
    path: "/blog/:id",
    name: "BlogArticle",
    component: BlogArticle,
    props: true,
  },
  {
    path: "/rights",
    name: "rights",
    component: RightsView,
  },
  {
    path: "/terms",
    name: "terms",
    component: TermsView,
  },
  {
    path: "/uptime",
    name: "uptime",
    component: UptimeView,
  },
  {
    path: "/articles",
    name: "articles",
    component: ArticlesView,
  },
  {
    path: "/articles/:slug",
    name: "ArticlesDetail",
    component: ArticlesDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
