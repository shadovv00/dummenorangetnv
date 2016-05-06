sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("dummenorangetnv.controller.BayEditor", {

		_oBayFilterDialog: null,
		_sPlantName: null,
		_sDiscriptionValue: null,
		_sPlanningType: null,

		onPrevPage: function(evnt) {
			var view = this.getView();
			var app = view.getParent();
			app.back();
			view.destroy();
		},

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf dummenorangetnv.view.BayOverview
		 */
		onInit: function() {
			var data;
			var jsonModel = new sap.ui.model.json.JSONModel();
			jsonModel.loadData("mockdata/bay.json");
// 			this.byId("date_id").setDateValue(new Date());
			this.getView().setModel(jsonModel);
			var oSelectedBayModel = sap.ui.getCore().getModel("selectedBay");
            this.getView().setModel(oSelectedBayModel,"selectedBay");
		},
		formatDate: function(date) {
		    var aDateParts = date.split("-");
		    var oDate = new Date(aDateParts[0], aDateParts[1] - 1, aDateParts[2]);
		    return oDate;
		},
// 		formatOddWeek: function(date) {
// 		    var dataParts;
// 		    if(typeof date === "string" && (dataParts = date.split("-")).length > 1) {
// 		        return +dataParts[1]%2;
// 		    } else {
// 		        return -1;
// 		    }
// 		},
		formatOddWeek: function(date) {
		    Date.prototype.getWeek = function() {
                var onejan = new Date(this.getFullYear(), 0, 1);
                return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
            };
		    var dataParts;
		    if(typeof date === "string" && (dataParts = date.split("-")).length === 3) {
		        var oDate = new Date(dataParts[0], dataParts[1] - 1, dataParts[2]);
		        return +oDate.getWeek()%2;
		    } else {
		        return -1;
		    }
		},
		formatPercent: function(value) {
			return (value * 100) + "%";
		},
		formatplants: function(plant, erp_plant) {
		    if(+plant !== +erp_plant) {
		        return sap.ui.core.ValueState.Error;
		    } else {
		        return sap.ui.core.ValueState.None;
		    }
		},
		formatPlantedDate: function(planted_date, erp_planted_date) {
		    if(planted_date !== erp_planted_date) {
		        return true;
		    } else {
		        return false;
		    }
		},
		calculatePercentInt: function(data) {
			var ttl = 0;
			for (var x = 0; x < data.length; x++) {
				ttl += +data[x]["percent"] * 100;
			}
			return parseInt(ttl);
		},
		calculatePercentFloat: function(data) {
			var ttl = 0;
			for (var x = 0; x < data.length; x++) {
				ttl += +data[x]["percent"] * 100;
			}
			return ttl;
		},
		formatProcessed: function(value) {
// 			console.log("processed = " + value + " <> " + (typeof value));
			return !value;
		},
		deleteBayRow: function(oEvent) {
		    console.log(oEvent.getSource().getParent().getParent().destroy());
		},
		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf dummenorangetnv.view.BayOverview
		 */
		onExit: function() {
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf dummenorangetnv.view.BayOverview
		 */
		onBeforeRendering: function() {
            var oDateText = this.byId("date_text_id");
            var oThisView = this.getView();
	        oDateText.setText(oThisView.data("overview_date_str"));
		},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf dummenorangetnv.view.BayOverview
		 */
		onAfterRendering: function() {}

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf dummenorangetnv.view.BayOverview
		 */
		//	onExit: function() {
		//
		//	}

	});

});