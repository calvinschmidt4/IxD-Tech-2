
//ophalen van barchart
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(allCharts);


// opmaak voor alle de drie de barcharts voor voorraden
var options = {  
  tooltip: {trigger: 'none'},
  legend: 'none',
  bar: {groupWidth: '100%'},        
  isStacked: true,         
  annotations: {
    textStyle: {
      fontSize: 12},          
  },
  chartArea: {
    backgroundColor: {stroke: '#005288', strokeWidth: '1'},
    width: '100%',
    height: '100%'        
  },       
  hAxis: {textPosition: 'none', minValue: 0, gridlines: {color: 'transparent'}, baselineColor: 'transparent'},
  vAxis: {textPosition: 'none', minValue: 0}
};

// alle drie de charts in een function zodat die alle drie tegelijk aangesproken kunnen worden in de setonloadcallback en window resize
function allCharts() {
  drawChartOne();
  drawChartTwo();
  drawChartThree();
}

// chart voor water
function drawChartOne() {   
  
  // opmaak en info voor de data in de chart
  var data = google.visualization.arrayToDataTable([
    ['Genre', 'Over', { role: 'style' }, {role: 'annotation'}, 'Verbruikt', { role: 'style' }],
    ['Water', 730, 'fill-color: #0FEEEE', '730 / 1000 L', 270, 'fill-color: #fff']
  ]);    
  
  // 
  var chart = new google.visualization.BarChart(document.getElementById('chart_div_one'));
  chart.draw(data, options);      
}

// chart voor eten
function drawChartTwo() {
     
  // opmaak en info voor de data in de chart
  var data = google.visualization.arrayToDataTable([
    ['Genre', 'Over', { role: "style" }, {role: 'annotation'}, 'Verbruikt', { role: "style" }],
    ['Eten', 2430, 'fill-color: #0FEE61', '2430 / 3000 KG', 570, 'fill-color: #fff']
  ]);

  // plaatsen van de chart met data en options op de pagina
  var chart = new google.visualization.BarChart(document.getElementById('chart_div_two'));
  chart.draw(data, options);      
}

// chart voor persoonlijke verzoring
function drawChartThree() {
    
  // opmaak en info voor de data in de chart
  var data = google.visualization.arrayToDataTable([
    ['Genre', 'Over', { role: "style" }, {role: 'annotation'}, 'Verbruikt', { role: "style" }],
    ['Verzorging', 140, 'fill-color: #FFE854', '140 / 300 STUKS', 160, 'fill-color: #fff']
  ]);           
      
  // plaatsen van de chart met data en options op de pagina
  var chart = new google.visualization.BarChart(document.getElementById('chart_div_three'));
  chart.draw(data, options);      
}

// herschalen van de chart bij een resize van de browser
$(window).resize(function(){allCharts();});

