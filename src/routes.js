import Login from './components/user/Login.vue';
import Blog from './components/user/blog.vue';
import Post from './components/user/Post.vue';
import About from './components/user/About.vue';
import OwnedBlog from './components/user/OwnedBlog.vue';

import HelloWorld from './components/HelloWorld.vue';
import Register from './components/user/Register.vue';

import { store } from './store';

export const routes = [
	{ path:'',
		component: HelloWorld 
	},
	{ 
		path:'/login' ,
		component: Login,
		name:'login',
	},
	{
		path:'/signup',
		component: Register,
		name: 'signup',
	},
	{ 
		path:'/blog' ,
		component: Blog,
		name:'blog',
		beforeEnter: (to, from, next) => {
			const isAuthenticated = store.state.isAuthenticated;
			if(isAuthenticated){
				return next()
			}
			return next({name:'login'});
		}
	},
	{
		path:'/ownedpost',
		component: OwnedBlog,
		name:'ownedb',
	},
	{
		path:'/upload',
		component: Post,
		name: 'upload',
		beforeEnter: (to, from, next) => {
			const isAuthenticated = store.state.isAuthenticated;
			console.log(isAuthenticated);
			if(isAuthenticated){
				return next()
			}
			return next({name:'login'});
		}
	},
	{
		path:'/about',
		component: About,
	}
];


