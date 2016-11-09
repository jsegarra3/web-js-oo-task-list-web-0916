'use strict';
// Lists Controller

function ListsController() {
  new List($('#add_list input[name=list_title]').val());
  updateSelectList();
}

function updateSelectList() {
  $('#select_list').empty();
  store[store.length-1].lists.forEach(function(list){
    $('#select_list').append(`<option value=${list.id}>${list.name}</option>`);
  })
}
