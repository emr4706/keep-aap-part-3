(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{50:function(e,t,n){e.exports=n(79)},72:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(14),r=n.n(c),o=n(18),u=n(11),m=n(45),i=n(16),s=n(21),f=n.n(s),E=(n(72),n(42)),p=n.n(E);var h=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement(p.a,null)," Keeper"))};var v=function(){var e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \u24d2 ",e))},d=n(43),b=n.n(d);var g=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},l.a.createElement(b.a,null)))},j=n(10),O=n(26),N=n(44),C=n.n(N),k=n(94),y=n(95);var S=function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)({title:"",content:""}),m=Object(u.a)(o,2),i=m[0],s=m[1],E=function(e){var t=e.target,n=t.name,a=t.value;s((function(e){return Object(O.a)({},e,Object(j.a)({},n,a))}))};return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},c&&l.a.createElement("input",{onChange:E,value:i.title,name:"title",placeholder:"Title"}),l.a.createElement("textarea",{onChange:E,onClick:function(){r(!0)},value:i.content,name:"content",placeholder:"Take a note...",rows:c?"3":"1"}),l.a.createElement(y.a,{in:c},l.a.createElement(k.a,{onClick:function(t){f.a.post("http://localhost:5000/posts/add",i).then((function(e){return console.log(e.data)})),""!==i.title&""!==i.content&&e.onAdd(i),s({title:"",content:""}),t.preventDefault()}},l.a.createElement(C.a,null)))))};var w=function(){var e=Object(a.useState)({fName:"",lName:"",email:""}),t=Object(u.a)(e,2),n=t[0],c=t[1];function r(e){var t=e.target,n=t.value,a=t.name;c((function(e){return Object(O.a)({},e,Object(j.a)({},a,n))}))}return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Hello ",n.fName," ",n.lName),l.a.createElement("p",null,n.email),l.a.createElement("form",null,l.a.createElement("input",{onChange:r,name:"fName",placeholder:"First Name",value:n.fName}),l.a.createElement("input",{onChange:r,name:"lName",placeholder:"Last Name",value:n.lName}),l.a.createElement("input",{onChange:r,name:"email",placeholder:"Email",value:n.email}),l.a.createElement("button",null,"Submit")))};var D=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){f.a.get("http://localhost:5000/posts/").then((function(e){console.log(e),c(e.data)})).catch((function(e){console.log(e)}))}),[]);var r=function(e){f.a.delete("http://localhost:5000/posts/"+e).then((function(t){var a=n.filter((function(t){return t.id!==e}));c(a),console.log(t)})).catch((function(e){console.log(e.response)}))};return l.a.createElement(m.a,null,l.a.createElement("div",null,l.a.createElement(i.a,{path:"/"},l.a.createElement(h,null),l.a.createElement(S,{onAdd:function(e){c((function(t){return[].concat(Object(o.a)(t),[e])}))}}),n.map((function(e,t){return l.a.createElement(g,{id:e._id,key:t,title:e.title,content:e.content,onDelete:r})})),l.a.createElement(v,null)),l.a.createElement(i.a,{path:"/user"},l.a.createElement(w,null))))};r.a.render(l.a.createElement(D,null),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.5bdcf28f.chunk.js.map