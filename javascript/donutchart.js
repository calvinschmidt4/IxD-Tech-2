google.charts.load("current", {packages:["corechart"]});

google.charts.setOnLoadCallback(drawChartDonut);

function drawChartDonut() {

  var data = google.visualization.arrayToDataTable([
    ['Zuurstof ', 'verbruik'],
    ['Over', 20000],
    ['Verbruikt', 25000]  
  ]);

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
  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}

$(window).resize(function(){drawChartDonut();});

