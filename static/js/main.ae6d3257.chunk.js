(this["webpackJsonpmovie-api"]=this["webpackJsonpmovie-api"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),r=c.n(n),s=c(5),i=c.n(s),o=(c(12),c(13),c(3)),l=c.n(o),u=c(6),j=c(4);var d=function(e){return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("img",{className:"card--image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(e.movie.poster_path),alt:e.movie.title+" poster"}),Object(a.jsxs)("div",{className:"card--content",children:[Object(a.jsx)("h3",{className:"card--title",children:e.movie.title}),Object(a.jsxs)("p",{children:[Object(a.jsxs)("small",{children:["RELEASE DATE: ",e.movie.release_date]}),Object(a.jsxs)("small",{children:["RATING: ",e.movie.vote_average]})]}),Object(a.jsx)("p",{className:"card--description",children:e.movie.overview})]})]})};var m=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),i=Object(j.a)(s,2),o=i[0],m=i[1],b=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a="https://api.themoviedb.org/3/search/movie?api_key=177802aa40ea259e6830e4e66db20e11&language=en-US&query=".concat(c,"&page=1&include_adult=false"),e.prev=2,e.next=5,fetch(a);case 5:return n=e.sent,e.next=8,n.json();case 8:r=e.sent,m(r.results),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("form",{className:"form",onSubmit:b,children:[Object(a.jsx)("label",{htmlFor:"query",className:"label",children:"Search a Movie"}),Object(a.jsx)("input",{onChange:function(e){return r(e.target.value)},type:"text",name:"query",placeholder:"Type In A Movie Name",value:c}),Object(a.jsx)("button",{className:"button",type:"submit",children:"Search"})]}),Object(a.jsx)("div",{className:"card-list",children:o.filter((function(e){return e.poster_path})).map((function(e){return Object(a.jsx)(d,{movie:e},e.id)}))})]})};var b=function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{className:"title",children:"React Movie Search"}),Object(a.jsx)(m,{})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.ae6d3257.chunk.js.map