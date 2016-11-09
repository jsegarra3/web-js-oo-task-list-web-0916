// Initialize

$(function() { // on document ready
  $('#add_list').on('submit', function(){
    event.preventDefault();
    ListsController();
  });
});
