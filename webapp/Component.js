sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"dummenorangetnv/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("dummenorangetnv.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			var jsonModel = new sap.ui.model.json.JSONModel();
			jsonModel.loadData("mockdata/bay.json");
			var oCore = sap.ui.getCore();
			oCore.setModel(jsonModel, "jm");
		}
	});

});