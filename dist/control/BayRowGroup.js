sap.ui.define([
	"sap/ui/core/Control",
	"sap/ui/commons/ProgressIndicator",
	"sap/m/Button",
	"dummenorangetnv/control/BayRow",
	"dummenorangetnv/control/BayCell",
	"sap/m/ObjectNumber",
	"sap/m/Text"
], function(Control, ProgressIndicator, Button, BayRow, BayCell, ObjectNumber, Text) {
	"use strict";
	return Control.extend("dummenorangetnv.control.BayRowGroup", {
		metadata: {
			properties: {
				"ghbay": {type: "int", defaultValue: 0},
				"comments": {type: "string", defaultValue: ""},
				"oddweek": {type: "int", defaultValue: -1}
			},
			aggregations : {
				"rows" : {type : "dummenorangetnv.control.BayRow", multiple : true, singularName : "row"},
				"ftcells" : {type : "dummenorangetnv.control.BayCell", multiple : true, singularName : "ftcell"}
			},
			defaultAggregation: "rows"
		},
		init: function() {},
		renderer: function(oRM, oControl) {
			var key, x;
			var aRows = oControl.getRows();
			var aFtCells = oControl.getFtcells();
			var ghbay = oControl.getGhbay();
			var oddweek = oControl.getOddweek();
			var ttlPercent = 0;
			
			oRM.write("<tbody");
			oRM.writeControlData(oControl);
			oRM.addStyle("border-bottom", "2px solid black");
			oRM.writeStyles();
			if(oddweek === 1) {
			    oRM.addClass("bay-week-colour0");
			} else if(oddweek === 0) {
			    oRM.addClass("bay-week-colour1");
			}
			oRM.writeClasses();
			oRM.write(">");
			if(aRows.length) {
			    aRows[0].setGhbay(ghbay);
				for(x = 0; x < aRows.length; x++) {
					oRM.renderControl(aRows[x]);
				}
			} else {
				oRM.renderControl(new BayRow({
					ghbay: ghbay,
					cells: [
					    new BayCell({
					        content: new ObjectNumber({
					            number: ghbay,
					            emphasized: false
					        })
					    }),
					    new BayCell({
					        colspan: 11,
					        content: new Text({
					            text: "EMPTY",
					            textAlign: sap.ui.core.TextAlign.Center
					        })
					    }).addStyleClass("-bay-empty-cell")]
				}));
			}
			oRM.write("<tr");
// 			oRM.addClass("bay-row-height");
			oRM.addClass("bay-row-paddings");
			oRM.writeClasses();
			oRM.write(">");
			for(x = 0; x < aFtCells.length; x++) {
			    oRM.renderControl(aFtCells[x]);
			}
			oRM.write("</tr>");
			oRM.write("</tbody>");
		}
	});
});