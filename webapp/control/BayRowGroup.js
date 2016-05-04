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
				"ftRows" : {type : "dummenorangetnv.control.BayRow", multiple : true, singularName : "ftrow"}
			},
			defaultAggregation: "rows"
		},
		init: function() {},
		renderer: function(oRM, oControl) {
			var key, x;
			var aRow = oControl.getRows();
			var aFtRows = oControl.getFtRows();
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
			if(aRow.length) {
			    aRow[0].setGhbay(ghbay);
				for(x = 0; x < aRow.length; x++) {
					oRM.renderControl(aRow[x]);
				}
			} else {
				oRM.renderControl(new BayRow({
					ghbay: ghbay,
					cells: [
                    new BayCell({
                        
                    }),
                    new BayCell({
                        colspan: 12,
                        content: new Text({
                            text: "EMPTY",
                            textAlign: sap.ui.core.TextAlign.Center
                        })
                    }).addStyleClass("-bay-empty-cell")]
				}));
			}
			for(x = 0; x < aFtRows.length; x++) {
			    oRM.renderControl(aFtRows[x]);
			}
			oRM.write("</tbody>");
		}
	});
});