// RAW DATA
var chartLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", 
             "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23",
             "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34",
             "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45",
             "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56",
             "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67"];
var chartData = [1, 12, 21, 47, 61, 79, 88, 95, 99, 59, 75, 63, 48, 85, 35,
                126, 86, 91, 120, 90, 108, 113, 73, 84, 84, 111, 100, 112,
                143, 123, 150, 137, 147, 157, 137, 133, 153, 176, 205, 242,
                242, 222, 219, 231, 234, 245, 262, 265, 276, 322, 349, 351,
                355, 351, 356, 404, 389, 369, 372, 376, 385, 385, 399, 392,
                393, 400, 417];


var data = {
    labels: chartLabels,
    datasets: [
        {
            label: "1020",
            fillColor: "rgba(245, 166, 35, .3)",
            strokeColor: "#F5A623",
            pointColor: "#fff",
            pointStrokeFill: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: chartData
        },
    ]
};


// HELPER FUNCTIONS
function dataLength() {
    return data.datasets[0].data.length;
}

function setupCanvas() {
    var canvas = document.getElementById("myChart");
    var browserWidth = window.innerWidth;
    canvas.style.width = (browserWidth - 30) + "px";

    var ctx = canvas.getContext("2d");
    var myLineChart = new Chart(ctx).Line(data, {scaleShowGridLines: false, pointHitDetectionRadius: 5});
};

function calculateTotal(data) {
    return data[data.length - 1];
}

function calculateAvg(data) {
    avgPerSession = calculateTotal(data) / dataLength();
    avgInBB = avgPerSession * 5;
    return [avgPerSession, avgInBB];
}


// DO STUFF ON PAGE LOAD
window.onload = function() {
    setupCanvas();

    var totalElement = document.getElementById("total");
    totalElement.innerHTML = "Total earnings: $" + calculateTotal(chartData);

    var avg = document.getElementById("avg");
    avg.innerHTML = "Per session: $" + calculateAvg(chartData)[0].toFixed(2) + " (" 
        + calculateAvg(chartData)[1].toFixed(2) + " BB)";
}