$(document).ready(function () {
// This shows the curent day and time in jumbotron in header
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

// This sets saveBtn click listen for what the user typed in and the time
    $(".saveBtn").on("click", function () {
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // This svaes user inputs into the local storage
        append(localStorage.setItem(time, text));
        append(localStorage.getItem(time, text));
    })

// This retrives saved user inputs and data from local storage
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour1 .description").val(localStorage.getItem("hour13"));
    $("#hour2 .description").val(localStorage.getItem("hour14"));
    $("#hour3 .description").val(localStorage.getItem("hour15"));
    $("#hour4 .description").val(localStorage.getItem("hour16"));
    $("#hour5 .description").val(localStorage.getItem("hour17"));
    $("#hour6 .description").val(localStorage.getItem("hour18"));
    $("#hour7 .description").val(localStorage.getItem("hour19"));
    $("#hour8 .description").val(localStorage.getItem("hour20"));
    $("#hour9 .description").val(localStorage.getItem("hour21"));
    $("#hour10 .description").val(localStorage.getItem("hour22"));
    $("#hour11 .description").val(localStorage.getItem("hour23"));

    function hourTracker() {
        // This shows total of current hours
        var currentHour = moment().hour();
        
        // This is to the loop over the time blocks
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log( blockHour, currentHour)
    
            //These check to see if the time has passed
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    // This tracks the hour
    hourTracker();
})