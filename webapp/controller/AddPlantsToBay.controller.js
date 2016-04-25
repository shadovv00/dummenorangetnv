sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("dummenorangetnv.controller.AddPlantsToBay", {
		addPlantsMockup: {
			Growers: {
					name: "Van Os Chrysanten C.V.",
					address: {
						street: "Harenwert 48",
						city: "1000 AA Maasland"
					},
					phoneNumber: "06 12345678",
					imgUrl: "sap-icon://sys-add"
					},
			Bay: {
					GH_bay: 6,
					square: 75,
					description: 'left'
					},
			dateToDay : new Date(),
			dateEnd : new Date(),
			Plants: [
					{id: '001',
					name: "Feeling green dark",
					Rooting: 0,
					LongDays: 12,
					Reaction: 54,
					HarvestDays: 1,
					VacantDays: 0
					},
					{id: '015',
					name: "Grand cherry",
					Rooting: 0,
					LongDays: 12,
					Reaction: 52,
					HarvestDays: 1,
					VacantDays: 0
					}
				]
		},
		
		

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf dummenorangetnv.view.AddPlantsToBay
		 */
			onInit: function() {
				var oSelectedBayModel = sap.ui.getCore().getModel("selectedBay");
				this.getView().setModel(oSelectedBayModel,"selectedBay");
				var oModel = new sap.ui.model.json.JSONModel(this.addPlantsMockup);
				this.getView().setModel(oModel,"mainAddPlantModel");
			},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf dummenorangetnv.view.AddPlantsToBay
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf dummenorangetnv.view.AddPlantsToBay
		 */
			onAfterRendering: function() {
				this.onPlantChange();
			},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf dummenorangetnv.view.AddPlantsToBay
		 */
		//	onExit: function() {
		//
		//	}
		
	onPrevPage: function(oEvent){
		var app=sap.ui.getCore().byId("__xmlview0").byId("AppId");
		app.to(app.getPreviousPage().getId());	
	},
	
	
	onPlantChange: function(oEvent){
		var plantId = this.getView().byId("plantSelectorId").getSelectedKey();
		var that=this;
		var thisPlant;
		$.each(this.getView().getModel("mainAddPlantModel").getData().Plants, function (index, plant) {
	    if (plant.id === plantId) {
	    	thisPlant= plant;
	    	that.getView().byId("plantRootingDaysId").setValue(plant.Rooting);                         
	    	that.getView().byId("plantLongDaysId").setValue(plant.LongDays);                         
	    	that.getView().byId("plantReactionDaysId").setValue(plant.Reaction);                         
	    	that.getView().byId("plantHarvestDaysId").setValue(plant.HarvestDays);                         
	    	that.getView().byId("plantVacantDaysId").setValue(plant.VacantDays); 
	    	that.onDataChange();
	    }
		});
	},
	
	
	onDataChange: function(oEvent){
		
		var plantedDate =	new Date(this.getView().byId("plantDatePickerId").getDateValue());
	    var rootingDays =	parseInt(this.getView().byId("plantRootingDaysId").getValue());                         
	    var longDays =		parseInt(this.getView().byId("plantLongDaysId").getValue());                         
	    var reactionDays =	parseInt(this.getView().byId("plantReactionDaysId").getValue());                         
	    var harvestDays =	parseInt(this.getView().byId("plantHarvestDaysId").getValue());                         
	    var vacantDays =	parseInt(this.getView().byId("plantVacantDaysId").getValue());         
	    
		plantedDate.setDate(plantedDate.getDate()+rootingDays+longDays+reactionDays+harvestDays);
		this.getView().getModel("mainAddPlantModel").getData().dateEnd=plantedDate;
		this.getView().getModel("mainAddPlantModel").refresh(true);
	},
	
	
	onSavePlant: function(oEvent){
		var app=sap.ui.getCore().byId("__xmlview0").byId("AppId");
		
	    var plants =	parseInt(this.getView().byId("plantNumberId").getValue());                         
	    var square =	parseInt(this.getView().byId("plantedSquareId").getValue());
	    var percent=plants*1000/(square*this.getView().getModel("mainAddPlantModel").getData().Bay.square);
	    percent=Math.round(percent)/10;
	    if (percent>100){
	    	sap.m.MessageToast.show('Available square exceeded');
	    }else{
			var id=this.getView().byId("plantSelectorId").getSelectedKey();
			var name=this.getView().byId("plantSelectorId").getSelectedItem().getProperty("text");
			name=name.substring(name.indexOf(" ")+1);
			var plantedDate =	new Date(this.getView().byId("plantDatePickerId").getDateValue());
		    var root =	parseInt(this.getView().byId("plantRootingDaysId").getValue());                         
		    var veg =		parseInt(this.getView().byId("plantLongDaysId").getValue());                         
		    var rea =	parseInt(this.getView().byId("plantReactionDaysId").getValue());                         
		    var harv =	parseInt(this.getView().byId("plantHarvestDaysId").getValue());                         
		    var vaca =	parseInt(this.getView().byId("plantVacantDaysId").getValue());         
			var oog = new Date();
			oog.setDate(plantedDate.getDate()+root+veg+rea);
			sap.ui.getCore().byId(app.getPreviousPage().getId()).getController().getView().getModel("bayDetailModel").getData().PlantsInBay.push({
				id: '001',
				name: "Feeling green dark",
				plants: plants,
				square: square,
				percent: percent,
				plantedDate: plantedDate,
				root: root,
				veg: veg,
				rea: rea,
				harv: harv,
				oog: oog,
				vaca: vaca,
				deleted:false
			});
			sap.ui.getCore().byId(app.getPreviousPage().getId()).getController().getView().getModel("bayDetailModel").refresh(true);
			sap.m.MessageToast.show('Plants added');
			app.to(app.getPreviousPage().getId());	
	    }
	}
		

	});

});