(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d86740fc","chunk-2d0babe1"],{"38fe":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content registration-page"},[s("TopLinks"),s("h4",[e._v("Upgrade User to Admin")]),s("p",{staticStyle:{color:"#bac964"}},[e._v(e._s(e.databasemessage))]),s("p",{staticStyle:{color:"#f6f578"}},[e._v(e._s(e.resultmessage))]),s("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[s("label",{attrs:{for:"email"}},[e._v(" > User's E-Mail Address")]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{id:"email",type:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),s("label",{attrs:{for:"password"}},[e._v(" > Your Admin Password")]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{id:"password",type:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox",id:"terms",name:"terms"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{change:function(t){var s=e.checked,a=t.target,i=!!a.checked;if(Array.isArray(s)){var n=null,o=e._i(s,n);a.checked?o<0&&(e.checked=s.concat([n])):o>-1&&(e.checked=s.slice(0,o).concat(s.slice(o+1)))}else e.checked=i}}}),e._m(0),s("br")]),e._m(1),s("p",{staticStyle:{color:"#bac964"}},[e._v("Note: Only Pending Admin Requests can be Acceted and Not Anybody.")])]),s("hr"),s("div",{staticClass:"pendingusers"},[s("button",{staticClass:"getuserbutton",attrs:{type:"submit"},on:{click:e.getPendingUsers}},[e._v("Reload Request List")]),s("p",{staticStyle:{color:"#bac964"}},[e._v(e._s(e.pendingMessage))]),s("div",{class:e.columnVisibility?"col-rows":"col-rows is-hidden"},[s("h2",{staticClass:"pendinghead"},[e._v("Pending User List")]),e._m(2),e._l(e.pendingUserList,(function(t){return s("div",{key:t.name,staticClass:"columns is-mobile is-multiline is-centered"},[s("div",{staticClass:"col-data column is-hidden-mobile is-3"},[s("p",[e._v(e._s(t.name))])]),s("div",{staticClass:"col-data column is-3"},[s("p",[e._v(e._s(t.email))])]),s("div",{staticClass:"col-data column is-hidden-mobile is-3"},[s("p",[e._v(e._s(t.message))])])])}))],2)])],1)},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{attrs:{for:"terms"}},[e._v(" I Accept and Read the "),s("a",{staticClass:"guidelines",attrs:{href:"https://github.com/tks18/gindex-v4/blob/dark-mode-0-1/CODE_OF_CONDUCT.md",target:"_blank"}},[e._v("Community Guidelines")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("button",{staticClass:"registration-button",attrs:{type:"submit"}},[e._v(" Upgrade User ")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"columns is-mobile is-multiline is-centered"},[s("div",{staticClass:"column-head column is-hidden-mobile is-3"},[s("p",[e._v("Name")])]),s("div",{staticClass:"column-head column is-3"},[s("p",[e._v("Email")])]),s("div",{staticClass:"column-head column is-hidden-mobile is-3"},[s("p",[e._v("Message From Requester")])])])}],n=(s("99af"),s("b0c0"),s("3905")),o={components:{TopLinks:n["default"]},props:["nextUrl"],data:function(){return{email:"",password:"",resultmessage:"",databasemessage:"",userData:JSON.parse(localStorage.getItem("userdata")),userToken:JSON.parse(localStorage.getItem("tokendata")),checked:"",pendingUserList:[],pendingMessage:"",columnVisibility:!1}},methods:{handleSubmit:function(e){var t=this;if(e.preventDefault(),this.password&&this.password.length>0)if(this.checked){var s=window.apiRoutes.upgradeAdmin;this.$http.post(s,{email:this.email,adminpass:this.password,adminuseremail:this.userData.email}).then((function(e){e&&(e.data.auth&&e.data.registered&&e.auth.changed,t.resultmessage=e.data.message)})).catch((function(e){console.error(e)}))}else this.resultmessage="> You Need to Accept Community Guidelines.",this.checked=!1;else this.resultmessage="> Passwords Do Not Match",this.password=""},homeroute:function(){this.$router.push("/0:home/")},adminroute:function(){window.alert("Currently under Development")},contentroute:function(){this.$router.push("/0:/")},settingsroute:function(){window.alert("Currently under Development")},getPendingUsers:function(){var e=this,t=window.apiRoutes.getPendingAdmins;this.$http.post(t,{adminuseremail:this.userData.email}).then((function(t){t&&(t.data.auth&&t.data.registered?(e.columnVisibility=!0,e.pendingUserList=t.data.users):(e.columnVisibility=!1,e.pendingMessage=t.data.message))}))}},mounted:function(){var e=this;this.$http.post(window.apiRoutes.homeRoute).then((function(t){console.log(t),"200"==t.status?e.databasemessage="🟢 Database is Live. You can Login. Ping - ".concat(t.data.ping,"ms"):e.databasemessage="🔴 Database Offline / under Maintenance. Please Try Later"}));var t=window.apiRoutes.getPendingAdmins;this.$http.post(t,{adminuseremail:this.userData.email}).then((function(t){t&&(t.data.auth&&t.data.registered?(e.columnVisibility=!0,e.pendingUserList=t.data.users):(e.columnVisibility=!1,e.pendingMessage=t.data.message))}));var s=JSON.parse(localStorage.getItem("userdata")),a=JSON.parse(localStorage.getItem("tokendata"));s&&a&&s.verified&&s.admin?s.superadmin?this.resultmessage="You are Currently Logged in as ".concat(s.name," as ").concat(s.role):this.$router.push({name:"results",params:{data:"You are Unauthorized",redirectUrl:"/0:home/"}}):this.resultmessage=s.admin}},r=o,l=s("2877"),u=Object(l["a"])(r,a,i,!1,null,null,null);t["default"]=u.exports},3905:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"navigation-buttons"},[s("li",{staticClass:"buttons",on:{click:e.homeRoute}},[e._v("Home")]),e.logged?s("li",{staticClass:"buttons",on:{click:e.settingsRoute}},[e._v("My Settings")]):e._e(),e.logged?e._e():s("li",{staticClass:"buttons",on:{click:e.otpRegisterRoute}},[e._v("OTP Registration")]),e.logged&&e.admin&&!e.superadmin?s("li",{staticClass:"buttons",on:{click:e.adminRoute}},[e._v("Admin Panel")]):e._e(),e.logged&&e.admin&&e.superadmin?s("li",{staticClass:"buttons",on:{click:e.superAdminRoute}},[e._v("Admin Panel")]):e._e(),e.logged?s("li",{staticClass:"buttons",on:{click:e.contentRoute}},[e._v("View Content")]):e._e(),e.logged?s("li",{staticClass:"buttons",on:{click:e.logoutRoute}},[e._v("Logout")]):e._e(),e.logged?e._e():s("li",{staticClass:"buttons",on:{click:e.requestRoute}},[e._v("Request Access")]),e.logged?e._e():s("li",{staticClass:"buttons",on:{click:e.loginRoute}},[e._v("Login")])]),s("hr")])},i=[],n={data:function(){return{logged:!1,admin:!1,superadmin:!1}},methods:{homeRoute:function(){this.$router.push("/0:home/")},settingsRoute:function(){this.$router.push({name:"results",params:{data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:settings/"}})},adminRoute:function(){this.$router.push({name:"results",params:{data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:admin/"}})},superAdminRoute:function(){this.$router.push({name:"results",params:{data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:superadmin/"}})},contentRoute:function(){this.$router.push({name:"results",params:{data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:/"}})},logoutRoute:function(){var e=JSON.parse(localStorage.getItem("tokendata")),t=JSON.parse(localStorage.getItem("userdata"));null!=t&&null!=e&&(localStorage.removeItem("tokendata"),localStorage.removeItem("userdata"),this.$router.push({name:"results",params:{data:"You are Being Logged Out. Please Wait",redirectUrl:"/0:home/"}}))},requestRoute:function(){this.$router.push("/0:register/request/user")},loginRoute:function(){this.$router.push("/0:login/")},otpRegisterRoute:function(){this.$router.push("/0:register/otp")}},created:function(){var e=this,t=JSON.parse(localStorage.getItem("tokendata")),s=JSON.parse(localStorage.getItem("userdata"));null!=s&&null!=t?this.axios.post(window.apiRoutes.verifyRoute,{token:t.token}).then((function(t){t.data.auth||t.data.registered||null!=t.data.tokenuser?s.admin&&!s.superadmin?(e.logged=!0,e.admin=!0):s.admin&&s.superadmin?(e.logged=!0,e.admin=!0,e.superadmin=!0):e.logged=!0:e.$router.push({name:"results",params:{data:"I think Your Token Has Expired. Please Login to Regerate Another One",redirectUrl:"/0:login/"}})})):this.logged=!1}},o=n,r=s("2877"),l=Object(r["a"])(o,a,i,!1,null,null,null);t["default"]=l.exports}}]);