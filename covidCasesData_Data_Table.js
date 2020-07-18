({
    doInit : function(cmp , event, helper) {
        cmp.set("v.showSpinner",true);
        cmp.set('v.myColumns', [
            { 
                label: 'Country', 
                fieldName: 'Country',
                type: 'text',
                sortable : true,
                initialWidth: 180,
                wrapText: true,
            },
            { 
                label: 'New Confirmed', 
                fieldName: 'NewConfirmed',
                type: 'number',
                sortable : true,
                initialWidth: 200,
                wrapText: true,
                cellAttributes: 
                { 
                    alignment: "left",
                }
            },
            { 
                label: 'Total Confirmed', 
                fieldName: 'TotalConfirmed',
                type: 'number',
                sortable : true,
                initialWidth: 200,
                wrapText: true,
                cellAttributes: 
                { 
                    alignment: "left",
                }
            },
            { 
                label: 'New Deaths', 
                fieldName: 'NewDeaths',
                type: 'number',
                sortable : true,
                initialWidth: 200,
                wrapText: true,
                cellAttributes: 
                { 
                    alignment: "left",
                }
            },
            { 
                label: 'Total Deaths', 
                fieldName: 'TotalDeaths',
                type: 'number',
                sortable : true,
                initialWidth: 200,
                wrapText: true,
                cellAttributes: 
                { 
                    alignment: "left",
                }
            },
            { 
                label: 'New Recovered', 
                fieldName: 'NewRecovered',
                type: 'number',
                sortable : true,
                initialWidth: 200,
                wrapText: true,
                cellAttributes: 
                { 
                    alignment: "left",
                }
            },
            { 
                label: 'Total Recovered', 
                fieldName: 'TotalRecovered',
                type: 'number',
                sortable : true,
                initialWidth: 200,
                wrapText: true,
                cellAttributes: 
                { 
                    alignment: "left",
                }
            }
        ]);
        helper.getData(cmp);
        cmp.set('v.SearchValue','');
    },
    updateColumnSorting: function (cmp, event, helper) {
        var fieldName = event.getParam('fieldName');
        var sortDirection = event.getParam('sortDirection');
        cmp.set("v.sortedBy", fieldName);
        cmp.set("v.sortedDirection", sortDirection);
        helper.sortData(cmp, fieldName, sortDirection);
    }, 
    searchByCountry: function(component,event,helper){
        var value = event.getSource().get("v.value");
        var rec= component.get('v.myData');
        var recDup= component.get('v.myDataDup');
        console.log('==enteredValue '+value);
        if(value){
            var recs=[];
            for(var n in rec){
                if(rec[n].Country.toLowerCase().includes(value.toLowerCase())){
                    recs.push(rec[n]); 
                }
            }
            component.set("v.showMessage",true);
            component.set("v.myDataDup",recs);
        }
        else{
            component.set("v.myDataDup",rec);
            component.set("v.showMessage",false);
        }
    },
    handleLoadMore: function(component, event, helper) {
        helper.fetchNextData(component,event,helper);
    },
})
