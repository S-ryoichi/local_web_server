const ctxAccount = document.getElementById("accounting");


const incomeData = [{
    x: '2022-04-17T00:00:00',
    y: 10000
}, {
    x: '2022-12-18T00:00:00',
    y: 40000
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

const incomeDataArrange = (tempData) => {
    for (let index in tempData) {
        console.log(index);
        // editing now
    }
}

const graphIncome = new Chart(ctxTemp, {
    type: "bar",
    data: {
        datasets: [{
            label: 'income',
            data: incomeData,
            borderColor: 'rgba(17,221,150,0.4)',
            backgroundColor: 'rgba(17,221,150,0.8)',
        }],
    },
    options:{
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            // Chart.js 3.x.x系は以下の書き方らしい
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
                    unit: "day",
                    stepSize: 1,
                    displayFormats: {
                        "day": "MM/DD"
                    }
                },
                // min: '00:00',
                // max: '23:59',
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
                    color: "rgba(17,221,150, 0.8)",
                    font: {
                        size: 16
                    }
                }
            }
        }
    }
});