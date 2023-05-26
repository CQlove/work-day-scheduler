// update current time to the page
var newDate = dayjs().format("dddd, MMMM D, YYYY");
$('#newDate').text(newDate);

// click save botton function
$(document).ready(function () {
  $('.saveBtn').on('click', function () {
    // update value to localstorage
    var time = $(this).parent().attr("id");
    var todo = $(this).siblings(".description").val(); 
    localStorage.setItem(time,todo);
  });
  // display value to page
  $(this).siblings(".description").val(localStorage.getItem($(this).parent().attr("id")));

  // 
  function newHour() {
     var currentHour = dayjs().hour();
    
    // compair current time with todo list and adding class 
    $('.time-block').each(function () {
      var timeBlock=parseInt($(this).attr('id').split('hour-')[1]);
      if(timeBlock < currentHour){
        $(this).addClass("past");
      } else if (timeBlock === currentHour){
        $(this).addClass("present");
      } else{
        $(this).addClass("future");
      }
    });
  }

  // refresh the time every 30s to compair again
  newHour();
  setInterval(newHour, 30000);
});
// add clear button for each todo list and clear localstorage
$('.clearBtn').on('click', function () {
  localStorage.removeItem($(this).parent().attr("id"));
  $(this).siblings('.description').val('');
})
// add clear all to clear the whole todo lists and clear localstorage
$('.clearAllBtn').on('click',function(){
  localStorage.clear();
  $('.description').val('');
})