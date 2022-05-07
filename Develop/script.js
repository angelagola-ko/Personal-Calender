
// Displays time
let nowMoment = moment().format("MMMM Do YYYY");
let displayDate = document.getElementById("currentDay");
displayDate.innerHTML = nowMoment;
let currentHour = moment().format("HH");

//alert("Connected")

//Button to clear local storage and clear all contents
$("#clearFieldsBtn").click(function (event) {
    $('textarea').val("");
    localStorage.clear();
}) // close this off

$(".timeTo").each(function(index) {
console.log(currentHour);
    var timeIs = $(this).attr("id").split("-")[1];
    console.log(timeIs)
    if (currentHour == timeIs) {
        $(this).addClass("present");
    } else if (currentHour < timeIs) {
        $(this).removeClass("present");
        $(this).addClass("future");
    } else if (currentHour > timeIs) {
        $(this).removeClass("future");
        $(this).addClass("past");
    }
})

//Saves to local storage
if(localStorage.text != undefined) {
    localStorage.text.split(',').forEach(function (text,i) {
        $('textarea').eq(i).val(text);
    });
}
//Saves to local storage
$(".saveBtn").click(function (event) {
    let store = [];
    $.each($('textarea'), function (i,text) {
        store.push($(text).val());
    });

    localStorage.text = store.join(',');
})