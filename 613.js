(self.webpackChunk_micro_snake_game=self.webpackChunk_micro_snake_game||[]).push([[613],{1613:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=a(n(3691)),c=n(8316),u=o(n(7332)),s=document.getElementById("root");(0,c.render)(l.createElement("main",null,l.createElement("section",null,l.createElement(u.default,null))),s)},4598:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=n(4654),c=n(3713),u=a(n(3691)),s=n(903),f=o(n(7557)),d=(0,c.observer)((function(e){var t=e.gameStore,n=e.plugins,r=void 0===n?{}:n,i=t.playerPosition,a=t.setVelocity,o=t.trail,c=t.setFPS,d=t.setTailSize,m=t.velocity;u.useEffect((function(){o.slice(0,o.length-1).some((function(e){var t=e.x,n=e.y;return t===i.x&&n===i.y}))&&(d(l.CONSTANTS.startTailSize),c(l.CONSTANTS.startFps))}),[i,o]);var p=u.useCallback((function(e){var t=function(e,t){var n=e.keyCode,r=l.velocityByKeyCode[n];if(r&&(0===t.x||t.x!==-r.x)&&(0===t.y||t.y!==-r.y))return l.velocityByKeyCode[n]}(e,m);t&&a(t)}),[m]);return u.createElement("div",{style:{outline:"none"},onKeyDown:p,tabIndex:1},u.createElement(s.Stage,{width:l.CONSTANTS.canvasSize,height:l.CONSTANTS.canvasSize},u.createElement(s.Layer,null,u.createElement(s.Rect,{width:l.CONSTANTS.canvasSize,height:l.CONSTANTS.canvasSize,fill:"black"})),u.createElement(s.Layer,null,o.map((function(e,t){var n=e.x,r=e.y;return u.createElement(s.Rect,{key:t,fill:"lime",width:l.CONSTANTS.tileSize,height:l.CONSTANTS.tileSize,x:n*l.CONSTANTS.gridSize,y:r*l.CONSTANTS.gridSize})}))),Object.values(r).filter((function(e){return e.enabled})).map((function(e){var n=e.Component,r=e.module;return u.createElement(u.Suspense,{fallback:null,key:r},u.createElement(n,{gameStore:t}))})),u.createElement(f.default,{gameStore:t})))}));t.default=function(e){var t=e.plugins;return u.createElement(l.LazyPluginProvider,{Plugin:d,plugins:t,asyncLoad:function(){return Promise.resolve().then((function(){return a(n(8700))}))}})}},7332:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return a(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=n(393),u=o(n(3691)),s=n(3242),f=l(n(4598));t.default=function(){var e=u.useState({Apple:{Component:u.lazy((function(){return(0,s.dynamicImport)((0,s.getRemoteEntryUrl)(1338,"fruit"),"fruit","Apple")})),enabled:!0,fqdn:(0,s.getRemoteEntryUrl)(1338,"fruit"),scope:"fruit",module:"Apple"},Teleport:{Component:u.lazy((function(){return(0,s.dynamicImport)((0,s.getRemoteEntryUrl)(1340,"wildcard"),"wildcard","Teleport")})),enabled:!1,fqdn:(0,s.getRemoteEntryUrl)(1340,"wildcard"),scope:"wildcard",module:"Teleport"}}),t=e[0],n=e[1],i=u.useCallback((function(e,t,i){n((function(n){var a;return n[i]?(console.warn("".concat(i," already exists, did nothing")),n):r(r({},n),((a={})[i]={fqdn:e,enabled:!0,module:i,scope:t,Component:u.lazy((function(){return(0,s.dynamicImport)(e,t,i)}))},a))}))}),[t]),a=u.useCallback((function(e){var t=new FormData(e.target),n=t.get("fqdn"),r=t.get("scope"),a=t.get("module");n&&r&&a&&i(String(n),String(r),String(a)),console.log(e),e.preventDefault()}),[]);return u.createElement(c.Grid,{container:!0},u.createElement(c.Grid,{item:!0,xs:12,lg:4},u.createElement(f.default,{plugins:t})),u.createElement(c.Grid,{container:!0,xs:12,lg:4,spacing:2},u.createElement(c.Grid,{item:!0,xs:12},"Active Plugins:",u.createElement(c.Table,{size:"small"},u.createElement(c.TableHead,null,u.createElement(c.TableRow,null,u.createElement(c.TableCell,null,"FQDN"),u.createElement(c.TableCell,null,"Scope"),u.createElement(c.TableCell,null,"Module"),u.createElement(c.TableCell,null,"Active"))),u.createElement(c.TableBody,null,Object.values(t).map((function(e){var t=e.module,i=e.fqdn,a=e.scope,o=e.enabled;return u.createElement(c.TableRow,{key:t},u.createElement(c.TableCell,null,u.createElement("pre",null,i)),u.createElement(c.TableCell,null,a),u.createElement(c.TableCell,null,t),u.createElement(c.TableCell,null,u.createElement(c.Checkbox,{color:o?"success":"error",checked:o,onChange:function(e){n((function(n){return n[t].enabled=e.target.checked,r({},n)}))}})))}))))),u.createElement(c.Grid,{item:!0,xs:12},u.createElement("form",{onSubmit:a,style:{display:"flex",flexDirection:"column"}},"Add plugins:",u.createElement(c.TextField,{margin:"dense",size:"small",label:"FQDN",name:"fqdn",placeholder:(0,s.getRemoteEntryUrl)(1340,"fruit")}),u.createElement(c.TextField,{margin:"dense",size:"small",label:"Scope",name:"scope",placeholder:"plum"}),u.createElement(c.TextField,{margin:"dense",size:"small",label:"Module Name",name:"module",placeholder:"Plum"}),u.createElement(c.Button,{variant:"contained",type:"submit"},"Add Plugin"),u.createElement("pre",null,"Example: Plum plugin is at ",(0,s.getRemoteEntryUrl)(1338,"fruit"),", fruit, Plum")))))}},7557:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var o=n(4654),l=n(3713),c=a(n(3691)),u=n(903),s=(0,l.observer)((function(e){var t=e.gameStore,n=e.allowPause,r=void 0!==n&&n,i=t.score,a=t.running,l=t.suspendGame,s=t.startGame;return c.createElement(u.Layer,null,c.createElement(u.Text,{text:"Score: ".concat(i),fill:"white",padding:10}),r&&c.createElement(u.Text,{text:a?"Pause":"Resume",fill:"white",padding:10,onClick:a?l:s,width:o.CONSTANTS.canvasSize,align:"right"}))}));t.default=s},3242:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function l(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.getRemoteEntryUrl=t.dynamicImport=void 0,t.dynamicImport=function(e,t,a,o){return void 0===o&&(o="remoteEntry.js"),r(this,void 0,void 0,(function(){var r,l;return i(this,(function(i){switch(i.label){case 0:return i.trys.push([0,6,,7]),[4,n.I("default")];case 1:return i.sent(),window[t]?[3,3]:[4,new Promise((function(t,n){var r=document.createElement("script");r.src="".concat(e,"/").concat(o),r.type="text/javascript",r.async=!0,r.onload=function(){var e;null===(e=r.parentElement)||void 0===e||e.removeChild(r),t()},r.onerror=function(e){var t;null===(t=r.parentElement)||void 0===t||t.removeChild(r),n(e)},document.head.appendChild(r)}))];case 2:i.sent(),i.label=3;case 3:return a.startsWith("./")||(a="./".concat(a)),[4,(r=window[t]).init(n.S.default)];case 4:return i.sent(),[4,r.get(a)];case 5:return[2,i.sent()()];case 6:return l=i.sent(),console.error("something went wrong with a federated module",l),[3,7];case 7:return[2]}}))}))};var a={fruit:n(8517).Xh,wildcard:n(5246).Xh};t.getRemoteEntryUrl=function(e,t){var n=window.location.hostname;return n.includes("sandbox")?n.includes("github.io")?a[t]:"//".concat(n.split(".")[0],"-").concat(e,".sse.codesandbox.io"):"//localhost:".concat(e)}},4654:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),i(n(9648),t)},1460:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.velocityByKeyCode=t.CONSTANTS=void 0,t.CONSTANTS={gridSize:20,tileSizeMultiplier:.9,get tileSize(){return this.gridSize*this.tileSizeMultiplier},get canvasSize(){return this.gridSize*this.gridSize},get startPosition(){return{x:this.gridSize/2,y:this.gridSize/2}},startFps:6,startTailSize:5},t.velocityByKeyCode={37:{x:-1,y:0},38:{x:0,y:-1},39:{x:1,y:0},40:{x:0,y:1}}},6896:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GameStoreContext=t.GameStoreInstance=t.GameStore=void 0;var r=n(5284),i=n(3691),a=n(1460);(0,r.configure)({enforceActions:"observed"});var o=function(){function e(){var e=this;this.gridSize=a.CONSTANTS.gridSize,this.playerPosition=a.CONSTANTS.startPosition,this.velocity={x:0,y:0},this.trail=[a.CONSTANTS.startPosition],this.tailSize=a.CONSTANTS.startTailSize,this.running=!1,this.lastFrameTime=Date.now(),this.fps=a.CONSTANTS.startFps,this.suspendGame=(0,r.action)((function(){e.running=!1})),this.startGame=function(){e.running=!0,e.tick()},this.tick=function(){if(e.running){requestAnimationFrame((function(){return e.tick()}));var t=Date.now(),n=t-e.lastFrameTime;n>e.frameInterval&&(e.lastFrameTime=t-n%e.frameInterval,e.updatePlayerPosition(e.playerPosition,e.velocity))}},this.updatePlayerPosition=(0,r.action)((function(t,n){var r=t.x,i=t.y,a=n.x,o=n.y;if(a||o){var l={x:r+a,y:i+o};l.x<0&&(l.x=e.gridSize-1),l.x>e.gridSize-1&&(l.x=0),l.y<0&&(l.y=e.gridSize-1),l.y>e.gridSize-1&&(l.y=0),e.playerPosition=l,e.trail=e.trail.concat(l).slice(-e.tailSize)}})),this.setVelocity=(0,r.action)((function(t){e.velocity=t})),this.setTailSize=(0,r.action)((function(t){e.tailSize=t})),this.setFPS=(0,r.action)((function(t){e.fps=t})),this.setPlayerPosition=(0,r.action)((function(t){e.playerPosition=t})),this.getRandomPosition=function(){return{x:Math.floor(Math.random()*e.gridSize),y:Math.floor(Math.random()*e.gridSize)}},(0,r.makeObservable)(this,{playerPosition:r.observable,trail:r.observable,tailSize:r.observable,frameInterval:r.computed,score:r.computed,running:r.observable}),(0,r.onBecomeObserved)(this,"playerPosition",this.startGame),(0,r.onBecomeUnobserved)(this,"playerPosition",this.suspendGame)}return Object.defineProperty(e.prototype,"frameInterval",{get:function(){return 1e3/this.fps},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"score",{get:function(){return this.tailSize-a.CONSTANTS.startTailSize},enumerable:!1,configurable:!0}),e}();t.GameStore=o,t.GameStoreInstance=new o,t.GameStoreContext=(0,i.createContext)(t.GameStoreInstance)},9648:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),i(n(1460),t),i(n(6896),t),i(n(7626),t)},7626:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LazyPluginProvider=void 0;var o=a(n(3691));t.LazyPluginProvider=function(e){var t=e.Plugin,n=e.asyncLoad,a=i(e,["Plugin","asyncLoad"]),l=o.default.useState(null),c=l[0],u=l[1];return o.default.useEffect((function(){n().then((function(e){return u(e.GameStoreInstance)}))}),[]),c?o.default.createElement(t,r({gameStore:c},a)):null}},8517:e=>{"use strict";e.exports=JSON.parse('{"Xh":"https://firstwhack.github.io/a-game-of-micro-frontends/fruit"}')},5246:e=>{"use strict";e.exports=JSON.parse('{"Xh":"https://firstwhack.github.io/a-game-of-micro-frontends/wildcard"}')}}]);
//# sourceMappingURL=613.js.map