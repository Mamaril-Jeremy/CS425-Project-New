export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18')
];

export const server_loads = [];

export const dictionary = {
		"/": [3],
		"/about": [4],
		"/change-email": [5],
		"/change-password": [6],
		"/chat": [7],
		"/connections": [8],
		"/contact": [9],
		"/create-account": [10,[2]],
		"/events": [11],
		"/guidelines": [12],
		"/home": [13],
		"/licensing": [14],
		"/privacy": [15],
		"/profile": [16],
		"/settings": [17],
		"/sign-in": [18]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';