sap.ui.define([
	"sap/ui/core/mvc/Controller", 	'sap/m/Button'
], function(Controller) {
	"use strict";

	return Controller.extend("dummenorangetnv.controller.BayDetails", {

		addPlantsMockup: {
			Grower: {
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
				],
			PlantsInBay: [
					{id: '001',
					name: "Feeling green dark",
					percent: 100,
					plants: 52436,
					square: 75,
					plantedDate: new Date(1442955600000),
					root: 0,
					veg: 12,
					rea: 54,
					harv: 1,
					oog: new Date(1448748000000),
					vaca: 0,
					patStatus:'Synced with PAT',
					hcpStatus:'In production',
					deliveryDate: new Date(1442955600000),
					quantity:'32436',
					trays:'2222',
					availability:0,
					deleted:false
					},
					{id: '001',
					name: "Feeling green dark",
					percent: 100,
					plants: 52436,
					square: 75,
					plantedDate: new Date(1461099600000),
					root: 0,
					veg: 12,
					rea: 54,
					harv: 1,
					oog: new Date(1466888400000),
					vaca: 0,
					patStatus:'Synced with PAT',
					hcpStatus:'In production',
					deliveryDate: new Date(1461099600000),
					quantity:'32436',
					trays:'2222',
					availability:0,
					deleted:false
					},
					{id: '001',
					name: "Feeling green dark",
					percent: 63,
					plants: 32436,
					square: 47,
					plantedDate: new Date(1477170000000),
					root: 0,
					veg: 12,
					rea: 54,
					harv: 1,
					oog: new Date(1477170000000),
					vaca: 0,
					patStatus:'Synced with PAT',
					hcpStatus:'In production',
					deliveryDate: new Date(1477170000000),
					quantity:31116,
					trays:'184',
					availability:1000,
					deleted:false
					},
					{id: '015',
					name: "Grand cherry",
					percent: 7,
					plants: 102,
					square: 5,
					plantedDate: new Date(1477170000000),
					root: 0,
					veg: 12,
					rea: 54,
					harv: 1,
					oog: new Date(1477170000000),
					vaca: 0,
					patStatus:'Synced with PAT',
					hcpStatus:'In production',
					deliveryDate: new Date(1477270000000),
					quantity:102,
					trays:'1',
					availability:0,
					deleted:false
					}
				],
			CommentsToBay: [
					{
					text: "some comment",
					date: new Date(1442955600000)
					},
					{
					text: "some text",
					date: new Date(1448229600000)
					},
					{
					text: "more text",
					date: new Date(1450821600000)
					}
				],
			AvailablePlants: [
			    {id: '001',
			    availability:[					
			            {
    					week: '53',
    					quantity: 1000
    					},
    					{
    					week: '01',
    					quantity: 0
    					},
    					{
    					week: '02',
    					quantity: 1000
    					}
                    ]
			        
			    },    
			    {id: '015',
			    availability:[					
			            {
    					week: '53',
    					quantity: 100
    					},
    					{
    					week: '01',
    					quantity: 0
    					},
    					{
    					week: '02',
    					quantity: 0
    					}
                    ]
			        
			    }                    
			],
			prevPage: ''	
		},
		
		

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf dummenorangetnv.view.AddPlantsToBay
		 */
			onInit: function() {
		  //  console.log(new Date('2016-42-7'));
		  //  console.log(Date.parse('2016-42-7'));
		  //  var tDate=new Date();
		  //  tDate.setYear(2016);
		  //  tDate.setWeeks(42);
		  //  tDate.setDay(2);
		  //  console.log(tDate);


				this.getView().byId("bayDetFilterDateFrom").setDateValue(new Date());
				var toDate = new Date();
				toDate.setDate(toDate.getDate()+210);
				this.getView().byId("bayDetFilterDateTo").setDateValue(toDate);

				var oSelectedBayModel = sap.ui.getCore().getModel("selectedBay");
				this.getView().setModel(oSelectedBayModel,"selectedBay");

				var oModel = new sap.ui.model.json.JSONModel(this.addPlantsMockup);
				this.getView().setModel(oModel,"bayDetailModel");
				this.getView().getModel("bayDetailModel").getData().prevPage=sap.ui.getCore().byId("__xmlview0").byId("AppId").getCurrentPage().getId();
				// console.log(sap.ui.getCore().byId("__xmlview0").byId("AppId").getCurrentPage().getId());
				// console.log(this.getView().getModel("bayDetailModel").getData().prevPage);

				var oBayDetailList = this.getView().byId("bayDetailListId");
				oBayDetailList.bindAggregation("items","bayDetailModel>/PlantsInBay",this.bayDetailListFactory.bind(this));

				// var filterNotDeleted = new sap.ui.model.Filter("deleted", sap.ui.model.FilterOperator.EQ, false);
				// var filterDateFrom = new sap.ui.model.Filter("oog", sap.ui.model.FilterOperator.GE, new Date(this.getView().byId("bayDetFilterDateFrom").getDateValue()));
				// var filterDateTo =new sap.ui.model.Filter("plantedDate", sap.ui.model.FilterOperator.LE, new Date(this.getView().byId("bayDetFilterDateTo").getDateValue()));
				// var sorter=new sap.ui.model.Sorter("plantedDate", false);
				// oBayDetailList.getBinding("items").filter([filterNotDeleted,filterDateFrom,filterDateTo]).sort(sorter);

				this.onFilterDateChange();
			},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf dummenorangetnv.view.AddPlantsToBay
		 */
			// onBeforeRendering: function() {
			// },

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf dummenorangetnv.view.AddPlantsToBay
		 */
			onAfterRendering: function() {
				// this.onFilterDateChange();
			},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf dummenorangetnv.view.AddPlantsToBay
		 */
		//	onExit: function() {
		//
		//	}

		bayDetailListFactory : function(sId,oContext) {
			var ourModel=oContext.getModel();
			var ourPath=oContext.getPath();
			var dateToDay=new Date();
			var oUIControl = null;
			var that=this;
			// console.log(oContext.getProperty("plantedDate")< dateToDay);
			if (oContext.getProperty("plantedDate") < dateToDay) {
				oUIControl = new sap.m.CustomListItem(sId, {
					width: "100%",
					content:[
						new sap.m.VBox({
							items:[
								new sap.m.HBox({
									items: [
										new sap.m.FlexBox({
											width:"2%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Text({ text: '', textAlign:"Center" })
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:"19%",
											items: [
	                            				new sap.m.Text({ text: oContext.getProperty("id")+" "+oContext.getProperty("name"), textAlign:"Begin" })
											]
										}).addStyleClass(""),
										new sap.m.VBox({
											width:"8%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Text({ width: "78%", text: oContext.getProperty("percent")+"%", textAlign:"End" }).addStyleClass("")
											]
										}).addStyleClass(""),
										new sap.m.VBox({
											width:"10%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Text({  width: "80%", text: oContext.getProperty("plants"), textAlign:"End" }).addStyleClass("")
											]
										}).addStyleClass(""),
										new sap.m.VBox({
											width:"6%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Text({  width: "69%", text: oContext.getProperty("square"), textAlign:"End" }).addStyleClass("")
											]
										}).addStyleClass(""),
										new sap.m.VBox({
											width:"12%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Text({ width: "70%", text: { path : "bayDetailModel>plantedDate",
											        type: 'sap.ui.model.type.Date',
											        formatOptions: {
											          pattern: 'yyyy-ww-u'
											        }}, textAlign:"End" }).addStyleClass("")
	                            			// 	new sap.m.DatePicker({ width:"91%", dateValue: "{bayDetailModel>plantedDate}",
	                            			// 	valueFormat:'yyyy-ww-u', displayFormat :'yyyy-ww-u', editable: false,
	                            			// 	change: function(){that.onDataChange(this,sId,oContext);}  
	                            			// 	,  textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin "+dateTextColor)
											]
										}).addStyleClass(""),
										new sap.m.VBox({
											width:"6%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Text({ width: "69%", text: oContext.getProperty("root"), textAlign:"End" }).addStyleClass("")
											]
										}).addStyleClass(""),
										new sap.m.VBox({
											width:"6%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Text({ width: "69%", text: oContext.getProperty("veg"), textAlign:"End" }).addStyleClass("")
											]
										}).addStyleClass(""),
										new sap.m.VBox({
											width:"6%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Text({ width: "69%", text: oContext.getProperty("rea"), textAlign:"End" }).addStyleClass("")
											]
										}).addStyleClass(""),
										new sap.m.VBox({
											width:"6%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Text({ width: "69%", text: oContext.getProperty("harv"), textAlign:"End" }).addStyleClass("")
											]
										}).addStyleClass(""),
										new sap.m.VBox({
											width:"12%",
											justifyContent:"End",
											items: [
	                            				new sap.m.Text({ width: "70%", text: { path : "bayDetailModel>oog/",
											        type: 'sap.ui.model.type.Date',
											        formatOptions: {
											          pattern: 'yyyy-ww-u'
											        }}, textAlign:"End" }).addStyleClass("")
											]
										}).addStyleClass(""),
										new sap.m.VBox({
											width:"6%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Text({ width: "69%", text: oContext.getProperty("vaca"), textAlign:"End" }).addStyleClass("")
											]
										}).addStyleClass("")
									]
								})
							]	
						}).addStyleClass("sapUiTinyMarginTop sapUiTinyMarginBottom")
					]
				});
			} else {
				var warningText="";
				var nameTextColor, quantityTextColor, dateTextColor, availabilityTextColor;

				if (oContext.getProperty("quantity")!==oContext.getProperty("plants")){
					warningText=" quantity not correct ";
					quantityTextColor=" bayDetTextRed";
				}
				if (oContext.getProperty("plantedDate")<oContext.getProperty("deliveryDate")){
					warningText=" date not correct ";
					dateTextColor=" bayDetTextRed";
				}

				// if (oContext.getProperty("availability")!=='Available'){
				// 	warningText=" not available ";
				// 	availabilityTextColor=" bayDetTextRed";
				// } else {
				// 	availabilityTextColor=" bayDetTextGreen";
				// }

				if (warningText.length>0){
					var warningFieldContent=[
						new sap.ui.core.Icon({ src: "sap-icon://alert", color: "red"}),
						new sap.m.Text({ text: warningText, textAlign:"Begin" }).addStyleClass("bayDetTextRed sapUiTinyMarginBegin")
						];
				}
				
				
				oUIControl = new sap.m.CustomListItem(sId, {
					width: "100%",
					content:[
						new sap.m.VBox({
							items:[
								new sap.m.HBox({
									items: [
										new sap.m.FlexBox({
											width:"2%",
											justifyContent:"Center",
											items: [
	                            				new sap.ui.core.Icon({ src: "sap-icon://decline", 
		                            				press: function(oEvent){
																ourModel.setProperty(ourPath + "/deleted", true);
																// ourModel.submitChanges();
																ourModel.refresh(true);
		                            				}
	                            				})
											]
										}).addStyleClass(" sapUiSmallMarginTop"),
										new sap.m.FlexBox({
											width:"19%",
											items: [
	                            				new sap.m.Text({ text: oContext.getProperty("id")+" "+oContext.getProperty("name"), textAlign:"Begin"}).addStyleClass("")
											]
										}).addStyleClass(" sapUiSmallMarginTop"),
										new sap.m.FlexBox({
											width:"8%",
											justifyContent:'Center',
											items: [
	                            				new sap.m.Input({ width:"81%", value: oContext.getProperty("percent")+"%" ,
	                            				change: function(){that.onDataChange(this,sId,oContext);}  
	                            				, textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin")
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:"10%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Input({  width:"85%", value: oContext.getProperty("plants"),
	                            				change: function(){that.onDataChange(this,sId,oContext);}  
	                            				, textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin "+quantityTextColor)
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:"6%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Input({ width:"75%", value: oContext.getProperty("square"),
	                            				change: function(){that.onDataChange(this,sId,oContext);}  
	                            				, textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin")
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:"12%",
											justifyContent:"Center",
											items: [
	               //             				new sap.m.Input({ width:"86%", value: { path : "bayDetailModel>plantedDate",
											     //   type: 'sap.ui.model.type.Date',
											     //   formatOptions: {
											     //     pattern: 'yyyy-ww-u'
											     //   }},
	               //             				change: function(){that.onDataChange(this,sId,oContext);}  
	               //             				,  textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin "+dateTextColor)
	                            				new sap.m.DatePicker({ width:"91%", dateValue: "{bayDetailModel>plantedDate}",
	                            				valueFormat:'yyyy-ww-u', displayFormat :'yyyy-ww-u', 
	                            				change: function(){that.onDataChange(this,sId,oContext);}  
	                            				,  textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin ")
	                            				
	                            				
	                            				
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:"6%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Input({ width:"75%", value: oContext.getProperty("root"),
	                            				change: function(){that.onDataChange(this,sId,oContext);}  
	                            				,  textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin")
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:"6%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Input({ width:"75%", value: oContext.getProperty("veg"),
	                            				change: function(){that.onDataChange(this,sId,oContext);}  
	                            				,  textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin")
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:"6%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Input({ width:"75%", value: oContext.getProperty("rea"),
	                            				change: function(){that.onDataChange(this,sId,oContext);}  
	                            				,  textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin")
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:"6%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Input({ width:"75%", value: oContext.getProperty("harv"),
	                            				change: function(){that.onDataChange(this,sId,oContext);}  
	                            				,  textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin")
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:"12%",
											justifyContent:"Center",
											items: [
	               //             				new sap.m.Input({ width:"86%", value: { path : "bayDetailModel>oog/",
											     //   type: 'sap.ui.model.type.Date',
											     //   formatOptions: {
											     //     pattern: 'yyyy-ww-u'
											     //   }},
	               //             				change: function(){that.onOOGChange(this,sId,oContext);}  
	                            			// 	,   textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin")
	                            				new sap.m.DatePicker({ width:"90%", dateValue: "{bayDetailModel>oog}",
	                            				valueFormat:'yyyy-ww-u', displayFormat :'yyyy-ww-u', 
	                            				change: function(){that.onDataChange(this,sId,oContext);}  
	                            				,  textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin ")
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:"6%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Input({ width:"75%", value: oContext.getProperty("vaca"), 
	                            				change: function(){that.onDataChange(this,sId,oContext);}  
	                            				, textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin")
											]
										}).addStyleClass("")
									]
								})
								, new sap.m.HBox({
									items: [
										new sap.m.FlexBox({
											width:"2%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Text({ text: '', textAlign:"Center" })
											]
										}).addStyleClass(" "),
										new sap.m.FlexBox({
											width:"27%",
											items: [
	                            				warningFieldContent
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:"10%",
											justifyContent:"End",
											items: [
	                            				new sap.m.Text({ text: '', textAlign:"Center" }).addStyleClass("")
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:"6%",
											justifyContent:"End",
											items: [
	                            				new sap.m.Text({ text: '', textAlign:"Center" }).addStyleClass("")
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:"12%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Text({ text: 'Delivery date', textAlign:"Center" }).addStyleClass("")
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:"12%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Text({ text: 'Quantity', textAlign:"Center" })
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:"12%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Text({ text: 'Trays', textAlign:"Center" })
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:"17%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Text({ text: 'Availability this week', textAlign:"Center" })
											]
										})
									]
								}).addStyleClass(" sapUiTinyMarginTop")
								, new sap.m.HBox({
									items: [
										new sap.m.FlexBox({
											width:"2%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Text({ text: '', textAlign:"Center" })
											]
										}).addStyleClass(" "),
										new sap.m.VBox({
											width:"27%",justifyContent:"Center",
											items: [
	                            				new sap.m.Text({ text: oContext.getProperty("patStatus")+", "+oContext.getProperty("hcpStatus"), textAlign:"Begin" })
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:"10%",
											justifyContent:"End",
											items: [
	                            				new sap.m.Text({ text: '', textAlign:"Center" }).addStyleClass("")
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:"6%",
											justifyContent:"End",
											items: [
	                            				new sap.m.Text({ text: '', textAlign:"Center" }).addStyleClass("")
											]
										}).addStyleClass(""),
										new sap.m.VBox({
											width:"12%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Text({ width:"70%", text: { path : "bayDetailModel>deliveryDate",
											        type: 'sap.ui.model.type.Date',
											        formatOptions: {
											          pattern: 'yyyy-ww-u'
											        }}, textAlign:"End" }).addStyleClass(dateTextColor)
	               //             				new sap.m.DatePicker({ width:"100%", 
											     //   valueFormat: 'yyyy-ww-u', 
											     //   displayFormat: 'yyyy-ww-u',
											     //   dateValue:oContext.getProperty("deliveryDate")}).addStyleClass(dateTextColor)
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:"12%",
											justifyContent:"Center", alignItems:"Center",
											items: [
	                            				new sap.m.Text({ text: oContext.getProperty("quantity"), textAlign:"Center" }).addStyleClass(quantityTextColor)
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:"12%",
											justifyContent:"Center", alignItems:"Center",
											items: [
	                            				new sap.m.Text({ text: oContext.getProperty("trays"), textAlign:"Center" })
											]
										}).addStyleClass(""),
								// 		new sap.m.FlexBox({
								// 			width:"17%",
								// 			justifyContent:"Center",
								// 			items: [
        										new sap.m.FlexBox({
        											width:"11%",
        											justifyContent:"End", alignItems:"Center",
        											items: [
        	                            			// 	new sap.m.Text({ width: "80%",text: oContext.getProperty("availability"), textAlign:"Center" }).attachBrowserEvent("click",function(){alert("msg");})
        	                            				new sap.m.Text({ width: "100%", text: oContext.getProperty("availability"), textAlign:"End" }).addStyleClass("")
        											]
        										}),
										new sap.m.FlexBox({
											width:"6%",
											justifyContent:"Start",alignItems:"Center",
											items: [
	                            			// 	new sap.m.Image({width:"2em", height:"2em", src: "images/cannabis-leaf-favicon.ico", press:function(){that.onAvalilabilityChecking(this,sId,oContext);}}),
	                            				new sap.m.Image({width:"2em", height:"2em", src: "images/simple-leaf-favicon.ico", press:function(){that.onAvalilabilityChecking(this,sId,oContext);}})
 											]
										}).addStyleClass("")

      									// 	]
        								// })
									]
								})
							]	
						}).addStyleClass("sapUiSmallMarginTop sapUiTinyMarginBottom")
					]
				}).addStyleClass(" bayDetGrayBackGround");
			}
			// oUIControl.setType(sap.m.ListType.Active);
			// oUIControl.attachPress(this.onItemSelected, this);
			return oUIControl;
		},

			
	onFilterDateChange: function(oEvent){
		// this.getView().getModel("bayDetailModel").refresh(true);
		var oBayDetailList = this.getView().byId("bayDetailListId");
		var filterNotDeleted = new sap.ui.model.Filter("deleted", sap.ui.model.FilterOperator.EQ, false);
		var filterDateFrom = new sap.ui.model.Filter("oog", sap.ui.model.FilterOperator.GE, new Date(this.getView().byId("bayDetFilterDateFrom").getDateValue()));
		var filterDateTo =new sap.ui.model.Filter("plantedDate", sap.ui.model.FilterOperator.LE, new Date(this.getView().byId("bayDetFilterDateTo").getDateValue()));
		var sorter=new sap.ui.model.Sorter("plantedDate", false);
		oBayDetailList.getBinding("items").filter([filterNotDeleted,filterDateFrom,filterDateTo]).sort(sorter);
	},


	onDataChange: function(elThis,sId,oContext){
	    var thisContr=this;
// 		console.log(this);
// 		console.log(elThis);
// 		console.log(sId);
// 		console.log(oContext);
// 		console.log(elThis.getBinding());
//      console.log(elThis.getValue());
// 		console.log(this.getView().byId(sId));
// 		console.log(this.getView().byId(sId).getContent()[0].getItems()[0].getItems());
        var inputIndex;
		$.each(thisContr.getView().byId(sId).getContent()[0].getItems()[0].getItems(), function (index, item) {
		  //  console.log(item.getItems()[0].getId());
		    if(item.getItems()[0].getId()==elThis.getId()){
		        inputIndex=index;  
		      //  console.log(inputIndex);
		    }
		});
		if (inputIndex<5){
		  //  console.log("<5");
    	        var baySquare=thisContr.getView().getModel("bayDetailModel").getData().Bay.square;
    	    switch(inputIndex) {
                case 2:
    				oContext.getModel().setProperty(oContext.getPath() + "/percent", elThis.getValue().substring(0,elThis.getValue().length-1));
            	    var percentageFullnes =	parseFloat(	oContext.getModel().getProperty(oContext.getPath() + "/percent"))/100;
            	    var plantPerSquare =	parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/square"));
            	    oContext.getModel().setProperty(oContext.getPath() + "/plants", Math.round(plantPerSquare*percentageFullnes*baySquare));
                break;
                case 3:
    				oContext.getModel().setProperty(oContext.getPath() + "/plants", parseInt(elThis.getValue()));
            	    var plantsQuantity =		parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/plants"));                         
            	    var plantPerSquare =	parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/square"));
            	    var percent=plantsQuantity*1000/(plantPerSquare*thisContr.getView().getModel("bayDetailModel").getData().Bay.square);
            	    percent=Math.round(percent)/10;
    				oContext.getModel().setProperty(oContext.getPath() + "/percent", percent);
                break;
                case 4:
    				oContext.getModel().setProperty(oContext.getPath() + "/square", elThis.getValue());
            	    var plantsQuantity =		parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/plants"));                         
            	    var plantPerSquare =	parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/square"));
            	    var percent=plantsQuantity*1000/(plantPerSquare*thisContr.getView().getModel("bayDetailModel").getData().Bay.square);
            	    percent=Math.round(percent)/10;
    				oContext.getModel().setProperty(oContext.getPath() + "/percent", percent);
                break;
            }
		}else if(10>inputIndex){
		  //  console.log("10>4");
    	    switch(inputIndex) {
                case 5:
                    // console.log(elThis.getDateValue());
                    // console.log(new Date(elThis.getDateValue()));
    				oContext.getModel().setProperty(oContext.getPath() + "/plantedDate", new Date(elThis.getDateValue()));
                break;
                case 6:
    				oContext.getModel().setProperty(oContext.getPath() + "/root", parseInt(elThis.getValue()));
                break;
                case 7:
    				oContext.getModel().setProperty(oContext.getPath() + "/veg", parseInt(elThis.getValue()));
                break;
                case 8:
    				oContext.getModel().setProperty(oContext.getPath() + "/rea", parseInt(elThis.getValue()));
                break;
                case 9:
    				oContext.getModel().setProperty(oContext.getPath() + "/harv", parseInt(elThis.getValue()));
                break;
                case 11:
    				oContext.getModel().setProperty(oContext.getPath() + "/vaca", parseInt(elThis.getValue()));
                break;
            }
            // console.log(plantedDate);
    		var plantedDate =	new Date(	oContext.getModel().getProperty(oContext.getPath() + "/plantedDate"));
    	    var rootingDays =	parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/root"));                         
    	    var longDays =		parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/veg"));                         
    	    var reactionDays =	parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/rea"));                         
    	   // var harvestDays =	parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/harv"));                         
    	   // var vacantDays =	parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/vaca"));         
    		plantedDate.setDate(plantedDate.getDate()+rootingDays+longDays+reactionDays);
            // console.log(plantedDate);
    		oContext.getModel().setProperty(oContext.getPath() + "/oog", plantedDate);

		}else if (inputIndex>9){
 		 //   console.log(">9");
       	    switch(inputIndex) {
                    case 10:
                        // elThis.setMinDate(new Date());
            		    var oogDate=new Date(elThis.getDateValue());
                // 		var plantedDate =	new Date(	oContext.getModel().getProperty(oContext.getPath() + "/plantedDate"));
                // 	    var rootingDays =	parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/root"));                         
                // 	    var longDays =		parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/veg"));                         
                // 	    var reactionDays =	parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/rea"));
                // 	    plantedDate.setDate(plantedDate.getDate()+rootingDays+longDays+reactionDays);
                // 	    console.log(plantedDate>oogDate);
                // 	    if (plantedDate>oogDate){
                // 	       	sap.m.MessageToast.show('Wrong date');
                // 	    }else{
               				oContext.getModel().setProperty(oContext.getPath() + "/oog", oogDate);
                	   // }
                    break;
                    case 11:
        				oContext.getModel().setProperty(oContext.getPath() + "/vaca", parseInt(elThis.getValue()));
                    break;
                }
		}


    		// ourModel.submitChanges();
    	    oContext.getModel().refresh(true);
	},
	
	
	onAvalilabilityChecking: function(elThis,sId,oContext){
	    this.openPlantsAvilabDialog(elThis,sId,oContext);
	   // console.log("checked");
	   //alert("in process");
// 		this.getView().byId("addCommentButtonId").setVisible(false);
// 		this.getView().byId("newCommentArea").setValue('');
// 		this.getView().byId("newCommentBox").setVisible(true);
	},	
	
	openPlantsAvilabDialog: function(elThis,sId,oContext) {
		this.newPlantsAvilabDialog = sap.ui.xmlfragment("dummenorangetnv.fragments.PlantsAvailabilityDialog", this);
		this.getView().addDependent(this.newPlantsAvilabDialog);
		jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this.newPlantsAvilabDialog);
		this.newPlantsAvilabDialog.open();
		sap.ui.getCore().byId("plantsAvailabilityNameId").setText(oContext.getModel().getProperty(oContext.getPath() + "/id")+" "+
		                                                           oContext.getModel().getProperty(oContext.getPath() + "/name"));
		
		$.each(this.getView().getModel("bayDetailModel").getData().AvailablePlants, function (index, item) {
		    if(item.id==oContext.getModel().getProperty(oContext.getPath() + "/id")){
                var oTemplate = new sap.m.ColumnListItem({
                    cells : [
                        new sap.m.Text({
                            text : "{bayDetailModel>week}",
                            wrapping : false
                        }),
                        new sap.m.Text({
                            text : "{bayDetailModel>quantity}",
                            wrapping : false
                        })
                    ]
                });
                sap.ui.getCore().byId("plantsAvailabilityTableId").bindItems("bayDetailModel>/AvailablePlants/"+index+"/availability", oTemplate);
		    }
		});		
	},

	closePlantsAvilabDialog: function(oEvent) {
		this.newPlantsAvilabDialog.close();
		this.newPlantsAvilabDialog.destroy();
	},
	
	
	
	onAddComment: function(oEvent){
		this.getView().byId("addCommentButtonId").setVisible(false);
		this.getView().byId("newCommentArea").setValue('');
		this.getView().byId("newCommentBox").setVisible(true);
	},	

	
	onSaveComment: function(oEvent){
		var commentText=this.getView().byId("newCommentArea").getValue()+"";
		if(commentText.split(' ').join('')!==''){
			this.getView().getModel("bayDetailModel").getData().CommentsToBay.push({
				text: commentText,
				date: new Date()
			});
			this.getView().getModel("bayDetailModel").refresh(true);
		}
		this.onCancelComment();
	},	

	
	onCancelComment: function(oEvent){
		this.getView().byId("addCommentButtonId").setVisible(true);
		this.getView().byId("newCommentArea").setValue('');
		this.getView().byId("newCommentBox").setVisible(false);
	},	

	onPrevPage: function(oEvent){
		this.onCancelComment();
		var app=sap.ui.getCore().byId("__xmlview0").byId("AppId");
		app.to(this.getView().getModel("bayDetailModel").getData().prevPage);	

		
	},
	
	onAddingPlant: function(oEvent){
		this.onCancelComment();
		var app=sap.ui.getCore().byId("__xmlview0").byId("AppId");
		if (sap.ui.getCore().byId("addPlantsToBayPageId")==undefined){
			var addPlantsToBayPage = sap.ui.view({
				id: "addPlantsToBayPageId",
				viewName: "dummenorangetnv.view.AddPlantsToBay",
				type: sap.ui.core.mvc.ViewType.XML
			});
			app.addPage(addPlantsToBayPage);
		} 
		app.to("addPlantsToBayPageId");
	}
	
	// onDeletePlant: function(){
	// }

	});

});