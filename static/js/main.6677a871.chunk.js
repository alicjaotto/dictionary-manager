(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){e.exports=a(79)},46:function(e,t,a){},47:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(22),o=a.n(c),r=(a(46),a(7)),l=a(9),s=a(11),d=a(10),u=a(12),h=a(2),v=(a(47),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={activeDictionaryId:null,newDictionary:a.props.newDictionary},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillUpdate",value:function(){this.toggleActiveClass(this.state.activeDictionaryId)}},{key:"showDictionary",value:function(e){this.props.sendActiveDictionary(e),this.setState({activeDictionaryId:e}),this.toggleActiveClass(e)}},{key:"toggleActiveClass",value:function(e){var t="list-"+e;if(this.state.newDictionary||null===e){if(this.state.newDictionary){this.refs[t].classList.remove("active")}}else this.refs[t].classList.toggle("active")}},{key:"render",value:function(){var e=this,t=this.props.dictionaries.map(function(t,a){var n=t.title,c="list-"+t.id;return i.a.createElement("li",{key:c},i.a.createElement("button",{type:"button",disabled:e.props.disabled,ref:c,className:"Dictionary-list-item",onClick:function(a){return e.showDictionary(t.id)}},n))});return i.a.createElement("ul",{className:"Dictionary-list"},t)}}]),t}(n.Component)),m=a(16),y=a(85),b=a(80),w=a(81),p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleEditAction=a.handleEditAction.bind(Object(h.a)(Object(h.a)(a))),a.handleSaveAction=a.handleSaveAction.bind(Object(h.a)(Object(h.a)(a))),a.handleRemoveAction=a.handleRemoveAction.bind(Object(h.a)(Object(h.a)(a))),a.handleChangeAction=a.handleChangeAction.bind(Object(h.a)(Object(h.a)(a))),a.state={domain:a.props.domain,range:a.props.range,id:a.props.id,editable:!1,editDisabled:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){""===this.state.domain&&""===this.state.range&&this.setState({editable:!0,editDisabled:!0})}},{key:"handleEditAction",value:function(e){this.setState({editable:!0,editDisabled:!0})}},{key:"handleSaveAction",value:function(e){this.props.sendNewRow(this.state.domain,this.state.range,this.state.id),this.setState({editable:!1,editDisabled:!1})}},{key:"handleRemoveAction",value:function(e){var t=this.state.id;this.props.sendRowToRemoveId(t)}},{key:"handleChangeAction",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(m.a)({},t,a))}},{key:"render",value:function(){var e=this.state,t=e.editable,a=e.domain,n=e.range,c=e.editDisabled;return i.a.createElement("tr",null,!t&&i.a.createElement("td",null,a),t&&i.a.createElement("td",null,i.a.createElement(y.a.Control,{name:"domain",onChange:this.handleChangeAction,type:"text",size:"sm",defaultValue:a})),!t&&i.a.createElement("td",null,n),t&&i.a.createElement("td",null,i.a.createElement(y.a.Control,{name:"range",onChange:this.handleChangeAction,type:"text",size:"sm",defaultValue:n})),i.a.createElement("td",null,i.a.createElement(b.a,null,!t&&i.a.createElement(w.a,{onClick:this.handleEditAction,size:"sm",value:"edit",variant:"secondary",disabled:c},"Edit"),t&&i.a.createElement(w.a,{onClick:this.handleSaveAction,size:"sm",value:"save",variant:"success",disabled:!c},"Done"),i.a.createElement(w.a,{onClick:this.handleRemoveAction,size:"sm",value:"delete",variant:"danger"},"Remove"))))}}]),t}(n.Component),D=a(82),f=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleAddRowAction=a.handleAddRowAction.bind(Object(h.a)(Object(h.a)(a))),a.handleRemoveRowAction=a.handleRemoveRowAction.bind(Object(h.a)(Object(h.a)(a))),a.handleSaveNewRow=a.handleSaveNewRow.bind(Object(h.a)(Object(h.a)(a))),a.handleSaveChangesAction=a.handleSaveChangesAction.bind(Object(h.a)(Object(h.a)(a))),a.state={activeDictionary:a.props.activeDictionary,activeDictionaryId:a.props.activeDictionaryId},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleAddRowAction",value:function(e){var t=this,a=this.state.activeDictionary;a.push(["",""]),this.setState({activeDictionary:a},function(){return console.log(t.state)})}},{key:"handleRemoveRowAction",value:function(e){var t=this.state.activeDictionary;t.splice(e,1),this.setState({activeDictionary:t})}},{key:"handleSaveNewRow",value:function(e,t,a){var n=this.state.activeDictionary[a];n[0]=e,n[1]=t}},{key:"handleSaveChangesAction",value:function(){var e=this.state.activeDictionary.reduce(function(e,t){return e[t[0]]=t[1],e},{});this.props.sendChangedDictionary(e)}},{key:"render",value:function(){var e=this,t=this.props.activeDictionary,a=t.map(function(t,a){var n=t[0],c=t[1],o=a;return i.a.createElement(p,{key:o,id:o,domain:n,range:c,sendRowToRemoveId:e.handleRemoveRowAction,sendRowData:e.handleRowData,sendNewRow:e.handleSaveNewRow})}),n=t.length>=1;return i.a.createElement("div",{className:"Dictionary-view"},i.a.createElement(D.a,{striped:!0,bordered:!0,size:"sm"},n&&i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Domain"),i.a.createElement("th",null,"Range"),i.a.createElement("th",null,"Actions"))),i.a.createElement("tbody",null,a)),i.a.createElement(b.a,null,i.a.createElement(w.a,{value:"addRow",variant:"secondary",onClick:this.handleAddRowAction},"Add row"),i.a.createElement(w.a,{value:"save",variant:"primary",onClick:this.handleSaveChangesAction},"Save changes")))}}]),t}(n.Component),A=function e(t){Object(r.a)(this,e),this.id=t.id,this.title=t.title,this.dict=t.dict},E=a(83),j=a(36),g=a(86),O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleAddRowAction=a.handleAddRowAction.bind(Object(h.a)(Object(h.a)(a))),a.handleRemoveRowAction=a.handleRemoveRowAction.bind(Object(h.a)(Object(h.a)(a))),a.handleChangeAction=a.handleChangeAction.bind(Object(h.a)(Object(h.a)(a))),a.sendNewDictionaryObject=a.sendNewDictionaryObject.bind(Object(h.a)(Object(h.a)(a))),a.handleSaveNewRow=a.handleSaveNewRow.bind(Object(h.a)(Object(h.a)(a))),a.state={title:null,id:null,dict:[],showAlert:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleChangeAction",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(m.a)({},t,a))}},{key:"handleAddRowAction",value:function(e){var t=this,a=this.state.dict;a.push(["",""]),this.setState({dict:a},function(){return console.log(t.state)})}},{key:"handleRemoveRowAction",value:function(e){var t=this.state.dict;t.splice(e,1),this.setState({dict:t})}},{key:"reduceArrToObject",value:function(e){return e.reduce(function(e,t){return e[t[0]]=t[1],e},{})}},{key:"sendNewDictionaryObject",value:function(){if(null==this.state.title&&null==this.state.id)this.setState({showAlert:!0});else{var e=new A(this.state),t=this.reduceArrToObject(e.dict);e.dict=t,this.props.sendNewDictionary(e)}}},{key:"handleSaveNewRow",value:function(e,t,a){var n=this.state.dict[a];n[0]=e,n[1]=t}},{key:"render",value:function(){var e=this,t=function(){return e.setState({showAlert:!1})},a=this.state,n=a.dict,c=a.title,o=a.id,r=a.showAlert,l=n.map(function(t,a){var n=t[0],c=t[1],o=a;return i.a.createElement(p,{key:o,id:o,domain:n,range:c,sendRowToRemoveId:e.handleRemoveRowAction,sendNewRow:e.handleSaveNewRow})}),s=n.length>=1;return i.a.createElement("div",{className:"Dictionary-view"},i.a.createElement(y.a.Group,{as:E.a},i.a.createElement(y.a.Label,{column:!0,sm:"2"},"Title"),i.a.createElement(j.a,{sm:"10"},i.a.createElement(y.a.Control,{name:"title",onChange:this.handleChangeAction,type:"text",size:"sm",defaultValue:c})),i.a.createElement(y.a.Label,{column:!0,sm:"2"},"Unique ID"),i.a.createElement(j.a,{sm:"10"},i.a.createElement(y.a.Control,{name:"id",onChange:this.handleChangeAction,type:"text",size:"sm",defaultValue:o}))),i.a.createElement(D.a,{striped:!0,bordered:!0,size:"sm"},s&&i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Domain"),i.a.createElement("th",null,"Range"),i.a.createElement("th",null,"Actions"))),i.a.createElement("tbody",null,l)),i.a.createElement(b.a,null,i.a.createElement(w.a,{value:"addRow",variant:"secondary",onClick:this.handleAddRowAction},"Add row"),i.a.createElement(w.a,{onClick:this.sendNewDictionaryObject,value:"save",variant:"primary"},"Save dictionary"),i.a.createElement(w.a,{onClick:this.sendNewDictionaryObject,value:"dismiss",variant:"danger"},"Dismiss")),i.a.createElement("div",{className:"Dictionary-view-alert"},i.a.createElement(g.a,{show:r,variant:"danger",onClose:t},i.a.createElement("span",null,"You cannot save dictionary without title and id!"),i.a.createElement("span",{className:"Dictionary-view-alert-button",type:"button",onClick:t},"x"))))}}]),t}(n.Component),k=a(84),R=a(39),C=a.n(R).a.create({baseURL:"http://my-json-server.typicode.com/alicjaotto/dictionaries-mock-data/",timeout:1e3,headers:{"Access-Control-Allow-Origin":"*"}}),N=function(){function e(){Object(r.a)(this,e)}return Object(l.a)(e,null,[{key:"getDictionaries",value:function(){return C.get("/dictionaries").then(function(e){return e.data.map(function(e){return new A(e)})}).catch(function(e){console.log("an error occured during resolving your promise")})}}]),e}(),S=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={dictionaries:[],viewVisible:!1,activeDictionaryId:null,newDictionary:!1,activeDictionary:[]},a.addDictionary=a.addDictionary.bind(Object(h.a)(Object(h.a)(a))),a.setActiveDictionary=a.setActiveDictionary.bind(Object(h.a)(Object(h.a)(a))),a.saveNewDictionary=a.saveNewDictionary.bind(Object(h.a)(Object(h.a)(a))),a.saveChangedDictionary=a.saveChangedDictionary.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.getDictionaries().then(function(t){e.setState({dictionaries:t},function(){return console.log(e.state.dictionaries)})})}},{key:"setActiveDictionary",value:function(e){var t=this,a=this.findActiveDictionary(e);this.setState({activeDictionaryId:e,activeDictionary:a,viewVisible:!0,newDictionary:!1},function(){return console.log(t.state)})}},{key:"addDictionary",value:function(e){this.setState({newDictionary:!0,activeDictionaryId:null,activeDictionary:[]})}},{key:"findActiveDictionary",value:function(e){var t=[];return null!==e&&(t=Object.entries(this.state.dictionaries.find(function(t){return t.id===e}).dict)),t}},{key:"saveNewDictionary",value:function(e){var t=this;if(null==e)console.log("no value");else{var a=e.id,n=this.state.dictionaries;n.push(e),this.setState({dictionaries:n},function(){return console.log(t.state)}),this.setActiveDictionary(a)}}},{key:"saveChangedDictionary",value:function(e){var t=this;this.state.dictionaries.find(function(e){return e.id===t.state.activeDictionaryId}).dict=e}},{key:"render",value:function(){var e=this.state,t=e.dictionaries,a=e.viewVisible,n=e.newDictionary,c=e.activeDictionary,o=e.activeDictionaryId;return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("h1",{className:"App-title"},"dictionary manager"),i.a.createElement("nav",{className:"App-menu"},i.a.createElement("ul",{className:"App-menu-nav"},i.a.createElement("li",{className:"App-menu-nav-link"},"support"),i.a.createElement("li",{className:"App-menu-nav-link"},"log out")))),i.a.createElement(k.a,null,i.a.createElement(E.a,null,i.a.createElement(j.a,{md:4},i.a.createElement(v,{disabled:n,dictionaries:t,sendActiveDictionary:this.setActiveDictionary,newDictionary:n,activeDictionaryId:o}),i.a.createElement("div",null,i.a.createElement(w.a,{disabled:n,primary:"true",value:"add",size:"lg",block:!0,onClick:this.addDictionary},"new dictionary"))),i.a.createElement(j.a,{md:8},a&&!n&&i.a.createElement(f,{key:o,activeDictionary:c,newDictionary:n,sendChangedDictionary:this.saveChangedDictionary}),n&&i.a.createElement(O,{sendNewDictionary:this.saveNewDictionary})))),i.a.createElement("footer",{className:"App-footer"},i.a.createElement(k.a,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.6677a871.chunk.js.map