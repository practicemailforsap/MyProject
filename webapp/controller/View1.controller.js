sap.ui.define([
	"modelDemo/fiori/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("modelDemo.fiori.controller.View1", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf modelDemo.fiori.view.View1
		 */
			onInit: function() {
			// this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);//to get the instance of the router//diff API's
			// this.getOwnerComponent();-->gives component.js instance;
			this.oRouter = this.getOwnerComponent().getRouter();//gives router instance
			//Route match handler :which gets called every time the hashtag changes(nav changes/route is fired--WDDomodify event in Webdynpro--onBefore)
			//Restore state of UI
			
			
			},
		//ListSearch
		onFilter: function(){
			
		},
		onPressItem: function(oEvent){
		//here we get the object of the item selected by user

		var oItem = oEvent.getParameter("listItem");
		//what is concept called which gives address of element - CONTEXT
		// var sPath = oItem.getBindingContext();
		var sPath = oItem.getBindingContextPath();
		//get the object of view2 and bind this address as ABSOLUTE PATH to 2nd view
		var oApp = this.getAppObject();
		debugger;
		// var oView2 = oApp.getPage("idView2");
		// var oView2 = oApp.getPages()[1];
		// var oView2 = oApp.getDetailPages()[0];
		// var oView2 = oApp.getDetailPages()[1];
		// oView2.bindElement(sPath);
		var sItemIndex= sPath.split("/")[sPath.split("/").length-1];
		//passing the index of the fruit which was selected by user
		this.oRouter.navTo("detail",{
			fruitId: sItemIndex
		});
		// this.onNext();
		console.log(sPath);
		},
		onSearch: function(oEvent){
			var queryString = oEvent.getParameter("query");
			if(!queryString){
				queryString = oEvent.getParameter("newValue");//if search is triggered by livechange query parameter will be empty	
			}
			var oFilter = new sap.ui.model.Filter("name", sap.ui.model.FilterOperator.Contains, 
							queryString);
			var oFilter2 = new sap.ui.model.Filter("benefit", sap.ui.model.FilterOperator.Contains,
							queryString);
			// var oFilter3
			var oMainFilter = new sap.ui.model.Filter({
				filters: [oFilter, oFilter2],
				and: false
			});// or condition 
			var aFilter = [oMainFilter];
			// var aFilter = [oFilter, oFilter2];// and operator
			var oList = this.getView().byId("fruits");
			oList.getBinding("items").filter(aFilter);
		},
		onNext: function(){
			var oApp = this.getAppObject();
			oApp.to("idView2");
		},
		
		onValueHelpRequested: function(oEvent){
			if(!this._oValueHelpDialog){
				this._oValueHelpDialog = new sap.ui.comp.valuehelpdialog.ValueHelpDialog("idValueHelp",{
					SupportRanges:true,
					key:"",
					descriptionkey:"",
					ok:function(){
						this._oValueHelpDialog.close();
					},
					cancel:function(){
						this.close();
					}
				});
			}
			var oColModel = new sap.ui.model.json.JSONModel();
			oColModel.setData({
				cols: [
					{label: "Name", template: "name"}]
			});
			
			
			var oTable = this._oValueHelpDialog.getTable();
			oTable.setModel(oColModel,"columns");
			
			var oRowModel = new sap.ui.model.json.JSONModel("models/mockData/fruits.json");
			oTable.setModel(oRowModel);
			oTable.bindRows("/fruits");
			
			this._oValueHelpDialog.open();
			
			// var oColumnModel = sap.ui.model.json.JSONModel();
			// oColumnModel.loadData("models/mockData/columnsModel.json");
			// var oCol = oColumnModel.getData().cols;
			// console.log(oCol);
			
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf modelDemo.fiori.view.View1
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf modelDemo.fiori.view.View1
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf modelDemo.fiori.view.View1
		 */
		//	onExit: function() {
		//
		//	}

	});

});