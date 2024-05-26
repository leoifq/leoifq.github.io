"use strict";(self["define"]=self["define"]||[]).push([[7291],{35200:function(e,t,a){a.d(t,{zG:function(){return h}});var n=a(35512),i=a(19390),l=a(44847),s=a(7728),r=a(28341),c=a(63294),o=a(3146),u=a(40586);function d(){const e=(0,s.G)((()=>(console.log("[worker-macro] webpack"),new s.G(new URL(a.p+a.u(1584),a.b))))),t=(0,n.Ud)(e);return{worker:t,_worker:e}}function v(){const{worker:e,_worker:t}=d(),{worker:a,_worker:n}=d(),{scannerOnImage:s,scannerOnLine:v,recognizeAchievement:w}=e,{recognizeAchievement:h,scannerOnLine:g}=a;let f=(e,t)=>{};const p=e=>{f=e},m=e=>{throw f(-99),e};t.addEventListener("error",m),n.addEventListener("error",m);const y=(async()=>{try{const[t,n]=(0,l.LS)(),s=r.hasSIMD?"ort-wasm-simd.wasm":"ort-wasm.wasm",d=r.hasSIMD?"opencv-simd.wasm":"opencv-normal.wasm";await t,await(0,l.sB)([s,d,"ppocr.ort"],(e=>f(e)),n);const v=(0,u.Z)(o.ag.amos);await Promise.all([e.setResources(i.ZP),a.setResources(i.ZP),e.initAchievementMap(c["default"],v),a.initAchievementMap(c["default"],v)]),f(100)}catch(s){throw f(-1,s),s}t.removeEventListener("error",m),n.removeEventListener("error",m),await Promise.all([e.init(),a.init()])})();return{recognizeAchievement:h,recognizeAchievement2:w,scannerOnLine:g,scannerOnLine2:v,scannerOnImage:s,initPromise:y,workerCV:e,workerOCR:a,onProgress:p}}let w;function h(){return w||(w=v()),w}},77689:function(e,t,a){a.d(t,{l:function(){return i}});var n=a(29715);function i(e,t){return n.l(e,t,"achievement")}},8325:function(e,t,a){a.r(t),a.d(t,{default:function(){return ue}});var n=a(61583),i=a(91239);const l={key:0},s={key:1,style:{"padding-top":"20px"}},r={class:"inline-status"},c={key:1,class:"pbar"},o={key:0,class:"pbar-bar-text"};function u(e,t,a,u,d,v){const w=(0,n.up)("Loader"),h=(0,n.up)("float-content-b"),g=(0,n.up)("web-capturer"),f=(0,n.up)("float-content"),p=(0,n.up)("c-ready");return(0,n.wg)(),(0,n.iD)("main",null,[e.state===e.S.Init?((0,n.wg)(),(0,n.iD)("section",l,[(0,n.Wm)(w,{source:"achievement",instance:e.getScannerInstance,onDone:t[0]||(t[0]=t=>e.state++)},null,8,["instance"])])):((0,n.wg)(),(0,n.iD)("section",s,[((0,n.wg)(),(0,n.j4)(g,{ref:"cap",key:e.capKey,popup:e.state===e.S.Wait||e.state===e.S.Capture,onExit:t[1]||(t[1]=t=>e.state=e.S.Processing),onReady:t[2]||(t[2]=t=>e.state=e.S.Wait)},{default:(0,n.w5)((()=>[(0,n.Wm)(h,{capture:e.capture,state:e.state===e.S.Capture?1:0,success:e.recognized.success,fail:e.recognized.fail,scanned:e.scanned,duplicate:e.dup,webControlEnabled:e.webControlEnabled},null,8,["capture","state","success","fail","scanned","duplicate","webControlEnabled"])])),_:1},8,["popup"])),e.state>e.S.Wait?((0,n.wg)(),(0,n.iD)("div",{key:0,class:(0,i.C_)(e.$style.statusInner)},[(0,n._)("div",r,[(0,n.Wm)(f,{"in-float":!1,capture:!1,state:1,success:e.recognized.success,fail:e.recognized.fail,scanned:e.scanned,duplicate:e.dup,onClick:t[3]||(t[3]=t=>e.state===e.S.Capture&&(e.state=e.S.Processing))},null,8,["success","fail","scanned","duplicate"])]),e.state===e.S.Capture?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"no-box",onClick:t[4]||(t[4]=t=>e.state===e.S.Capture&&(e.state=e.S.Processing))},(0,i.zw)(e.webControlEnabled>0?"自动滚动进行中":"请按手动匀速滚动页面，完成后点此结束"),1)):(0,n.kq)("",!0),e.state>e.S.Capture?((0,n.wg)(),(0,n.iD)("div",c,[(0,n._)("div",{class:(0,i.C_)(["pbar-bar",{finish:e.state===e.S.Finish}])},[(0,n._)("div",{class:"pbar-bar-in",style:(0,i.j5)({width:(e.recognized.success+e.recognized.fail+e.dup)/e.scanned*100+"%"})},null,4),e.state===e.S.Finish?((0,n.wg)(),(0,n.iD)("div",o,"完成")):(0,n.kq)("",!0)],2),e.state===e.S.Finish?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"restart",onClick:t[5]||(t[5]=(...t)=>e.reset&&e.reset(...t))},"重新开始")):(0,n.kq)("",!0)])):(0,n.kq)("",!0)],2)):(0,n.kq)("",!0),e.state===e.S.Wait?((0,n.wg)(),(0,n.j4)(p,{key:1,onDone:t[6]||(t[6]=t=>e.state=e.S.Capture)})):(0,n.kq)("",!0)]))])}a(16329),a(77253);var d=a(33314),v=a(87860),w=a(35200),h=a(30926),g=a(41151);function f(e,t,a,i,l,s){return(0,n.wg)(),(0,n.iD)("div")}const p="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024' fill='%23fff'%3E%3Cpath d='M421.646 361.414v-93.081c0-7.562 2.678-13.996 8.038-19.366 5.354-5.346 11.812-8.022 19.366-8.022h246.373c7.562 0 14.012 2.676 19.356 8.022 5.37 5.372 8.038 11.804 8.038 19.366v246.405c0 7.554-2.668 13.988-8.038 19.358-5.346 5.328-11.794 8.024-19.356 8.024H602.35v202.605c0 10.576-3.736 19.582-11.254 27.102-7.484 7.462-16.514 11.232-27.1 11.232H219.07c-10.574 0-19.616-3.77-27.112-11.232-7.508-7.52-11.254-16.526-11.254-27.102V399.758c0-10.588 3.748-19.594 11.254-27.112 7.496-7.484 16.538-11.232 27.112-11.232h202.573zm0 60.234H279.31c-10.574 0-19.618 3.748-27.112 11.232-7.508 7.52-11.254 16.526-11.254 27.112v224.497c0 10.576 3.748 19.582 11.254 27.102 7.494 7.462 16.538 11.232 27.112 11.232h224.455c10.586 0 19.616-3.77 27.1-11.232 7.52-7.52 11.254-16.526 11.254-27.102V542.118h-93.066c-7.554 0-14.012-2.694-19.366-8.024-5.362-5.37-8.038-11.804-8.038-19.358v-93.088zm87.64-120.47c-7.554 0-14.012 2.678-19.366 8.024-5.362 5.37-8.038 11.804-8.038 19.368v125.936c0 7.554 2.678 13.988 8.038 19.358 5.354 5.33 11.812 8.024 19.366 8.024h125.906c7.562 0 14.012-2.694 19.356-8.024 5.37-5.37 8.037-11.804 8.037-19.358V328.57c0-7.562-2.667-13.996-8.037-19.368-5.346-5.346-11.794-8.024-19.356-8.024H509.288zM225.169 85.038l-49.932-28.83c-14.406-8.319-19.342-26.737-11.024-41.14s26.736-19.343 41.14-11.025l104.332 60.234c14.404 8.318 19.342 26.736 11.024 41.14L260.473 209.75c-8.318 14.406-26.736 19.342-41.14 11.024s-19.342-26.736-11.024-41.14l23.282-40.326c-40.44 15.522-74.804 37.426-103.092 65.712-42.704 42.704-71.337 99.733-85.903 171.087L.002 333.512c14.744-71.535 43.36-128.545 85.85-171.037 36.211-36.212 82.65-62.026 139.315-77.442zm536.998 808.386l49.932 28.828c14.404 8.318 19.342 26.736 11.024 41.14s-26.736 19.342-41.14 11.024L677.651 914.18c-14.404-8.318-19.341-26.736-11.024-41.14l60.236-104.331c8.318-14.404 26.736-19.342 41.14-11.024s19.342 26.736 11.024 41.14l-23.282 40.326c40.44-15.52 74.804-37.424 103.092-65.712 42.704-42.704 71.338-99.734 85.904-171.09l42.591 42.592c-14.744 71.534-43.36 128.548-85.85 171.038-36.211 36.212-82.649 62.025-139.315 77.441z'/%3E%3C/svg%3E",m="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024' fill='%23fff'%3E%3Cpath d='M468.867 212.468a43.133 43.133 0 1 0 86.266 0 43.133 43.133 0 1 0-86.266 0zM468.867 383.4a43.133 43.133 0 1 0 86.266 0 43.133 43.133 0 1 0-86.266 0zM468.867 554.334a43.133 43.133 0 1 0 86.266 0 43.133 43.133 0 1 0-86.266 0zM609.448 651.782L512 749.229l-97.448-97.447c-17.572-17.573-43.132-17.573-59.107 0s-17.573 43.132 0 59.107l127.8 127.8c7.987 7.988 20.767 12.78 30.353 12.78s20.767-4.792 30.352-12.78l127.8-127.8c17.573-17.572 17.573-43.132 0-59.107-19.17-17.573-44.73-17.573-62.302 0z'/%3E%3Cpath d='M555.133 0h-84.668C302.727 0 171.732 132.593 171.732 298.733v426.534c0 166.14 132.592 298.733 298.733 298.733h84.668c166.14 0 298.733-132.593 298.733-298.733V298.733C852.268 132.593 721.273 0 555.133 0zM767.6 723.67c0 119.812-94.253 212.467-212.468 212.467h-84.668c-119.813 0-212.468-94.252-212.468-212.468V298.733c0-119.813 94.253-212.468 212.468-212.468h84.668c119.812 0 212.468 94.253 212.468 212.468V723.67z'/%3E%3C/svg%3E",y=new Image;y.src=p;const C=new Image;C.src=m;var b=(0,n.aZ)({props:{state:Number,success:Number,fail:Number,duplicate:Number,scanned:Number,webControlEnabled:Number},setup(e){const t=(0,n.f3)("canvas");function a(){const e=t.value.getContext("2d");e.textAlign="left",e.fillStyle="#fff",e.fillRect(0,0,t.value.width,t.value.height),e.fillStyle="#7e7e7e",e.fillRect(0,0,.28*t.value.width,t.value.height),e.drawImage(y,.05*t.value.width,.112*t.value.width,.18*t.value.width,.18*t.value.width),e.fillStyle="#999",e.font=.056*t.value.width+"px 微软雅黑",e.fillText("请切换到游戏窗口",.42*t.value.width,.18*t.value.width),e.fillText("打开任意成就页面",.42*t.value.width,.26*t.value.width)}function i(){const a=t.value.getContext("2d");a.textAlign="left",a.fillStyle="#fff",a.fillRect(0,0,t.value.width,t.value.height),a.fillStyle="#4096fe",a.fillRect(0,0,.28*t.value.width,t.value.height),a.drawImage(C,.05*t.value.width,.112*t.value.width,.18*t.value.width,.18*t.value.width),a.font=.044*t.value.width+"px 微软雅黑",e.webControlEnabled&&e.webControlEnabled>0?(a.fillText("自动翻页进行中，请勿移动鼠标",.348*t.value.width,.292*t.value.width),a.fillText("如需中断，请按 Win 键停止识别",.344*t.value.width,.352*t.value.width)):(a.fillText("匀速向下翻页 完成后点此结束",.348*t.value.width,.292*t.value.width),a.fillText("尽量将鼠标保持在左侧图标处",.356*t.value.width,.352*t.value.width)),a.fillText("扫描",.34*t.value.width,.092*t.value.width),a.fillStyle="#00b57a",a.fillText("成功",.508*t.value.width,.092*t.value.width),a.fillStyle="#cf0000",a.fillText("失败",.676*t.value.width,.092*t.value.width),a.fillStyle="#999",a.fillText("重复",.844*t.value.width,.092*t.value.width),l()}function l(){if(0===e.state)return;const a=t.value.getContext("2d");a.fillStyle="#fff",a.fillRect(.28*t.value.width,.112*t.value.width,.72*t.value.width,.12*t.value.width),a.font=.08*t.value.width+"px 微软雅黑",a.textAlign="center",a.fillStyle="#4096fe",a.fillText((e.scanned||0).toString(),.38*t.value.width,.2*t.value.width),a.fillStyle="#00b57a",a.fillText((e.success||0).toString(),.552*t.value.width,.2*t.value.width),a.fillStyle="#cf0000",a.fillText((e.fail||0).toString(),.72*t.value.width,.2*t.value.width),a.fillStyle="#999",a.fillText((e.duplicate||0).toString(),.888*t.value.width,.2*t.value.width)}return(0,n.YP)((()=>e.state),(e=>{0===e?a():i()})),(0,n.YP)(e,(()=>{l()}),{deep:!0}),(0,n.bv)((()=>{0===e.state?a():i()})),{}}}),S=a(14545);const E=(0,S.Z)(b,[["render",f]]);var k=E,x=a(77689),L=a(1533),I=a.n(L),P=a(92066),_=a(2849),D=a(65890),W=a(84876),z=a(96181),T=a(25194),M=a(14763),R=a(29056),F=(a(60388),a(84136));a(36805);const A={class:"content"},O=(0,n._)("div",{class:"title"},"还差最后一步",-1),H={class:"desc"},N=(0,n.Uk)(" 请手动切换到成就列表界面，然后点击下面按钮继续 "),Z=(0,n._)("br",null,null,-1),V={key:0},q={key:1},U={key:2},G={class:"l"},Y={class:"m"},$=(0,n._)("div",{class:"t"},"我已打开成就列表界面",-1),j={key:0,class:"d"},B={key:1,class:"d"},K={class:"r"};function J(e,t,a,l,s,r){const c=F.v,o=(0,n.up)("fa-icon"),u=R.mi;return(0,n.wg)(),(0,n.iD)("div",{class:(0,i.C_)(e.$style.ready)},[(0,n._)("div",A,[O,(0,n._)("div",H,[N,Z,e.hasPictureInPicture?((0,n.wg)(),(0,n.iD)("div",V,"如果没有看到悬浮窗，请点击页面空白处")):e.windowId>0?((0,n.wg)(),(0,n.iD)("div",q,[(0,n.Wm)(c,{title:"当前浏览器不支持悬浮窗",description:"如需中断扫描，请按 Win 键",type:"warning","show-icon":""})])):((0,n.wg)(),(0,n.iD)("div",U,[(0,n.Wm)(c,{title:"当前浏览器不支持悬浮窗",description:"完成翻页后，请点击“停止共享屏幕”按钮或手动回到本窗口点击停止扫描",type:"warning","show-icon":""})]))])]),(0,n.Wm)(u,{class:"start-btn start-gray",onClick:t[0]||(t[0]=t=>e.$emit("done"))},{default:(0,n.w5)((()=>[(0,n._)("div",G,[(0,n.Wm)(o,{icon:"toggle-on"})]),(0,n._)("div",Y,[$,e.windowId>0?((0,n.wg)(),(0,n.iD)("div",j,"将自动切换到原神窗口并开始翻页")):((0,n.wg)(),(0,n.iD)("div",B,"点击后请回到原神窗口并手动匀速滚动页面"))]),(0,n._)("div",K,[(0,n.Wm)(o,{icon:"angle-right"})])])),_:1})],2)}var Q=a(28341);W.vI.add(_.WZW);var X=(0,n.aZ)({props:{windowId:{type:Number,default:0}},emits:["done"],setup(){return{hasPictureInPicture:Q.hasPictureInPicture}}}),ee={ready:"ready-bbdcc7"};const te={};te["$style"]=ee;const ae=(0,S.Z)(X,[["render",J],["__cssModules",te]]);var ne,ie=ae;function le(e){return new Promise((t=>{let a=0;const n=()=>{a++>=e?t():requestAnimationFrame(n)};n()}))}(function(e){e[e["Fail"]=-1]="Fail",e[e["Init"]=0]="Init",e[e["Ready"]=1]="Ready",e[e["Request"]=2]="Request",e[e["Wait"]=3]="Wait",e[e["Capture"]=4]="Capture",e[e["Processing"]=5]="Processing",e[e["Finish"]=6]="Finish"})(ne||(ne={})),W.vI.add(_.ik8,D.EPy);var se=(0,n.aZ)({name:"AchievementScanner",components:{FloatContent:g.Z,FloatContentB:k,Loader:z.Z,CReady:ie,WebCapturer:M.Z},setup(){const{scannerOnLine:e,scannerOnLine2:t,scannerOnImage:a,initPromise:i,workerCV:l,workerOCR:s}=(0,w.zG)(),r={scanner:"CaptureScanner",capturer:"WebCapturer",ua:navigator.userAgent,w:0,h:0},c=(0,P.yj)(),o=window===parent,u=(0,h.iH)(!1),g=(0,h.iH)([]),f=(0,h.iH)(0),p=(0,h.iH)(0),m=(0,n.Fl)((()=>({success:g.value.filter((e=>e.success)).length,fail:g.value.filter((e=>!e.success)).length}))),y=async({line:a,thread:n})=>{if(a){let i=e;n&&D.value===ne.Processing&&(L.concurrency=2,i=t);const l=await i(a);if(l.success){const e=g.value.find((e=>{if(!e.success)return!1;const t=e;return t.achievement.id===l.achievement.id}));l.done&&!c.query.withImage||(l.images={main:(0,v.rT)(a).toDataURL("image/webp")}),e?p.value++:g.value.push(l)}else l.images={main:(0,v.rT)(a).toDataURL("image/webp")},g.value.push(l),(new Image).src=l.images.main}D.value!==ne.Processing&&await le(25)},C=document.createElement("canvas"),b=C.getContext("2d");let S=null,E=0;const k=async({imageData:e,keepLastLine:t})=>{const n=await a((0,v.Q8)(e),t),i=f.value,l=n.reduce(((e,t)=>e+t.image.rows),0);let s=0;for(const a of n)a.image.rows>l/n.length*2/3&&((!S||s<2)&&(S=a,s++),L.push({line:a.image,thread:f.value%2===0}),f.value++);if(t&&L.push({line:null,thread:!1}),M.value>0&&(i===f.value?E++:E=Math.max(0,E-1),E>5))return E=0,void(D.value=ne.Processing)},L=I().promise(y,1);L.drain=()=>{D.value===ne.Processing&&(D.value=ne.Finish)};const _=I().promise(k,1),D=(0,h.iH)(ne.Init);i.then((()=>{D.value=ne.Ready}));const W=(0,h.iH)(null),z=(0,h.iH)(Date.now()),M=(0,n.Fl)((()=>W.value?W.value.windowId:-1));let R=new d.p;(0,n.YP)(W,(e=>{e&&(R=e.control)}));let F=new AbortController;const A=async()=>{if(!W.value)return;C.width=W.value.video.videoWidth,C.height=W.value.video.videoHeight,r.w=W.value.video.videoWidth,r.h=W.value.video.videoHeight;let e=null,t={x:0,y:0},a=-1;const n=async(n=!0)=>{if(e||(e=await l.getRect()),S&&e&&(t.x&&t.y||(t=await R.toAbsolute(M.value,e.x,e.y+S.y+2*S.image.rows/3,{dx:C.width,dy:C.height})),await R.SetCursorPos(t.x,t.y),await R.mouse_event(R.MOUSEEVENTF_LEFTDOWN,0,0,0),await R.mouse_event(R.MOUSEEVENTF_LEFTUP,0,0,0),n?await R.mouse_event(R.MOUSEEVENTF_WHEEL,0,0,-120,11):await R.mouse_event(R.MOUSEEVENTF_WHEEL,0,0,-120,2)),n){const e=Math.ceil(a>0?a:60);await le(e/16)}},i=async()=>{console.log("->latency measurement start");const e=await(0,T.s)(l.diffCached,(()=>W.value.capture({x:0,y:0,w:0,h:0})),(()=>n(!1)));console.log("->latency measurement done",e),a=Math.min(160,Math.max(e.latency,80))};let s=!0;while(D.value===ne.Capture)try{let e=null;while(!e)b&&b.drawImage(W.value.video,0,0,C.width,C.height),e=b&&b.getImageData(0,0,C.width,C.height),e||(console.warn("->capture FAILD"),await le(4));_.push({imageData:e,keepLastLine:!1}),M.value?s?(await le(4),await n(!1),await le(8),s=!1):await(a>0?n():i()):(await(0,T.h)(l.diffCached,(()=>W.value.capture({x:0,y:0,w:0,h:0})),{interval:150,signal:F.signal}),console.log("->changed"))}catch(c){c instanceof Error&&"ECANCEL"===c.message&&(D.value=ne.Processing)}};(0,n.YP)((()=>D.value),(async()=>{if(D.value===ne.Ready&&((0,x.l)("ready",null),(0,x.l)("state","ready")),D.value===ne.Capture&&((0,x.l)("state","capture"),M.value&&R.activeWindow(M.value),console.log("capture"),A()),W.value){if(D.value===ne.Processing){F.abort(),b&&b.drawImage(W.value.video,0,0,C.width,C.height);const e=b&&b.getImageData(0,0,C.width,C.height);e&&_.push({imageData:e,keepLastLine:!0}),W.value.stop(),console.log("processing"),(0,x.l)("state","processing"),L.resume(),M.value&&R.hwnd&&R.activeWindow(R.hwnd)}D.value===ne.Finish&&(console.log("finish"),(0,x.l)("state","finish"),(0,x.l)("result",{result:g.value,dup:p.value,metadata:r}))}}));const O=async()=>{await Promise.all([l.reset(),s.reset()]),g.value=[],f.value=0,p.value=0,D.value=ne.Ready,S=null,E=0,F=new AbortController,z.value=Date.now()},H=e=>{const{event:t}=e.data;switch(t){case"reset":O();break;case"start":W.value&&W.value.requestCapture();break}};return o||(window.addEventListener("message",H),(0,n.Jd)((()=>{window.removeEventListener("message",H)}))),(0,n.YP)([f,m,p],(()=>{(0,x.l)("progress",{scanned:f.value,...m.value,dup:p.value})})),{S:ne,state:D,results:g,scanned:f,recognized:m,capture:u,dup:p,isTop:o,reset:O,webControl:R,webControlEnabled:M,cap:W,capKey:z,getScannerInstance:w.zG}}}),re={loader:"loader-ed1218",scannerCssloadLoader:"scanner-cssload-loader-a98e2b",scannerCssloadLoaderInner:"scanner-cssload-loader-inner-a4c871",floatwindow:"floatwindow-b2c0ef",statusInner:"status-inner-e6d784"};const ce={};ce["$style"]=re;const oe=(0,S.Z)(se,[["render",u],["__cssModules",ce]]);var ue=oe}}]);
//# sourceMappingURL=7291.dc45765b.js.map