sap.ui.define([
	"sap/ui/core/Control",
	"dummenorangetnv/control/BayRowGroup"
], function (Control, BayRowGroup) {
	"use strict";
	return Control.extend("dummenorangetnv.control.BayTable", {
		metadata : {
			properties: {
				"width" : {type : "sap.ui.core.CSSSize", defaultValue : "99.9%"},
				"minWidth" : {type : "sap.ui.core.CSSSize", defaultValue : "99.9%"}
				// "height" : {type : "sap.ui.core.CSSSize", defaultValue : "100%"}	
			},
			aggregations : {
				"columns" : {type : "dummenorangetnv.control.BayColumn", multiple : true, singularName : "column"},
				"items" : {type : "dummenorangetnv.control.BayRowGroup", multiple : true, singularName : "bayRowGroup"}
			},
			defaultAggregation: "items"
		},
		init : function () {
			var oControl = this;
			$(window).resize(function() {
				oControl.onAfterRendering();
			});
		},
		renderer : function (oRM, oControl) {
			var key, x;
			var aColumns = oControl.getColumns();
			var aBayRowGroups = oControl.getItems();
			var width = oControl.getWidth();
			var minWidth = oControl.getMinWidth();
			
			oRM.write("<div");
			oRM.writeControlData(oControl);
			oRM.addClass("bay-table-outer-wrapper");
			oRM.writeClasses();
			oRM.write(">");
			
			oRM.write("<table");
			oRM.addClass("-visible-header-table");
			oRM.addClass("bay-table");
			oRM.writeClasses();
			oRM.addStyle("width", width);
			oRM.addStyle("min-width", minWidth);
			oRM.writeStyles();
			oRM.write(">");
			oRM.write("<thead>");
			oRM.write("<tr");
			oRM.addClass("-visible-header");
			oRM.addClass("bay-row");
			oRM.writeClasses();
			oRM.write(">");
			for(x = 0; x < aColumns.length; x++) {
			    oRM.write("<th>" + aColumns[x].getText() + "</th>");
				// oRM.renderControl(aColumns[key]);
			}
			oRM.write("</tr></thead>");
			oRM.write("</table>");
			
			oRM.write("<div");
			oRM.addClass("bay-table-inner-wrapper");
			oRM.writeClasses();
			oRM.write(">");
			oRM.write("<table");
			oRM.addClass("bay-table");
			oRM.addClass("bay-table-cell-paddings");
			oRM.writeClasses();
			oRM.addStyle("width", width);
			oRM.addStyle("min-width", minWidth);
			oRM.writeStyles();
			oRM.write(">");
			
			oRM.write("<thead><tr");
			oRM.addClass("-invisible-header");
			oRM.writeClasses();
			oRM.write(">");
			for(x = 0; x < aColumns.length; x++) {
				oRM.renderControl(aColumns[x]);
			}
			oRM.write("</tr></thead>");
			for(x = 0; x < aBayRowGroups.length; x++) {
				oRM.renderControl(aBayRowGroups[x]);
			}
			oRM.write("</table>");
			oRM.write("</div>");
			oRM.write("</div>");
		},
		onAfterRendering: function () {
			var oThisBay = this, jThisBay;
			var jHeader1, jHeader2, jHeaderTr1, jHeaderTr2, jTable2;
			if(oThisBay.sId) {
				jThisBay = $("#" + oThisBay.sId);
				jTable2 = jThisBay.find("table.-visible-header-table");
				jHeaderTr1 = jThisBay.find("tr.-invisible-header");
				jHeaderTr2 = jThisBay.find("tr.-visible-header");
				jHeader1 = jHeaderTr1.find("th");
				jHeader2 = jHeaderTr2.find("th");
				if($(jTable2).width() !== $(jHeaderTr1).width()) {
					$(jTable2).width($(jHeaderTr1).width());
					for(var x = 1; x < jHeader1.length; x++) {
						$(jHeader2[x]).width($(jHeader1[x]).width() + 1);
				// 		console.log(jHeader1[x].clientWidth + " == " + $(jHeader1[x]).width() + " <> " + jHeader2[x].clientWidth + " == " + $(jHeader2[x]).width());
					}
				}
			}
        }
	});
});