const ctxTemp = document.getElementById("temperature").getContext("2d");

const timescale = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
const data = [{
    x: '1995-12-17T00:00:00',
    y: 1
}, {
    x: '1995-12-18T00:00:00',
    y: 10
}, {
    x: '1995-12-21T00:00:00',
    y: 20
}, {
    x: '1995-12-25T12:00:00',
    y: 30
}, {
    x: '1996-01-01T00:00:00',
    y: 40
}]

// const graphTemp = new Chart(ctxTemp, {
//     type: "line",
//     data: {
//         label: timescale,
//         datasets: [{
//             label: "Raspberry Pi Zero",
//             data: [25, 24.5, 24, 24, 25, 26, 27, 28, 30, 31, 32, 33.6, 35.9, 36, 37, 36, 35, 35, 35.2, 34, 32, 31, 30.8, 29]
//         }]
//     },
//     // data: data,
//     options:{
//         scales: {
//             xAxes: {
//                 type: "time",
//                 // distribution: "linear",
//                 // bounds: "data",
//                 // time: {
//                 //     // parser: "HH:mm",
//                 //     // unit: "hour",
//                 //     // stepSize: 1,
//                 //     displayFormats: {
//                 //         hour: "HH:mm"
//                 //     }
//                 // }
//             }
//         }
//     }
// });

const graphTemp = new Chart(ctxTemp, {
    type: "line",
    // data: {
    //     label: timescale,
    //     datasets: [{
    //         label: "Raspberry Pi Zero",
    //         data: [25, 24.5, 24, 24, 25, 26, 27, 28, 30, 31, 32, 33.6, 35.9, 36, 37, 36, 35, 35, 35.2, 34, 32, 31, 30.8, 29]
    //     }]
    // },
    data: [{
        x: '1995-12-17T00:00:00',
        y: 1
    }, {
        x: '1995-12-18T00:00:00',
        y: 10
    }, {
        x: '1995-12-21T00:00:00',
        y: 20
    }, {
        x: '1995-12-25T12:00:00',
        y: 30
    }, {
        x: '1996-01-01T00:00:00',
        y: 40
    }],
    options:{
        // responsive: true,
        // legend: {
        //     display: false
        // },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: "Time",
                    color: "black",
                    font: {
                        size: 16
                    }
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
                // ticks: {
                //     min: "05:00",
                //     max: "20:00"
                // }
            },
            y: {
                display: true,
                ticks: {
                    min: 20.0,
                    max: 40.0
                },
                title: {
                    display: true,
                    text: "Temperature",
                    color: "red",
                    font: {
                        size: 16
                    }
                }
            }
        }
    }
});