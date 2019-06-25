(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c547acf"],{2760:function(e,t,a){var n={"./em_check/Field.vue":["590e","chunk-8cc33598"],"./em_file/Field.vue":["21e6","chunk-7ae42368"],"./em_list/Field.vue":["aef5","chunk-05fc04d7"],"./em_node/Field.vue":["f2d4","chunk-f8ad68e6"],"./em_primary/Field.vue":["b0b8","chunk-73d49498"],"./em_string/Field.vue":["5054","chunk-05ab712a"],"./em_text/Field.vue":["91a4","chunk-a1c266f8"]};function s(e){var t=n[e];return t?a.e(t[1]).then(function(){var e=t[0];return a(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}s.keys=function(){return Object.keys(n)},s.id="2760",e.exports=s},"5aeb":function(e,t,a){},"61f0":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"detail"},[a("div",{staticClass:"detail-head"},[a("div",{staticClass:"detail-head-name"},[a("div",{staticClass:"detail-icon-wrapper"},[a("svg",{attrs:{width:"14",height:"13"}},[a("use",{attrs:{"xlink:href":"#tableicon"}})])]),"tableAddElement"!=e.$route.name?[a("div",{staticClass:"detail-name-wrapper"},[a("div",{staticClass:"detail-head-label"},[e._v("Edit element")]),a("div",{staticClass:"detail-head-descr"},[e._v(e._s(e.tableCode))])]),a("div",{staticClass:"detail-head__buttons"},[a("button",{staticClass:"el-gbtn",on:{click:e.cancel}},[e._v("Cancel")]),a("button",{staticClass:"el-gbtn",on:{click:e.remove}},[e._v("Remove")]),a("button",{staticClass:"el-btn",on:{click:e.saveElement}},[e._v("Save")])])]:[a("div",{staticClass:"detail-name-wrapper"},[a("div",{staticClass:"detail-head-label"},[e._v("New Element")]),a("div",{staticClass:"detail-head-descr"},[e._v(e._s(e.tableCode))])]),a("div",{staticClass:"detail-head__buttons"},[a("button",{staticClass:"el-gbtn",on:{click:e.cancel}},[e._v("Cancel")]),a("button",{staticClass:"el-btn",on:{click:e.createElement}},[e._v("Create")])])]],2)]),e._l(e.selectedElement,function(t,n){return a("div",{staticClass:"detail-feild"},[a("div",{staticClass:"detail-field-name"},[a("span",[e._v(e._s(n))]),a("small",[e._v(e._s(n))])]),a("div",{staticClass:"detail-field-box"},[a("MainField",{attrs:{mode:"edit",view:"detail",fieldName:t.fieldName,params:{value:t.value,settings:e.$store.getters.getColumnSettings(e.tableCode,n,e.selectedElement)}},on:{onChange:e.changeFieldValue}})],1)])})],2)},s=[],i=(a("ac6a"),a("96cf"),a("3b8d")),l=(a("7f7f"),a("6e3e")),r=a("4328"),c=a.n(r),o={components:{MainField:l["a"]},data:function(){return{columns:{},tableCode:!1,selectedElement:{}}},mounted:function(){var e=this,t={select:{},where:[],order:[]};t.select.from=this.$route.params.tableCode;var a=this.$store.getters.getPrimaryKeyCode(this.$route.params.tableCode);if(this.columns=this.$store.getters.getColumns(this.$route.params.tableCode),this.tableCode=this.$route.params.tableCode,"tableAddElement"!=this.$route.name)t.select.where={operation:"and",fields:[{code:a,operation:"IS",value:this.$route.params.id}]},this.$store.dispatch("selectElement",t).then(function(){e.selectedElement=e.$store.state.tables.selectedElement});else for(var n in this.columns)this.selectedElement[n]={value:"",fieldName:this.columns[n].em.type_info.code}},methods:{changeFieldValue:function(e){this.selectedElement[e.settings.fieldCode].value=e.value},saveElement:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.$store.dispatch("saveSelectedElement",{selectedElement:this.selectedElement,tableCode:this.tableCode}).then(function(){t.ElMessage("👌 Element saved!")});case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),createElement:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,a,n,s,i,l;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=this.$store.getters.getPrimaryKeyCode(this.tableCode),a=[],n=[],e.t0=regeneratorRuntime.keys(this.selectedElement);case 4:if((e.t1=e.t0()).done){e.next=12;break}if(s=e.t1.value,t!=s){e.next=8;break}return e.abrupt("continue",4);case 8:a.push(s),n.push(this.selectedElement[s].value),e.next=4;break;case 12:return i=c.a.stringify({insert:{table:this.tableCode,columns:a,values:n}}),e.next=15,this.$axios.post("/el/insert/",i);case 15:l=e.sent,1==l.data.success?(this.$router.push({name:"tableDetail",params:{tableCode:this.tableCode,id:l.data.lastid}}),this.ElMessage("Element created!")):this.ElMessage.error("Cant create element!");case 17:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),cancel:function(){this.$router.go(-1)},remove:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$store.getters.getPrimaryKeyCode(this.tableCode),e.next=3,this.$store.dispatch("removeRecord",{delete:{table:this.tableCode,where:{operation:"and",fields:[{code:t,operation:"IS",value:this.selectedElement[t].value}]}}}).then(function(){a.cancel(),a.ElMessage("Element removed!")});case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},d=o,u=(a("85d3"),a("2877")),m=Object(u["a"])(d,n,s,!1,null,null,null);t["default"]=m.exports},"6e3e":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a(e.columnContent,{tag:"component",attrs:{fieldValue:e.params.value,fieldSettings:e.params.settings,mode:e.mode,view:e.view},on:{onChange:e.changeValue,openEdit:e.openEdit}})],1)},s=[],i={props:["params","mode","view","fieldName"],computed:{columnContent:function(){var e=this;return"undefined"!=typeof this.fieldName&&!1!==this.fieldName&&function(){return a("2760")("./".concat(e.fieldName,"/Field.vue"))}}},methods:{changeValue:function(e){this.$emit("onChange",e)},openEdit:function(){this.$emit("openEdit")}}},l=i,r=a("2877"),c=Object(r["a"])(l,n,s,!1,null,null,null);t["a"]=c.exports},"85d3":function(e,t,a){"use strict";var n=a("5aeb"),s=a.n(n);s.a}}]);
//# sourceMappingURL=chunk-3c547acf.dc42c4e8.js.map