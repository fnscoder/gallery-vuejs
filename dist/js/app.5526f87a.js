(function(t){function e(e){for(var o,i,r=e[0],l=e[1],c=e[2],m=0,d=[];m<r.length;m++)i=r[m],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],o=!0,r=1;r<a.length;r++){var l=a[r];0!==n[l]&&(o=!1)}o&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var o={},n={app:0},s=[];function i(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=o,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"03c8":function(t,e,a){},"25e4":function(t,e,a){"use strict";a("9e42")},"35e8":function(t,e,a){"use strict";a("b366")},"38fe":function(t,e,a){},4039:function(t,e,a){"use strict";a("c90b")},"4dfd":function(t,e,a){"use strict";a("ef62")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",[a("Header"),a("router-view"),a("v-main")],1)],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("v-spacer",[a("v-btn",{staticClass:"btn",attrs:{to:{name:"Home"},text:""}},[a("span",{staticClass:"title",attrs:{to:{name:"Home"}}},[t._v(" Wedding Gallery")])])],1),null==t.token?a("div",[a("v-btn",{staticClass:"btn",attrs:{to:{name:"Login"},text:""}},[a("span",{staticClass:"mr-2"},[t._v("Login")])]),a("v-btn",{staticClass:"btn",attrs:{to:{name:"Register"},text:""}},[a("span",{staticClass:"mr-2"},[t._v("Register")])])],1):a("div",[a("v-btn",{attrs:{text:"",to:{name:"Photos"}}},[a("span",{staticClass:"mr-2"},[t._v("Photos")])]),a("v-btn",{attrs:{text:"",to:{name:"Admin"}}},[a("span",{staticClass:"mr-2"},[t._v("Admin")])]),a("v-btn",{attrs:{text:""},on:{click:t.logout}},[a("span",{staticClass:"mr-2"},[t._v("Log out")])])],1)],1)},r=[],l={data:function(){return{token:localStorage.getItem("user-token")||null}},methods:{logout:function(){localStorage.removeItem("user-token"),this.$router.push("/login")}}},c=l,u=(a("25e4"),a("2877")),m=a("6544"),d=a.n(m),v=a("40dc"),p=a("8336"),h=a("2fa4"),f=Object(u["a"])(c,i,r,!1,null,"4ecf03de",null),b=f.exports;d()(f,{VAppBar:v["a"],VBtn:p["a"],VSpacer:h["a"]});var g={name:"App",components:{Header:b}},_=g,k=a("7496"),w=a("f6c4"),y=Object(u["a"])(_,n,s,!1,null,null,null),C=y.exports;d()(y,{VApp:k["a"],VMain:w["a"]});var V=a("f309");o["a"].use(V["a"]);var x=new V["a"]({}),A=a("8c4f"),I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header"),a("v-card",{attrs:{flat:"",tile:""}},[a("v-window",{attrs:{horizontal:""},model:{value:t.onboarding,callback:function(e){t.onboarding=e},expression:"onboarding"}},t._l(t.length,(function(e){return a("v-window-item",{key:"card-"+e,attrs:{id:"content"}},[a("v-card",{staticClass:"pl-12 pr-12",attrs:{color:"pink",height:"330"}},[a("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[a("h4",{staticClass:"white--text",staticStyle:{"font-size":"3rem"},attrs:{"text-align":"center"}},[t._v(" "+t._s(t.messages[e-1])+" ")])])],1)],1)})),1),a("v-card-actions",{staticClass:"justify-space-between"},[a("v-btn",{attrs:{text:""},on:{click:t.prev}},[a("v-icon",[t._v("mdi-chevron-left")])],1),a("v-item-group",{staticClass:"text-center",attrs:{mandatory:""},model:{value:t.onboarding,callback:function(e){t.onboarding=e},expression:"onboarding"}},t._l(t.length,(function(e){return a("v-item",{key:"btn-"+e,scopedSlots:t._u([{key:"default",fn:function(e){var o=e.active,n=e.toggle;return[a("v-btn",{attrs:{"input-value":o,icon:""},on:{click:n}},[a("v-icon",[t._v("mdi-record")])],1)]}}],null,!0)})})),1),a("v-btn",{attrs:{text:""},on:{click:t.next}},[a("v-icon",[t._v("mdi-chevron-right")])],1)],1)],1)],1)},R=[],$={name:"App",data:function(){return{length:3,onboarding:0,messages:["Welcome to our wedding website!","We want to share this moment with all of you, and we would love to see our wedding by your eyes!","Please, register or log in on the links above and share your photos with us!"]}},methods:{next:function(){this.onboarding=this.onboarding+1===this.length?0:this.onboarding+1},prev:function(){this.onboarding=this.onboarding-1<0?this.length-1:this.onboarding-1}},components:{Header:b}},j=$,S=(a("c2ad"),a("b0af")),T=a("99d9"),P=a("132d"),L=a("d903"),O=a("604c"),B=a("0fd9"),E=a("f665"),z=a("1e6c"),F=Object(u["a"])(j,I,R,!1,null,"998e24a0",null),N=F.exports;d()(F,{VBtn:p["a"],VCard:S["a"],VCardActions:T["a"],VIcon:P["a"],VItem:L["a"],VItemGroup:O["b"],VRow:B["a"],VWindow:E["a"],VWindowItem:z["a"]});var q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return null!=t.token?a("div",{attrs:{id:"photos"}},[a("div",{},[a("p",{staticClass:"text-right"},[a("v-btn",{attrs:{id:"btn-add-photo",fab:"",dark:"",medium:"",color:"pink",to:{name:"PhotoAdd"}}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-camera-plus ")])],1),a("br"),a("span",{attrs:{id:"span-add-photo"}},[t._v("New photo")])],1)]),t.photos.length>0?a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("v-item-group",{attrs:{multiple:""}},[a("v-container",[a("v-row",t._l(t.photos,(function(e){return a("v-col",{key:e.id,attrs:{cols:"12",md:"4"}},[a("v-item",[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",outlined:""}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[e.photo_url?a("v-img",{attrs:{src:e.photo_url,contain:""}}):t._e()],1)],1),a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"headline mb-1"},[a("div",{staticClass:"my-2"},[a("v-btn",{attrs:{fab:"",dark:"","x-small":"",color:"pink"},on:{click:function(a){return t.like(e.id)}}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-thumb-up ")])],1),t._v(" Likes: "+t._s(e.likes)+" ")],1)])],1)],1),a("v-card-actions",[a("v-btn",{attrs:{text:"",to:"/photos/"+e.id+"/detail"}},[t._v("See and add comments "),e.comments.length>0?a("span",[t._v("("+t._s(e.comments.length)+")")]):t._e()])],1),a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("v-list-item",{staticClass:"mb-1"},[t._v("Uploaded by: "+t._s(e.owner.first_name)+" "+t._s(e.owner.last_name))])],1)],1)],1)],1)],1)})),1)],1)],1)],1):t._e()],1):t._e()},U=[],W=a("bc3a"),H=a.n(W),K="user-token",G={getToken:function(){return localStorage.getItem(K)}},M="http://localhost:8000/api/v1/",D={name:"Photos",data:function(){return{token:localStorage.getItem("user-token")||null,photos:[]}},mounted:function(){var t=this,e=G.getToken(),a={headers:{Authorization:"Bearer "+e}};console.log("http://localhost:8000/api/v1/"),H.a.get(M+"photos/",a).then((function(e){t.photos=e.data}))},methods:{like:function(t){var e=G.getToken(),a={headers:{Authorization:"Bearer "+e}};H.a.post(M+"photos/"+t+"/like/",{},a),this.$router.push("/photos/"+t+"/detail")}}},J=D,Q=(a("6dd1"),a("62ad")),X=a("a523"),Y=a("adda"),Z=a("da13"),tt=a("5d23"),et=Object(u["a"])(J,q,U,!1,null,"79713750",null),at=et.exports;d()(et,{VBtn:p["a"],VCard:S["a"],VCardActions:T["a"],VCol:Q["a"],VContainer:X["a"],VIcon:P["a"],VImg:Y["a"],VItem:L["a"],VItemGroup:O["b"],VListItem:Z["a"],VListItemContent:tt["a"],VListItemTitle:tt["b"],VRow:B["a"]});var ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",[a("Header"),a("router-view"),a("v-main",[1==t.is_staff?a("v-container",{attrs:{id:"admin"}},[a("v-alert",{attrs:{dense:"",prominent:"",text:"",align:"center",type:"success"}},[t._v("Admin interface ")]),a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"mb-5",attrs:{cols:"6"}},[a("v-btn",{staticClass:"mr-4 mt-12",attrs:{color:"primary"},on:{click:t.btnWaitingToApprove}},[t._v("Waiting to approve ")]),a("v-btn",{staticClass:"mr-2 mt-12",attrs:{color:"primary"},on:{click:t.btnAlreadyApproved}},[t._v("Already approved ")])],1)],1),!0===t.waitingToApprove?a("v-row",{attrs:{align:"center",justify:"center"}},t._l(t.photosToApprove,(function(e){return a("v-col",{key:e.id,attrs:{cols:"12",md:"4"}},[a("v-item-group",[a("v-item",[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",outlined:""}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[e.photo_url?a("v-img",{attrs:{src:e.photo_url,contain:""}}):t._e()],1)],1),a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("v-list-item",{staticClass:"mb-1"},[t._v("Uploaded by: "+t._s(e.owner.first_name)+" "+t._s(e.owner.last_name))])],1)],1),a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"headline mb-1"},[a("div",{staticClass:"my-2"},[a("v-btn",{attrs:{fab:"",dark:"","x-small":"",color:"primary"},on:{click:function(a){return t.approve(e.id)}}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-check-bold ")])],1),t._v(" Approve ")],1)])],1)],1)],1)],1)],1)],1)})),1):t._e(),!0===t.alreadyApproved?a("v-row",{attrs:{align:"center",justify:"center"}},t._l(t.photosAlreadyApproved,(function(e){return a("v-col",{key:e.id,attrs:{cols:"12",md:"4"}},[a("v-item",[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",outlined:""}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[e.photo_url?a("v-img",{attrs:{src:e.photo_url,contain:""}}):t._e()],1)],1),a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("v-list-item",{staticClass:"mb-1"},[t._v("Uploaded by: "+t._s(e.owner.first_name)+" "+t._s(e.owner.last_name))])],1)],1)],1)],1)],1)})),1):t._e()],1):t._e(),1!=t.is_staff?a("div",[a("v-alert",{attrs:{dense:"",prominent:"",text:"",align:"center",type:"error"}},[t._v("Sorry, but you can not access this page ")])],1):t._e()],1)],1)],1)},nt=[],st="http://localhost:8000/api/v1/photos/",it="http://localhost:8000/api/v1/profile/",rt={name:"Photos",data:function(){return{token:G.getToken(),is_staff:!1,waitingToApprove:!1,alreadyApproved:!1,photosToApprove:[],photosAlreadyApproved:[],axiosConfig:{}}},mounted:function(){var t=this;this.axiosConfig={headers:{Authorization:"Bearer "+this.token}},H.a.get(it,this.axiosConfig).then((function(e){!0===e.data.is_staff&&(t.is_staff=!0,H.a.get(st+"waiting_to_approve/",t.axiosConfig).then((function(e){t.photosToApprove=e.data})),H.a.get(st+"already_approved/",t.axiosConfig).then((function(e){t.photosAlreadyApproved=e.data})))}))},methods:{approve:function(t){H.a.post(st+t+"/approve/",{},this.axiosConfig),this.$router.push("/photos/"+t+"/detail")},btnWaitingToApprove:function(){this.waitingToApprove=!0,this.alreadyApproved=!1},btnAlreadyApproved:function(){this.alreadyApproved=!0,this.waitingToApprove=!1}}},lt=rt,ct=a("0798"),ut=Object(u["a"])(lt,ot,nt,!1,null,null,null),mt=ut.exports;d()(ut,{VAlert:ct["a"],VApp:k["a"],VBtn:p["a"],VCard:S["a"],VCol:Q["a"],VContainer:X["a"],VIcon:P["a"],VImg:Y["a"],VItem:L["a"],VItemGroup:O["b"],VListItem:Z["a"],VListItemContent:tt["a"],VListItemTitle:tt["b"],VMain:w["a"],VRow:B["a"]});var dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{id:"login"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"mb-5",attrs:{cols:"8"}},[null==t.token?a("v-form",{key:t.loginKey,ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.login(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("h2",[t._v("Login form")]),a("v-text-field",{attrs:{rules:t.emailRules,label:"e-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{"append-icon":t.show1?"mdi-eye":"mdi-eye-off",type:t.show1?"text":"password",rules:t.passwordRules,label:"Password",hint:"At least 8 characters",counter:""},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"primary"},on:{click:t.login}},[t._v(" Login ")]),a("v-btn",{staticClass:"mr-4",attrs:{color:"error"},on:{click:t.reset}},[t._v(" Cancel ")])],1):t._e()],1)],1)],1)},vt=[],pt="http://localhost:8000/api/v1/auth/login/",ht={name:"Login",data:function(){return{loginKey:0,show1:!1,valid:!0,email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],password:"",passwordRules:[function(t){return!!t||"Password is required"}],token:localStorage.getItem("user-token")||null}},methods:{reset:function(){this.$refs.form.reset()},login:function(){var t=this;this.$refs.form.validate(),H.a.post(pt,{email:this.email,password:this.password}).then((function(e){t.token=e.data.auth_token,localStorage.setItem("user-token",e.data.auth_token)})).then((function(){t.$router.push("/photos")})).catch(localStorage.removeItem("user-token"))}}},ft=ht,bt=(a("bad7"),a("4bd4")),gt=a("8654"),_t=Object(u["a"])(ft,dt,vt,!1,null,"3a2700da",null),kt=_t.exports;d()(_t,{VBtn:p["a"],VCol:Q["a"],VContainer:X["a"],VForm:bt["a"],VRow:B["a"],VTextField:gt["a"]});var wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{id:"register"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"mb-5",attrs:{cols:"8"}},[null==t.token?a("v-form",{key:t.registerKey,ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("h2",[t._v("Registration form")]),a("v-text-field",{attrs:{counter:10,rules:t.nameRules,label:"first name",required:""},model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}}),a("v-text-field",{attrs:{counter:10,rules:t.nameRules,label:"last name",required:""},model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}}),a("v-text-field",{attrs:{rules:t.emailRules,label:"e-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{type:t.show1?"text":"password",rules:t.passwordRules,label:"Password",hint:"At least 8 characters",counter:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("v-btn",{staticClass:"mr-4",attrs:{color:"primary"},on:{click:t.register}},[t._v(" Register ")]),a("v-btn",{staticClass:"mr-4",attrs:{color:"error"},on:{click:t.reset}},[t._v(" Reset Form ")]),a("v-btn",{attrs:{color:"warning"},on:{click:t.resetValidation}},[t._v(" Reset Validation ")])],1):t._e()],1)],1)],1)},yt=[],Ct="http://localhost:8000/api/v1/auth/register/",Vt={name:"Register",data:function(){return{show1:!1,registerKey:0,valid:!0,firstName:"",lastName:"",nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=10||"Name must be less than 10 characters"}],email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],password:"",passwordRules:[function(t){return!!t||"Password is required"}],token:localStorage.getItem("user-token")||null}},methods:{reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()},register:function(){var t=this;this.$refs.form.validate(),H.a.post(Ct,{email:this.email,password:this.password,first_name:this.firstName,last_name:this.lastName}).then((function(e){t.token=e.data.auth_token,localStorage.setItem("user-token",e.data.auth_token).then(t.registerKey+=1)})).catch(localStorage.removeItem("user-token")),this.$router.push("/")}}},xt=Vt,At=(a("35e8"),Object(u["a"])(xt,wt,yt,!1,null,"37aa789a",null)),It=At.exports;d()(At,{VBtn:p["a"],VCol:Q["a"],VContainer:X["a"],VForm:bt["a"],VRow:B["a"],VTextField:gt["a"]});var Rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"users"}},[a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("v-item-group",{attrs:{multiple:""}},[a("v-container",[a("v-row",t._l(t.users,(function(e){return a("v-col",{key:e.id,attrs:{cols:"12",md:"4"}},[a("v-item",[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",outlined:""}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"headline mb-1"},[t._v(t._s(e.email))])],1)],1),a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"headline mb-1"},[t._v(t._s(e.username))])],1)],1),a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"headline mb-1"},[t._v(t._s(e.first_name)+" "+t._s(e.last_name))])],1)],1),a("v-card-actions",[a("v-btn",{attrs:{text:""}},[t._v("See profile")])],1)],1)],1)],1)})),1)],1)],1)],1)],1)},$t=[],jt="http://localhost:8000/api/v1/users/",St={name:"Users",data:function(){return{users:[]}},mounted:function(){var t=this,e=G.getToken(),a={headers:{Authorization:"Bearer "+e}};H.a.get(jt,a).then((function(e){t.users=e.data}))},created:function(){}},Tt=St,Pt=(a("4dfd"),Object(u["a"])(Tt,Rt,$t,!1,null,"16a75ce3",null)),Lt=Pt.exports;d()(Pt,{VBtn:p["a"],VCard:S["a"],VCardActions:T["a"],VCol:Q["a"],VContainer:X["a"],VItem:L["a"],VItemGroup:O["b"],VListItem:Z["a"],VListItemContent:tt["a"],VListItemTitle:tt["b"],VRow:B["a"]});var Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return null!=t.token?a("div",{key:t.addPhotoKey,attrs:{id:"content"}},[a("p",[t._v("Select the new photo")]),a("input",{attrs:{type:"file",label:"select the photo"},on:{change:t.onFileSelected}}),a("v-text-field",{attrs:{label:"Add some description"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),a("v-btn",{staticClass:"ml-8",attrs:{color:"primary"},on:{click:t.onUpload}},[t._v(" Submit ")])],1):t._e()},Bt=[],Et=(a("a4d3"),a("e01a"),"http://localhost:8000/api/v1/photos/"),zt={data:function(){return{token:localStorage.getItem("user-token")||null,description:null,photo:null,message:null,addPhotoKey:0}},methods:{reset:function(){this.$refs.form.reset()},onFileSelected:function(t){var e=this,a=t.target.files[0],o=new FileReader;o.onloadend=function(){e.photo=o.result},o.readAsDataURL(a)},onUpload:function(){var t,e=this,a=G.getToken(),o={headers:{Authorization:"Bearer "+a}};t={description:this.description,photo:this.photo},H.a.post(Et,t,o).then((function(){e.$router.push("/photos")}))}}},Ft=zt,Nt=(a("4039"),Object(u["a"])(Ft,Ot,Bt,!1,null,"dda9a09a",null)),qt=Nt.exports;d()(Nt,{VBtn:p["a"],VTextField:gt["a"]});var Ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return null!=t.token?a("div",{attrs:{id:"photo_detail"}},[null!==t.photo?a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("v-item-group",{attrs:{multiple:""}},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",md:"12"}},[a("v-item",[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"580",outlined:""}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("v-img",{attrs:{src:t.photo.photo_url,contain:""}})],1)],1),a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"headline mb-1"},[a("div",{staticClass:"my-2"},[a("v-btn",{attrs:{fab:"",dark:"","x-small":"",color:"pink"},on:{click:t.like}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-thumb-up ")])],1),t._v(" "),a("span",{staticClass:"small"},[t._v("Likes: "+t._s(t.photo.likes))])],1)])],1)],1),a("v-list-item-title",{staticClass:"headline mb-1"},[a("div",{},[a("v-btn",{attrs:{id:"btn-add-comment",fab:"",dark:"",medium:"",color:"pink",to:{name:"PhotoComment"}}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-message-text ")])],1),a("span",{staticClass:"small",attrs:{id:"span-add-comment"}},[t._v("Add comment")])],1),a("span",{attrs:{id:"see-comments"}},[t._v("Comments:")])]),t._l(t.photo.comments,(function(e){return a("v-list-item",{key:e.id,attrs:{"three-line":""}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"headline mb-1"},[a("div",{staticClass:"my-6"},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-message-text ")]),t._v(" "+t._s(e.comment)),a("br"),a("span",{staticClass:"small"},[t._v(" From: "+t._s(e.user.first_name)+" "+t._s(e.user.last_name)+" ")])],1)])],1)],1)})),a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("v-list-item",{staticClass:"mb-1"},[t._v("Uploaded by: "+t._s(t.photo.owner.first_name)+" "+t._s(t.photo.owner.last_name))])],1)],1)],2)],1)],1)],1)],1)],1)],1):t._e()],1):t._e()},Wt=[],Ht="http://localhost:8000/api/v1/photos/",Kt={data:function(){return{photo:null,token:localStorage.getItem("user-token")||null}},mounted:function(){var t=this,e=G.getToken(),a={headers:{Authorization:"Bearer "+e}};H.a.get(Ht+this.$route.params.id+"/",a).then((function(e){t.photo=e.data}))},methods:{like:function(){var t,e=this,a=G.getToken(),o={headers:{Authorization:"Bearer "+a}};t=this.$route.params.id,H.a.post(Ht+t+"/like/",{},o).then((function(t){e.photo.likes=t.data.likes}))}}},Gt=Kt,Mt=(a("fc9d"),Object(u["a"])(Gt,Ut,Wt,!1,null,"7b05cb1d",null)),Dt=Mt.exports;d()(Mt,{VBtn:p["a"],VCard:S["a"],VCol:Q["a"],VContainer:X["a"],VIcon:P["a"],VImg:Y["a"],VItem:L["a"],VItemGroup:O["b"],VListItem:Z["a"],VListItemContent:tt["a"],VListItemTitle:tt["b"],VRow:B["a"]});var Jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{id:"photoComment"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"mb-5",attrs:{cols:"8"}},[null!=t.token?a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("h2",[t._v("Write your comment")]),a("v-text-field",{attrs:{label:"Comment",required:""},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}}),a("v-btn",{staticClass:"mr-4",attrs:{color:"primary"},on:{click:t.add_comment}},[t._v(" Add comment ")]),a("v-btn",{staticClass:"mr-4",attrs:{color:"error"},on:{click:t.reset}},[t._v(" Reset Form ")])],1):t._e()],1)],1)],1)},Qt=[],Xt="http://localhost:8000/api/v1/photos/",Yt={data:function(){return{comment:"",valid:!0,token:localStorage.getItem("user-token")||null}},methods:{reset:function(){this.$refs.form.reset()},add_comment:function(){var t,e={headers:{Authorization:"Bearer "+this.token}};t=this.$route.params.id,H.a.post(Xt+t+"/comment/",{comment:this.comment},e),this.$router.push("/photos/"+t+"/detail")}}},Zt=Yt,te=(a("d39e"),Object(u["a"])(Zt,Jt,Qt,!1,null,"1bc031b3",null)),ee=te.exports;d()(te,{VBtn:p["a"],VCol:Q["a"],VContainer:X["a"],VForm:bt["a"],VRow:B["a"],VTextField:gt["a"]}),o["a"].use(A["a"]);var ae=[{path:"/",name:"Home",component:N},{path:"/login",name:"Login",component:kt},{path:"/register",name:"Register",component:It},{path:"/admin",name:"Admin",component:mt},{path:"/users",name:"Users",component:Lt},{path:"/photos",name:"Photos",component:at},{path:"/photos/add",name:"PhotoAdd",component:qt},{path:"/photos/:id/detail",name:"PhotoDetail",component:Dt},{path:"/photos/:id/comment",name:"PhotoComment",component:ee}],oe=new A["a"]({mode:"history",base:"/",routes:ae}),ne=oe;o["a"].config.productionTip=!1,new o["a"]({vuetify:x,router:ne,render:function(t){return t(C)}}).$mount("#app")},"6dd1":function(t,e,a){"use strict";a("dcbe")},7361:function(t,e,a){},"9e42":function(t,e,a){},b366:function(t,e,a){},bad7:function(t,e,a){"use strict";a("7361")},c2ad:function(t,e,a){"use strict";a("38fe")},c90b:function(t,e,a){},d39e:function(t,e,a){"use strict";a("f373")},dcbe:function(t,e,a){},ef62:function(t,e,a){},f373:function(t,e,a){},fc9d:function(t,e,a){"use strict";a("03c8")}});
//# sourceMappingURL=app.5526f87a.js.map