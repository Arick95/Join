let NumberForDeleteSubTask;
let usedDisabelModifyer = false;
let currentId;
let currentChecked = [];
let numb = 0;
let SaveTheDoneTask = false;
let AllowToSaveTask = false;

function addNumbertoBoard(i, Id) {
    NumberForDeleteSubTask = i;
    usedDisabelModifyer = true;
    currentId = Id;
}

/**
 * Modifyer the Assigned
 * 
 */
function modifyAssignedTo(Id) {
    newTaskArray[Id]['assignedTo'] = []
    newTaskArray[Id]['color'] = []

    for (let i = 0; i < allContacts.length; i++) {
        const contact = allContacts[i]['name'];
        const initial = allContacts[i]['initials'];
        const color = allContacts[i]['color'];
        let modifycheckbox = document.getElementById(`assignedCheckboxModidiyer${i}`);
        if (modifycheckbox.checked) {
            newTaskArray[Id]['assignedTo'].push(contact);
            newTaskArray[Id]['color'].push(color);
        }
    }
    currentChecked = newTaskArray[Id].isChecked
    renderModifyAssignmentsHTML(Id);
}
/**
 * modifyer the Subtask
 * 
 */
function configDoneSubtask(i, Id) {
    let currentStatus = document.getElementById(`subtaskCheckBox${i}`).checked;
    saveTheOldSubtask[i] = currentStatus
 /* task['isChecked'][i]  */
}
function configDoneSubtaskPopup(i, Id) {
    let task = newTaskArray[Id];
    let currentStatus = document.getElementById(`subtaskCheckBox${i}`).checked;
    saveTheOldSubtask[i] = currentStatus;

    if (currentStatus == true) {
        task['doneSubTasks']++;
    }
    if (currentStatus == false) {
        task['doneSubTasks']--;
    }

    AllowToSaveTask = true;
    task['isChecked'][i] = saveTheOldSubtask[i];
 /* task['isChecked'][i]  */
}
/**
 *  calcuclate for the Done Bar Progress
 * 
 */
function calculateProgress(subTaskAmount, doneAmount) {
    if (doneAmount > subTaskAmount) {
        doneAmount = subTaskAmount;
    }
    let progressInPercent = 100 / subTaskAmount * doneAmount;

    return progressInPercent;
}
/**
 * confim the Modifyers 
 * 
 */
function confirmChangesOnTask(Id) {
    modifyAssignedTo(Id);
    if (usedDisabelModifyer) {
        confirmDeleteForSubTask();
    }
    if (newTaskArray[Id]['assignedTo'].length > 0) {
        let currentTask = newTaskArray[Id];
        let newTitle = document.getElementById('modifyTitle').value;
        let newDescription = document.getElementById('modifyDescription').value;
        let newDate = document.getElementById('modifyDate').value;

        confirmChangesCurrentTask(currentTask, newTitle, newDescription, newDate);

        confirmDoneSubtask(Id)
        readytoCheckedSave = true;
        usedDisabelModifyer = false;
        NumberForDeleteSubTask = undefined;
        currentId = undefined;
        SaveTheDoneTask = true;
        closeTaskPopUp();
        saveTasks();
        updateBoardTasks();
        SaveTheDoneTask = false;
        AllowToSaveTask = false;
    } else { warnNoChoseAssigned(); }
}

function popupSaveSubtask(){
        saveTasks();
        updateBoardTasks();
        AllowToSaveTask = false;
}

function confirmChangesCurrentTask(currentTask, newTitle, newDescription, newDate,) {
    currentTask['title'] = newTitle;
    currentTask['description'] = newDescription;
    currentTask['date'] = newDate;
    currentTask['prio'] = newPrio;
};

function confirmDoneSubtask(Id){

    let task = newTaskArray[Id];
    task['doneSubTasks'] = 0

    for (let i = 0; i <  saveTheOldSubtask.length; i++) {
        task['isChecked'][i] = saveTheOldSubtask[i];
        if (saveTheOldSubtask.length >= 0) {
            let currentStatus = document.getElementById(`subtaskCheckBox${i}`).checked;

            if (currentStatus == true) {
                task['doneSubTasks']++;
            }
        }
    }
    showProgressbar();
}

function confirmDeleteForSubTask() {
    let i = NumberForDeleteSubTask;
    let Id = currentId;
    let task = newTaskArray[Id]['subtasks'];
    let checkTask = newTaskArray[Id]['isChecked'];
    let oldTask = saveTheOldSubtask

    /* newTaskArray[Id]['doneSubTasks']--; */

    checkTask.checked = false;

    oldTask.splice(i, 1)
    checkTask.splice(i, 1)
    task.splice(i, 1)
};

/**
 * Deletet the Current choose Task
 * 
 */
function deleteTask(Id) {

    newTaskArray.splice(Id, 1);
    giveTaskId();
    closeTaskPopUp();
    saveTasks();
    updateBoardTasks();
}
/**
 * Drag and Drop
 * 
 */

function startDragging(id) {
    currentDraggedTask = id;
    document.getElementById(`pinnedTaskContainer${currentDraggedTask}`).classList.add('rotateDeg');
}
/**
 * allowDrop
 * 
 */
function allowDrop(ev) {
    ev.preventDefault();
}
/**
 * drop
 * 
 */
function drop(stat) {
    newTaskArray[currentDraggedTask]['stat'] = stat;
    document.getElementById(`pinnedTaskContainer${currentDraggedTask}`).classList.remove('rotateDeg');
    saveTasks();
    updateBoardTasks();
}

/**
 * highlight an element
 * 
 * @param {string} stat object
 */
function highlight(stat) {
    //document.getElementById(stat).classList.add('dragAreaHighlight');
}

/**
 * stop highlight an element
 * 
 * @param {string} stat object 
 */
function stopHighlight(stat) {
    document.getElementById(stat).classList.remove('dragAreaHighlight');
}
/**
 * searchTask
 * 
 */
function searchTask() {
    let searchInput = document.getElementById('searchInput').value;

    for (let i = 0; i < newTaskArray.length; i++) {
        const currentTask = newTaskArray[i];
        let search = searchInput.toLowerCase();
        let search2 = capitalizeFirstLetter(search);

        if (currentTask['title'].includes(search) || currentTask['description'].includes(search)) {
            filteredTasks.push(currentTask);
        } else if (currentTask['title'].includes(search2) || currentTask['description'].includes(search2)) {
            filteredTasks.push(currentTask);
        }
    }
    renderFilteredTasks('filteredTasks');
}
/**
 * UpperCase each search question. Importend for search 
 * 
 */
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
/**
 * Filter the Task 
 * 
 */
function renderFilteredTasks() {
    renderTodoTasksHTML(filteredTasks);
    renderInProgressHTML(filteredTasks);
    renderAwaitingFeedbackHTML(filteredTasks);
    renderDoneHTML(filteredTasks);

    filteredTasks = [];
}

/**
 * for responsive to move the task up
 * 
 * @param {number} taskID to get the id from the clicked button
 * @param {*} event to stop Propagation
 */
async function moveTaskUp(taskID, event) {
    event.stopPropagation();
    let currentTaskPosition = newTaskArray[taskID]['stat'];
    let indexOfTaskPosition = taskStatusClasses.indexOf(currentTaskPosition);
    indexOfTaskPosition--;
    newTaskArray[taskID]['stat'] = taskStatusClasses[indexOfTaskPosition];
    await saveTasks();
    checkPositionTask();
}

/**
 * for responsive to move the task down
 * 
 * @param {number} taskID to get the id from the clicked button
 * @param {*} event to stop Propagation
 */
async function moveTaskDown(taskID, event) {
    event.stopPropagation();
    let currentTaskPosition = newTaskArray[taskID]['stat'];
    let indexOfTaskPosition = taskStatusClasses.indexOf(currentTaskPosition);
    indexOfTaskPosition++;
    newTaskArray[taskID]['stat'] = taskStatusClasses[indexOfTaskPosition];
    await saveTasks();
    checkPositionTask();
}

/**
 * check where the task is do display the arrow correct
 * 
 */
function checkPositionTask() {
    //if position todo or done don´t show up/down arrow
    for (let i = 0; i < newTaskArray.length; i++) {
        const task = newTaskArray[i];
        if (task['stat'] == 'todo') {
            document.getElementById(`move-up${i}`).classList.add('d-none');
        }
        if (task['stat'] == 'done') {
            document.getElementById(`move-down${i}`).classList.add('d-none');
        }
    }
}