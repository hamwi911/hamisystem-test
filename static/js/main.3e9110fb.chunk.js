(this["webpackJsonpmovie-search-app"]=this["webpackJsonpmovie-search-app"]||[]).push([[0],{133:function(e,t,a){e.exports=a(285)},138:function(e,t,a){},140:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},141:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){e.exports=a.p+"static/media/search.7994c26c.svg"},283:function(e,t,a){},285:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(109),l=a.n(r),i=(a(138),a(139),a(140),a(141),a(44)),o=a(3),s=a(13),m=(a(142),a(46),function(e){return c.a.createElement("div",{className:"search-bar-container"},c.a.createElement("div",{className:"search-icon"},c.a.createElement("img",{src:a(143),alt:""})),c.a.createElement("input",{type:"text",placeholder:"search movie, actor, genre & etc",onChange:function(t){return e.searchMovieProp(t.target.value)}}))}),u=a(22),d=a.n(u);d.a.interceptors.request.use((function(e){return e.headers["Content-Type"]="application/json",e}),(function(e){return Promise.reject(e)})),d.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||console.error("An Expected Error Occurred"),Promise.reject(e)}));var p={get:d.a.get,post:d.a.post,put:d.a.put,delete:d.a.delete},v={baseURL:"http://www.omdbapi.com/?apiKey=9af01761"},E=function(e,t){return p.get("".concat(v.baseURL,"&s=").concat(e,"&page=").concat(t))},g=function(e){var t=e.data;return c.a.createElement(i.b,{to:"/movie/detail/".concat(t.imdbID),className:"movie-item-container"},c.a.createElement("img",{src:t.Poster,alt:""}),c.a.createElement("strong",null,t.Title),c.a.createElement("span",null,t.Year),c.a.createElement("span",null,t.Type))},f=a(290),h=function(e){var t=e.message;return c.a.createElement("div",{className:"container-animation"},c.a.createElement("img",{src:a(82),alt:""}),c.a.createElement("strong",null,t))},b=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),r=t[0],l=t[1],i=Object(n.useState)(""),o=Object(s.a)(i,2),u=o[0],d=o[1],p=Object(n.useState)(!1),v=Object(s.a)(p,2),h=v[0],b=v[1],N=Object(n.useState)(!1),j=Object(s.a)(N,2),O=j[0],S=j[1],P=Object(n.useState)(0),w=Object(s.a)(P,2),R=w[0],x=w[1],y=Object(n.useState)(0),T=Object(s.a)(y,2),V=T[0],k=T[1],F=0;return c.a.createElement("div",{className:"container"},c.a.createElement(m,{searchMovieProp:function(e){F&&clearTimeout(F),F=setTimeout((function(){k(0),d(e),S(!0),E(e,1).then((function(e){"True"===e.data.Response?(l(e.data.Search),x(parseInt(e.data.totalResults/10+1)),b(!1),S(!1)):(b(!0),S(!1),x(0))}))}),500)}}),O?c.a.createElement("div",{className:"search-loading"},c.a.createElement("img",{src:a(82),alt:""}),c.a.createElement("strong",null,"Searching Movies...")):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"movie-item-parent"},!h&&r.map((function(e,t){return console.log(R),c.a.createElement(g,{key:t,data:e})})),h?c.a.createElement("div",{className:"no-data"},c.a.createElement("strong",null,"No Movies Found ...")):c.a.createElement("div",null)),c.a.createElement("div",{className:"pagination"},c.a.createElement(f.a,{defaultActivePage:V+1,activePage:V,totalPages:R,onPageChange:function(e,t){var a=t.activePage;k(a),S(!0),E(u,a).then((function(e){l(e.data.Search),S(!1)}))}}))))},N=(a(283),function(e,t){return function(a){var r=Object(n.useState)(!1),l=Object(s.a)(r,2),i=l[0],o=l[1];return c.a.createElement(c.a.Fragment,null,i&&c.a.createElement(h,{message:t}),c.a.createElement(e,Object.assign({},a,{setLoading:function(e){o(e)}})))}}),j=a(289),O=function(e){var t;return Object(n.useEffect)((function(){})),c.a.createElement("div",null,(t=e.rating).Value.includes("/")?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"rating-title-container"},c.a.createElement("span",{className:"rating-title"},t.Source)," ",c.a.createElement("span",{className:"rating-title"},t.Value)),c.a.createElement(j.a,{value:t.Value.split("/")[0],total:t.Value.split("/")[1],progress:"ratio"})):t.Value.includes("%")?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"rating-title-container"},c.a.createElement("span",{className:"rating-title"},t.Source)," ",c.a.createElement("span",{className:"rating-title"},t.Value)),c.a.createElement(j.a,{percent:parseInt(t.Value),progress:!0})):void 0)},S=N((function(e){var t=Object(n.useState)({}),a=Object(s.a)(t,2),r=a[0],l=a[1],i=e.setLoading;return Object(n.useEffect)((function(){var t;i(!0),(t=e.match.params.id,p.get("".concat(v.baseURL,"&i=").concat(t))).then((function(e){l(e.data),i(!1)}))}),[e.id]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"movie-detail-container"},c.a.createElement("div",{className:"movie-img"},c.a.createElement("img",{src:null===r||void 0===r?void 0:r.Poster,alt:""})),c.a.createElement("div",{className:"detail"},c.a.createElement("strong",{className:"title"},null===r||void 0===r?void 0:r.Title),c.a.createElement("span",{className:"title-detail"},"Year: ",null===r||void 0===r?void 0:r.Year),c.a.createElement("span",{className:"title-detail"},"Released: ",null===r||void 0===r?void 0:r.Released),c.a.createElement("span",{className:"title-detail"},"Direction: ",null===r||void 0===r?void 0:r.Director),c.a.createElement("span",{className:"title-detail"},"Genre: ",null===r||void 0===r?void 0:r.Genre),c.a.createElement("strong",{className:"other-title"},"Actors"),c.a.createElement("span",null,null===r||void 0===r?void 0:r.Actors),c.a.createElement("strong",{className:"other-title"},"Plot"),c.a.createElement("span",null,null===r||void 0===r?void 0:r.Plot),c.a.createElement("strong",{className:"other-title"},"Rating"),r.Ratings&&(null===r||void 0===r?void 0:r.Ratings.map((function(e,t){return c.a.createElement(O,{rating:e,key:t})}))))))}),"Get Movies Detail...");var P=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(i.a,null,c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/",component:b}),c.a.createElement(o.a,{exact:!0,path:"/movie/detail/:id",component:S}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},46:function(e,t,a){},82:function(e,t,a){e.exports=a.p+"static/media/loading.822699a4.gif"}},[[133,1,2]]]);
//# sourceMappingURL=main.3e9110fb.chunk.js.map