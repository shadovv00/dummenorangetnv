sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("dummenorangetnv.controller.MultipleAddPlants", {
		addPlantsMockup: {
		    Bays: [
        		{"gh_bay": 1,
               		"comments": "",
        		    "percent": 0,
    				"square": 75,
    				"description": 'left',
           			"planted_date": new Date(),
            		"plant": []

        		},
           		{"gh_bay": 2,
               		"comments": "",
        		    "percent": 0,
    				"square": 1000,
    				"description": 'left',
           			"planted_date": new Date(),
            		"plant": []

            		},
           		{"gh_bay": 3,
           		    "comments": "",
        		    "percent": 0,
    				"square": 300,
    				"description": 'left',
           			"planted_date": new Date(),
            		"plant": []
            		},
           		{"gh_bay": 4,
            		"comments": "",
        		    "percent": 0,
    				"square": 75,
    				"description": 'left',
           			"planted_date": new Date(),
            		"plant": []
            		}
		        ],
		    LastRoundBays: [
        		{"gh_bay": 1,
        		"comments": "",
        		"percent": 1.0,
				"square": 75,
				"description": 'left',
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
				"square": 1000,
				"description": 'left',
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
				"square": 75,
				"description": 'left',
           			"planted_date": new Date(),
            		"plant": []
            		},
           		{"gh_bay": 4,
            		"comments": "",
        		    "percent": 0,
				"square": 75,
				"description": 'left',
           			"planted_date": new Date(),
            		"plant": []
            		}
		        ],

			dateToDay : new Date(),
			dateEnd : new Date(),
			Plants: [
					{id: '001',
					name: "Feeling green dark",
        			density: 47,
					root: 0,
					veg: 12,
        			ko: 1,
					rea: 54,
					harv: 1,
					vaca: 0
					},
					{id: '015',
					name: "Grand cherry",
        			density: 50,
					root: 0,
					veg: 12,
        			ko: 2,
					rea: 52,
					harv: 1,
					vaca: 0
					}
				],
			plantsPercent:0,
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
			var indicatorVal=oContext.getProperty("percent");
			var indicatorState=sap.ui.core.ValueState.Warning;
			if (indicatorVal>1){
			    indicatorVal=1;
			indicatorState=sap.ui.core.ValueState.None;
			}
// 			console.log(sId);
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
                                    				change: function(){that.onEmptyDataChange(this,sId,oContext);}  
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
					press: function(){that.onBayPress(this,sId,oContext);},
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
    											    new sap.m.CheckBox({id:sId+"-CheckBox", 
        											    select: function(){that.onBaySelectCheckBox(sId+"-CheckBox",sId,oContext);}
        											    }).addStyleClass("multipleAddPlantsCheckBoxes")
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
        						        state: indicatorState,
        						        percentValue: indicatorVal*100,
        						        displayValue: Math.round(oContext.getProperty("percent")*1000)/10+" %"
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
											width:11/0.95+"%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.DatePicker({ width:"91%", dateValue: "{multiAddModel>planted_date}",
	                            				valueFormat:'yyyy-ww-u', displayFormat :'yyyy-ww-u', 
	                            				change: function(){that.onDataChange(this,sId,oContext);}  
	                            				,  textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin ")
											]
										}).addStyleClass(""),

										new sap.m.FlexBox({
											width:18/0.95+"%",
											items: [
	                            				new sap.m.Text({ text: oContext.getProperty("id")+" "+oContext.getProperty("name"), textAlign:"Begin"}).addStyleClass("sapUiTinyMarginBegin")
											]
										}).addStyleClass(" sapUiSmallMarginTop "),
										new sap.m.FlexBox({
											width:8/0.95+"%",
											justifyContent:'Center',
											items: [
	                            				new sap.m.Input({ width:"81%", value: oContext.getProperty("percent")+"%" ,
	                            				change: function(){that.onDataChange(this,sId,oContext);}  
	                            				, textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin")
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:8/0.95+"%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Input({  width:"85%", value: oContext.getProperty("plants"),
	                            				change: function(){that.onDataChange(this,sId,oContext);}  
	                            				, textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin ")
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:6/0.95+"%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Input({ width:"75%", value: oContext.getProperty("density"),
	                            				change: function(){that.onDataChange(this,sId,oContext);}  
	                            				, textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin")
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:5.5/0.95+"%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Input({ width:"75%", value: oContext.getProperty("root"),
	                            				change: function(){that.onDataChange(this,sId,oContext);}  
	                            				,  textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin")
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:5.5/0.95+"%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Input({ width:"75%", value: oContext.getProperty("veg"),
	                            				change: function(){that.onDataChange(this,sId,oContext);}  
	                            				,  textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin")
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:5.5/0.95+"%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Input({ width:"75%", value: oContext.getProperty("rea"),
	                            				change: function(){that.onDataChange(this,sId,oContext);}  
	                            				,  textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin")
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:5.5/0.95+"%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Input({ width:"75%", value: oContext.getProperty("ko"),
	                            				change: function(){that.onDataChange(this,sId,oContext);}  
	                            				,  textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin")
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:5.5/0.95+"%",
											justifyContent:"Center",
											items: [
	                            				new sap.m.Input({ width:"75%", value: oContext.getProperty("harv"),
	                            				change: function(){that.onDataChange(this,sId,oContext);}  
	                            				,  textAlign:"End" }).addStyleClass("sapUiTinyMarginBegin")
											]
										}).addStyleClass(""),
										new sap.m.FlexBox({
											width:11/0.95+"%",
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
											width:5.5/0.95+"%",
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


    ,onPlantPercentChange: function(oEvent) {
        var plantsPercent=Math.round(parseFloat(sap.ui.getCore().byId("plantPercentId").getValue())*10)/10;
        if (plantsPercent>100){
            sap.ui.getCore().byId("plantPercentId").setValue(100);
        }
        this.getView().getModel("multiAddModel").getData().plantsPercent=plantsPercent;
        this.getView().getModel("multiAddModel").refresh();
    }

	,onBayPress: function(elThis,sId,oContext){
	   // this.getView().byId(sId+"CheckBox").getSelected()
	    console.log(this.getView().byId(sId+"-CheckBox").getSelected());
    }
    
	,onBaySelectCheckBox: function(thisEl,sId,oContext) {
	    var state=this.getView().byId(thisEl).getSelected();
	    if (state==false){
	        this.getView().byId("mainSelectCheckBoxId").setSelected(state);
	    }
	}
	
	,onEmptyDataChange: function(elThis,sId,oContext){
        if (elThis.getValue()==''){
            elThis.setValue(0);
        }
        oContext.getModel().setProperty(oContext.getPath() + "/planted_date", new Date(elThis.getDateValue()));
		// ourModel.submitChanges();
	    oContext.getModel().refresh(true);
	}

	,onDataChange: function(elThis,sId,oContext){
	    var thisContr=this;
	    var thisBayPath=oContext.getPath().substring(0,oContext.getPath().indexOf("/plant"));
// 		console.log(this);
// 		console.log(elThis);
// 		console.log(sId);
// 		console.log(oContext);
// 		console.log(oContext.getPath().indexOf("/plant"));
// 		console.log(oContext.getPath().substring(0,oContext.getPath().indexOf("/plant")));
// 		console.log(elThis.getBinding());
//      console.log(elThis.getValue());
// 		console.log(this.getView().byId(sId).getContent()[0].getItems());
// 		console.log(this.getView().byId(sId).getContent()[0].getItems()[0].getItems());
        var inputIndex;
        if (elThis.getValue()==''){
            elThis.setValue(0);
        }
		$.each(thisContr.getView().byId(sId).getContent()[0].getItems(), function (index, item) {
		  //  console.log(item.getItems()[0].getId());
		    if(item.getItems()[0].getId()==elThis.getId()){
		        inputIndex=index;
		        console.log(index);
		    }
		});
		if ((1<inputIndex)&&(inputIndex<5)){
    	        var baySquare=thisContr.getView().getModel("multiAddModel").getProperty(thisBayPath + "/square");
    	    switch(inputIndex) {
                case 2:
    				oContext.getModel().setProperty(oContext.getPath() + "/percent", parseFloat(elThis.getValue()));
            	    var percentageFullnes =	parseFloat(	oContext.getModel().getProperty(oContext.getPath() + "/percent"))/100;
            	    var plantPerSquare =	parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/density"));
            	    oContext.getModel().setProperty(oContext.getPath() + "/plants", Math.round(plantPerSquare*percentageFullnes*baySquare));
                break;
                case 3:
    				oContext.getModel().setProperty(oContext.getPath() + "/plants", parseInt(elThis.getValue()));
            	    var plantsQuantity =		parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/plants"));                         
            	    var plantPerSquare =	parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/density"));
            	    var percent=plantsQuantity*1000/(plantPerSquare*baySquare);
            	    percent=Math.round(percent)/10;
    				oContext.getModel().setProperty(oContext.getPath() + "/percent", percent);
                break;
                case 4:
    				oContext.getModel().setProperty(oContext.getPath() + "/density", elThis.getValue());
            	    var plantsQuantity =		parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/plants"));                         
            	    var plantPerSquare =	parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/density"));
            	    var percent=plantsQuantity*1000/(plantPerSquare*baySquare);
            	    percent=Math.round(percent)/10;
    				oContext.getModel().setProperty(oContext.getPath() + "/percent", percent);
                break;
            }
            var bayPercent=0;
    		$.each(oContext.getModel().getProperty(thisBayPath + "/plant"), function (index, item) {
    		    bayPercent+=item.percent;
    		});    
    	    bayPercent=Math.round(bayPercent*10)/1000;
    		oContext.getModel().setProperty(thisBayPath + "/percent", bayPercent);
            
		}else {
		    if(inputIndex==0||9>inputIndex){
        	    switch(inputIndex) {
                    case 0:
                        // console.log(elThis.getDateValue());
                        // console.log(new Date(elThis.getDateValue()));
        				oContext.getModel().setProperty(oContext.getPath() + "/planted_date", new Date(elThis.getDateValue()));
                    break;
                    case 5:
        				oContext.getModel().setProperty(oContext.getPath() + "/root", parseInt(elThis.getValue()));
                    break;
                    case 6:
        				oContext.getModel().setProperty(oContext.getPath() + "/veg", parseInt(elThis.getValue()));
                    break;
                    case 7:
        				oContext.getModel().setProperty(oContext.getPath() + "/rea", parseInt(elThis.getValue()));
                    break;
                    case 8:
        				oContext.getModel().setProperty(oContext.getPath() + "/ko", parseInt(elThis.getValue()));
                    break;
                }
        		var plantedDate =	new Date(	oContext.getModel().getProperty(oContext.getPath() + "/planted_date"));
        		console.log(plantedDate);
        	    var rootingDays =	parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/root"));                         
        	    var longDays =		parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/veg"));                         
        	    var shortDays =		parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/ko"));                         
        	    var reactionDays =	parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/rea"));                         
        	   // var harvestDays =	parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/harv"));                         
        	   // var vacantDays =	parseInt(	oContext.getModel().getProperty(oContext.getPath() + "/vaca"));         
        		plantedDate.setDate(plantedDate.getDate()+rootingDays+longDays+shortDays+reactionDays);
        		console.log(plantedDate);
        		oContext.getModel().setProperty(oContext.getPath() + "/oog_date", plantedDate);
    
    		}else if (inputIndex>8){
           	    switch(inputIndex) {
                    case 9:
        				oContext.getModel().setProperty(oContext.getPath() + "/harv", parseInt(elThis.getValue()));
                    break;
                    case 10:
            		  //  var oogDate=new Date(elThis.getDateValue());
               				oContext.getModel().setProperty(oContext.getPath() + "/oog_date", new Date(elThis.getDateValue()));
                    break;
                    case 11:
        				oContext.getModel().setProperty(oContext.getPath() + "/vaca", parseInt(elThis.getValue()));
                    break;
                }
    		}
		}
    		// ourModel.submitChanges();
    	    oContext.getModel().refresh(true);
	}

	,onMainSelectCheckBox: function(oEvent) {
	    var state=this.getView().byId("mainSelectCheckBoxId").getSelected();
	   // console.log(oEvent);    
	   // console.log(oEvent.getSource()) ; 
		$.each(this.getView().byId("multiAddToBaysListId").getItems(), function (index, item) {
		  item.getContent()[0].getItems()[0].getItems()[1].getItems()[0].setSelected(state);
		});	    
	}


	,openMultiPlantsAddDialog: function(elThis,sId,oContext) {
		this.newMultiPlantsAddDialog = sap.ui.xmlfragment("dummenorangetnv.fragments.MultipleAddPlantsDialog", this);
		this.getView().addDependent(this.newMultiPlantsAddDialog);
		jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this.newMultiPlantsAddDialog);
		this.newMultiPlantsAddDialog.open();
	}

	,saveMultiPlantsAddDialog: function(oEvent) {
	    if (this.getView().getModel("multiAddModel").getData().plantsPercent){
    		var plantId = sap.ui.getCore().byId("plantSelectorId").getSelectedKey();
    		var that=this;
    		var thisPlant;
    		$.each(this.getView().getModel("multiAddModel").getData().Plants, function (index, plant) {
    	    if (plant.id === plantId) {
    	    	thisPlant= $.parseJSON(JSON.stringify(plant));
    	    	thisPlant.percent=that.getView().getModel("multiAddModel").getData().plantsPercent;
    	   // 	thisPlant= $.parseJSON(JSON.stringify(thisPlant));
    	   // 	console.log(thisPlant);
    	    }
    		});
    // 		$.each(that.getView().getModel("multiAddModel").getData().Bays, function (index, bay) {
    		$.each(that.getView().byId("multiAddToBaysListId").getItems(), function (index, item) {
    		    if (item.getContent()[0].getItems()[0].getItems()[1].getItems()[0].getSelected()){
    		        
    		        console.log(item); 
    		        console.log(item.oBindingContexts.multiAddModel.sPath); 

     		        var model=that.getView().getModel("multiAddModel");
     		        var path=item.oBindingContexts.multiAddModel.sPath;
    		        var bay=model.getProperty(path);
    		        
                    var currentPlant=$.parseJSON(JSON.stringify(thisPlant));
                    currentPlant.plants=Math.round(currentPlant.density* currentPlant.percent*bay.square/100);
                    currentPlant.planted_date=bay.planted_date;
                    var oogDate=new Date(bay.planted_date);
                    oogDate.setDate(oogDate.getDate()+currentPlant.root+currentPlant.veg+currentPlant.ko+currentPlant.rea);
                    currentPlant.oog_date=oogDate;
                    bay.percent=bay.percent+currentPlant.percent/100;
                    bay.plant.push(currentPlant);
                    model.setProperty(path, bay);
    		    }
    		  //  var currentPlant=$.parseJSON(JSON.stringify(thisPlant));
     		 //   currentPlant.plants=Math.round(currentPlant.density* currentPlant.percent*bay.square/100);
    		  //  currentPlant.planted_date=bay.planted_date;
        //         var oogDate=new Date(bay.planted_date);
        // 		oogDate.setDate(oogDate.getDate()+currentPlant.root+currentPlant.veg+currentPlant.ko+currentPlant.rea);
    		  //  currentPlant.oog_date=oogDate;
    		  //  bay.percent=bay.percent+currentPlant.percent/100;
    		  //  bay.plant.push(currentPlant);
    		});
            that.getView().getModel("multiAddModel").refresh(true);	    
	    }
    		this.closeMultiPlantsAddDialog();	        
	}

	,closeMultiPlantsAddDialog: function(oEvent) {
	    this.getView().getModel("multiAddModel").getData().plantsPercent=0;
		this.newMultiPlantsAddDialog.close();
		this.newMultiPlantsAddDialog.destroy();
		this.getView().byId("mainSelectCheckBoxId").setSelected(false);
	}

    ,onCopyLastRound:function(sId,oContext) {
        var thisModel=this.getView().getModel("multiAddModel");
        
//         $.each(this.getView().byId("multiAddToBaysListId").getItems(), function (index, item) {
// 		  item.getContent()[0].getItems()[0].getItems()[1].getItems()[0].setSelected(state);
// 		});	    

        
        
        thisModel.setProperty("/Bays",$.extend(true, {}, thisModel.getProperty("/LastRoundBays")));
        this.getView().getModel("multiAddModel").refresh(true);
    }

    ,onMultiAddingPlantCancel:function(sId,oContext) {
		$.each(this.getView().getModel("multiAddModel").getData().Bays, function (index, bay) {
		    bay.plant=[];
		    bay.percent=0;
		});
        this.getView().getModel("multiAddModel").refresh(true);	    
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