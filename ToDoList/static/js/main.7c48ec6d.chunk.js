(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{27:function(n,e,t){},28:function(n,e,t){"use strict";t.r(e);var o,i,r,c=t(0),s=t.n(c),a=t(11),d=t.n(a),l=t(2),u=t(3),b=u.a.div(o||(o=Object(l.a)(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  user-select: none;\n  .todoList {\n    font-size: 30px;\n    margin-bottom: 40px;\n  }\n"]))),p=t(17),j=t(9),x=t(15),h=t.n(x),f=t(16),O=t.n(f),g=u.a.div(i||(i=Object(l.a)(["\n  input {\n    width: 300px;\n    height: 30px;\n    border-radius: 9px;\n    padding: 5px;\n    margin-bottom: 10px;\n    border: 1px solid black;\n    outline: none;\n  }\n  ul {\n    position: relative;\n    width: 300px;\n    list-style-type: none;\n  }\n"]))),k=u.a.li(r||(r=Object(l.a)(["\n  display: block;\n  width: 300px;\n  padding: 10px 10px;\n  padding-right: 0;\n  border-bottom: 1px solid black;\n  cursor: pointer;\n  text-decoration:",';\n  button {\n    display: none;\n    position: absolute;\n    border-style: none;\n    outline: 0;\n    border: 0;\n    right: 0;\n    :hover {\n      color: black;\n    }\n    ::after {\n      content: "x";\n    }\n  }\n  :hover button {\n    display: inline;\n    font-size: 20px;\n    padding-left: 10px;\n    padding-right: 10px;\n    color: #ff3333;\n    border-radius: 4px;\n  }\n\n'])),(function(n){return n.TDN})),m=t(1),D=Object(c.memo)((function(n){var e=n.task,t=n.index,o=n.isDone,i=n.delTask,r=n.DoneTask,c=o?"line-through":"";return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(k,{TDN:c,onClick:function(n){return r(t)},children:[Object(m.jsxs)("span",{children:[t+1,". ",e]}),Object(m.jsx)("button",{onClick:function(n){return i(n,t)}})]})})})),v=Object(c.memo)((function(){var n=Object(c.useState)([{id:"123",isDone:!1,task:"\u4efb\u52a1\u4e00"},{id:"124",isDone:!1,task:"\u4efb\u52a1\u4e8c"},{id:"125",isDone:!1,task:"\u4efb\u52a1\u4e09"}]),e=Object(j.a)(n,2),t=e[0],o=e[1],i=Object(c.useState)(""),r=Object(j.a)(i,2),s=r[0],a=r[1];function d(n,e){n.stopPropagation(),console.log(e),o(t.filter((function(n,t){return e!==t})))}function l(n){var e=O.a.cloneDeep(t);e[n].isDone=!e[n].isDone,o(e),console.log(e)}return Object(m.jsxs)(g,{children:[Object(m.jsx)("input",{placeholder:"\u8bf7\u8f93\u5165\u4efb\u52a1",value:s,onKeyUp:function(n){return function(n){""===s?alert("\u8f93\u5165\u4efb\u52a1\u4e0d\u80fd\u4e3a\u7a7a\uff01\uff01\uff01"):13===n.keyCode&&(o((function(n){return[].concat(Object(p.a)(n),[{id:h()(),isDone:!1,task:s}])})),a(""))}(n)},onChange:function(n){return a(n.target.value)}}),Object(m.jsx)("ul",{children:t.map((function(n,e){return Object(m.jsx)(D,{task:n.task,isDone:n.isDone,index:e,delTask:d,DoneTask:l},n.id)}))})]})})),y=Object(c.memo)((function(){return Object(m.jsxs)(b,{children:[Object(m.jsx)("div",{className:"todoList",children:"ToDoList"}),Object(m.jsx)(v,{})]})})),T=Object(c.memo)((function(){return Object(m.jsx)("div",{children:Object(m.jsx)(y,{})})}));t(27);d.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(T,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.7c48ec6d.chunk.js.map