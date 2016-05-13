sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("dummenorangetnv.controller.ApprovalPage", {

		onHome: function() {
			var app = sap.ui.getCore().byId("__xmlview0").byId("AppId");
			app.to("__page0");
		},

		// 		getGroup: function(oContext) {
		// 			var sStreet = oContext.getProperty("address/street");
		// 			var sGrowerName = oContext.getProperty("growerName");

		// 			var sKey = sGrowerName + sGrowerName;
		// 			console.log(sKey);
		// 			// 			var sKey = oContext.getProperty("growerName");
		// 			return {
		// 				key: sKey,
		// 				title: sKey || "No Specific Region"
		// 			};
		// 		},

		// 		getGroupHeader: function(oGroup) {
		// 			return new sap.m.GroupHeaderListItem({
		// 				title: oGroup.title,
		// 				upperCase: false
		// 			});
		// 		},
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf dummenorangetnv.view.ApprovalPage
		 */

		onCustRepresChange: function(oEvent) {
			var sCusrRepresName = oEvent.getSource().getSelectedKey();
			console.log(sCusrRepresName);
			console.log(this.oData.customerRepresentive[0].name);
			var that = this;

			$.each(that.oData.customerRepresentive, function(index) {
				console.log("EACH");
				if (that.oData.customerRepresentive[index].name === sCusrRepresName) {
					console.log("IF");
					that.getView().getModel("custRepres").setData(that.oData.customerRepresentive[index], false);
				}

			});

			// 		    {	var aFilters = [];
			// 			// update list binding
			// 			var obayList = this.getView().byId("ListId");
			// 			var aListItems = obayList.getItems();

			// 			    var oCustRepresFilter = new sap.ui.model.Filter("custRepes>/id", sap.ui.model.FilterOperator.EQ, this.sCusrRepresId);
			// 			    console.log(oCustRepresFilter);
			// 			    aFilters.push(oDiscriptionFilter);
			// 			    obayList.getBinding("items").filter(aFilters);

			// 		    }
		},

		onInit: function() {

			var aCustomerRepresentiveList = {
				List: [{
						name: "Peter"
					}, {
						name: "Ted"
					}, {
						name: "John"
					}

				]
			};
			var aCustomerRepresentiveListModel = new sap.ui.model.json.JSONModel(aCustomerRepresentiveList);
			this.getView().setModel(aCustomerRepresentiveListModel, "custRepesNameList");

			this.oData = {
				customerRepresentive: [{
					id: 1,
					name: "Peter",
					role: "Approver",
					bayData: [{
						id: 1,
						bayId: 1,
						growerName: "Van Os Chrysanten C.V.",
						address: {
							street: "Harenwert 48",
							city: "1000 AA Maasland"
						},

						gh_bay: 5,
						comments: "hike",

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

					}, {
						id: 1,
						bayId: 1,
						growerName: "Van Os Chrysanten C.V.",
						address: {
							street: "Harenwert 48",
							city: "1000 AA Maasland"
						},
						gh_bay: 6,
						comments: "hike hike",
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
						id: 1,
						bayId: 1,
						growerName: "Van Os Chrysanten C.V.",
						address: {
							street: "Harenwert 48",
							city: "1000 AA Maasland"
						},
						gh_bay: 8,
						comments: "hike 8",
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

					}, {
						id: 1,
						bayId: 1,
						growerName: "Van Os Chrysanten C.V.",
						address: {
							street: "Harenwert 48",
							city: "1000 AA Maasland"
						},
						gh_bay: 9,
						comments: "like 9",

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

					}, {
						id: 1,
						bayId: 2,
						growerName: "Van Os Chrysanten C.V.",
						address: {
							street: "Aallaan 306",
							city: "1000 AA Maasland"
						},
						gh_bay: 10,
						comments: "obscure 10",
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

					}, {
						id: 2,
						bayId: 1,
						growerName: "Van Oranje",
						address: {
							street: "Aallaan 306",
							city: "1000 AA Maasland"
						},
						gh_bay: 12,
						comments: "eventually 12",

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
						id: 2,
						bayId: 1,
						growerName: "Van Oranje",
						address: {
							street: "Aallaan 306",
							city: "1000 AA Maasland"
						},
						gh_bay: 13,
						comments: "September",

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
					id: 2,
					name: "Ted",
					role: "Approver",
					bayData: [{

						id: 1,
						bayId: 2,
						growerName: "Van Os Chrysanten C.V.",
						address: {
							street: "Aallaan 306",
							city: "1000 AA Maasland"
						},
						gh_bay: 10,
						comments: "obscure 10",
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

					}, {
						id: 2,
						bayId: 1,
						growerName: "Van Oranje",
						address: {
							street: "Aallaan 306",
							city: "1000 AA Maasland"
						},
						gh_bay: 12,
						comments: "eventually 12",

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
						id: 2,
						bayId: 1,
						growerName: "Van Oranje",
						address: {
							street: "Aallaan 306",
							city: "1000 AA Maasland"
						},
						gh_bay: 13,
						comments: "September",

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
					id: 1,
					name: "John",
					role: "Approver",
					bayData: [{
						id: 2,
						bayId: 1,
						growerName: "Van Oranje",
						address: {
							street: "Aallaan 306",
							city: "1000 AA Maasland"
						},
						gh_bay: 12,
						comments: "eventually 12",

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
						id: 2,
						bayId: 1,
						growerName: "Van Oranje",
						address: {
							street: "Aallaan 306",
							city: "1000 AA Maasland"
						},
						gh_bay: 13,
						comments: "September",

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
			};
			console.log(this.oData.customerRepresentive[0]);

			var oBayData = {
				bayData: [{
					id: 1,
					bayId: 1,
					growerName: "Van Os Chrysanten C.V.",
					address: {
						street: "Harenwert 48",
						city: "1000 AA Maasland"
					},

					gh_bay: 5,
					comments: "hike",

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

				}, {
					id: 1,
					bayId: 1,
					growerName: "Van Os Chrysanten C.V.",
					address: {
						street: "Harenwert 48",
						city: "1000 AA Maasland"
					},
					gh_bay: 6,
					comments: "hike hike",
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
					id: 1,
					bayId: 1,
					growerName: "Van Os Chrysanten C.V.",
					address: {
						street: "Harenwert 48",
						city: "1000 AA Maasland"
					},
					gh_bay: 8,
					comments: "hike 8",
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

				}, {
					id: 1,
					bayId: 1,
					growerName: "Van Os Chrysanten C.V.",
					address: {
						street: "Harenwert 48",
						city: "1000 AA Maasland"
					},
					gh_bay: 9,
					comments: "like 9",

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

				}, {
					id: 1,
					bayId: 2,
					growerName: "Van Os Chrysanten C.V.",
					address: {
						street: "Aallaan 306",
						city: "1000 AA Maasland"
					},
					gh_bay: 10,
					comments: "obscure 10",
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

				}, {
					id: 2,
					bayId: 1,
					growerName: "Van Oranje",
					address: {
						street: "Aallaan 306",
						city: "1000 AA Maasland"
					},
					gh_bay: 12,
					comments: "eventually 12",

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
					id: 2,
					bayId: 1,
					growerName: "Van Oranje",
					address: {
						street: "Aallaan 306",
						city: "1000 AA Maasland"
					},
					gh_bay: 13,
					comments: "September",

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
			};

			//             jQuery.sap.require("dummenorangetnv.resources.underscore-min");
			//   hcpspark.devinit.initialize();

			//             var aGrouped = dummenorangetnv.resources.underscore-min_.groupBy(oBayData.bayData, function(oBay) {
			//                 return oBay.growerName + oBay.address.street;
			//             });
			//             console.log(aGrouped);

			//console.log(oBayModel);

			// 			this.getView().setModel(oBayModel, "bayModel");
			// 			console.log(this.getView().getModel("bayModel"));

			var oCustomerRepresentiveModel = new sap.ui.model.json.JSONModel(this.oData.customerRepresentive[0]);
			console.log(oCustomerRepresentiveModel);
			this.getView().setModel(oCustomerRepresentiveModel, "custRepres");

		},

		getGroupHeader: function(oGroup) {
			return new sap.m.CustomListItem(oGroup.id, {
				fieldGroupIds: oGroup.groupId,
				content: [
					new sap.m.HBox({
						items: [
							//  new sap.m.CheckBox(),
							new sap.m.Text({
								text: oGroup.title
							})
						],
						alignItems: "Center"
					})
				]
			});
		},

		// 		getGroupHeader: function (oGroup){
		// 			return new sap.m.GroupHeaderListItem( {
		// 				title: oGroup.key,
		// 				upperCase: false
		// 			} );
		// 		},

		onSelectionChange: function(oEvent) {
			var oList = oEvent.getSource();

			var oItem = oEvent.getParameters().listItem;
			console.log(oItem);
			console.log(oItem.getId());
			var groupId = oItem.getFieldGroupIds()[0];
			var aGroupedItems = oList.getControlsByFieldGroupId(groupId);
			if (oItem.getId().includes("groupHeader")) {
				if (oItem.isSelected()) {

					for (var j = 0; j < aGroupedItems.length; j++) {
						if (aGroupedItems[j] instanceof sap.m.CustomListItem)
							oList.setSelectedItem(aGroupedItems[j], true);
					}
				} else {
					for (var j = 0; j < aGroupedItems.length; j++) {
						if (aGroupedItems[j] instanceof sap.m.CustomListItem)
							oList.setSelectedItem(aGroupedItems[j], false);
					}
				}
				// 			{
				// 			//  		if(!oItem.isSelected()) {

				// 			//  		    var groupId = oItem.getFieldGroupIds()[0];
				// 			//  		    var aGroupedItems = oList.getControlsByFieldGroupId(groupId);
				// 			//  		    for (var j = 0; j < aGroupedItems.length; j++) {
				// 			// 		if (aGroupedItems[j].getId().includes("groupHeader") && aGroupedItems[j].isSelected() )
				// 			// 			oList.setSelectedItem(aGroupedItems[j], true)
				// 			// 	}
				// 			//  		}

				// // 			var aItems = oList.getSelectedItems();

				// 			// 			console.log(aItems);
				// // 			for (var i = 0; i < aItems.length; i++) {

				// // 				var sId = aItems[i].getId();
				// // 				console.log(sId);
				// // 				if (sId.includes("groupHeader")) {

				// // 					var groupId = aItems[i].getFieldGroupIds()[0];
				// // 					console.log(groupId);
				// // 					var aGroupedItems = oList.getControlsByFieldGroupId(groupId);
				// // 					for (var j = 0; j < aGroupedItems.length; j++) {
				// // 						if (aGroupedItems[j] instanceof sap.m.CustomListItem)
				// // 							oList.setSelectedItem(aGroupedItems[j], true)
				// // 					}

				// // 				}

				// // 			}

				// 			// var oItem = oEvent.getParameters().listItem;
				// 			// console.log(aIds);
				// 			// console.log(aContexts);
				// 			}

			} else {

				for (var j = 0; j < aGroupedItems.length; j++) {
					if (aGroupedItems[j].getId().includes("groupHeader"))
						oList.setSelectedItem(aGroupedItems[j], false);
				}
			}
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf dummenorangetnv.view.ApprovalPage
		 */
		onBeforeRendering: function() {

			var oList = this.getView().byId("ListId");

			var aBinding = oList.getBinding("items");
			var aSorters = [];
			var i = 0;

			var fGrouper = function(oContext) {
				//	var sStreet = oContext.getProperty("address/street");
				var sGrowerName = oContext.getProperty("growerName");
				var sStreet = oContext.getProperty("address/street");
				var sGrowerId = oContext.getProperty("id");
				var sBayId = oContext.getProperty("bayId");
				var sGroupId = sGrowerId + "" + sBayId;
				i++;

				// 			var sKey = oContext.getProperty("growerName");
				return {
					// 	key: sGrowerName + sGrowerName,
					key: sGrowerName + sStreet,
					title: sGrowerName + " - " + sStreet,
					groupId: sGroupId,
					id: "groupHeader" + i
				};
			}

			var oSorter = new sap.ui.model.Sorter("/bayData", false, fGrouper);

			aSorters.push(oSorter);

			aBinding.sort(aSorters);

		},

		onSelect: function() {
			var oList = this.getView().byId("ListId");
			var oCBox = this.getView().byId("selectDeselectBoxId");

			if (oCBox.getSelected())
				oList.selectAll();
			else
				oList.removeSelections();
		},
		onReject: function() {
		var oList = this.getView().byId("ListId");
			var aItems = oList.getSelectedItems();
			console.log(aItems);
			if (aItems.length == 0) {
				sap.m.MessageToast.show("Please select items to reject");
			} else {
				var oModel = this.getView().getModel("custRepres");
				var oData = oModel.getData();
				console.log(oData);
				for (var i = 0; i < aItems.length; i++) {
					var oItem = aItems[i];

					if (oItem.getId().includes("groupHeader"))
						oList.removeItem(oItem);
					else {

						console.log(oItem);
						var sPath = oItem.oBindingContexts.custRepres.sPath;
						console.log(sPath);
						var idx = parseInt(sPath.substring(sPath.lastIndexOf('/') + 1));
						console.log(idx);
						oData.bayData.splice(idx, 1);
					}

				}
				oList.removeSelections(true);
				oModel.refresh();

			}
		},
		onApprove: function() {
			var oList = this.getView().byId("ListId");
			var aItems = oList.getSelectedItems();
			console.log(aItems);
			if (aItems.length == 0) {
				sap.m.MessageToast.show("Please select items to reject");
			} else {
				var oModel = this.getView().getModel("custRepres");
				var oData = oModel.getData();
				console.log(oData);
				for (var i = 0; i < aItems.length; i++) {
					var oItem = aItems[i];

					if (oItem.getId().includes("groupHeader"))
						oList.removeItem(oItem);
					else {

						console.log(oItem);
						var sPath = oItem.oBindingContexts.custRepres.sPath;
						console.log(sPath);
						var idx = parseInt(sPath.substring(sPath.lastIndexOf('/') + 1));
						console.log(idx);
						oData.bayData.splice(idx, 1);
					}

				}
				oList.removeSelections(true);
				oModel.refresh();

			}

		}

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf dummenorangetnv.view.ApprovalPage
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf dummenorangetnv.view.ApprovalPage
		 */
		//	onExi  function() {
		//
		//	}

	});

});