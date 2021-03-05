import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		accessToken: null,
		user: {},
		isAuthenticated: false,
	},
	mutations: {
		setAccessToken: (state, value) => {
			state.accessToken = value;
		},
		setUser: (state, value) => {
			state.user = value;
		},
		authenitcate: (state) => {
			state.isAuthenticated = true;
		}
	},
	// getters: {
	// 	isAuthenticated: state => {
	// 		return state.accessToken != null;
	// 	}
	// },
	actions: {
		login: ({commit}, credentials, state) => {
			return fetch('http://127.0.0.1:8000/api/login',{
					method: 'POST',
					body: JSON.stringify(credentials),
					headers: {
						'Content-Type': 'application/json',
					},
			})
					.then(response => response.json())
					.then((data) => {
							//const { accessToken } = data.access_token;
							commit('setAccessToken', data.access_token);
							commit('setUser',data.user);
							commit('authenitcate');
							console.log(data.user.name);
							console.log(state.accessToken);
					})			
					.catch(err => console.log(err));		
		}
	},
	plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => Cookies.get(key),
        // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
        setItem: (key, value) =>
          Cookies.set(key, value, { expires: 3, secure: true }),
        removeItem: (key) => Cookies.remove(key),
      },
    }),
  ],
})

