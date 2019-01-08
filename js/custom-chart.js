var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green"],
        datasets: [{
            label: 'Teste de Gráfico 01',
            data: [12, 19, 3, 5, 2, 3],
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

var ctx = document.getElementById("myChart2");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue"],
        datasets: [{
            label: 'Teste de Gráfico 02',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#00618b',
                '#590052'
            ],
            borderColor: [
                '#00618b',
                '#590052'
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