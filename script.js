var currentTime = moment().format('MMMM Do YYY, Yh:mm:ss a');
var timeContainer = document.querySelector(".lead")
var list = JSON.parse(localStorage.getItem('form')) || [];
timeContainer.innerHTML = currentTime;


$(".row").each(function () {
    if (parseInt($(this).attr("hour")) < moment().format("HH")) {
    $(this).find("#text-area").addClass("past")

    }else if (parseInt($(this).attr("hour")) == moment().format("HH")) {
    $(this).find("#text-area").addClass("present");
    
    }else{
        $(this).find("#text-area").addClass("future")
    }
})

$("button").click(function () {
    var toDoTask = $('.form')
        .val()
        .trim();
    list.push(toDoTask);

    localStorage.setItem('form', JSON.stringify(list));
    console.log("click")

document.onload = function(){
   localStorage.getElementById("form")


}

});