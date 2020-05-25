var airportAMS = "A045844";
var airportROT = "A043596";
var airportEIN = "A043591";
var airportMAA = "A043595";
var airportGRO = "A043593";

var dataAMS;
var dataROT;
var dataEIN;
var dataMAA;
var dataGRO;

var resultAMS = [];
var resultROT = [];
var resultEIN = [];
var resultMAA = [];
var resultGRO = [];

$.ajax({
    url: "https://opendata.cbs.nl/ODataApi/OData/37478eng/TypedDataSet",
    success: filter,
    error: function() {
        alert("Check if your internet connection is working or if there is an error in the javascript file.")
    }
});

function filter(response){
    dataAMS = response.value;
    dataROT = response.value;
    dataEIN = response.value;
    dataMAA = response.value;
    dataGRO = response.value;
    
    for (let i = 0; i < dataAMS.length; i++) {
        var selectorAMS = dataAMS[i];
        if (selectorAMS.Periods.startsWith('2019JJ00') && selectorAMS.Airports == airportAMS) {
            resultAMS.push(selectorAMS);
        }
    }

    for (let j = 0; j < dataROT.length; j++) {
        var selectorROT = dataROT[j];
        if (selectorROT.Periods.startsWith('2019JJ00') && selectorROT.Airports == airportROT) {
            resultROT.push(selectorROT);
        } 
    }
    
    for (let k = 0; k < dataEIN.length; k++) {
        var selectorEIN = dataEIN[k];
        if (selectorEIN.Periods.startsWith('2019JJ00') && selectorEIN.Airports == airportEIN) {
            resultEIN.push(selectorEIN);
        } 
    }

    for (let l = 0; l < dataEIN.length; l++) {
        var selectorMAA = dataMAA[l];
        if (selectorMAA.Periods.startsWith('2019JJ00') && selectorMAA.Airports == airportMAA) {
            resultMAA.push(selectorMAA);
        } 
    }
    
    for (let m = 0; m < dataGRO.length; m++) {
        var selectorGRO = dataGRO[m];
        if (selectorGRO.Periods.startsWith('2019JJ00') && selectorGRO.Airports == airportGRO) {
            resultMAA.push(selectorGRO);
        } 
    }
}
console.log(resultAMS);
console.log(resultROT);
console.log(resultEIN);
console.log(resultMAA);
console.log(resultGRO);

/*$("#ams").one('click', function(){
    var totalAMS = 0;
    resultAMS.forEach(function(element){
        var graphAMS = $('<img src="/img/Barchart.png">');
        var divAMS = $('<div class="graphAMS"></div>');
        var p1 = $("<p>"+element.AmsAiportData+"</p>");
        $("#blank").append(graphAMS,p1);
        $("#data").append(divAMS);
        var scaleAMS = element.AmsAiportData/1100;
        $(graphAMS).css("width", scaleAMS+"px");
        totalAMS = totalAMS+element.AmsAiportData;
    });
    $("#ams").append(totalAMS);
    var lineAMS = $('<img id = "barchart1", src="/img/Barchart1.png">');
    $("#data").append(lineAMS);
});*/

var ctx = $('#chart');





