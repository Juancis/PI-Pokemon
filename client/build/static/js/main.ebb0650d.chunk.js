(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,a){},34:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(17),r=a.n(s),i=(a(42),a(43),a(2)),l=a(6),o=a(11),j=a(20),d=a(18),u=a(4),b=a(3),p=a(14),O=a.n(p),h="GET_ALL_POKEMONS",m="GET_POKEMON_DETAIL",f="GET_POKEMON_BY_NAME",x="CLEAR_PAGE",g="GET_ALL_TYPES",v="SET_LOADING",y="DETAIL_ERROR",N="http://192.168.100.4:3001/pokemons",k=function(){return function(){var e=Object(o.a)(Object(l.a)().mark((function e(t){var a,n;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:v}),e.next=3,O.a.get(N);case 3:return a=e.sent,n=a.data,e.abrupt("return",t({type:h,payload:n}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(o.a)(Object(l.a)().mark((function t(a){var n,c;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.get("".concat(N,"?name=").concat(e));case 3:return n=t.sent,c=n.data,t.abrupt("return",a({type:f,payload:c}));case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},C=function(e){return Object(o.a)(Object(l.a)().mark((function t(){return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.post(N,e).catch();case 3:return t.abrupt("return",t.sent);case 6:return t.prev=6,t.t0=t.catch(0),t.abrupt("return",t.t0.response.data);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))},S=function(){return function(){var e=Object(o.a)(Object(l.a)().mark((function e(t){var a,n;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("http://192.168.100.4:3001/types");case 2:return a=e.sent,n=a.data,e.abrupt("return",t({type:g,payload:n}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D=a(10);a(23);function E(e){switch(e){case"bug":return"#92bc2c";case"dark":return"#595761";case"dragon":return"#0c69c8";case"electric":return"#f2d94e";case"fairy":return"#ee90e6";case"fighting":return"#d3425f";case"fire":return"#fba54c";case"flying":return"#a1bbec";case"ghost":return"#5f6dbc";case"grass":return"#5fbd58";case"ground":return"#da7c4d";case"ice":return"#75d0c1";case"normal":return"#a0a29f";case"poison":return"#b763cf";case"psychic":return"#fa8581";case"rock":return"#c9bb8a";case"steel":return"#5695a3";case"water":return"#539ddf";case"unknown":return"#9e9d99";case"shadow":return"purple";default:return"black"}}var A={bug:a.p+"static/media/bug.204df919.svg",dark:a.p+"static/media/dark.27fdc7ed.svg",dragon:a.p+"static/media/dragon.9d32757b.svg",electric:a.p+"static/media/electric.bc35c5a3.svg",fairy:a.p+"static/media/fairy.767c2f56.svg",fighting:a.p+"static/media/fighting.f20d1bd2.svg",fire:a.p+"static/media/fire.e0bd7fca.svg",flying:a.p+"static/media/flying.d1778503.svg",ghost:a.p+"static/media/ghost.ddf26831.svg",grass:a.p+"static/media/grass.e09623e3.svg",ground:a.p+"static/media/ground.e567f4fc.svg",ice:a.p+"static/media/ice.cd2f9043.svg",normal:a.p+"static/media/normal.2ba66dd5.svg",poison:a.p+"static/media/poison.43956925.svg",psychic:a.p+"static/media/psychic.67439878.svg",rock:a.p+"static/media/rock.61a8428d.svg",steel:a.p+"static/media/steel.cb91a92a.svg",water:a.p+"static/media/water.b6d13329.svg"},T=a(0),F=function(){var e=Object(D.b)(),t=Object(D.c)((function(e){return e.types})),a=Object(n.useState)(""),c=Object(b.a)(a,2),s=c[0],r=c[1],i=Object(n.useState)(!1),p=Object(b.a)(i,2),O=p[0],h=p[1],m=Object(n.useState)(""),f=Object(b.a)(m,2),x=(f[0],f[1],0),g=Object(n.useState)({name:"",hp:"",attack:"",defense:"",speed:"",height:"",weight:"",types:[],image:""}),v=Object(b.a)(g,2),y=v[0],N=v[1],k=function(e){N(Object(u.a)(Object(u.a)({},y),{},Object(d.a)({},e.target.name,e.target.value)))},w=function(){var t=Object(o.a)(Object(l.a)().mark((function t(a){return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!y.image){t.next=4;break}if(n=y.image,/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(n)){t.next=4;break}return t.abrupt("return",alert("Has to be a valid image URL"));case 4:if(!(y.height>=200||y.weight>=200||y.hp>=200)){t.next=6;break}return t.abrupt("return",alert("Life, Height and Weight must be less than 200"));case 6:return t.t0=h,t.next=9,e(C(y));case 9:if(t.t1=t.sent,(0,t.t0)(t.t1),!O.error){t.next=14;break}return N({name:"",hp:"",attack:"",defense:"",speed:"",height:"",weight:"",types:[],image:""}),t.abrupt("return",O.error);case 14:r(y),N({name:"",hp:"",attack:"",defense:"",speed:"",height:"",weight:"",types:[],image:""});case 16:case"end":return t.stop()}var n}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){e(S())}),[e]),Object(T.jsx)("div",{className:"divContainCreate",children:Object(T.jsxs)("div",{className:"divFormCreate",children:[Object(T.jsxs)("form",{className:"formCreate",onSubmit:w,children:[Object(T.jsx)("div",{style:{display:"flex",width:"100%",justifyContent:"space-around"},children:Object(T.jsx)("div",{className:"formOne",children:Object(T.jsxs)("label",{children:[Object(T.jsxs)("label",{className:"labelCreate",children:[Object(T.jsxs)("div",{children:["Name",Object(T.jsx)("span",{style:{color:"red"},children:"*"}),":"]}),Object(T.jsx)("input",{className:"inputCreate",name:"name",type:"text",value:y.name,onChange:k})]}),0===y.name.length?Object(T.jsx)("p",{children:"Tienes que llenar este campo"}):null,Object(T.jsx)("br",{}),Object(T.jsxs)("label",{className:"labelCreate",children:["Life:",Object(T.jsx)("input",{className:"inputCreate",name:"hp",type:"number",value:y.hp,onChange:k})]}),Object(T.jsx)("br",{}),Object(T.jsxs)("label",{className:"labelCreate",children:["Height:",Object(T.jsx)("input",{className:"inputCreate",name:"height",type:"number",value:y.height,onChange:k})]}),Object(T.jsx)("br",{}),Object(T.jsxs)("label",{className:"labelCreate",children:["Weight:",Object(T.jsx)("input",{className:"inputCreate",name:"weight",type:"number",value:y.weight,onChange:k})]}),Object(T.jsx)("br",{}),Object(T.jsxs)("label",{className:"labelCreate",children:["Image URL:",Object(T.jsx)("input",{className:"inputCreate",name:"image",type:"text",value:y.image,onChange:k})]}),Object(T.jsx)("br",{}),Object(T.jsxs)("label",{className:"labelCreateRange",children:[Object(T.jsx)("span",{style:{width:"61px"},children:" Attack: "}),Object(T.jsx)("input",{className:"inputOption",name:"attack",type:"range",min:"0",max:"200",value:y.attack,onChange:k}),Object(T.jsx)("span",{style:{width:"26px"},children:y.attack?y.attack:100})]}),Object(T.jsx)("br",{}),Object(T.jsxs)("label",{className:"labelCreateRange",children:[Object(T.jsx)("span",{style:{width:"61px"},children:" Defense: "}),Object(T.jsx)("input",{className:"inputOption",name:"defense",type:"range",min:"0",max:"200",value:y.defense,onChange:k}),Object(T.jsx)("span",{style:{width:"26px"},children:y.defense?y.defense:100})]}),Object(T.jsx)("br",{}),Object(T.jsxs)("label",{className:"labelCreateRange",children:[Object(T.jsx)("span",{style:{width:"61px"},children:"Speed: "}),Object(T.jsx)("input",{className:"inputOption",name:"speed",type:"range",min:"0",max:"200",value:y.speed,onChange:k}),Object(T.jsx)("span",{style:{width:"26px"},children:y.speed?y.speed:100})]}),Object(T.jsx)("br",{})]})})}),Object(T.jsxs)("div",{className:"formThree",children:[Object(T.jsx)("br",{}),Object(T.jsx)("button",{className:"buttonFormThree",disabled:0===y.name.length,type:"submit",children:"Create Pokemon!"}),Object(T.jsx)("div",{className:O.error?"buttonError":"buttonCreated",children:O.error?Object(T.jsxs)("span",{children:[" \u274c ",O.error," "]}):s?Object(T.jsx)("span",{children:" The pokemon was succesfully created! \u2714\ufe0f"}):null})]})]}),Object(T.jsx)("div",{className:"formTwo",children:Object(T.jsxs)("label",{className:"labelFormTwo",children:[Object(T.jsx)("span",{style:{paddingBottom:"10px"},children:" Select Type: "}),Object(T.jsx)("div",{className:"gridPokemonsTypes",children:t.map((function(e){return Object(T.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(T.jsx)("div",{className:y.types.some((function(t){return t===e.name}))?"typesAllPokemons selectedType":"typesAllPokemons",style:{background:E(e.name)},onClick:function(){return function(e){if(y.types.some((function(t){return t===e})))N(Object(u.a)(Object(u.a)({},y),{},{types:y.types.filter((function(t){return t!==e}))}));else{if(2===y.types.length)return alert("You can't add more than two types");N(Object(u.a)(Object(u.a)({},y),{},{types:[].concat(Object(j.a)(y.types),[e])}))}}(e.name)},children:"unknown"===e.name?Object(T.jsx)("p",{style:{color:"white",fontSize:"12px"},children:"???"}):"shadow"===e.name?Object(T.jsx)("p",{style:{color:"white",fontSize:"12px"},children:"\ud83c\udf00"}):Object(T.jsx)("img",{style:{width:"60%"},alt:x,src:A[e.name]})},x++),Object(T.jsx)("span",{children:e.name})]},e+x)}))}),Object(T.jsx)("div",{})]})})]})})},P=a(9),L=function(){var e=Object(i.e)().pathname;return Object(T.jsx)("div",{children:Object(T.jsxs)("ul",{style:{display:"flex",margin:0,padding:0},children:[Object(T.jsx)("div",{className:"/home"===e?"buttonNavBar buttonNavBarActive":"buttonNavBar",children:Object(T.jsx)(P.b,{to:"/home",className:"textNavBar",children:" Home "})}),Object(T.jsx)("div",{className:"/create"===e?"buttonNavBar buttonNavBarActive":"buttonNavBar",children:Object(T.jsx)(P.b,{to:"/create",className:"textNavBar",children:" Create Pokemon"})})]})})},B=function(){return Object(T.jsxs)("div",{children:[Object(T.jsx)("div",{className:"divNavbar",children:Object(T.jsx)(L,{})}),Object(T.jsx)("div",{children:Object(T.jsx)(F,{})})]})},R=(a(72),a.p+"static/media/psyduck.1f58b892.png"),I=function(){var e,t,a=Object(i.g)().id,c=Object(D.b)(),s=Object(i.f)(),r=Object(D.c)((function(e){return e})),j=r.pokemonDetail,d=r.loading;return Object(n.useEffect)((function(){"error"===j&&s("/error")}),[j,s]),Object(n.useEffect)((function(){return c(function(e){return function(){var t=Object(o.a)(Object(l.a)().mark((function t(a){var n,c;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:v}),t.prev=1,t.next=4,O.a.get("".concat(N,"/").concat(e));case 4:return n=t.sent,c=n.data,t.abrupt("return",a({type:m,payload:c}));case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",a({type:y}));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(a)),function(){c((function(e){return e({type:x})}))}}),[c,a]),Object(T.jsx)(T.Fragment,{children:d?Object(T.jsx)("div",{style:{width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(T.jsx)("img",{src:"https://i.gifer.com/4OKl.gif",alt:"mewloading"})}):Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("div",{className:"featuresDetails",children:Object(T.jsxs)("ul",{children:[Object(T.jsx)("h3",{style:{margin:0},children:"Stats: "}),"\u2764\ufe0fLife ",Object(T.jsxs)("div",{className:"liDetail",children:[" ",j.hp]}),"\u2694\ufe0fAttack",Object(T.jsxs)("div",{className:"liDetail",children:[" ",j.attack]}),"\ud83d\udee1\ufe0fDefense",Object(T.jsxs)("div",{className:"liDetail",children:[" ",j.defense]}),"\ud83d\udca8Speed ",Object(T.jsxs)("div",{className:"liDetail",children:[" ",j.speed]}),"\ud83d\udccfHeight ",Object(T.jsxs)("div",{className:"liDetail",children:[" ",j.height]}),"\u2696\ufe0fWeight ",Object(T.jsx)("div",{className:"liDetail",children:j.weight}),"Types: "," ",Object(T.jsxs)("div",{className:"typeDetail",children:[" ",null===(e=j.types)||void 0===e?void 0:e.join(", ").toUpperCase()]})]})}),Object(T.jsx)("div",{className:"divDetails",children:Object(T.jsxs)("div",{className:isNaN(a)?"divDetailsPsyduck":null,children:[Object(T.jsx)("h1",{className:isNaN(a)?"titleDetailsPsyduck":"titleDetails",children:"".concat(null===(t=j.name)||void 0===t?void 0:t.toUpperCase()," ").concat(isNaN(a)?"#Custom":1===a.length?"#00".concat(a):2===a.length?"#0".concat(a):"#".concat(a),"  ")}),Object(T.jsx)("img",{className:"default"===j.image?"imageDetailsPsyduck":"imageDetails",src:"default"===j.image?R:j.image,alt:"".concat(j.id)})]})})]})})},_=function(){return Object(T.jsxs)("div",{children:[Object(T.jsx)("div",{className:"divNavbar",style:{margin:0,padding:0,paddingTop:"13px",paddingBottom:"13px"},children:Object(T.jsx)(L,{})}),Object(T.jsx)("div",{className:"divDetailsContains",children:Object(T.jsx)(I,{})})]})};function G(e){var t=e.name,a=e.image,n=e.types,c=e.id,s=e.attack,r=0;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("h3",{children:t.toUpperCase()}),Object(T.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",textDecoration:"none"},children:Object(T.jsx)("img",{style:{height:isNaN(c)?"90px":"inherit"},src:"default"===a?R:a,alt:"".concat(c+t)})}),Object(T.jsx)("div",{children:Object(T.jsx)("strong",{children:Object(T.jsxs)("span",{children:["\u2694\ufe0f: ",s]})})}),Object(T.jsx)("div",{className:"typeFlex",children:n.map((function(e){return Object(T.jsxs)("div",{className:"typesAllPokemons",style:{background:E(e)},children:["unknown"===e?Object(T.jsx)("p",{style:{color:"white",fontSize:"12px"},children:"???"}):"shadow"===e?Object(T.jsx)("p",{style:{color:"white",fontSize:"12px"},children:"\ud83c\udf00"}):Object(T.jsx)("img",{style:{width:"60%"},alt:t+c,src:A[e]})," "]},r++)}))})]})}a(34);function M(e){var t=e.setFilterByType,a=e.setFiltersByCustom,c=e.found,s=e.notFound,r=Object(D.b)(),i=Object(n.useState)(""),j=Object(b.a)(i,2),d=j[0],u=j[1],p=Object(D.c)((function(e){return e.pokemons})),O=function(){var e=Object(o.a)(Object(l.a)().mark((function e(n){return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a({pokemons:"all"}),t({type:""}),e.t0=s,e.next=6,r(w(d));case 6:e.t1=e.sent,(0,e.t0)(e.t1),u("");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(T.jsxs)(T.Fragment,{children:[1===p.length?Object(T.jsx)("button",{className:"showAllButton",onClick:function(){r(k())},children:"Show all"}):null,Object(T.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(T.jsx)("div",{className:"pokemonNotFound",children:c.error?Object(T.jsx)("span",{className:"pokemonNotFoundLetter",children:"The Pokemon was not found."}):null}),Object(T.jsxs)("form",{onSubmit:O,children:[Object(T.jsx)("label",{children:Object(T.jsx)("input",{className:"searchInput",type:"text",name:"pokemon",required:!0,placeholder:"Search...",value:d,onChange:function(e){e.preventDefault(),u(e.target.value)}})}),Object(T.jsx)("button",{className:"buttonSearchBar",type:"submit",value:"SEARCH",children:"Search"})]})]})]})}var H=function(){var e=Object(D.b)(),t=Object(D.c)((function(e){return e})),a=t.pokemons,c=t.loading,s=t.types,r=Object(n.useState)([]),i=Object(b.a)(r,2),l=i[0],o=i[1],d=Object(n.useState)([]),u=Object(b.a)(d,2),p=u[0],O=u[1],h=Object(n.useState)(1),m=Object(b.a)(h,2),f=m[0],x=m[1],g=Object(n.useState)([]),v=Object(b.a)(g,2),y=v[0],N=v[1],w=Object(n.useState)(""),C=Object(b.a)(w,2),E=C[0],A=C[1],F=0,B=Object(n.useState)([]),R=Object(b.a)(B,2),I=R[0],_=R[1],H=Object(n.useState)([]),U=Object(b.a)(H,2),Z=U[0],K=U[1],W=Object(n.useState)([]),z=Object(b.a)(W,2),Y=z[0],q=z[1],J=Object(n.useState)({pokemons:"all"}),Q=Object(b.a)(J,2),V=Q[0],X=Q[1],$=Object(n.useState)({type:""}),ee=Object(b.a)($,2),te=ee[0],ae=ee[1],ne=Object(n.useState)({ordenamiento:""}),ce=Object(b.a)(ne,2),se=ce[0],re=ce[1],ie=function(e){X({pokemons:e.target.value}),x(1)};return Object(n.useEffect)((function(){var e,t;_((e=a,"custom"===(t=V).pokemons?e.filter((function(e){return isNaN(e.id)})):"originals"===t.pokemons?e.filter((function(e){return!isNaN(e.id)})):"all"===t.pokemons?e:void 0)),A("")}),[V,a]),Object(n.useEffect)((function(){var e,t;A(""),K((e=I,"All"===(t=te).type?e:t.type?e.filter((function(e){return e.types.includes(t.type)})):e))}),[I,te]),Object(n.useEffect)((function(){q(Object(j.a)(function(e,t){return"ZtoA"===t.ordenamiento?(e.sort((function(e,t){var a=e.name.toLowerCase(),n=t.name.toLowerCase();return a>n?-1:a<n?1:0})),e):"AtoZ"===t.ordenamiento?(e.sort((function(e,t){var a=e.name.toLowerCase(),n=t.name.toLowerCase();return a<n?-1:a>n?1:0})),e):"higher"===t.ordenamiento?(e.sort((function(e,t){return e.attack>t.attack?-1:e.attack<t.attack?1:0})),e):"lower"===t.ordenamiento?(e.sort((function(e,t){return e.attack<t.attack?-1:e.attack>t.attack?1:0})),e):e}(Z,se)))}),[Z,se]),Object(n.useEffect)((function(){var e;o((e=f,Y.slice(12*(e-1),12*e))),N(function(e){for(var t=[],a=0;e>0;)e-=12,t.push(++a);return t}(Y.length))}),[Y,f]),Object(n.useEffect)((function(){e(k()),e(S())}),[e]),Object(n.useEffect)((function(){O(s)}),[s]),Object(T.jsxs)("div",{className:"divContainer",children:[Object(T.jsxs)("div",{className:"divNavbar",children:[Object(T.jsx)(L,{}),Object(T.jsx)(M,{setFiltersByCustom:X,setFilterByType:ae,found:E,notFound:A})]}),Object(T.jsxs)("div",{className:"divFilter",children:[Object(T.jsxs)("div",{className:"filter",children:[Object(T.jsxs)("label",{children:[Object(T.jsx)("input",{type:"radio",name:"filter",value:"custom",onChange:ie}),"Custom"]}),Object(T.jsxs)("label",{children:[Object(T.jsx)("input",{type:"radio",name:"filter",value:"all",onChange:ie}),"All"]}),Object(T.jsxs)("label",{children:[Object(T.jsx)("input",{type:"radio",name:"filter",value:"originals",onChange:ie}),"Original Pokemons"]})]}),Object(T.jsx)("div",{className:"divSelectTypes",children:Object(T.jsxs)("label",{className:"labelFilter",children:[Object(T.jsxs)("select",{className:"selectFilter",name:"filter",onChange:function(e){ae({type:e.target.value}),x(1)},children:[p.map((function(e){return Object(T.jsxs)("option",{children:[" ",e.name," "]},F++)})),Object(T.jsx)("option",{children:"All"})]}),"Select one type:"]})}),Object(T.jsxs)("div",{className:"divOrder",children:[Object(T.jsx)("form",{children:Object(T.jsxs)("select",{className:"selectOrder",name:"order",onChange:function(e){re({ordenamiento:e.target.value})},children:[Object(T.jsx)("option",{value:"AtoZ",children:"Name: from A to Z"}),Object(T.jsx)("option",{value:"ZtoA",children:"Name: from Z to A"}),Object(T.jsx)("option",{value:"higher",children:"Attack: higher attack points"}),Object(T.jsx)("option",{value:"lower",children:"Attack: lower attack points"})]})}),Object(T.jsx)("span",{children:"Order! "})]})]}),Object(T.jsx)("div",{className:"divPokemons",children:c?Object(T.jsx)("div",{children:Object(T.jsx)("img",{src:"https://i.gifer.com/4OKl.gif",alt:"loading",style:{display:"flex",justifyContent:"center"}})}):l.length?l.map((function(e){return Object(T.jsx)("div",{className:"divPokemonCard",children:Object(T.jsx)("div",{className:"pokemonCard",children:Object(T.jsx)(P.b,{to:"/pokemon/".concat(e.id),className:"pokemonFlex",children:Object(T.jsx)(G,{name:e.name,image:e.image,types:e.types,attack:e.attack,id:e.id})})},e.id)},e.id)})):Object(T.jsx)("div",{className:"nopokemons",children:"Oops! No Pokemons with this filter :( "})}),Y.length>13&&Object(T.jsxs)("div",{className:"divPagination",children:[Object(T.jsx)("button",{className:"pagination",onClick:function(){return x((function(e){return e-1}))},hidden:1===f,children:"<"}),y.map((function(e){return Object(T.jsx)("button",{className:e===f?"pagination pagination-active":"pagination",onClick:function(){return x(e)},children:e},e)})),Object(T.jsx)("button",{className:"pagination",onClick:function(){return x((function(e){return e+1}))},hidden:Math.ceil(Y.length/12)===f,children:">"})]})]})},U=(a(73),function(){return Object(T.jsx)("div",{className:"landing",children:Object(T.jsx)(P.b,{to:"/home",className:"landingButton",children:Object(T.jsx)("h4",{className:"homehome",children:"HOME"})})})}),Z=a.p+"static/media/notfoundpage1.80f632eb.jpg",K=(a(74),function(){return Object(T.jsxs)("div",{className:"divNotFoundPage",style:{backgroundImage:"url(".concat(Z,")")},children:[Object(T.jsx)("div",{className:"centernfp",children:Object(T.jsx)("h3",{style:{margin:0},className:"letterNotFoundPage",children:"404 //  NOT FOUND PAGE"})}),Object(T.jsxs)("div",{className:"bottomnfp",children:[Object(T.jsx)(P.b,{style:{textDecoration:"none"},to:"/home",children:Object(T.jsx)("h6",{className:"letterNotFoundPage",children:"RETURN TO HOME PAGE"})}),Object(T.jsx)(P.b,{style:{textDecoration:"none"},to:"/",children:Object(T.jsx)("h6",{className:"letterNotFoundPage",children:"RETURN TO LANDING PAGE"})})]})]})});var W=function(){return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(i.c,{children:[Object(T.jsx)(i.a,{exact:!0,path:"/",element:Object(T.jsx)(U,{})}),Object(T.jsx)(i.a,{path:"/home",element:Object(T.jsx)(H,{})}),Object(T.jsx)(i.a,{path:"/pokemon/:id",element:Object(T.jsx)(_,{})}),Object(T.jsx)(i.a,{path:"/create",element:Object(T.jsx)(B,{})}),Object(T.jsx)(i.a,{path:"*",element:Object(T.jsx)(K,{})})]})})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,77)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))},Y=a(19),q={pokemons:[],types:[],pokemonDetail:{},loading:!0},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(u.a)(Object(u.a)({},e),{},{pokemons:t.payload,loading:!1});case f:return Object(u.a)(Object(u.a)({},e),{},{pokemons:[t.payload]});case m:return Object(u.a)(Object(u.a)({},e),{},{pokemonDetail:t.payload,loading:!1});case g:return Object(u.a)(Object(u.a)({},e),{},{types:t.payload});case x:return Object(u.a)(Object(u.a)({},e),{},{pokemonDetail:{}});case v:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case y:return Object(u.a)(Object(u.a)({},e),{},{pokemonDetail:"error",loading:!1});default:return Object(u.a)({},e)}},Q=a(37),V=a(36),X=Object(Y.createStore)(J,Object(V.composeWithDevTools)(Object(Y.applyMiddleware)(Q.a)));r.a.render(Object(T.jsx)(c.a.StrictMode,{children:Object(T.jsx)(D.a,{store:X,children:Object(T.jsx)(P.a,{children:Object(T.jsx)(W,{})})})}),document.getElementById("root")),z()}},[[75,1,2]]]);
//# sourceMappingURL=main.ebb0650d.chunk.js.map