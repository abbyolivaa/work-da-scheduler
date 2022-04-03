// this will display time without any delay when page loads or on referesh
$("#currentDay").text(moment().format("Do MMMM YYYY, h:mm:ss a"));

// this function displays the current date and time
setInterval(function () {
    $("#currentDay").text(moment().format("Do MMMM YYYY, h:mm:ss a"));
}, 1000)

// variables being declared to create a container | select all of the buttons | Array time and numbers
const createContainer = $(".container");
const saveButton = document.querySelectorAll("button");
const timeList = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
const timeId = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// this will display time without any delay when page loads or on referesh
$("#currentDay").text(moment().format("Do MMMM YYYY, h:mm:ss a"));

// this function displays the current date and time
setInterval(function () {
    $("#currentDay").text(moment().format("Do MMMM YYYY, h:mm:ss a"));
}, 1000)

// variables being declared to create a container | select all of the buttons | Array time and numbers
const createContainer = $(".container");
const saveButton = document.querySelectorAll("button");
const timeList = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
const timeId = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// a for loop to iterate through the timeList and timeId array and appends the data 
for (let i = 0; i < timeList.length; i++) {
    let createRow = $("<div class='row time-block'>").attr("id", timeId[i]);
    let createTime = $("<div class='hour col-1'>")


    // this creates the textarea
    let createTextarea = $("<textarea class='col-10'>");
    createTextarea.attr("id", timeList[i]);

    //this creates the buttons
    let createButton = $("<button type='button' class='saveBtn col-1 far fa-save'>");

    // this appends the created row to the container
    createContainer.append(createRow);
    // this create the timeList and appends rows 1-8 starting from (9am and ending at 5pm)
    createTime.text(timeList[i]);
    createRow.append(createTime);

    // this create the textarea where user input content
    // createTextarea.text();
    createRow.append(createTextarea);

    // this create the buttons from 9am to 5pm
    createButton.text();
    createRow.append(createButton);
}

    // this calls the localStorage Function
    localStorageFunction();

// this will store the data from the textarea into localStorage
function localStorageFunction() {

    for (let index = 0; index < numbers.length; index++) {
        $("textarea")[index].value = localStorage.getItem("textarea" + String(index + 1));
    }
}

