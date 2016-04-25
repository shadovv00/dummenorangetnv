sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("dummenorangetnv.controller.BayDetailsHeader", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf dummenorangetnv.view.BayDetailsHeader
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf dummenorangetnv.view.BayDetailsHeader
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf dummenorangetnv.view.BayDetailsHeader
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf dummenorangetnv.view.BayDetailsHeader
		 */
		//	onExit: function() {
		//
		//	}
		onBay:function(oEvent) {
			var app = sap.ui.getCore().byId("__xmlview0").byId("AppId");
			var GrowerId = sap.ui.getCore().getModel("selectedGrower").getData().id;
			app.to("greenhouseSelectPage" + GrowerId); 
		},
		onGrower: function(oEvent) {
			var app = sap.ui.getCore().byId("__xmlview0").byId("AppId");
			app.to("customerSelectPageId"); 
		}       

	});

});