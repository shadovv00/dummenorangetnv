sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("dummenorangetnv.controller.BayOverview", {
	    
	    addUser: function() {
            var oModel = this.getView().getModel("odataModel");
            console.log(oModel);
            // var sPath = "/Users";
            // var oEntry = {};
            // oEntry.GrowerProductionPlanPattern = "GrowerProductionPlanPattern1";
            // oEntry.StartDatePlanning = false;
            // oEntry.Username = "p1941590108";
            
            var sPath = "/GreenhouseBayDescriptions";
            var oEntry = {};
            // oEntry.Id = 2;
            oEntry.Description = "BodjTest";
            oEntry.Language = "en";
            // oEntry.GreenhouseBayDetails = false;
            oModel.create(sPath, oEntry, null, function() {
                MessageToast.show("Create successful");
            }, function() {
                MessageToast.show("Create failed");
            });
	    },

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
			this.byId("date_id").setDateValue(new Date());
			
			var oCore = sap.ui.getCore();
			var oView = this.getView();
			var oModel = oCore.getModel("jm");
			oView.setModel(oModel, "jm");
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
		formatOOGDate: function(oogDate, plantedDate, root, veg, ko, rea, horv) {
		    Date.prototype.getWeek = function() {
                var onejan = new Date(this.getFullYear(), 0, 1);
                return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
            };
		    var aDateParts = plantedDate.split("-");
		    var oDate = new Date(aDateParts[0], aDateParts[1] - 1, aDateParts[2]);
		    var day = oDate.getDate();
		    oDate.setDate(+day + root + veg + rea + ko);
		    var week = oDate.getWeek();
		    var weekStr = week < 10 ? "0" + week : week;
		    var day = oDate.getDay();
		    var dayStr = day === 0 ? 7 : day;
		    return oDate.getFullYear() + "-" + weekStr + "-" + dayStr;
		},
		formatConvertStrToDate: function(date) {
		    var dataParts;
            if(typeof date === "string" && (dataParts = date.split("-")).length === 3) {
                var oDate = new Date(dataParts[0], dataParts[1] - 1, dataParts[2]);
                var oLocal = new sap.ui.core.Locale("nl-NL");
                var dateFormat = sap.ui.core.format.DateFormat.getDateInstance({
                    pattern: "yyyy-ww-u"
                }, oLocal);
                var dateStr = dateFormat.format(oDate);
		        return dateStr;
		    } else {
		        return "no date";
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
			var entry, ttl = 0;
			for (var x = 0; x < data.length; x++) {
			    entry = data[x];
			    if(entry["deleted"]) continue;
				ttl += entry["percent"] * 100;
			}
			return parseInt(ttl);
		},
		calculatePercentFloat: function(data) {
			var entry, ttl = 0;
			for (var x = 0; x < data.length; x++) {
			    entry = data[x];
			    if(entry["deleted"]) continue;
				ttl += entry["percent"] * 100;
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
		onAfterRendering: function() {},
		
		
		goToMultiAddPlants: function(oEvent) {
		    var view = this.getView();
			var app = view.getParent();
			if (sap.ui.getCore().byId("multiAddPlantsPageId") !== undefined) {
				app.to("multiAddPlantsPageId");
			} else {
				var greenhouseSelectPage = sap.ui.view({
					id: "multiAddPlantsPageId",
					viewName: "dummenorangetnv.view.MultipleAddPlants",
					type: sap.ui.core.mvc.ViewType.XML
				});
				app.addPage(greenhouseSelectPage);
				app.to(greenhouseSelectPage);
			}
		},
		onDateChange: function(oEvent) {
		   var oDate = oEvent.getParameters().value;
		   console.log(oDate);
		   
		   var aFilters = [];
		   
		   var oFilter1 = new sap.ui.model.Filter("planted_date", sap.ui.model.FilterOperator.GT, oDate);
		     var oFilter2 = new sap.ui.model.Filter("planted_date", sap.ui.model.FilterOperator.GT, oDate);
		     aFilters.push(oFilter1);
		   
		   	var obayTable = this.getView().byId("bay_table_id");
		   	for (var x = 0; x < aTableItems.length; x++) {
				    //	console.log(aTableItems[x]);
					aTableItems[x].getBinding("rows").filter(aFilters);
				}
		},
		printBay: function() {
		    var jBody = $("body");
		    var jbodyCh = jBody.children(":not(#printId)");
		    var oBayHeader = this.byId("bayOverviewHeader");
		    var oBayDate = this.byId("date_id");
		    var oBayTable = this.byId("bay_table_id");
		    var jBayHeader = oBayHeader.$();
		    var jBayTable = (oBayTable.$()).find("table:not(.-visible-header-table)");
		    var jBayHeaderClone = jBayHeader.clone();
		    var jBayTableClone = jBayTable.clone();
		    jBayHeaderClone.find("*").removeAttr("id");
		    jBayTableClone.find("*").removeAttr("id");
		    
		    if(!jbodyCh.hasClass("no-print")) {
		        jbodyCh.addClass("no-print");
		    }
		    var jPrint = $("#printId");
            if(!!jPrint[0]) {
		        jPrint.html("");
		        jPrint = jBody.children("#printId");
		        jPrint.append(jBayHeaderClone);
		        jPrint.append("<div style='border-top:2px solid black'><p class='print-date-title'>Date:</p><p>" + oBayDate.getValue() + "</p></div>");
    		    jPrint.append(jBayTableClone);
                jBody.append(jPrint);
		    } else {
		        jBody.append("<div id='printId' class='visible-for-print-only'></div>");
		        jPrint = jBody.children("#printId");
		        jPrint.append(jBayHeaderClone);
		        jPrint.append("<div style='border-top:2px solid black'><p class='print-date-title'>Date:</p><p>" + oBayDate.getValue() + "</p></div>");
    		    jPrint.append(jBayTableClone);
                jBody.append(jPrint);
		    }
		    window.print();
		}

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf dummenorangetnv.view.BayOverview
		 */
		//	onExit: function() {
		//
		//	}

	});

});