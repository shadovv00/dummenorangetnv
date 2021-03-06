sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/m/Dialog',
	'sap/m/Button',
	'sap/m/Text'
], function(Controller, Dialog, Button, Text) {
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
			var oCore = sap.ui.getCore();
			var oModel = oCore.getModel("jm");
			var oCopyModel = new sap.ui.model.json.JSONModel();
			var json1 = oModel.getJSON();
			oCopyModel.setJSON(json1);
			this.getView().setModel(oCopyModel);
			var oSelectedBayModel = sap.ui.getCore().getModel("selectedBay");
			this.getView().setModel(oSelectedBayModel, "selectedBay");
		},
		formatDate: function(date) {
			var aDateParts = date.split("-");
			var oDate = new Date(aDateParts[0], aDateParts[1] - 1, aDateParts[2]);
			return oDate;
		},
		formatOOGDate: function(oogDate, plantedDate, root, veg, ko, rea, horv) {
			var aDateParts = plantedDate.split("-");
			var oDate = new Date(aDateParts[0], aDateParts[1] - 1, aDateParts[2]);
			var day = oDate.getDate();

			var rootInt = parseInt(root);
			var vegInt = parseInt(veg);
			var koInt = parseInt(ko);
			var reaInt = parseInt(rea);
			var horvInt = parseInt(horv);

			rootInt = isNaN(rootInt) ? 0 : rootInt;
			vegInt = isNaN(vegInt) ? 0 : vegInt;
			koInt = isNaN(koInt) ? 0 : koInt;
			reaInt = isNaN(reaInt) ? 0 : reaInt;
			horvInt = isNaN(horvInt) ? 0 : horvInt;

			var daySum = rootInt + vegInt + koInt + reaInt + horvInt;
			oDate.setDate(daySum);
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
			if (typeof date === "string" && (dataParts = date.split("-")).length === 3) {
				var oDate = new Date(dataParts[0], dataParts[1] - 1, dataParts[2]);
				return +oDate.getWeek() % 2;
			} else {
				return -1;
			}
		},
		formatPercent: function(value) {
			return Math.round(value * 10000)/100 + "%";
		},
		calculatePlants: function(percent, square, density, plants) {
			var maxPlants = square * density;
			return maxPlants * percent;
		},
		formatplants: function(plant, erp_plant) {
			if (+plant !== +erp_plant) {
				return sap.ui.core.ValueState.Error;
			} else {
				return sap.ui.core.ValueState.None;
			}
		},
		formatPlantedDate: function(planted_date, erp_planted_date) {
			if (planted_date !== erp_planted_date) {
				return true;
			} else {
				return false;
			}
		},
		calculatePercentInt: function(data) {
			var entry, ttl = 0;
			for (var x = 0; x < data.length; x++) {
				entry = data[x];
				if (entry["deleted"]) continue;
				ttl += entry["percent"] * 100;
			}
			return parseInt(ttl);
		},
		calculatePercentFloat: function(data) {
			var entry, ttl = 0, val;
			for (var x = 0; x < data.length; x++) {
				entry = data[x];
				if (entry["deleted"]) continue;
				val = Math.round(entry["percent"] * 10000)/100;
				ttl += val;
			}
			return ttl;
		},
		formatProcessed: function(value) {
			// 			console.log("processed = " + value + " <> " + (typeof value));
			return !value;
		},
		deleteBayRow: function(oEvent) {
			var oControl = oEvent.getSource();
			var sBindingContext = oControl.getBindingContext();
			var sPath = sBindingContext.getPath();
			var oModel = sBindingContext.getModel();

			var sPathT = sPath + "/deleted";

			//  console.log(oModel.getProperty(sPathT));
			oModel.setProperty(sPathT, true, sBindingContext, true);
			//  console.log(sPathT);
			//  console.log(oModel.getProperty(sPathT));
			oModel.updateBindings(true);
		},
		changePercent: function(oEvent) {
			var oControl = oEvent.getSource();
			var sBindingContext = oControl.getBindingContext();
			var sPath = sBindingContext.getPath();
			var oModel = sBindingContext.getModel();
			var oValue = oControl.getValue();
			var valNum = (Math.round(parseFloat(oValue) * 100) / 10000);
			var sPathT = sPath;
			sPath = sPath + "/percent";
			oModel.setProperty(sPath, valNum, sBindingContext, true);
			oModel.updateBindings(true);
		},
		changePlantedDate: function(oEvent) {
			var oControl = oEvent.getSource();
			var sBindingContext = oControl.getBindingContext();
			var sPath = sBindingContext.getPath();
			var oModel = sBindingContext.getModel();
			var oDate = oControl.getDateValue();
			var dateStr = oDate.getFullYear() + "-" + (oDate.getMonth() + 1) + "-" + oDate.getDate();

			var sPathT = sPath;
			sPath = sPath + "/planted_date";
			oModel.setProperty(sPath, dateStr, sBindingContext, true);
		},
		changeRoot: function(oEvent) {
			var oControl = oEvent.getSource();
			var sBindingContext = oControl.getBindingContext();
			var sPath = sBindingContext.getPath();
			var oModel = sBindingContext.getModel();
			var oValue = oControl.getValue();

			var sPathT = sPath;
			sPath = sPath + "/root";
			oModel.setProperty(sPath, +oValue, sBindingContext, true);
		},
		onInputFocus: function(oEvent) {
		    var oTd = oEvent.getSource();
		    var jTd = oTd.$();
		    var jTbody = jTd.closest("tbody");
		    var aJRows = jTbody.find(".just-for-arrow-navigation");
		    var jCurrentRow = jTd.closest('tr');
		    var jPrevRow = jCurrentRow.prevAll("tr.just-for-arrow-navigation")[0];
		    var jNextRow = jCurrentRow.nextAll("tr.just-for-arrow-navigation")[0];
		    var jPrevTBody, jNextTBody, tmp, l1, l2;
		    if(!jPrevRow) {
		        jPrevTBody = jCurrentRow.closest("tbody").prevAll("tbody:has(tr.just-for-arrow-navigation)")[0];
		        if(jPrevTBody) {
		            tmp = $(jPrevTBody).find("tr.just-for-arrow-navigation");
		            if(tmp) {
		                jPrevRow = tmp[tmp.length - 1];
		            }
		            
		        }
		    }
		    if(!jNextRow) {
		        jNextTBody = jCurrentRow.closest("tbody").nextAll("tbody:has(tr.just-for-arrow-navigation)")[0];
		        if(jNextTBody) {
		            tmp = $(jNextTBody).find("tr.just-for-arrow-navigation");
		            if(tmp) {
		                jNextRow = tmp[0];
		            }
		            
		        }
		    }
		  //  console.log(jPrevRow);
		  //  console.log(jCurrentRow);
		  //  console.log(jNextRow);
		    var jInput = jTd.find('input');
		    jInput.off('keyup');
			jInput.on('keyup', function(e) {
				switch (e.which) {
					case 39:
						jTd.next().find('input').focus().select();
						break;
					case 37:
						jTd.prev().find('input').focus().select();
						break;
					case 40:
						$(jNextRow).children().eq(jTd.index()).find('input').focus().select();
						break;
					case 38:
						$(jPrevRow).children().eq(jTd.index()).find('input').focus().select();
						break;
				}
			});
		},
		onSaveChanges: function() {
		    var ths = this;
			var oCore = sap.ui.getCore();
			var oView = this.getView();
			var oJmModel = oCore.getModel("jm");
			var oCopyJmModel = oView.getModel();
		    var dialog = new Dialog({
				title: 'Update',
				type: 'Message',
				content: new Text({
					text: 'Are you sure you want to save changes?'
				}),
				beginButton: new Button({
					text: 'Submit',
					press: function() {
					    var json = oCopyJmModel.getJSON();
					    oJmModel.setJSON(json, true);
					    ths.onPrevPage();
						dialog.close();
					}
				}),
				endButton: new Button({
					text: 'Cancel',
					press: function() {
						dialog.close();
					}
				}),
				afterClose: function() {
					dialog.destroy();
				}
			});
			dialog.open();
		},
		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf dummenorangetnv.view.BayOverview
		 */
		onExit: function() {},

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
		onAfterRendering: function() {

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