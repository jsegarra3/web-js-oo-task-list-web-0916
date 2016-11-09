'use strict';
// Lists Controller

function ListsController() {
  var list = new List($('#add_list input[name=list_title]').val());
  $('#add_list input[name=list_title]').val("")
  updateSelectList();
  showList(list)
  destroyList(list)
}

function updateSelectList() {
  $('#select_list').empty();
  store[store.length-1].lists.forEach(function(list){
    $('#select_list').append(`<option value=${list.id}>${list.name}</option>`);
  })
  if(store[store.length-1].lists.length < 1){
  	$('#select_list').append(` `)
  }
}

function showList(list){
	$('#lists').append(`<div id=list-${list.id} class=list><h2><button class='destroy-list'>x</button> ${list.name}</h2><ul id='list-${list.id}'></ul></div>`)
}

function destroyList(list){
	$(`.destroy-list`).on('click', function(){
		$(this).parent().parent().remove();
		var newList = store[store.length-1].lists.filter(function(list_in_store) {
    		return list_in_store.id !== list.id
    	})
    	var newTask = store[store.length-1].tasks.filter(function(tasks_in_store){
    		return parseInt(tasks_in_store.list_id) !== list.id
    	})
    	store.push(Object.assign({},{lists: newList, tasks:newTask }))
		updateSelectList()
	})
}