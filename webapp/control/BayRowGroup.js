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
				"ftRows" : {type : "dummenorangetnv.control.BayRow", multiple : true, singularName : "ftrow"},
				"emptyRow" : {type : "dummenorangetnv.control.BayRow", multiple : false}
			},
			defaultAggregation: "rows"
		},
		init: function() {},
		renderer: function(oRM, oControl) {
			var key, x;
			var aRows = oControl.getRows();
			var aFtRows = oControl.getFtRows();
			var aEmptyRow = oControl.getEmptyRow();
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
				    aRows[x].addStyleClass("just-for-arrow-navigation");
					oRM.renderControl(aRows[x]);
				}
			} else if(aEmptyRow) {
			    aEmptyRow.setGhbay(ghbay);
			    oRM.renderControl(aEmptyRow);
			}
			for(x = 0; x < aFtRows.length; x++) {
			    oRM.renderControl(aFtRows[x]);
			}
			oRM.write("</tbody>");
		},
		onAfterRendering: function() {
		    var jGroup = this.$();
		    var jPrevGroup = jGroup.prev();
		    var oddweek = this.getOddweek();
		    if(jPrevGroup[0] && oddweek !== -1) {
		        if(jPrevGroup.hasClass("bay-week-colour0")) {
		            this.addStyleClass("bay-week-colour0");
		        } else if(jPrevGroup.hasClass("bay-week-colour1")) {
		            this.addStyleClass("bay-week-colour1");
		        }
		    }
		}
	});
});