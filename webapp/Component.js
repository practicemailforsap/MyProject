sap.ui.define(
	["sap/ui/core/UIComponent"],
	function(UIComponent) {
		return UIComponent.extend("modelDemo.fiori.Component", {
			metadata: {
				"manifest" : "json"
			},
			init: function() {
				//calling the baseclass constructor.
				//Why? --> the standard base class creates lots of free objects for us.
				//free object - Router - will be used for navigation b/w views
				UIComponent.prototype.init.apply(this);
				var oRouter = this.getRouter();
				oRouter.initialize();
			},
			//Can be written in manifest
			// createContent: function() {
			// 	var oAppView = new sap.ui.view({
			// 		id: "idAppView",
			// 		viewName: "modelDemo.fiori.view.App",
			// 		type: sap.ui.core.mvc.ViewType.XML
			// 	});
			// 	return oAppView;
			// },
			destroy: function() {

			}
		});
	});