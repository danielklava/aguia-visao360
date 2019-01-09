var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"],
        datasets: [{
            label: 'Teste de Gráfico 01',
            data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#00618b',
                '#590052',
                '#97138b',
                '#00be82',
                '#00618b',
                '#590052',
                '#97138b',
                '#00be82',
                '#00618b',
                '#590052',
                '#97138b',
                '#00be82'
            ],
            borderColor: [
                '#00618b',
                '#590052',
                '#97138b',
                '#00be82',
                '#00618b',
                '#590052',
                '#97138b',
                '#00be82',
                '#00618b',
                '#590052',
                '#97138b',
                '#00be82'
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
        labels: ["EXTRA PESADO", "LEVE", "MEDIO", "MEIO PESADO"],
        datasets: [{
            label: 'Teste de Gráfico 02',
            data: [30, 80, 50, 100],
            backgroundColor: [
                '#00618b',
                '#590052',
                '#97138b',
                '#00be82'
            ],
            borderColor: [
                '#00618b',
                '#590052',
                '#97138b',
                '#00be82'
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