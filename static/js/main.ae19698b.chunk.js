(this["webpackJsonpwidget-pay-kasta"]=this["webpackJsonpwidget-pay-kasta"]||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t.p+"static/media/mk-logo.ceeec732.svg"},,,,,function(e,a,t){e.exports=t(24)},,,,,function(e,a,t){},function(e,a,t){},,,function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(1),c=t.n(l),o=t(2),s=t(3),m=t(5),i=t(4),d=t(6),u=(t(17),t(26)),h=(t(18),function(e){var a=e.animationType,t=e.children,n=e.show,l=e.timeout,c=e.onEnter,o=e.onEntering,s=e.onEntered,m=e.onExit,i=e.onExiting,d=e.onExited;return r.a.createElement(u.a,{in:n,timeout:l,classNames:a,unmountOnExit:!0,onEnter:c,onEntering:o,onEntered:s,onExit:m,onExiting:i,onExited:d},t)});h.defaultProps={show:!1,timeout:500,animationType:"fadeIn"};var E=h,p=t(10),v=function(e){e.id;var a=e.type,t=e.placeholder,n=e.name,l=e.autoComplete,c=e.onChange,o=e.value;return r.a.createElement("input",{onChange:c,value:o,name:n,type:a,autoComplete:l,placeholder:t,className:"form-control form-control-sm"})};function b(){return r.a.createElement("p",{className:"successfulPayment--text"},"\u041e\u043f\u043b\u0430\u0442\u0430 \u043f\u0440\u043e\u0448\u043b\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e")}function f(){return r.a.createElement("span",{style:{color:"red"}},"\u041d\u0435\u0432\u0456\u0440\u043d\u0430 \u043a\u0430\u0440\u0442\u0430")}function y(){return r.a.createElement("span",{style:{color:"red"}},"\u041d\u0435\u0432\u0456\u0440\u043d\u0438\u0439 \u0442\u0435\u0440\u043c\u0456\u043d")}function N(){return r.a.createElement("span",{style:{color:"red"}},"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u041f\u0406\u0411 \u0432\u043b\u0430\u0441\u043d\u0438\u043a\u0430 \u043a\u0430\u0440\u0442\u043a\u0438")}function C(){return r.a.createElement("span",{style:{color:"red"}},"\u041f\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 cvv")}t(21);var g={cardNumber:16,cardExpiry:4,cvv:3,cardOwner:40},w=new Date,x=w.getFullYear(),k=w.getMonth(),O=x.toString().substring(2),I=k<9?"0"+k:k,S=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).clearTimerId=function(){clearInterval(t.timerStart)},t.setTimerId=function(){var e=t.props.handleCloseModal;t.timerStart=setInterval((function(){var a=t.state.timer-1;0===a&&(clearInterval(t.timerStart),e()),t.setState({timer:a})}),1e3)},t.handleChange=function(e){var a=e.target,n=a.value,r=a.name;n.length<=g[r]&&t.setState(Object(p.a)({},r,n)),t.checkAllInputs()},t.checkAllInputs=function(){var e=t.state,a=e.cardNumber,n=e.cardExpiry,r=e.cardOwner,l=e.cvv;""!==a&&""!==n&&""!==r&&""!==l&&t.setState({buttonIsDisabled:!1})},t.checkDataLength=function(e){var a=t.state,n=a.cardExpiry,r=a.cvv,l=a.cardNumber,c=a.cardOwner;l.length===g.cardNumber&&n.length===g.cardExpiry&&""!==c&&r.length===g.cvv?(I+O<=n?t.handleSubmit():t.setState({incorrectDate:!0,cardExpiry:"",cvv:""}),e.preventDefault()):(console.log("\u041d\u0435\u0432\u0456\u0440\u043d\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u044f"),t.setState({showError:!0,cvv:""}),e.preventDefault())},t.handleSubmit=function(){var e=t.props.handleCloseModal;t.setState({showSuccessfulPayment:!0}),t.timerId=setTimeout((function(){e()}),1e3)},t.state={cardNumber:"",cardExpiry:"",cardOwner:"",cvv:"",showError:!1,buttonIsDisabled:!0,incorrectDate:!1,timer:600,timeLeft:null,showSuccessfulPayment:!1},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.setTimerId()}},{key:"componentWillUnmount",value:function(){this.clearTimerId()}},{key:"render",value:function(){var e=this.state,a=e.buttonIsDisabled,t=e.showError,n=e.incorrectDate,l=e.timer,c=e.showSuccessfulPayment,o=this.props.sumToPay,s=Math.floor(l/60),m=l%60;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.checkDataLength},r.a.createElement("div",{className:"infoCard"},r.a.createElement("div",{className:"inputNumberCard"},r.a.createElement("label",{className:"label",htmlFor:"number-card"},"\u041d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u0438"),r.a.createElement(v,{id:"number-card",type:"number",placeholder:"#### #### #### ####",name:"cardNumber",onChange:this.handleChange,value:this.state.cardNumber,autoComplete:"off",className:"infoCard--number "}),t&&r.a.createElement(f,null)),r.a.createElement("div",{className:"inputCardExpiry"},r.a.createElement("label",{className:"label",htmlFor:"card-expiry"},"\u0422\u0435\u0440\u043c\u0456\u043d \u0434\u0456\u0457"),r.a.createElement(v,{id:"card-expiry",type:"number",placeholder:"\u041c\u041c / \u0420\u0420",name:"cardExpiry",onChange:this.handleChange,value:this.state.cardExpiry,autoComplete:"off"}),t&&r.a.createElement(y,null)||n&&r.a.createElement(y,null))),c&&r.a.createElement("div",{className:"successfulPayment"},r.a.createElement(b,null)),r.a.createElement("div",{className:"infoCard"},r.a.createElement("div",{className:"inputCardOwner"},r.a.createElement("label",{className:"label",htmlFor:"card-owner"},"\u0412\u043b\u0430\u0441\u043d\u0438\u043a \u043a\u0430\u0440\u0442\u0438"),r.a.createElement(v,{id:"card-owner",type:"text",placeholder:"CARDHOLDER NAME",name:"cardOwner",onChange:this.handleChange,value:this.state.cardOwner,autoComplete:"on"}),t&&r.a.createElement(N,null)),r.a.createElement("div",{className:"inputCvv"},r.a.createElement("label",{className:"label",htmlFor:"cvv"},"CVV"),r.a.createElement(v,{id:"cvv",type:"password",placeholder:"XXX",name:"cvv",onChange:this.handleChange,value:this.state.cvv,autoComplete:"off"}),t&&r.a.createElement(C,null))),r.a.createElement("div",{className:"payment"},r.a.createElement("div",{className:"paymentWrap"},r.a.createElement("div",{className:"paymentCheckbox"},r.a.createElement("input",{id:"remember",type:"checkbox"}),r.a.createElement("label",{className:"labelCheckbox",htmlFor:"remember"},"\u0417\u0430\u043f\u0430\u043c'\u044f\u0442\u0430\u0442\u0438 \u0446\u044e \u043a\u0430\u0440\u0442\u043a\u0443")),r.a.createElement("button",{type:"submit",className:"btn btn-danger "+(!0===a?"buttonIsDisabled ":"")},"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u0438 ",o),r.a.createElement("p",{className:"timer"},"\u041d\u0430 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f \u043f\u043b\u0430\u0442\u0435\u0436\u0443 00:0",s,":",m<10?"0"+m:m)))))}}]),a}(n.Component),M=t(7),D=t.n(M),P=(t(22),function(e){var a=e.handleCloseModal,t=e.showModal;e.children;return r.a.createElement(E,{timeout:200,show:t},r.a.createElement("div",{className:"modal d-block",tabIndex:"-1",role:"dialog"},r.a.createElement("span",{className:"modal-backdrop show",onClick:a}),r.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"modal-header "},r.a.createElement("img",{src:D.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}),r.a.createElement("div",{className:"aboutPay"},r.a.createElement("p",{className:"toPay"},"\u0414\u043e \u0441\u043f\u043b\u0430\u0442\u0438"),r.a.createElement("p",{className:"sumToPay"},"123 284 \u0433\u0440\u043d"))),r.a.createElement("div",{className:"modalForm"},r.a.createElement("div",{className:"modalForm--header"},r.a.createElement("div",{className:"circleIcon"},r.a.createElement("div",{className:"circleSmallIcon"})),r.a.createElement("div",{className:"infoCard--text"},r.a.createElement("p",{className:"newCard"},"\u041d\u043e\u0432\u0430 \u043a\u0430\u0440\u0442\u0430"),r.a.createElement("p",{className:"typeCard"},"Visa, Mastercard"))),r.a.createElement(S,{handleCloseModal:a,sumToPay:"123 284 \u0433\u0440\u043d"})),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("img",{className:"footerLogo",src:D.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}),r.a.createElement("span",{className:"footerLogoPay"},"Pay")))),r.a.createElement("button",{type:"button",className:"close closeButton","data-dismiss":"modal","aria-label":"Close",onClick:a},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))))}),j=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).state={showModal:!1},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.setState({showModal:!0})}},"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0439"),r.a.createElement(P,{showModal:this.state.showModal,handleCloseModal:function(){return e.setState({showModal:!1})}}))}}]),a}(n.Component);t(23);c.a.render(r.a.createElement(j,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.ae19698b.chunk.js.map