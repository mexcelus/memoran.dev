(function(t){function e(e){for(var r,a,c=e[0],s=e[1],l=e[2],p=0,d=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"063c":function(t,e,n){"use strict";var r=n("9bb6"),o=n.n(r);o.a},"2a24":function(t,e,n){t.exports=n.p+"img/pencil100.56cb9450.png"},"319a":function(t,e,n){},"359c":function(t,e,n){t.exports=n.p+"img/github.c8a83d07.png"},"474b":function(t,e,n){"use strict";var r=n("c407"),o=n.n(r);o.a},"53be":function(t,e,n){"use strict";var r=n("b9cf"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[t.$auth.isAuthenticated?r("MemorandevApp"):r("div",{staticClass:"landing-page"},[r("Navbar"),r("h1",{staticClass:"landing"},[r("strong",[t._v("Note Taking App for Developers")])]),r("p",{staticClass:"landing"},[t._v("Keeping your thoughts, lists and notes organized just got a lot "),r("strong",[t._v("faster")]),t._v("! Powered by Vue.js and Markdown Remark.")]),r("img",{staticClass:"pencil",attrs:{alt:"Pencil",src:n("5a11")}}),r("div",[r("button",{staticClass:"btn landing btn-success",on:{click:t.login}},[t._v("Sign in")]),r("button",{staticClass:"btn landing btn-dark"},[t._v("Open Source")])]),r("img",{staticClass:"demo",attrs:{src:n("b9c6"),alt:"Demo"}})],1)],1)},i=[],a=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7")),c=n("2f62"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"navbar"}},[n("nav",{staticClass:"navbar navbar-light bg-light"},[n("div",{staticClass:"container"},[n("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[n("strong",[t._v(t._s(t.title))])]),n("div",{attrs:{id:"navbarNav"}},[n("ul",{staticClass:"nav"},[t._m(0),n("li",{staticClass:"nav-item"},[n("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v("Sign in")])])])])])])])},l=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"nav-item navbar"},[r("a",{attrs:{href:"#"}},[r("img",{staticClass:"github",attrs:{src:n("359c"),alt:"Github",srcset:""}})])])}];function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(n,!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={name:"Navbar",computed:p({},Object(c["c"])({custom:"logIn",title:"title"})),methods:p({},Object(c["b"])({toggleLogIn:"toggleLogIn"}),{login:function(){this.$auth.loginWithRedirect()}})},f=d,h=(n("ed9d"),n("2877")),g=Object(h["a"])(f,s,l,!1,null,"16b69f00",null),v=g.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"memorandev"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-1 categoriesbar"},[n("CategoriesBar")],1),n("div",{staticClass:"col-2 notesbar"},[n("NotesBar")],1),n("div",{staticClass:"col-9 note"},[this.$store.state.selectedNote._id&&!this.$store.state.createNote?n("div",[n("NoteDisplay")],1):t._e(),this.$store.state.createNote?n("div",[n("NewNote")],1):t._e()])])])])},m=[],O=(n("d3b7"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"categoriesbar"},[n("div",{staticClass:"logo"},[n("img",{staticClass:"pencil",attrs:{alt:"Pencil",src:this.$store.state.openbook?t.img1:t.img2}}),n("p",{staticClass:"app-name"},[t._v("memoran.DEV")])]),n("p",{staticClass:"cats-title"},[t._v("CATEGORIES")]),n("div",{staticClass:"cats"},t._l(t.categories,(function(t){return n("div",{key:t.id},[n("Category",{attrs:{category:t}})],1)})),0),n("div",{staticClass:"bottoms"},[n("img",{attrs:{src:t.$auth.user.picture}}),n("p",{staticClass:"nickname"},[t._v(t._s(t.$auth.user.nickname))]),n("button",{staticClass:"btn",on:{click:t.logout}},[t._v("Log Out")])])])}),C=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"category"},[n("button",{staticClass:"cat-button",on:{click:function(e){return t.handleClick(t.category.name)}}},[t._v(t._s(t.category.name.toUpperCase()))])])},E=[],y={name:"Category",props:["category"],methods:{handleClick:function(t){var e=this,n="http://localhost:8080/notes";"all"===t&&(n+="/everything"),n+="/".concat(t),fetch(n).then((function(t){return t.json()})).then((function(t){e.$store.state.notes=t}))}}},A=y,j=(n("53be"),Object(h["a"])(A,w,E,!1,null,"25dba8c7",null)),k=j.exports;function I(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?I(n,!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var x={name:"CategoriesBar",components:{Category:k},data:function(){return{img1:n("5a11"),img2:n("2a24")}},computed:P({},Object(c["c"])({categories:"categories",custom:"logIn"})),methods:P({},Object(c["b"])({toggleLogIn:"toggleLogIn"}),{logout:function(){this.$auth.logout({returnTo:window.location.origin})}})},R=x,N=(n("063c"),Object(h["a"])(R,O,C,!1,null,"66d024ef",null)),D=N.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notesbar"},[n("h3",[t._v("NOTES")]),t._l(t.notes,(function(t){return n("div",{key:t._id},[n("Note",{attrs:{note:t}})],1)})),n("button",{on:{click:function(e){return t.handleClick()}}},[t._v("+ New Note")])],2)},B=[],S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"note"},[n("button",{on:{click:function(e){return t.handleClick(t.note)}}},[t._v(t._s(t.note.title))])])},T=[],F={name:"Note",props:["note"],methods:{handleClick:function(t){this.$store.state.selectedNote=t,this.$store.state.createNote=!1}}},H=F,U=(n("efa1"),Object(h["a"])(H,S,T,!1,null,"73953ca3",null)),G=U.exports;function J(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?J(n,!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):J(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var X={name:"NotesBar",components:{Note:G},computed:M({},Object(c["c"])({notes:"notes"})),methods:{handleClick:function(){this.$store.state.createNote=!0}}},z=X,V=(n("950b"),Object(h["a"])(z,Q,B,!1,null,"2b2f60af",null)),L=V.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"note"},[n("div",{staticClass:"controls"},[n("button",{on:{click:t.handleClickEdit}},[t._v(t._s(!1===this.edit?"Edit":"Preview"))]),n("button",{on:{click:t.handleClickDelete}},[t._v("Delete")])]),t.edit?n("div",[n("codemirror",{attrs:{id:"markdown",value:this.$store.state.selectedNote.content,options:t.cmOption},on:{input:t.onCmCodeChange}})],1):n("div",[n("div",{attrs:{id:"compiled"},domProps:{innerHTML:t._s(t.compiledMarkdown)}})])])},Y=[],q=n("8f94");n("a7be"),n("f9d4"),n("959b"),n("7a7a");function K(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function W(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?K(n,!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Z=n("0e54"),$={components:{codemirror:q["codemirror"]},name:"NoteDisplay",data:function(){return{cmOption:{mode:"text/x-markdown",theme:"monokai",lineWrapping:!0,lineNumbers:!0},edit:!1}},computed:{compiledMarkdown:function(){return this.$store.state.selectedNote.content?Z(this.$store.state.selectedNote.content):Z("oh no!")}},methods:W({},Object(c["b"])({toggleBook:"toggleBook"}),{handleClickEdit:function(){var t=this,e="http://localhost:8080/notes";if(e+="/".concat(this.$store.state.selectedNote._id),this.edit){var n=this.$store.state.selectedNote.content;fetch(e,{method:"PUT",body:JSON.stringify({_id:"/".concat(this.$store.state.selectedNote._id),newContent:n}),headers:new Headers({"Content-Type":"application/json"})}).then((function(e){e.json(),t.$store.state.selectedNote.content=n}))}this.edit=!this.edit,this.toggleBook()},handleClickDelete:function(){var t=this,e="http://localhost:8080/notes";e+="/".concat(this.$store.state.selectedNote._id),fetch(e,{method:"DELETE",headers:new Headers({"Content-Type":"application/json"})}).then((function(e){e.json(),t.$store.state.notes=t.$store.state.notes.filter((function(e){return e!==t.$store.state.selectedNote})),t.$store.state.selectedNote={}}))},onCmCodeChange:function(t){this.$store.state.selectedNote.content=t}})},tt=$,et=(n("ce45"),Object(h["a"])(tt,_,Y,!1,null,"23946676",null)),nt=et.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"new-note"},[n("form",[t._m(0),t._m(1),t._m(2),n("button",{on:{click:t.handleClick}},[t._v("Create")])])])},ot=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group"},[n("label",[t._v("Title")]),n("input",{staticClass:"form-control",attrs:{type:"title",placeholder:"Title"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group"},[n("label",[t._v("Category")]),n("select",{staticClass:"form-control"},[n("option",{attrs:{value:" "}}),n("option",{attrs:{value:"quick"}},[t._v("Quick")]),n("option",{attrs:{value:"school"}},[t._v("School")]),n("option",{attrs:{value:"favorites"}},[t._v("Favorites")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group"},[n("label",[t._v("Note Content")]),n("textarea",{staticClass:"form-control",attrs:{placeholder:"Content"}})])}],it={name:"NewNote",methods:{handleClick:function(t){var e=this;t.preventDefault();var n=document.querySelector("input").value,r=document.querySelector("select").value,o=document.querySelector("textarea").value,i="http://localhost:8080/notes",a={username:this.$auth.user.nickname,title:n,category:r,content:o};fetch(i,{method:"POST",body:JSON.stringify(a),headers:new Headers({"Content-Type":"application/json"})}).then((function(t){var n=t.json();return e.$store.state.createNote=!1,n})).then((function(t){e.$store.state.notes.push(t),e.$store.state.selectedNote=t}))}}},at=it,ct=(n("b0d5"),Object(h["a"])(at,rt,ot,!1,null,"77938650",null)),st=ct.exports,lt="http://localhost:8080/notes",ut={name:"MemorandevApp",components:{CategoriesBar:D,NotesBar:L,NoteDisplay:nt,NewNote:st},mounted:function(){var t=this,e=function(){lt+="/user/".concat(t.$auth.user.nickname),console.log(lt),fetch(lt).then((function(t){return t.json()})).then((function(e){t.$store.state.notes=e}))};setTimeout(e,500)}},pt=ut,dt=(n("474b"),Object(h["a"])(pt,b,m,!1,null,"0bf95650",null)),ft=dt.exports;function ht(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function gt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ht(n,!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ht(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var vt={name:"app",computed:gt({},Object(c["c"])({custom:"logIn"})),components:{Navbar:v,MemorandevApp:ft}},bt=vt,mt=(n("034f"),Object(h["a"])(bt,o,i,!1,null,null,null)),Ot=mt.exports;r["a"].use(c["a"]);var Ct=new c["a"].Store({state:{title:"memoran.DEV",openbook:!0,categories:[{id:1,name:"all"},{id:2,name:"quick"},{id:3,name:"school"},{id:4,name:"favorites"}],notes:[],selectedNote:{},logIn:!1,createNote:!1},mutations:{openBook:function(t){t.openbook=!t.openbook}},actions:{toggleBook:function(t){t.commit("openBook")}}}),wt=n("8c4f");r["a"].use(wt["a"]);var Et,yt=[],At=new wt["a"]({mode:"history",base:"/",routes:yt}),jt=At,kt=n("8160"),It=(n("caad"),n("ac1f"),n("2532"),n("841c"),n("96cf"),n("dfdf")),Pt=n("5891"),xt=n.n(Pt),Rt=function(){return window.history.replaceState({},document.title,window.location.pathname)},Nt=function(t){var e=t.onRedirectCallback,n=void 0===e?Rt:e,o=t.redirectUri,i=void 0===o?window.location.origin:o,a=Object(It["a"])(t,["onRedirectCallback","redirectUri"]);return Et||(Et=new r["a"]({data:function(){return{loading:!0,isAuthenticated:!1,user:{},auth0Client:null,popupOpen:!1,error:null}},methods:{loginWithPopup:function(t){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return this.popupOpen=!0,e.prev=1,e.next=4,regeneratorRuntime.awrap(this.auth0Client.loginWithPopup(t));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](1),console.error(e.t0);case 9:return e.prev=9,this.popupOpen=!1,e.finish(9);case 12:return e.next=14,regeneratorRuntime.awrap(this.auth0Client.getUser());case 14:this.user=e.sent,this.isAuthenticated=!0;case 16:case"end":return e.stop()}}),null,this,[[1,6,9,12]])},handleRedirectCallback:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.prev=1,t.next=4,regeneratorRuntime.awrap(this.auth0Client.handleRedirectCallback());case 4:return t.next=6,regeneratorRuntime.awrap(this.auth0Client.getUser());case 6:this.user=t.sent,this.isAuthenticated=!0,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),this.error=t.t0;case 13:return t.prev=13,this.loading=!1,t.finish(13);case 16:case"end":return t.stop()}}),null,this,[[1,10,13,16]])},loginWithRedirect:function(t){return this.auth0Client.loginWithRedirect(t)},getIdTokenClaims:function(t){return this.auth0Client.getIdTokenClaims(t)},getTokenSilently:function(t){return this.auth0Client.getTokenSilently(t)},getTokenWithPopup:function(t){return this.auth0Client.getTokenWithPopup(t)},logout:function(t){return this.auth0Client.logout(t)}},created:function(){var t,e;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(xt()({domain:a.domain,client_id:a.clientId,audience:a.audience,redirect_uri:i}));case 2:if(this.auth0Client=r.sent,r.prev=3,!window.location.search.includes("code=")||!window.location.search.includes("state=")){r.next=10;break}return r.next=7,regeneratorRuntime.awrap(this.auth0Client.handleRedirectCallback());case 7:t=r.sent,e=t.appState,n(e);case 10:r.next=15;break;case 12:r.prev=12,r.t0=r["catch"](3),this.error=r.t0;case 15:return r.prev=15,r.next=18,regeneratorRuntime.awrap(this.auth0Client.isAuthenticated());case 18:return this.isAuthenticated=r.sent,r.next=21,regeneratorRuntime.awrap(this.auth0Client.getUser());case 21:return this.user=r.sent,this.loading=!1,r.finish(15);case 24:case"end":return r.stop()}}),null,this,[[3,12,15,24]])}}),Et)},Dt={install:function(t,e){t.prototype.$auth=Nt(e)}};r["a"].use(Dt,{domain:kt["b"],clientId:kt["a"],onRedirectCallback:function(t){jt.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),r["a"].config.productionTip=!1,new r["a"]({store:Ct,router:jt,render:function(t){return t(Ot)}}).$mount("#app")},"5a11":function(t,e){t.exports="data:image/png;base64,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"},"7b68":function(t,e,n){},8160:function(t){t.exports=JSON.parse('{"b":"dev-jodhjaaz.auth0.com","a":"AJTo2X8dfhpXBspvm1hscBKL4P9mnKXb"}')},"85ec":function(t,e,n){},8993:function(t,e,n){},"950b":function(t,e,n){"use strict";var r=n("deaa"),o=n.n(r);o.a},"9bb6":function(t,e,n){},b0d5:function(t,e,n){"use strict";var r=n("7b68"),o=n.n(r);o.a},b9c6:function(t,e,n){t.exports=n.p+"img/memoranDEV.fb5fe271.png"},b9cf:function(t,e,n){},c407:function(t,e,n){},ce45:function(t,e,n){"use strict";var r=n("8993"),o=n.n(r);o.a},deaa:function(t,e,n){},e20e:function(t,e,n){},ed9d:function(t,e,n){"use strict";var r=n("e20e"),o=n.n(r);o.a},efa1:function(t,e,n){"use strict";var r=n("319a"),o=n.n(r);o.a}});
//# sourceMappingURL=app.12654d2b.js.map