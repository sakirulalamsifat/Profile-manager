(this.webpackJsonpesquirev2=this.webpackJsonpesquirev2||[]).push([[0],{22:function(e,t,n){},39:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(32),s=n.n(a),o=(n(39),n.p,n(22),n(3)),l=n.n(o),i=n(7),u=n(13),j=n(15),d=n(6);function m(e){return b.apply(this,arguments)}function b(){return(b=Object(i.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,r=t.password,e.abrupt("return",new Promise((function(e,t){setTimeout((function(){"Sifat"===n&&"password"===r?e():t()}),1e3)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=n(4),h=n(66),x=n(0),O={username:"",password:"",isLoading:!1,isLoggedIn:!1,error:""};function f(e,t){switch(t.type){case"field":return Object(d.a)(Object(d.a)({},e),{},Object(j.a)({},t.fieldName,t.payload));case"login":return Object(d.a)(Object(d.a)({},e),{},{error:"",isLoading:!0,isFocused:!0});case"success":return Object(d.a)(Object(d.a)({},e),{},{isLoggedIn:!0,isLoading:!1});case"error":return Object(d.a)(Object(d.a)({},e),{},{error:"Incorrect username or password entered",isLoggedIn:!1,isLoading:!1,username:"",password:"",isFocused:!0});case"logout":return Object(d.a)(Object(d.a)({},e),{},{isLoggedIn:!1,username:"",password:"",error:""});default:return e}}function g(){var e=Object(r.useReducer)(f,O),t=Object(u.a)(e,2),n=t[0],c=t[1],a=n.username,s=n.password,o=n.isLoading,j=n.isLoggedIn,d=n.error,b=n.isFocused,g=Object(r.useRef)(null),v=Object(p.f)(),N=function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c({type:m}),e.prev=2,e.next=5,m({username:a,password:s});case 5:c({type:"success"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),c({type:"error"});case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){b&&g.current.focus()}),[b]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"App",children:Object(x.jsx)("div",{className:"login-container",children:j?Object(x.jsxs)(x.Fragment,{children:[v.push("/home"),Object(x.jsxs)("h1",{children:["Welcome ",a,"!"]}),Object(x.jsx)("button",{onClick:function(){return c({type:"logout"})},children:"Log Out"})]}):Object(x.jsxs)("form",{className:"form",onSubmit:N,children:[d&&Object(x.jsxs)("p",{className:"error",children:[d," "]}),Object(x.jsx)("p",{children:"Please Login!"}),Object(x.jsx)("input",{type:"text",ref:g,placeholder:"Enter username",value:a,autoFocus:!0,onChange:function(e){return c({type:"field",fieldName:"username",payload:e.currentTarget.value})}}),Object(x.jsx)("input",{type:"password",placeholder:"Enter password",value:s,onChange:function(e){return c({type:"field",fieldName:"password",payload:e.currentTarget.value})}}),Object(x.jsx)("button",{className:"submit",type:"submit",disabled:o,children:o?"Logging In.....":"Log In"})]})})}),Object(x.jsxs)(h.a,{className:"my-3 p-3 rounded App",children:[Object(x.jsx)(h.a.Text,{children:"UserName:Sifat"}),Object(x.jsx)(h.a.Text,{children:"password:password"})]})]})}var v=n(5),N=n(14),y=n.n(N),w=function(){return Object(x.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)(v.b,{className:"navbar-brand",href:"/home",children:"Recat User"}),Object(x.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(x.jsx)("span",{className:"navbar-toggler-icon"})}),Object(x.jsx)("div",{className:"collapse navbar-collapse",children:Object(x.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(v.c,{className:"nav-link",exact:!0,to:"/home",children:"Home"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(v.c,{className:"nav-link",exact:!0,to:"/about",children:"About"})}),Object(x.jsx)(v.b,{className:"btn btn-danger",to:"/",children:"Log out"})]})}),Object(x.jsx)(v.b,{className:"btn btn-outline-light",to:"/users/add",children:"Add User"})]})})},k=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){a()}),[]);var a=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("http://localhost:3003/users");case 2:t=e.sent,console.log(t.data),c(t.data.reverse());case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.delete("http://localhost:3003/users/".concat(t));case 2:a();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(w,{}),Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"py-4",children:[Object(x.jsx)("h1",{children:"Home Page"}),Object(x.jsxs)("table",{class:"table border shadow",children:[Object(x.jsx)("thead",{class:"thead-dark",children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{scope:"col",children:"#"}),Object(x.jsx)("th",{scope:"col",children:"Name"}),Object(x.jsx)("th",{scope:"col",children:"Gender"}),Object(x.jsx)("th",{scope:"col",children:"Email"}),Object(x.jsx)("th",{children:"Action"})]})}),Object(x.jsx)("tbody",{children:n.map((function(e,t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{scope:"row",children:t+1}),Object(x.jsx)("td",{children:e.name}),Object(x.jsx)("td",{children:e.sex}),Object(x.jsx)("td",{children:e.email}),Object(x.jsxs)("td",{children:[Object(x.jsx)(v.b,{class:"btn btn-primary mr-2",to:"/users/".concat(e.id),children:"View"}),Object(x.jsx)(v.b,{class:"btn btn-outline-primary mr-2",to:"/users/edit/".concat(e.id),children:"Edit"}),Object(x.jsx)(v.b,{class:"btn btn-danger",onClick:function(){return s(e.id)},children:"Delete"})]})]})}))})]})]})})]})},E=function(){return Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"py-4",children:[Object(x.jsx)("h1",{children:"Contact Page"}),Object(x.jsxs)("form",{children:[Object(x.jsxs)("div",{class:"form-group",children:[Object(x.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(x.jsx)("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),Object(x.jsx)("small",{id:"emailHelp",class:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(x.jsxs)("div",{class:"form-group",children:[Object(x.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(x.jsx)("input",{type:"password",class:"form-control",id:"exampleInputPassword1"})]}),Object(x.jsxs)("div",{class:"form-group form-check",children:[Object(x.jsx)("input",{type:"checkbox",class:"form-check-input",id:"exampleCheck1"}),Object(x.jsx)("label",{class:"form-check-label",for:"exampleCheck1",children:"Check me out"})]}),Object(x.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Submit"})]})]})})},C=function(){return Object(x.jsx)("div",{className:"not-found",children:Object(x.jsx)("h1",{className:"display-1",children:"Page Not Found"})})},L=function(){var e=Object(p.f)(),t=Object(r.useState)({name:"",sex:"",email:"",skill:"",experience:"",DOB:""}),n=Object(u.a)(t,2),c=n[0],a=n[1],s=c.name,o=c.sex,m=c.email,b=c.skill,h=c.experience,O=c.DOB,f=function(e){a(Object(d.a)(Object(d.a)({},c),{},Object(j.a)({},e.target.name,e.target.value)))},g=function(){var t=Object(i.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,y.a.post("http://localhost:3003/users",c);case 3:e.push("/home");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(x.jsx)("h2",{className:"text-center mb-4",children:"Add A User"}),Object(x.jsxs)("form",{onSubmit:function(e){return g(e)},children:[Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"name",value:s,onChange:function(e){return f(e)}})}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Gender",name:"sex",value:o,onChange:function(e){return f(e)}})}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{type:"email",className:"form-control form-control-lg",placeholder:"Enter Your E-mail Address",name:"email",value:m,onChange:function(e){return f(e)}})}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Skill",name:"skill",value:b,onChange:function(e){return f(e)}})}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Experience",name:"experience",value:h,onChange:function(e){return f(e)}})}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Birth of Date",name:"DOB",value:O,onChange:function(e){return f(e)}})}),Object(x.jsx)("button",{className:"btn btn-primary btn-block",children:"Add User"})]})]})})})},D=function(){var e=Object(p.f)(),t=Object(p.g)().id,n=Object(r.useState)({name:"",sex:"",email:"",skill:"",experience:"",DOB:""}),c=Object(u.a)(n,2),a=c[0],s=c[1],o=a.name,m=a.sex,b=a.email,h=a.skill,O=a.experience,f=a.DOB,g=function(e){s(Object(d.a)(Object(d.a)({},a),{},Object(j.a)({},e.target.name,e.target.value)))};Object(r.useEffect)((function(){N()}),[]);var v=function(){var n=Object(i.a)(l.a.mark((function n(r){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.next=3,y.a.put("http://localhost:3003/users/".concat(t),a);case 3:e.push("/home");case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("http://localhost:3003/users/".concat(t));case 2:n=e.sent,s(n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(x.jsx)("h2",{className:"text-center mb-4",children:"Edit A User"}),Object(x.jsxs)("form",{onSubmit:function(e){return v(e)},children:[Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"name",value:o,onChange:function(e){return g(e)}})}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Username",name:"sex",value:m,onChange:function(e){return g(e)}})}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{type:"email",className:"form-control form-control-lg",placeholder:"Enter Your E-mail Address",name:"email",value:b,onChange:function(e){return g(e)}})}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Phone Number",name:"skill",value:h,onChange:function(e){return g(e)}})}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Website Name",name:"experience",value:O,onChange:function(e){return g(e)}})}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Date of Birth",name:"DOB",value:f,onChange:function(e){return g(e)}})}),Object(x.jsx)("button",{className:"btn btn-warning btn-block",children:"Update User"})]})]})})},I=function(){var e=Object(r.useState)({name:"",sex:"",email:"",skill:"",experience:"",DOB:""}),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(p.g)().id;Object(r.useEffect)((function(){s()}),[]);var s=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("http://localhost:3003/users/".concat(a));case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"container py-4",children:[Object(x.jsx)(v.b,{className:"btn btn-primary",to:"/home",children:"back to Home"}),Object(x.jsxs)("h1",{className:"display-4",children:["User Id: ",a]}),Object(x.jsx)("hr",{}),Object(x.jsxs)("ul",{className:"list-group w-50",children:[Object(x.jsxs)("li",{className:"list-group-item",children:["name: ",n.name]}),Object(x.jsxs)("li",{className:"list-group-item",children:["sex: ",n.sex]}),Object(x.jsxs)("li",{className:"list-group-item",children:["email: ",n.email]}),Object(x.jsxs)("li",{className:"list-group-item",children:["skill: ",n.skill]}),Object(x.jsxs)("li",{className:"list-group-item",children:["experience: ",n.experience]}),Object(x.jsxs)("li",{className:"list-group-item",children:["Date-of-Birth: ",n.DOB]})]})]})};var S=function(){return Object(x.jsx)("div",{children:Object(x.jsx)(v.a,{children:Object(x.jsxs)(p.c,{children:[Object(x.jsx)(p.a,{path:"/",component:g,exact:!0}),Object(x.jsx)(p.a,{exact:!0,path:"/home",component:k}),Object(x.jsx)(p.a,{exact:!0,path:"/contact",component:E}),Object(x.jsx)(p.a,{exact:!0,path:"/users/add",component:L}),Object(x.jsx)(p.a,{exact:!0,path:"/users/edit/:id",component:D}),Object(x.jsx)(p.a,{exact:!0,path:"/users/:id",component:I}),Object(x.jsx)(p.a,{component:C})]})})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};n(64);s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(S,{})}),document.getElementById("root")),B()}},[[65,1,2]]]);
//# sourceMappingURL=main.f4513a71.chunk.js.map