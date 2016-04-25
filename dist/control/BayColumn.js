sap.ui.define([
	"sap/ui/core/Control"
], function (Control) {
	"use strict";
	return Control.extend("dummenorangetnv.control.BayColumn", {
		metadata : {
			properties : {
				"text": {type : "string", defaultValue: ""},
				"width": {type : "sap.ui.core.CSSSize"}
			}
		},
		init : function () {
		},
		renderer : function (oRM, oControl) {
			oRM.write("<th");
			oRM.writeControlData(oControl);
			oRM.addClass("bay-row-paddings");
			oRM.addClass("bay-row-border-bottom");
			oRM.writeClasses();
			oRM.addStyle("width", oControl.getWidth());
			oRM.write(">" + oControl.getText() + "</th>");
		}
	});
});