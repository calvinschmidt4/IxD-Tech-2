//ophalen van chart
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChartDonut);

// chart voor zuurstof
function drawChartDonut() {

  // opmaak en info voor de data in de chart
  var data = google.visualization.arrayToDataTable([
    ['Zuurstof', 'verbruik'],
    ['Over', 20000],
    ['Verbruikt', 25000]  
  ]);

  // opmaak voor de chart
  var options = {    
    chartArea: {width: '85%', height: '85%'},    
    slices: {
      0: {color: '#005288'},
      1: {color: '#fff'}
    },    
    legend: 'none',
    pieHole: 0.9,
    pieSliceTextStyle: {color: '#005288', fontSize: '12'},
    pieSliceBorderColor: '#005288',
    pieSliceText: 'label',
  };

  // plaatsen van de chart met data en options op de pagina
  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}

// herschalen van de chart bij een resize van de browser
$(window).resize(function(){drawChartDonut();});

