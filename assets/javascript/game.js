// $(document).ready(function () {
//     Math.floor(Math.random() * 12) + 1;


var numberBank = ["10", "20", "30", "45", "55", "75", "19", "17", "33"];

var pdine = Math.floor(Math.random() * 4) + 1;
var usc = Math.floor(Math.random() * 4) + 1;
var uci = Math.floor(Math.random() * 4) + 1;
var mi = Math.floor(Math.random() * 4) + 1;

var rand = numberBank[Math.floor(Math.random() * numberBank.length)];
$("#textbox").html(rand);
console.log(rand);

var score1 = numberBank[Math.floor(Math.random() * numberBank.length)];
$("#pscore").html(pdine);
console.log(pdine);

$(document).ready(function () {
    // Here we use jQuery to select the header with "click-me" as its ID.
    // Whenever it is clicked...
    $("#pdine").click(function () {

        // ... we trigger an alert.
        pdine;

        console.log(pdine);
    });

});

$(document).ready(function () {
    // Here we use jQuery to select the header with "click-me" as its ID.
    // Whenever it is clicked...
    $("#usc").click(function () {

        // ... we trigger an alert.
        usc;

        console.log(usc);
    });

});
$(document).ready(function () {
    // Here we use jQuery to select the header with "click-me" as its ID.
    // Whenever it is clicked...
    $("#uci").click(function () {

        // ... we trigger an alert.
        uci;

        console.log(uci);
    });

});
$(document).ready(function () {
    // Here we use jQuery to select the header with "click-me" as its ID.
    // Whenever it is clicked...
    $("#mi").click(function () {

        // ... we trigger an alert.
        mi;

        console.log(mi);
    });

});