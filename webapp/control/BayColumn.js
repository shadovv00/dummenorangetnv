sap.ui.define([
	"sap/ui/core/Control"
], function (Control) {
	"use strict";
	return Control.extend("dummenorangetnv.control.BayColumn", {
		metadata : {
			properties : {
				"text": {type : "string", defaultValue: ""},
				"width": {type : "sap.ui.core.CSSSize"},
				"colspan": {type: "int", defaultValue: 1}
			}
		},
		init : function () {
		},
		renderer : function (oRM, oControl) {
		    var colspan = oControl.getColspan();
		    
			oRM.write("<th");
			oRM.writeControlData(oControl);
// 			oRM.addClass("bay-row-paddings");
			oRM.addClass("bay-row-border-bottom");
			oRM.writeClasses();
			oRM.addStyle("width", oControl.getWidth());
			oRM.writeStyles();
			if(colspan > 1) {
			    oRM.write(" colspan='" + colspan + "' ");
			}
			oRM.write(">" + oControl.getText() + "</th>");
		}
	});
});