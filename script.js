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
    // display value to page
  $(this).siblings(".description").val(localStorage.getItem($(this).parent().attr("id")));

  // refresh and still there
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
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