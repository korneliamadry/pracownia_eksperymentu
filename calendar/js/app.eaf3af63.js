(function(t){function e(e){for(var a,i,l=e[0],s=e[1],c=e[2],u=0,v=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);d&&d(e);while(v.length)v.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-content",[n("Login"),n("Calendar")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"fill-height"},[n("v-col",[n("v-sheet",{attrs:{height:"64"}},[n("v-toolbar",{attrs:{flat:"",color:"white"}},[n("v-btn",{attrs:{color:"primary ml-5",dark:""},on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},[t._v(" New Event ")]),n("v-btn",{staticClass:"mr-4 mx-5",attrs:{outlined:""},on:{click:t.setToday}},[t._v(" Today ")]),n("v-btn",{attrs:{fab:"",text:"",small:""},on:{click:t.prev}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-chevron-left")])],1),n("v-btn",{attrs:{fab:"",text:"",small:""},on:{click:t.next}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-chevron-right")])],1),n("v-toolbar-title",[t._v(t._s(t.title))]),n("div",{staticClass:"flex-grow-1"}),n("v-menu",{attrs:{bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({attrs:{outlined:""}},a),[n("span",[t._v(t._s(t.typeToLabel[t.type]))]),n("v-icon",{attrs:{right:""}},[t._v("mdi-menu-down")])],1)]}}])},[n("v-list",[n("v-list-item",{on:{click:function(e){t.type="day"}}},[n("v-list-item-title",[t._v("Day")])],1),n("v-list-item",{on:{click:function(e){t.type="week"}}},[n("v-list-item-title",[t._v("Week")])],1),n("v-list-item",{on:{click:function(e){t.type="month"}}},[n("v-list-item-title",[t._v("Month")])],1),n("v-list-item",{on:{click:function(e){t.type="4day"}}},[n("v-list-item-title",[t._v("4 days")])],1)],1)],1),n("div",{staticClass:"text-center"},[n("a",{attrs:{href:"#home",onclick:"showPage('home'), logout()"}},[n("v-btn",{attrs:{rounded:"",color:"primary mx-7",dark:""}},[t._v("Log out")])],1)])],1)],1),n("v-dialog",{attrs:{"max-width":"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-container",[n("v-form",{on:{submit:function(e){return e.preventDefault(),t.addEvent(e)}}},[n("v-text-field",{attrs:{type:"text",label:"event name (required)"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("v-text-field",{attrs:{type:"text",label:"detail"},model:{value:t.details,callback:function(e){t.details=e},expression:"details"}}),n("v-text-field",{attrs:{type:"date",label:"start (required)"},model:{value:t.start,callback:function(e){t.start=e},expression:"start"}}),n("v-text-field",{attrs:{type:"date",label:"end (required)"},model:{value:t.end,callback:function(e){t.end=e},expression:"end"}}),n("v-text-field",{attrs:{type:"color",label:"color (click to open color menu)"},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}}),n("v-btn",{staticClass:"mr-4",attrs:{type:"submit",color:"primary"},on:{click:function(e){e.stopPropagation(),t.dialog=!1}}},[t._v(" create event ")])],1)],1)],1)],1),n("v-dialog",{attrs:{"max-width":"500"},model:{value:t.dialogDate,callback:function(e){t.dialogDate=e},expression:"dialogDate"}},[n("v-card",[n("v-container",[n("v-form",{on:{submit:function(e){return e.preventDefault(),t.addEvent(e)}}},[n("v-text-field",{attrs:{type:"text",label:"event name (required)"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("v-text-field",{attrs:{type:"text",label:"detail"},model:{value:t.details,callback:function(e){t.details=e},expression:"details"}}),n("v-text-field",{attrs:{type:"date",label:"start (required)"},model:{value:t.start,callback:function(e){t.start=e},expression:"start"}}),n("v-text-field",{attrs:{type:"date",label:"end (required)"},model:{value:t.end,callback:function(e){t.end=e},expression:"end"}}),n("v-text-field",{attrs:{type:"color",label:"color (click to open color menu)"},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}}),n("v-btn",{staticClass:"mr-4",attrs:{type:"submit",color:"primary"},on:{click:function(e){e.stopPropagation(),t.dialog=!1}}},[t._v(" create event ")])],1)],1)],1)],1),n("v-sheet",{attrs:{height:"600"}},[n("v-calendar",{ref:"calendar",attrs:{color:"primary",events:t.events,"event-color":t.getEventColor,"event-margin-bottom":3,now:t.today,type:t.type},on:{"click:event":t.showEvent,"click:more":t.viewDay,"click:date":t.setDialogDate,change:t.updateRange},model:{value:t.focus,callback:function(e){t.focus=e},expression:"focus"}}),n("v-menu",{attrs:{"close-on-content-click":!1,activator:t.selectedElement,"offset-x":""},model:{value:t.selectedOpen,callback:function(e){t.selectedOpen=e},expression:"selectedOpen"}},[n("v-card",{attrs:{color:"grey lighten-4",width:350,flat:""}},[n("v-toolbar",{attrs:{color:t.selectedEvent.color,dark:""}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.deleteEvent(t.selectedEvent.id)}}},[n("v-icon",[t._v("mdi-delete")])],1),n("v-toolbar-title",{domProps:{innerHTML:t._s(t.selectedEvent.name)}}),n("div",{staticClass:"flex-grow-1"})],1),n("v-card-text",[t.currentlyEditing!==t.selectedEvent.id?n("form",[t._v(" "+t._s(t.selectedEvent.details)+" ")]):n("form",[n("textarea-autosize",{staticStyle:{width:"100%"},attrs:{type:"text","min-height":100,placeholder:"add note"},model:{value:t.selectedEvent.details,callback:function(e){t.$set(t.selectedEvent,"details",e)},expression:"selectedEvent.details"}})],1)]),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"secondary"},on:{click:function(e){t.selectedOpen=!1}}},[t._v(" close ")]),t.currentlyEditing!==t.selectedEvent.id?n("v-btn",{attrs:{text:""},on:{click:function(e){return e.preventDefault(),t.editEvent(t.selectedEvent)}}},[t._v(" edit ")]):n("v-btn",{attrs:{text:"",type:"submit"},on:{click:function(e){return e.preventDefault(),t.updateEvent(t.selectedEvent)}}},[t._v(" Save ")])],1)],1)],1)],1)],1)],1)},l=[],s=(n("99af"),n("b0c0"),n("d3b7"),n("159b"),n("96cf"),{data:function(){return{today:(new Date).toISOString().substr(0,10),focus:(new Date).toISOString().substr(0,10),type:"month",typeToLabel:{month:"Month",week:"Week",day:"Day","4day":"4 Days"},name:null,details:null,start:null,end:null,color:"#1976D2",currentlyEditing:null,selectedEvent:{},selectedElement:null,selectedOpen:!1,events:[],dialog:!1,dialogDate:!1}},created:function(){this.getEvents()},computed:{title:function(){var t=this.start,e=this.end;if(!t||!e)return"";var n=this.monthFormatter(t),a=this.monthFormatter(e),r=n===a?"":a,o=t.year,i=e.year,l=o===i?"":i,s=t.day+this.nth(t.day),c=e.day+this.nth(e.day);switch(this.type){case"month":return"".concat(n," ").concat(o);case"week":case"4day":return"".concat(n," ").concat(s," ").concat(o," - ").concat(r," ").concat(c," ").concat(l);case"day":return"".concat(n," ").concat(s," ").concat(o)}return""},monthFormatter:function(){return this.$refs.calendar.getFormatter({timeZone:"UTC",month:"long"})}},methods:{getEvents:function(){var t,e;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(tt.collection("calEvent").get());case 2:t=n.sent,e=[],t.forEach((function(t){var n=t.data();n.id=t.id,e.push(n)})),console.log(e),this.events=e;case 7:case"end":return n.stop()}}),null,this)},setDialogDate:function(t){var e=t.date;this.dialogDate=!0,this.focus=e},viewDay:function(t){var e=t.date;this.focus=e,this.type="day"},getEventColor:function(t){return t.color},setToday:function(){this.focus=this.today},prev:function(){this.$refs.calendar.prev()},next:function(){this.$refs.calendar.next()},addEvent:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.name&&this.start&&this.end)){t.next=7;break}return t.next=3,regeneratorRuntime.awrap(tt.collection("calEvent").add({name:this.name,details:this.details,start:this.start,end:this.end,color:this.color}));case 3:this.getEvents(),this.name="",this.details="",this.start="",this.end="",this.color="",t.next=8;break;case 7:alert("You must enter event name, start, and end time");case 8:case"end":return t.stop()}}),null,this)},editEvent:function(t){this.currentlyEditing=t.id},updateEvent:function(t){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(tt.collection("calEvent").doc(this.currentlyEditing).update({details:t.details}));case 2:this.selectedOpen=!1,this.currentlyEditing=null;case 3:case"end":return e.stop()}}),null,this)},deleteEvent:function(t){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(tt.collection("calEvent").doc(t).delete());case 2:this.selectedOpen=!1,this.getEvents();case 3:case"end":return e.stop()}}),null,this)},showEvent:function(t){var e=this,n=t.nativeEvent,a=t.event,r=function(){e.selectedEvent=a,e.selectedElement=n.target,setTimeout((function(){return e.selectedOpen=!0}),10)};this.selectedOpen?(this.selectedOpen=!1,setTimeout(r,10)):r(),n.stopPropagation()},updateRange:function(t){var e=t.start,n=t.end;this.start=e,this.end=n},nth:function(t){return t>3&&t<21?"th":["th","st","nd","rd","th","th","th","th","th","th"][t%10]}}}),c=s,d=n("2877"),u=n("6544"),v=n.n(u),p=n("8336"),f=n("a4f6"),m=n("b0af"),h=n("99d9"),g=n("62ad"),b=n("a523"),y=n("169a"),x=n("4bd4"),w=n("132d"),k=n("8860"),E=n("da13"),_=n("5d23"),C=n("e449"),O=n("0fd9"),D=n("8dd9"),V=n("8654"),T=n("71d9"),P=n("2a7f"),S=Object(d["a"])(c,i,l,!1,null,null,null),j=S.exports;v()(S,{VBtn:p["a"],VCalendar:f["a"],VCard:m["a"],VCardActions:h["a"],VCardText:h["b"],VCol:g["a"],VContainer:b["a"],VDialog:y["a"],VForm:x["a"],VIcon:w["a"],VList:k["a"],VListItem:E["a"],VListItemTitle:_["a"],VMenu:C["a"],VRow:O["a"],VSheet:D["a"],VTextField:V["a"],VToolbar:T["a"],VToolbarTitle:P["a"]});var L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col s12 m8 offset-m2"},[n("div",{staticClass:"login card-panel green white-text center"},[n("h3",[t._v("Login")]),n("form",{attrs:{action:"index.html"}},[n("div",{staticClass:"input-field"},[n("i",{staticClass:"material-icons prefix"},[t._v("email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),n("label",{staticClass:"white-text",attrs:{for:"email"}},[t._v("Email Address")])]),n("div",{staticClass:"input-field"},[n("i",{staticClass:"material-icons prefix"},[t._v("lock")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("label",{staticClass:"white-text",attrs:{for:"password"}},[t._v("Password")])]),n("button",{staticClass:"btn btn-large btn-extended grey lighten-4 black-text",on:{click:t.login}},[t._v("Login")])])])])])])])},R=[],I=n("8aa50"),$=n.n(I),q={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(t){var e=this;$.a.auth().signInWithEmailAndPassword(this.email,this.password).then((function(t){alert("You are logged in as ".concat(t.email)),e.$router.push({name:"calendar",query:{redirect:"/calendar"}})}),(function(t){alert(t.message)})),t.preventDefault()}}},A=q,M=Object(d["a"])(A,L,R,!1,null,null,null),F=M.exports,z={name:"App",components:{Calendar:j,Login:F},data:function(){return{}}},Q=z,U=n("7496"),B=n("a75b"),N=Object(d["a"])(Q,r,o,!1,null,null,null),W=N.exports;v()(N,{VApp:U["a"],VContent:B["a"]});var H=n("f309");a["a"].use(H["a"]);var J=new H["a"]({}),K=n("8c4f"),Y=n("3f9d"),G=n("59ca"),X=n.n(G);n("e71f");n.d(e,"db",(function(){return tt})),a["a"].use(Y["a"]),a["a"].use(K["a"]);var Z=new K["a"]({router:Z,mode:"history"});a["a"].config.productionTip=!1,X.a.initializeApp({apiKey:"AIzaSyAQxGltUQUv5zkq6BKHQCwTQ5XVPzou348",authDomain:"pracownia-a5a80.firebaseapp.com",databaseURL:"https://pracownia-a5a80.firebaseio.com",projectId:"pracownia-a5a80",storageBucket:"pracownia-a5a80.appspot.com",messagingSenderId:"67451820563",appId:"1:67451820563:web:f8d463e14220a4d5677de6"});var tt=X.a.firestore();new a["a"]({vuetify:J,router:Z,render:function(t){return t(W)}}).$mount("#app")}});
//# sourceMappingURL=app.eaf3af63.js.map