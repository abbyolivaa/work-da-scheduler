// this will display time without any delay when page loads or on referesh
$("#currentDay").text(moment().format("Do MMMM YYYY, h:mm:ss a"));

// this function displays the current date and time
setInterval(function () {
    $("#currentDay").text(moment().format("Do MMMM YYYY, h:mm:ss a"));
}, 1000)

// variables being declared to create a container | select all of the buttons | Array time and hoursNumbered
var createContainer = $(".container");
var saveButton = document.querySelectorAll("button");
var hourList = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var hourId = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
var hoursNumbered = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// this will display time without any delay when page loads or on referesh
$("#currentDay").text(moment().format("Do MMMM YYYY, h:mm:ss a"));

// this function displays the current date and time
setInterval(function () {
    $("#currentDay").text(moment().format("Do MMMM YYYY, h:mm:ss a"));
}, 1000)

// a for loop to iterate through the hourList and hourId array and appends the data 
for (let i = 0; i < hourList.length; i++) {
    let createRow = $("<div class='row time-block'>").attr("id", hourId[i]);
    let createTime = $("<div class='hour col-1'>")


    // this creates the textarea
    let createTextarea = $("<textarea class='col-10'>");
    createTextarea.attr("id", hourList[i]);

    //this creates the buttons
    let createButton = $("<button type='button' class='saveBtn col-1 far fa-save'>");

    // this appends the created row to the container
    createContainer.append(createRow);
    // this create the hourList and appends rows 1-8 starting from (9am and ending at 5pm)
    createTime.text(hourList[i]);
    createRow.append(createTime);

    // this create the textarea where user input content
    // createTextarea.text();
    createRow.append(createTextarea);

    // this create the buttons from 9am to 5pm
    createButton.text();
    createRow.append(createButton);
}

    // this calls the localStorage Function
    saveFunction();

// this will store the data from the textarea into localStorage
function saveFunction() {

    for (let index = 0; index < hoursNumbered.length; index++) {
        $("textarea")[index].value = localStorage.getItem("textarea" + String(index + 1));
    }
}

// this to save the stored data that has been entered into the textarea
$("button").on("click", function (event) {
    event.preventDefault();

    for (let index = 0; index < hoursNumbered.length; index++) {
        localStorage.setItem('textarea' + String(index + 1), $("textarea")[index].value)
    }
});

// this will color the teaxtarea based on the timeline where the colors 1-3 are defined as the following:-
// 1. grey equals past the hour
// 2. red equals current hour
// 3. green eqauls future hours
function statusUpdate() {
    var currentHour = moment().hours();
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split(" ")[0]);

        if (blockHour < currentHour) {
            $(this).addClass("past");
        } else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}
//this calls the function statusUpdate
statusUpdate();