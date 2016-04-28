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
		    var jsonModel = new sap.ui.model.json.JSONModel();
			jsonModel.loadData("mockdata/bay.json");
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
		convertToYYYYwwdd: function(date) {
		    Date.prototype.getWeek = function() {
                var onejan = new Date(this.getFullYear(), 0, 1);
                return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7) - 1;
            };
            var dataParts;
		    if(typeof date === "string" && (dataParts = date.split("-")).length === 3) {
		        var oDate = new Date(dataParts[0], dataParts[1] - 1, dataParts[2]);
		        var day = oDate.getDay();
		        var week = oDate.getWeek();
		        if(day === 0) { day = 7; }
		        if(week < 10) { week = "0" + week; }
		        return dataParts[0] + "-" +week + "-" + day;
		    } else {
		        return 'no date';
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
			if (sap.ui.getCore().byId("bayDetailsPageId")) {
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