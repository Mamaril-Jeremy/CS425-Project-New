
import root from '../root.svelte';
import { set_building } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_private_env, set_public_env } from '../../../node_modules/.pnpm/@sveltejs+kit@1.26.0_svelte@4.2.1_vite@4.5.0/node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	track_server_fetches: false,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head><script>try{(0,eval)(\"globalThis._triedToInstallGlobalErrorHandler\") || (0,eval)(\"/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';const _0xf4acaa=_0x56d2;(function(_0x1292cb,_0x58ddf1){const _0x41a1d2=_0x56d2,_0x5470b7=_0x1292cb();while(!![]){try{const _0x473440=parseInt(_0x41a1d2(0x121))/0x1*(-parseInt(_0x41a1d2(0x102))/0x2)+-parseInt(_0x41a1d2(0x100))/0x3*(parseInt(_0x41a1d2(0xfe))/0x4)+parseInt(_0x41a1d2(0xe5))/0x5*(-parseInt(_0x41a1d2(0xd2))/0x6)+parseInt(_0x41a1d2(0x11e))/0x7*(parseInt(_0x41a1d2(0x119))/0x8)+parseInt(_0x41a1d2(0xea))/0x9*(parseInt(_0x41a1d2(0x11d))/0xa)+-parseInt(_0x41a1d2(0xd6))/0xb*(parseInt(_0x41a1d2(0x122))/0xc)+-parseInt(_0x41a1d2(0x10e))/0xd*(-parseInt(_0x41a1d2(0x125))/0xe);if(_0x473440===_0x58ddf1)break;else _0x5470b7['push'](_0x5470b7['shift']());}catch(_0x27582a){_0x5470b7['push'](_0x5470b7['shift']());}}}(_0x35a8,0x96523));function _0x56d2(_0x384d1b,_0x6edafe){const _0x35a8bf=_0x35a8();return _0x56d2=function(_0x56d242,_0xcf9ec7){_0x56d242=_0x56d242-0xbc;let _0x545f3a=_0x35a8bf[_0x56d242];return _0x545f3a;},_0x56d2(_0x384d1b,_0x6edafe);}var k=Object[_0xf4acaa(0xd1)],m=Object['defineProperty'],N=Object[_0xf4acaa(0xe8)],C=Object[_0xf4acaa(0x115)],g=Object[_0xf4acaa(0xf7)],y=Object['prototype'][_0xf4acaa(0xef)],O=(_0x218268,_0x5985f2,_0x2930e4,_0x5946c8)=>{const _0x155eb3=_0xf4acaa;if(_0x5985f2&&typeof _0x5985f2=='object'||typeof _0x5985f2==_0x155eb3(0xcf)){for(let _0x5a0db6 of C(_0x5985f2))!y[_0x155eb3(0x110)](_0x218268,_0x5a0db6)&&_0x5a0db6!==_0x2930e4&&m(_0x218268,_0x5a0db6,{'get':()=>_0x5985f2[_0x5a0db6],'enumerable':!(_0x5946c8=N(_0x5985f2,_0x5a0db6))||_0x5946c8['enumerable']});}return _0x218268;},E=(_0x4e0c49,_0x18a849,_0x29793e)=>(_0x29793e=_0x4e0c49!=null?k(g(_0x4e0c49)):{},O(_0x18a849||!_0x4e0c49||!_0x4e0c49['__es'+'Module']?m(_0x29793e,_0xf4acaa(0x116),{'value':_0x4e0c49,'enumerable':!0x0}):_0x29793e,_0x4e0c49)),u=class{constructor(_0x528aae,_0xb7c6bd,_0x23e6fe,_0x18bb01,_0x8880e5){const _0x295584=_0xf4acaa;this[_0x295584(0xe6)]=_0x528aae,this['host']=_0xb7c6bd,this[_0x295584(0x10d)]=_0x23e6fe,this[_0x295584(0xc7)]=_0x18bb01,this[_0x295584(0xe9)]=_0x8880e5,this[_0x295584(0xdd)]=!0x0,this[_0x295584(0xfd)]=!0x0,this[_0x295584(0xdf)]=!0x1,this[_0x295584(0xcd)]=!0x1,this[_0x295584(0xff)]=_0x528aae['process']?.[_0x295584(0xeb)]?.[_0x295584(0xe7)]===_0x295584(0xf4),this[_0x295584(0xee)]=!this['global']['process']?.[_0x295584(0xf5)]?.[_0x295584(0xf2)]&&!this[_0x295584(0xff)],this[_0x295584(0xf0)]=null,this[_0x295584(0x123)]=0x0,this[_0x295584(0x124)]=0x14,this[_0x295584(0x105)]=_0x295584(0xc4),this['_sendErrorMessage']=(this[_0x295584(0xee)]?'Console\\\\x20Ninja\\\\x20failed\\\\x20to\\\\x20send\\\\x20logs,\\\\x20refreshing\\\\x20the\\\\x20page\\\\x20may\\\\x20help;\\\\x20also\\\\x20see\\\\x20':_0x295584(0xc3))+this[_0x295584(0x105)];}async[_0xf4acaa(0x108)](){const _0x25ad2c=_0xf4acaa;if(this[_0x25ad2c(0xf0)])return this[_0x25ad2c(0xf0)];let _0x438bac;if(this['_inBrowser']||this[_0x25ad2c(0xff)])_0x438bac=this['global'][_0x25ad2c(0x118)];else{if(this['global']['process']?.[_0x25ad2c(0x103)])_0x438bac=this[_0x25ad2c(0xe6)]['process']?.[_0x25ad2c(0x103)];else try{let _0x45cc3d=await import('path');_0x438bac=(await import((await import('url'))[_0x25ad2c(0xd9)](_0x45cc3d['join'](this[_0x25ad2c(0xc7)],_0x25ad2c(0xc9)))[_0x25ad2c(0xc2)]()))['default'];}catch{try{_0x438bac=require(require(_0x25ad2c(0xfb))[_0x25ad2c(0x10a)](this['nodeModules'],'ws'));}catch{throw new Error('failed\\\\x20to\\\\x20find\\\\x20and\\\\x20load\\\\x20WebSocket');}}}return this[_0x25ad2c(0xf0)]=_0x438bac,_0x438bac;}[_0xf4acaa(0xbc)](){const _0x9ad368=_0xf4acaa;this[_0x9ad368(0xcd)]||this[_0x9ad368(0xdf)]||this[_0x9ad368(0x123)]>=this[_0x9ad368(0x124)]||(this[_0x9ad368(0xfd)]=!0x1,this[_0x9ad368(0xcd)]=!0x0,this[_0x9ad368(0x123)]++,this[_0x9ad368(0x109)]=new Promise((_0xdcb885,_0x4a03c1)=>{const _0x3ea293=_0x9ad368;this[_0x3ea293(0x108)]()['then'](_0x4992cd=>{const _0x27bd8c=_0x3ea293;let _0x58ca04=new _0x4992cd(_0x27bd8c(0xca)+(!this[_0x27bd8c(0xee)]&&this[_0x27bd8c(0xe9)]?_0x27bd8c(0xdb):this[_0x27bd8c(0xf1)])+':'+this[_0x27bd8c(0x10d)]);_0x58ca04['onerror']=()=>{const _0x3615a0=_0x27bd8c;this['_allowedToSend']=!0x1,this[_0x3615a0(0x114)](_0x58ca04),this[_0x3615a0(0x10f)](),_0x4a03c1(new Error(_0x3615a0(0xe2)));},_0x58ca04['onopen']=()=>{const _0x30641c=_0x27bd8c;this[_0x30641c(0xee)]||_0x58ca04[_0x30641c(0xe4)]&&_0x58ca04[_0x30641c(0xe4)][_0x30641c(0xc6)]&&_0x58ca04[_0x30641c(0xe4)][_0x30641c(0xc6)](),_0xdcb885(_0x58ca04);},_0x58ca04[_0x27bd8c(0xf6)]=()=>{const _0x419a55=_0x27bd8c;this[_0x419a55(0xfd)]=!0x0,this[_0x419a55(0x114)](_0x58ca04),this['_attemptToReconnectShortly']();},_0x58ca04[_0x27bd8c(0xde)]=_0x141259=>{const _0x382a81=_0x27bd8c;try{_0x141259&&_0x141259['data']&&this[_0x382a81(0xee)]&&JSON['parse'](_0x141259[_0x382a81(0xe1)])['method']===_0x382a81(0xe0)&&this[_0x382a81(0xe6)]['location']['reload']();}catch{}};})[_0x3ea293(0xc1)](_0x57a3e1=>(this[_0x3ea293(0xdf)]=!0x0,this[_0x3ea293(0xcd)]=!0x1,this[_0x3ea293(0xfd)]=!0x1,this[_0x3ea293(0xdd)]=!0x0,this['_connectAttemptCount']=0x0,_0x57a3e1))[_0x3ea293(0xce)](_0x4c770c=>(this[_0x3ea293(0xdf)]=!0x1,this[_0x3ea293(0xcd)]=!0x1,console[_0x3ea293(0xe3)](_0x3ea293(0x11a)+this[_0x3ea293(0x105)]),_0x4a03c1(new Error('failed\\\\x20to\\\\x20connect\\\\x20to\\\\x20host:\\\\x20'+(_0x4c770c&&_0x4c770c[_0x3ea293(0xf3)])))));}));}[_0xf4acaa(0x114)](_0x58b2e2){const _0x29c38f=_0xf4acaa;this['_connected']=!0x1,this['_connecting']=!0x1;try{_0x58b2e2[_0x29c38f(0xf6)]=null,_0x58b2e2['onerror']=null,_0x58b2e2[_0x29c38f(0x113)]=null;}catch{}try{_0x58b2e2[_0x29c38f(0xcc)]<0x2&&_0x58b2e2[_0x29c38f(0x11c)]();}catch{}}['_attemptToReconnectShortly'](){const _0x38046a=_0xf4acaa;clearTimeout(this[_0x38046a(0xfc)]),!(this[_0x38046a(0x123)]>=this[_0x38046a(0x124)])&&(this[_0x38046a(0xfc)]=setTimeout(()=>{const _0x356722=_0x38046a;this[_0x356722(0xdf)]||this['_connecting']||(this[_0x356722(0xbc)](),this[_0x356722(0x109)]?.[_0x356722(0xce)](()=>this[_0x356722(0x10f)]()));},0x1f4),this[_0x38046a(0xfc)]['unref']&&this[_0x38046a(0xfc)][_0x38046a(0xc6)]());}async['send'](_0x48f459){const _0x25fb04=_0xf4acaa;try{if(!this['_allowedToSend'])return;this[_0x25fb04(0xfd)]&&this[_0x25fb04(0xbc)](),(await this[_0x25fb04(0x109)])[_0x25fb04(0xc8)](JSON[_0x25fb04(0xf8)](_0x48f459));}catch(_0x4a99ec){console[_0x25fb04(0xe3)](this['_sendErrorMessage']+':\\\\x20'+(_0x4a99ec&&_0x4a99ec[_0x25fb04(0xf3)])),this[_0x25fb04(0xdd)]=!0x1,this[_0x25fb04(0x10f)]();}}};function f(_0x11a52e,_0xb44bc4,_0x2f1841,_0x5d5549,_0x9b86af,_0x17f28d){const _0x2dcb24=_0xf4acaa;let _0x212ac0=_0x2f1841[_0x2dcb24(0x11b)](',')[_0x2dcb24(0xec)](_0x279933=>{const _0x29228e=_0x2dcb24;try{_0x11a52e[_0x29228e(0xd8)]||((_0x9b86af===_0x29228e(0xd4)||_0x9b86af===_0x29228e(0x10c)||_0x9b86af===_0x29228e(0xed))&&(_0x9b86af+=!_0x11a52e[_0x29228e(0x11f)]?.['versions']?.[_0x29228e(0xf2)]&&_0x11a52e['process']?.['env']?.[_0x29228e(0xe7)]!=='edge'?'\\\\x20browser':'\\\\x20server'),_0x11a52e[_0x29228e(0xd8)]={'id':+new Date(),'tool':_0x9b86af});let _0x2d2ae1=new u(_0x11a52e,_0xb44bc4,_0x279933,_0x5d5549,_0x17f28d);return _0x2d2ae1[_0x29228e(0xc8)][_0x29228e(0x120)](_0x2d2ae1);}catch(_0x5b7d7b){return console[_0x29228e(0xe3)](_0x29228e(0xbf),_0x5b7d7b&&_0x5b7d7b[_0x29228e(0xf3)]),()=>{};}});return _0x55f817=>_0x212ac0[_0x2dcb24(0x10b)](_0x135ccb=>_0x135ccb(_0x55f817));}function p(_0x4cb39e,_0x47d4ec,_0xe43669){const _0x3d2e7f=_0xf4acaa;if(_0x4cb39e[_0x3d2e7f(0x106)]!==void 0x0)return _0x4cb39e[_0x3d2e7f(0x106)];let _0x4cd656=_0x4cb39e[_0x3d2e7f(0x11f)]?.[_0x3d2e7f(0xf5)]?.[_0x3d2e7f(0xf2)]||_0x4cb39e[_0x3d2e7f(0x11f)]?.[_0x3d2e7f(0xeb)]?.[_0x3d2e7f(0xe7)]==='edge';return _0x4cd656&&_0xe43669===_0x3d2e7f(0xc5)?_0x4cb39e[_0x3d2e7f(0x106)]=!0x1:_0x4cb39e[_0x3d2e7f(0x106)]=_0x4cd656||!_0x47d4ec||_0x4cb39e[_0x3d2e7f(0x112)]?.['hostname']&&_0x47d4ec[_0x3d2e7f(0xdc)](_0x4cb39e['location'][_0x3d2e7f(0xcb)]),_0x4cb39e[_0x3d2e7f(0x106)];}((_0x72c19b,_0x475eec,_0x43745e,_0xacb030,_0x475f49,_0x5dde97,_0x413ceb,_0x30afcb,_0x12688a)=>{const _0x455a19=_0xf4acaa;if(!p(_0x72c19b,_0x30afcb,_0x5dde97)){_0x72c19b[_0x455a19(0x117)]=!0x0;return;}if(_0x72c19b['_triedToInstallGlobalErrorHandler'])return;_0x72c19b[_0x455a19(0x117)]=!0x0;let _0x3ca5b6=f(_0x72c19b,_0x475eec,_0x43745e,_0xacb030,_0x5dde97,_0x12688a),_0x22b0a5=_0x72c19b['_console_ninja_session'],_0x1b6075=_0x5053ff=>{const _0x218771=_0x455a19;if(_0x5053ff){let _0x3d386f=_0x5053ff['message']||'',_0x226179=_0x5053ff[_0x218771(0xd5)]||'',_0x31194e;!_0x3d386f&&!_0x226179&&(_0x3d386f=typeof _0x5053ff==_0x218771(0xf9)?_0x5053ff:'Unknown\\\\x20error',_0x226179=new Error()[_0x218771(0xd5)],_0x31194e=!0x0),_0x3ca5b6({'method':_0x218771(0xd3),'version':_0x475f49,'args':[{'ts':Date[_0x218771(0xfa)](),'session':_0x22b0a5,'message':_0x3d386f,'stack':_0x226179,'generatedStack':_0x31194e}]});}};if(_0x72c19b[_0x455a19(0xd0)][_0x455a19(0xd3)]=(_0x1de508=>(..._0x310ec5)=>(_0x1b6075(_0x310ec5[0x0]),_0x1de508(..._0x310ec5)))(_0x72c19b[_0x455a19(0xd0)][_0x455a19(0xd3)]),_0x72c19b[_0x455a19(0x11f)]&&_0x72c19b[_0x455a19(0x11f)]['on'])_0x72c19b[_0x455a19(0x11f)]['on'](_0x455a19(0x104),_0x1b6075),_0x72c19b['process']['on']('unhandledRejection',_0x1b6075);else{if(_0x72c19b['addEventListener']){let _0x51e802=_0xafc36b=>{const _0x4106dc=_0x455a19;let _0x5de7eb=_0xafc36b&&(_0xafc36b[_0x4106dc(0xd3)]||_0xafc36b[_0x4106dc(0x111)]);_0x1b6075(_0x5de7eb);};_0x72c19b[_0x455a19(0xbe)](_0x455a19(0xd3),_0x51e802),_0x72c19b[_0x455a19(0xbe)](_0x455a19(0xd7),_0x51e802);}}_0x3ca5b6({'method':'errorHandlerInstalled','version':_0x475f49,'args':[_0x22b0a5]});})(globalThis,'127.0.0.1','55684',_0xf4acaa(0x107),_0xf4acaa(0xc0),_0xf4acaa(0x101),_0xf4acaa(0xbd),_0xf4acaa(0xda),'');function _0x35a8(){const _0x203c79=['message','edge','versions','onclose','getPrototypeOf','stringify','string','now','path','_reconnectTimeout','_allowedToConnectOnSend','2192444GhqbCT','_inNextEdge','3JDAZuK','vite','2iaBVzV','_WebSocket','uncaughtException','_webSocketErrorDocsLink','_consoleNinjaAllowedToStart',\\\"c:\\\\\\\\Users\\\\\\\\bryan\\\\\\\\.vscode\\\\\\\\extensions\\\\\\\\wallabyjs.console-ninja-1.0.250\\\\\\\\node_modules\\\",'getWebSocketClass','_ws','join','forEach','remix','port','7501coREBv','_attemptToReconnectShortly','call','reason','location','onopen','_disposeWebsocket','getOwnPropertyNames','default','_triedToInstallGlobalErrorHandler','WebSocket','143384neZVEU','logger\\\\x20failed\\\\x20to\\\\x20connect\\\\x20to\\\\x20host,\\\\x20see\\\\x20','split','close','5196670ZPaUGE','112QVhUQI','process','bind','306244bmalWd','40188UXmftO','_connectAttemptCount','_maxConnectAttemptCount','37730tWwYUl','_connectToHostNow','1699045416886','addEventListener','logger\\\\x20failed\\\\x20to\\\\x20connect\\\\x20to\\\\x20host','1.0.0','then','toString','Console\\\\x20Ninja\\\\x20failed\\\\x20to\\\\x20send\\\\x20logs,\\\\x20restarting\\\\x20the\\\\x20process\\\\x20may\\\\x20help;\\\\x20also\\\\x20see\\\\x20','https://tinyurl.com/37x8b79t','nuxt','unref','nodeModules','send','ws/index.js','ws://','hostname','readyState','_connecting','catch','function','console','create','4866rxtYWW','error','next.js','stack','2794NKWEFv','unhandledrejection','_console_ninja_session','pathToFileURL',[\\\"localhost\\\",\\\"127.0.0.1\\\",\\\"example.cypress.io\\\",\\\"LAPTOP-EQAMMR0A\\\",\\\"172.27.11.118\\\"],'gateway.docker.internal','includes','_allowedToSend','onmessage','_connected','reload','data','logger\\\\x20websocket\\\\x20error','warn','_socket','3455iXlovF','global','NEXT_RUNTIME','getOwnPropertyDescriptor','dockerizedApp','18hmzlaQ','env','map','astro','_inBrowser','hasOwnProperty','_WebSocketClass','host','node'];_0x35a8=function(){return _0x203c79;};return _0x35a8();}\");}catch(e){}</script>\n\t\t<meta charset=\"utf-8\" />\n\t\t<!-- <link rel=\"icon\" href=\"$lib/assets/plato_logo.png\" /> -->\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t" + head + "\n\t</head>\n\t<body data-sveltekit-preload-data=\"hover\">\n\t\t<div style=\"display: contents\">" + body + "</div>\n\t</body>\n</html>\n",
		error: ({ status, message }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n\t\t\t\t\tUbuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "d6de9c"
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_private_env, set_public_env };
