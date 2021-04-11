sap.ui.define([],function(){
	
	sap.ui.core.Control.extend("modelDemo.fiori.controls.CustomControl",{
		
		//metadata
		metadata: {
			properties: {
			"mario" : "" ,
			"color" : "",
			"zumba" : ""
			},
			methods:{},
			events: {}
		},
		init: function(){
			this.setColor("blue");	
		},
		renderer: function(oRm,oControl){
			//Talk to browser and hey browser can you put a heasing tag to me.
			//oRm.write("<h1 style='color:" + oControl.getColor()+"'><em>"+ oControl.getMario() +"</em></h1>");
			oRm.write("<h1");
			oRm.addStyle("color", oControl.getColor());
			oRm.addStyle("border", oControl.getZumba());
			oRm.writeStyles();
			oRm.write(">" + oControl.getMario() + "</h1>");
		}
		
	});
	
});