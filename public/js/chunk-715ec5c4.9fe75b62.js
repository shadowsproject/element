(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-715ec5c4"],{4988:function(e,t,n){},"61f0":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Detail",{attrs:{tableCode:e.$route.params.tableCode,name:e.$route.name,id:e.$route.params.id},on:{cancel:e.cancel,openDetail:e.openDetail,saveElement:e.saveElementDetail,removeElement:e.removeElementDetail,createElement:e.createElementDetail}})},s=[],r=(n("96cf"),n("3b8d")),i=n("b97e"),l=(n("4328"),n("a13b")),c={components:{Detail:i["a"]},mixins:[l["a"]],methods:{cancel:function(){this.$router.go(-1)},openDetail:function(e){var t=e.tableCode,n=e.id;this.$router.push({name:"tableDetail",params:{tableCode:t,id:n}})},saveElementDetail:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.saveElement(t);case 2:n=e.sent,n.data.success&&this.ElMessage(this.$t("elMessages.element_saved"));case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),createElementDetail:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.createElement(t);case 2:n=e.sent,n.data.success?(this.openDetail({tableCode:t.tableCode,id:n.data.lastid}),this.ElMessage(this.$t("elMessages.element_created"))):this.ElMessage.error(this.$t("elMessages.cant_create_element"));case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),removeElementDetail:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.removeElement(t);case 2:n=e.sent,n.data.success&&this.ElMessage(this.$t("elMessages.element_removed")),this.$router.go(-1);case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},o=c,u=n("2877"),d=Object(u["a"])(o,a,s,!1,null,null,null);t["default"]=d.exports},"851c":function(e,t,n){"use strict";var a=n("4988"),s=n.n(a);s.a},a13b:function(e,t,n){"use strict";n("ac6a"),n("96cf");var a=n("3b8d"),s=n("4328"),r=n.n(s);t["a"]={methods:{saveElement:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("saveSelectedElement",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),createElement:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,a,s,i,l,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=this.$store.getters.getPrimaryKeyCode(t.tableCode),a=[],s=[],e.t0=regeneratorRuntime.keys(t.selectedElement);case 4:if((e.t1=e.t0()).done){e.next=12;break}if(i=e.t1.value,n!=i){e.next=8;break}return e.abrupt("continue",4);case 8:a.push(i),s.push(t.selectedElement[i].value),e.next=4;break;case 12:return l=r.a.stringify({insert:{table:t.tableCode,columns:a,values:s}}),e.next=15,this.$axios.post("/el/insert/",l);case 15:return c=e.sent,e.abrupt("return",c);case 17:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),removeElement:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=this.$store.getters.getPrimaryKeyCode(t.tableCode),e.next=3,this.$store.dispatch("removeRecord",{delete:{table:t.tableCode,where:{operation:"and",fields:[{code:n,operation:"IS",value:t.selectedElement[n].value}]}}});case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}}},b97e:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"detail"},[a("div",{staticClass:"detail-head"},[a("div",{staticClass:"detail-head-name"},[a("div",{staticClass:"detail-icon-wrapper"},[a("svg",{attrs:{width:"14",height:"13"}},[a("use",{attrs:{"xlink:href":"#tableicon"}})])]),"tableAddElement"!=e.name?[a("div",{staticClass:"detail-name-wrapper"},[a("div",{staticClass:"detail-head-label"},[e._v(e._s(e.$t("pages.table.edit_element")))]),a("div",{staticClass:"detail-head-descr"},[e._v(e._s(e.tableCode))])]),a("div",{staticClass:"detail-head__buttons"},[a("button",{staticClass:"el-gbtn",on:{click:e.cancel}},[e._v(e._s(e.$t("cancel")))]),a("button",{staticClass:"el-gbtn",on:{click:e.remove}},[e._v(e._s(e.$t("remove")))]),a("button",{staticClass:"el-btn",on:{click:e.saveElement}},[e._v(e._s(e.$t("save")))])])]:[a("div",{staticClass:"detail-name-wrapper"},[a("div",{staticClass:"detail-head-label"},[e._v(e._s(e.$t("pages.table.new_element")))]),a("div",{staticClass:"detail-head-descr"},[e._v(e._s(e.tableCode))])]),a("div",{staticClass:"detail-head__buttons"},[a("button",{staticClass:"el-gbtn",on:{click:e.cancel}},[e._v(e._s(e.$t("cancel")))]),a("button",{staticClass:"el-btn",on:{click:e.createElement}},[e._v(e._s(e.$t("create")))])])]],2)]),a("div",{staticClass:"detail-feilds"},e._l(e.selectedElement,(function(t,s){return a("div",{staticClass:"detail-feild"},[a("div",{staticClass:"detail-field__name-wrap"},[a("img",{staticClass:"detail-field__icon-image",attrs:{src:n("53a4")("./assets"+e.columnEmSettings(s).type_info.iconPath)}}),a("div",{staticClass:"detail-field-name"},[a("span",[e._v(e._s(e.getColumnName(s)))]),a("small",[e._v(e._s(s))])])]),a("div",{staticClass:"detail-field-box"},[a("MainField",{attrs:{mode:"edit",view:"detail",fieldName:t.fieldName,params:{value:t.value,settings:e.$store.getters.getColumnSettings(e.tableCode,s,e.selectedElement)}},on:{onChange:e.changeFieldValue}})],1)])})),0)])},s=[],r=(n("7f7f"),n("96cf"),n("3b8d")),i=n("6e3e"),l=(n("4328"),{props:["tableCode","name","id","element"],components:{MainField:i["a"]},data:function(){return{columns:{},selectedElement:{}}},mounted:function(){this.selectElement()},methods:{selectElement:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t={select:{},where:[],order:[]},t.select.from=this.tableCode,n=this.$store.getters.getPrimaryKeyCode(this.tableCode),this.columns=this.$store.getters.getColumns(this.tableCode),"tableAddElement"==this.name||this.element){e.next=11;break}return t.select.where={operation:"and",fields:[{code:n,operation:"IS",value:this.id}]},e.next=8,this.$store.dispatch("selectElement",t);case 8:this.selectedElement=this.$store.state.tables.selectedElement,e.next=12;break;case 11:for(a in this.columns)this.$set(this.selectedElement,a,{value:"",fieldName:this.columns[a].em.type_info.code}),this.element&&"undefined"!=typeof this.element[a]&&this.$set(this.selectedElement[a],"value",this.element[a].value);case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),changeFieldValue:function(e){this.selectedElement[e.settings.fieldCode].value=e.value},columnEmSettings:function(e){if("undefined"!=typeof this.columns[e])return this.columns[e].em;throw new Error("No column with code ".concat(e))},getColumnName:function(e){return this.columnEmSettings(e).name?this.columnEmSettings(e).name:e},saveElement:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$emit("saveElement",{selectedElement:this.selectedElement,tableCode:this.tableCode});case 2:this.selectElement();case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),createElement:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$emit("createElement",{selectedElement:this.selectedElement,tableCode:this.tableCode});case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),cancel:function(){this.$emit("cancel")},remove:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$emit("removeElement",{selectedElement:this.selectedElement,tableCode:this.tableCode});case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}}),c=l,o=(n("851c"),n("2877")),u=Object(o["a"])(c,a,s,!1,null,null,null);t["a"]=u.exports}}]);
//# sourceMappingURL=chunk-715ec5c4.9fe75b62.js.map