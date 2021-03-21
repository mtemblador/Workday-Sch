var currentTime = moment().format('MMMM Do YYY, Yh:mm:ss a');
var timeContainer = document.querySelector(".lead")
var list = JSON.parse(localStorage.getItem('form')) || [];
timeContainer.innerHTML = currentTime;


$ (".row").each(function() {
    console.log($(this).attr("hour"))
    if($(this).attr("hour") < moment().format ("HH")) {
       ".text-area".style.color = "grey"

        console.log($(this).attr("hour"));  
    }
    
})

$("button").click(function(){
    var toDoTask = $('.form')
          .val()
          .trim();
    list.push(toDoTask);

    localStorage.setItem('form', JSON.stringify(list));
    console.log ("click")
    
});

