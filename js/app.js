// Initialize

$(function() { // on document ready


  $('#add_list').on('submit', function(){
    event.preventDefault();
    ListsController();
  $('#add_task').show()
  });

  $('#add_task').hide()

  $('#add_task').on('submit', function(){
    event.preventDefault();
    TasksController();
  });
});


