(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed46fe82","chunk-1eb5d402"],{"0765":function(t,e,s){},2234:function(t,e,s){"use strict";var i=s("0765"),a=s.n(i);a.a},"3b10":function(t,e,s){},"41a1":function(t,e,s){"use strict";e["a"]={methods:{showPopup:function(t,e,s,i){var a="",n={};switch("undefined"==typeof s&&(s="left-bottom"),"undefined"==typeof i&&(i="down"),s){case"left-top":a=t.getBoundingClientRect(),n.top=a.top-1,n.left=a.left-1;break;case"center-bottom":default:a=t.getBoundingClientRect(),n.left=a.left,n.top=a.top-1,n.top=a.top+a.height+4;break}n.bottom=a.bottom,n.height=a.height,n.width=a.width,n.right=a.right,n.positionType=s,this.$store.commit("openPopup",{name:e,coords:n})}}}},5999:function(t,e,s){},"5aec":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"em-check-wrapper"},[s("label",{staticClass:"em-check-label"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.isChecked,expression:"isChecked"}],staticClass:"em-check",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isChecked)?t._i(t.isChecked,null)>-1:t.isChecked},on:{change:[function(e){var s=t.isChecked,i=e.target,a=!!i.checked;if(Array.isArray(s)){var n=null,r=t._i(s,n);i.checked?r<0&&(t.isChecked=s.concat([n])):r>-1&&(t.isChecked=s.slice(0,r).concat(s.slice(r+1)))}else t.isChecked=a},function(e){return t.changeStatus()}]}}),s("span",[s("svg",{attrs:{width:"7",height:"7"}},[s("use",{attrs:{"xlink:href":"#check"}})])])])])},a=[],n=(s("96cf"),s("3b8d")),r={props:["fieldValue","fieldSettings"],data:function(){return{isChecked:!1}},methods:{changeStatus:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e,i,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=s("4328"),i=e.stringify({tableCode:this.fieldSettings.tableCode,fieldCode:this.fieldSettings.fieldCode,primaryKey:this.fieldSettings.primaryKey.fieldCode,primaryKeyValue:this.fieldSettings.primaryKey.value,status:this.isChecked}),t.next=4,this.$axios({method:"POST",data:i,url:"/api/field/em_check/index/changeStatus/"});case 4:if(a=t.sent,a.data.success){t.next=7;break}return t.abrupt("return",!1);case 7:this.$emit("onChange",{value:this.isChecked,settings:this.fieldSettings});case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){this.isChecked=this.fieldValue}},c=r,l=(s("c163"),s("2877")),o=Object(l["a"])(c,i,a,!1,null,null,null);e["default"]=o.exports},"6a5f":function(t,e,s){"use strict";var i=s("80e6"),a=s.n(i);a.a},"80e6":function(t,e,s){},"9a8c":function(t,e,s){},c163:function(t,e,s){"use strict";var i=s("3b10"),a=s.n(i);a.a},c4c4:function(t,e,s){"use strict";var i=s("5999"),a=s.n(i);a.a},c52c:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"settings-wrapper"},[t._m(0),s("div",{staticClass:"settings-tab-wrapper"},[s("div",{staticClass:"settings-tabs-head"},t._l(t.tabs,function(e){return s("div",{staticClass:"settings-tab-item",class:{active:e.active},on:{click:function(s){return t.setActiveTab(e)}}},[t._v(t._s(e.name))])}),0),s("div",{staticClass:"settings-tabs-content-wrapper"},["Tables"==t.activeTab?s("div",{staticClass:"settings-tab-content"},[s("SettingsTable")],1):t._e(),"Users"==t.activeTab?s("div",{staticClass:"settings-tab-content"},[s("SettingsUser")],1):t._e()])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"settings-head"},[s("div",{staticClass:"settings-head-name"},[s("div",{staticClass:"settings-icon-wrapper"},[t._v("\n\t\t\t\t⚙️\n\t\t\t")]),s("div",{staticClass:"settings-name-wrapper"},[s("div",{staticClass:"settings-head-label"},[t._v("Settings")]),s("div",{staticClass:"settings-head-descr"},[t._v("User & table settings")])])])])}],n=(s("ac4d"),s("8a81"),s("ac6a"),s("7f7f"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"settings-table-wrapper"},[s("div",{staticClass:"settings-table-head"},[t._m(0),t._l(t.tables,function(e){return s("div",{staticClass:"settings-table-row"},[s("div",{staticClass:"settings-table-row-data"},[s("div",{staticClass:"settings-table-item",on:{click:function(s){return t.toggleSettingsRow(e)}}},[s("svg",{staticClass:"settings-table-item-img",class:{active:"visible"==e.showSettings.overflow||"auto"==e.showSettings.overflow},attrs:{width:"7",height:"13"}},[s("use",{attrs:{"xlink:href":"#arrow"}})]),s("div",{staticClass:"settings-table-item-code"},[t._v(t._s(e.code))])]),s("div",{staticClass:"settings-table-item"},[s("div",{staticClass:"settings-table-item-name"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"table.name"}],attrs:{type:"text",placeholder:"Set Name"},domProps:{value:e.name},on:{change:function(s){return t.setTviewSetting(e,"table",{name:e.name})},input:function(s){s.target.composing||t.$set(e,"name",s.target.value)}}})])]),s("div",{staticClass:"settings-table-item"},[s("div",{staticClass:"settings-table-item-flag"},[s("div",{staticClass:"settings-table__check-wrapper"},[s("label",{staticClass:"settings-table__check-label"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.visible,expression:"table.visible"}],staticClass:"settings-table__check",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.visible)?t._i(e.visible,null)>-1:e.visible},on:{change:[function(s){var i=e.visible,a=s.target,n=!!a.checked;if(Array.isArray(i)){var r=null,c=t._i(i,r);a.checked?c<0&&t.$set(e,"visible",i.concat([r])):c>-1&&t.$set(e,"visible",i.slice(0,c).concat(i.slice(c+1)))}else t.$set(e,"visible",n)},function(s){t.setTviewSetting(e,"table",{visible:String(e.visible)})}]}}),s("span",[s("svg",{attrs:{width:"7",height:"7"}},[s("use",{attrs:{"xlink:href":"#check"}})])])])])])]),s("div",{staticClass:"settings-table-item"})]),s("div",{staticClass:"settings-table-row-setting",style:e.showSettings,attrs:{id:"settings-table-row"}},t._l(e.columns,function(i){return s("div",{staticClass:"settings-table-row-setting-item active"},[s("div",{staticClass:"settings-table-item"},[t._v(" "+t._s(i.field)+" ")]),s("div",{staticClass:"settings-table-item category-font"},[s("input",{directives:[{name:"model",rawName:"v-model",value:i.em.name,expression:"column.em.name"}],staticClass:"settings-table-input-name",attrs:{type:"text",placeholder:"Set Name"},domProps:{value:i.em.name},on:{change:function(s){return t.changeColumnName(e.code,i)},input:function(e){e.target.composing||t.$set(i.em,"name",e.target.value)}}})]),s("div",{staticClass:"settings-table-item table-item centered"},[s("List",{attrs:{params:{value:i.em.type_info.name,settings:t.getFieldSettings(e,i)}},on:{onChange:t.changeType}})],1),s("div",{staticClass:"settings-table-item centered"},[s("button",{on:{click:function(e){return e.stopPropagation(),t.setSettingsPopupParams({fieldName:i.em.type_info.fieldComponent,required:i.em.required,settings:i.em.settings})}}},[t._v("settings")])])])}),0)])})],2)])}),r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"settings-table-row-data"},[s("div",{staticClass:"settings-table-item"},[s("div",{staticClass:"settings-table-item-title"},[t._v("Code")])]),s("div",{staticClass:"settings-table-item"},[s("div",{staticClass:"settings-table-item-title"},[t._v("Name")])]),s("div",{staticClass:"settings-table-item"},[s("div",{staticClass:"settings-table-item-title"},[t._v("Show")])]),s("div",{staticClass:"settings-table-item"})])}],c=(s("96cf"),s("3b8d")),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list__table-select",on:{click:function(e){return t.togglePopup()}}},[s("div",{staticClass:"list__item-wrapper"},[s("div",{staticClass:"list__head-item"},[t._v(t._s(t.fieldValue))])]),t.showPopup?s("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closePopup,expression:"closePopup"}],staticClass:"list__search"},[s("div",{staticClass:"list__search-popup-head"},[s("div",{staticClass:"list__search-item"},[t._v("\n\t\t\t\t"+t._s(t.fieldValue)+"\n\t\t\t")])]),t._l(t.fieldSettings.values,function(e){return s("div",{staticClass:"list__search-popup-item",on:{click:function(s){return t.selectItem(e)}}},[s("div",{staticClass:"list__search-icon"},[s("svg",{attrs:{width:"6",height:"5"}},[s("use",{attrs:{"xlink:href":"#lines"}})])]),s("div",{staticClass:"list__search-item"},[t._v("\n\t\t\t\t"+t._s(e.name)+"\n\t\t\t")])])})],2):t._e()])},o=[],u={props:["params"],data:function(){return{showPopup:!1,fieldValue:"",fieldSettings:{}}},methods:{togglePopup:function(){this.showPopup=!this.showPopup},closePopup:function(){this.showPopup=!1},selectItem:function(t){this.fieldValue=t.name,this.$emit("onChange",{data:t,column:this.fieldSettings.fieldCode,table:this.fieldSettings.tableCode})}},mounted:function(){this.fieldValue=this.params.value,this.fieldSettings=this.params.settings}},d=u,h=(s("c4c4"),s("2877")),m=Object(h["a"])(d,l,o,!1,null,null,null),v=m.exports,g=s("6e3e"),p=s("41a1"),f=s("d230"),b={mixins:[p["a"],f["a"]],components:{MainField:g["default"],List:v},data:function(){return{tableColumns:{},fieldTypes:[],tables:[],typePopupShow:!1,tableStyle:{height:"0px",overflow:"hidden"}}},methods:{setSettingsPopupParams:function(t){this.$store.commit("setPopupParams",t),this.$store.commit("setActivePopup",!0)},getFieldSettings:function(t,e){var s=t.columns,i=!1;for(var a in s){var n=s[a];if("PRI"==n.key){i=a;break}}var r={value:"",fieldCode:i},c=e.em.settings;return c.fieldCode=e.field,c.tableCode=t.code,c.fieldType=e.em.type_info.code,c.primaryKey=r,c.values=this.fieldTypes,c},changeType:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(e){var i,a,n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=s("4328"),a=i.stringify({tableName:e.table,columnName:e.column,fieldType:e.data.code}),t.next=4,this.$axios({method:"post",url:"/api/settings/changeFieldType/",data:a});case 4:if(n=t.sent,n.data.success){t.next=7;break}return t.abrupt("return",!1);case 7:r=this.getTableByCode(e.table,this.tables),r.columns[e.column].em.type_info=JSON.parse(JSON.stringify(e.data)),r.columns[e.column].em.type=e.data.code;case 10:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),toggleSettingsRow:function(t){if("visible"==t.showSettings.overflow)return t.showSettings.overflow="hidden",t.showSettings.height="0",!1;var e=0;for(var s in t.columns)e+=49;t.showSettings.height=e+"px",t.showSettings.overflow="auto",setTimeout(function(){t.showSettings.overflow="visible"},300)},setRowSetting:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e.showSettings=!e.showSettings;case 1:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),changeColumnName:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(e,i){var a,n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=s("4328"),n=a.stringify({tableName:e,field:i.field,name:i.em.name,type:i.em.type_info.code}),t.next=3,this.$axios({method:"POST",url:"/api/settings/changeName/",data:n});case 3:if(r=t.sent,r.data.success){t.next=6;break}return t.abrupt("return",!1);case 6:case"end":return t.stop()}},t,this)}));function e(e,s){return t.apply(this,arguments)}return e}(),initTables:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e,s,i,a,n,r,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("/api/settings/getFiledTypes/");case 2:for(e=t.sent,e.data.success&&(this.fieldTypes=e.data.types),this.tables=this.$store.state.tables.tables,s=!0,i=!1,a=void 0,t.prev=8,n=this.tables[Symbol.iterator]();!(s=(r=n.next()).done);s=!0)c=r.value,this.$set(c,"showSettings",Object.assign({},this.tableStyle));t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](8),i=!0,a=t.t0;case 16:t.prev=16,t.prev=17,s||null==n.return||n.return();case 19:if(t.prev=19,!i){t.next=22;break}throw a;case 22:return t.finish(19);case 23:return t.finish(16);case 24:case"end":return t.stop()}},t,this,[[8,12,16,24],[17,,19,23]])}));function e(){return t.apply(this,arguments)}return e}()},computed:{getColumns:function(){return this.$store.state.tables.tableColumns}},mounted:function(){this.initTables()}},C=b,w=(s("f2f6"),Object(h["a"])(C,n,r,!1,null,null,null)),_=w.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"settings-users-wrapper"},[s("div",{staticClass:"settings-users-head"},[t._m(0),t._l(t.settings,function(e){return s("div",{staticClass:"settings-users-row"},[s("div",{staticClass:"settings-users-row-data"},[s("div",{staticClass:"settings-users-item"},[s("svg",{staticClass:"settings-users-item-img",class:{active:e.isShow},attrs:{width:"7",height:"13"},on:{click:function(s){return t.setRowSetting(e)}}},[s("use",{attrs:{"xlink:href":"#arrow"}})]),s("div",{staticClass:"settings-users-item-code"},[t._v("Code")])]),s("div",{staticClass:"settings-users-item item-width__210"},[s("div",{staticClass:"settings-users-item-flag"},[s("EmCheckField",{attrs:{fieldValue:{value:!0}}})],1)]),s("div",{staticClass:"settings-users-item"})]),s("div",{staticClass:"settings-users-row-setting"},[s("div",{staticClass:"settings-users-row-setting-item",class:{active:e.isShow}},[s("div",{staticClass:"settings-users-item"},[t._v("\n\t\t\t\t\t\tid\n\t\t\t\t\t")]),s("div",{staticClass:"settings-users-item centered item-width__210"},[t._v("\n\t\t\t\t\t\t1\n\t\t\t\t\t")])]),s("div",{staticClass:"settings-users-row-setting-item",class:{active:e.isShow}},[s("div",{staticClass:"settings-users-item"},[t._v("\n\t\t\t\t\t\tname\n\t\t\t\t\t")]),s("div",{staticClass:"settings-users-item centered item-width__210"},[t._v("\n\t\t\t\t\t\tValeron\n\t\t\t\t\t")])]),s("div",{staticClass:"settings-users-row-setting-item",class:{active:e.isShow}},[s("div",{staticClass:"settings-users-item"},[t._v("\n\t\t\t\t\t\tpassword\n\t\t\t\t\t")]),t._m(1,!0)])])])})],2),s("button",{staticClass:"settings-users-add-btn"},[s("div",{staticClass:"settings-users-btn-icon"},[s("svg",{attrs:{width:"12",height:"12"}},[s("use",{attrs:{"xlink:href":"#plus-white"}})])]),s("span",{staticClass:"settings-users-btn-name"},[t._v("\n\t\t\tAdd User\n\t\t")])])])},y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"settings-users-row-data"},[s("div",{staticClass:"settings-users-item"},[s("div",{staticClass:"settings-users-item-title"},[t._v("Login")])]),s("div",{staticClass:"settings-users-item item-width__210"},[s("div",{staticClass:"settings-users-item-title"},[t._v("Name")])]),s("div",{staticClass:"settings-users-item"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"settings-users-item centered item-width__210"},[s("input",{staticClass:"settings-users-input",attrs:{type:"password",placeholder:"Set password"}}),s("button",{staticClass:"settings-users-btn"},[t._v("change")])])}],k=s("5aec"),x={components:{EmCheckField:k["default"]},data:function(){return{settings:[{isShow:!1},{isShow:!1},{isShow:!1},{isShow:!1}]}},methods:{setRowSetting:function(t){t.isShow=!t.isShow}}},T=x,P=(s("6a5f"),Object(h["a"])(T,S,y,!1,null,null,null)),$=P.exports,N={components:{SettingsTable:_,SettingsUser:$},metaInfo:{title:"Settings"},data:function(){return{tabs:[{name:"Tables",active:!0},{name:"Users",active:!1}],activeTab:"Tables"}},methods:{setActiveTab:function(t){var e=!0,s=!1,i=void 0;try{for(var a,n=this.tabs[Symbol.iterator]();!(e=(a=n.next()).done);e=!0){var r=a.value;r.active=!1}}catch(c){s=!0,i=c}finally{try{e||null==n.return||n.return()}finally{if(s)throw i}}t.active=!0,this.activeTab=t.name}}},R=N,O=(s("2234"),Object(h["a"])(R,i,a,!1,null,null,null));e["default"]=O.exports},f2f6:function(t,e,s){"use strict";var i=s("9a8c"),a=s.n(i);a.a}}]);
//# sourceMappingURL=chunk-ed46fe82.c65b8079.js.map