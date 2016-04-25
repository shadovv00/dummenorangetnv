sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("dummenorangetnv.controller.GreenhouseSelect", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf dummenorangetnv.view.GreenhouseSelect
		 */
		onInit: function() {
			// var oModel = sap.ui.getCore().getModel("selectedGrower");                          
			// this.getView().setModel(oModel,"selectedGrower");
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf dummenorangetnv.view.GreenhouseSelect
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf dummenorangetnv.view.GreenhouseSelect
		 */
		// onAfterRendering: function() {
		// 	var oModel = this.getView().getModel("selectedGrower");
		// 	console.log(oModel);
		// },

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf dummenorangetnv.view.GreenhouseSelect
		 */
		//	onExit: function() {
		//
		//	}

		onHome: function(oEvent) {
		    console.log("aasda");
		    var app = sap.ui.getCore().byId("__xmlview0").byId("AppId");
			app.to("__page0");
		},

		onBack: function(oEvent) {
			var app = sap.ui.getCore().byId("__xmlview0").byId("AppId");
			app.to("customerSelectPageId");
		},

		onBaySelect: function(oEvent) {

			var oGrower = oEvent.getSource().getBindingContext("selectedGrower").getModel().getData();

			var bayId = oEvent.getSource().getBindingContext("selectedGrower").getProperty("id");
			var growerId = oGrower.id;
			var app = sap.ui.getCore().byId("__xmlview0").byId("AppId");

			var bayOverviewPageId = "bayOverviewPage" + growerId + bayId;
			if (!app.getPage(bayOverviewPageId)) {

				var oBayList = oEvent.getSource().getBindingContext("selectedGrower").getModel().getData().bays;

				$.each(oBayList, function(index) {
					if (oBayList[index].id === bayId) {
						var oSelectedBay = oBayList[index];

						var oData = {
							grower: oGrower,
							bay: oSelectedBay
						};

						var oSelectedBayModel = new sap.ui.model.json.JSONModel(oData);
						sap.ui.getCore().setModel(oSelectedBayModel, "selectedBay");
					}
				});

				var bayOverviewPage = sap.ui.view({
					id: bayOverviewPageId,
					viewName: "dummenorangetnv.view.BayOverview",
					type: sap.ui.core.mvc.ViewType.XML
				});

				app.addPage(bayOverviewPage);
				app.to(bayOverviewPage);

			} else {
				app.to(bayOverviewPageId);
			}
		}

	});

});