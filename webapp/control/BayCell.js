sap.ui.define([
    "sap/ui/core/Control",
	"sap/ui/commons/ProgressIndicator",
	"sap/m/Button"
], function (Control, ProgressIndicator, Button) {
	"use strict";
	return Control.extend("dummenorangetnv.control.BayCell", {
		metadata : {
			properties : {
				"value": {type : "string", defaultValue : ""},
				"square": {type: "number", defaultValue: -1},
				"colspan": {type : "int", defaultValue : 1},
				"rederror": {type : "boolean", defaultValue: false},
				"width" : {type : "sap.ui.core.CSSSize"}
			},
			aggregations : {
				"content" : {type : "sap.ui.core.Control", multiple : false}
			},
			defaultAggregation: "content"
		},
		init : function () {
		},
		renderer : function (oRM, oControl) {
			var value = oControl.getValue();
			var colspan = oControl.getColspan();
			var rederror = oControl.getRederror();
			var width = oControl.getWidth();
			var square = oControl.getSquare();
			
			var oContent = oControl.getContent();
			
			oRM.write("<td");
			oRM.writeControlData(oControl);
			if(colspan > 1) {
			    oRM.write(" colspan='" + colspan + "' ");
			}
			oRM.writeClasses();
			if(rederror) {
			    oRM.addStyle("color", "red");
			}
			oRM.addStyle("font-size", "0.875rem");
			oRM.addStyle("width", width);
			oRM.writeStyles();
			oRM.write(">");
			if(oContent) {
			    oRM.renderControl(oContent);
			} else {
			    if(+value && +value !== -1) {
    			    oRM.write(value);
    			}
			}
			oRM.write("</td>");
		}
	});
});