"use strict";(self.webpackChunk_micro_snake_game=self.webpackChunk_micro_snake_game||[]).push([[675],{1675:(e,t,i)=>{i.r(t);var n=i(6927),l=i.n(n),a=i(8316),r=i(7197),s=i(5466),o=i(395),c=i(1939),m=i(4865),u=i(4457),d=i(6433),h=i(144),p=i(1621);function g(e,t,n,l="remoteEntry.js"){return a=this,r=void 0,o=function*(){try{yield i.I("default"),window[t]||(yield new Promise(((t,i)=>{const n=document.createElement("script");n.src=`${e}/${l}`,n.type="text/javascript",n.async=!0,n.onload=()=>{var e;null===(e=n.parentElement)||void 0===e||e.removeChild(n),t()},n.onerror=e=>{var t;null===(t=n.parentElement)||void 0===t||t.removeChild(n),i(e)},document.head.appendChild(n)}))),n.startsWith("./")||(n=`./${n}`);const a=window[t];return yield a.init(i.S.default),(yield a.get(n))()}catch(e){console.error("something went wrong with a federated module",e)}},new((s=void 0)||(s=Promise))((function(e,t){function i(e){try{l(o.next(e))}catch(e){t(e)}}function n(e){try{l(o.throw(e))}catch(e){t(e)}}function l(t){var l;t.done?e(t.value):(l=t.value,l instanceof s?l:new s((function(e){e(l)}))).then(i,n)}l((o=o.apply(a,r||[])).next())}));var a,r,s,o}const y={fruit:i(2324).Xh,wildcard:i(2159).Xh};function f(e,t){const i=window.location.hostname;return i.includes("github.io")?y[t]:i.includes("sandbox")?`//${i.split(".")[0]}-${e}.sse.codesandbox.io`:`//localhost:${e}`}const S={gridSize:20,tileSizeMultiplier:.9,get tileSize(){return this.gridSize*this.tileSizeMultiplier},get canvasSize(){return this.gridSize*this.gridSize},get startPosition(){return{x:this.gridSize/2,y:this.gridSize/2}},startFps:6,startTailSize:5},b={37:{x:-1,y:0},38:{x:0,y:-1},39:{x:1,y:0},40:{x:0,y:1}};var E=i(5217);(0,E.configure)({enforceActions:"observed"});const v=new class{constructor(){this.gridSize=S.gridSize,this.playerPosition=S.startPosition,this.velocity={x:0,y:0},this.trail=[S.startPosition],this.tailSize=S.startTailSize,this.running=!1,this.lastFrameTime=Date.now(),this.fps=S.startFps,this.suspendGame=(0,E.action)((()=>{this.running=!1})),this.startGame=()=>{this.running=!0,this.tick()},this.tick=()=>{if(this.running){requestAnimationFrame((()=>this.tick()));const e=Date.now(),t=e-this.lastFrameTime;t>this.frameInterval&&(this.lastFrameTime=e-t%this.frameInterval,this.updatePlayerPosition(this.playerPosition,this.velocity))}},this.updatePlayerPosition=(0,E.action)((({x:e,y:t},{x:i,y:n})=>{if(i||n){const l={x:e+i,y:t+n};l.x<0&&(l.x=this.gridSize-1),l.x>this.gridSize-1&&(l.x=0),l.y<0&&(l.y=this.gridSize-1),l.y>this.gridSize-1&&(l.y=0),this.playerPosition=l,this.trail=this.trail.concat(l).slice(-this.tailSize)}})),this.setVelocity=(0,E.action)((e=>{this.velocity=e})),this.setTailSize=(0,E.action)((e=>{this.tailSize=e})),this.setFPS=(0,E.action)((e=>{this.fps=e})),this.setPlayerPosition=(0,E.action)((e=>{this.playerPosition=e})),this.getRandomPosition=()=>({x:Math.floor(Math.random()*this.gridSize),y:Math.floor(Math.random()*this.gridSize)}),(0,E.makeObservable)(this,{playerPosition:E.observable,trail:E.observable,tailSize:E.observable,frameInterval:E.computed,score:E.computed,running:E.observable}),(0,E.onBecomeObserved)(this,"playerPosition",this.startGame),(0,E.onBecomeUnobserved)(this,"playerPosition",this.suspendGame)}get frameInterval(){return 1e3/this.fps}get score(){return this.tailSize-S.startTailSize}};(0,n.createContext)(v);const z=e=>{var{Plugin:t,asyncLoad:i}=e,n=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(i[n[l]]=e[n[l]])}return i}(e,["Plugin","asyncLoad"]);const[a,r]=l().useState(null);return l().useEffect((()=>{i().then((e=>r(e.GameStoreInstance)))}),[]),a?l().createElement(t,Object.assign({gameStore:a},n)):null};var x=i(7189),P=i(5641);const w=(0,x.observer)((function({gameStore:e,allowPause:t=!1}){const{score:i,running:l,suspendGame:a,startGame:r}=e;return n.createElement(P.Layer,null,n.createElement(P.Text,{text:`Score: ${i}`,fill:"white",padding:10}),t&&n.createElement(P.Text,{text:l?"Pause":"Resume",fill:"white",padding:10,onClick:l?a:r,width:S.canvasSize,align:"right"}))})),k=(0,x.observer)((function({gameStore:e,plugins:t={}}){const{playerPosition:i,setVelocity:l,trail:a,setFPS:r,setTailSize:s,velocity:o}=e;n.useEffect((()=>{a.slice(0,a.length-1).some((({x:e,y:t})=>e===i.x&&t===i.y))&&(s(S.startTailSize),r(S.startFps))}),[i,a]);const c=n.useCallback((e=>{const t=(({keyCode:e},t)=>{const i=b[e];if(i&&(0===t.x||t.x!==-i.x)&&(0===t.y||t.y!==-i.y))return b[e]})(e,o);t&&l(t)}),[o]);return n.createElement("div",{style:{outline:"none"},onKeyDown:c,tabIndex:1},n.createElement(P.Stage,{width:S.canvasSize,height:S.canvasSize},n.createElement(P.Layer,null,n.createElement(P.Rect,{width:S.canvasSize,height:S.canvasSize,fill:"black"})),n.createElement(P.Layer,null,a.map((({x:e,y:t},i)=>n.createElement(P.Rect,{key:i,fill:"lime",width:S.tileSize,height:S.tileSize,x:e*S.gridSize,y:t*S.gridSize})))),Object.values(t).filter((({enabled:e})=>e)).map((({Component:e,module:t})=>n.createElement(n.Suspense,{fallback:null,key:t},n.createElement(e,null)))),n.createElement(w,{gameStore:e})))})),Z=({plugins:e})=>n.createElement(z,{Plugin:k,plugins:e,asyncLoad:()=>i.e(700).then(i.t.bind(i,8700,23))}),O=document.getElementById("root");(0,a.render)(n.createElement("main",null,n.createElement("section",null,n.createElement((function(){const[e,t]=n.useState({Apple:{Component:n.lazy((()=>g(f(1338,"fruit"),"fruit","Apple"))),enabled:!0,fqdn:f(1338,"fruit"),scope:"fruit",module:"Apple"},Teleport:{Component:n.lazy((()=>g(f(1340,"wildcard"),"wildcard","Teleport"))),enabled:!1,fqdn:f(1340,"wildcard"),scope:"wildcard",module:"Teleport"}}),i=n.useCallback(((e,i,l)=>{t((t=>t[l]?(console.warn(`${l} already exists, did nothing`),t):Object.assign(Object.assign({},t),{[l]:{fqdn:e,enabled:!0,module:l,scope:i,Component:n.lazy((()=>g(e,i,l)))}})))}),[e]),l=n.useCallback((e=>{const t=new FormData(e.target),n=t.get("fqdn"),l=t.get("scope"),a=t.get("module");n&&l&&a&&i(String(n),String(l),String(a)),console.log(e),e.preventDefault()}),[]);return n.createElement(r.ZP,{container:!0},n.createElement(r.ZP,{item:!0,xs:12,lg:4},n.createElement(Z,{plugins:e})),n.createElement(r.ZP,{container:!0,xs:12,lg:4,spacing:2},n.createElement(r.ZP,{item:!0,xs:12},"Active Plugins:",n.createElement(s.Z,{size:"small"},n.createElement(o.Z,null,n.createElement(c.Z,null,n.createElement(m.Z,null,"FQDN"),n.createElement(m.Z,null,"Scope"),n.createElement(m.Z,null,"Module"),n.createElement(m.Z,null,"Active"))),n.createElement(u.Z,null,Object.values(e).map((({module:e,fqdn:i,scope:l,enabled:a})=>n.createElement(c.Z,{key:e},n.createElement(m.Z,null,n.createElement("pre",null,i)),n.createElement(m.Z,null,l),n.createElement(m.Z,null,e),n.createElement(m.Z,null,n.createElement(d.Z,{color:a?"success":"error",checked:a,onChange:i=>{t((t=>(t[e].enabled=i.target.checked,Object.assign({},t))))}})))))))),n.createElement(r.ZP,{item:!0,xs:12},n.createElement("form",{onSubmit:l,style:{display:"flex",flexDirection:"column"}},"Add plugins:",n.createElement(h.Z,{margin:"dense",size:"small",label:"FQDN",name:"fqdn",placeholder:f(1340,"fruit")}),n.createElement(h.Z,{margin:"dense",size:"small",label:"Scope",name:"scope",placeholder:"plum"}),n.createElement(h.Z,{margin:"dense",size:"small",label:"Module Name",name:"module",placeholder:"Plum"}),n.createElement(p.Z,{variant:"contained",type:"submit"},"Add Plugin"),n.createElement("pre",null,"Example: Plum plugin is at ",f(1338,"fruit"),", fruit, Plum")))))}),null))),O)},2324:e=>{e.exports=JSON.parse('{"Xh":"https://firstwhack.github.io/a-game-of-micro-frontends/fruit"}')},2159:e=>{e.exports=JSON.parse('{"Xh":"https://firstwhack.github.io/a-game-of-micro-frontends/wildcard"}')}}]);
//# sourceMappingURL=675.js.map