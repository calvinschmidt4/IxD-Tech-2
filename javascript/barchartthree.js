

google.charts.load('current', {packages: ['corechart', 'bar']})
google.charts.setOnLoadCallback(drawChartThree);

function drawChartThree() {
     
  var data = google.visualization.arrayToDataTable([
    ['Genre', 'Over', { role: "style" }, {role: 'annotation'}, 'Verbruikt', { role: "style" }],
    ['Water', 140, 'fill-color: #FFE854', '140 / 300 STUKS', 160, 'fill-color: #fff']
  ]);            
        
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
  var chart = new google.visualization.BarChart(document.getElementById('chart_div_three'));
  chart.draw(data, options);      
}

$(window).resize(function(){drawChartThree();});

