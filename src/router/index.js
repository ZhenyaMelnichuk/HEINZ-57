import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Main',
			components: {
				default: () => import('@/views/Main')
			}
		}
		// {
		// 	path: '/:pathMatch(.*)*',
		// 	name: 'PageNotFound',
		// 	components: {
		// 		menu: DesktopMenu,
		// 		default: PageNotFound
		// 	}
		// }
	],
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else if (to.path != from.path) {
			return { top: 0 };
		}
	}
});

export default router;
