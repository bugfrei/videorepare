//@ui5-bundle vpui5/Component-preload.js
sap.ui.require.preload({
	"vpui5/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","vpui5/model/models"],function(e,i,t){"use strict";return e.extend("vpui5.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(t.createDeviceModel(),"device")}})});
},
	"vpui5/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(n){"use strict";return n.extend("vpui5.controller.App",{onInit:function(){}})});
},
	"vpui5/controller/View1.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(n){"use strict";return n.extend("vpui5.controller.View1",{onInit:function(){}})});
},
	"vpui5/i18n/i18n.properties":'# This is the resource bundle for vpui5\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=UI5 App\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n#XTIT: Main view title\ntitle=UI5 App',
	"vpui5/manifest.json":'{"_version":"1.65.0","sap.app":{"id":"vpui5","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.15.0","toolsId":"ff93314b-7214-456b-bea5-3e8ded280245"},"dataSources":{"mainService":{"uri":"odata/v4/catalog/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"vpui5-display":{"semanticObject":"vpui5","action":"display","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.144.1","libs":{"sap.m":{},"sap.ui.core":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"vpui5.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"vpui5.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteView1","pattern":":?query:","target":["TargetView1"]}],"targets":{"TargetView1":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"View1","viewName":"View1"}}},"rootView":{"viewName":"vpui5.view.App","type":"XML","async":true,"id":"App"}},"sap.cloud":{"public":true,"service":"vidprep.service"}}',
	"vpui5/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"vpui5/view/App.view.xml":'<mvc:View controllerName="vpui5.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"vpui5/view/View1.view.xml":'<mvc:View controllerName="vpui5.controller.View1"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><Page id="page" title="{i18n>title}"><content><Title text="UI5 App V1" /><List items="{/Books}"><ObjectListItem title="{title}" number="{stock}" numberUnit="pcs" /></List></content></Page></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
