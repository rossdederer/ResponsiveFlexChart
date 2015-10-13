   // Create Data Element    
           var data = [

  {
    "companyName":"mitsubisi",
    "location":"Japan",
    "currentSales":451,
    "unitsSold":56,
    "revenueStream":133
  },
  {
    "companyName":"Fiat",
    "location":"France",
    "currentSales":566,
    "unitsSold":91,
    "revenueStream":165
  },
  {
    "companyName":"Toyota",
    "location":"Japan",
    "currentSales":159,
    "unitsSold":9,
    "revenueStream":46
  },
  {
    "companyName":"Subaru",
    "location":"Japan",
    "currentSales":421,
    "unitsSold":60,
    "revenueStream":121
  },
  {
    "companyName":"Dodge",
    "location":"US",
    "currentSales":418,
    "unitsSold":57,
    "revenueStream":120
  },
  {
    "companyName":"Chevy",
    "location":"US",
    "currentSales":579,
    "unitsSold":84,
    "revenueStream":166
  },
  {
    "companyName":"Ford",
    "location":"US",
    "currentSales":69,
    "unitsSold":6,
    "revenueStream":19
  },
  {
    "companyName":"VW",
    "location":"Germany",
    "currentSales":543,
    "unitsSold":69,
    "revenueStream":146
  },
  {
    "companyName":"Audi",
    "location":"Germany",
    "currentSales":593,
    "unitsSold":83,
    "revenueStream":152
  }
];
            /**var dataelm = new wijmo.collections.CollectionView(data);
            
            // instantiate the new Wijmo controls, in this case a FlexChart and a FlexGrid 
            var responsiveFlexChart = new wijmo.chart.FlexChart('#responsiveFlexChart');
         
            var currentSalesSeries = new wijmo.chart.Series();
            var unitsSoldSeries = new wijmo.chart.Series();
            var revStreamSeries = new wijmo.chart.Series();
      
        
            currentSalesSeries.name = 'Current Sales';
            currentSalesSeries.binding = 'currentSales';
            currentSalesSeries.chartType = wijmo.chart.ChartType.Bar;
            currentSalesSeries.bindingX="companyName"
            currentSalesSeries.visibility ="Visible";

            unitsSoldSeries.name = 'Number of Cars Sold';
            unitsSoldSeries.binding = 'unitsSold';
            unitsSoldSeries.chartType = wijmo.chart.ChartType.Bar;
            unitsSoldSeries.bindingX="companyName"
            unitsSoldSeries.visibility ="Visible";
            
            revStreamSeries.name = 'Automaker Revunue Stream(b)';
            revStreamSeries.binding = 'revenueStream';
            revStreamSeries.chartType = wijmo.chart.ChartType.Bar;
            revStreamSeries.bindingX="companyName"
            revStreamSeries.visibility ="Visible";

            responsiveFlexChart.series.push(revStreamSeries);
           //responsiveFlexChart.series.push(locationSeries);
            responsiveFlexChart.series.push(currentSalesSeries);
            responsiveFlexChart.series.push(unitsSoldSeries);

            responsiveFlexChart.itemsSource = dataelm;
            responsiveFlexChart.bindingX = "companyName";
            **/
            
            // Put the data array into a newly instantiated collectionView 
            var dataelm = new wijmo.collections.CollectionView(data);
            
            // instantiate the new Wijmo controls, in this case a FlexChart and a FlexGrid 
            var responsiveFlexChart = new wijmo.chart.FlexChart('#responsiveFlexChart');
           
        
            // instantiate some chart series based on our data model. 
            var locationSeries = new wijmo.chart.Series();
            var currentSalesSeries = new wijmo.chart.Series();
            var unitsSoldSeries = new wijmo.chart.Series();
            var revStreamSeries = new wijmo.chart.Series();
         

            
            // Define some initial load properties of the grid control
            responsiveFlexChart.palette = wijmo.chart.Palettes.coral;
            
            // Bind our responsive data set to our CV, this is the only binding.  We want to bind our x axis to player name 
            responsiveFlexChart.itemsSource = dataelm;
            responsiveFlexChart.bindingX = 'companyName';
            
            // Create the Line Marker for the FlexChart 
            var lm = new wijmo.chart.LineMarker(responsiveFlexChart, {
                lines: wijmo.chart.LineMarkerLines.Both,
                interaction: wijmo.chart.LineMarkerInteraction.Move,
                alignment : wijmo.chart.LineMarkerAlignment.Top
            });
            lm.content = function (ht) {
                // show y-value
                return lm.y.toFixed(2);
            }
            
            responsiveFlexChart.addEventListener(window, 'resize', configureChart);

            // Define some properties of our series 
            locationSeries.name = 'Loacted in ';
            locationSeries.binding = 'location';
            locationSeries.chartType = wijmo.chart.ChartType.Bar;
            locationSeries.bindingX="companyName"
            locationSeries.visibility ="Hidden";
        
            currentSalesSeries.name = 'Current Sales';
            currentSalesSeries.binding = 'currentSales';
            currentSalesSeries.chartType = wijmo.chart.ChartType.Bar;
            currentSalesSeries.bindingX="companyName"
            currentSalesSeries.visibility ="Visible";

            unitsSoldSeries.name = 'Number of Cars Sold';
            unitsSoldSeries.binding = 'unitsSold';
            unitsSoldSeries.chartType = wijmo.chart.ChartType.Bar;
            unitsSoldSeries.bindingX="companyName"
            unitsSoldSeries.visibility ="Visible";
            
            revStreamSeries.name = 'Automaker Revunue Stream(b)';
            revStreamSeries.binding = 'revenueStream';
            revStreamSeries.chartType = wijmo.chart.ChartType.Bar;
            revStreamSeries.bindingX="companyName"
            revStreamSeries.visibility ="Visible";

            
            // Push the series into Responsive FlexChart series observcurrentSalesle array.    Note that some are hidden fields 
            responsiveFlexChart.series.push(revStreamSeries);
           //responsiveFlexChart.series.push(locationSeries);
            responsiveFlexChart.series.push(currentSalesSeries);
            responsiveFlexChart.series.push(unitsSoldSeries);



            // after initial load is finished, call the configure function
            configureChart();
            function configureChart() 
            { //alert();
                var phone = responsiveFlexChart.hostElement.getBoundingClientRect().width <=999;
                var desktop = responsiveFlexChart.hostElement.getBoundingClientRect().width > 999 && responsiveFlexChart.hostElement.getBoundingClientRect().width <2000;
                    
                if( phone )
                {   
                    // Toggle whether or not you want to see the global line markers 
                    lm.isVisible = false;
                    
                    responsiveFlexChart.itemsSource = dataelm;
                    responsiveFlexChart.bindingX = "companyName";
                    // define some shorter chart titles to fit smaller device screens 
                    responsiveFlexChart.header = "Sales - Global AutoMakers";
                    responsiveFlexChart.footer = "Mobile Phone View";

                    // Configure selection mode 
                    responsiveFlexChart.selectionMode= wijmo.chart.SelectionMode.Point;

                    // Clear out any saved state in the series and push only the unitsSoldSeries into the view 
                    responsiveFlexChart.series.clear();
                    unitsSoldSeries.visibility ="Visible";
                    responsiveFlexChart.series.push(currentSalesSeries);

                    // Displaying one series so no legend is needed 
                    responsiveFlexChart.legend.position ="None";

                    // Customize Axis 
                    responsiveFlexChart.axisX.labelAngle = 90;
                    responsiveFlexChart.axisY.labels =false;
                    responsiveFlexChart.axisY.majorUnit = 100;
                    // Configure Axis 
                    
                    // Customize ToolTip and Data Layer 
                    responsiveFlexChart.tooltip.content = '<h2>{companyName}</h2>Located In: {location} <br> Current Sales: {currentSales} <br>Number of Units Sold: {unitsSold}  <br>   Revenue Stream: {revenueStream}';
                    responsiveFlexChart.dataLabel.position = "Top";
                    responsiveFlexChart.dataLabel.content = "{value}";
                }
                else if ( desktop )
                {

                    lm.isVisible = true;
                    
                    //Configure header and footer information
                    responsiveFlexChart.header = "A FlexChart showing Information about Global Auto Markers";
                    responsiveFlexChart.footer = "Desktop View";

                    // Push the series into Responsive FlexChart.    Note that some are hidden 
                    responsiveFlexChart.series.clear();
                    responsiveFlexChart.series.push(revStreamSeries);
                    //responsiveFlexChart.series.push(locationSeries);
                    responsiveFlexChart.series.push(currentSalesSeries);
                    responsiveFlexChart.series.push(unitsSoldSeries);
           

                    // Define which series we want to show or define how the user is going to interact with them
                    revStreamSeries.visibility ="Visible";
                    locationSeries.visibility ="Visible";
                    currentSalesSeries.visibility ="Visible";
                    unitsSoldSeries.visibility ="Visible";
        
                    
                    var axis2 = new wijmo.chart.Axis();
                    axis2.position = "Right";
                 
                    axis2.title = "Revunue in Terms of Billions ( line FlexChart )"
                    // axis2.itemsSource = 
                    revStreamSeries.axisY = axis2;
                  
                   // responsiveFlexChart.refresh();
                    
                    revStreamSeries.chartType = wijmo.chart.ChartType.Line;
                    responsiveFlexChart.series.push(BASeries);
                    
                    // Configure Axis 
                    responsiveFlexChart.axisX.labelAngle =0;  
                    responsiveFlexChart.axisY.labels =true;
                    responsiveFlexChart.axisY.majorUnit = 50;
                    responsiveFlexChart.axisY.title = "Number of Units ( bar FlexChart )";
                    // Configure Legend and stacking props
                    responsiveFlexChart.legend.position ="Bottom";
                    responsiveFlexChart.legendToggle = false;

                    //Configure ToolTips
                    responsiveFlexChart.tooltip.content = '<h2>{companyName}</h2>Located In: {location} <br> Current Sales: {currentSales} <br>Number of Units Sold: {unitsSold}  <br>   Revenue Stream: {revenueStream}';
                    responsiveFlexChart.dataLabel.position = "None";
                    responsiveFlexChart.dataLabel.content = "{R}";
                }
                else
                {
                 // Unkown device, load default 
                }
            }
           