export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","images/arrow.png","images/bg-four.jpeg","images/bg-three.png","images/bg-two.png","images/bg.png","images/bgOne.png","images/profile.png","masked-marvel-font/.DS_Store","masked-marvel-font/MaskedMarvel-loW5.ttf","masked-marvel-font/MaskedMarvelBold-n0y1.ttf","masked-marvel-font/MaskedMarvelCondensed-1OLe.ttf","masked-marvel-font/MaskedMarvelExpanded-ROzo.ttf","masked-marvel-font/MaskedMarvelItalic-Bvy3.ttf","masked-marvel-font/MaskedMarvelLight-8nW2.ttf","masked-marvel-font/MaskedMarvelRotate-Yn8a.ttf","masked-marvel-font/info.txt","masked-marvel-font/misc/mask.txt"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg",".ttf":"font/ttf",".txt":"text/plain"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.21a56d22.mjs","imports":["_app/immutable/entry/start.21a56d22.mjs","_app/immutable/chunks/index.727be01f.mjs","_app/immutable/chunks/singletons.666057ed.mjs"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.15131518.mjs","imports":["_app/immutable/entry/app.15131518.mjs","_app/immutable/chunks/index.727be01f.mjs"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/[playOption]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"playOption","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
