sap.ui.define([],function(){
	sap.m.Button.extend("modelDemo.fiori.controls.AmazingButton",{
		metadata: {
			properties: {
				"zangoora":""	
			},
			events: {
				"anubhav": {}
			}
		},
		init: function(){},
		renderer: {},
		onmouseover: function(){
			this.fireAnubhav();
		}
	});
});