//ophalen van chart
google.charts.load('current', {packages: ['corechart']})
google.charts.setOnLoadCallback(drawChartColumn);

// chart voor g-kracht
function drawChartColumn() {
  
  // opmaak en info voor de data in de chart
  var data = google.visualization.arrayToDataTable([
    ['Tijd', 'G-kracht', { role: 'style' }, {role: 'annotation'}, 'Over', { role: 'style' }],
    ['Huidig', 5, 'fill-color: #005288', '5G', 15, 'fill-color: #fff']
  ]);

  // opmaak voor de chart
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

  // plaatsen van de chart met data en options op de pagina
  var chart = new google.visualization.ColumnChart(document.getElementById('columnchart'));
  chart.draw(data, options);      
}

// herschalen van de chart bij een resize van de browser
$(window).resize(function(){drawChartColumn();});

