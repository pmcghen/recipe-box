(function(e){function t(t){for(var r,i,o=t[0],u=t[1],s=t[2],p=0,b=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&b.push(c[i][0]),c[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(b.length)b.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/recipe-box/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=n("6ee5"),a=n.n(c),i=Object(r["g"])("img",{src:a.a,alt:"",class:"img-responsive"},null,-1),o=Object(r["g"])("footer",{class:"page-footer"},[Object(r["g"])("a",{rel:"license",href:"http://creativecommons.org/licenses/by-sa/4.0/"},[Object(r["g"])("img",{alt:"Creative Commons License",style:{"border-width":"0"},src:"https://i.creativecommons.org/l/by-sa/4.0/88x31.png"})]),Object(r["g"])("br"),Object(r["h"])(" This work is licensed under a "),Object(r["g"])("a",{rel:"license",href:"http://creativecommons.org/licenses/by-sa/4.0/"}," Creative Commons Attribution-ShareAlike 4.0 International License ")],-1);function u(e,t,n,c,a,u){var s=Object(r["w"])("PageHeader"),l=Object(r["w"])("router-view");return Object(r["r"])(),Object(r["f"])(r["a"],null,[Object(r["i"])(s),i,(Object(r["r"])(),Object(r["d"])(l,{key:e.$route.fullPath})),o],64)}var s={class:"page-header"},l={class:"flex between"},p={class:"logo"},b=Object(r["h"])(" The Recipe Box "),d=Object(r["g"])("form",{action:"search",method:"get"},[Object(r["g"])("label",{class:"accessible-text",for:"query"},"Search"),Object(r["g"])("input",{name:"query",placeholder:"Search..."}),Object(r["g"])("input",{type:"submit",value:"Search"})],-1),m=Object(r["h"])("Home"),O=Object(r["h"])(" | "),j=Object(r["h"])("About"),g=Object(r["h"])(" | "),h=Object(r["h"])("My Recipe Box"),f=Object(r["h"])("Log in");function v(e,t,n,c,a,i){var o=Object(r["w"])("font-awesome-icon"),u=Object(r["w"])("router-link");return Object(r["r"])(),Object(r["f"])("header",s,[Object(r["g"])("div",l,[Object(r["g"])("div",p,[Object(r["i"])(u,{to:"/"},{default:Object(r["D"])((function(){return[Object(r["i"])(o,{icon:["fas","cookie-bite"],class:"icon"}),b]})),_:1})]),d,Object(r["g"])("nav",null,[Object(r["i"])(u,{to:"/"},{default:Object(r["D"])((function(){return[m]})),_:1}),O,Object(r["i"])(u,{to:"/about"},{default:Object(r["D"])((function(){return[j]})),_:1}),g,e.loggedIn?(Object(r["r"])(),Object(r["d"])(u,{key:0,to:"/profile"},{default:Object(r["D"])((function(){return[h]})),_:1})):(Object(r["r"])(),Object(r["d"])(u,{key:1,"data-test":"log-in-link",to:"/log-in"},{default:Object(r["D"])((function(){return[f]})),_:1}))])])])}var w=n("5530"),y=n("5502"),x=Object(w["a"])({},Object(y["b"])(["loggedIn"])),k={name:"PageHeader",mounted:function(){var e=localStorage.getItem("authenticatedUser");if(e){var t=JSON.parse(e);this.$store.commit("SET_USER_DATA",t)}},computed:Object(w["a"])({},x)},R=n("6b0d"),S=n.n(R);const T=S()(k,[["render",v]]);var U=T,_={components:{PageHeader:U}};n("e70c");const A=S()(_,[["render",u]]);var E=A,B=(n("d3b7"),n("6c02")),P={class:"wrapper"},D=Object(r["g"])("h1",null,"Welcome!",-1),L=Object(r["g"])("p",null,"Here you'll find a collection of my go-to recipes for breads, pastas, sides, and more!",-1),C={class:"features"},q=Object(r["g"])("h2",null,"Featured",-1),F={class:"flex card-row"},H={class:"latest"},M=Object(r["g"])("h2",null,"Latest",-1),V={class:"flex card-row"};function I(e,t,n,c,a,i){var o=Object(r["w"])("Card");return Object(r["r"])(),Object(r["f"])("main",P,[D,L,Object(r["g"])("section",C,[q,Object(r["g"])("div",F,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["v"])(a.featuredRecipes,(function(e){return Object(r["r"])(),Object(r["d"])(o,{key:e.id,recipe:e},null,8,["recipe"])})),128))])]),Object(r["g"])("section",H,[M,Object(r["g"])("div",V,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["v"])(a.recipes,(function(e){return Object(r["r"])(),Object(r["d"])(o,{key:e.id,recipe:e},null,8,["recipe"])})),128))])])])}var $=n("1da1"),N=(n("96cf"),n("159b"),n("323e")),J=n.n(N),W=(n("b0c0"),{class:"card"}),Y=["src"],z={class:"card-heading"},G=Object(r["g"])("div",{class:"card-details"},null,-1);function K(e,t,n,c,a,i){var o=Object(r["w"])("router-link");return Object(r["r"])(),Object(r["f"])("div",W,[Object(r["i"])(o,{to:i.recipeUrl,"data-test":"recipe-link"},{default:Object(r["D"])((function(){return[n.recipe.image?(Object(r["r"])(),Object(r["f"])("img",{key:0,src:n.recipe.image,alt:"",class:"img-responsive"},null,8,Y)):Object(r["e"])("",!0),Object(r["g"])("p",z,Object(r["y"])(n.recipe.name),1),G]})),_:1},8,["to"])])}var Q={props:{recipe:{name:String,image:String,slug:String}},computed:{recipeUrl:function(){return"/recipe/".concat(this.recipe.slug)}}};const X=S()(Q,[["render",K]]);var Z=X,ee={name:"Home",components:{Card:Z},data:function(){return{recipes:[],featuredRecipes:[]}},mounted:function(){var e=this;return Object($["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return document.title="Home | The Recipe Box",J.a.start(),n="https://pmcg-recipe-box.herokuapp.com/recipes",t.next=5,fetch(n).then((function(e){return e.json()})).then((function(t){e.recipes=t.results,e.recipes.forEach((function(t){t.isFeatured&&e.featuredRecipes.push(t)}))})).catch((function(e){J.a.done(),console.error(e)}));case 5:J.a.done();case 6:case"end":return t.stop()}}),t)})))()}};const te=S()(ee,[["render",I]]);var ne=te,re={class:"wrapper"},ce=Object(r["g"])("h1",null,"About",-1),ae=Object(r["g"])("p",null,"I built this to practice my Django and Vue skills.",-1),ie=Object(r["g"])("p",null,[Object(r["h"])("Source code is available on "),Object(r["g"])("a",{href:"https://github.com/pmcghen/recipe-box"},"GitHub"),Object(r["h"])(".")],-1),oe=Object(r["g"])("p",null,"The recipes found here are my own, and you're free to use and distribute them under CC Attribution-ShareAlike 4.0 license.",-1),ue=[ce,ae,ie,oe];function se(e,t,n,c,a,i){return Object(r["r"])(),Object(r["f"])("main",re,ue)}var le={mounted:function(){document.title="About | The Recipe Box"}};const pe=S()(le,[["render",se]]);var be=pe,de={class:"wrapper"},me={class:"flex two-column"},Oe=Object(r["g"])("h2",null,"Ingredients",-1),je=["innerHTML"],ge=Object(r["g"])("h2",null,"Directions",-1),he=["innerHTML"],fe={key:0},ve=Object(r["g"])("h2",null,"Notes",-1),we=["innerHTML"];function ye(e,t,n,c,a,i){return Object(r["r"])(),Object(r["f"])("main",de,[Object(r["g"])("h1",null,Object(r["y"])(a.recipe.name),1),Object(r["g"])("div",me,[Object(r["g"])("div",null,[Oe,Object(r["g"])("p",{innerHTML:i.ingredients},null,8,je)]),Object(r["g"])("div",null,[ge,Object(r["g"])("p",{innerHTML:i.directions},null,8,he)])]),a.recipe.notes?(Object(r["r"])(),Object(r["f"])("div",fe,[ve,Object(r["g"])("p",{innerHTML:i.notes},null,8,we)])):Object(r["e"])("",!0)])}var xe=n("b85c"),ke=(n("ac1f"),n("5319"),{props:{slug:{type:String,required:!0}},data:function(){return{recipe:{name:"",ingredients:"",directions:"",notes:""}}},mounted:function(){var e=this;return Object($["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return J.a.start(),n="https://pmcg-recipe-box.herokuapp.com/recipes/",t.next=4,fetch(n).then((function(e){return e.json()})).then((function(t){var n,r=Object(xe["a"])(t.results);try{for(r.s();!(n=r.n()).done;){var c=n.value;c.slug===e.slug&&(e.recipe=c)}}catch(a){r.e(a)}finally{r.f()}})).catch((function(e){J.a.done(),console.error(e.response)}));case 4:document.title=e.recipe.name+" | The Recipe Box",J.a.done();case 6:case"end":return t.stop()}}),t)})))()},computed:{ingredients:function(){return this.recipe.ingredients.replace(/(?:\r\n|\r|\n)/g,"<br>")},directions:function(){return this.recipe.directions.replace(/(?:\r\n|\r|\n)/g,"<br>")},notes:function(){return this.recipe.notes.replace(/(?:\r\n|\r|\n)/g,"<br>")}}});const Re=S()(ke,[["render",ye]]);var Se=Re,Te=Object(r["g"])("h1",null,"Oops!",-1),Ue=Object(r["g"])("p",null,"Looks like somebody needed to borrow this recipe.",-1),_e=[Te,Ue];function Ae(e,t,n,c,a,i){return Object(r["r"])(),Object(r["f"])("main",null,_e)}var Ee={};const Be=S()(Ee,[["render",Ae]]);var Pe=Be,De={class:"wrapper"},Le=Object(r["g"])("legend",null,"Sign up!",-1),Ce={key:0,class:"notice-box"},qe=Object(r["g"])("p",{class:"notice"},"Oops!",-1),Fe=Object(r["g"])("p",null,"We found the following errors:",-1),He={key:1,class:"notice-box"},Me=Object(r["g"])("p",{class:"notice"},"Oops!",-1),Ve={class:"form-list"},Ie=Object(r["g"])("label",{for:"username"},"User name:",-1),$e=Object(r["g"])("label",{for:"password"},"Password:",-1),Ne=Object(r["g"])("label",{for:"verify"},"Verify password:",-1),Je=Object(r["g"])("button",null,"Sign up!",-1),We=Object(r["h"])("Already have an account? "),Ye=Object(r["h"])("Log in"),ze=Object(r["h"])(".");function Ge(e,t,n,c,a,i){var o=Object(r["w"])("router-link");return Object(r["r"])(),Object(r["f"])("main",De,[Object(r["g"])("form",{onSubmit:t[3]||(t[3]=Object(r["F"])((function(){return i.submitForm&&i.submitForm.apply(i,arguments)}),["prevent"]))},[Object(r["g"])("fieldset",null,[Le,a.errors.length?(Object(r["r"])(),Object(r["f"])("div",Ce,[qe,Fe,Object(r["g"])("ul",null,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["v"])(a.errors,(function(e){return Object(r["r"])(),Object(r["f"])("li",{key:e},Object(r["y"])(e),1)})),128))])])):Object(r["e"])("",!0),a.error?(Object(r["r"])(),Object(r["f"])("div",He,[Me,Object(r["g"])("p",null,Object(r["y"])(a.error),1)])):Object(r["e"])("",!0),Object(r["g"])("ol",Ve,[Object(r["g"])("li",null,[Ie,Object(r["E"])(Object(r["g"])("input",{type:"text",name:"username","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.username=e})},null,512),[[r["B"],a.username]])]),Object(r["g"])("li",null,[$e,Object(r["E"])(Object(r["g"])("input",{type:"password",name:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.password=e})},null,512),[[r["B"],a.password]])]),Object(r["g"])("li",null,[Ne,Object(r["E"])(Object(r["g"])("input",{type:"password",name:"verify","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.password2=e})},null,512),[[r["B"],a.password2]])])]),Je]),Object(r["g"])("p",null,[We,Object(r["i"])(o,{to:"/log-in"},{default:Object(r["D"])((function(){return[Ye]})),_:1}),ze])],32)])}var Ke={name:"SignUp",data:function(){return{username:"",password:"",password2:"",errors:[],error:null}},methods:{submitForm:function(){if(this.errors=[],""===this.username&&this.errors.push("Username is required!"),this.password.length<8&&this.errors.push("Your password should be at least 8 characters!"),this.password2!==this.password&&this.errors.push("Your passwords don't match!"),!this.errors.length){var e={username:this.username,password:this.password};this.createUser(e)}},createUser:function(e){var t=this;this.$store.dispatch("register",e).then((function(){t.$router.push({name:"profile"})})).catch((function(e){t.error=e.response.data.username[0]}))}},mounted:function(){document.title="Sign up! | The Recipe Box"}};const Qe=S()(Ke,[["render",Ge]]);var Xe=Qe,Ze={class:"wrapper"},et=Object(r["g"])("legend",null,"Log in!",-1),tt={key:0,class:"notice-box"},nt=Object(r["g"])("p",{class:"notice"},"Oops!",-1),rt=Object(r["g"])("label",{for:"username"},"User name:",-1),ct=Object(r["g"])("label",{for:"password"},"Password:",-1),at=Object(r["g"])("button",null,"Log in!",-1),it=Object(r["h"])("Don't have an account? "),ot=Object(r["h"])("Sign up"),ut=Object(r["h"])(".");function st(e,t,n,c,a,i){var o=Object(r["w"])("router-link");return Object(r["r"])(),Object(r["f"])("main",Ze,[Object(r["g"])("form",{onSubmit:t[2]||(t[2]=Object(r["F"])((function(){return i.submitForm&&i.submitForm.apply(i,arguments)}),["prevent"]))},[Object(r["g"])("fieldset",null,[et,a.error?(Object(r["r"])(),Object(r["f"])("div",tt,[nt,Object(r["g"])("p",null,Object(r["y"])(a.error),1)])):Object(r["e"])("",!0),Object(r["g"])("ol",null,[Object(r["g"])("li",null,[rt,Object(r["E"])(Object(r["g"])("input",{type:"text",name:"username","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.username=e})},null,512),[[r["B"],a.username]])]),Object(r["g"])("li",null,[ct,Object(r["E"])(Object(r["g"])("input",{type:"password",name:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.password=e})},null,512),[[r["B"],a.password]])])]),at]),Object(r["g"])("p",null,[it,Object(r["i"])(o,{to:"/sign-up"},{default:Object(r["D"])((function(){return[ot]})),_:1}),ut])],32)])}var lt={data:function(){return{username:"",password:"",error:null}},mounted:function(){document.title="Log in | The Recipe Box"},methods:{submitForm:function(){var e=this;this.$store.dispatch("login",{username:this.username,password:this.password}).then((function(){e.$router.push({name:"profile"})})).catch((function(t){e.error=t.response.data.non_field_errors[0]}))}}};const pt=S()(lt,[["render",st]]);var bt=pt,dt={class:"wrapper"},mt=Object(r["g"])("h1",null,"Search",-1);function Ot(e,t,n,c,a,i){var o=Object(r["w"])("Card");return Object(r["r"])(),Object(r["f"])("main",dt,[mt,(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["v"])(a.recipes,(function(e){return Object(r["r"])(),Object(r["d"])(o,{recipe:e,key:e.id},null,8,["recipe"])})),128))])}n("e9c4"),n("841c"),n("3ca3"),n("ddb0"),n("9861");var jt={components:{Card:Z},data:function(){return{recipes:[],query:""}},methods:{getResults:function(){var e=arguments;return Object($["a"])(regeneratorRuntime.mark((function t(){var n,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.length>0&&void 0!==e[0]?e[0]:{},J.a.start(),r="https://pmcg-recipe-box.herokuapp.com/search/",t.next=5,fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 5:return c=t.sent,J.a.done(),t.abrupt("return",c.json());case 8:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;document.title="Search | The Recipe Box";var t=window.location.search.substring(1),n=new URLSearchParams(t);n.get("query")&&(this.query=n.get("query"),this.getResults({query:this.query}).then((function(t){e.recipes=t})))}};const gt=S()(jt,[["render",Ot]]);var ht=gt,ft={class:"wrapper"},vt={class:"flex between flex-header"},wt=Object(r["h"])("Add a Recipe"),yt=Object(r["h"])(" | "),xt=Object(r["g"])("span",null,"My Recipes",-1),kt=Object(r["h"])(" | "),Rt=Object(r["g"])("span",null,"My Favorites",-1),St=Object(r["h"])(" | "),Tt=Object(r["g"])("span",null,"Edit Profile",-1),Ut={key:0,class:"flex two-column"},_t=["src","alt"],At=Object(r["g"])("h2",null,"Your Profile Info",-1),Et=Object(r["g"])("h3",null,"User Name",-1),Bt=Object(r["g"])("h3",null,"Email",-1),Pt=Object(r["g"])("h3",null,"Bio",-1),Dt={key:1};function Lt(e,t,n,c,a,i){var o=Object(r["w"])("router-link");return Object(r["r"])(),Object(r["f"])("main",ft,[Object(r["g"])("header",vt,[Object(r["g"])("h1",null,"Welcome, "+Object(r["y"])(a.user.first_name)+"!",1),Object(r["g"])("nav",null,[Object(r["i"])(o,{to:{name:"AddRecipe",params:{id:a.user.id}}},{default:Object(r["D"])((function(){return[wt]})),_:1},8,["to"]),yt,xt,kt,Rt,St,Tt])]),a.user.avatar?(Object(r["r"])(),Object(r["f"])("div",Ut,[Object(r["g"])("div",null,[Object(r["g"])("img",{src:a.user.avatar,alt:i.fullName,class:"avatar avatar-full"},null,8,_t)]),Object(r["g"])("div",null,[At,Et,Object(r["h"])(" "+Object(r["y"])(a.user.username)+" ",1),Bt,Object(r["h"])(" "+Object(r["y"])(a.user.email)+" ",1),Pt,Object(r["h"])(" "+Object(r["y"])(a.user.bio),1)])])):(Object(r["r"])(),Object(r["f"])("div",Dt,Object(r["y"])(a.user.bio),1)),Object(r["g"])("button",{onClick:t[0]||(t[0]=function(){return i.logout&&i.logout.apply(i,arguments)})},"Log out")])}n("99af");var Ct=n("bc3a"),qt=n.n(Ct),Ft={data:function(){return{user:{id:0,username:"",first_name:"",last_name:"",email:"",bio:""}}},methods:{logout:function(){this.$store.dispatch("logout"),this.$router.push("/")}},mounted:function(){var e=this;return Object($["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return document.title="My Recipe Box | The Recipe Box",J.a.start(),n="https://pmcg-recipe-box.herokuapp.com/users/current/",t.next=5,qt.a.get(n,{auth:{username:e.$store.state.authenticatedUser.username,password:e.$store.state.authenticatedUser.password}}).then((function(t){e.user=t.data})).catch((function(e){console.log(e),J.a.done()}));case 5:J.a.done();case 6:case"end":return t.stop()}}),t)})))()},computed:{fullName:function(){return"".concat(this.user.first_name," ").concat(this.user.last_name)}}};const Ht=S()(Ft,[["render",Lt]]);var Mt=Ht,Vt={class:"wrapper"},It=Object(r["g"])("h1",null,"Add a Recipe",-1),$t=Object(r["g"])("label",{for:"name"},"Title:",-1),Nt=Object(r["g"])("label",{for:"image"},"Upload image:",-1),Jt={class:"flex"},Wt=Object(r["g"])("legend",null,"Duration",-1),Yt=Object(r["g"])("label",{for:"inactive-time"},"Inactive time (in minutes):",-1),zt=Object(r["g"])("label",{for:"active-time"},"Active time (in minutes):",-1),Gt=Object(r["g"])("label",{for:"ingredients"},"Ingredients:",-1),Kt=Object(r["g"])("label",{for:"directions"},"Directions:",-1),Qt=Object(r["g"])("label",{for:"notes"},"Notes:",-1),Xt=Object(r["g"])("label",{for:"private"},"Private:",-1),Zt=Object(r["g"])("button",{type:"submit"},"Submit!",-1);function en(e,t,n,c,a,i){return Object(r["r"])(),Object(r["f"])("main",Vt,[It,Object(r["g"])("form",{onSubmit:t[8]||(t[8]=Object(r["F"])((function(){return i.submitRecipe&&i.submitRecipe.apply(i,arguments)}),["prevent"]))},[Object(r["g"])("ul",null,[Object(r["g"])("li",null,[$t,Object(r["E"])(Object(r["g"])("input",{type:"text",name:"name",required:"","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.recipe.name=e})},null,512),[[r["B"],a.recipe.name]])]),Object(r["g"])("li",null,[Nt,Object(r["g"])("input",{type:"file",name:"image",onChange:t[1]||(t[1]=function(){return i.fileAttached&&i.fileAttached.apply(i,arguments)})},null,32)]),Object(r["g"])("li",null,[Object(r["g"])("fieldset",Jt,[Wt,Object(r["g"])("div",null,[Yt,Object(r["E"])(Object(r["g"])("input",{type:"number","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.recipe.inactiveTime=e})},null,512),[[r["B"],a.recipe.inactiveTime]])]),Object(r["g"])("div",null,[zt,Object(r["E"])(Object(r["g"])("input",{type:"number","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.recipe.activeTime=e})},null,512),[[r["B"],a.recipe.activeTime]])])])]),Object(r["g"])("li",null,[Gt,Object(r["E"])(Object(r["g"])("textarea",{name:"ingredients",required:"","onUpdate:modelValue":t[4]||(t[4]=function(e){return a.recipe.ingredients=e})},null,512),[[r["B"],a.recipe.ingredients]])]),Object(r["g"])("li",null,[Kt,Object(r["E"])(Object(r["g"])("textarea",{name:"directions",required:"","onUpdate:modelValue":t[5]||(t[5]=function(e){return a.recipe.directions=e})},null,512),[[r["B"],a.recipe.directions]])]),Object(r["g"])("li",null,[Qt,Object(r["E"])(Object(r["g"])("textarea",{name:"notes","onUpdate:modelValue":t[6]||(t[6]=function(e){return a.recipe.notes=e})},null,512),[[r["B"],a.recipe.notes]])]),Object(r["g"])("li",null,[Xt,Object(r["E"])(Object(r["g"])("input",{type:"checkbox",name:"private","onUpdate:modelValue":t[7]||(t[7]=function(e){return a.recipe.isPriavate=e})},null,512),[[r["A"],a.recipe.isPriavate]])])]),Zt],32)])}n("a15b"),n("1276");var tn={name:"AddRecipe",mounted:function(){document.title="Add a Recipe | The Recipe Box"},props:{id:null},data:function(){return{recipe:{author:this.id,name:"",slug:"",ingredients:"",activeTime:0,inactiveTime:0,directions:"",image:null,notes:"",isFeatured:!1,rating:1,isPrivate:!1}}},methods:{submitRecipe:function(){J.a.start();var e=this.recipe.name.toLowerCase().split(" ").join("-");this.recipe.slug=e,console.log(this.recipe);var t=new FormData;t.append("author",this.recipe.author),t.append("name",this.recipe.name),t.append("slug",this.recipe.slug),t.append("ingredients",this.recipe.ingredients),t.append("activeTime",this.recipe.activeTime),t.append("inactiveTime",this.recipe.inactiveTime),t.append("directions",this.recipe.directions),t.append("image",this.recipe.image,this.recipe.image.name),t.append("notes",this.recipe.notes),t.append("isFeatured",this.recipe.isFeatured),t.append("rating",this.recipe.rating),t.append("isPrivate",this.recipe.isPrivate);var n="https://pmcg-recipe-box.herokuapp.com/recipes/";qt.a.post(n,t,{auth:{username:this.$store.state.authenticatedUser.username,password:this.$store.state.authenticatedUser.password},header:{"Content-Type":"multipart/form-data"}}).then((function(e){console.log(e),J.a.done()})).catch((function(e){console.log(e),J.a.done()}))},fileAttached:function(e){this.recipe.image=e.target.files[0]}}};const nn=S()(tn,[["render",en]]);var rn=nn,cn=[{path:"/",name:"Home",component:ne},{path:"/about",name:"About",component:be},{path:"/add-recipe",name:"AddRecipe",component:rn,meta:{requiresAuth:!0},props:!0},{path:"/recipe/:slug",name:"recipe-detail",component:Se,props:!0},{path:"/sign-up",name:"sign-up",component:Xe},{path:"/log-in",name:"log-in",component:bt},{path:"/search",name:"search",component:ht},{path:"/profile",name:"profile",component:Mt,meta:{requiresAuth:!0}},{path:"/404",name:"404",component:Pe}],an=Object(B["a"])({history:Object(B["b"])("/recipe-box/"),routes:cn});an.beforeEach((function(e,t,n){var r=localStorage.getItem("authenticatedUser");e.matched.some((function(e){return e.meta.requiresAuth}))&&!r?n("/"):n()}));var on=an,un=Object(y["a"])({state:{authenticatedUser:null},mutations:{SET_USER_DATA:function(e,t){e.authenticatedUser=t,localStorage.setItem("authenticatedUser",JSON.stringify({username:t.username})),qt.a.defaults.headers.common["Authorization"]="Bearer ".concat(t.auth_token)},CLEAR_USER_DATA:function(){localStorage.removeItem("authenticatedUser"),location.reload()}},actions:{register:function(e,t){return Object($["a"])(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,c="https://pmcg-recipe-box.herokuapp.com/users/",n.next=4,qt.a.post(c,t).then((function(e){var n=e.data;t.auth_token=n.auth_token,r("SET_USER_DATA",t)}));case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},login:function(e,t){return Object($["a"])(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,c="https://pmcg-recipe-box.herokuapp.com/token/login/",n.next=4,qt.a.post(c,t).then((function(e){var n=e.data;t.auth_token=n.auth_token,r("SET_USER_DATA",t)}));case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},logout:function(e){var t=e.commit;t("CLEAR_USER_DATA")}},modules:{},getters:{loggedIn:function(e){return!!e.authenticatedUser}}}),sn=n("ecee"),ln=n("c074"),pn=n("ad3d");n("a5d8");sn["c"].add(ln["a"]),Object(r["c"])(E).component("font-awesome-icon",pn["a"]).use(un).use(on).mount("#app")},"6ee5":function(e,t,n){e.exports=n.p+"img/hero.ee76d365.jpg"},b089:function(e,t,n){},e70c:function(e,t,n){"use strict";n("b089")}});
//# sourceMappingURL=app.88787325.js.map