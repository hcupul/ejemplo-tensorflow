window.onload = function(){
    var valoresX = [-1, 0, 1, 2, 3, 4];
    var valoresY = [-3, -1, 1, 3, 5, 7];
    crearGrafica(valoresX, valoresY);
};

async function calcular() {
    var checks = document.getElementById("chkIteraciones");
    var iteraciones = checks.elements["chkIteraciones"].value;
    var valoresX = [-1, 0, 1, 2, 3, 4];
    var valoresY = [-3, -1, 1, 3, 5, 7];

    const model = tf.sequential();
    model.add(tf.layers.dense({units: 1, inputShape: [1]}));

    model.compile({
        loss: 'meanSquaredError',
        optimizer: 'sgd'
    });

    const xs = tf.tensor2d(valoresX, [6, 1]);
    const ys = tf.tensor2d(valoresY, [6, 1]);

    try {
        document.getElementById("dvResultado").innerText = "Calculando, por favor espere...";
        await model.fit(xs, ys, {epochs: iteraciones});
        var tensor = model.predict(tf.tensor2d([5], [1, 1]));
        var tensorData = tensor.dataSync();
        var resultado = tensorData[0].toFixed(3);
        document.getElementById("dvResultado").innerText = "Resultado: " + resultado;
        
        valoresX.push(5);
        valoresY.push(resultado);
        crearGrafica(valoresX, valoresY);
    } catch (err) {
        document.getElementById("dvResultado").innerText = "¡Ocurrió un error! Intente de nuevo";
        console.error(err);
    }
}

function crearGrafica(valoresX, valoresY) {
    var chartColors = window.chartColors;
    var gradient = null;
    var width = null;
    var height = null;
    var config = {
        type: 'line',
        data: {
            labels: valoresX,
            datasets: [{
                    label: 'Valor',
                    borderColor: function (context) {
                        var chartArea = context.chart.chartArea;

                        if (!chartArea) {
                            // This case happens on initial chart load
                            return null;
                        }

                        var chartWidth = chartArea.right - chartArea.left;
                        var chartHeight = chartArea.bottom - chartArea.top;
                        if (gradient === null || width !== chartWidth || height !== chartHeight) {
                            // Create the gradient because this is either the first render
                            // or the size of the chart has changed
                            width = chartWidth;
                            height = chartHeight;
                            var ctx = context.chart.ctx;
                            gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                            gradient.addColorStop(0, chartColors.blue);
                            gradient.addColorStop(0.5, chartColors.yellow);
                            gradient.addColorStop(1, chartColors.red);
                        }

                        return gradient;
                    },
                    data: valoresY,
                    fill: false,
                }]
        },
        options: {
            responsive: true,
            legend: {
                display: false
            },
            elements: {
                point: {
                    radius: customRadius,
                    display: true
                }
            },
            title: {
                display: false,
                text: 'Gráfica'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
                displayColors: false,
                bodyFontSize: 14,
                xPadding: 10,
                yPadding: 10,
                callbacks: {
                    title: function (tooltipItems, data) {
                        return '';
                    },
                    label: function (tooltipItem, data) {
                        var datasetLabel = '';
                        var label = data.labels[tooltipItem.index];
                        return data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                    }
                }
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Y'
                        }
                    }],
                yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'X'
                        }
                    }]
            },
            layout: {
                padding: {
                    left: 10,
                    right: 28,
                    top: 28,
                    bottom: 10
                }
            }
        }
    };
    
    //Destruir el chart anterior
    document.getElementById("chart").innerHTML = "";
    document.getElementById("chart").innerHTML = '<canvas id="canvas"></canvas>';
    
    //Crear el chart actual
    var ctx = document.getElementById('canvas');
    window.myPolarArea = new Chart(ctx, config);
}

function customRadius(context)
{
    let index = context.dataIndex;
    return index === 6 ? 10 : 3;
}