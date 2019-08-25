(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){t.exports=n(18)},16:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=n(8),o=n.n(r),c=(n(16),n(17),n(1)),l=n(2),s=n(3),u=n(5),h=n(4),m=n(6),f={notificationTime:30},b=function(t){function e(t,n){var a;return Object(l.a)(this,e),(a=Object(u.a)(this,Object(h.a)(e).call(this,t,n))).submitBreathHold=function(t){t.preventDefault(),a.props.createBreathHoldNotification(a.state.notificationTime)},a.submitBreathing=function(t){t.preventDefault(),a.props.createBreathingNotification(a.state.notificationTime)},a.changeNotificationTime=function(t){a.setState(Object(c.a)({},a.state,{notificationTime:parseInt(t.target.value)}))},a.state=f,a}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.createElement(a.Fragment,null,a.createElement("div",null,a.createElement("label",{htmlFor:"notificationTime"},"Notification on time remaining in seconds: "),a.createElement("input",{type:"number",name:"breathingDecrement",value:this.state.notificationTime,onChange:this.changeNotificationTime})),a.createElement("div",null,a.createElement("button",{onClick:this.submitBreathHold},"Create Breath Holding Notification"),a.createElement("button",{onClick:this.submitBreathing},"Create Breathing Notification")))}}]),e}(a.Component),d=n(9),v=function(){function t(e){Object(l.a)(this,t),this.value=void 0,this.tag=t.tag,this.value=e}return Object(s.a)(t,[{key:"map",value:function(e){return new t(this.value)}},{key:"flatMap",value:function(e){return new t(this.value)}},{key:"leftMap",value:function(e){return new t(e(this.value))}},{key:"fold",value:function(t,e){return t(this.value)}}]),t}();v.tag="Left";var g=function(){function t(e){Object(l.a)(this,t),this.value=void 0,this.tag=t.tag,this.value=e}return Object(s.a)(t,[{key:"map",value:function(e){return new t(e(this.value))}},{key:"flatMap",value:function(t){return t(this.value)}},{key:"leftMap",value:function(e){return new t(this.value)}},{key:"fold",value:function(t,e){return e(this.value)}}]),t}();g.tag="Right";var p="Breathing",E="BreathHold",S=15,O={message:"Can't have less than ".concat(S," seconds breath hold.")},T={message:"Can't have less than ".concat(S," seconds breathing start time.")};function N(t){return Math.max(t,S)}var j=function(t){return t.breathHoldStartTime<S?new v(O):t.breathingStartTime<S?new v(T):new g(function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(e.numberOfReps<=0)return n;var a=[{sessionType:p,totalTime:e.breathingStartTime,notifications:e.breathingNotifications},{sessionType:E,totalTime:e.breathHoldStartTime,notifications:e.breathHoldNotifications}],i=N(e.breathingStartTime-e.breathingDecrement),r=N(e.breathHoldStartTime+e.breathHoldIncrement),o={breathingStartTime:i,breathHoldStartTime:r,numberOfReps:e.numberOfReps-1};return t(Object(c.a)({},e,o),[].concat(Object(d.a)(n),a))}(t))},y={breathHoldStartTime:90,breathHoldIncrement:0,breathingStartTime:150,breathingDecrement:15,numberOfReps:8,breathHoldNotifications:[],breathingNotifications:[]},w=[30,10,5],B=function(t){function e(t,n){var a;return Object(l.a)(this,e),(a=Object(u.a)(this,Object(h.a)(e).call(this,t,n))).addBreathHoldNotification=function(t){var e=a.updateNotifications(t,a.state.breathHoldNotifications);a.setState(Object(c.a)({},a.state,{breathHoldNotifications:e}))},a.addBreathingNotification=function(t){var e=a.updateNotifications(t,a.state.breathingNotifications);a.setState(Object(c.a)({},a.state,{breathingNotifications:e}))},a.updateNotifications=function(t,e){var n=new Set(a.state.breathingNotifications);return n.add(t),Array.from(n)},a.createBaseNotifications=function(t){t.preventDefault(),a.setState(Object(c.a)({},a.state,{breathingNotifications:w,breathHoldNotifications:w}))},a.clearNotifications=function(t){t.preventDefault(),a.setState(Object(c.a)({},a.state,{breathingNotifications:[],breathHoldNotifications:[]}))},a.onSubmit=function(t){t.preventDefault(),a.props.onSubmit(a.state)},a.changeBreathHoldStartTime=function(t){a.setState(Object(c.a)({},a.state,{breathHoldStartTime:parseInt(t.target.value)}))},a.changeBreathHoldIncrement=function(t){a.setState(Object(c.a)({},a.state,{breathHoldIncrement:parseInt(t.target.value)}))},a.changeBreathingStartTime=function(t){a.setState(Object(c.a)({},a.state,{breathingStartTime:parseInt(t.target.value)}))},a.changeBreathingDecrement=function(t){a.setState(Object(c.a)({},a.state,{breathingDecrement:parseInt(t.target.value)}))},a.changeNumberOfReps=function(t){a.setState(Object(c.a)({},a.state,{numberOfReps:parseInt(t.target.value)}))},a.state=y,a}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.createElement(a.Fragment,null,a.createElement("form",null,a.createElement("div",null,a.createElement("h3",null,"Sessions"),a.createElement("div",null,a.createElement("label",{htmlFor:"breathHoldStartTime"},"Breath Hold Start Time: "),a.createElement("input",{type:"number",min:S,name:"breathHoldStartTime",value:this.state.breathHoldStartTime,onChange:this.changeBreathHoldStartTime})),a.createElement("div",null,a.createElement("label",{htmlFor:"breathHoldIncrement"},"Breath Hold Increment: "),a.createElement("input",{type:"number",min:S,name:"breathHoldIncrement",value:this.state.breathHoldIncrement,onChange:this.changeBreathHoldIncrement})),a.createElement("br",null),a.createElement("div",null,a.createElement("label",{htmlFor:"breathingStartTime"},"Breathing Start Time: "),a.createElement("input",{type:"number",name:"breathingStartTime",value:this.state.breathingStartTime,onChange:this.changeBreathingStartTime})),a.createElement("div",null,a.createElement("label",{htmlFor:"breathingDecrement"},"Breathing Decrement: "),a.createElement("input",{type:"number",name:"breathingDecrement",value:this.state.breathingDecrement,onChange:this.changeBreathingDecrement})),a.createElement("br",null),a.createElement("div",null,a.createElement("label",{htmlFor:"numberOfReps"},"NumberOfReps: "),a.createElement("input",{type:"number",name:"numberOfReps",value:this.state.numberOfReps,onChange:this.changeNumberOfReps}))),a.createElement("div",null,a.createElement("h3",null,"Notifications"),a.createElement("div",null,a.createElement(b,{createBreathHoldNotification:this.addBreathHoldNotification,createBreathingNotification:this.addBreathingNotification})),a.createElement("div",null,a.createElement("button",{onClick:this.createBaseNotifications},"Create Base notifications (30, 10, 5 seconds)")),a.createElement("div",null,a.createElement("h4",null,"Breath Hold Notifications"),this.renderBreathHoldNotifications()),a.createElement("div",null,a.createElement("h4",null,"Breathing Notifications"),this.renderBreathingNotifications()),a.createElement("button",{onClick:this.clearNotifications},"Clear all notifications")),a.createElement("button",{className:"start-training-button",onClick:this.onSubmit},"Submit")))}},{key:"renderBreathHoldNotifications",value:function(){return this.renderNotifications(this.state.breathHoldNotifications)}},{key:"renderBreathingNotifications",value:function(){return this.renderNotifications(this.state.breathingNotifications)}},{key:"renderNotifications",value:function(t){return t.length>0?t.map(function(t,e){return a.createElement("p",{key:e},t)}):a.createElement("p",null,"No notifications")}}]),e}(a.Component),k=function(t){var e=t.timeIntervals,n=t.onStart,i=e.reduce(function(t,e){return t+e.totalTime},0),r=Math.floor(i/60),o=i%60;return a.createElement(a.Fragment,null,a.createElement("h2",null,"Great Success"),a.createElement("p",null,"Practice Total Time: ",r,":",o," "),e.map(function(t,e){var n=t.sessionType,i=t.totalTime;return a.createElement("div",{key:e},a.createElement("p",null,"Session: ",n,", totalTime: ",i))}),a.createElement("button",{className:"start-training-button",onClick:function(){return n()}},"Start Practice"))},H=function(t){var e=t.failure;return a.createElement("h1",null,"Invalid Settings: ",e.message)},C=function(){return window.speechSynthesis.getVoices().find(function(t){return"Google UK English Male"===t.name})||window.speechSynthesis.getVoices()[0]},I=function(t,e){var n=new SpeechSynthesisUtterance(t);return n.rate=1,n.pitch=.5,n.voice=e,n};function P(t){var e=C();window.speechSynthesis.speak(I(t,e))}var D=function(t){function e(t,n){var a;return Object(l.a)(this,e),(a=Object(u.a)(this,Object(h.a)(e).call(this,t,n))).onChange=function(t){var e=a.props.timeInterval.notifications.find(function(e){return e===t});e&&P("".concat(e," seconds remaining")),a.setState(Object(c.a)({},a.state,{timeLeft:t}))},a.onComplete=a.props.onComplete,a.state={timeLeft:t.timeInterval.totalTime},a}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.counter(this.state.timeLeft)}},{key:"componentDidUpdate",value:function(t,e,n){t.timeInterval===this.props.timeInterval?this.counter(this.state.timeLeft):this.setState(Object(c.a)({},this.state,{timeLeft:this.props.timeInterval.totalTime}))}},{key:"counter",value:function(t){var e=this;t>0?setTimeout(function(){e.onChange(t-1)},1e3):this.onComplete()}},{key:"render",value:function(){var t=this.props.timeInterval.sessionType===p?"Breathe Normally":"Hold Your Breath!";return a.createElement(a.Fragment,null,a.createElement("h2",null,t),a.createElement("h1",null,this.state.timeLeft))}}]),e}(a.Component),L=function(t){function e(t,n){var a;return Object(l.a)(this,e),(a=Object(u.a)(this,Object(h.a)(e).call(this,t,n))).nextInterval=function(){var t=a.state.timeIntervalsLeft.slice(1);a.setState(Object(c.a)({},a.state,{timeIntervalsLeft:t}))},a.state={timeIntervalsLeft:t.timeIntervals},a}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){if(0===this.state.timeIntervalsLeft.length)return P("Practice has ended"),a.createElement("h1",null,"Practice has ended");var t=this.state.timeIntervalsLeft[0];return t.sessionType===p?P("Breathe normally!"):P("Start Holding Breath!"),a.createElement(D,{timeInterval:t,onComplete:this.nextInterval})}}]),e}(a.Component),R=function(t){function e(t,n){var a;Object(l.a)(this,e),(a=Object(u.a)(this,Object(h.a)(e).call(this,t,n))).cancelPractice=function(){a.props.onCancelPractice()},a.startPractice=function(){a.setState(Object(c.a)({},a.state,{startPractice:!0}))};var i=j(t.settings);return a.state={timeIntervals:i,startPractice:!1},a}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.state.timeIntervals.fold(function(t){return a.createElement(H,{failure:t})},function(e){return a.createElement("div",null,t.renderPractice(e),a.createElement("button",{id:"cancel-practice-button",onClick:t.cancelPractice},"Cancel"))})}},{key:"renderPractice",value:function(t){return this.state.startPractice?a.createElement(L,{timeIntervals:t,onCancel:this.cancelPractice}):a.createElement(k,{timeIntervals:t,onStart:this.startPractice})}}]),e}(a.Component),F={displayTraining:!1,timeTablesSettings:y},M=function(t){function e(t,n){var a;return Object(l.a)(this,e),(a=Object(u.a)(this,Object(h.a)(e).call(this,t,n))).cancelPractice=function(){a.setState(Object(c.a)({},a.state,{displayTraining:!1}))},a.onSettingsUpdate=function(t){a.setState(Object(c.a)({},a.state,{timeTablesSettings:t,displayTraining:!0}))},a.state=F,a}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return this.state.displayTraining?a.createElement(R,{settings:this.state.timeTablesSettings,onCancelPractice:this.cancelPractice}):a.createElement("div",null,a.createElement(B,{onSubmit:this.onSettingsUpdate}))}}]),e}(a.Component),U=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(M,null))},A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(t,e){navigator.serviceWorker.register(t).then(function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}}).catch(function(t){console.error("Error during service worker registration:",t)})}o.a.render(i.a.createElement(U,null),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/static/my-apnea",window.location.href).origin!==window.location.origin)return;window.addEventListener("message",function(t){console.log("TS received message with data: ",t)}),window.addEventListener("load",function(){var e="".concat("/static/my-apnea","/service-worker.js");A?(function(t,e){fetch(t).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(t){t.unregister().then(function(){window.location.reload()})}):W(t,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,t),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):W(e,t)})}}()}},[[10,1,2]]]);
//# sourceMappingURL=main.200f007a.chunk.js.map