sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("dummenorangetnv.controller.MultipleAddPlants", {
		addPlantsMockup: {
		    Bays: [
        		{"gh_bay": 1,
        		"comments": "",
        		"percent": 1.0,
    			"planted_date": new Date(),
        		"plant": [{
            		"id":"001",
        			"name": "Feeling green dark",
        			"percent": 1.0,
        			"plants": 32436,
        			"erp_plants": 32435,
        			"density": 47,
        			"planted_date": new Date(),
        			"erp_planted_date": new Date(),
        			"root": 0,
        			"veg": 12,
        			"rea": 54,
        			"ko": 10,
        			"harv": 1,
        			"oog_date": new Date(),
        			"vaca": 1,
        			"processed": true
        		    }, {
            		"id":"015",
        			"name": "Grand cherry",
        			"percent": 0.002,
        			"plants": 102,
        			"erp_plants": 102,
        			"density": 50,
        			"planted_date": new Date(),
        			"erp_planted_date": new Date(),
        			"root": 0,
        			"veg": 12,
        			"rea": 54,
        			"ko": 10,
        			"harv": 1,
        			"oog_date": new Date(),
        			"vaca": 3,
        			"processed": true
        		    }]
        		},
           		{"gh_bay": 2,
            		"comments": "",
        		    "percent": 0.5,
           			"planted_date": new Date(),
            		"plant": [{
            		    "id":"001",
            			"name": " Feeling green dark",
            			"percent": 0.5,
            			"plants": 32436,
            			"erp_plants": 32435,
            			"density": 47,
        			"planted_date": new Date(),
        			"erp_planted_date": new Date(),
        			"root": 0,
        			"veg": 12,
        			"rea": 54,
        			"ko": 10,
        			"harv": 1,
        			"oog_date": new Date(),
        			"vaca": 1,
            			"processed": true
            		    }]
            		},
           		{"gh_bay": 3,
            		"comments": "",
        		    "percent": 0,
           			"planted_date": new Date(),
            		"plant": []
            		},
           		{"gh_bay": 4,
            		"comments": "",
        		    "percent": 0,
           			"planted_date": new Date(),
            		"plant": []
            		}
		        ],
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
			prevPage: ''	
		},

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf dummenorangetnv.view.MultipleAddPlants
		 */
			onInit: function() {
				var oSelectedBayModel = sap.ui.getCore().getModel("selectedBay");
				this.getView().setModel(oSelectedBayModel,"selectedBay");

				var oModel = new sap.ui.model.json.JSONModel(this.addPlantsMockup);
				this.getView().setModel(oModel,"multiAddModel");
				this.getView().getModel("multiAddModel").getData().prevPage=sap.ui.getCore().byId("__xmlview0").byId("AppId").getCurrentPage().getId();

				var multiAddToBaysList = this.getView().byId("multiAddToBaysListId");
				multiAddToBaysList.bindAggregation("items","multiAddModel>/Bays",this.multiAddToBaysListFactory.bind(this));
		
			},

		multiAddToBaysListFactory : function(sId,oContext) {
			var ourModel=oContext.getModel();
			var ourPath=oContext.getPath();
			var dateToDay=new Date();
			var oUIControl = null;
			var that=this;
			console.log(sId);
				var localList;
				if (oContext.getProperty("plant").length<1){
				    localList=
				    new sap.m.List({id: sId+"-innner", width:"100%", showNoData: false, 
				        items:[
           			    	new sap.m.CustomListItem({
            					width: "100%",
            					content:[
        							new sap.m.HBox({
        								items: [
        								// 	new sap.m.HBox({
        								// 		width:"4%",
        								// 		justifyContent:"Center",
        								// 		items: [
        								// 		    new sap.m.CheckBox()
        								// 		]
        								// 	}).addStyleClass(" ")
        									new sap.m.FlexBox({
        										width:"11%",
        										justifyContent:"Center",
        										items: [
                                    				new sap.m.DatePicker({ width:"91%", dateValue: oContext.getProperty("planted_date"),
                                    				valueFormat:'yyyy-ww-u', displayFormat :'yyyy-ww-u', 
                                    				change: function(){that.onDataChange(this,sId,oContext);}  
                                    				,  textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin ")
        										]
        									}).addStyleClass("")
        								]
        							})
            					]
            				}).addStyleClass(" bayDetGrayBackGround no-buttom-border")
				        ] });

				} else {
				    localList=new sap.m.List({id: sId+"-innner", width:"100%", showNoData: false });
				    localList.bindAggregation("items","multiAddModel>"+ourPath+"/plant",that.plantsAddToBaysListFactory.bind(that));
				}
				
				oUIControl = new sap.m.CustomListItem(sId, {
					width: "100%",
					content:[
    						new sap.m.VBox({
    							items:[
    								new sap.m.HBox({
    	                				width: "100%",
    									items: [
    										new sap.m.FlexBox({
    											width:"1%",
    											justifyContent:"Center",
    											items: [
    	                            	        	new sap.m.Text({ text: oContext.getProperty("gh_bay"), textAlign:"Center"}).addStyleClass("sapUiSmallMarginTop")
    											]
    										}).addStyleClass("")
    										,
    										new sap.m.HBox({
    											width:"4%",
    											justifyContent:"Center",
    											items: [
    											    new sap.m.CheckBox()
    											]
    										}).addStyleClass(" "),
   										    new sap.m.VBox({
    											width:"95%",
    								// 			justifyContent:"Start",
    											items: [
    	                            	        	localList
    											]
    										}).addStyleClass("")

    									    
    									]
    								}),
        						    new sap.m.ProgressIndicator({
        						        width: "20%",
        						        height: "16px",
        						        percentValue: oContext.getProperty("percent")*100,
        						        displayValue: oContext.getProperty("percent")*100+" %"
        						      //  ,state: "Success" 
        						    }).addStyleClass("sapUiSmallMarginTop")
							]	
						}).addStyleClass("sapUiSmallMarginTop sapUiTinyMarginBottom")
					]
				}).addStyleClass(" bayDetGrayBackGround");
			
			// oUIControl.setType(sap.m.ListType.Active);
			// oUIControl.attachPress(this.onItemSelected, this);
			return oUIControl;
		},
		
		plantsAddToBaysListFactory : function(sId,oContext) {
// 			var ourModel=oContext.getModel();
			var ourPath=oContext.getPath();
// 			var dateToDay=new Date();
			var oUIControl = null;
			var that=this;
				oUIControl = new sap.m.CustomListItem(sId, {
					width: "100%",
					content:[
								new sap.m.HBox({
									items: [
										new sap.m.FlexBox({
											width:"11%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.DatePicker({ width:"91%", dateValue: "{multiAddModel>planted_date}",
	                            				valueFormat:'yyyy-ww-u', displayFormat :'yyyy-ww-u', 
	                            				change: function(){that.onDataChange(this,sId,oContext);}  
	                            				,  textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin ")
											]
										}).addStyleClass(""),

										new sap.m.FlexBox({
											width:"18%",
											items: [
	                            				new sap.m.Text({ text: oContext.getProperty("id")+" "+oContext.getProperty("name"), textAlign:"Begin"}).addStyleClass("sapUiTinyMarginBegin")
											]
										}).addStyleClass(" sapUiSmallMarginTop "),
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
											width:"8%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Input({  width:"85%", value: oContext.getProperty("plants"),
	                            				change: function(){that.onDataChange(this,sId,oContext);}  
	                            				, textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin ")
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:"6%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Input({ width:"75%", value: oContext.getProperty("density"),
	                            				change: function(){that.onDataChange(this,sId,oContext);}  
	                            				, textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin")
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:"5.5%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Input({ width:"75%", value: oContext.getProperty("root"),
	                            				change: function(){that.onDataChange(this,sId,oContext);}  
	                            				,  textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin")
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:"5.5%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Input({ width:"75%", value: oContext.getProperty("veg"),
	                            				change: function(){that.onDataChange(this,sId,oContext);}  
	                            				,  textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin")
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:"5.5%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Input({ width:"75%", value: oContext.getProperty("rea"),
	                            				change: function(){that.onDataChange(this,sId,oContext);}  
	                            				,  textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin")
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:"5.5%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Input({ width:"75%", value: oContext.getProperty("ko"),
	                            				change: function(){that.onDataChange(this,sId,oContext);}  
	                            				,  textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin")
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:"5.5%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Input({ width:"75%", value: oContext.getProperty("harv"),
	                            				change: function(){that.onDataChange(this,sId,oContext);}  
	                            				,  textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin")
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:"11%",
											justifyContent:"Center",
											items: [
	               //             				new sap.m.Input({ width:"86%", value: { path : "bayDetailModel>oog/",
											     //   type: 'sap.ui.model.type.Date',
											     //   formatOptions: {
											     //     pattern: 'yyyy-ww-u'
											     //   }},
	               //             				change: function(){that.onOOGChange(this,sId,oContext);}  
	                            			// 	,   textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin")
	                            				new sap.m.DatePicker({ width:"90%", dateValue: "{multiAddModel>oog_date}",
	                            				valueFormat:'yyyy-ww-u', displayFormat :'yyyy-ww-u', 
	                            				change: function(){that.onDataChange(this,sId,oContext);}  
	                            				,  textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin ")
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:"5.5%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Input({ width:"75%", value: oContext.getProperty("vaca"), 
	                            				change: function(){that.onDataChange(this,sId,oContext);}  
	                            				, textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin")
											]
										}).addStyleClass("")
									]
								})
					]
				}).addStyleClass(" bayDetGrayBackGround no-buttom-border");
		
			return oUIControl;
		}		

	,onDataChange: function(elThis,sId,oContext){
	    var thisContr=this;
// 		console.log(this);
// 		console.log(elThis);
// 		console.log(sId);
		console.log(oContext);
// 		console.log(elThis.getBinding());
//      console.log(elThis.getValue());
// 		console.log(this.getView().byId(sId).getContent()[0].getItems());
// 		console.log(this.getView().byId(sId).getContent()[0].getItems()[0].getItems());
        var inputIndex;
		$.each(thisContr.getView().byId(sId).getContent()[0].getItems(), function (index, item) {
		  //  console.log(item.getItems()[0].getId());
		    if(item.getItems()[0].getId()==elThis.getId()){
		        inputIndex=index;
		        console.log(index);
		    }
		});
		if (2<inputIndex<6){
    	        var baySquare=thisContr.getView().getModel("multiAddModel").getData().Bay.square;
    	    switch(inputIndex) {
                case 3:
    				oContext.getModel().setProperty(oContext.getPath() + "/percent", elThis.getValue().substring(0,elThis.getValue().length-1));
            	    var percentageFullnes =	parseFloat(	oContext.getModel().getProperty(oContext.getPath() + "/percent"))/100;
            	    var plantPerSquare =	parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/density"));
            	    oContext.getModel().setProperty(oContext.getPath() + "/plants", Math.round(plantPerSquare*percentageFullnes*baySquare));
                break;
                case 4:
    				oContext.getModel().setProperty(oContext.getPath() + "/plants", parseInt(elThis.getValue()));
            	    var plantsQuantity =		parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/plants"));                         
            	    var plantPerSquare =	parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/density"));
            	    var percent=plantsQuantity*1000/(plantPerSquare*thisContr.getView().getModel("bayDetailModel").getData().Bay.square);
            	    percent=Math.round(percent)/10;
    				oContext.getModel().setProperty(oContext.getPath() + "/percent", percent);
                break;
                case 5:
    				oContext.getModel().setProperty(oContext.getPath() + "/square", elThis.getValue());
            	    var plantsQuantity =		parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/plants"));                         
            	    var plantPerSquare =	parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/density"));
            	    var percent=plantsQuantity*1000/(plantPerSquare*thisContr.getView().getModel("bayDetailModel").getData().Bay.square);
            	    percent=Math.round(percent)/10;
    				oContext.getModel().setProperty(oContext.getPath() + "/percent", percent);
                break;
            }
		}else if(10>inputIndex){
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
    				oContext.getModel().setProperty(oContext.getPath() + "/ko", parseInt(elThis.getValue()));
                break;
            }
    		var plantedDate =	new Date(	oContext.getModel().getProperty(oContext.getPath() + "/plantedDate"));
    	    var rootingDays =	parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/root"));                         
    	    var longDays =		parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/veg"));                         
    	    var shortDays =		parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/ko"));                         
    	    var reactionDays =	parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/rea"));                         
    	   // var harvestDays =	parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/harv"));                         
    	   // var vacantDays =	parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/vaca"));         
    		plantedDate.setDate(plantedDate.getDate()+rootingDays+longDays+shortDays+reactionDays);
    		oContext.getModel().setProperty(oContext.getPath() + "/oog", plantedDate);

		}else if (inputIndex>9){
       	    switch(inputIndex) {
                case 10:
    				oContext.getModel().setProperty(oContext.getPath() + "/harv", parseInt(elThis.getValue()));
                break;
                case 11:
        		  //  var oogDate=new Date(elThis.getDateValue());
           				oContext.getModel().setProperty(oContext.getPath() + "/oog", new Date(elThis.getDateValue()));
                break;
                case 12:
    				oContext.getModel().setProperty(oContext.getPath() + "/vaca", parseInt(elThis.getValue()));
                break;
            }
		}
    		// ourModel.submitChanges();
    	    oContext.getModel().refresh(true);
	}



	,onPrevPage: function(oEvent){
		var app=this.getView().getParent();
		app.to(app.getPreviousPage().getId());	
	}
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf dummenorangetnv.view.MultipleAddPlants
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf dummenorangetnv.view.MultipleAddPlants
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf dummenorangetnv.view.MultipleAddPlants
		 */
		//	onExit: function() {
		//
		//	}

	});

});