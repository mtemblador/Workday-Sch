var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
var timeContainer = document.querySelector(".lead")
timeContainer.innerHTML = currentTime;

$("button").click(function(){
    var toDoTask = $('.form')
          .val()
          .trim();
    list.push(toDoTask);

    localStorage.setItem('form', JSON.stringify(list));
    console.log ("click")
    
});

