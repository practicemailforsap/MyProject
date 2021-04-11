sap.ui.define(
	["sap/ui/core/mvc/Controller"],
	function(Controller) {
		return Controller.extend("modelDemo.fiori.controller.BaseController", {
			//TODO My reuse functions for all child controllers
			
			getAppObject: function(){
				return this.getView().getParent().getParent();
				// return this.getView().getParent();
				// return sap.ui.getCore().byId("idAppView--myApp");
			}
			
		});
	});