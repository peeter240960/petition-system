(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{32:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var s=c(1),r=c.n(s),a=c(17),n=c.n(a),l=(c(32),c(13)),d=c(16),i=c(6),j=c(4),b=c(3),h=c(0);function o(e){switch(e.status){case"waiting":return Object(h.jsx)(i.b,{to:"/",className:"bg-gray-600 text-white text-sm py-1 px-2 rounded-full",children:"\u0e23\u0e2d\u0e08\u0e48\u0e32\u0e22"});case"pending":return Object(h.jsx)(i.b,{to:"/",className:"bg-yellow-600 text-white text-sm py-1 px-2 rounded-full",children:"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19"});case"success":return Object(h.jsx)(i.b,{to:"/",className:"bg-green-600 text-white text-sm py-1 px-2 rounded-full",children:"\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08"});default:return Object(h.jsx)(i.b,{to:"/",className:"bg-red-600 text-white text-sm py-1 px-2 rounded-full",children:"\u0e44\u0e21\u0e48\u0e2d\u0e19\u0e38\u0e21\u0e31\u0e15\u0e34"})}}var x=function(e){var t=e.data;return Object(h.jsxs)("table",{className:"w-full text-left border-collapse border",children:[Object(h.jsx)("thead",{className:"border-bottom py-10",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{className:"border p-2",width:"200px",children:"\u0e2b\u0e21\u0e32\u0e22\u0e40\u0e25\u0e02\u0e15\u0e34\u0e14\u0e15\u0e32\u0e21"}),Object(h.jsx)("th",{className:"border p-2",children:"\u0e04\u0e33\u0e23\u0e49\u0e2d\u0e07"}),Object(h.jsx)("th",{className:"border p-2 text-center",width:"150px",children:"\u0e2a\u0e16\u0e32\u0e19\u0e30"})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){return Object(h.jsxs)("tr",{className:"hover:bg-gray-100",children:[Object(h.jsx)("td",{className:"border p-2",children:e.id}),Object(h.jsxs)("td",{className:"border p-2",children:[e.name," "]}),Object(h.jsx)("td",{className:"border p-2 text-center",children:Object(h.jsx)(o,{status:e.status})})]},e.id)}))})]})},m=[{id:1,name:"Lorem ipsum dolor sit amet.",status:"waiting"},{id:2,name:"Lorem ipsum dolor sit amet.",status:"pending"},{id:3,name:"Lorem ipsum dolor sit amet.",status:"success"},{id:4,name:"Lorem ipsum dolor sit amet.",status:"cancel"}];var O=function(){var e=Object(s.useState)(""),t=Object(b.a)(e,2),c=t[0],r=t[1],a=Object(s.useState)(m),n=Object(b.a)(a,1)[0],l=Object(s.useState)(m),d=Object(b.a)(l,2),i=d[0],j=d[1];return Object(s.useEffect)((function(){j(n.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())})))}),[c,n]),Object(h.jsx)("div",{className:"bg-white p-5",children:Object(h.jsxs)("div",{id:"card",children:[Object(h.jsxs)("header",{className:"flex justify-between",children:[Object(h.jsx)("div",{children:Object(h.jsx)("span",{children:"\u0e15\u0e34\u0e14\u0e15\u0e32\u0e21\u0e2a\u0e16\u0e32\u0e19\u0e30"})}),Object(h.jsx)("div",{children:Object(h.jsx)("input",{type:"text",name:"search",id:"search",className:"bg-gray-100 py-1 px-2",placeholder:"\u0e04\u0e49\u0e19\u0e2b\u0e32..",onChange:function(e){return r(e.target.value)}})})]}),Object(h.jsx)("div",{className:"mt-2",children:Object(h.jsx)(x,{data:i})})]})})};function u(e){var t=e.data;return Object(h.jsxs)("table",{className:"w-full text-left border-collapse border",children:[Object(h.jsx)("thead",{className:"border-bottom py-10",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{className:"border p-2",width:"200px",children:"#"}),Object(h.jsx)("th",{className:"border p-2",children:"\u0e04\u0e33\u0e23\u0e49\u0e2d\u0e07"}),Object(h.jsx)("th",{className:"border p-2",width:"180px",children:"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e2d\u0e2d\u0e01\u0e04\u0e33\u0e23\u0e49\u0e2d\u0e07"}),Object(h.jsx)("th",{className:"border p-2",width:"100",children:"\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23"})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){return Object(h.jsxs)("tr",{className:"hover:bg-gray-100",children:[Object(h.jsx)("td",{className:"border p-2",children:e.id}),Object(h.jsxs)("td",{className:"border p-2",children:[e.name," "]}),Object(h.jsx)("td",{className:"border p-2",children:(new Date).toLocaleString()}),Object(h.jsxs)("td",{className:"border p-2 grid gap-1",children:[Object(h.jsx)("button",{className:"px-2 py-1 bg-yellow-600 rounded text-white",children:"\u0e41\u0e01\u0e49\u0e44\u0e02"}),Object(h.jsx)("button",{className:"px-2 py-1 bg-red-600 rounded text-white",children:"\u0e25\u0e1a"})]})]},e.id)}))})]})}var p=function(){var e=Object(s.useState)(""),t=Object(b.a)(e,2),c=t[0],r=t[1],a=Object(s.useState)(m),n=Object(b.a)(a,1)[0],l=Object(s.useState)(m),d=Object(b.a)(l,2),i=d[0],j=d[1];return Object(s.useEffect)((function(){j(n.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())})))}),[c,n]),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{id:"card",className:"bg-white p-5",children:[Object(h.jsxs)("header",{className:"flex justify-between",children:[Object(h.jsx)("div",{children:Object(h.jsx)("span",{children:"\u0e04\u0e33\u0e23\u0e49\u0e2d\u0e07\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"})}),Object(h.jsxs)("div",{className:"flex",children:[Object(h.jsx)("input",{type:"text",name:"search",id:"search",className:"bg-gray-100 py-1 px-2",placeholder:"\u0e04\u0e49\u0e19\u0e2b\u0e32..",onChange:function(e){return r(e.target.value)}}),Object(h.jsx)("div",{className:"mx-1"}),Object(h.jsx)("button",{className:"px-2 py-1 rounded bg-yellow-600 text-white",children:"\u0e40\u0e1e\u0e34\u0e48\u0e21"})]})]}),Object(h.jsx)("div",{className:"mt-2",children:Object(h.jsx)(u,{data:i})})]})})},g=c(9);var N=function(e){var t=e.children,c=e.showModal,s=e.setShowModal;return c?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none px-3",children:Object(h.jsx)("div",{className:"relative w-auto mx-auto max-w-3xl",children:Object(h.jsxs)("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[Object(h.jsxs)("div",{className:"flex items-center justify-between p-5 pb-1 rounded-t",children:[Object(h.jsx)("h3",{className:"text-xl font-semibold",children:"\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14"}),Object(h.jsx)("button",{className:"p-1 text-black",onClick:function(){return s(!1)},children:Object(h.jsx)("span",{className:"text-black",children:"\xd7"})})]}),Object(h.jsx)("div",{className:"relative p-6",children:t})]})})}),Object(h.jsx)("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]}):null};function f(){var e=Object(s.useState)(!1),t=Object(b.a)(e,2),c=t[0],r=t[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("table",{className:"w-full text-left border-collapse border",children:[Object(h.jsx)("thead",{className:"border-bottom py-10",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{className:"border p-2",children:"\u0e04\u0e33\u0e23\u0e49\u0e2d\u0e07"}),Object(h.jsx)("th",{className:"border p-2",width:"180px",children:"\u0e23\u0e2b\u0e31\u0e2a\u0e19\u0e31\u0e01\u0e28\u0e36\u0e01\u0e29\u0e32"}),Object(h.jsx)("th",{className:"border p-2",width:"180px",children:"\u0e0a\u0e37\u0e48\u0e2d\u0e19\u0e31\u0e01\u0e28\u0e36\u0e01\u0e29\u0e32"}),Object(h.jsx)("th",{className:"border p-2",width:"180px",children:"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23"}),Object(h.jsx)("th",{className:"border p-2",width:"180px",children:"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e22\u0e37\u0e48\u0e19\u0e04\u0e33\u0e23\u0e49\u0e2d\u0e07"}),Object(h.jsx)("th",{className:"border p-2 text-center",width:"150",children:"\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23"})]})}),Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{className:"hover:bg-gray-100",children:[Object(h.jsx)("td",{className:"border p-2",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, eos!"}),Object(h.jsx)("td",{className:"border p-2",children:"1232"}),Object(h.jsxs)("td",{className:"border p-2",children:[" \u0e19\u0e32\u0e22\u0e1b\u0e23\u0e31\u0e0a\u0e0d\u0e32 ",Object(h.jsx)("br",{})," \u0e21\u0e13\u0e35\u0e42\u0e0a\u0e15\u0e34"]}),Object(h.jsx)("td",{className:"border p-2",children:" \u0e28\u0e14\u0e23.\u0e1b\u0e35\u0e40\u0e15\u0e2d\u0e23\u0e4c"}),Object(h.jsx)("td",{className:"border p-2",children:(new Date).toLocaleString()}),Object(h.jsx)("td",{className:"border p-2 text-center",children:Object(h.jsx)("button",{className:"px-3 py-1 bg-yellow-300 rounded-full text-white text-sm",onClick:function(){return r(!0)},children:"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23"})})]}),Object(h.jsxs)("tr",{className:"hover:bg-gray-100",children:[Object(h.jsx)("td",{className:"border p-2",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, eos!"}),Object(h.jsx)("td",{className:"border p-2",children:"1232"}),Object(h.jsxs)("td",{className:"border p-2",children:[" \u0e19\u0e32\u0e22\u0e1b\u0e23\u0e31\u0e0a\u0e0d\u0e32 ",Object(h.jsx)("br",{})," \u0e21\u0e13\u0e35\u0e42\u0e0a\u0e15\u0e34"]}),Object(h.jsx)("td",{className:"border p-2",children:" \u0e28\u0e14\u0e23.\u0e1b\u0e35\u0e40\u0e15\u0e2d\u0e23\u0e4c"}),Object(h.jsx)("td",{className:"border p-2",children:(new Date).toLocaleString()}),Object(h.jsx)("td",{className:"border p-2 text-center",children:Object(h.jsx)("button",{className:"px-3 py-1 bg-green-500 rounded-full text-white text-sm",children:"\u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e08\u0e31\u0e14\u0e2a\u0e48\u0e07"})})]})]})]}),Object(h.jsxs)(N,{showModal:c,setShowModal:r,children:[Object(h.jsxs)(g.b,{activeStep:2,children:[Object(h.jsx)(g.a,{label:"\u0e2d\u0e32\u0e08\u0e32\u0e23\u0e22\u0e4c\u0e17\u0e35\u0e48\u0e1b\u0e23\u0e36\u0e01\u0e29\u0e32"}),Object(h.jsx)(g.a,{label:"\u0e04\u0e13\u0e30\u0e01\u0e23\u0e23\u0e21\u0e01\u0e32\u0e23\u0e1a\u0e23\u0e34\u0e2b\u0e32\u0e23\u0e2b\u0e25\u0e31\u0e01\u0e2a\u0e39\u0e15\u0e23"}),Object(h.jsx)(g.a,{label:"\u0e04\u0e13\u0e30\u0e1a\u0e14\u0e35 \u0e04\u0e13\u0e30\u0e28\u0e34\u0e25\u0e1b\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e41\u0e25\u0e30\u0e27\u0e34\u0e17\u0e22\u0e32\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c"}),Object(h.jsx)(g.a,{label:"\u0e2d\u0e32\u0e08\u0e32\u0e23\u0e22\u0e4c\u0e17\u0e35\u0e48\u0e1b\u0e23\u0e36\u0e01\u0e29\u0e32"}),Object(h.jsx)(g.a,{label:"\u0e04\u0e13\u0e30\u0e01\u0e23\u0e23\u0e21\u0e01\u0e32\u0e23\u0e1a\u0e23\u0e34\u0e2b\u0e32\u0e23\u0e2b\u0e25\u0e31\u0e01\u0e2a\u0e39\u0e15\u0e23"})]}),Object(h.jsx)("table",{className:"text-left w-full",children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{className:"py-1 w-32",children:"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e22\u0e37\u0e48\u0e19\u0e04\u0e33\u0e23\u0e49\u0e2d\u0e07"}),Object(h.jsx)("td",{children:(new Date).toLocaleString()})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{className:"py-1 w-32",children:"\u0e2b\u0e21\u0e32\u0e22\u0e40\u0e25\u0e02\u0e04\u0e33\u0e23\u0e49\u0e2d\u0e07"}),Object(h.jsx)("td",{children:"123"})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{className:"py-1 w-32",children:"\u0e04\u0e33\u0e23\u0e49\u0e2d\u0e07"}),Object(h.jsx)("td",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{className:"py-1 w-32",children:"\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14"}),Object(h.jsx)("td",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, odit!"})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{className:"py-1 w-32",children:"\u0e19\u0e31\u0e01\u0e28\u0e36\u0e01\u0e29\u0e32"}),Object(h.jsx)("td",{children:"\u0e19\u0e32\u0e22\u0e1b\u0e23\u0e31\u0e0a\u0e0d\u0e32 \u0e21\u0e13\u0e35\u0e42\u0e0a\u0e15\u0e34"})]})]})})]})]})}var v=function(){var e=Object(s.useState)(""),t=Object(b.a)(e,2),c=t[0],r=t[1],a=Object(s.useState)(m),n=Object(b.a)(a,1)[0],l=Object(s.useState)(m),d=Object(b.a)(l,2),i=d[0],j=d[1];return Object(s.useEffect)((function(){j(n.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())})))}),[c,n]),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{id:"card",className:"bg-white p-5",children:[Object(h.jsxs)("header",{className:"flex justify-between",children:[Object(h.jsx)("div",{children:Object(h.jsx)("span",{children:"\u0e04\u0e33\u0e23\u0e49\u0e2d\u0e07\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"})}),Object(h.jsx)("div",{className:"flex",children:Object(h.jsx)("input",{type:"text",name:"search",id:"search",className:"bg-gray-100 py-1 px-2",placeholder:"\u0e04\u0e49\u0e19\u0e2b\u0e32..",onChange:function(e){return r(e.target.value)}})})]}),Object(h.jsx)("div",{className:"mt-2",children:Object(h.jsx)(f,{data:i})})]})})};var y=function(){return Object(h.jsx)("div",{children:"Setting"})},w=c(10);var S=function(e){var t=e.onAdminLogin;return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:t,className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[Object(h.jsx)("input",{placeholder:"\u0e23\u0e2b\u0e31\u0e2a\u0e07\u0e32\u0e19\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19",type:"text",name:"student_id",className:"bg-gray-100 p-1"}),Object(h.jsx)("input",{placeholder:"\u0e40\u0e25\u0e02\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e15\u0e31\u0e27\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e0a\u0e19",type:"password",name:"student_card_id",className:"bg-gray-100 p-1"}),Object(h.jsx)("button",{className:"bg-yellow-800 text-white p-1 px-3 rounded",children:"\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a"})]})})};var k=function(e){var t=e.onStudentLogin;return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:t,className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[Object(h.jsx)("input",{placeholder:"\u0e23\u0e2b\u0e31\u0e2a\u0e19\u0e31\u0e01\u0e28\u0e36\u0e01\u0e29\u0e32",type:"text",name:"student_id",className:"bg-gray-100 p-1"}),Object(h.jsx)("input",{placeholder:"\u0e40\u0e25\u0e02\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e15\u0e31\u0e27\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e0a\u0e19",type:"password",name:"student_card_id",className:"bg-gray-100 p-1"}),Object(h.jsx)("button",{className:"bg-yellow-800 text-white p-1 px-3 rounded",children:"\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a"})]})})};var L=function(e){var t=e.onTecherLogin;return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:t,className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[Object(h.jsx)("input",{placeholder:"\u0e23\u0e2b\u0e31\u0e2a\u0e2d\u0e32\u0e08\u0e32\u0e23\u0e22\u0e4c",type:"text",name:"student_id",className:"bg-gray-100 p-1"}),Object(h.jsx)("input",{placeholder:"\u0e40\u0e25\u0e02\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e15\u0e31\u0e27\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e0a\u0e19",type:"password",name:"student_card_id",className:"bg-gray-100 p-1"}),Object(h.jsx)("button",{className:"bg-yellow-800 text-white p-1 px-3 rounded",children:"\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a"})]})})},q=c(19),C=Object(q.b)({name:"auth",initialState:{isAuth:!1,admin:null,student:null,techer:null},reducers:{setAuth:function(e,t){e.admin=t.payload.admin||null,e.student=t.payload.student||null,e.techer=t.payload.techer||null,e.isAuth=!0},logout:function(e){e.admin=null,e.student=null,e.techer=null,e.isAuth=!1}}}),F=C.actions,D=F.setAuth,A=F.logout,M=C.reducer,_={student:k,admin:S,techer:L};var E=function(){var e=Object(s.useState)("student"),t=Object(b.a)(e,2),c=t[0],r=t[1],a=_[c],n=Object(w.b)(),l=Object(j.g)();return Object(h.jsx)("div",{children:Object(h.jsx)("nav",{className:"bg-yellow-500 p-3 flex justify-end",children:Object(h.jsxs)("div",{className:"grid grid-cols-1",children:[Object(h.jsx)(a,{onStudentLogin:function(e){e.preventDefault(),n(D({student:"null",techer:null,admin:null})),l.push("/student/track")},onTecherLogin:function(e){e.preventDefault(),n(D({student:null,techer:"null",admin:null})),l.push("/involved/process")},onAdminLogin:function(e){e.preventDefault(),n(D({student:null,techer:null,admin:"null"})),l.push("/admin/manage-request")}}),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"radio",onChange:function(){return r("student")},value:"student",checked:"student"===c,name:"type"})," \u0e19\u0e31\u0e01\u0e28\u0e36\u0e01\u0e29\u0e32",Object(h.jsx)("input",{type:"radio",onChange:function(){return r("techer")},value:"techer",checked:"techer"===c,name:"type"})," \u0e2d\u0e32\u0e08\u0e32\u0e23\u0e22\u0e4c",Object(h.jsx)("input",{type:"radio",onChange:function(){return r("admin")},value:"admin",checked:"admin"===c,name:"type"})," \u0e07\u0e32\u0e19\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19"]})]})})})},T=[{id:1,name:"Lorem ipsum dolor sit amet.",status:"waiting"},{id:2,name:"Lorem ipsum dolor sit amet.",status:"pending"},{id:3,name:"Lorem ipsum dolor sit amet.",status:"success"},{id:4,name:"Lorem ipsum dolor sit amet.",status:"cancel"}];function I(e){var t=e.data,c=Object(s.useState)(!1),r=Object(b.a)(c,2),a=r[0],n=r[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("table",{className:"w-full text-left border-collapse border",children:[Object(h.jsx)("thead",{className:"border-bottom py-10",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{className:"border p-2",children:"\u0e04\u0e33\u0e23\u0e49\u0e2d\u0e07"}),Object(h.jsx)("th",{className:"border p-2",width:"150",children:"\u0e23\u0e2b\u0e31\u0e2a\u0e19\u0e31\u0e01\u0e28\u0e36\u0e01\u0e29\u0e32"}),Object(h.jsx)("th",{className:"border p-2",children:"\u0e0a\u0e37\u0e48\u0e2d\u0e19\u0e31\u0e01\u0e28\u0e36\u0e01\u0e29\u0e32"}),Object(h.jsx)("th",{className:"border p-2 text-center",width:"150px",children:"\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23"})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){return Object(h.jsxs)("tr",{className:"hover:bg-gray-100",children:[Object(h.jsxs)("td",{className:"border p-2",children:[e.name," "]}),Object(h.jsx)("td",{className:"border p-2",children:e.id}),Object(h.jsxs)("td",{className:"border p-2",children:[e.name," "]}),Object(h.jsx)("td",{className:"border p-2 text-center",children:Object(h.jsx)("button",{className:"bg-yellow-600 text-white py-1 px-2 rounded",onClick:function(){return n(!0)},children:"\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a"})})]},e.id)}))})]}),Object(h.jsxs)(N,{showModal:a,setShowModal:n,children:[Object(h.jsxs)(g.b,{activeStep:2,children:[Object(h.jsx)(g.a,{label:"\u0e2d\u0e32\u0e08\u0e32\u0e23\u0e22\u0e4c\u0e17\u0e35\u0e48\u0e1b\u0e23\u0e36\u0e01\u0e29\u0e32"}),Object(h.jsx)(g.a,{label:"\u0e04\u0e13\u0e30\u0e01\u0e23\u0e23\u0e21\u0e01\u0e32\u0e23\u0e1a\u0e23\u0e34\u0e2b\u0e32\u0e23\u0e2b\u0e25\u0e31\u0e01\u0e2a\u0e39\u0e15\u0e23"}),Object(h.jsx)(g.a,{label:"\u0e04\u0e13\u0e30\u0e1a\u0e14\u0e35 \u0e04\u0e13\u0e30\u0e28\u0e34\u0e25\u0e1b\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e41\u0e25\u0e30\u0e27\u0e34\u0e17\u0e22\u0e32\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c"}),Object(h.jsx)(g.a,{label:"\u0e2d\u0e32\u0e08\u0e32\u0e23\u0e22\u0e4c\u0e17\u0e35\u0e48\u0e1b\u0e23\u0e36\u0e01\u0e29\u0e32"}),Object(h.jsx)(g.a,{label:"\u0e04\u0e13\u0e30\u0e01\u0e23\u0e23\u0e21\u0e01\u0e32\u0e23\u0e1a\u0e23\u0e34\u0e2b\u0e32\u0e23\u0e2b\u0e25\u0e31\u0e01\u0e2a\u0e39\u0e15\u0e23"})]}),Object(h.jsx)("table",{className:"text-left w-full",children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{className:"py-1 w-32",children:"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e22\u0e37\u0e48\u0e19\u0e04\u0e33\u0e23\u0e49\u0e2d\u0e07"}),Object(h.jsx)("td",{children:(new Date).toLocaleString()})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{className:"py-1 w-32",children:"\u0e2b\u0e21\u0e32\u0e22\u0e40\u0e25\u0e02\u0e04\u0e33\u0e23\u0e49\u0e2d\u0e07"}),Object(h.jsx)("td",{children:"123"})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{className:"py-1 w-32",children:"\u0e04\u0e33\u0e23\u0e49\u0e2d\u0e07"}),Object(h.jsx)("td",{children:"123"})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{className:"py-1 w-32",children:"\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14"}),Object(h.jsx)("td",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, odit!"})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{className:"py-1 w-32",children:"\u0e19\u0e31\u0e01\u0e28\u0e36\u0e01\u0e29\u0e32"}),Object(h.jsx)("td",{children:"\u0e19\u0e32\u0e22\u0e1b\u0e23\u0e31\u0e0a\u0e0d\u0e32 \u0e21\u0e13\u0e35\u0e42\u0e0a\u0e15\u0e34"})]}),Object(h.jsx)("tr",{children:Object(h.jsx)("td",{colSpan:"2",className:"pt-3",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"\u0e02\u0e49\u0e2d\u0e04\u0e34\u0e14\u0e40\u0e2b\u0e47\u0e19"}),Object(h.jsx)("textarea",{name:"memo",className:"w-full bg-gray-100 rounded",rows:"3"})]})})})]})}),Object(h.jsxs)("div",{className:"flex items-center justify-end pt-5 rounded-b",children:[Object(h.jsx)("button",{className:"px-3 py-1 rounded text-red-500",type:"button",onClick:function(){return n(!1)},children:"\u0e44\u0e21\u0e48\u0e40\u0e2b\u0e47\u0e19\u0e0a\u0e2d\u0e1a"}),Object(h.jsx)("button",{className:"bg-yellow-600 px-3 py-1 rounded text-white",type:"button",onClick:function(){return n(!1)},children:"\u0e40\u0e2b\u0e47\u0e19\u0e0a\u0e2d\u0e1a"})]})]})]})}var z=function(){var e=Object(s.useState)(T),t=Object(b.a)(e,1)[0];return Object(h.jsx)("div",{className:"bg-white p-5",children:Object(h.jsxs)("div",{id:"card",children:[Object(h.jsxs)("header",{className:"flex justify-between",children:[Object(h.jsx)("div",{children:Object(h.jsx)("span",{children:"\u0e04\u0e33\u0e23\u0e49\u0e2d\u0e07\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"})}),Object(h.jsx)("div",{children:Object(h.jsx)("input",{type:"text",name:"search",id:"search",className:"bg-gray-100 py-1 px-2",placeholder:"\u0e04\u0e49\u0e19\u0e2b\u0e32.."})})]}),Object(h.jsx)("div",{className:"mt-2",children:Object(h.jsx)(I,{data:t})})]})})};var B=function(){var e=Object(w.c)((function(e){return e.auth})),t=e.admin,c=e.student,s=e.techer,r=Object(j.h)(),a=Object(j.g)(),n=Object(w.b)();return Object(h.jsx)("div",{children:Object(h.jsxs)("header",{className:"flex items-center bg-yellow-500 p-3",children:[c&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(i.b,{className:"mr-3 ".concat("/student/track"===r.pathname?"font-bold":""),to:"/student/track",children:"\u0e15\u0e34\u0e14\u0e15\u0e32\u0e21\u0e2a\u0e16\u0e32\u0e19\u0e30"}),Object(h.jsx)(i.b,{className:"mr-3 ".concat("/student/create"===r.pathname?"font-bold":""),to:"/student/create",children:"\u0e22\u0e37\u0e48\u0e19\u0e04\u0e33\u0e23\u0e49\u0e2d\u0e07"})]}),s&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(i.b,{className:"mr-3 ".concat("/involved/process"===r.pathname?"font-bold":""),to:"/involved/process",children:"\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23\u0e04\u0e33\u0e23\u0e49\u0e2d\u0e07"}),Object(h.jsx)(i.b,{className:"mr-3 ".concat("/involved/alert"===r.pathname?"font-bold":""),to:"/involved/alert",children:"\u0e01\u0e32\u0e23\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19"})]}),t&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(i.b,{className:"mr-3 ".concat("/admin/manage-request"===r.pathname?"font-bold":""),to:"/admin/manage-request",children:"\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e04\u0e33\u0e23\u0e49\u0e2d\u0e07"}),Object(h.jsx)(i.b,{className:"mr-3 ".concat("/admin/issue-document"===r.pathname?"font-bold":""),to:"/admin/issue-document",children:"\u0e08\u0e31\u0e14\u0e2a\u0e48\u0e07\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23"}),Object(h.jsx)(i.b,{className:"mr-3 ".concat("/admin/settings"===r.pathname?"font-bold":""),to:"/admin/settings",children:"\u0e15\u0e31\u0e49\u0e07\u0e04\u0e48\u0e32\u0e23\u0e30\u0e1a\u0e1a"})]}),Object(h.jsx)("button",{onClick:function(){n(A()),a.push("/")},children:"\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e23\u0e30\u0e1a\u0e1a"})]})})};function J(){return Object(h.jsxs)("table",{className:"w-full text-left border-collapse border",children:[Object(h.jsx)("thead",{className:"border-bottom py-10",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{className:"border p-2",width:"100px",children:"#"}),Object(h.jsx)("th",{className:"border p-2",width:"200",children:"\u0e04\u0e33\u0e23\u0e49\u0e2d\u0e07"}),Object(h.jsx)("th",{className:"border p-2 text-center",width:"150px",children:"\u0e08\u0e33\u0e19\u0e27\u0e19"}),Object(h.jsx)("th",{className:"border p-2 text-center",width:"150px",children:"\u0e04\u0e48\u0e32\u0e18\u0e23\u0e23\u0e21\u0e40\u0e19\u0e35\u0e22\u0e21"}),Object(h.jsx)("th",{className:"border p-2 text-center",width:"70px",children:"\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23"})]})}),Object(h.jsx)("tbody",{children:Object(h.jsxs)("tr",{className:"hover:bg-gray-100",children:[Object(h.jsx)("td",{className:"border p-2",children:"top"}),Object(h.jsx)("td",{className:"border p-2",children:"top"}),Object(h.jsx)("td",{className:"border p-2",children:"top"}),Object(h.jsx)("td",{className:"border p-2",children:"top"}),Object(h.jsx)("td",{className:"border p-2 text-center",children:Object(h.jsx)("button",{className:"bg-red-600 text-white px-2 py-1 rounded",children:"\u0e25\u0e1a"})})]})}),Object(h.jsx)("tfoot",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{className:"border p-2 text-right",colSpan:"3",children:"\u0e04\u0e48\u0e32\u0e18\u0e23\u0e23\u0e21\u0e40\u0e19\u0e35\u0e22\u0e21\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"}),Object(h.jsx)("th",{className:"border p-2 text-center",colSpan:"2",children:"10"})]})})]})}var P=function(){var e=Object(s.useState)(!1),t=Object(b.a)(e,2),c=t[0],r=t[1];return Object(h.jsxs)("div",{className:"bg-white p-5",children:[Object(h.jsxs)("div",{id:"card",children:[Object(h.jsx)("header",{className:"flex justify-between",children:Object(h.jsx)("div",{children:Object(h.jsx)("span",{children:"\u0e22\u0e37\u0e48\u0e19\u0e04\u0e33\u0e23\u0e49\u0e2d\u0e07"})})}),Object(h.jsx)("div",{className:"mt-2",children:Object(h.jsxs)("form",{action:"",className:"grid gap-3",children:[Object(h.jsx)("div",{className:"grid md:grid-cols-3",children:Object(h.jsxs)("div",{className:"grid",children:[Object(h.jsx)("label",{htmlFor:"request",children:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e04\u0e33\u0e23\u0e49\u0e2d\u0e07 *"}),Object(h.jsx)("select",{name:"request",id:"request",className:"bg-gray-100 p-2",children:Object(h.jsx)("option",{value:"",children:"\u0e04\u0e33\u0e23\u0e49\u0e2d\u0e07\u0e41\u0e01\u0e49 E, I, R"})})]})}),Object(h.jsx)("div",{className:"grid",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("small",{className:"text-gray-600",children:"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e43\u0e0a\u0e49 *"}),Object(h.jsxs)("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-3 ml-2",children:[Object(h.jsxs)("div",{className:"grid",children:[Object(h.jsx)("label",{htmlFor:"request",children:"\u0e0a\u0e37\u0e48\u0e2d\u0e1e\u0e48\u0e2d"}),Object(h.jsx)("input",{type:"text",name:"emailDelivery",className:"bg-gray-100 p-2"})]}),Object(h.jsxs)("div",{className:"grid",children:[Object(h.jsx)("label",{htmlFor:"request",children:"\u0e0a\u0e37\u0e48\u0e2d\u0e41\u0e21\u0e48"}),Object(h.jsx)("input",{type:"text",name:"homeDelivery",className:"bg-gray-100 p-2"})]}),Object(h.jsxs)("div",{className:"grid",children:[Object(h.jsx)("label",{htmlFor:"request",children:"\u0e23\u0e39\u0e1b\u0e1e\u0e48\u0e2d\u0e41\u0e21\u0e48"}),Object(h.jsx)("input",{type:"file",name:"homeDelivery",className:"bg-gray-100 p-2"})]}),Object(h.jsxs)("div",{className:"grid",children:[Object(h.jsx)("label",{htmlFor:"request",children:"\u0e23\u0e39\u0e1b\u0e1e\u0e48\u0e2d\u0e41\u0e21\u0e48"}),Object(h.jsx)("input",{type:"file",name:"homeDelivery",className:"bg-gray-100 p-2"})]})]})]})}),Object(h.jsx)("div",{className:"grid md:grid-cols-12",children:Object(h.jsxs)("div",{className:"grid",children:[Object(h.jsx)("label",{htmlFor:"request",children:"\u0e08\u0e33\u0e19\u0e27\u0e19\u0e04\u0e33\u0e23\u0e49\u0e2d\u0e07 *"}),Object(h.jsx)("input",{type:"number",name:"quantity",id:"quantity",className:"bg-gray-100 p-2"})]})}),Object(h.jsx)("div",{className:"grid",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("small",{className:"text-gray-600",children:"\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e43\u0e19\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e2a\u0e48\u0e07 *"}),Object(h.jsxs)("div",{className:"grid ml-2",children:[Object(h.jsxs)("div",{className:"grid",children:[Object(h.jsx)("input",{type:"checkbox",name:"emailDelivery",className:"bg-gray-100 p-2"}),Object(h.jsx)("label",{htmlFor:"request",children:"\u0e08\u0e31\u0e14\u0e2a\u0e48\u0e07\u0e1c\u0e48\u0e32\u0e19\u0e2d\u0e35\u0e40\u0e21\u0e25\u0e25\u0e4c"})]}),Object(h.jsxs)("div",{className:"grid",children:[Object(h.jsx)("input",{type:"checkbox",name:"homeDelivery",className:"bg-gray-100 p-2"}),Object(h.jsx)("label",{htmlFor:"request",children:"\u0e08\u0e31\u0e14\u0e2a\u0e48\u0e07\u0e17\u0e35\u0e48\u0e1a\u0e49\u0e32\u0e19"})]})]})]})}),Object(h.jsx)("div",{className:"grid",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("small",{className:"text-gray-600",children:"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d *"}),Object(h.jsxs)("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-3 ml-2",children:[Object(h.jsxs)("div",{className:"grid",children:[Object(h.jsx)("label",{htmlFor:"request",children:"\u0e2d\u0e35\u0e40\u0e21\u0e25\u0e25\u0e4c"}),Object(h.jsx)("input",{type:"email",name:"email",id:"email",className:"bg-gray-100 p-2"})]}),Object(h.jsxs)("div",{className:"grid",children:[Object(h.jsx)("label",{htmlFor:"request",children:"\u0e2b\u0e21\u0e32\u0e22\u0e40\u0e25\u0e02\u0e42\u0e17\u0e23\u0e28\u0e31\u0e1e\u0e17\u0e4c"}),Object(h.jsx)("input",{type:"text",name:"phone",id:"phone",className:"bg-gray-100 p-2"})]}),Object(h.jsxs)("div",{className:"grid col-span-full md:col-span-2",children:[Object(h.jsx)("label",{htmlFor:"request",children:"\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48"}),Object(h.jsx)("textarea",{name:"address",id:"address",rows:"3",className:"bg-gray-100 p-2"})]})]})]})}),Object(h.jsx)("div",{className:"text-right",children:Object(h.jsx)("button",{className:"py-2 px-3 text-white bg-yellow-600 rounded",children:"\u0e40\u0e1e\u0e34\u0e48\u0e21"})})]})})]}),Object(h.jsxs)("div",{id:"card",children:[Object(h.jsx)("header",{className:"flex justify-between mt-5",children:Object(h.jsx)("div",{children:Object(h.jsx)("span",{children:"\u0e04\u0e33\u0e23\u0e49\u0e2d\u0e07\u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e44\u0e27\u0e49"})})}),Object(h.jsx)(J,{}),Object(h.jsx)("footer",{className:" flex justify-end py-3",children:Object(h.jsx)("button",{className:"py-2 px-3 text-white bg-yellow-600 rounded",type:"button",onClick:function(){return r(!0)},children:"\u0e0a\u0e33\u0e23\u0e30\u0e40\u0e07\u0e34\u0e19"})})]}),Object(h.jsxs)(N,{showModal:c,setShowModal:r,children:[Object(h.jsx)("span",{className:"font-bold text-sm",children:"* \u0e18\u0e19\u0e32\u0e04\u0e32\u0e23\u0e01\u0e23\u0e38\u0e07\u0e44\u0e17\u0e22 \u0e40\u0e25\u0e02\u0e17\u0e35\u0e48\u0e1a\u0e31\u0e0d\u0e0a\u0e35 33-345-34565-7 \u0e19\u0e32\u0e07\u0e2a\u0e32\u0e27\u0e2a\u0e27\u0e22\u0e2a\u0e14 \u0e07\u0e14\u0e07\u0e32\u0e21"}),Object(h.jsx)("table",{className:"text-gray-700 w-full my-3",children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{className:" text-sm w-32 text-left",children:"\u0e04\u0e33\u0e23\u0e49\u0e2d\u0e07\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"}),Object(h.jsx)("td",{className:" text-sm w-32 text-right",children:"10"})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{className:" text-sm w-32 text-left",children:"\u0e04\u0e48\u0e32\u0e18\u0e23\u0e23\u0e21\u0e40\u0e19\u0e35\u0e22\u0e21"}),Object(h.jsx)("td",{className:" text-sm w-32 text-right",children:"10"})]})]})}),Object(h.jsxs)("div",{className:"grid",children:[Object(h.jsx)("span",{className:"font-bold text-sm",children:"\u0e41\u0e19\u0e1a\u0e2a\u0e25\u0e34\u0e1b"}),Object(h.jsx)("input",{type:"file",name:"homeDelivery",className:"bg-gray-100 p-2"})]}),Object(h.jsxs)("div",{className:"flex items-center justify-end pt-5 rounded-b",children:[Object(h.jsx)("button",{className:"px-3 py-1 rounded text-red-500",type:"button",onClick:function(){return r(!1)},children:"\u0e1b\u0e34\u0e14"}),Object(h.jsx)("button",{className:"bg-yellow-600 px-3 py-1 rounded text-white",type:"button",onClick:function(){return r(!1)},children:"\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19"})]})]})]})};var R=function(){var e=Object(s.useState)(!1),t=Object(b.a)(e,2),c=t[0],r=t[1],a=Object(s.useState)(!0),n=Object(b.a)(a,2),l=n[0],d=n[1];return Object(h.jsx)("div",{className:"bg-white p-5",children:Object(h.jsxs)("div",{id:"card",children:[Object(h.jsx)("header",{className:"flex justify-between",children:Object(h.jsx)("div",{children:Object(h.jsx)("span",{children:"\u0e15\u0e31\u0e49\u0e07\u0e04\u0e48\u0e32\u0e01\u0e32\u0e23\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19"})})}),Object(h.jsx)("section",{children:Object(h.jsxs)("form",{children:[Object(h.jsxs)("div",{className:"flex",children:[Object(h.jsxs)("div",{className:"mb-3 mr-3",children:[Object(h.jsx)("input",{type:"checkbox",name:"checkbox",id:"checkbox",className:"mr-1",checked:l,onChange:function(){return d(!l)}}),Object(h.jsx)("label",{htmlFor:"request",children:"\u0e2d\u0e35\u0e40\u0e21\u0e25\u0e25\u0e4c"})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("input",{type:"checkbox",name:"checkbox",id:"checkbox",className:"mr-1",checked:c,onChange:function(){return r(!c)}}),Object(h.jsx)("label",{htmlFor:"request",children:"\u0e44\u0e2d\u0e14\u0e35\u0e44\u0e25\u0e19\u0e4c"})]})]}),l&&Object(h.jsxs)("div",{className:"grid mb-3",children:[Object(h.jsx)("label",{htmlFor:"request",children:"\u0e2d\u0e35\u0e40\u0e21\u0e25\u0e25\u0e4c"}),Object(h.jsx)("input",{type:"email",name:"email",id:"email",className:"bg-gray-100 p-2"})]}),c&&Object(h.jsxs)("div",{className:"grid mb-3",children:[Object(h.jsx)("label",{htmlFor:"request",children:"\u0e44\u0e2d\u0e14\u0e35\u0e44\u0e25\u0e19\u0e4c"}),Object(h.jsx)("input",{type:"text",name:"line_id",id:"line_id",className:"bg-gray-100 p-2"})]}),Object(h.jsx)("div",{className:"flex justify-end",children:Object(h.jsx)("button",{className:"bg-yellow-600 text-white py-1 px-2 rounded",children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"})})]})})]})})};var G=function(e){var t=e.children,c=Object(d.a)(e,["children"]),s=Object(w.c)((function(e){return e.auth})),r=s.isAuth,a=s.admin,n=s.student,i=s.techer;return Object(h.jsx)(j.b,Object(l.a)(Object(l.a)({},c),{},{render:function(e){var c=e.location;return r&&a&&!n&&!i?Object(h.jsx)(j.a,{to:{pathname:"/admin/manage-request",state:{from:c}}}):r&&!a&&n&&!i?Object(h.jsx)(j.a,{to:{pathname:"/student/track",state:{from:c}}}):r&&!a&&!n&&i?Object(h.jsx)(j.a,{to:{pathname:"/involved/process",state:{from:c}}}):t}}))},H=function(e){var t=e.children,c=Object(d.a)(e,["children"]),s=Object(w.c)((function(e){return e.auth})),r=s.isAuth,a=s.techer;return Object(h.jsx)(j.b,Object(l.a)(Object(l.a)({},c),{},{render:function(e){var c=e.location;return r&&a?t:Object(h.jsx)(j.a,{to:{pathname:"/404",state:{from:c}}})}}))},K=function(e){var t=e.children,c=Object(d.a)(e,["children"]),s=Object(w.c)((function(e){return e.auth})),r=s.isAuth,a=s.admin;return Object(h.jsx)(j.b,Object(l.a)(Object(l.a)({},c),{},{render:function(e){var c=e.location;return r&&a?t:Object(h.jsx)(j.a,{to:{pathname:"/404",state:{from:c}}})}}))},Q=function(e){var t=e.children,c=Object(d.a)(e,["children"]),s=Object(w.c)((function(e){return e.auth})).isAuth;return Object(h.jsx)(j.b,Object(l.a)(Object(l.a)({},c),{},{render:function(e){var c=e.location;return s?t:Object(h.jsx)(j.a,{to:{pathname:"/404",state:{from:c}}})}}))},U=function(e){var t=e.children,c=Object(d.a)(e,["children"]),s=Object(w.c)((function(e){return e.auth})),r=s.isAuth,a=s.student;return Object(h.jsx)(j.b,Object(l.a)(Object(l.a)({},c),{},{render:function(e){var c=e.location;return r&&a?t:Object(h.jsx)(j.a,{to:{pathname:"/404",state:{from:c}}})}}))},V=function(){return Object(h.jsx)(i.a,{basename:"/petition-system",children:Object(h.jsx)("div",{className:"bg-gray-100 min-h-screen overflow-x-hidden py-2",children:Object(h.jsxs)("div",{className:"container mx-auto",children:[Object(h.jsx)("header",{className:"flex justify-center bg-yellow-300",children:Object(h.jsx)("img",{src:"/petition-system/Logo-sskru.jpg",alt:"",width:"70%"})}),Object(h.jsxs)(j.d,{children:[Object(h.jsx)(G,{path:"/",exact:!0,children:Object(h.jsx)(E,{})}),Object(h.jsxs)(Q,{children:[Object(h.jsx)(B,{}),Object(h.jsx)(K,{path:"/admin/manage-request",children:Object(h.jsx)(p,{})}),Object(h.jsx)(K,{path:"/admin/issue-document",children:Object(h.jsx)(v,{})}),Object(h.jsx)(K,{path:"/admin/settings",children:Object(h.jsx)(y,{})}),Object(h.jsx)(U,{path:"/student/track",children:Object(h.jsx)(O,{})}),Object(h.jsx)(U,{path:"/student/create",children:Object(h.jsx)(P,{})}),Object(h.jsx)(H,{path:"/involved/process",children:Object(h.jsx)(z,{})}),Object(h.jsx)(H,{path:"/involved/alert",children:Object(h.jsx)(R,{})})]}),Object(h.jsx)(j.b,{path:"/404",children:Object(h.jsx)("h1",{children:"404"})})]})]})})})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,48)).then((function(t){var c=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,n=t.getTTFB;c(e),s(e),r(e),a(e),n(e)}))},X=Object(q.a)({reducer:{auth:M}});n.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(w.a,{store:X,children:Object(h.jsx)(V,{})})}),document.getElementById("root")),W()}},[[47,1,2]]]);
//# sourceMappingURL=main.8a201e93.chunk.js.map