var now = new Date();

var ctx = document.getElementById("statChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: 
    {
        labels: ["Date1", "Date2", "Date3", "Date4", "Date5", "Date6"],
        datasets: [
            {
                label: 'Продажи',
                fill: false,
                lineTension: 0.1,
                pointBackgroundColor: 'black',
                data: [7, 5, 3, 5, 2, 8],
                borderWidth: 2,
                borderColor: 'black'
            }
        ]
    },
options: {
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Продажи в количестве'
                }
            }]
    }     
}
});
