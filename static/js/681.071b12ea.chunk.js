"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[681],{6713:function(n,e,t){t.d(e,{Hg:function(){return i},M1:function(){return u},YJ:function(){return o},tx:function(){return p},zi:function(){return c}});var r=t(4165),a=t(5861),s=t(1243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.params={api_key:"82214decc1420629edfae943aabed99c",language:"en-US"};var i=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var e,t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("trending/movie/week");case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("search/movie",{params:{query:e}});case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("movie/".concat(e));case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("movie/".concat(e,"/credits"));case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("movie/".concat(e,"/reviews"));case 2:return t=n.sent,a=t.data,console.log("data :>> ",a),n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},4681:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,a,s,i,c,o,u,p,d=t(4165),l=t(5861),f=t(9439),x=t(6713),h=t(2791),v=t(7689),Z=t(1087),g=t(168),m=t(225),j=m.Z.div(r||(r=(0,g.Z)(["\ndisplay:flex;\ngap:40px;\nborder-bottom: 1px solid gray;  \npadding-bottom:20px;\npadding-top:20px;\n"]))),b=m.Z.div(a||(a=(0,g.Z)(["\n\nwidth:700px;\nheight:auto;\n\n\n"]))),w=m.Z.button(s||(s=(0,g.Z)(["\nbackground-color: transparent;\nborder:transparent;\nmargin-bottom:10px;\nmargin-left:10px;\n\n&:hover {\n    color: #ff7f7f;\n}\n\n"]))),k=m.Z.div(i||(i=(0,g.Z)(["\npadding-top:24px;"]))),y=m.Z.div(c||(c=(0,g.Z)(["\ndisplay:flex;\ngap:16px;"]))),_=m.Z.div(o||(o=(0,g.Z)(["\ncursor: pointer;"]))),S=m.Z.div(u||(u=(0,g.Z)(["\npadding-top: 20px;\npadding-bottom: 20px;\nborder-bottom: 1px solid gray; "]))),C=m.Z.ul(p||(p=(0,g.Z)(["\ndisplay:flex;\nflex-direction:column;\ngap:16px; "]))),L=t(8185),O=t(184),U=function(){var n,e=(0,v.UO)().movieId,t=(0,h.useState)(""),r=(0,f.Z)(t,2),a=r[0],s=r[1],i=(0,h.useState)(),c=(0,f.Z)(i,2),o=c[0],u=c[1],p=(0,h.useState)(""),g=(0,f.Z)(p,2),m=g[0],U=g[1],R=(0,h.useState)([]),A=(0,f.Z)(R,2),G=A[0],H=A[1],J=(0,h.useState)(""),M=(0,f.Z)(J,2),Y=M[0],q=M[1],z=(0,h.useState)(),E=(0,f.Z)(z,2),F=E[0],I=E[1],T=(0,v.TH)(),B=(0,v.s0)(),D=(0,h.useRef)(null!==(n=T.state)&&void 0!==n?n:"/");(0,h.useEffect)((function(){var n=function(){var n=(0,l.Z)((0,d.Z)().mark((function n(){var t,r,a,i,c,o,p;return(0,d.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,x.YJ)(e);case 3:t=n.sent,r=t.poster_path,a=t.title,i=t.overview,c=t.vote_average,o=t.release_date,p=t.genres,U("https://image.tmdb.org/t/p/original"+r),s(a),u(o.split("-")[0]),I("".concat(Math.round(10*c),"%")),q(i),H(p),n.next=21;break;case 18:n.prev=18,n.t0=n.catch(0),console.log(n.t0.message);case 21:case"end":return n.stop()}}),n,null,[[0,18]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(j,{children:[(0,O.jsxs)(b,{children:[(0,O.jsxs)(_,{onClick:function(){B(D.current)},children:[(0,O.jsx)(L.And,{}),(0,O.jsx)(w,{type:"button",children:"Go back"})]}),(0,O.jsx)("img",{src:m,alt:a})]}),(0,O.jsxs)(k,{children:[(0,O.jsxs)("h3",{children:[a," (",o,")"]}),(0,O.jsxs)("p",{children:["User Score: ",F]}),(0,O.jsx)("h4",{children:"Overview"}),(0,O.jsx)("p",{children:Y}),(0,O.jsx)("h4",{children:"Genres"}),(0,O.jsx)(y,{children:G.map((function(n){return(0,O.jsx)("li",{children:n.name},n.id)}))})]})]}),(0,O.jsxs)(S,{children:[(0,O.jsx)("h5",{children:"Additional information"}),(0,O.jsxs)(C,{children:[(0,O.jsx)("li",{children:(0,O.jsx)(Z.OL,{to:"/movies/".concat(e,"/cast"),children:"Cast"})}),(0,O.jsx)("li",{children:(0,O.jsx)(Z.OL,{to:"/movies/".concat(e,"/reviews"),children:"Reviews"})})]})]}),(0,O.jsx)(h.Suspense,{fallback:(0,O.jsx)("div",{children:"Loading..."}),children:(0,O.jsx)(v.j3,{})})]})}}}]);
//# sourceMappingURL=681.071b12ea.chunk.js.map