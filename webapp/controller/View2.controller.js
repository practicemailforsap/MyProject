sap.ui.define([
	"modelDemo/fiori/controller/BaseController",
	"sap/m/MessageBox",
	"sap/m/MessageToast",
	"sap/m/MessagePopover",
	'sap/m/MessageItem',
	'sap/m/Link'
], function(BaseController, MessageAPI, StatusMessage, MessagePopover, MessageItem, Link) {
	"use strict";
	var oMessagePopover;
	return BaseController.extend("modelDemo.fiori.controller.View2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf modelDemo.fiori.view.View2
		 */
			onInit: function() {
				this.oRouter = this.getOwnerComponent().getRouter();
				this.oRouter.attachRoutePatternMatched(this.herculis, this);
			},
			herculis: function(oParams){
				//whenever router changes this method will be called
				//FRead the URL hash tag, read the index passed by View 1 in URL params
				debugger;
				var sPath1 = oParams.getParameters().arguments.fruitId;
				//Prepare the address of selected fruit using index
				var sPath = "/fruits/" + sPath1;
				//Bind that address of selected fruiot with the current view
				this.getView().bindElement(sPath);
				var sId = "__item1-__component0---idView1--fruits-";
				var oApp = this.getView().getParent().getParent();
				var oMast = oApp.getMasterPages()[0];
				oMast.getContent()[0].mAggregations.content[3].setSelectedItemById(sId+sPath1);
				console.log(oParams);
			},
		
		onBack: function(){
			//step1 : get the app object from base class method
			//step2 : navigate to view1 - idView1.
			// var oApp = this.getAppObject();
			// oApp.back();
			this.getAppObject().to("idView1");//chaining 
		},
		
		popupClose: function(choice){
			var oFirstTab = this.getView().byId("idView2--zumba");
			oFirstTab.setVisible(false);
			//this.getView will not work in popup
			if(choice === "OK"){
				StatusMessage.show("Your request has been approved successfully!");
			} else if(choice === "Manage Products"){
				return ;
			}
			StatusMessage.show("Manage Products");
		},
		
		onAccept: function(){
			MessageAPI.confirm("Would you like to approve Sir?",{
				title:"Anubhav",
				actions: [MessageAPI.Action.OK,"Manage Products", MessageAPI.Action.CLOSE],
				onClose: this.popupClose.bind(this)//passing the controller to popup
			});
		},
		
		onReject: function(){
			var oMessageTemplate = new MessageItem({
        type: '{type}',
        title: '{title}',
        description: '{description}',
        subtitle: '{subtitle}',
        counter: '{counter}'
    });
			var oMessagePopover = new MessagePopover({
        items: {
            path: '/',
            template: oMessageTemplate
        }
    });
		},
		
		handleMessagePopoverPress: function(oEvent){
			var oLink = new Link({
				text: "Show more information",
				href: "http://sap.com",
				target: "_blank"
			});
				var oMessageTemplate = new MessageItem({
				type: sap.ui.core.MessageType.Error,
				title: 'title',
				activeTitle: true,
				description: 'description',
				subtitle: 'subtitle',
				counter: 1
			});
				oMessagePopover = new MessagePopover({
				items: {
					path: '/',
					template: oMessageTemplate
				},
				activeTitlePress: function () {
					StatusMessage.show('Active title is pressed');
				}
			});
			this.byId("messagePopoverBtn").addDependent(oMessagePopover);
			oMessagePopover.toggle(oEvent.getSource());
			
		},
		
		cityPop: null,
		countrypopup: null,
		inputFieldIdonWhichF4inTableWasPressed: null,
		onCityConfirm: function(oEvent){
			var oItem = oEvent.getParameter("selectedItem");
			sap.ui.getCore()
				.byId(this.inputFieldIdonWhichF4inTableWasPressed)
				.setValue(oItem.getTitle());
		},
		
		onAnubhav: function(){
			sap.m.MessageBox.alert("hovered");
		},
		
		onF4Help: function(oEvent){
			var Busy = new sap.m.BusyDialog({
				customIcon:"https://img.icons8.com/plasticine/100/000000/loading-sign.png",
				showCancelButton: true
			});
			Busy.open();
			// this.inputFieldIdonWhichF4inTableWasPressed = oEvent.getSource().getId();
			// if(!this.cityPop){
			// 	//create ALV object
			// this.cityPopup = new sap.ui.xmlfragment("modelDemo.fiori.fragments.Popup",this);
			// //Setting model
			// this.cityPopup.setModel(this.getView().getModel());
			// this.cityPopup.bindAggregation("items",{
			// 	path: "/cities",
			// 	template: new sap.m.StandardListItem({
			// 		title: "{city}",
			// 		description: "{famousFor}"
			// 	})
			// });//set custom toolbar event lcl event_handler
			// this.cityPopup.attachConfirm(this.onCityConfirm, this);
			// }
			// this.cityPopup.open();
			// // StatusMessage.show("This page is under construction...");
		},
		
		onFilter: function(oEvent){
			this.inputFieldIdonWhichF4inTableWasPressed = oEvent.getSource().getId();
			this.countryPopup = new sap.ui.xmlfragment("modelDemo.fiori.fragments.Popup",this);
			//setting FC
			this.getView().addDependent(this.countryPopup);
			//this statement gives access to all what view knows: all the models which are available at view level
			// the fragment knows all the things known to view
			this.countryPopup.bindAggregation("items",{
				path: "/countries",
				template: new sap.m.StandardListItem({
					title: "{name}",
					description: "{code}"
				})
			});
			this.countryPopup.attachConfirm(this.oCityConfirm, this);
			this.countryPopup.open();
			// StatusMessage.show("This page is under construction...");
		},
		
		onItemSelect: function(oEvent){
			this.getView().byId("idIconTabBar").setSelectedKey("selectCity");
			this.getView().byId("idCity").setValue(oEvent.getSource().getCells()[1].getValue());
			// StatusMessage.show("Your request has been approved successfully!");
		}
		
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf modelDemo.fiori.view.View2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf modelDemo.fiori.view.View2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf modelDemo.fiori.view.View2
		 */
		//	onExit: function() {
		//
		//	}

	});

});