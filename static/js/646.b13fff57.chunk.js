"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[646],{6713:function(n,e,t){t.d(e,{Hg:function(){return s},M1:function(){return u},YJ:function(){return o},tx:function(){return d},zi:function(){return c}});var r=t(4165),a=t(5861),i=t(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/",i.Z.defaults.params={api_key:"82214decc1420629edfae943aabed99c",language:"en-US"};var s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var e,t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/week");case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie",{params:{query:e}});case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e));case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/credits"));case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/reviews"));case 2:return t=n.sent,a=t.data,console.log("data :>> ",a),n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},6850:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var r,a,i,s,c,o,u,d,p,l,f=t(4165),h=t(5861),x=t(9439),v=t(6713),Z=t(2791),g=t(7689),m=t(1087),b=t(168),j=t(225),w=j.Z.div(r||(r=(0,b.Z)(["\ndisplay:flex;\ngap:40px;\nborder-bottom: 1px solid gray;  \npadding-bottom:20px;\npadding-top:20px;\n"]))),k=j.Z.div(a||(a=(0,b.Z)(["\n\nwidth:300px;\nheight:auto;\n\n\n"]))),y=j.Z.div(i||(i=(0,b.Z)(["\ndisplay: block;\nwidth:300px;\nheight:auto;\n\n\n"]))),_=j.Z.button(s||(s=(0,b.Z)(["\nbackground-color: transparent;\nborder:transparent;\nmargin-bottom:10px;\nmargin-left:10px;\n\n&:hover {\n    color: #ff7f7f;\n}\n\n"]))),S=j.Z.div(c||(c=(0,b.Z)(["\npadding-top:24px;"]))),C=j.Z.div(o||(o=(0,b.Z)(["\ndisplay:flex;\ngap:16px;"]))),L=j.Z.div(u||(u=(0,b.Z)(["\ncursor: pointer;"]))),O=j.Z.div(d||(d=(0,b.Z)(["\npadding-top: 20px;\npadding-bottom: 20px;\nborder-bottom: 1px solid gray; "]))),U=j.Z.ul(p||(p=(0,b.Z)(["\ndisplay:flex;\nflex-direction:column;\ngap:16px; "]))),A=(j.Z.div(l||(l=(0,b.Z)(["\nbackground-image:url()\n    "]))),t(8185)),R=t.p+"static/media/AdobeStock_447837284_Preview.2147b20adb8bd6b7c56b.jpeg",G=t(184),H=function(){var n,e=(0,g.UO)().movieId,t=(0,Z.useState)(""),r=(0,x.Z)(t,2),a=r[0],i=r[1],s=(0,Z.useState)(),c=(0,x.Z)(s,2),o=c[0],u=c[1],d=(0,Z.useState)(""),p=(0,x.Z)(d,2),l=p[0],b=p[1],j=(0,Z.useState)([]),H=(0,x.Z)(j,2),J=H[0],M=H[1],Y=(0,Z.useState)(""),q=(0,x.Z)(Y,2),z=q[0],E=q[1],F=(0,Z.useState)(),I=(0,x.Z)(F,2),P=I[0],T=I[1],B=(0,g.TH)(),D=(0,g.s0)(),K=(0,Z.useRef)(null!==(n=B.state)&&void 0!==n?n:"/");(0,Z.useEffect)((function(){console.log(R);var n=function(){var n=(0,h.Z)((0,f.Z)().mark((function n(){var t,r,a,s,c,o,d;return(0,f.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,v.YJ)(e);case 3:t=n.sent,r=t.poster_path,a=t.title,s=t.overview,c=t.vote_average,o=t.release_date,d=t.genres,b(r?"https://image.tmdb.org/t/p/original"+r:R),i(a),u(o.split("-")[0]),T("".concat(Math.round(10*c),"%")),E(s),M(d),n.next=21;break;case 18:n.prev=18,n.t0=n.catch(0),console.log(n.t0.message);case 21:case"end":return n.stop()}}),n,null,[[0,18]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]);return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(w,{children:[(0,G.jsxs)(k,{children:[(0,G.jsxs)(L,{onClick:function(){D(K.current)},children:[(0,G.jsx)(A.And,{}),(0,G.jsx)(_,{type:"button",children:"Go back"})]}),(0,G.jsx)(y,{children:(0,G.jsx)("img",{src:l,alt:a})})]}),(0,G.jsxs)(S,{children:[(0,G.jsxs)("h3",{children:[a," (",o,")"]}),(0,G.jsxs)("p",{children:["User Score: ",P]}),(0,G.jsx)("h4",{children:"Overview"}),(0,G.jsx)("p",{children:z}),(0,G.jsx)("h4",{children:"Genres"}),(0,G.jsx)(C,{children:J.map((function(n){return(0,G.jsx)("li",{children:n.name},n.id)}))})]})]}),(0,G.jsxs)(O,{children:[(0,G.jsx)("h5",{children:"Additional information"}),(0,G.jsxs)(U,{children:[(0,G.jsx)("li",{children:(0,G.jsx)(m.OL,{to:"/movies/".concat(e,"/cast"),children:"Cast"})}),(0,G.jsx)("li",{children:(0,G.jsx)(m.OL,{to:"/movies/".concat(e,"/reviews"),children:"Reviews"})})]})]}),(0,G.jsx)(Z.Suspense,{fallback:(0,G.jsx)("div",{children:"Loading..."}),children:(0,G.jsx)(g.j3,{})})]})}}}]);
//# sourceMappingURL=646.b13fff57.chunk.js.map