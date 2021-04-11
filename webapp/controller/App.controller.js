sap.ui.define([
	"modelDemo/fiori/controller/BaseController",
	"modelDemo/fiori/models/model"
], function(Controller, model) {
	"use strict";

	return Controller.extend("modelDemo.fiori.controller.App", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf modelDemo.fiori.view.App
		 */
			onInit: function() {
				//write the model declarations in manifest.json
				// var oModel = model.createFruitModel();
				// this.getView().setModel(oModel);
				
				////Write the below view definitions in routing manifest.json 
				
			// 	//step1: get the object of the app control
			// 	var oApp=this.getView().byId("myApp");
			// 	//step2: create the object of the both views
			// 	var oView1 = new sap.ui.view({
			// 		id:"idView1",
			// 		viewName:"modelDemo.fiori.view.View1",
			// 		type:sap.ui.core.mvc.ViewType.XML
			// 	});
			// 	var oView2 = new sap.ui.view({
			// 		id:"idView2",
			// 		viewName:"modelDemo.fiori.view.View2",
			// 		type:sap.ui.core.mvc.ViewType.XML
			// 	});
			// 	var oEmpty = new sap.ui.view({
			// 		id:"idEmpty",
			// 		viewName:"modelDemo.fiori.view.Empty",
			// 		type:sap.ui.core.mvc.ViewType.XML
			// 	});
				
			// 	//step3: add these views as part of app control
			// 	// oApp.addPage(oView1);
			// 	// oApp.addPage(oView2);
			// 	// oApp.setInitialPage(oView2);//to set intial page as other views
			// 	oApp.addMasterPage(oView1);
			// 	oApp.addDetailPage(oEmpty);
			// 	oApp.addDetailPage(oView2);
			// 	oApp.setInitialDetail("idEmpty");
			}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf modelDemo.fiori.view.App
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf modelDemo.fiori.view.App
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf modelDemo.fiori.view.App
		 */
		//	onExit: function() {
		//
		//	}

	});

});