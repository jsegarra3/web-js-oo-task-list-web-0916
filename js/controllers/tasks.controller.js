'use strict';
// Tasks Controller

function TasksController(){
	var task = new Task($('#add_task input[name="task_description"]').val(), $('#add_task input[name="task_priority"]').val(), $('#add_task option:selected').val());
	$('#add_task input[name="task_description"]').val("")
	$('#add_task input[name="task_priority"]').val("")
	showTasks(task);
	destroyTask()
}

function showTasks(task){
	$(`#list-${task.list_id}`).append(`<li data id=${task.id}><button class="destroy-task">x</button> ${task.description}, ${task.priority}</li>`)
}

function destroyTask(){
	$(`.destroy-task`).on('click', function(){
		$(this).parent().remove()
	})
}