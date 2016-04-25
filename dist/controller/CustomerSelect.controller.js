sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("dummenorangetnv.controller.CustomerSelect", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf dummenorangetnv.view.CustomerSelect
		 */
		onInit: function() {

			// //	this.getView().setModel(oModel, "growers");

		},
		onItemSelect: function(oEvent) {

			var growerId = oEvent.getSource().getBindingContext("growers").getProperty("id");
			var app = sap.ui.getCore().byId("__xmlview0").byId("AppId");
			var greenhouseSelectPageId = "greenhouseSelectPage" + growerId;

			if (!app.getPage(greenhouseSelectPageId)) {
				var greenhouseSelectPage = sap.ui.view({
					id: greenhouseSelectPageId,
					viewName: "dummenorangetnv.view.GreenhouseSelect",
					type: sap.ui.core.mvc.ViewType.XML
				});

				var oGrowersList = oEvent.getSource().getBindingContext("growers").getModel().getData().Growers;

				$.each(oGrowersList, function(index) {
					if (oGrowersList[index].id == growerId) {
						var oSelectedGrowerModel = new sap.ui.model.json.JSONModel(oGrowersList[index]);
						sap.ui.getCore().setModel(oSelectedGrowerModel,"selectedGrower");
						sap.ui.getCore().byId(greenhouseSelectPageId).getController().getView().setModel(sap.ui.getCore().getModel("selectedGrower"),
							"selectedGrower");

					}
				});

				app.addPage(greenhouseSelectPage);
				app.to(greenhouseSelectPage);

			} else {
				app.to(greenhouseSelectPageId);
			}

		},

		onSearch: function(oEvt) {

			// add filter for search
			var aFilters = [];
			var sQuery = oEvt.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new sap.ui.model.Filter("name", sap.ui.model.FilterOperator.Contains, sQuery);
				aFilters.push(filter);
			}

			// update list binding
			var list = this.getView().byId("ListId");
			var binding = list.getBinding("items");
			binding.filter(aFilters, "Application");
		},
		
		onHome:function(){
		    	var app = sap.ui.getCore().byId("__xmlview0").byId("AppId");
		    	app.to("__page0");
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf dummenorangetnv.view.CustomerSelect
		 */
		onBeforeRendering: function() {
			if (sap.ui.getCore().getModel("logedAdvisorModel")) {
								this.getView().setModel(sap.ui.getCore().getModel("growers"), "growers");
			} else if (sap.ui.getCore().getModel("logedGrower")) {
		
	//this.getView().setModel(sap.ui.getCore().getModel("growers"), "growers");
				// 		
				var logedGrowerId = sap.ui.getCore().getModel("logedGrower").getData().id;
			
				var oGrowersList = sap.ui.getCore().getModel("growers").getData().Growers;
				var that = this;
				$.each(oGrowersList, function(index) {
					if (oGrowersList[index].id == logedGrowerId) {
						var oGrowers = {
							Growers:[oGrowersList[index]] 
						};
						var oLogedGrowerModel = new sap.ui.model.json.JSONModel(oGrowers);
						that.getView().setModel(oLogedGrowerModel, "growers");
						}
				});
			}
			//}
			// else if(sap.ui.getCore().getModel("logedGrowerAdvisor")) {
			//  	this.getView().setModel(sap.ui.getCore().getModel("growers"), "growers");
			//}

		}

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf dummenorangetnv.view.CustomerSelect
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf dummenorangetnv.view.CustomerSelect
		 */
		//	onExit: function() {
		//
		//	}

	});

});