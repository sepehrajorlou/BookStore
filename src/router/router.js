import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const MainComponent = () => import("@/components/MainComponent.vue");
const MainPAGE = () => import("@/views/main.vue");
const BookSPA = () => import("@/views/book.vue");
const NotFind = () => import("@/components/NotFind.vue")
const router = new VueRouter({
	mode: "history",
	routes: [
		{
			path: "/",
			component: MainComponent,
			redirect: "/main",
			children: [
				{
					path: "/main",
					component: MainPAGE,
					meta: { title: "main" }
				},
				{
					path: "/book/name-:id",
					component: BookSPA, 
					meta:{title:"book"}
				}
			]

		},
		{
			path: "/*",
			component: NotFind,
			meta:{
				title:"404"
			}
		}
	],

})
const DEFAULT_TITLE = 'Bookstore';
router.afterEach((to) => {
	Vue.nextTick(() => {
		document.title = to.meta.title || DEFAULT_TITLE;
	});
});
export default router;