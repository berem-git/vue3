(function(t){function e(e){for(var n,s,a=e[0],u=e[1],i=e[2],d=0,p=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(p.length)p.shift()();return c.push.apply(c,i||[]),o()}function o(){for(var t,e=0;e<c.length;e++){for(var o=c[e],n=!0,a=1;a<o.length;a++){var u=o[a];0!==r[u]&&(n=!1)}n&&(c.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},r={app:0},c=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue3/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var i=0;i<a.length;i++)e(a[i]);var l=u;c.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0035":function(t,e,o){"use strict";o("d5b2")},"117f":function(t,e,o){"use strict";o("ee8e")},"2f50":function(t,e,o){"use strict";o("f420")},"38c9":function(t,e,o){"use strict";o("79ae")},"50cc":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("159b"),o("b0c0");var n=o("7a23"),r={class:"app"};function c(t,e,o,c,s,a){var u=Object(n["z"])("navbar"),i=Object(n["z"])("router-view");return Object(n["r"])(),Object(n["e"])(n["a"],null,[Object(n["h"])(u),Object(n["h"])("div",r,[Object(n["h"])(i)])],64)}var s=Object(n["J"])("data-v-02877df6");Object(n["u"])("data-v-02877df6");var a={class:"navbar"},u={class:"navbar__btns"},i=Object(n["g"])("Посты"),l=Object(n["g"])("О сайте"),d=Object(n["g"])("store"),p=Object(n["g"])("Composition");Object(n["s"])();var b=s((function(t,e,o,r,c,b){var f=Object(n["z"])("my-button");return Object(n["r"])(),Object(n["e"])("div",a,[Object(n["h"])("div",{onClick:e[1]||(e[1]=function(e){return t.$router.push("/")})},"Vue 3"),Object(n["h"])("div",u,[Object(n["h"])(f,{onClick:e[2]||(e[2]=function(e){return t.$router.push("/posts")})},{default:s((function(){return[i]})),_:1}),Object(n["h"])(f,{style:{"margin-left":"20px"},onClick:e[3]||(e[3]=function(e){return t.$router.push("/about")})},{default:s((function(){return[l]})),_:1}),Object(n["h"])(f,{style:{"margin-left":"20px"},onClick:e[4]||(e[4]=function(e){return t.$router.push("/store")})},{default:s((function(){return[d]})),_:1}),Object(n["h"])(f,{style:{"margin-left":"20px"},onClick:e[5]||(e[5]=function(e){return t.$router.push("/composition")})},{default:s((function(){return[p]})),_:1})])])})),f={};o("683a");f.render=b,f.__scopeId="data-v-02877df6";var O=f,j={components:{Navbar:O}};o("dc52");j.render=c;var h=j,v=Object(n["J"])("data-v-4a35233b");Object(n["u"])("data-v-4a35233b");var m={class:"btn"};Object(n["s"])();var g=v((function(t,e,o,r,c,s){return Object(n["r"])(),Object(n["e"])("button",m,[Object(n["y"])(t.$slots,"default",{},void 0,!0)])})),y={name:"my-button"};o("0035");y.render=g,y.__scopeId="data-v-4a35233b";var P=y,_=Object(n["J"])("data-v-0c401ab1"),w=_((function(t,e,o,r,c,s){return Object(n["r"])(),Object(n["e"])("input",{value:o.modelValue,onInput:e[1]||(e[1]=function(){return s.updateInput&&s.updateInput.apply(s,arguments)}),class:"input",type:"text"},null,40,["value"])})),S=(o("a9e3"),{name:"my-input",props:{modelValue:[String,Number]},methods:{updateInput:function(t){this.$emit("update:modelValue",t.target.value)}}});o("117f");S.render=w,S.__scopeId="data-v-0c401ab1";var V=S,k=Object(n["J"])("data-v-3f4386d6"),x=k((function(t,e,o,r,c,s){return t.show?(Object(n["r"])(),Object(n["e"])("div",{key:0,class:"dialog",onClick:e[2]||(e[2]=Object(n["I"])((function(){return t.hideDialog&&t.hideDialog.apply(t,arguments)}),["stop"]))},[Object(n["h"])("div",{onClick:e[1]||(e[1]=Object(n["I"])((function(){}),["stop"])),class:"dialog__content"},[Object(n["y"])(t.$slots,"default",{},void 0,!0)])])):Object(n["f"])("",!0)})),C={props:{show:{type:Boolean,default:!1}},methods:{hideDialog:function(){this.$emit("update:show",!1)}},mounted:function(){console.log("mixin mounted")}},M={name:"my-dialog",mixins:[C],mounted:function(){console.log("dialog mounted")}};o("98df");M.render=x,M.__scopeId="data-v-3f4386d6";var z=M,I=[P,V,z],L=Object(n["J"])("data-v-7279e4c0");Object(n["u"])("data-v-7279e4c0");var A=Object(n["h"])("h1",null,"Main",-1);Object(n["s"])();var Q=L((function(t,e,o,r,c,s){return Object(n["r"])(),Object(n["e"])("div",null,[A])})),R={};R.render=Q,R.__scopeId="data-v-7279e4c0";var $=R,U=o("6c02"),J=Object(n["h"])("h1",null,"Страница с постами",-1),D={class:"app__btns"},H=Object(n["g"])(" Создать пользователя "),G={key:1},T={class:"observer"};function B(t,e,o,r,c,s){var a=Object(n["z"])("my-input"),u=Object(n["z"])("my-button"),i=Object(n["z"])("my-select"),l=Object(n["z"])("post-form"),d=Object(n["z"])("my-dialog"),p=Object(n["z"])("post-list"),b=Object(n["A"])("focus"),f=Object(n["A"])("intersection");return Object(n["r"])(),Object(n["e"])("div",null,[J,Object(n["H"])(Object(n["h"])(a,{modelValue:c.searchQuery,"onUpdate:modelValue":e[1]||(e[1]=function(t){return c.searchQuery=t}),placeholder:"Поиск...."},null,8,["modelValue"]),[[b]]),Object(n["h"])("div",D,[Object(n["h"])(u,{onClick:s.showDialog},{default:Object(n["G"])((function(){return[H]})),_:1},8,["onClick"]),Object(n["h"])(i,{modelValue:c.selectedSort,"onUpdate:modelValue":e[2]||(e[2]=function(t){return c.selectedSort=t}),options:c.sortOptions},null,8,["modelValue","options"])]),Object(n["h"])(d,{show:c.dialogVisible,"onUpdate:show":e[3]||(e[3]=function(t){return c.dialogVisible=t})},{default:Object(n["G"])((function(){return[Object(n["h"])(l,{onCreate:s.createPost},null,8,["onCreate"])]})),_:1},8,["show"]),c.isPostsLoading?(Object(n["r"])(),Object(n["e"])("div",G,"Идет загрузка...")):(Object(n["r"])(),Object(n["e"])(p,{key:0,posts:s.sortedAndSearchedPosts,onRemove:s.removePost},null,8,["posts","onRemove"])),Object(n["H"])(Object(n["h"])("div",T,null,512),[[f,s.loadMorePosts]])])}var E=o("2909"),F=o("1da1"),q=(o("96cf"),o("4de4"),o("99af"),o("4e82"),o("caad"),o("2532"),Object(n["J"])("data-v-381b695e"));Object(n["u"])("data-v-381b695e");var N=Object(n["h"])("h4",null,"Создание поста",-1),K=Object(n["g"])(" Создать ");Object(n["s"])();var W=q((function(t,e,o,r,c,s){var a=Object(n["z"])("my-input"),u=Object(n["z"])("my-button"),i=Object(n["A"])("focus");return Object(n["r"])(),Object(n["e"])("form",{onSubmit:e[3]||(e[3]=Object(n["I"])((function(){}),["prevent"]))},[N,Object(n["H"])(Object(n["h"])(a,{modelValue:c.post.title,"onUpdate:modelValue":e[1]||(e[1]=function(t){return c.post.title=t}),type:"text",placeholder:"Название"},null,8,["modelValue"]),[[i]]),Object(n["h"])(a,{modelValue:c.post.body,"onUpdate:modelValue":e[2]||(e[2]=function(t){return c.post.body=t}),type:"text",placeholder:"Описание"},null,8,["modelValue"]),Object(n["h"])(u,{style:{"align-self":"flex-end","margin-top":"15px"},onClick:s.createPost},{default:q((function(){return[K]})),_:1},8,["onClick"])],32)})),X={data:function(){return{post:{title:"",body:""}}},methods:{createPost:function(){this.post.id=Date.now(),this.$emit("create",this.post),this.post={title:"",body:""}}}};o("9a93");X.render=W,X.__scopeId="data-v-381b695e";var Y=X,Z=Object(n["J"])("data-v-df55615e");Object(n["u"])("data-v-df55615e");var tt={key:0},et=Object(n["h"])("h3",null,"Список пользователей",-1),ot={key:1,style:{color:"red"}};Object(n["s"])();var nt=Z((function(t,e,o,r,c,s){var a=Object(n["z"])("post-item");return o.posts.length>0?(Object(n["r"])(),Object(n["e"])("div",tt,[et,Object(n["h"])(n["b"],{name:"user-list"},{default:Z((function(){return[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(o.posts,(function(e){return Object(n["r"])(),Object(n["e"])(a,{post:e,key:e.id,onRemove:function(o){return t.$emit("remove",e)}},null,8,["post","onRemove"])})),128))]})),_:1})])):(Object(n["r"])(),Object(n["e"])("h2",ot," Список пользователей пуст "))})),rt=Object(n["J"])("data-v-529df572");Object(n["u"])("data-v-529df572");var ct={class:"post"},st=Object(n["h"])("strong",null,"Название:",-1),at=Object(n["h"])("strong",null,"Описание:",-1),ut={class:"post__btns"},it=Object(n["g"])(" Открыть "),lt=Object(n["g"])(" Удалить ");Object(n["s"])();var dt=rt((function(t,e,o,r,c,s){var a=Object(n["z"])("my-button");return Object(n["r"])(),Object(n["e"])("div",ct,[Object(n["h"])("div",null,[Object(n["h"])("div",null,Object(n["C"])(o.post.id),1),Object(n["h"])("div",null,[st,Object(n["g"])(" "+Object(n["C"])(o.post.title),1)]),Object(n["h"])("div",null,[at,Object(n["g"])(" "+Object(n["C"])(o.post.body),1)])]),Object(n["h"])("div",ut,[Object(n["h"])(a,{onClick:e[1]||(e[1]=function(e){return t.$router.push("/posts/".concat(o.post.id))})},{default:rt((function(){return[it]})),_:1}),Object(n["h"])(a,{onClick:e[2]||(e[2]=function(e){return t.$emit("remove",o.post)})},{default:rt((function(){return[lt]})),_:1})])])})),pt={props:{post:{type:Object,required:!0}}};o("38c9");pt.render=dt,pt.__scopeId="data-v-529df572";var bt=pt,ft={components:{PostItem:bt},props:{posts:{type:Array,required:!0}}};o("2f50");ft.render=nt,ft.__scopeId="data-v-df55615e";var Ot=ft,jt=o("bc3a"),ht=o.n(jt),vt=Object(n["J"])("data-v-08daab29");Object(n["u"])("data-v-08daab29");var mt=Object(n["h"])("option",{disabled:"",value:""},"Выберите из списка",-1);Object(n["s"])();var gt=vt((function(t,e,o,r,c,s){return Object(n["H"])((Object(n["r"])(),Object(n["e"])("select",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return o.modelValue=t}),onChange:e[2]||(e[2]=function(){return s.changeOption&&s.changeOption.apply(s,arguments)})},[mt,(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(o.options,(function(t){return Object(n["r"])(),Object(n["e"])("option",{key:t.value,value:t.value},Object(n["C"])(t.name),9,["value"])})),128))],544)),[[n["E"],o.modelValue]])})),yt={name:"my-select",props:{modelValue:{type:String},options:{type:Array,default:function(){return[]}}},methods:{changeOption:function(t){this.$emit("update:modelValue",t.target.value)}}};yt.render=gt,yt.__scopeId="data-v-08daab29";var Pt=yt,_t={components:{MyInput:V,MySelect:Pt,MyButton:P,PostList:Ot,PostForm:Y},data:function(){return{posts:[],dialogVisible:!1,isPostsLoading:!1,selectedSort:"",searchQuery:"",page:1,limit:10,totalPages:0,sortOptions:[{value:"title",name:"По названию"},{value:"body",name:"По содержимому"}]}},methods:{createPost:function(t){this.posts.push(t),this.dialogVisible=!1},removePost:function(t){this.posts=this.posts.filter((function(e){return e.id!==t.id}))},showDialog:function(){this.dialogVisible=!0},fetchPosts:function(){var t=this;return Object(F["a"])(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isPostsLoading=!0,e.next=4,ht.a.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:t.page,_limit:t.limit}});case 4:o=e.sent,t.totalPages=Math.ceil(o.headers["x-total-count"]/t.limit),t.posts=o.data,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),alert("Ошибка");case 12:return e.prev=12,t.isPostsLoading=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))()},loadMorePosts:function(){var t=this;return Object(F["a"])(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.page+=1,e.next=4,ht.a.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:t.page,_limit:t.limit}});case 4:o=e.sent,t.totalPages=Math.ceil(o.headers["x-total-count"]/t.limit),t.posts=[].concat(Object(E["a"])(t.posts),Object(E["a"])(o.data)),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),alert("Ошибка");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},mounted:function(){this.fetchPosts()},computed:{sortedPosts:function(){var t=this;return Object(E["a"])(this.posts).sort((function(e,o){var n;return null===(n=e[t.selectedSort])||void 0===n?void 0:n.localeCompare(o[t.selectedSort])}))},sortedAndSearchedPosts:function(){var t=this;return this.sortedPosts.filter((function(e){return e.title.toLowerCase().includes(t.searchQuery.toLowerCase())}))}},watch:{}};o("ab97");_t.render=B;var wt=_t,St=Object(n["J"])("data-v-9ad80c34");Object(n["u"])("data-v-9ad80c34");var Vt=Object(n["h"])("h1",null,"About",-1);Object(n["s"])();var kt=St((function(t,e,o,r,c,s){return Object(n["r"])(),Object(n["e"])("div",null,[Vt])})),xt={};xt.render=kt,xt.__scopeId="data-v-9ad80c34";var Ct=xt,Mt=Object(n["J"])("data-v-88d382c8"),zt=Mt((function(t,e,o,r,c,s){return Object(n["r"])(),Object(n["e"])("div",null,[Object(n["h"])("h1",null,"Это страница поста с ID = "+Object(n["C"])(t.$route.params.id),1)])})),It={};It.render=zt,It.__scopeId="data-v-88d382c8";var Lt=It,At=Object(n["h"])("h1",null,"Страница с постами",-1),Qt={class:"app__btns"},Rt=Object(n["g"])(" Создать пользователя "),$t={key:1},Ut={class:"observer"},Jt={class:"page__wrapper"};function Dt(t,e,o,r,c,s){var a=Object(n["z"])("my-input"),u=Object(n["z"])("my-button"),i=Object(n["z"])("my-select"),l=Object(n["z"])("post-form"),d=Object(n["z"])("my-dialog"),p=Object(n["z"])("post-list"),b=Object(n["A"])("focus"),f=Object(n["A"])("intersection");return Object(n["r"])(),Object(n["e"])("div",null,[At,Object(n["H"])(Object(n["h"])(a,{"model-value":t.searchQuery,"onUpdate:modelValue":t.setSearchQuery,placeholder:"Поиск...."},null,8,["model-value","onUpdate:modelValue"]),[[b]]),Object(n["h"])("div",Qt,[Object(n["h"])(u,{onClick:s.showDialog},{default:Object(n["G"])((function(){return[Rt]})),_:1},8,["onClick"]),Object(n["h"])(i,{"model-value":t.selectedSort,"onUpdate:modelValue":t.setSelectedSort,options:t.sortOptions},null,8,["model-value","onUpdate:modelValue","options"])]),Object(n["h"])(d,{show:c.dialogVisible,"onUpdate:show":e[1]||(e[1]=function(t){return c.dialogVisible=t})},{default:Object(n["G"])((function(){return[Object(n["h"])(l,{onCreate:s.createPost},null,8,["onCreate"])]})),_:1},8,["show"]),t.isPostsLoading?(Object(n["r"])(),Object(n["e"])("div",$t,"Идет загрузка...")):(Object(n["r"])(),Object(n["e"])(p,{key:0,posts:t.sortedAndSearchedPosts,onRemove:s.removePost},null,8,["posts","onRemove"])),Object(n["H"])(Object(n["h"])("div",Ut,null,512),[[f,t.loadMorePosts]]),Object(n["h"])("div",Jt,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(t.totalPages,(function(e){return Object(n["r"])(),Object(n["e"])("div",{key:e,class:["page",{"current-page":t.page===e}],onClick:function(o){return t.changePage(e)}},Object(n["C"])(e),11,["onClick"])})),128))])])}var Ht=o("5530"),Gt=o("5502"),Tt={components:{MyInput:V,MySelect:Pt,MyButton:P,PostList:Ot,PostForm:Y},data:function(){return{dialogVisible:!1}},methods:Object(Ht["a"])(Object(Ht["a"])(Object(Ht["a"])({},Object(Gt["d"])({setPage:"post/setPage",setSearchQuery:"post/setSearchQuery",setSelectedSort:"post/setSelectedSort"})),Object(Gt["b"])({loadMorePosts:"post/loadMorePosts",fetchPosts:"post/fetchPosts"})),{},{createPost:function(t){this.posts.push(t),this.dialogVisible=!1},removePost:function(t){this.posts=this.posts.filter((function(e){return e.id!==t.id}))},showDialog:function(){this.dialogVisible=!0}}),mounted:function(){this.fetchPosts()},computed:Object(Ht["a"])(Object(Ht["a"])({},Object(Gt["e"])({posts:function(t){return t.post.posts},isPostsLoading:function(t){return t.post.isPostsLoading},selectedSort:function(t){return t.post.selectedSort},searchQuery:function(t){return t.post.searchQuery},page:function(t){return t.post.page},limit:function(t){return t.post.limit},totalPages:function(t){return t.post.totalPages},sortOptions:function(t){return t.post.sortOptions}})),Object(Gt["c"])({sortedPosts:"post/sortedPosts",sortedAndSearchedPosts:"post/sortedAndSearchedPosts"})),watch:{}};o("f5bd");Tt.render=Dt;var Bt=Tt,Et=Object(n["h"])("h1",null,"Страница с постами",-1),Ft={class:"app__btns"},qt=Object(n["g"])(" Создать пользователя "),Nt={key:1};function Kt(t,e,o,r,c,s){var a=Object(n["z"])("my-input"),u=Object(n["z"])("my-button"),i=Object(n["z"])("my-select"),l=Object(n["z"])("post-form"),d=Object(n["z"])("my-dialog"),p=Object(n["z"])("post-list"),b=Object(n["A"])("focus");return Object(n["r"])(),Object(n["e"])("div",null,[Et,Object(n["H"])(Object(n["h"])(a,{modelValue:r.searchQuery,"onUpdate:modelValue":e[1]||(e[1]=function(t){return r.searchQuery=t}),placeholder:"Поиск...."},null,8,["modelValue"]),[[b]]),Object(n["h"])("div",Ft,[Object(n["h"])(u,null,{default:Object(n["G"])((function(){return[qt]})),_:1}),Object(n["h"])(i,{modelValue:r.selectedSort,"onUpdate:modelValue":e[2]||(e[2]=function(t){return r.selectedSort=t}),options:c.sortOptions},null,8,["modelValue","options"])]),Object(n["h"])(d,{show:c.dialogVisible,"onUpdate:show":e[3]||(e[3]=function(t){return c.dialogVisible=t})},{default:Object(n["G"])((function(){return[Object(n["h"])(l)]})),_:1},8,["show"]),r.isPostsLoading?(Object(n["r"])(),Object(n["e"])("div",Nt,"Идет загрузка...")):(Object(n["r"])(),Object(n["e"])(p,{key:0,posts:r.sortedAndSearchedPosts},null,8,["posts"]))])}function Wt(t){var e=Object(n["w"])([]),o=Object(n["w"])(0),r=Object(n["w"])(!0),c=function(){var n=Object(F["a"])(regeneratorRuntime.mark((function n(){var c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,ht.a.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:1,_limit:t}});case 3:c=n.sent,o.value=Math.ceil(c.headers["x-total-count"]/t),e.value=c.data,n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](0),alert("Ошибка");case 11:return n.prev=11,r.value=!1,n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();return Object(n["p"])(c),{posts:e,isPostsLoading:r,totalPages:o}}function Xt(t){var e=Object(n["w"])(""),o=Object(n["c"])((function(){return Object(E["a"])(t.value).sort((function(t,o){var n;return null===(n=t[e.value])||void 0===n?void 0:n.localeCompare(o[e.value])}))}));return{selectedSort:e,sortedPosts:o}}function Yt(t){var e=Object(n["w"])(""),o=Object(n["c"])((function(){return t.value.filter((function(t){return t.title.toLowerCase().includes(e.value.toLowerCase())}))}));return{searchQuery:e,sortedAndSearchedPosts:o}}var Zt={components:{MyInput:V,MySelect:Pt,MyButton:P,PostList:Ot,PostForm:Y},data:function(){return{dialogVisible:!1,sortOptions:[{value:"title",name:"По названию"},{value:"body",name:"По содержимому"}]}},setup:function(t){var e=Wt(10),o=e.posts,n=e.totalPages,r=e.isPostsLoading,c=Xt(o),s=c.sortedPosts,a=c.selectedSort,u=Yt(s),i=u.searchQuery,l=u.sortedAndSearchedPosts;return{posts:o,totalPages:n,isPostsLoading:r,sortedPosts:s,selectedSort:a,searchQuery:i,sortedAndSearchedPosts:l}}};o("fa42");Zt.render=Kt;var te=Zt,ee=[{path:"/",component:$},{path:"/posts",component:wt},{path:"/about",component:Ct},{path:"/posts/:id",component:Lt},{path:"/store",component:Bt},{path:"/composition",component:te}],oe=Object(U["a"])({routes:ee,history:Object(U["b"])("/vue3/")}),ne=oe,re={mounted:function(t){t.focus()},name:"focus"},ce={mounted:function(t,e){var o={rootMargin:"0px",threshold:1},n=function(t,o){t[0].isIntersecting&&e.value()},r=new IntersectionObserver(n,o);r.observe(t)},name:"intersection"},se=[re,ce],ae={state:function(){return{posts:[],isPostsLoading:!1,selectedSort:"",searchQuery:"",page:1,limit:10,totalPages:0,sortOptions:[{value:"title",name:"По названию"},{value:"body",name:"По содержимому"}]}},getters:{sortedPosts:function(t){return Object(E["a"])(t.posts).sort((function(e,o){var n;return null===(n=e[t.selectedSort])||void 0===n?void 0:n.localeCompare(o[t.selectedSort])}))},sortedAndSearchedPosts:function(t,e){return e.sortedPosts.filter((function(e){return e.title.toLowerCase().includes(t.searchQuery.toLowerCase())}))}},mutations:{setPosts:function(t,e){t.posts=e},setLoading:function(t,e){t.isPostsLoading=e},setPage:function(t,e){t.page=e},setSelectedSort:function(t,e){t.selectedSort=e},setTotalPages:function(t,e){t.totalPages=e},setSearchQuery:function(t,e){t.searchQuery=e}},actions:{fetchPosts:function(t){return Object(F["a"])(regeneratorRuntime.mark((function e(){var o,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t.state,n=t.commit,e.prev=1,n("setLoading",!0),e.next=5,ht.a.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:o.page,_limit:o.limit}});case 5:r=e.sent,n("setTotalPages",Math.ceil(r.headers["x-total-count"]/o.limit)),n("setPosts",r.data),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),console.log(e.t0);case 13:return e.prev=13,n("setLoading",!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})))()},loadMorePosts:function(t){return Object(F["a"])(regeneratorRuntime.mark((function e(){var o,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t.state,n=t.commit,e.prev=1,n("setPage",o.page+1),e.next=5,ht.a.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:o.page,_limit:o.limit}});case 5:r=e.sent,n("setTotalPages",Math.ceil(r.headers["x-total-count"]/o.limit)),n("setPosts",[].concat(Object(E["a"])(o.posts),Object(E["a"])(r.data))),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()}},namespaced:!0},ue=Object(Gt["a"])({state:{isAuth:!1},modules:{post:ae}}),ie=Object(n["d"])(h);I.forEach((function(t){ie.component(t.name,t)})),se.forEach((function(t){ie.directive(t.name,t)})),ie.use(ne).use(ue).mount("#app")},"683a":function(t,e,o){"use strict";o("50cc")},"79ae":function(t,e,o){},"7e2c":function(t,e,o){},9445:function(t,e,o){},"98df":function(t,e,o){"use strict";o("e1cd")},"9a93":function(t,e,o){"use strict";o("dd57")},ab97:function(t,e,o){"use strict";o("f3f8")},d5b2:function(t,e,o){},d601:function(t,e,o){},dc52:function(t,e,o){"use strict";o("7e2c")},dd57:function(t,e,o){},e1cd:function(t,e,o){},ee8e:function(t,e,o){},f3f8:function(t,e,o){},f420:function(t,e,o){},f5bd:function(t,e,o){"use strict";o("d601")},fa42:function(t,e,o){"use strict";o("9445")}});
//# sourceMappingURL=app.089a64d0.js.map