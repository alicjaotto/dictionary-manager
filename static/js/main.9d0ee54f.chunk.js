(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(36)},32:function(e,t,a){},33:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(22),o=a.n(c),r=(a(32),a(7)),l=a(8),s=a(10),d=a(9),u=a(11),h=(a(33),a(2)),m=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={dictionaries:a.props.dictionaries,activeDictionaryId:null,newDictionary:a.props.newDictionary},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillUpdate",value:function(){this.toggleActiveClass(this.state.activeDictionaryId)}},{key:"showDictionary",value:function(e){this.props.sendActiveDictionary(e),this.setState({activeDictionaryId:e},function(){return console.log()}),this.toggleActiveClass(e)}},{key:"toggleActiveClass",value:function(e){var t="list-"+e;if(null!==e)this.refs[t].classList.toggle("active");else if(this.state.newDictionary){var a=this.refs[t];console.log(a),a.classList.remove("active")}}},{key:"render",value:function(){var e=this,t=this.state.dictionaries.map(function(t,a){var n=t.title,c="list-"+t.id,o=a;return i.a.createElement("button",{key:o,type:"button",disabled:e.props.disabled,ref:c,className:"Dictionary-list-item",onClick:function(a){return e.showDictionary(t.id)}},n)});return i.a.createElement("div",{className:"Dictionary-list"},t)}}]),t}(n.Component),v=a(13),b=a(41),y=a(37),p=a(42),O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleEditAction=a.handleEditAction.bind(Object(h.a)(Object(h.a)(a))),a.handleSaveAction=a.handleSaveAction.bind(Object(h.a)(Object(h.a)(a))),a.handleRemoveAction=a.handleRemoveAction.bind(Object(h.a)(Object(h.a)(a))),a.handleChangeAction=a.handleChangeAction.bind(Object(h.a)(Object(h.a)(a))),a.state={domain:a.props.domain,range:a.props.range,id:a.props.id,editable:!1,editDisabled:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){""===this.state.domain&&""===this.state.range&&this.setState({editable:!0,editDisabled:!0})}},{key:"handleEditAction",value:function(e){this.setState({editable:!0,editDisabled:!0})}},{key:"handleSaveAction",value:function(e){this.setState({editable:!1,editDisabled:!1})}},{key:"handleRemoveAction",value:function(e){var t=this.state.id;this.props.sendRowToRemoveId(t)}},{key:"handleChangeAction",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(v.a)({},t,a))}},{key:"render",value:function(){var e=this.state,t=e.editable,a=e.domain,n=e.range,c=e.editDisabled;return i.a.createElement("tr",null,!t&&i.a.createElement("td",null,a),t&&i.a.createElement("td",null,i.a.createElement(b.a.Control,{name:"domain",onChange:this.handleChangeAction,type:"text",size:"sm",defaultValue:a})),!t&&i.a.createElement("td",null,n),t&&i.a.createElement("td",null,i.a.createElement(b.a.Control,{name:"range",onChange:this.handleChangeAction,type:"text",size:"sm",defaultValue:n})),i.a.createElement("td",null,i.a.createElement(y.a,null,i.a.createElement(p.a,{onClick:this.handleEditAction,size:"sm",value:"edit",variant:"secondary",disabled:c},"Edit"),i.a.createElement(p.a,{onClick:this.handleSaveAction,size:"sm",value:"save",variant:"primary",disabled:!c},"Save"),i.a.createElement(p.a,{onClick:this.handleRemoveAction,size:"sm",value:"delete",variant:"danger"},"Remove"))))}}]),t}(n.Component),j=a(38),E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleAddRowAction=a.handleAddRowAction.bind(Object(h.a)(Object(h.a)(a))),a.handleRemoveRowAction=a.handleRemoveRowAction.bind(Object(h.a)(Object(h.a)(a))),a.state={activeDictionary:a.props.activeDictionary,activeDictionaryId:a.props.activeDictionaryId},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleAddRowAction",value:function(e){var t=this.state.activeDictionary;t.push(["",""]),this.setState({activeDictionary:t})}},{key:"handleRemoveRowAction",value:function(e){var t=this.state.activeDictionary;t.splice(e,1),this.setState({activeDictionary:t})}},{key:"render",value:function(){var e=this,t=this.props.activeDictionary,a=this.props.newDictionary.newDictionary,n=t.map(function(t,a){var n=t[0],c=t[1],o=a;return i.a.createElement(O,{key:o,id:o,domain:n,range:c,sendRowToRemoveId:e.handleRemoveRowAction,sendRowData:e.handleRowData})});return i.a.createElement("div",{className:"Dictionary-view"},!a&&i.a.createElement(j.a,{striped:!0,bordered:!0,size:"sm"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Domain"),i.a.createElement("th",null,"Range"),i.a.createElement("th",null,"Actions"))),i.a.createElement("tbody",null,n)),i.a.createElement(y.a,null,i.a.createElement(p.a,{value:"addRow",variant:"secondary",onClick:this.handleAddRowAction},"Add row")))}}]),t}(n.Component),f=a(39),D=a(25),w=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleAddRowAction=a.handleAddRowAction.bind(Object(h.a)(Object(h.a)(a))),a.handleRemoveRowAction=a.handleRemoveRowAction.bind(Object(h.a)(Object(h.a)(a))),a.handleChangeAction=a.handleChangeAction.bind(Object(h.a)(Object(h.a)(a))),a.sendNewDictionaryObject=a.sendNewDictionaryObject.bind(Object(h.a)(Object(h.a)(a))),a.createNewDictionaryObject=a.createNewDictionaryObject.bind(Object(h.a)(Object(h.a)(a))),a.state={title:"",id:"",dict:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleChangeAction",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(v.a)({},t,a))}},{key:"handleAddRowAction",value:function(e){var t=this.state.dict;t.push(["",""]),this.setState({dict:t})}},{key:"handleRemoveRowAction",value:function(e){var t=this.state.dict;t.splice(e,1),this.setState({dict:t})}},{key:"createNewDictionaryObject",value:function(e){var t={};return["id","title","dict"].forEach(function(a){Object.defineProperty(t,a,{value:e[a],configurable:!0})}),t}},{key:"sendNewDictionaryObject",value:function(){var e=this.createNewDictionaryObject(this.state);console.log(e)}},{key:"render",value:function(){var e=this,t=this.state,a=t.dict,n=t.title,c=t.id,o=a.map(function(t,a){var n=t[0],c=t[1],o=a;return i.a.createElement(O,{key:o,id:o,domain:n,range:c,sendRowToRemoveId:e.handleRemoveRowAction})});return i.a.createElement("div",{className:"Dictionary-view"},i.a.createElement(b.a.Group,{as:f.a},i.a.createElement(b.a.Label,{column:!0,sm:"2"},"Title"),i.a.createElement(D.a,{sm:"10"},i.a.createElement(b.a.Control,{name:"title",onChange:this.handleChangeAction,type:"text",size:"sm",defaultValue:n})),i.a.createElement(b.a.Label,{column:!0,sm:"2"},"Unique ID"),i.a.createElement(D.a,{sm:"10"},i.a.createElement(b.a.Control,{name:"id",onChange:this.handleChangeAction,type:"text",size:"sm",defaultValue:c}))),i.a.createElement(j.a,{striped:!0,bordered:!0,size:"sm"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Domain"),i.a.createElement("th",null,"Range"),i.a.createElement("th",null,"Actions"))),i.a.createElement("tbody",null,o)),i.a.createElement(y.a,null,i.a.createElement(p.a,{value:"addRow",variant:"primary",onClick:this.handleAddRowAction},"Add row"),i.a.createElement(p.a,{onClick:this.sendNewDictionaryObject,value:"save",variant:"primary"},"Save dictionary")))}}]),t}(n.Component),A=a(40),g=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).addDictionary=a.addDictionary.bind(Object(h.a)(Object(h.a)(a))),a.setActiveDictionary=a.setActiveDictionary.bind(Object(h.a)(Object(h.a)(a))),a.state={dictionaries:a.props.dictionaries,viewVisible:!1,activeDictionaryId:null,newDictionary:!1,activeDictionary:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"setActiveDictionary",value:function(e){var t=this,a=this.findActiveDictionary(e);this.setState({activeDictionaryId:e,activeDictionary:a,viewVisible:!0},function(){return console.log(t.state)})}},{key:"addDictionary",value:function(e){var t=this;this.setState({newDictionary:!0,activeDictionaryId:null,activeDictionary:[]},function(){return console.log(t.state)})}},{key:"findActiveDictionary",value:function(e){var t=[];return null!==e&&(t=Object.entries(this.state.dictionaries.find(function(t){return t.id===e}).dict)),t}},{key:"render",value:function(){var e=this.state,t=e.dictionaries,a=e.viewVisible,n=e.newDictionary,c=e.activeDictionary,o=e.activeDictionaryId;return i.a.createElement(A.a,null,i.a.createElement(f.a,null,i.a.createElement(D.a,{md:4},i.a.createElement(m,{disabled:n,dictionaries:t,sendActiveDictionary:this.setActiveDictionary,newDictionary:n}),i.a.createElement("div",null,i.a.createElement(p.a,{primary:"true",value:"add",size:"lg",block:!0,onClick:this.addDictionary},"new dictionary"))),i.a.createElement(D.a,{md:8},a&&!n&&i.a.createElement(E,{key:o,activeDictionary:c,newDictionary:n}),n&&i.a.createElement(w,null))))}}]),t}(n.Component),k=a(16),R=a.n(k),C=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement(R.a,null,i.a.createElement("h1",{className:"App-title"},"dictionary manager"))),i.a.createElement(g,{dictionaries:[{id:456,title:"Winter palette",dict:{Stonegrey:"grey","Mystic Black":"anthracite","Midnight Silver":"silver"}},{id:323,title:"Autumn palette",dict:{"Light Brown":"grey","Ocean Blue":"blue","Moon beige":"beige"}},{id:723,title:"Summer palette",dict:{"Happy Orange":"orange","Cherry Red":"red","Shiny yellow":"yellow"}}]}),i.a.createElement("footer",{className:"App-footer"},i.a.createElement(R.a,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.9d0ee54f.chunk.js.map