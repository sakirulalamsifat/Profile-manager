(this.webpackJsonpesquirev2=this.webpackJsonpesquirev2||[]).push([[0],{22:function(e,t,n){},39:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(32),a=n.n(r),s=(n(39),n.p,n(22),n(3)),o=n.n(s),l=n(7),i=n(13),u=n(15),j=n(6);function d(e){return m.apply(this,arguments)}function m(){return(m=Object(l.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,c=t.password,e.abrupt("return",new Promise((function(e,t){setTimeout((function(){"Sifat"===n&&"password"===c?e():t()}),1e3)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=n(4),p=n(66),h=n(0),x={username:"",password:"",isLoading:!1,isLoggedIn:!1,error:""};function O(e,t){switch(t.type){case"field":return Object(j.a)(Object(j.a)({},e),{},Object(u.a)({},t.fieldName,t.payload));case"login":return Object(j.a)(Object(j.a)({},e),{},{error:"",isLoading:!0,isFocused:!0});case"success":return Object(j.a)(Object(j.a)({},e),{},{isLoggedIn:!0,isLoading:!1});case"error":return Object(j.a)(Object(j.a)({},e),{},{error:"Incorrect username or password entered",isLoggedIn:!1,isLoading:!1,username:"",password:"",isFocused:!0});case"logout":return Object(j.a)(Object(j.a)({},e),{},{isLoggedIn:!1,username:"",password:"",error:""});default:return e}}function f(){var e=Object(c.useReducer)(O,x),t=Object(i.a)(e,2),n=t[0],r=t[1],a=n.username,s=n.password,u=n.isLoading,j=n.isLoggedIn,m=n.error,f=n.isFocused,g=Object(c.useRef)(null),v=Object(b.f)(),N=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r({type:d}),e.prev=2,e.next=5,d({username:a,password:s});case 5:r({type:"success"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),r({type:"error"});case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){f&&g.current.focus()}),[f]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"App",children:Object(h.jsx)("div",{className:"login-container",children:j?Object(h.jsxs)(h.Fragment,{children:[v.push("/home"),Object(h.jsxs)("h1",{children:["Welcome ",a,"!"]}),Object(h.jsx)("button",{onClick:function(){return r({type:"logout"})},children:"Log Out"})]}):Object(h.jsxs)("form",{className:"form",onSubmit:N,children:[m&&Object(h.jsxs)("p",{className:"error",children:[m," "]}),Object(h.jsx)("p",{children:"Please Login!"}),Object(h.jsx)("input",{type:"text",ref:g,placeholder:"Enter username",value:a,autoFocus:!0,onChange:function(e){return r({type:"field",fieldName:"username",payload:e.currentTarget.value})}}),Object(h.jsx)("input",{type:"password",placeholder:"Enter password",value:s,onChange:function(e){return r({type:"field",fieldName:"password",payload:e.currentTarget.value})}}),Object(h.jsx)("button",{className:"submit",type:"submit",disabled:u,children:u?"Logging In.....":"Log In"})]})})}),Object(h.jsxs)(p.a,{className:"my-3 p-3 rounded App",children:[Object(h.jsx)(p.a.Text,{children:"UserName:Sifat"}),Object(h.jsx)(p.a.Text,{children:"password:password"})]})]})}var g=n(5),v=n(14),N=n.n(v),y=function(){return Object(h.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(g.c,{className:"navbar-brand",href:"/home",children:"Recat User"}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"collapse navbar-collapse",children:Object(h.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(g.d,{className:"nav-link",exact:!0,to:"/home",children:"Home"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(g.d,{className:"nav-link",exact:!0,to:"/about",children:"About"})}),Object(h.jsx)(g.c,{className:"btn btn-danger",to:"/",children:"Log out"})]})}),Object(h.jsx)(g.c,{className:"btn btn-outline-light",to:"/users/add",children:"Add User"})]})})},w=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){a()}),[]);var a=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("http://localhost:3003/users");case 2:t=e.sent,console.log(t.data),r(t.data.reverse());case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.delete("http://localhost:3003/users/".concat(t));case 2:a();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(y,{}),Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"py-4",children:[Object(h.jsx)("h1",{children:"Home Page"}),Object(h.jsxs)("table",{class:"table border shadow",children:[Object(h.jsx)("thead",{class:"thead-dark",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"#"}),Object(h.jsx)("th",{scope:"col",children:"Name"}),Object(h.jsx)("th",{scope:"col",children:"Gender"}),Object(h.jsx)("th",{scope:"col",children:"Email"}),Object(h.jsx)("th",{children:"Action"})]})}),Object(h.jsx)("tbody",{children:n.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"row",children:t+1}),Object(h.jsx)("td",{children:e.name}),Object(h.jsx)("td",{children:e.sex}),Object(h.jsx)("td",{children:e.email}),Object(h.jsxs)("td",{children:[Object(h.jsx)(g.c,{class:"btn btn-primary mr-2",to:"/users/".concat(e.id),children:"View"}),Object(h.jsx)(g.c,{class:"btn btn-outline-primary mr-2",to:"/users/edit/".concat(e.id),children:"Edit"}),Object(h.jsx)(g.c,{class:"btn btn-danger",onClick:function(){return s(e.id)},children:"Delete"})]})]})}))})]})]})})]})},k=function(){return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"py-4",children:[Object(h.jsx)("h1",{children:"Contact Page"}),Object(h.jsxs)("form",{children:[Object(h.jsxs)("div",{class:"form-group",children:[Object(h.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(h.jsx)("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),Object(h.jsx)("small",{id:"emailHelp",class:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(h.jsxs)("div",{class:"form-group",children:[Object(h.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(h.jsx)("input",{type:"password",class:"form-control",id:"exampleInputPassword1"})]}),Object(h.jsxs)("div",{class:"form-group form-check",children:[Object(h.jsx)("input",{type:"checkbox",class:"form-check-input",id:"exampleCheck1"}),Object(h.jsx)("label",{class:"form-check-label",for:"exampleCheck1",children:"Check me out"})]}),Object(h.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Submit"})]})]})})},E=function(){return Object(h.jsx)("div",{className:"not-found",children:Object(h.jsx)("h1",{className:"display-1",children:"Page Not Found"})})},C=function(){var e=Object(b.f)(),t=Object(c.useState)({name:"",sex:"",email:"",skill:"",experience:"",DOB:""}),n=Object(i.a)(t,2),r=n[0],a=n[1],s=r.name,d=r.sex,m=r.email,p=r.skill,x=r.experience,O=r.DOB,f=function(e){a(Object(j.a)(Object(j.a)({},r),{},Object(u.a)({},e.target.name,e.target.value)))},g=function(){var t=Object(l.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,N.a.post("http://localhost:3003/users",r);case 3:e.push("/home");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(h.jsx)("h2",{className:"text-center mb-4",children:"Add A User"}),Object(h.jsxs)("form",{onSubmit:function(e){return g(e)},children:[Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"name",value:s,onChange:function(e){return f(e)}})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Gender",name:"sex",value:d,onChange:function(e){return f(e)}})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"email",className:"form-control form-control-lg",placeholder:"Enter Your E-mail Address",name:"email",value:m,onChange:function(e){return f(e)}})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Skill",name:"skill",value:p,onChange:function(e){return f(e)}})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Experience",name:"experience",value:x,onChange:function(e){return f(e)}})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Birth of Date",name:"DOB",value:O,onChange:function(e){return f(e)}})}),Object(h.jsx)("button",{className:"btn btn-primary btn-block",children:"Add User"})]})]})})})},L=function(){var e=Object(b.f)(),t=Object(b.g)().id,n=Object(c.useState)({name:"",sex:"",email:"",skill:"",experience:"",DOB:""}),r=Object(i.a)(n,2),a=r[0],s=r[1],d=a.name,m=a.sex,p=a.email,x=a.skill,O=a.experience,f=a.DOB,g=function(e){s(Object(j.a)(Object(j.a)({},a),{},Object(u.a)({},e.target.name,e.target.value)))};Object(c.useEffect)((function(){y()}),[]);var v=function(){var n=Object(l.a)(o.a.mark((function n(c){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),n.next=3,N.a.put("http://localhost:3003/users/".concat(t),a);case 3:e.push("/home");case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("http://localhost:3003/users/".concat(t));case 2:n=e.sent,s(n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(h.jsx)("h2",{className:"text-center mb-4",children:"Edit A User"}),Object(h.jsxs)("form",{onSubmit:function(e){return v(e)},children:[Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"name",value:d,onChange:function(e){return g(e)}})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Username",name:"sex",value:m,onChange:function(e){return g(e)}})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"email",className:"form-control form-control-lg",placeholder:"Enter Your E-mail Address",name:"email",value:p,onChange:function(e){return g(e)}})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Phone Number",name:"skill",value:x,onChange:function(e){return g(e)}})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Website Name",name:"experience",value:O,onChange:function(e){return g(e)}})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Date of Birth",name:"DOB",value:f,onChange:function(e){return g(e)}})}),Object(h.jsx)("button",{className:"btn btn-warning btn-block",children:"Update User"})]})]})})},D=function(){var e=Object(c.useState)({name:"",sex:"",email:"",skill:"",experience:"",DOB:""}),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(b.g)().id;Object(c.useEffect)((function(){s()}),[]);var s=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("http://localhost:3003/users/".concat(a));case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"container py-4",children:[Object(h.jsx)(g.c,{className:"btn btn-primary",to:"/home",children:"back to Home"}),Object(h.jsxs)("h1",{className:"display-4",children:["User Id: ",a]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("ul",{className:"list-group w-50",children:[Object(h.jsxs)("li",{className:"list-group-item",children:["name: ",n.name]}),Object(h.jsxs)("li",{className:"list-group-item",children:["sex: ",n.sex]}),Object(h.jsxs)("li",{className:"list-group-item",children:["email: ",n.email]}),Object(h.jsxs)("li",{className:"list-group-item",children:["skill: ",n.skill]}),Object(h.jsxs)("li",{className:"list-group-item",children:["experience: ",n.experience]}),Object(h.jsxs)("li",{className:"list-group-item",children:["Date-of-Birth: ",n.DOB]})]})]})};var I=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(g.a,{children:Object(h.jsxs)(b.c,{children:[Object(h.jsx)(b.a,{path:"/",component:f,exact:!0}),Object(h.jsx)(b.a,{exact:!0,path:"/home",component:w}),Object(h.jsx)(b.a,{exact:!0,path:"/contact",component:k}),Object(h.jsx)(b.a,{exact:!0,path:"/users/add",component:C}),Object(h.jsx)(b.a,{exact:!0,path:"/users/edit/:id",component:L}),Object(h.jsx)(b.a,{exact:!0,path:"/users/:id",component:D}),Object(h.jsx)(b.a,{component:E})]})})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};n(64);a.a.render(Object(h.jsx)(g.b,{children:Object(h.jsx)(I,{})}),document.getElementById("root")),S()}},[[65,1,2]]]);
//# sourceMappingURL=main.043d8bed.chunk.js.map