(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],[,,,,,function(n,t,e){n.exports=e.p+"static/media/tomato_small_color.cc90d8a5.svg"},,,,,,,,,function(n,t,e){n.exports=e.p+"static/media/arrow.ad7dbdf6.svg"},,,,,function(n,t,e){n.exports=e.p+"static/media/tomato_small_gray.3ab2cbcc.svg"},function(n,t,e){n.exports=e.p+"static/media/list_white.99b596ca.svg"},function(n,t,e){n.exports=e.p+"static/media/add_white.32e0817a.svg"},function(n,t,e){n.exports=e.p+"static/media/ringtone_white.c1791935.svg"},function(n,t,e){n.exports=e.p+"static/media/analysis_white.522ba8be.svg"},function(n,t,e){n.exports=e.p+"static/media/list_red.f6f4664c.svg"},function(n,t,e){n.exports=e.p+"static/media/add_red.30013910.svg"},function(n,t,e){n.exports=e.p+"static/media/ringtone_red.1e25b3f4.svg"},function(n,t,e){n.exports=e.p+"static/media/analysis_red.1998e7ea.svg"},function(n,t,e){n.exports=e(38)},,,,,function(n,t,e){},,,,,function(n,t,e){"use strict";e.r(t);var a,r=e(0),o=e.n(r),i=e(13),c=e.n(i),u=(e(33),e(4)),l=e(10),s=e(3),f=e(1),d=e(2),m=e(5),p=e.n(m),h=e(14),b=e.n(h);function g(){var n=Object(f.a)(['\n  position: absolute;\n  bottom: 50px;\n  right: 45px;\n  width: 90px;\n  height: 50px;\n  border-radius: 25px 5px 5px 25px;\n  background-color: #fcfcfc;\n  display: flex;\n  ::after {\n    content: "";\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    width: 45px;\n    height: 100%;\n    background-image: ',';\n    background-position: center;\n    background-size: 50%;\n    background-repeat: no-repeat;\n  }\n  ::before {\n    content: "";\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    width: 45px;\n    height: 100%;\n    background-image: ',";\n    background-position: center;\n    background-size: 60%;\n    background-repeat: no-repeat;\n    transition: transform 0.5s;\n    transform: ",";\n  }\n"]);return g=function(){return n},n}function O(){var n=Object(f.a)(["\n  background-image: ",";\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 80px;\n  :hover {\n    background-image: ",";\n    cursor: pointer;\n  }\n"]);return O=function(){return n},n}function v(){var n=Object(f.a)(["\n  min-width: 80px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  background-color: #333333;\n  border-right: ",";\n  position: absolute;\n  top: 0;\n  right: ",";\n  transition: 0.3s ease-in-out;\n"]);return v=function(){return n},n}!function(n){n[n.Unknow=0]="Unknow",n.NavButton="navButton",n.Tag="tag"}(a||(a={}));var x,k=d.a.div(v(),(function(n){return!0===n.isDashboardOn?"1px solid #555555":null}),(function(n){return!1===n.isDashboardOn?"0%":"35%"})),y=d.a.button(O(),(function(n){return"url(".concat(n.imgSrc,")")}),(function(n){return"url(".concat(n.imgSrc,")")})),w=d.a.button(g(),(function(n){return"url(".concat(n.tomato,")")}),(function(n){return"url(".concat(n.arrow,")")}),(function(n){return!0===n.isDashboardOn?"rotate(0deg)":"rotate(-180deg)"})),E=function(n){var t=n.isDashboardOn,e=n.dashboards,r=n.handleDashboardToggleOnClick;return o.a.createElement(k,{isDashboardOn:t},e.map((function(n){return o.a.createElement(y,{name:a.NavButton,key:n.type,onClick:function(t){r(t,n.type)},imgSrc:n.status?n.toggledSrc:n.untoggledSrc})})),o.a.createElement(w,{isDashboardOn:t,name:a.Tag,tomato:p.a,arrow:b.a,onClick:function(n){r(n)}}))};!function(n){n[n.UnKnow=0]="UnKnow",n[n.AddNewTask=1]="AddNewTask",n[n.TaskLists=2]="TaskLists",n[n.AnalyticsReport=3]="AnalyticsReport",n[n.RingTone=4]="RingTone"}(x||(x={}));var T=e(18),j=e.n(T);function C(){var n=Object(f.a)(["\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n  font-family: Lato;\n  margin-top: 25px;\n  .form-title {\n    color: #acacac;\n    font-size: 17px;\n    font-weight: bold;\n    margin-bottom: 10px;\n  }\n  input {\n    width: 100%;\n    height: 50px;\n    margin: 10px 0;\n    border-radius: 5px;\n    background-color: #fcfcfc;\n    outline: none;\n    font-size: 19px;\n    color: #333333;\n    padding-left: 10px;\n  }\n"]);return C=function(){return n},n}var A=d.a.div(C()),S=function(n){return o.a.createElement(A,null,o.a.createElement("div",{className:"form-title"},n.title),n.children)};S.prototype={title:j.a.string};var D=S,B=e(19),N=e.n(B);function z(){var n=Object(f.a)(["\n  width: calc(100% / 15);\n  height: 100%;\n  background-image: ",";\n  background-position: center;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  transition: 0.2s ease-in;\n  :hover {\n    cursor: pointer;\n  }\n"]);return z=function(){return n},n}function L(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  height: 50px;\n"]);return L=function(){return n},n}var R=d.a.div(L()),I=d.a.button(z(),(function(n){return"url(".concat(n.tomatoStatus,")")})),M=function(n){var t=Object(r.useState)(0),e=Object(s.a)(t,2),a=e[0],i=e[1];return o.a.createElement(R,null,[1,2,3,4,5,6,7,8,9,10].map((function(t){return o.a.createElement(I,{key:t,name:"point",value:t,onMouseOver:function(){!function(n){i(n)}(t)},onMouseOut:function(){i(0)},onClick:function(t){n.handleTaskBufferOnChange(t)},tomatoStatus:n.taskBuffer.point>=t||a>=t?p.a:N.a})})))};function _(){var n=Object(f.a)(["\n  width: ",";\n  height: 50px;\n  border-radius: 30px;\n  font-size: 19px;\n  font-family: Lato;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 10px;\n  color: ",";\n  border: 3px solid ",";\n  background-color: transparent;\n  transition: 0.1s linear;\n  :hover {\n    color: #fcfcfc;\n    border: 3px solid ",";\n    background-color: ",";\n    cursor: ",";\n  }\n"]);return _=function(){return n},n}var U=d.a.button(_(),(function(n){return n.btnStyle.width}),(function(n){return n.btnStyle.mainColor}),(function(n){return n.btnStyle.mainColor}),(function(n){return n.btnStyle.mainColor}),(function(n){return n.btnStyle.mainColor}),(function(n){return!0===n.disabled?"not-allowed":"pointer"})),K=function(n){return o.a.createElement(U,{disabled:n.isDisabled,onClick:n.btnAction,btnStyle:n.btnStyle},void 0!==n.children&&n.children,n.btnText)};function H(){var n=Object(f.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n"]);return H=function(){return n},n}var P=d.a.div(H()),W=function(n){var t=n.taskBuffer.name,e=n.handleAddNewTaskOnClick,a=n.handleTaskBufferOnChange,r=n.taskBuffer,i=n.children;return o.a.createElement(P,null,i,o.a.createElement(D,{title:"TASK TITLE"},o.a.createElement("input",{name:"name",value:t,onChange:a,type:"text",placeholder:"Plz Enter your task ..."})),o.a.createElement(D,{title:"ESTIMATED TOMOTO"},o.a.createElement(M,{handleTaskBufferOnChange:a,taskBuffer:r})),o.a.createElement(K,{btnAction:e,btnStyle:{mainColor:"#ea5548",width:"80%"},btnText:"ADD TASK"}))};function J(){var n=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 15px;\n"]);return J=function(){return n},n}function G(){var n=Object(f.a)(["\n  display: flex;\n  width: 90%;\n"]);return G=function(){return n},n}function V(){var n=Object(f.a)(["\n  width: 80%;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  background-color: #414141;\n  color: #fcfcfc;\n  min-width: 220px;\n  border-bottom: 1px solid #333333;\n  :hover {\n    cursor: pointer;\n  }\n"]);return V=function(){return n},n}var Y,$=d.a.div(V()),q=d.a.div(G()),F=d.a.div(J()),Q=function(n){return o.a.createElement($,{onClick:function(){n.handleTaskOnClick(n.primaryKey)}},o.a.createElement(q,null,n.headerIcon,n.title),o.a.createElement(F,null,n.actionBtn))};function X(){var n=Object(f.a)(["\n  width: 80%;\n  font-size: 2rem;\n  display: flex;\n  justify-content: center;\n  font-family: Lato;\n  margin-top: 30px;\n"]);return X=function(){return n},n}function Z(){var n=Object(f.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return Z=function(){return n},n}function nn(){var n=Object(f.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n"]);return nn=function(){return n},n}function tn(){var n=Object(f.a)(["\n  width: 80%;\n  height: ",";\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #414141;\n  transition: all 0.1s ease-in-out;\n  overflow: hidden;\n"]);return tn=function(){return n},n}function en(){var n=Object(f.a)(["\n  width: calc(100% / 3.5);\n  min-width: 120px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-evenly;\n  .name {\n    font-family: Lato;\n    width: 100%;\n  }\n  .tomatos {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    width: 100%;\n    .tomato,\n    .unDoneTomato {\n      border: 1px solid #ea5548;\n      border-radius: 100%;\n      width: 10px;\n      height: 10px;\n      margin-right: 5px;\n    }\n    .tomato {\n      background-color: #ea5548;\n    }\n    .unDoneTomato {\n      background-color: transparent;\n    }\n  }\n"]);return en=function(){return n},n}function an(){var n=Object(f.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  margin-top: 1px;\n"]);return an=function(){return n},n}function rn(){var n=Object(f.a)(["\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-position: center;\n  width: calc(100% / 25);\n  min-width: 17px;\n  margin: 0px 15px;\n  opacity: ",";\n  transition: 0.1s ease-in;\n"]);return rn=function(){return n},n}function on(){var n=Object(f.a)(["\n  min-width: 55px;\n  border-radius: 8px 8px 0 0;\n  width: calc(100% / 6);\n  height: 100%;\n  background-color: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: Lato;\n  font-weight: bold;\n  font-size: 12px;\n  margin-right: 5px;\n  :hover {\n    cursor: pointer;\n  }\n"]);return on=function(){return n},n}function cn(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 80%;\n  height: 25px;\n  margin-top: 25px;\n"]);return cn=function(){return n},n}function un(){var n=Object(f.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  color: #fcfcfc;\n"]);return un=function(){return n},n}!function(n){n[n.Unknow=0]="Unknow",n[n.Todo=1]="Todo",n[n.Done=2]="Done",n[n.Archieve=3]="Archieve"}(Y||(Y={}));var ln=d.a.div(un()),sn=d.a.div(cn()),fn=d.a.div(on(),(function(n){return n.currentStatus===n.tabType?"#ea5548":"#606060"})),dn=d.a.div(rn(),p.a,(function(n){return n.isContentOn?"100%":"0%"})),mn=d.a.div(an()),pn=d.a.div(en()),hn=d.a.div(tn(),(function(n){var t=n.isContentOn,e=n.tabStatus;if(t)switch(e){case Y.Todo:return"310px";case Y.Done:case Y.Archieve:return"70px";default:return"0xp"}return"0px"})),bn=d.a.div(nn()),gn=d.a.div(Z()),On=d.a.div(X()),vn=function(n){var t=Object(r.useState)(Y.Todo),e=Object(s.a)(t,2),a=e[0],i=e[1];return o.a.createElement(ln,null,n.children,o.a.createElement(sn,null,Object.values(Y).filter((function(n){return Number(n)>0})).map((function(n){return o.a.createElement(fn,{key:n,currentStatus:a,tabType:n,onClick:function(){i(n)}},Y[n])}))),n.tasks.filter((function(n){return n.status===a})).length>0?n.tasks.filter((function(n){return n.status===a})).sort((function(n,t){return n.modifiedOn>t.modifiedOn?-1:1})).map((function(t){return o.a.createElement(mn,{key:t.createdOn},o.a.createElement(Q,{primaryKey:t.createdOn,handleTaskOnClick:n.handleTaskOnClick,headerIcon:o.a.createElement(dn,{isContentOn:t.isContentOn}),actionBtn:t.isContentOn?o.a.createElement("i",{className:"fas fa-ellipsis-v fa-lg"}):o.a.createElement("i",{className:"fas fa-ellipsis-h fa-lg"}),title:o.a.createElement(pn,null,o.a.createElement("div",{className:"name"},t.name),o.a.createElement("div",{className:"tomatos"},Array.from({length:t.pointHasDone},(function(n,t){return t})).map((function(n,t){return o.a.createElement("div",{key:t,className:"tomato"})})),Array.from({length:t.point-t.pointHasDone},(function(n,t){return t})).map((function(n,t){return o.a.createElement("div",{key:t,className:"unDoneTomato"})}))))}),o.a.createElement(hn,{isContentOn:t.isContentOn,tabStatus:a},a===Y.Todo&&o.a.createElement(bn,null,o.a.createElement(D,{title:"TASK TITLE"},o.a.createElement("input",{name:"name",value:n.taskBuffer.name,onChange:function(t){n.handleTaskBufferOnChange(t)},type:"text",placeholder:"Plz Enter your task ..."})),o.a.createElement(D,{title:"ESTIMATED TOMOTO"},o.a.createElement(M,{taskBuffer:n.taskBuffer,handleTaskBufferOnChange:n.handleTaskBufferOnChange})),o.a.createElement(gn,null,o.a.createElement(K,{btnStyle:{mainColor:"#7f7f7f",width:"30%"},btnText:"Archive",btnAction:function(t){n.handleArchiveTaskOnClick(t,n.taskBuffer.createdOn)}}),o.a.createElement(K,{btnStyle:{mainColor:"#ea5548",width:"50%"},btnText:"SAVE",btnAction:function(t){n.handleUpdateTaskOnClick(t,n.taskBuffer.createdOn)}}))),a===Y.Done&&o.a.createElement(gn,null,o.a.createElement(K,{btnStyle:{mainColor:"#7f7f7f",width:"30%"},btnText:"Archive",btnAction:function(t){n.handleArchiveTaskOnClick(t,n.taskBuffer.createdOn)}}),o.a.createElement(K,{btnStyle:{mainColor:"#ea5548",width:"50%"},btnText:"Redo",btnAction:function(t){n.handleArchiveTaskOnClick(t,n.taskBuffer.createdOn,!0)}})),a===Y.Archieve&&o.a.createElement(gn,null,o.a.createElement(K,{btnStyle:{mainColor:"#7f7f7f",width:"100%"},btnText:"UnArchive",btnAction:function(t){n.handleArchiveTaskOnClick(t,n.taskBuffer.createdOn,!0)}}))))})):o.a.createElement(On,null,"No ",Y[a]," Tasks"))};function xn(){var n=Object(f.a)(["\n  width: 80%;\n  color: #fcfcfc;\n  font-size: 24px;\n  font-weight: bold;\n  font-family: Lato;\n  padding: 25px 0;\n  margin-top: 5px;\n  border-bottom: 1px solid #414141;\n"]);return xn=function(){return n},n}function kn(){var n=Object(f.a)(["\n  height: 100%;\n  background-color: #333333;\n  width: ",";\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: 0.3s ease-in-out;\n  overflow: hidden;\n"]);return kn=function(){return n},n}var yn=d.a.div(kn(),(function(n){return!1===n.isDashboardOn?"0%":"35%"})),wn=d.a.div(xn()),En=function(n){var t=n.dashboards.find((function(n){return!0===n.status})),e=t.name,a=t.type,r=n.taskBuffer,i=n.handleAddNewTaskOnClick,c=n.handleTaskBufferOnChange,u=n.tasks,l=n.handleTaskOnClick,s=n.isDashboardOn,f=n.handleUpdateTaskOnClick,d=n.handleArchiveTaskOnClick,m=new Map([[x.AddNewTask,o.a.createElement(W,{taskBuffer:r,handleAddNewTaskOnClick:i,handleTaskBufferOnChange:c},o.a.createElement(wn,null,e))],[x.TaskLists,o.a.createElement(vn,{handleTaskBufferOnChange:c,handleTaskOnClick:l,handleUpdateTaskOnClick:f,tasks:u,taskBuffer:r,handleArchiveTaskOnClick:d},o.a.createElement(wn,null,e))],[x.AnalyticsReport,null],[x.RingTone,null]]);return o.a.createElement(yn,{isDashboardOn:s},s?m.get(a):null)},Tn=e(20),jn=e.n(Tn),Cn=e(21),An=e.n(Cn),Sn=e(22),Dn=e.n(Sn),Bn=e(23),Nn=e.n(Bn),zn=e(24),Ln=e.n(zn),Rn=e(25),In=e.n(Rn),Mn=e(26),_n=e.n(Mn),Un=e(27),Kn=e.n(Un),Hn=[{type:x.AddNewTask,status:!1,name:"ADD NEW TASK",toggledSrc:In.a,untoggledSrc:An.a},{type:x.TaskLists,status:!0,name:"TASK LISTS",toggledSrc:Ln.a,untoggledSrc:jn.a},{type:x.AnalyticsReport,status:!1,name:"ANALYTICS REPORT",toggledSrc:Kn.a,untoggledSrc:Nn.a},{type:x.RingTone,status:!1,name:"RING TONE",toggledSrc:_n.a,untoggledSrc:Dn.a}],Pn={name:"",point:0,isContentOn:!1,status:Y.Todo,createdOn:0,modifiedOn:0};function Wn(){var n=Object(f.a)(["\n  font: Bold 56px/72px Lato;\n  letter-spacing: 4px;\n  color: #333333;\n  z-index: 1;\n"]);return Wn=function(){return n},n}function Jn(){var n=Object(f.a)(['\n  width: 400px;\n  height: 400px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  border: 5px solid #ea5548;\n  margin: 50px 0;\n  position: relative;\n  overflow: hidden;\n  background-color: #ea5548;\n  ::before {\n    content: "";\n    position: absolute;\n    top: -60%;\n    left: -22%;\n    width: 145%;\n    height: 145%;\n    border-radius: 37%;\n    animation: '," 5s linear 0s infinite normal;\n    background: #eeeeee;\n  }\n"]);return Jn=function(){return n},n}function Gn(){var n=Object(f.a)(["\n  from {\n    transform:rotate(360deg) ;\n  }\n\n  to {\n    transform: rotate(0deg) ;\n\n  }\n"]);return Gn=function(){return n},n}var Vn=Object(d.b)(Gn()),Yn=d.a.div(Jn(),Vn),$n=d.a.div(Wn()),qn=function(n){var t=n.timeRemains;return o.a.createElement(Yn,null,o.a.createElement($n,null,function(n){var t=n/60<10?"0".concat(Math.floor(n/60)):"".concat(Math.floor(n/60)),e=n%60<10?"0".concat(n%60):"".concat(n%60);return"".concat(t,":").concat(e)}(t)))};function Fn(){var n=Object(f.a)(["\n  font-weight: light;\n  font-size: 14px;\n"]);return Fn=function(){return n},n}function Qn(){var n=Object(f.a)(["\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 50px;\n  font-size: 18px;\n"]);return Qn=function(){return n},n}function Xn(){var n=Object(f.a)(["\n  width: 400px;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return Xn=function(){return n},n}function Zn(){var n=Object(f.a)([""]);return Zn=function(){return n},n}function nt(){var n=Object(f.a)(["\n  width: 400px;\n  height: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  .name {\n    font-size: 29px;\n    font-weight: bold;\n  }\n  .tomatos {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    .tomato,\n    .unDoneTomato {\n      border: 1px solid #ea5548;\n      border-radius: 100%;\n      width: 10px;\n      height: 10px;\n      margin-right: 5px;\n    }\n    .tomato {\n      background-color: #ea5548;\n    }\n    .unDoneTomato {\n      background-color: transparent;\n    }\n  }\n"]);return nt=function(){return n},n}function tt(){var n=Object(f.a)(["\n  width: 600px;\n  font-family: Lato;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  color: #333333;\n"]);return tt=function(){return n},n}var et=d.a.div(tt()),at=d.a.div(nt()),rt=d.a.div(Zn()),ot=d.a.div(Xn()),it=d.a.div(Qn()),ct=d.a.div(Fn()),ut=function(n){var t=Object(r.useState)(1500),e=Object(s.a)(t,2),a=e[0],i=e[1],c=Object(r.useState)(0),u=Object(s.a)(c,2),l=u[0],f=u[1],d=Object(r.useRef)(a),m=0!==l;d.current=a;return Object(r.useEffect)((function(){a<=0&&clearInterval(l)}),[a,l]),o.a.createElement(et,null,o.a.createElement(at,null,o.a.createElement("div",{className:"name"},n.taskBuffer.name),o.a.createElement("div",{className:"tomatos"},Array.from({length:n.taskBuffer.pointHasDone},(function(n,t){return t})).map((function(n,t){return o.a.createElement("div",{key:t,className:"tomato"})})),Array.from({length:n.taskBuffer.point-n.taskBuffer.pointHasDone},(function(n,t){return t})).map((function(n,t){return o.a.createElement("div",{key:t,className:"unDoneTomato"})})))),o.a.createElement(rt,null,o.a.createElement(qn,{timeRemains:a}),o.a.createElement(ot,null,o.a.createElement(K,{btnAction:function(){if(0===l){var n=setInterval((function(){i(d.current-1)}),1e3);f(n)}},btnStyle:{mainColor:m?"#888888":"#EA5548",width:"50px"},isDisabled:m},o.a.createElement("i",{className:"fas fa-play"})),o.a.createElement(K,{btnAction:function(){0!==l&&(clearInterval(l),f(0))},btnStyle:{mainColor:m?"#EA5548":"#888888",width:"50px"},isDisabled:!1===m},o.a.createElement("i",{className:"fas fa-stop"})),o.a.createElement(K,{btnAction:function(){i(1500),f(0)},btnStyle:{mainColor:m?"#888888":"#EA5548",width:"50px"},isDisabled:m},o.a.createElement("i",{className:"fas fa-redo"}))),o.a.createElement(it,null,"TASK COMPLETE")),o.a.createElement(ct,null,"PODOMORO"))};function lt(){var n=Object(f.a)(["\n  width: ",";\n  height: 100%;\n  display: flex;\n  transition: 0.3s ease-in-out;\n"]);return lt=function(){return n},n}function st(){var n=Object(f.a)(["\n  width: ",";\n  background-color: #eaeaea;\n  height: 100%;\n  transition: 0.3s ease-in-out;\n  display: flex;\n  justify-content: center;\n"]);return st=function(){return n},n}function ft(){var n=Object(f.a)(["\n  height: 100vh;\n  width: 100vw;\n  background-color: transparent;\n  display: flex;\n"]);return ft=function(){return n},n}var dt=d.a.div(ft()),mt=d.a.div(st(),(function(n){return!0===n.isDashboardOn?"calc(65% - 80px)":"calc(100% - 80px)"})),pt=d.a.div(lt(),(function(n){return!0===n.isDashboardOn?"calc(35% + 80px)":"80px"})),ht=function(){var n=Object(r.useState)(!0),t=Object(s.a)(n,2),e=t[0],i=t[1],c=Object(r.useState)(Hn),f=Object(s.a)(c,2),d=f[0],m=f[1],p=Object(r.useState)(Pn),h=Object(s.a)(p,2),b=h[0],g=h[1],O=Object(r.useState)([{name:"demo task 1",point:5,pointHasDone:2,isContentOn:!1,status:Y.Todo,createdOn:11111,modifiedOn:11111},{name:"demo task 2",point:7,pointHasDone:2,isContentOn:!1,status:Y.Todo,createdOn:22222,modifiedOn:22222},{name:"demo task 3",point:3,pointHasDone:3,isContentOn:!1,status:Y.Done,createdOn:33333,modifiedOn:33333}]),v=Object(s.a)(O,2),x=v[0],k=v[1];return o.a.createElement(dt,null,o.a.createElement(mt,{isDashboardOn:e},o.a.createElement(ut,{taskBuffer:x[0]})),o.a.createElement(pt,{isDashboardOn:e},o.a.createElement(E,{dashboards:d,isDashboardOn:e,handleDashboardToggleOnClick:function(n,t){var r=Object(u.a)(x).map((function(n){return n.isContentOn=!1,n}));if(k(r),g(Pn),n.target.name!==a.Tag){var o=d.find((function(n){return!0===n.status}));o.type===t&&i(!e),o.type!==t&&!1===e&&i(!e);var c=Object(u.a)(d);c.forEach((function(n){n.type!==t?n.status=!1:n.status=!0})),m(c)}else i(!e)}}),o.a.createElement(En,{tasks:x,taskBuffer:b,dashboards:d,isDashboardOn:e,handleTaskOnClick:function(n){var t=Object(u.a)(x),e=t.find((function(t){return t.createdOn===n}));t.forEach((function(t){t.createdOn===n?t.isContentOn=!t.isContentOn:t.isContentOn=!1})),g(e),k(t)},handleAddNewTaskOnClick:function(){var n=Object(u.a)(x),t=Object(l.a)({},b),e=(new Date).getTime(),a=[e,e];t.createdOn=a[0],t.modifiedOn=a[1],n.push(t),k(n),g(Pn)},handleTaskBufferOnChange:function(n){var t=Object(l.a)({},b);t[n.target.name]=n.target.value,g(t)},handleUpdateTaskOnClick:function(n,t){var e=Object(u.a)(x);e.forEach((function(n){n.createdOn===t&&(Object.keys(n).forEach((function(t){n[t]=b[t]})),n.modifiedOn=(new Date).getTime())})),k(e)},handleArchiveTaskOnClick:function(n,t){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=Object(u.a)(x);a.forEach((function(n){n.createdOn===t&&(n.status=e?Y.Todo:Y.Archieve,n.modifiedOn=(new Date).getTime(),n.isContentOn=!1)})),k(a)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(ht,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}],[[28,1,2]]]);
//# sourceMappingURL=main.63879096.chunk.js.map