let xValues_graph1 = ["Empregado", "Outro"];
let yValues_graph1 = [78, 22];
let barColors_graph1 = [
    "#6e6e6e",
    "#CFCFCF",

];

new Chart("Graph1", {
    type: "pie",
    data: {
        labels: xValues_graph1,
        datasets: [{
            backgroundColor: barColors_graph1,
            data: yValues_graph1,
            borderWidth: 0
        }]
    },

});

let xValues_graph2 = ["Estuda", "Outro"];
let yValues_graph2 = [13, 87];
let barColors_graph2 = [
    "#6e6e6e",
    "#CFCFCF",

];

new Chart("Graph2", {
    type: "pie",
    data: {
        labels: xValues_graph2,
        datasets: [{
            backgroundColor: barColors_graph2,
            data: yValues_graph2,
            borderWidth: 0
        }]
    },

});

let xValues_graph3 = ["  Outro/ Não procura Emprego", "Outro"];
let yValues_graph3 = [9, 91];
let barColors_graph3 = [
    "#6e6e6e",
    "#CFCFCF",

];

new Chart("Graph3", {
    type: "pie",
    data: {
        labels: xValues_graph3,
        datasets: [{
            backgroundColor: barColors_graph3,
            data: yValues_graph3,
            borderWidth: 0
        }]
    },

});


let xValues_graph4 = ["  Desempregado", "Outro"];
let yValues_graph4 = [0, 100];
let barColors_graph4 = [
    "#6e6e6e",
    "#CFCFCF",

];

new Chart("Graph4", {
    type: "pie",
    data: {
        labels: xValues_graph4,
        datasets: [{
            backgroundColor: barColors_graph4,
            data: yValues_graph4,
            borderWidth: 0
        }]
    },

});