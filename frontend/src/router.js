import Router from "vue-router";
import Quiz from "./components/Quiz.vue";
import Main from "./components/Main.vue";
import DetailPointsView from "./components/DetailPoint.vue";
import Action from "./components/Action.vue";
import OeffiAction from "./components/OeffiAction.vue";

const router = new Router({
  routes: [
    { path: "/quiz", component: Quiz },
    { path: "/action", component: Action },
    { path: "/action/oeffi", component: OeffiAction },
    { path: "/", component: Main },
    { path: "/detailPoints", component: DetailPointsView }
  ]
});

export default router;
