(this.webpackJsonpintelpixel=this.webpackJsonpintelpixel||[]).push([[0],{44:function(e,c,a){},45:function(e,c,a){},46:function(e,c,a){},70:function(e,c,a){},72:function(e,c,a){},88:function(e,c,a){"use strict";a.r(c);var s=a(1),t=a.n(s),n=a(36),l=a.n(n),i=(a(44),a(45),a(22)),r=a(2),o=a(9),d=a(12),j=a(3),m=(a(46),a.p+"static/media/intelpixel.436cc0ea.png"),b=a.p+"static/media/xray.f4dcc8f2.jpg",h=a.p+"static/media/0.31da962b.jpg",u=a(11),x=a.n(u),p=a(19),O=a(23),N=a.n(O);function v(){var e,c="http://104.211.119.180:8080";return(e=localStorage.getItem("user")&&void 0!==localStorage.getItem("user")?N.a.create({baseURL:c,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("user"))}}):N.a.create({baseURL:c,headers:{"Content-Type":"application/json"}})).interceptors.response.use((function(e){return void 0!==e?e.data?e.data:e:{}}),(function(e){return console.log(e.data),Promise.reject(e.response)})),e}var f=function(){var e=Object(p.a)(x.a.mark((function e(c,a){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v().get("/api/v1/".concat(c,"/get").concat(a));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(c,a){return e.apply(this,arguments)}}(),g=function(){var e=Object(p.a)(x.a.mark((function e(c){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v().get("/api/v1/elasticsearch/get".concat(c));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}(),k=function(){var e=Object(p.a)(x.a.mark((function e(c){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v().get("/api/v1/elasticsearch/details/get?_id=".concat(c));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}(),w=a(0),y=function(e){var c=Object(r.f)(),a=Object(s.useState)(!1),t=Object(j.a)(a,2),n=t[0],l=t[1],i=Object(s.useState)(!1),u=Object(j.a)(i,2),x=u[0],p=u[1],O=Object(s.useState)(!1),N=Object(j.a)(O,2),v=N[0],k=N[1],y=Object(s.useState)([]),_=Object(j.a)(y,2),S=_[0],C=_[1],R=Object(s.useState)(2),I=Object(j.a)(R,2),D=I[0],E=I[1],T=Object(s.useState)(100),F=Object(j.a)(T,2),P=F[0],M=F[1],A=Object(s.useState)([{name:"Female",check:!1},{name:"Male",check:!1}]),G=Object(j.a)(A,2),L=G[0],U=G[1],B=Object(s.useState)([]),H=Object(j.a)(B,2),X=H[0],Y=H[1],J=Object(s.useState)([]),q=Object(j.a)(J,2),V=q[0],Z=q[1],z=Object(s.useState)([]),K=Object(j.a)(z,2),Q=K[0],W=K[1],$=Object(s.useState)([]),ee=Object(j.a)($,2),ce=ee[0],ae=ee[1],se=Object(s.useState)([]),te=Object(j.a)(se,2),ne=te[0],le=te[1],ie=Object(s.useState)([]),re=Object(j.a)(ie,2),oe=re[0],de=re[1],je=Object(s.useState)([]),me=Object(j.a)(je,2),be=me[0],he=me[1],ue=Object(s.useState)([]),xe=Object(j.a)(ue,2),pe=xe[0],Oe=xe[1],Ne=Object(s.useState)(""),ve=Object(j.a)(Ne,2),fe=ve[0],ge=ve[1],ke=Object(s.useState)(""),we=Object(j.a)(ke,2),ye=we[0],_e=we[1];Object(s.useEffect)((function(){Re("finding",""),Re("demographic",""),Re("modality","")}),[]);var Se=function(e){var c="";return e.forEach((function(e){e.check&&(c=c+","+e.name.toLowerCase())})),c=""==c?"":c.substring(1)};Object(s.useEffect)((function(){var e="",c=Se(ce),a=Se(pe);""==(e="?modality=".concat(""==c?null:c))?e="?body_part=".concat(""==a?null:a):e+="&body_part=".concat(""==a?null:a),Re("manufacturer",e),Re("organ/based/on/modality",e),Re("technicalspecification",e),Re("disease/based/on/modality/bodypart",e),Re("procedure/based/on/modality/bodypart",e)}),[x]),Object(s.useEffect)((function(){var e="",c=Se(ce),a=Se(pe);""==(e="?modality=".concat(""==c?null:c))?e="?body_part=".concat(""==a?null:a):e+="&body_part=".concat(""==a?null:a),Re("disease/based/on/modality/bodypart",e),Re("procedure/based/on/modality/bodypart",e)}),[v]),Object(s.useEffect)((function(){var e="?age=".concat(P,"&ratings=").concat(D),c=Se(L),a=Se(V),s=Se(ce),t=Se(Q),n=Se(X),l=Se(ne),i=Se(oe),r=Se(be),o=Se(pe);""!=c&&(e+="&gender=".concat(""==c?null:c)),""!=a&&(e+="&findings=".concat(""==a?null:a)),""!=s&&(e+="&modality=".concat(""==s?null:s)),""!=t&&(e+="&manufacturer=".concat(""==t?null:t)),""!=n&&(e+="&demographics=".concat(""==n?null:n)),""!=l&&(e+="&diesease=".concat(""==l?null:l)),""!=i&&(e+="&procedure=".concat(""==i?null:i)),""!=r&&(e+="&technical_specifications=".concat(""==r?null:r)),""!=o&&(e+="&bodypart=".concat(""==o?null:o)),""!=fe&&(e+="&start_study_date=".concat(""==fe?null:"".concat(fe,"T00:00:00Z"))),""!=ye&&(e+="&end_study_date=".concat(""==ye?null:"".concat(ye,"T00:00:00Z"))),Ce(e)}),[n]);var Ce=function(e){g(e).then((function(e){e.status?C(e.data):C([])})).catch((function(e){console.log("ERROR"),console.log(e)}))},Re=function(e,c){f(e,c).then((function(c){if(c.status){var a=[];switch(c.data.forEach((function(e){a.push(Object(d.a)(Object(d.a)({},e),{},{check:!1}))})),e){case"finding":Z(a);break;case"demographic":Y(a);break;case"modality":ae(a);break;case"manufacturer":W(a);break;case"organ/based/on/modality":Oe(a);break;case"technicalspecification":he(a);break;case"disease/based/on/modality/bodypart":le(a);break;case"procedure/based/on/modality/bodypart":de(a)}}else switch(e){case"finding":Z([]);break;case"demographic":Y([]);break;case"modality":ae([]);break;case"manufacturer":W([]);break;case"organ/based/on/modality":Oe([]);break;case"technicalspecification":he([]);break;case"disease/based/on/modality/bodypart":le([]);break;case"procedure/based/on/modality/bodypart":de([])}})).catch((function(e){console.log("ERROR"),console.log(e)}))};return Object(w.jsx)("div",{className:"container-fluid dashboardPage",children:Object(w.jsxs)("div",{className:"row",children:[Object(w.jsxs)("aside",{className:"main-sidebar col-12 col-md-3 col-lg-2 px-0",children:[Object(w.jsx)("div",{className:"main-navbar",children:Object(w.jsxs)("nav",{className:"navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0",children:[Object(w.jsx)("a",{className:"navbar-brand w-100 mr-0",href:"#",children:Object(w.jsxs)("span",{className:"d-table m-auto",children:[Object(w.jsx)("img",{id:"main-logo",className:"d-inline-block align-top mr-1",src:m}),Object(w.jsx)("span",{className:"d-none d-md-inline ml-1"})]})}),Object(w.jsx)("a",{className:"toggle-sidebar d-sm-inline d-md-none d-lg-none",children:Object(w.jsx)("i",{className:"material-icons",children:"\ue5c4"})})]})}),Object(w.jsx)("form",{className:"main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none",children:Object(w.jsxs)("div",{className:"input-group input-group-seamless ml-3",children:[Object(w.jsx)("div",{className:"input-group-prepend",children:Object(w.jsx)("div",{className:"input-group-text",children:Object(w.jsx)("i",{className:"fas fa-search"})})}),Object(w.jsx)("input",{className:"navbar-search form-control",type:"text",placeholder:"Search for something...","aria-label":"Search"})]})}),Object(w.jsx)("div",{className:"nav-wrapper",children:Object(w.jsxs)("ul",{className:"nav flex-column",children:[Object(w.jsxs)("li",{className:"nav-item",children:[Object(w.jsx)("h3",{children:"RATING"}),Object(w.jsxs)("div",{className:"custom-control custom-radio mb-1",children:[Object(w.jsx)("input",{type:"radio",className:"custom-control-input",id:"Rating < 3",name:"rating",checked:2==D,onChange:function(e){E(2),l(!n)}}),Object(w.jsx)("label",{className:"custom-control-label",htmlFor:"Rating < 3",children:"Rating < 3"})]}),Object(w.jsxs)("div",{className:"custom-control custom-radio mb-1",children:[Object(w.jsx)("input",{type:"radio",className:"custom-control-input",id:"Rating 3-4",name:"rating",checked:4==D,onChange:function(e){E(4),l(!n)}}),Object(w.jsx)("label",{className:"custom-control-label",htmlFor:"Rating 3-4",children:"Rating 3-4"})]}),Object(w.jsxs)("div",{className:"custom-control custom-radio mb-1",children:[Object(w.jsx)("input",{type:"radio",className:"custom-control-input",id:"Rating > 4",name:"rating",checked:5==D,onChange:function(e){E(5),l(!n)}}),Object(w.jsx)("label",{className:"custom-control-label",htmlFor:"Rating > 4",children:"Rating > 4"})]})]}),Object(w.jsxs)("li",{className:"nav-item",children:[Object(w.jsx)("h3",{children:"GENDER"}),L.map((function(e,c){var a,s,t,i;return Object(w.jsxs)("div",{className:"custom-control custom-checkbox mb-1",children:[Object(w.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"GENDER"+(null!==(a=e.name)&&void 0!==a?a:""),checked:null!==(s=e.check)&&void 0!==s&&s,onChange:function(e){L[c].check=!L[c].check,U(Object(o.a)(L)),l(!n)}}),Object(w.jsx)("label",{className:"custom-control-label",htmlFor:"GENDER"+(null!==(t=e.name)&&void 0!==t?t:""),children:null!==(i=e.name)&&void 0!==i?i:""})]},c)}))]}),V.length>0&&Object(w.jsxs)("li",{className:"nav-item",children:[Object(w.jsx)("h3",{children:"FINDINGS"}),V.map((function(e,c){var a,s,t,i;return Object(w.jsxs)("div",{className:"custom-control custom-checkbox mb-1",children:[Object(w.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"FINDINGS"+(null!==(a=e.name)&&void 0!==a?a:""),checked:null!==(s=e.check)&&void 0!==s&&s,onChange:function(e){V[c].check=!V[c].check,Z(Object(o.a)(V)),l(!n)}}),Object(w.jsx)("label",{className:"custom-control-label",htmlFor:"FINDINGS"+(null!==(t=e.name)&&void 0!==t?t:""),children:null!==(i=e.name)&&void 0!==i?i:""})]},c)}))]}),ce.length>0&&Object(w.jsxs)("li",{className:"nav-item",children:[Object(w.jsx)("h3",{children:"MODALITY"}),ce.map((function(e,c){var a,s,t,i;return Object(w.jsxs)("div",{className:"custom-control custom-checkbox mb-1",children:[Object(w.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"MODALITY"+(null!==(a=e.name)&&void 0!==a?a:""),checked:null!==(s=e.check)&&void 0!==s&&s,onChange:function(e){ce[c].check=!ce[c].check,ae(Object(o.a)(ce)),l(!n),p(!x)}}),Object(w.jsx)("label",{className:"custom-control-label",htmlFor:"MODALITY"+(null!==(t=e.name)&&void 0!==t?t:""),children:null!==(i=e.name)&&void 0!==i?i:""})]},c)}))]}),Q.length>0&&Object(w.jsxs)("li",{className:"nav-item",children:[Object(w.jsx)("h3",{children:"MANUFACTURER"}),Q.map((function(e,c){var a,s,t,i;return Object(w.jsxs)("div",{className:"custom-control custom-checkbox mb-1",children:[Object(w.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"MANUFACTURER"+(null!==(a=e.name)&&void 0!==a?a:""),checked:null!==(s=e.check)&&void 0!==s&&s,onChange:function(e){Q[c].check=!Q[c].check,W(Object(o.a)(Q)),l(!n)}}),Object(w.jsx)("label",{className:"custom-control-label",htmlFor:"MANUFACTURER"+(null!==(t=e.name)&&void 0!==t?t:""),children:null!==(i=e.name)&&void 0!==i?i:""})]},c)}))]}),Object(w.jsxs)("li",{className:"nav-item",children:[Object(w.jsx)("h3",{children:"AGE"}),Object(w.jsx)("div",{className:"age-range mb-1",children:Object(w.jsx)("input",{onPointerUp:function(){l(!n)},type:"range",value:P,min:"0.1",max:"100",onChange:function(e){M(e.target.value)}})})]}),X.length>0&&Object(w.jsxs)("li",{className:"nav-item",children:[Object(w.jsx)("h3",{children:"DEMOGRAPHICS"}),X.map((function(e,c){var a,s,t,i;return Object(w.jsxs)("div",{className:"custom-control custom-checkbox mb-1",children:[Object(w.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"DEMOGRAPHICS"+(null!==(a=e.name)&&void 0!==a?a:""),checked:null!==(s=e.check)&&void 0!==s&&s,onChange:function(e){X[c].check=!X[c].check,Y(Object(o.a)(X)),l(!n)}}),Object(w.jsx)("label",{className:"custom-control-label",htmlFor:"DEMOGRAPHICS"+(null!==(t=e.name)&&void 0!==t?t:""),children:null!==(i=e.name)&&void 0!==i?i:""})]},c)}))]})]})})]}),Object(w.jsxs)("main",{className:"main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3",children:[Object(w.jsx)("div",{className:"main-navbar sticky-top bg-white",children:Object(w.jsxs)("nav",{className:"navbar align-items-stretch navbar-light flex-md-nowrap p-0",children:[Object(w.jsx)("form",{action:"#",className:"main-navbar__search w-100 d-none d-md-flex d-lg-flex",children:Object(w.jsxs)("div",{className:"input-group input-group-seamless ml-3",children:[Object(w.jsx)("div",{className:"input-group-prepend",children:Object(w.jsx)("div",{className:"input-group-text",children:Object(w.jsx)("i",{className:"fas fa-search"})})}),Object(w.jsx)("input",{className:"navbar-search form-control",type:"text",placeholder:"Search for something...","aria-label":"Search"})," "]})}),Object(w.jsxs)("ul",{className:"navbar-nav border-left flex-row header-user-wrap",children:[Object(w.jsx)("li",{children:Object(w.jsxs)("div",{className:"dropdown-menu dropdown-menu-small","aria-labelledby":"dropdownMenuLink",children:[Object(w.jsxs)("a",{className:"dropdown-item",href:"#",children:[Object(w.jsx)("div",{className:"notification__icon-wrapper",children:Object(w.jsx)("div",{className:"notification__icon",children:Object(w.jsx)("i",{className:"material-icons",children:"\ue6e1"})})}),Object(w.jsxs)("div",{className:"notification__content",children:[Object(w.jsx)("span",{className:"notification__category",children:"Analytics"}),Object(w.jsxs)("p",{children:["Your website\u2019s active users count increased by",Object(w.jsx)("span",{className:"text-success text-semibold",children:"28%"})," ","in the last week. Great job!"]})]})]}),Object(w.jsxs)("a",{className:"dropdown-item",href:"#",children:[Object(w.jsx)("div",{className:"notification__icon-wrapper",children:Object(w.jsx)("div",{className:"notification__icon",children:Object(w.jsx)("i",{className:"material-icons",children:"\ue8d1"})})}),Object(w.jsxs)("div",{className:"notification__content",children:[Object(w.jsx)("span",{className:"notification__category",children:"Sales"}),Object(w.jsxs)("p",{children:["Last week your store\u2019s sales count decreased by",Object(w.jsx)("span",{className:"text-danger text-semibold",children:"5.52%"}),". It could have been worse!"]})]})]}),Object(w.jsxs)("a",{className:"dropdown-item notification__all text-center",href:"#",children:[" ","View all Notifications"," "]})]})}),Object(w.jsxs)("li",{className:"nav-item dropdown",children:[Object(w.jsxs)("a",{className:"nav-link dropdown-toggle text-nowrap px-3","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false",children:[Object(w.jsx)("img",{className:"user-avatar rounded-circle mr-2",src:h}),Object(w.jsx)("span",{className:"d-md-inline-block",children:"Sierra Brooks"})]}),Object(w.jsxs)("div",{className:"dropdown-menu dropdown-menu-small",children:[Object(w.jsxs)("a",{className:"dropdown-item",href:"#",children:[Object(w.jsx)("i",{className:"material-icons",children:"\ue7fd"})," Profile"]}),Object(w.jsx)("div",{className:"dropdown-divider"}),Object(w.jsxs)("a",{className:"dropdown-item text-danger",href:"#",children:[Object(w.jsx)("i",{className:"material-icons text-danger",children:"\ue879"})," ","Logout"," "]})]})]})]}),Object(w.jsx)("nav",{className:"nav",children:Object(w.jsx)("a",{href:"#",className:"nav-link nav-link-icon toggle-sidebar d-sm-inline d-md-none text-center border-left","data-toggle":"collapse","data-target":".header-navbar","aria-expanded":"false","aria-controls":"header-navbar",children:Object(w.jsx)("i",{className:"material-icons",children:"\ue5d2"})})})]})}),Object(w.jsxs)("div",{className:"main-content-container container-fluid px-4",children:[Object(w.jsx)("div",{className:"page-header row no-gutters py-4"}),Object(w.jsx)("div",{className:"row mb-2",children:Object(w.jsx)("nav",{"aria-label":"breadcrumb",children:Object(w.jsxs)("ol",{className:"breadcrumb",children:[Object(w.jsx)("li",{className:"breadcrumb-item",children:Object(w.jsx)("a",{href:"#",children:"Home"})}),Object(w.jsx)("li",{className:"breadcrumb-item",children:Object(w.jsx)("a",{href:"#",children:"CT"})}),Object(w.jsx)("li",{className:"breadcrumb-item",children:Object(w.jsx)("a",{href:"#",children:"Chest"})}),Object(w.jsx)("li",{className:"breadcrumb-item",children:Object(w.jsx)("a",{href:"#",children:"India"})}),Object(w.jsx)("li",{className:"breadcrumb-item",children:Object(w.jsx)("a",{href:"#",children:"4 Slice"})}),Object(w.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Information"})]})})}),Object(w.jsxs)("div",{className:"row mb-2 top-category-wrap",children:[Object(w.jsx)("div",{className:"col mb-4",children:Object(w.jsxs)("ul",{className:"nav-item dropdown",children:[Object(w.jsx)("a",{className:"nav-link dropdown-toggle text-nowrap px-3","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false",children:Object(w.jsx)("span",{className:"d-md-inline-block",children:"Study Date"})}),Object(w.jsxs)("form",{className:"dropdown-menu dropdown-menu-small",children:[Object(w.jsxs)("div",{className:"dropdown-item",children:[Object(w.jsx)("label",{className:"mr-2",htmlFor:"start_date",children:"Start Date"}),Object(w.jsx)("input",{style:{width:"130px"},type:"date",value:fe.toString(),max:ye,onChange:function(e){console.log(e.target.value),ge(e.target.value),l(!n)}})]}),Object(w.jsxs)("div",{className:"dropdown-item",children:[Object(w.jsx)("label",{className:"mr-3",htmlFor:"end_date",children:"End Date"}),Object(w.jsx)("input",{style:{width:"130px"},type:"date",value:ye.toString(),min:fe,onChange:function(e){_e(e.target.value),l(!n)}})]})]})]})}),Object(w.jsx)("div",{className:"col mb-4",children:Object(w.jsxs)("ul",{className:"nav-item dropdown",children:[Object(w.jsx)("a",{className:"nav-link dropdown-toggle text-nowrap px-3","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false",children:Object(w.jsx)("span",{className:"d-md-inline-block",children:"Disease"})}),Object(w.jsx)("form",{className:"dropdown-menu dropdown-menu-small",children:ne.map((function(e,c){var a,s,t;return Object(w.jsx)("div",{className:"dropdown-item",children:Object(w.jsxs)("div",{className:"custom-control custom-checkbox mb-1",children:[Object(w.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"Disease"+(null!==(a=e.name)&&void 0!==a?a:""),checked:null!==(s=e.check)&&void 0!==s&&s,onChange:function(e){ne[c].check=!ne[c].check,le(Object(o.a)(ne)),l(!n)}}),Object(w.jsx)("label",{className:"custom-control-label",htmlFor:"Disease"+(null!==(t=e.name)&&void 0!==t?t:""),children:e.name})]})})}))})]})}),Object(w.jsx)("div",{className:"col mb-4",children:Object(w.jsxs)("ul",{className:"nav-item dropdown",children:[Object(w.jsx)("a",{className:"nav-link dropdown-toggle text-nowrap px-3","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false",children:Object(w.jsx)("span",{className:"d-md-inline-block",children:"Procedure"})}),Object(w.jsx)("form",{className:"dropdown-menu dropdown-menu-small",children:oe.map((function(e,c){var a,s,t;return Object(w.jsx)("div",{className:"dropdown-item",children:Object(w.jsxs)("div",{className:"custom-control custom-checkbox mb-1",children:[Object(w.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"Procedure"+(null!==(a=e.name)&&void 0!==a?a:""),checked:null!==(s=e.check)&&void 0!==s&&s,onChange:function(e){oe[c].check=!oe[c].check,de(Object(o.a)(oe)),l(!n)}}),Object(w.jsx)("label",{className:"custom-control-label",htmlFor:"Procedure"+(null!==(t=e.name)&&void 0!==t?t:""),children:e.name})]})})}))})]})}),Object(w.jsx)("div",{className:"col mb-4",children:Object(w.jsxs)("ul",{className:"nav-item dropdown",children:[Object(w.jsx)("a",{className:"nav-link dropdown-toggle text-nowrap px-3","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false",children:Object(w.jsx)("span",{className:"d-md-inline-block",children:"Technical Specifications"})}),Object(w.jsx)("form",{className:"dropdown-menu dropdown-menu-small",children:be.map((function(e,c){var a,s,t;return Object(w.jsx)("div",{className:"dropdown-item",children:Object(w.jsxs)("div",{className:"custom-control custom-checkbox mb-1",children:[Object(w.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"Technical"+(null!==(a=e.name)&&void 0!==a?a:""),checked:null!==(s=e.check)&&void 0!==s&&s,onChange:function(e){be[c].check=!be[c].check,he(Object(o.a)(be)),l(!n)}}),Object(w.jsx)("label",{className:"custom-control-label",htmlFor:"Technical"+(null!==(t=e.name)&&void 0!==t?t:""),children:e.name})]})})}))})]})}),Object(w.jsx)("div",{className:"col mb-4",children:Object(w.jsxs)("ul",{className:"nav-item dropdown",children:[Object(w.jsx)("a",{className:"nav-link dropdown-toggle text-nowrap px-3","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false",children:Object(w.jsx)("span",{className:"d-md-inline-block",children:"Bodypart"})}),Object(w.jsx)("form",{className:"dropdown-menu dropdown-menu-small",children:pe.map((function(e,c){var a,s,t;return Object(w.jsx)("div",{className:"dropdown-item",children:Object(w.jsxs)("div",{className:"custom-control custom-checkbox mb-1",children:[Object(w.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"Bodypart"+(null!==(a=e.name)&&void 0!==a?a:""),checked:null!==(s=e.check)&&void 0!==s&&s,onChange:function(e){pe[c].check=!pe[c].check,Oe(Object(o.a)(pe)),l(!n),k(!v)}}),Object(w.jsx)("label",{className:"custom-control-label",htmlFor:"Bodypart"+(null!==(t=e.name)&&void 0!==t?t:""),children:e.name})]})})}))})]})})]}),S.map((function(e,a){var s,t,n,l,i,r,o,d,j,m,h,u,x,p;return Object(w.jsx)("div",{className:"row",children:Object(w.jsxs)("div",{className:"card card-small card-post card-post--aside card-post--1 search-item-wrap",style:{cursor:"pointer"},onClick:function(){c.push("/detail?_id=".concat(e._id))},children:[Object(w.jsx)("div",{className:"card-post__image",style:{backgroundImage:"url(".concat(b,")")},children:Object(w.jsx)("a",{href:"#",className:"card-post__category badge badge-pill badge-info",children:(null!==(s=(null!==(t=e._source)&&void 0!==t?t:{}).tag)&&void 0!==s?s:"").toUpperCase()})}),Object(w.jsxs)("div",{className:"card-body",children:[Object(w.jsx)("h5",{className:"card-title",children:Object(w.jsx)("a",{className:"text-fiord-blue",href:"#",children:null!==(n=(null!==(l=e._source)&&void 0!==l?l:{}).title)&&void 0!==n?n:""})}),Object(w.jsx)("p",{className:"card-text d-inline-block mb-3",children:null!==(i=(null!==(r=e._source)&&void 0!==r?r:{}).description)&&void 0!==i?i:""}),Object(w.jsxs)("div",{className:"list-tag-wrap",children:[Object(w.jsxs)("span",{className:"text-muted",children:[Object(w.jsx)("i",{className:null!==(o=(null!==(d=e._source)&&void 0!==d?d:{}).age)&&void 0!==o&&o?"fa fa-check":"fas fa-times","aria-hidden":"true"}),"age"]}),Object(w.jsxs)("span",{className:"text-muted",children:[Object(w.jsx)("i",{className:null!==(j=(null!==(m=e._source)&&void 0!==m?m:{}).gender)&&void 0!==j&&j?"fa fa-check":"fas fa-times","aria-hidden":"true"}),"gender"]}),Object(w.jsxs)("span",{className:"text-muted",children:[Object(w.jsx)("i",{className:null!==(h=(null!==(u=e._source)&&void 0!==u?u:{}).report)&&void 0!==h&&h?"fa fa-check":"fas fa-times","aria-hidden":"true"}),"report"]}),Object(w.jsxs)("span",{className:"text-muted",children:[Object(w.jsx)("i",{className:null!==(x=(null!==(p=e._source)&&void 0!==p?p:{}).study_date)&&void 0!==x&&x?"fa fa-check":"fas fa-times","aria-hidden":"true"}),"study date"]})]})]})]})})}))]}),Object(w.jsxs)("footer",{className:"main-footer d-flex p-2 px-3 bg-white border-top",children:[Object(w.jsxs)("ul",{className:"nav",children:[Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)("a",{className:"nav-link",href:"#",children:"Home"})}),Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)("a",{className:"nav-link",href:"#",children:"Services"})}),Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)("a",{className:"nav-link",href:"#",children:"Legal"})}),Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)("a",{className:"nav-link",href:"#",children:"Terms of Service"})}),Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)("a",{className:"nav-link",href:"#",children:"Privacy Policy"})}),Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)("a",{className:"nav-link",href:"#",children:"GDPR Policy"})}),Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)("a",{className:"nav-link",href:"#",children:"Contact Us"})})]}),Object(w.jsxs)("span",{className:"copyright ml-auto my-auto mr-2",children:["Copyright \xa9 2018",Object(w.jsx)("a",{href:"#",rel:"nofollow",children:"DesignRevision"})]})]})]})]})})},_=(a(70),a(38)),S=a.n(_),C=(a(72),function(e){return Object(w.jsx)("div",{className:"main",children:Object(w.jsx)("div",{className:"fof",children:Object(w.jsx)("h1",{children:"404 | Not Found"})})})}),R=a(39),I=a.n(R),D=function(e){var c,a,t,n,l,i,r,o=S.a.parse(e.location.search)._id,u=Object(s.useState)(),x=Object(j.a)(u,2),p=x[0],O=x[1];return Object(s.useEffect)((function(){o&&k(o).then((function(e){e.status&&O(e.data)})).catch((function(e){console.log("ERROR"),console.log(e)}))}),[]),o?p?Object(w.jsx)("div",{className:"container-fluid detailPage",children:Object(w.jsx)("div",{className:"row",children:Object(w.jsxs)("main",{className:"main-content col-lg-12 col-md-12 col-sm-12 p-0",children:[Object(w.jsx)("div",{className:"main-navbar sticky-top bg-white",children:Object(w.jsxs)("nav",{className:"navbar align-items-stretch navbar-light flex-md-nowrap p-0",children:[Object(w.jsx)("a",{className:"navbar-brand mr-0",href:"#",children:Object(w.jsxs)("span",{className:"d-table m-auto",children:[Object(w.jsx)("img",{id:"main-logo",className:"d-inline-block align-top mr-1",src:m}),Object(w.jsx)("span",{className:"d-none d-md-inline ml-1"})]})}),Object(w.jsx)("form",{action:"#",className:"main-navbar__search w-100 d-none d-md-flex d-lg-flex",children:Object(w.jsxs)("div",{className:"input-group input-group-seamless ml-3",children:[Object(w.jsx)("div",{className:"input-group-prepend",children:Object(w.jsx)("div",{className:"input-group-text",children:Object(w.jsx)("i",{className:"fas fa-search"})})}),Object(w.jsx)("input",{className:"navbar-search form-control",type:"text",placeholder:"Search for something...","aria-label":"Search"})," "]})}),Object(w.jsxs)("ul",{className:"navbar-nav border-left flex-row header-user-wrap",children:[Object(w.jsx)("li",{children:Object(w.jsxs)("div",{className:"dropdown-menu dropdown-menu-small","aria-labelledby":"dropdownMenuLink",children:[Object(w.jsxs)("a",{className:"dropdown-item",href:"#",children:[Object(w.jsx)("div",{className:"notification__icon-wrapper",children:Object(w.jsx)("div",{className:"notification__icon",children:Object(w.jsx)("i",{className:"material-icons",children:"\ue6e1"})})}),Object(w.jsxs)("div",{className:"notification__content",children:[Object(w.jsx)("span",{className:"notification__category",children:"Analytics"}),Object(w.jsxs)("p",{children:["Your website\u2019s active users count increased by",Object(w.jsx)("span",{className:"text-success text-semibold",children:"28%"})," ","in the last week. Great job!"]})]})]}),Object(w.jsxs)("a",{className:"dropdown-item",href:"#",children:[Object(w.jsx)("div",{className:"notification__icon-wrapper",children:Object(w.jsx)("div",{className:"notification__icon",children:Object(w.jsx)("i",{className:"material-icons",children:"\ue8d1"})})}),Object(w.jsxs)("div",{className:"notification__content",children:[Object(w.jsx)("span",{className:"notification__category",children:"Sales"}),Object(w.jsxs)("p",{children:["Last week your store\u2019s sales count decreased by",Object(w.jsx)("span",{className:"text-danger text-semibold",children:"5.52%"}),". It could have been worse!"]})]})]}),Object(w.jsxs)("a",{className:"dropdown-item notification__all text-center",href:"#",children:[" ","View all Notifications"," "]})]})}),Object(w.jsxs)("li",{className:"nav-item dropdown",children:[Object(w.jsxs)("a",{className:"nav-link dropdown-toggle text-nowrap px-3","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false",children:[Object(w.jsx)("img",{className:"user-avatar rounded-circle mr-2",src:h}),Object(w.jsx)("span",{className:"d-md-inline-block",children:"Sierra Brooks"})]}),Object(w.jsxs)("div",{className:"dropdown-menu dropdown-menu-small",children:[Object(w.jsxs)("a",{className:"dropdown-item",href:"#",children:[Object(w.jsx)("i",{className:"material-icons",children:"\ue7fd"})," Profile"]}),Object(w.jsx)("div",{className:"dropdown-divider"}),Object(w.jsxs)("a",{className:"dropdown-item text-danger",href:"#",children:[Object(w.jsx)("i",{className:"material-icons text-danger",children:"\ue879"})," ","Logout"," "]})]})]})]}),Object(w.jsx)("nav",{className:"nav",children:Object(w.jsx)("a",{href:"#",className:"nav-link nav-link-icon toggle-sidebar d-sm-inline d-md-none text-center border-left","data-toggle":"collapse","data-target":".header-navbar","aria-expanded":"false","aria-controls":"header-navbar",children:Object(w.jsx)("i",{className:"material-icons",children:"\ue5d2"})})})]})}),Object(w.jsxs)("div",{className:"main-content-container container-fluid px-4",children:[Object(w.jsx)("div",{className:"page-header row no-gutters py-4"}),Object(w.jsx)("div",{className:"row mb-2",children:Object(w.jsx)("div",{className:"col",children:Object(w.jsx)("nav",{"aria-label":"breadcrumb",children:Object(w.jsxs)("ol",{className:"breadcrumb",children:[Object(w.jsx)("li",{className:"breadcrumb-item",children:Object(w.jsx)("a",{href:"#",children:"Home"})}),Object(w.jsx)("li",{className:"breadcrumb-item",children:Object(w.jsx)("a",{href:"#",children:"CT"})}),Object(w.jsx)("li",{className:"breadcrumb-item",children:Object(w.jsx)("a",{href:"#",children:"Chest"})}),Object(w.jsx)("li",{className:"breadcrumb-item",children:Object(w.jsx)("a",{href:"#",children:"India"})}),Object(w.jsx)("li",{className:"breadcrumb-item",children:Object(w.jsx)("a",{href:"#",children:"4 Slice"})}),Object(w.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Information"})]})})})}),Object(w.jsx)("div",{className:"row mb-30 detail-info-wrap",children:Object(w.jsx)("div",{className:"col",children:Object(w.jsxs)("div",{className:"card card-small card-post card-post--aside card-post--1",children:[Object(w.jsxs)("div",{className:"detail-image-box",children:[Object(w.jsx)("img",{src:b}),Object(w.jsx)("a",{href:"#",className:"card-post__category badge badge-pill badge-info",children:(null!==(c=p.tag)&&void 0!==c?c:"").toUpperCase()}),Object(w.jsx)(I.a,Object(d.a)(Object(d.a)({},{dots:!1,infinite:!1,vertical:!1,speed:500,slidesToShow:4,swipeToSlide:!0}),{},{children:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((function(){return Object(w.jsx)("div",{className:"p-1",children:Object(w.jsx)("img",{src:b})})}))}))]}),Object(w.jsxs)("div",{className:"card-body",children:[Object(w.jsx)("h2",{className:"card-title",children:Object(w.jsx)("a",{className:"text-fiord-blue",href:"#",children:null!==(a=p.title)&&void 0!==a?a:""})}),Object(w.jsx)("div",{className:"search-detail-info",children:Object(w.jsx)("p",{children:null!==(t=p.description)&&void 0!==t?t:""})}),Object(w.jsxs)("div",{className:"list-tag-wrap",children:[Object(w.jsxs)("span",{className:"text-muted",children:[Object(w.jsx)("i",{className:null!==(n=p.age)&&void 0!==n&&n?"fa fa-check":"fas fa-times","aria-hidden":"true"}),"age"]}),Object(w.jsxs)("span",{className:"text-muted",children:[Object(w.jsx)("i",{className:null!==(l=p.gender)&&void 0!==l&&l?"fa fa-check":"fas fa-times","aria-hidden":"true"}),"gender"]}),Object(w.jsxs)("span",{className:"text-muted",children:[Object(w.jsx)("i",{className:null!==(i=p.report)&&void 0!==i&&i?"fa fa-check":"fas fa-times","aria-hidden":"true"}),"report"]}),Object(w.jsxs)("span",{className:"text-muted",children:[Object(w.jsx)("i",{className:null!==(r=p.study_date)&&void 0!==r&&r?"fa fa-check":"fas fa-times","aria-hidden":"true"}),"study date"]})]}),Object(w.jsx)("div",{className:"icon-list-wrap",children:Object(w.jsxs)("ul",{children:[Object(w.jsx)("li",{children:Object(w.jsxs)("span",{className:"text-muted",children:[Object(w.jsx)("img",{src:"https://img.icons8.com/nolan/24/doctors-bag.png"}),"Philips"]})}),Object(w.jsx)("li",{children:Object(w.jsxs)("span",{className:"text-muted",children:[Object(w.jsx)("img",{src:"https://img.icons8.com/nolan/24/calendar.png"}),"Study Date ranged from Jan 1 2010 to Feb 28 2020"]})}),Object(w.jsx)("li",{children:Object(w.jsxs)("span",{className:"text-muted",children:[Object(w.jsx)("img",{src:"https://img.icons8.com/nolan/24/information.png"}),"Non Contrast HRCT"]})}),Object(w.jsx)("li",{children:Object(w.jsxs)("span",{className:"text-muted",children:[Object(w.jsx)("img",{src:"https://img.icons8.com/wired/24/4a90e2/electrical.png"}),"32 Slice"]})})]})}),Object(w.jsxs)("div",{className:"rating-list",children:[Object(w.jsx)("img",{src:"https://img.icons8.com/emoji/32/000000/star-emoji.png"}),Object(w.jsx)("img",{src:"https://img.icons8.com/emoji/32/000000/star-emoji.png"}),Object(w.jsx)("img",{src:"https://img.icons8.com/emoji/32/000000/star-emoji.png"}),Object(w.jsx)("img",{src:"https://img.icons8.com/emoji/32/000000/star-emoji.png"}),Object(w.jsx)("img",{src:"https://img.icons8.com/emoji/32/000000/star-emoji.png"})]}),Object(w.jsxs)("div",{className:"detail-btn-wrap",children:[Object(w.jsx)("button",{type:"button",className:"btn btn-sm btn-primary",children:"Download Report"}),Object(w.jsx)("button",{type:"button",className:"btn btn-sm btn-primary",children:"Download DICOM"}),Object(w.jsx)("button",{type:"button",className:"btn btn-sm btn-primary",children:"Inquiry"})]})]})]})})}),Object(w.jsxs)("div",{className:"row similar-data-wrap",children:[Object(w.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12",children:Object(w.jsx)("h2",{children:"SIMILAR DATA SETS"})}),Object(w.jsx)("div",{className:"col-lg-3 col-md-6 col-sm-12 mb-4",children:Object(w.jsxs)("div",{className:"card card-small card-post h-10",children:[Object(w.jsx)("div",{className:"card-post__image",style:{backgroundImage:"url(".concat(b,")")}}),Object(w.jsxs)("div",{className:"card-body",children:[Object(w.jsx)("h5",{className:"card-title",children:Object(w.jsx)("a",{className:"text-fiord-blue",href:"#",children:"100k Chest MRI Images"})}),Object(w.jsx)("p",{className:"card-text",children:"Good quality Chest MRI images from east Europe"})]}),Object(w.jsx)("div",{className:"card-footer text-muted border-top py-3",children:Object(w.jsxs)("span",{className:"d-inline-block",children:["Manufacturer"," ",Object(w.jsx)("a",{className:"text-fiord-blue",href:"#",children:"Philips"})]})})]})}),Object(w.jsx)("div",{className:"col-lg-3 col-md-6 col-sm-12 mb-4",children:Object(w.jsxs)("div",{className:"card card-small card-post h-10",children:[Object(w.jsx)("div",{className:"card-post__image",style:{backgroundImage:"url(".concat(b,")")}}),Object(w.jsxs)("div",{className:"card-body",children:[Object(w.jsx)("h5",{className:"card-title",children:Object(w.jsx)("a",{className:"text-fiord-blue",href:"#",children:"500 Chest X Ray"})}),Object(w.jsx)("p",{className:"card-text",children:"Chest Xray images with pneumonia and plueral effusion"})]}),Object(w.jsx)("div",{className:"card-footer text-muted border-top py-3",children:Object(w.jsxs)("span",{className:"d-inline-block",children:["Manufacturer"," ",Object(w.jsx)("a",{className:"text-fiord-blue",href:"#",children:"Siemens"})]})})]})}),Object(w.jsx)("div",{className:"col-lg-3 col-md-6 col-sm-12 mb-4",children:Object(w.jsxs)("div",{className:"card card-small card-post h-10",children:[Object(w.jsx)("div",{className:"card-post__image",style:{backgroundImage:"url(".concat(b,")")}}),Object(w.jsxs)("div",{className:"card-body",children:[Object(w.jsx)("h5",{className:"card-title",children:Object(w.jsx)("a",{className:"text-fiord-blue",href:"#",children:"250K Chest Xray with TB markings"})}),Object(w.jsx)("p",{className:"card-text",children:"Chest X ray images with TB "})]}),Object(w.jsx)("div",{className:"card-footer text-muted border-top py-3",children:Object(w.jsxs)("span",{className:"d-inline-block",children:["Manufacturer"," ",Object(w.jsx)("a",{className:"text-fiord-blue",href:"#",children:"GE"})]})})]})}),Object(w.jsx)("div",{className:"col-lg-3 col-md-6 col-sm-12 mb-4",children:Object(w.jsxs)("div",{className:"card card-small card-post h-10",children:[Object(w.jsx)("div",{className:"card-post__image",style:{backgroundImage:"url(".concat(b,")")}}),Object(w.jsxs)("div",{className:"card-body",children:[Object(w.jsx)("h5",{className:"card-title",children:Object(w.jsx)("a",{className:"text-fiord-blue",href:"#",children:"Chest Xray with Nodules"})}),Object(w.jsx)("p",{className:"card-text",children:"Chest X ray images with nodules available to download today"})]}),Object(w.jsx)("div",{className:"card-footer text-muted border-top py-3",children:Object(w.jsxs)("span",{className:"d-inline-block",children:["Manufacturer"," ",Object(w.jsx)("a",{className:"text-fiord-blue",href:"#",children:"Toshiba"})]})})]})})]})]}),Object(w.jsxs)("footer",{className:"main-footer d-flex p-2 px-3 bg-white border-top",children:[Object(w.jsxs)("ul",{className:"nav",children:[Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)("a",{className:"nav-link",href:"#",children:"Home"})}),Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)("a",{className:"nav-link",href:"#",children:"Services"})}),Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)("a",{className:"nav-link",href:"#",children:"Legal"})}),Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)("a",{className:"nav-link",href:"#",children:"Terms of Service"})}),Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)("a",{className:"nav-link",href:"#",children:"Privacy Policy"})}),Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)("a",{className:"nav-link",href:"#",children:"GDPR Policy"})}),Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)("a",{className:"nav-link",href:"#",children:"Contact Us"})})]}),Object(w.jsxs)("span",{className:"copyright ml-auto my-auto mr-2",children:["Copyright \xa9 2018",Object(w.jsx)("a",{href:"#",rel:"nofollow",children:"DesignRevision"})]})]})]})})}):Object(w.jsx)("div",{}):Object(w.jsx)(C,{})};var E=function(){return Object(w.jsx)(i.a,{children:Object(w.jsxs)(r.c,{children:[Object(w.jsx)(r.a,{exact:!0,path:"/",component:y}),Object(w.jsx)(r.a,{exact:!0,path:"/detail",component:D})]})})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,89)).then((function(c){var a=c.getCLS,s=c.getFID,t=c.getFCP,n=c.getLCP,l=c.getTTFB;a(e),s(e),t(e),n(e),l(e)}))};l.a.render(Object(w.jsx)(t.a.StrictMode,{children:Object(w.jsx)(E,{})}),document.getElementById("root")),T()}},[[88,1,2]]]);
//# sourceMappingURL=main.61b5fd62.chunk.js.map