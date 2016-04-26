sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("dummenorangetnv.controller.BayOverview", {

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

		onHomePage: function(evnt) {
			var view = this.getView();
			var app = view.getParent();
			app.to("__page0");
// 			view.destroy();
		},

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf dummenorangetnv.view.BayOverview
		 */
		onInit: function() {
		    var weekcolor = [
		            "#e6f2ff", "#cce5ff", "#b3d7ff", "#99caff",
		            "#e6fffa", "#b3fff0", "#99ffeb", "#99ffeb"
		        ];
		    var weekcolor2types = ["#ffcbb3", "#ccffcc"];
			var data;
			var jsonModel = new sap.ui.model.json.JSONModel(data = {
				data: [{
					gh_bay: 5,
					comments: "hike",
					plant: [{
						name: "001 Feeling green dark",
						percent: 0.5,
						plants: 16218,
						erp_plants: 16218,
						density: 47,
						planted_date: "2016-01-5",
						erp_planted_date: "2016-01-5",
						root: 0,
						veg: 12,
						rea: 54,
						horv: 1,
						oog_date: "2016-10-1",
						vaca: 1,
						processed: false
					}]
				}, {
					gh_bay: 6,
					comments: "hike hike",
					plant: [{
						name: "001 Feeling green dark",
						percent: 1.0,
						plants: 32436,
						erp_plants: 32435,
						density: 47,
						planted_date: "2016-01-6",
						erp_planted_date: "2016-01-6",
						root: 0,
						veg: 12,
						rea: 54,
						horv: 1,
						oog_date: "2016-10-2",
						vaca: 1,
						processed: true
					}, {
						name: "015 Grand cherry",
						percent: 0.002,
						plants: 102,
						erp_plants: 102,
						density: 50,
						planted_date: "2016-01-6",
						erp_planted_date: "2016-01-6",
						root: 0,
						veg: 12,
						rea: 54,
						horv: 1,
						oog_date: "2016-10-7",
						vaca: 3,
						processed: true
					}]
				}, {
					gh_bay: 7,
					comments: "empty hike",
					plant: []
				}, {
					gh_bay: 8,
					comments: "hike 8",
					plant: [{
						name: "004 Talitha",
						percent: 1.0,
						plants: 32436,
						erp_plants: 32436,
						density: 45,
						planted_date: "2016-01-7",
						erp_planted_date: "2016-01-8",
						root: 0,
						veg: 13,
						rea: 55,
						horv: 1,
						oog_date: "2016-10-3",
						vaca: 1,
						processed: true
					}]
				}, {
					gh_bay: 9,
					comments: "like 9",
					plant: [{
						name: "001 Feeling green dark",
						percent: 1.0,
						plants: 32436,
						erp_plants: 32436,
						density: 47,
						planted_date: "2016-02-1",
						erp_planted_date: "2016-02-1",
						root: 0,
						veg: 11,
						rea: 54,
						horv: 1,
						oog_date: "2016-10-4",
						vaca: 1,
						processed: true
					}]
				}, {
					gh_bay: 10,
					comments: "obscure 10",
					plant: [{
						name: "001 Feeling green dark",
						percent: 1.0,
						plants: 32436,
						erp_plants: 32436,
						density: 47,
						planted_date: "2016-02-2",
						erp_planted_date: "2016-02-2",
						root: 0,
						veg: 11,
						rea: 54,
						horv: 1,
						oog_date: "2016-10-5",
						vaca: 1,
						processed: true
					}]
				}, {
					gh_bay: 11,
					comments: "obscure 11 empty again",
					plant: []
				}, {
					gh_bay: 12,
					comments: "eventually 12",
					plant: [{
						name: "001 Feeling green dark",
						percent: 0.3,
						plants: 10436,
						erp_plants: 10436,
						density: 47,
						planted_date: "2016-02-2",
						erp_planted_date: "2016-02-2",
						root: 0,
						veg: 11,
						rea: 54,
						horv: 1,
						oog_date: "2016-10-5",
						vaca: 1,
						processed: true
					}, {
						name: "001 Feeling green dark1",
						percent: 0.26,
						plants: 6436,
						erp_plants: 6435,
						density: 47,
						planted_date: "2016-02-2",
						erp_planted_date: "2016-02-2",
						root: 0,
						veg: 11,
						rea: 54,
						horv: 1,
						oog_date: "2016-10-5",
						vaca: 1,
						processed: true
					}, {
						name: "001 Feeling DDD",
						percent: 0.5,
						plants: 16436,
						erp_plants: 16436,
						density: 47,
						planted_date: "2016-02-2",
						erp_planted_date: "2016-02-2",
						root: 0,
						veg: 11,
						rea: 54,
						horv: 1,
						oog_date: "2016-10-5",
						vaca: 1,
						processed: true
					}]
				}, {
					gh_bay: 13,
					comments: "September",
					plant: [{
						name: "001 Feeling green dark",
						percent: 1.0,
						plants: 32436,
						erp_plants: 32436,
						density: 47,
						planted_date: "2016-02-2",
						erp_planted_date: "2016-02-2",
						root: 0,
						veg: 11,
						rea: 54,
						horv: 1,
						oog_date: "2016-10-5",
						vaca: 1,
						processed: true
					}]
				}]
				
			});
			this.byId("date_id").setDateValue(new Date());
			this.getView().setModel(jsonModel);
			var oSelectedBayModel = sap.ui.getCore().getModel("selectedBay");
            this.getView().setModel(oSelectedBayModel,"selectedBay");
            
            	var oFilterSelectData = {
				filterData: [{
					name: "001 Feeling green dark"
				}, {
					name: "015 Grand cherry"
				}, {
					name: "004 Talitha"
				}, {
					name: "001 Feeling DDD"
				}]
			};
            
			var filterModel= new sap.ui.model.json.JSONModel(oFilterSelectData);
	
					this.getView().setModel(filterModel,"plants");
				
		},
		formatOddWeek: function(date) {
		    console.log(date);
		    var dataParts;
		    if(typeof date === "string" && (dataParts = date.split("-")).length > 1) {
		        return +dataParts[1]%2;
		    } else {
		        return -1;
		    }
		},
		formatPercent: function(value) {
			return value * 100;
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
		goToDetailView: function() {
			var app = sap.ui.getCore().byId("__xmlview0").byId("AppId");
			if (sap.ui.getCore().byId("bayDetailsPageId") !== undefined) {
				app.to("bayDetailsPageId");
			} else {
				var bayDetailsPage = sap.ui.view({
					id: "bayDetailsPageId",
					viewName: "dummenorangetnv.view.BayDetails",
					type: sap.ui.core.mvc.ViewType.XML
				});
				app.addPage(bayDetailsPage);
				app.to(bayDetailsPage);
			}
		},
		_getBayFilterDialog: function() {
			if (!this._oBayFilterDialog) {
				this._oBayFilterDialog = sap.ui.xmlfragment("dummenorangetnv.fragments.BayFilterDialog", this);
				this.getView().addDependent(this._oBayFilterDialog);
			}
			return this._oBayFilterDialog;
		},

		doFiltering: function() {
			this._getBayFilterDialog().open();
		},

		onDataFilter: function(oEvent) {
			console.log(this._sPlantName);
			console.log(this._sPlanningType);
			console.log(this._sDiscriptionValue);

			var aFilters = [];
			// update list binding
			var obayTable = this.getView().byId("bay_table_id");
			
			var aTableItems = obayTable.getItems();
				
			if(this._sDiscriptionValue !=null && this._sDiscriptionValue.trim().length > 0) {
			    console.log("DS");
			    var oDiscriptionFilter = new sap.ui.model.Filter("discription", sap.ui.model.FilterOperator.Contains, this._sDiscriptionValue);
			    aFilters.push(oDiscriptionFilter);
			}	
				
			if (this._sPlanningType != "-" && this._sPlanningType != null) {
				console.log("sPT");
				var oPlanningTypeFilter = new sap.ui.model.Filter("planingType", sap.ui.model.FilterOperator.EQ, this._sPlanningType);
				aFilters.push(oPlanningTypeFilter);
			}
			if (this._sPlantName != null) {
				console.log("sPN");
				var oPlantNameFilter = new sap.ui.model.Filter("name", sap.ui.model.FilterOperator.Contains, this._sPlantName);
				aFilters.push(oPlantNameFilter);

			}
			console.log(aFilters.length);
			if (aFilters.length > 0) {
				for (var x = 0; x < aTableItems.length; x++) {
				    //	console.log(aTableItems[x]);
					aTableItems[x].getBinding("rows").filter(aFilters);
				}
			}

			this._getBayFilterDialog().close();
		},
		onPlantChange: function(oEvent) {
			this._sPlantName = oEvent.getSource().getSelectedKey();

		},
		onInput: function(oEvent) {
			this._sDiscriptionValue = oEvent.getSource().getValue();
		},
		onPlanningtypChange: function(oEvent) {
			this._sPlanningType = oEvent.getSource().getSelectedKey();
		},

		onClose: function() {
			this._getBayFilterDialog().close();
		},
		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf dummenorangetnv.view.BayOverview
		 */
		onExit: function() {
			this._oBayFilterDialog.destroy();
		},
		goToEditor: function() {
		    var view = this.getView();
			var app = view.getParent();
			var oBayEditorView;
			var oDatePicker = this.byId("date_id");
			if (sap.ui.getCore().byId("BayEditorId")) {
				app.to("BayEditorId");
			} else {
			    oBayEditorView = sap.ui.view({
					id: "BayEditorId",
					viewName: "dummenorangetnv.view.BayEditor",
					type: sap.ui.core.mvc.ViewType.XML
				});
				console.log(oBayEditorView);
				console.log("current date > " + oDatePicker.getValue());
				oBayEditorView.data("overview_date_str", oDatePicker.getValue());
				app.addPage(oBayEditorView);
				app.to(oBayEditorView);
			}  
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf dummenorangetnv.view.BayOverview
		 */
		//	onBeforeRendering: function() {
		//
		//	},

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