
function dataArrange(jsonData) {
    const tempData = JSON.parse(jsonData);
    let chartData = [];
    let pointData = {};
    let time;
    for (let data of tempData){
        time = new Date(Number(data.timestamp));
        time = formatDate(time, "yyyy-MM-dd HH:mm:ss");
        console.log(time);
        pointData = {
            x: time,
            y: data.temp
        };
        chartData.push(pointData);
    }
    return chartData;
}

function formatDate (date, format) {
    format = format.replace(/yyyy/g, date.getFullYear());
    format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
    format = format.replace(/dd/g, ('0' + date.getDate()).slice(-2));
    format = format.replace(/HH/g, ('0' + date.getHours()).slice(-2));
    format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
    format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
    format = format.replace(/SSS/g, ('00' + date.getMilliseconds()).slice(-3));
    return format;
};
  

async function createChart(jsonData){
    const tempData = await dataArrange(jsonData);
    const ctxTemp = document.getElementById("temperature").getContext("2d");

    const graphTemp = new Chart(ctxTemp, {
        type: "line",
        data: {
            datasets: [{
                label: 'temperature',
                data: tempData,
                borderColor: 'rgba(86,60,46,0.4)',
                backgroundColor: 'rgba(86,60,46,0.8)',
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
                    // min: '2022/08/29',
                    // max: '2022/09/01',
                },
                y: {
                    display: true,
                    ticks: {
                        min: 0.0,
                        max: 40.0
                    },
                    title: {
                        display: true,
                        text: "Temperature",
                        color: "rgba(86,60,46,0.8)",
                        font: {
                            size: 16
                        }
                    }
                }
            }
        }
    });
}


window.onload = async () => {
    const response = await fetch("/fetch");
    const jsonData = await response.json();
    createChart(JSON.stringify(jsonData));
}