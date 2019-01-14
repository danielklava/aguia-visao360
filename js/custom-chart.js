var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"],
        datasets: [{
            label: 'Teste de Gráfico 01',
            data: [30, 80, 50, 100, 30, 80, 50, 100, 50, 120, 50, 30],
            backgroundColor: [
                '#be1623',
                '#724c7f',
                '#146ab3',
                '#3fae69',
                '#be1623',
                '#724c7f',
                '#146ab3',
                '#3fae69',
                '#be1623',
                '#724c7f',
                '#146ab3',
                '#3fae69'
                
            ],
            borderColor: [
                '#be1623',
                '#724c7f',
                '#146ab3',
                '#3fae69',
                '#be1623',
                '#724c7f',
                '#146ab3',
                '#3fae69',
                '#be1623',
                '#724c7f',
                '#146ab3',
                '#3fae69'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var ctx = document.getElementById("myChart2");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2016", "2017", "2018", "2019"],
        datasets: [{
            label: 'Teste de Gráfico 02',
            data: [90, 120, 220, 20],
            backgroundColor: [
                '#be1623',
                '#724c7f',
                '#146ab3',
                '#3fae69'
            ],
            borderColor: [
                '#be1623',
                '#724c7f',
                '#146ab3',
                '#3fae69'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});