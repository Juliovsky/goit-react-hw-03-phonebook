(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,function(t,e,a){t.exports={form:"inputForm_form__18Nci",title:"inputForm_title__1DD-D",subtitle:"inputForm_subtitle__2G1o7"}},,,,,function(t,e,a){t.exports={btn:"ListItem_btn__xsGV_",sign:"ListItem_sign__2rtd9"}},,,,function(t,e,a){t.exports={title:"list_title__5dTbl"}},,function(t,e,a){t.exports={btn:"Btn_btn__10Kex"}},,function(t,e,a){t.exports=a(20)},,,,,,function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(9),l=a.n(r),o=a(7),i=a(2),s=a(3),u=a(5),m=a(4),f=a(6),g=a.n(f),h=function(t){var e=t.contact,a=e.contact,n=e.number,r=e.id,l=t.deleteItem;return c.a.createElement("li",null,c.a.createElement("p",{className:g.a.sign},a," : ",n),c.a.createElement("button",{className:g.a.btn,id:r,onClick:l},"delete"))},b=a(1),p=a.n(b);var d=function(t){var e=t.getFilterValue,a=t.filter;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",{className:p.a.title},"Find contacts by name"),c.a.createElement("input",{name:"filter",placeholder:"search",type:"text",onChange:e,value:a}))},v=a(10),E=a.n(v),S=function(t){var e=t.contacts,a=t.filterList,n=t.filter,r=t.getFilterValue,l=t.deleteItem;return c.a.createElement(c.a.Fragment,null,e.length>=2?c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",{className:E.a.title},"Contacts"),c.a.createElement(d,{filter:n,getFilterValue:r})):c.a.createElement(c.a.Fragment,null),c.a.createElement("ul",null,a.map((function(t){return c.a.createElement(h,{key:t.id,deleteItem:l,contact:t})}))))},_=a(11);function y(t){var e=t.handleChange,a=t.contact,n=t.number;return c.a.createElement("div",null,c.a.createElement("h2",{className:p.a.title},"Name"),c.a.createElement("input",{name:"contact",placeholder:"Please put the name",onChange:e,value:a,type:"text"}),c.a.createElement("h2",{className:p.a.subtitle},"Number"),c.a.createElement("input",{name:"number",placeholder:"Please put the number",onChange:e,value:n,type:"number"}))}var C=a(12),I=a.n(C);function F(){return c.a.createElement("button",{className:I.a.btn,type:"submit"},"Add to contact")}var O=a(13),N=function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contact:"",number:""},t.handleChange=function(e){t.setState(Object(_.a)({},e.target.name,e.target.value))},t.checkContactExist=function(e){return 0!==t.props.contacts.filter((function(t){return t.contact.toLowerCase().includes(e.toLowerCase())})).length},t.handleSubmit=function(e){e.preventDefault();var a=t.state.contact,n=t.state.number;if(a&&n){if(t.checkContactExist(a))return alert("Already exist :(");var c={id:Object(O.uuid)(),contact:a,number:n};t.props.getContactInfo(c),t.setState({contact:"",number:""}),t.saveToLocalStorage(c)}},t}return Object(s.a)(a,[{key:"saveToLocalStorage",value:function(t){localStorage.getItem("contacts")||localStorage.setItem("contacts",JSON.stringify([]));var e=JSON.parse(localStorage.getItem("contacts"));console.log(e),e.push(t),localStorage.setItem("contacts",JSON.stringify(e))}},{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.handleSubmit,className:p.a.form},c.a.createElement(y,{contact:this.state.contact,number:this.state.number,handleChange:this.handleChange}),c.a.createElement(F,null))}}]),a}(n.Component),k=function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.filterList=function(){return t.state.filter?t.state.contacts.filter((function(e){return e.contact.toLowerCase().includes(t.state.filter)})):t.state.contacts},t.getFilterValue=function(e){t.setState({filter:e.target.value})},t.getContactInfo=function(e){t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[e])}}))},t.deleteItem=function(e){var a=e.target.id;t.setState((function(t){return{contacts:Object(o.a)(t.contacts.filter((function(t){return t.id!==a})))}})),t.deleteFromLocalStorage(e)},t}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.setState({contacts:JSON.parse(localStorage.getItem("contacts"))||[]})}},{key:"deleteFromLocalStorage",value:function(t){var e=t.target.id,a=JSON.parse(localStorage.getItem("contacts")).filter((function(t){return t.id!==e}));localStorage.setItem("contacts",JSON.stringify(a))}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(N,{getContactInfo:this.getContactInfo,contacts:this.state.contacts}),c.a.createElement(S,{contacts:this.state.contacts,filterList:this.filterList(),filter:this.state.filter,getFilterValue:this.getFilterValue,deleteItem:this.deleteItem}))}}]),a}(n.Component);var L=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(k,null))};l.a.render(c.a.createElement(L,null),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.45d360be.chunk.js.map