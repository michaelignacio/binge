(this.webpackJsonpbinge=this.webpackJsonpbinge||[]).push([[0],{43:function(e,t,a){e.exports=a(53)},48:function(e,t,a){},49:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),i=(a(48),a(25)),l=a(26),s=(a(49),function(e){return r.a.createElement("header",{className:"App-header"},r.a.createElement("h2",null,e.text))}),m=a(83),u=a(85),E=a(86),p=a(92),d=a(87),h=a(88),f=a(80),g=Object(f.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})),S=function(e){var t=e.movie,a=g(),n="N/A"===t.Poster?"https://via.placeholder.com/200x270":t.Poster;return r.a.createElement(m.a,{item:!0,xs:12,sm:6,md:3,className:a.paper},r.a.createElement(u.a,{className:"movie"},r.a.createElement(E.a,null,r.a.createElement(p.a,{title:t.Title,titleTypographyProps:{variant:"h6"}}),r.a.createElement(d.a,null,r.a.createElement("img",{width:"200",alt:"The movie titled: ".concat(t.Title),src:n})),r.a.createElement(h.a,null,r.a.createElement("p",null,"(",t.Year,")")))))},v=a(91),b=a(89),y=Object(f.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:200,marginTop:30,marginBottom:30}}}})),w=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),o=a[0],c=a[1],l=y();return r.a.createElement("form",{className:l.root},r.a.createElement(v.a,{id:"standard-basic",value:o,onChange:function(e){c(e.target.value)},type:"text",placeholder:"Type title here..."}),r.a.createElement(b.a,{variant:"contained",color:"primary",onClick:function(t){t.preventDefault(),e.search(o),c("")},type:"submit",value:"SEARCH"},"Watch!"))},O=a(90),C={loading:!0,movies:[],errorMessage:null},A=function(e,t){switch(t.type){case"SEARCH_MOVIES_REQUEST":return Object(l.a)({},e,{loading:!0,errorMessage:null});case"SEARCH_MOVIES_SUCCESS":return Object(l.a)({},e,{loading:!1,movies:t.payload});case"SEARCH_MOVIES_FAILURE":return Object(l.a)({},e,{loading:!1,errorMessage:t.error});default:return e}},R=function(){var e=Object(n.useReducer)(A,C),t=Object(i.a)(e,2),a=t[0],o=t[1];Object(n.useEffect)((function(){fetch("https://www.omdbapi.com/?s=man&apikey=4a3b711b").then((function(e){return e.json()})).then((function(e){o({type:"SEARCH_MOVIES_SUCCESS",payload:e.Search})}))}),[]);var c=a.movies,l=a.errorMessage,m=a.loading;return r.a.createElement("div",{className:"App"},r.a.createElement(s,{text:"BINGE"}),r.a.createElement(w,{search:function(e){o({type:"SEARCH_MOVIES_REQUEST"}),fetch("https://www.omdbapi.com/?s=".concat(e,"&apikey=4a3b711b")).then((function(e){return e.json()})).then((function(e){"True"===e.Response?o({type:"SEARCH_MOVIES_SUCCESS",payload:e.Search}):o({type:"SEARCH_MOVIES_FAILURE",error:e.Error})}))}}),r.a.createElement(O.a,{maxWidth:"lg",className:"movies"},m&&!l?r.a.createElement("span",null,"loading... "):l?r.a.createElement("div",{className:"errorMessage"},l):c.slice(0,8).map((function(e,t){return r.a.createElement(S,{key:"".concat(t,"-").concat(e.Title),movie:e})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.c3ca38aa.chunk.js.map