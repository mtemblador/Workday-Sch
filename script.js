var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
var timeContainer = document.querySelector(".lead")
var list = JSON.parse(localStorage.getItem('form')) || [];
timeContainer.innerHTML = currentTime;

$ ("row").each(function(i) {
    if(this < currentTime) {
        this.style.color = "grey"
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

