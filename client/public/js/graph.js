const ctxTemp = document.getElementById("temperature");

const timescale = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "10:00", "20:00", "21:00", "22:00", "23:00"];

const graphTemp = new Chart(ctxTemp, {
    type: "line",
    data: {
        label: timescale,
        datasets: [{
            label: "Raspberry Pi Zero",
            data: [25, 24.5, 24, 24, 25, 26, 27, 28, 30, 31, 32, 33.6, 35.9, 36, 37, 36, 35, 35, 35.2, 34, 32, 31, 30.8, 29]
        }]
    },
    options:{
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Time"
                },
                type: "time",
                time: {
                    parser: "HH:mm",
                    unit: "hour",
                    stepSize: 1,
                    displayFormats: {
                        "hour": "HH:mm"
                    }
                },
                ticks: {
                    min: "05:00",
                    max: "20:00"
                }
            }],
            yAxes: [{
                scaleLable: {
                    display: true,
                    labelString: "Temperature"
                },
                ticks: {
                    min: 20.0,
                    max: 40.0
                }
            }]
        }
    }
});