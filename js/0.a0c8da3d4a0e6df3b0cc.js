webpackJsonp([0],{25:function(t,i,e){"use strict";function s(t){e(35)}Object.defineProperty(i,"__esModule",{value:!0});var L=e(37),M=e(39),a=e(5),o=s,n=a(L.a,M.a,!1,o,null,null);i.default=n.exports},35:function(t,i,e){var s=e(36);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(23)("0313f445",s,!0)},36:function(t,i,e){i=t.exports=e(22)(void 0),i.push([t.i,".hello{text-align:center}.padding{padding:30px}.title{text-align:left}.notFound{margin:20px auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;color:#888}.notFound .q-icon{font-size:40px;margin-bottom:15px}.block-field{max-width:480px;margin:0 auto;position:relative;padding:20px}.add-button{position:absolute;right:20px;top:35px}.block-list{max-width:480px;margin:30px auto}.q-if-label{text-align:left}.auth-buttons{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.auth-buttons small{margin-bottom:20px}.auth-modal .form{margin-top:30px}.auth-modal .form .q-btn{margin-top:10px}.auth-modal .modal-content{border-radius:4px}.auth-modal .modal-content .close{position:absolute;right:0;top:0;padding:0 10px}",""])},37:function(t,i,e){"use strict";var s=e(4),L=e(6),M=(e.n(L),e(26)),a=(e.n(M),e(38)),o=e(29);e.n(o);i.a={name:"hello",components:{QBtn:s.c,QList:s.j,QListHeader:s.k,QItem:s.g,QItemSide:s.i,QItemMain:s.h,QInput:s.f,QIcon:s.e,QModal:s.l,QCard:s.d},data:function(){return{tasks:[],userData:[],newTask:"",registerLoad:!1,loginLoad:!1,loggedIn:!1,loginForm:{email:"",password:""},registerForm:{email:"",password:""},email:""}},created:function(){var t=this;L.Meteor.subscribe("tasks"),o.Tracker.autorun(function(){t.loginStatus(),t.tasks=a.a.find({},{sort:{createdAt:-1}}).map(function(t){return{_id:t._id,title:t.title,editing:!1}})})},mounted:function(){var t=this;o.Tracker.autorun(function(){if(null!==L.Meteor.userId()||null!==L.Meteor.user()){var i=L.Meteor.users.find({_id:L.Meteor.userId()},{fields:{emails:1}}).map(function(t){return t.emails[0].address});t.email=i[0]}})},methods:{logout:function(){s.a.create({html:"You logged out"}),L.Meteor.logout(),this.loggedIn=!1},loginStatus:function(){null===L.Meteor.userId()&&null===L.Meteor.user()||(this.loggedIn=!0)},addTask:function(t){this.newTask&&(s.m.create({html:this.newTask,timeout:2500,color:"#fff",button:{color:"yellow",handler:function(){console.log(t)}}}),L.Meteor.call("tasks.insert",this.newTask),this.newTask="")},editTask:function(t){t.editing=!0,!0===t.editing&&(this.changeTask=t.title)},saveTask:function(t){t.editing=!1,this.changeTask&&L.Meteor.call("tasks.update",t._id,this.changeTask)},removeTask:function(t){s.b.create({title:"Remove task",message:"Are you sure you want to remove this task?",buttons:[{label:"Cancel",handler:function(){s.a.create({html:"Canceled..."})}},{label:"Remove",color:"negative",outline:!0,handler:function(){L.Meteor.call("tasks.remove",t._id)}}]})},login:function(){var t=this;this.loginLoad=!0,L.Meteor.loginWithPassword(this.loginForm.email,this.loginForm.password,function(i){i?(s.a.create({html:i}),t.loginLoad=!1):(s.a.create({html:"Good to see you again, welcome!",color:"primary",icon:"check"}),t.loginLoad=!1,t.loginForm.email="",t.loginForm.password="",t.$refs.loginModal.close())})},register:function(){var t=this;this.registerLoad=!0,M.Accounts.createUser({createdAt:new Date,email:this.registerForm.email,password:this.registerForm.password},function(i,e){i?(s.a.create({html:i}),t.registerLoad=!1):(s.a.create({html:"You just signed up",color:"positive",icon:"check"}),t.registerLoad=!1,t.registerForm.email="",t.registerForm.password="",t.$refs.registerModal.close())})}}}},38:function(t,i,e){"use strict";e.d(i,"a",function(){return a});var s=e(6),L=(e.n(s),e(27)),M=(e.n(L),e(28)),a=(e.n(M),new L.Mongo.Collection("tasks"));s.Meteor.isServer&&(s.Meteor.publish("tasks",function(){return a.find()}),s.Meteor.publish("userData",function(){var t;return t=this.userId,t?s.Meteor.users.find({_id:t},{fields:{emails:1}}):this.ready()})),s.Meteor.methods({"tasks.insert":function(t){Object(M.check)(t,String),a.insert({title:t,createdAt:new Date})},"tasks.update":function(t,i){Object(M.check)(t,String),Object(M.check)(i,String),a.update(t,{$set:{_id:t,updatedAt:new Date,title:i}})},"tasks.remove":function(t){Object(M.check)(t,String),a.remove(t)}})},39:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"hello"},[s("img",{attrs:{src:e(40),alt:"Quasar + Meteor Starter kit",width:"280"}}),t._v(" "),s("h5",[t._v("Welcome to your Quasar + Meteor Starter kit")]),t._v(" "),s("div",{staticClass:"padding"},[s("div",{staticClass:"authentication"},[t.loggedIn?t._e():s("div",{staticClass:"auth-buttons"},[s("small",[t._v("Basic authentication using Meteor.Accounts")]),t._v(" "),s("div",[s("q-btn",{on:{click:function(i){t.$refs.loginModal.open()}}},[t._v("Login")]),t._v(" "),s("q-btn",{on:{click:function(i){t.$refs.registerModal.open()}}},[t._v("Register")])],1)]),t._v(" "),t.loggedIn?s("div",{staticClass:"auth-profile"},[s("strong",[t._v(t._s(this.email))]),t._v(" "),s("q-btn",{attrs:{color:"negative",small:""},on:{click:t.logout}},[t._v("Logout")])],1):t._e(),t._v(" "),s("q-modal",{ref:"loginModal",staticClass:"auth-modal"},[s("div",{staticClass:"padding"},[s("h4",[t._v("Login")]),t._v(" "),s("q-btn",{staticClass:"close",attrs:{color:"negative",flat:""},on:{click:function(i){t.$refs.loginModal.close()}}},[s("q-icon",{attrs:{name:"close"}})],1),t._v(" "),s("div",{staticClass:"form"},[s("div",[s("q-input",{attrs:{"stack-label":"Your email"},on:{keyup:function(i){if(!("button"in i)&&t._k(i.keyCode,"enter",13,i.key))return null;t.login(i)}},model:{value:t.loginForm.email,callback:function(i){t.$set(t.loginForm,"email",i)},expression:"loginForm.email"}})],1),t._v(" "),s("div",[s("q-input",{attrs:{"stack-label":"Your password",type:"password"},on:{keyup:function(i){if(!("button"in i)&&t._k(i.keyCode,"enter",13,i.key))return null;t.login(i)}},model:{value:t.loginForm.password,callback:function(i){t.$set(t.loginForm,"password",i)},expression:"loginForm.password"}})],1),t._v(" "),s("div",[s("q-btn",{staticClass:"full-width",attrs:{loader:"",color:"primary"},on:{click:t.login},model:{value:t.loginLoad,callback:function(i){t.loginLoad=i},expression:"loginLoad"}},[t._v("Login")])],1)])],1)]),t._v(" "),s("q-modal",{ref:"registerModal",staticClass:"auth-modal"},[s("div",{staticClass:"padding"},[s("h4",[t._v("Register")]),t._v(" "),s("q-btn",{staticClass:"close",attrs:{color:"negative",flat:""},on:{click:function(i){t.$refs.registerModal.close()}}},[s("q-icon",{attrs:{name:"close"}})],1),t._v(" "),s("div",{staticClass:"form"},[s("div",[s("q-input",{attrs:{"stack-label":"Your email"},on:{keyup:function(i){if(!("button"in i)&&t._k(i.keyCode,"enter",13,i.key))return null;t.register(i)}},model:{value:t.registerForm.email,callback:function(i){t.$set(t.registerForm,"email",i)},expression:"registerForm.email"}})],1),t._v(" "),s("div",[s("q-input",{attrs:{"stack-label":"Your password",type:"password"},on:{keyup:function(i){if(!("button"in i)&&t._k(i.keyCode,"enter",13,i.key))return null;t.register(i)}},model:{value:t.registerForm.password,callback:function(i){t.$set(t.registerForm,"password",i)},expression:"registerForm.password"}})],1),t._v(" "),s("div",[s("q-btn",{staticClass:"full-width",attrs:{loader:"",color:"positive"},on:{click:function(i){i.preventDefault(),t.register(i)}},model:{value:t.registerLoad,callback:function(i){t.registerLoad=i},expression:"registerLoad"}},[t._v("Confirm")])],1)])],1)])],1),t._v(" "),s("q-card",{staticClass:"block-list"},[s("div",{staticClass:"block-field"},[s("q-input",{attrs:{"stack-label":"Insert your task title"},model:{value:t.newTask,callback:function(i){t.newTask=i},expression:"newTask"}}),t._v(" "),s("q-btn",{staticClass:"add-button",attrs:{disabled:this.newTask.length<3,color:"primary",small:""},on:{click:function(i){i.preventDefault(),t.addTask(i)}}},[t._v("Add Task")])],1),t._v(" "),s("q-list",[0===this.tasks.length?s("div",[s("span",{staticClass:"notFound"},[s("q-icon",{attrs:{name:"not_interested"}}),t._v(" "),s("span",[t._v("No registration for tasks")])],1)]):s("div",[s("q-list-header",{staticClass:"title"},[t._v("Tasks "),s("strong",[t._v("("+t._s(this.tasks.length)+")")])]),t._v(" "),t._l(t.tasks,function(i,e){return s("q-item",{key:i.id},[s("q-item-main",[i.editing?t._e():s("span",[t._v(t._s(i.title))]),t._v(" "),i.editing?s("q-input",{model:{value:t.changeTask,callback:function(i){t.changeTask=i},expression:"changeTask"}}):t._e()],1),t._v(" "),s("q-item-side",[i.editing?t._e():s("q-btn",{attrs:{color:"warning",outline:"",small:""},on:{click:function(e){e.preventDefault(),t.editTask(i)}}},[s("q-icon",{attrs:{name:"edit"}})],1),t._v(" "),i.editing?s("q-btn",{attrs:{color:"positive",small:""},on:{click:function(e){e.preventDefault(),t.saveTask(i)}}},[s("q-icon",{attrs:{name:"check"}})],1):t._e(),t._v(" "),s("q-btn",{attrs:{color:"negative",outline:"",small:""},on:{click:function(e){e.preventDefault(),t.removeTask(i)}}},[s("q-icon",{attrs:{name:"delete"}})],1)],1)],1)})],2)])],1)],1)])},L=[],M={render:s,staticRenderFns:L};i.a=M},40:function(t,i){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIKCSBpZD0ic3ZnMzU3MCIgaW5rc2NhcGU6dmVyc2lvbj0iMC45MSByMTM3MjUiIHNvZGlwb2RpOmRvY25hbWU9InF1YXNhci1sb2dvLWZ1bGwuc3ZnIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKCSB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDE5MS4xIDE3OC4zIgoJIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE5MS4xIDE3OC4zOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzI2MzIzODt9Cgkuc3Qxe2ZpbGw6IzE5NzZEMjt9Cgkuc3Qye2ZpbGw6IzQyQTVGNTt9Cgkuc3Qze2ZpbGw6I0RGNEY0Rjt9Cjwvc3R5bGU+Cjxzb2RpcG9kaTpuYW1lZHZpZXcgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBib3JkZXJvcGFjaXR5PSIxLjAiIGZpdC1tYXJnaW4tYm90dG9tPSIwIiBmaXQtbWFyZ2luLWxlZnQ9IjAiIGZpdC1tYXJnaW4tcmlnaHQ9IjAiIGZpdC1tYXJnaW4tdG9wPSIwIiBpZD0iYmFzZSIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0iZzQ4OTUtNC00IiBpbmtzY2FwZTpjeD0iLTM5Ljc1MzU4OSIgaW5rc2NhcGU6Y3k9IjI3LjcwNjM4OCIgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB4IiBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIiBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIiBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDU2IiBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiIGlua3NjYXBlOndpbmRvdy14PSIwIiBpbmtzY2FwZTp3aW5kb3cteT0iMjQiIGlua3NjYXBlOnpvb209IjEuOTc5ODk5IiBwYWdlY29sb3I9IiNmZmZmZmYiIHNob3dncmlkPSJmYWxzZSI+Cgk8L3NvZGlwb2RpOm5hbWVkdmlldz4KPHBhdGggaWQ9InBhdGgzNDI4IiBjbGFzcz0ic3QwIiBkPSJNMTkuOSwxNzQuOWMtMC4zLDAtMC43LDAtMSwwLjFjLTAuNCwwLTAuNywwLTEuMSwwaC03LjVjLTYuOCwwLTEwLjMtMi4zLTEwLjMtNi44di0xMC44CgljMC00LjQsMy40LTYuNiwxMC4xLTYuNmg3LjhjNi43LDAsMTAuMSwyLjIsMTAuMSw2LjZ2MTAuOGMwLDIuNy0xLjIsNC42LTMuNiw1LjZsMi41LDEuN2MwLjcsMC40LDEuMSwwLjksMS4xLDEuNHMtMC4yLDAuOC0wLjYsMS4xCgljLTAuNCwwLjMtMC45LDAuNC0xLjUsMC40Yy0wLjIsMC0wLjQsMC0wLjYtMC4xYy0wLjIsMC0wLjUtMC4yLTAuOC0wLjRMMTkuOSwxNzQuOUwxOS45LDE3NC45eiBNMjQuMiwxNTcuNWMwLTIuNS0yLjEtMy44LTYuNC0zLjgKCWgtNy43Yy00LjIsMC02LjQsMS4zLTYuNCwzLjh2MTAuN2MwLDIuNiwyLjIsNCw2LjYsNGg3LjFjNC40LDAsNi42LTEuMyw2LjYtNEwyNC4yLDE1Ny41TDI0LjIsMTU3LjV6Ii8+CjxwYXRoIGlkPSJwYXRoMzQzMCIgY2xhc3M9InN0MCIgZD0iTTQ3LjYsMTc1Yy02LDAtOS0xLjgtOS01LjV2LTEwLjJjMC0xLDAuNi0xLjUsMS45LTEuNWMxLjIsMCwxLjksMC41LDEuOSwxLjV2MTAuMgoJYzAsMS44LDEuNywyLjcsNS4yLDIuN2g2LjdjMy41LDAsNS4yLTAuOSw1LjItMi43di0xMC4yYzAtMSwwLjYtMS41LDEuOS0xLjVjMS4zLDAsMS45LDAuNSwxLjksMS41djEwLjJjMCwzLjctMyw1LjUtOSw1LjVINDcuNnoiCgkvPgo8cGF0aCBpZD0icGF0aDM0MzIiIGNsYXNzPSJzdDAiIGQ9Ik04MC4yLDE3NWMtNSwwLTcuNS0xLjYtNy41LTQuN3YtMmMwLTMuMSwyLjUtNC42LDcuNS00LjZoMTQuOXYtMC41YzAtMS42LTEuNC0yLjQtNC4zLTIuNGgtNC45CgljLTEuMiwwLTEuOC0wLjUtMS44LTEuNGMwLTAuOSwwLjYtMS40LDEuOC0xLjRoNC45YzUuMywwLDcuOSwxLjcsNy45LDUuMnY2LjljMCwzLjMtMi41LDQuOS03LjYsNC45SDgwLjJMODAuMiwxNzV6IE05MC45LDE3Mi4zCgljMi44LDAsNC4yLTAuOCw0LjItMi4zdi0zLjhIODAuNWMtMi43LDAtNC4xLDAuNy00LjEsMi4xdjEuOGMwLDEuNCwxLjQsMi4yLDQuMSwyLjJMOTAuOSwxNzIuM0w5MC45LDE3Mi4zeiIvPgo8cGF0aCBpZD0icGF0aDM0MzQiIGNsYXNzPSJzdDAiIGQ9Ik0xMzEuOCwxNzEuMWMwLDIuNi0yLjcsMy45LTgsMy45aC0xMy43Yy0xLjIsMC0xLjgtMC41LTEuOC0xLjRjMC0wLjksMC42LTEuNCwxLjgtMS40aDEzLjcKCWMyLjksMCw0LjMtMC40LDQuMy0xLjJ2LTJjMC0wLjgtMS40LTEuMi00LjMtMS4yaC03LjJjLTUuMywwLTgtMS4zLTgtMy44di0xLjZjMC0zLDIuNy00LjUsOC4yLTQuNWg0LjhjMS4yLDAsMS44LDAuNSwxLjgsMS40CgljMCwwLjUtMC4yLDAuOC0wLjUsMS4xYy0wLjMsMC4yLTAuNywwLjMtMS4zLDAuM2gtNC44Yy0zLjEsMC00LjYsMC42LTQuNiwxLjd2MS41YzAsMSwxLjUsMS40LDQuNiwxLjRoNy4yYzUuMiwwLDcuOCwxLjIsNy44LDMuNgoJVjE3MS4xTDEzMS44LDE3MS4xeiIvPgo8cGF0aCBpZD0icGF0aDM0MzYiIGNsYXNzPSJzdDAiIGQ9Ik0xNDguNSwxNzVjLTUsMC03LjUtMS42LTcuNS00Ljd2LTJjMC0zLjEsMi41LTQuNiw3LjUtNC42aDE0Ljl2LTAuNWMwLTEuNi0xLjQtMi40LTQuMy0yLjRoLTQuOQoJYy0xLjIsMC0xLjgtMC41LTEuOC0xLjRjMC0wLjksMC42LTEuNCwxLjgtMS40aDQuOWM1LjMsMCw3LjksMS43LDcuOSw1LjJ2Ni45YzAsMy4zLTIuNSw0LjktNy42LDQuOUgxNDguNUwxNDguNSwxNzV6IE0xNTkuMiwxNzIuMwoJYzIuOCwwLDQuMi0wLjgsNC4yLTIuM3YtMy44aC0xNC42Yy0yLjcsMC00LjEsMC43LTQuMSwyLjF2MS44YzAsMS40LDEuNCwyLjIsNC4xLDIuMkwxNTkuMiwxNzIuM0wxNTkuMiwxNzIuM3oiLz4KPHBhdGggaWQ9InBhdGgzNDM4IiBjbGFzcz0ic3QwIiBkPSJNMTc3LjYsMTYzLjZjMC0zLjcsMy01LjYsOS01LjZoMi43YzEuMiwwLDEuOCwwLjUsMS44LDEuNGMwLDEtMC42LDEuNC0xLjgsMS40aC0yLjgKCWMtMy41LDAtNS4yLDAuOS01LjIsMi42djEwLjJjMCwxLTAuNiwxLjUtMS45LDEuNWMtMS4yLDAtMS45LTAuNS0xLjktMS41VjE2My42TDE3Ny42LDE2My42eiIvPgo8Zz4KCTxnPgoJCQoJCQk8cGF0aCBpZD0icGF0aDg4NjItNS01LTktMS05LTItNyIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgaW5rc2NhcGU6dHJhbnNmb3JtLWNlbnRlci14PSItNTE0LjA0ODU1IiBpbmtzY2FwZTp0cmFuc2Zvcm0tY2VudGVyLXk9Ii00NDQuMDQ2NDkiIGNsYXNzPSJzdDEiIGQ9IgoJCQlNMTM5LjUsMzYuNWMtMi4yLTMuOS01LTcuNC04LjEtMTAuNmwtMTEuOSw2LjljLTMuNy0zLjItNy45LTUuNi0xMi40LTcuMmMtNC4xLDQuMS03LjMsOC43LTkuNiwxMy43YzEzLjItMC45LDI2LjksMy45LDM5LjYsMTMuOAoJCQlsNy41LTQuM0MxNDMuNCw0NC41LDE0MS43LDQwLjQsMTM5LjUsMzYuNUwxMzkuNSwzNi41eiIvPgoJCQoJCQk8cGF0aCBpZD0icGF0aDg4NjQtNC04LTEtMi03LTMtMSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgaW5rc2NhcGU6dHJhbnNmb3JtLWNlbnRlci14PSItNjg5LjYzNzI3IiBpbmtzY2FwZTp0cmFuc2Zvcm0tY2VudGVyLXk9IjI2NS44MDIxNyIgY2xhc3M9InN0MiIgZD0iCgkJCU0xMzkuNSw4OS4zYzIuMi0zLjksMy45LTgsNS4xLTEyLjNsLTExLjktNi45YzAuOS00LjgsMC45LTkuNywwLTE0LjRjLTUuNi0xLjUtMTEuMi0yLTE2LjctMS41YzcuNCwxMSwxMC4xLDI1LjMsNy44LDQxLjIKCQkJbDcuNSw0LjNDMTM0LjUsOTYuNywxMzcuMiw5My4yLDEzOS41LDg5LjNMMTM5LjUsODkuM3oiLz4KCQkKCQkJPHBhdGggaWQ9InBhdGg4ODY2LTctNS01LTAtMy01LTYiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteD0iLTExNy40OTAwNyIgaW5rc2NhcGU6dHJhbnNmb3JtLWNlbnRlci15PSI2MzkuMzQwMjkiIGNsYXNzPSJzdDEiIGQ9IgoJCQlNOTMuOCwxMTUuN2M0LjUsMCw4LjktMC42LDEzLjItMS43di0xMy43YzQuNi0xLjYsOC44LTQuMSwxMi40LTcuMmMtMS41LTUuNi0zLjktMTAuNy03LjEtMTUuMmMtNS44LDExLjktMTYuOCwyMS40LTMxLjgsMjcuNAoJCQl2OC42Qzg0LjksMTE1LjEsODkuMywxMTUuNyw5My44LDExNS43eiIvPgoJCQoJCQk8cGF0aCBpZD0icGF0aDg4NjgtNi03LTQtNy01LTctMSIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgaW5rc2NhcGU6dHJhbnNmb3JtLWNlbnRlci14PSI1MTQuMDQ4NTciIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteT0iNDQ0LjA0NjUyIiBjbGFzcz0ic3QyIiBkPSIKCQkJTTQ4LjEsODkuM2MyLjIsMy45LDUsNy40LDguMSwxMC42TDY4LjEsOTNjMy43LDMuMiw3LjksNS42LDEyLjQsNy4yYzQuMS00LjEsNy4zLTguNyw5LjYtMTMuN2MtMTMuMiwwLjktMjYuOS0zLjktMzkuNi0xMy44CgkJCUw0Myw3N0M0NC4yLDgxLjMsNDUuOSw4NS40LDQ4LjEsODkuM0w0OC4xLDg5LjN6Ii8+CgkJCgkJCTxwYXRoIGlkPSJwYXRoODg3MC01LTMtOS0zLTAtMC05IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBpbmtzY2FwZTp0cmFuc2Zvcm0tY2VudGVyLXg9IjY4OS42MzcyOSIgaW5rc2NhcGU6dHJhbnNmb3JtLWNlbnRlci15PSItMjY1LjgwMjIxIiBjbGFzcz0ic3QxIiBkPSIKCQkJTTQ4LjEsMzYuNWMtMi4yLDMuOS0zLjksOC01LjEsMTIuM2wxMS45LDYuOWMtMC45LDQuOC0wLjksOS43LDAsMTQuNGM1LjYsMS41LDExLjIsMiwxNi43LDEuNWMtNy40LTExLTEwLjEtMjUuMy03LjgtNDEuMgoJCQlMNTYuMiwyNkM1My4xLDI5LjEsNTAuMywzMi43LDQ4LjEsMzYuNXoiLz4KCQkKCQkJPHBhdGggaWQ9InBhdGg4ODcyLTYtMy0yLTEtNC0yLTEiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGlua3NjYXBlOnRyYW5zZm9ybS1jZW50ZXIteD0iMTE3LjQ5MDA1IiBpbmtzY2FwZTp0cmFuc2Zvcm0tY2VudGVyLXk9Ii02MzkuMzQwMzIiIGNsYXNzPSJzdDIiIGQ9IgoJCQlNOTMuOCwxMC4yYy00LjUsMC04LjksMC42LTEzLjIsMS43djEzLjdjLTQuNiwxLjYtOC44LDQuMS0xMi40LDcuMmMxLjUsNS42LDMuOSwxMC43LDcuMSwxNS4yQzgxLjEsMzYsOTIsMjYuNiwxMDcsMjAuNnYtOC42CgkJCUMxMDIuNywxMC44LDk4LjIsMTAuMiw5My44LDEwLjJMOTMuOCwxMC4yeiIvPgoJPC9nPgoJPHBhdGggY2xhc3M9InN0MyIgZD0iTTc2LjgsNDYuMmwyOS4yLDMwLjljMCwwLDEsMC43LDEuOC0wLjFjMC44LTAuOCwwLjItMS42LDAuMi0xLjZMNzYuOCw0Ni4yTDc2LjgsNDYuMnogTTg2LDQ5LjFsMjIuMiwyMy45CgkJYzAsMCwxLDAuNywxLjgtMC4xYzAuOC0wLjgsMC4yLTEuNiwwLjItMS42TDg2LDQ5LjF6IE03OS41LDU1LjRsMjIuMiwyMy45YzAsMCwxLDAuNywxLjgtMC4xYzAuOC0wLjgsMC4yLTEuNiwwLjItMS42TDc5LjUsNTUuNHoKCQkgTTkzLjgsNTEuN2wxNS41LDE2LjdjMCwwLDAuNywwLjUsMS4yLTAuMWMwLjUtMC42LDAuMS0xLjEsMC4xLTEuMUw5My44LDUxLjdMOTMuOCw1MS43eiBNODEuNiw2Mi42bDE1LjUsMTYuNwoJCWMwLDAsMC43LDAuNSwxLjItMC4xYzAuNS0wLjYsMC4xLTEuMSwwLjEtMS4xTDgxLjYsNjIuNnogTTEwMS44LDU1LjNsNyw3LjZjMCwwLDAuMywwLjIsMC42LDBjMC4zLTAuMywwLjEtMC41LDAuMS0wLjVMMTAxLjgsNTUuMwoJCXogTTg1LjUsNzAuM2w3LDcuNmMwLDAsMC4zLDAuMiwwLjYsMGMwLjMtMC4zLDAuMS0wLjUsMC4xLTAuNUw4NS41LDcwLjN6Ii8+CjwvZz4KPC9zdmc+Cg=="}});