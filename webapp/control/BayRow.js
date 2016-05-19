sap.ui.define([
	"sap/ui/core/Control"
], function (Control) {
	"use strict";
	return Control.extend("dummenorangetnv.control.BayRow", {
		metadata : {
			properties : {
				"ghbay": {type: "int", defaultValue: -1}
			},
			aggregations : {
				"cells" : {type : "dummenorangetnv.control.BayCell", multiple : true, singularName : "cell"}
			},
			defaultAggregation: "cells"
		},
		init : function () {
		},
		renderer : function (oRM, oControl) {
			var key, x;
			var aCells = oControl.getCells();
			var ghbay = oControl.getGhbay();
			
			oRM.write("<tr");
			oRM.writeControlData(oControl);
// 			oRM.addClass("bay-row-height");
// 			oRM.addClass("bay-row-paddings");
			oRM.writeClasses();
			oRM.write(">");
			if(aCells[0]) {
				aCells[0].setValue(ghbay);
			}
			for(x = 0; x < aCells.length; x++) {
				oRM.renderControl(aCells[x]);
			}
			oRM.write("</tr>");
			
		}
	});
});