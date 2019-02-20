

google.charts.load('current', {packages: ['corechart']})
google.charts.setOnLoadCallback(drawChartColumn);

function drawChartColumn() {
     
  var data = google.visualization.arrayToDataTable([
    ['Tijd', 'G-kracht', { role: 'style' }, {role: 'annotation'}, 'Over', { role: 'style' }],
    ['Huidig', 5, 'fill-color: #005288', '5G', 15, 'fill-color: #fff']
  ]);

  var options = {  
    tooltip: {trigger: 'none'},            
    legend: 'none',
    bar: {groupWidth: '100%'},        
    isStacked: true,                      
    annotations: {
      alwaysOutside: false,
      textStyle: {
        fontSize: 12,
        color: 'red'},          
    },
    chartArea: {
      backgroundColor: {stroke: '#005288', strokeWidth: '1'},
      width: '100%',
      height: '100%'        
    },       
    hAxis: {textPosition: 'none', minValue: 0},
    vAxis: {textPosition: 'none', minValue: 0, gridlines: {color: 'transparent'}, baselineColor: 'transparent'}
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('columnchart'));
  chart.draw(data, options);      
}

$(window).resize(function(){drawChartColumn();});

