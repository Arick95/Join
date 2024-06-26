/**
 * 
 * Generate AddTask Content
 */

function generateAddTaskContent() {
    return /*html*/ `
        <form class="addTaskMainContainer" onclick="closeAssignedforAddTask()" id="addTaskForm">
            <div class="headlineContainer" id="headlineContainer"></div>
            <div class="contentLeftAndRightContainer" id="contentLeftAndRightContainer"></div>
            <div class="twoButtonsContainer" id="twoButtonsContainer"></div>
        </form>
    `;
}

/**
 * 
 * Render The Main Body of AddTask
 */
function generateContentLeftAndRightContainer() {
    return /*html*/ `
        <div class="contentLeftAndRight">
            <div class="contentLeft">
                <div class="titleAndInput">
                    <span>Title</span>
                    <input id="title" type="text" required placeholder="Enter a title">
                </div>

                <div class="descriptionAndTextarea">
                    <span>Description</span>
                    <textarea id="description" type="text" required placeholder="Enter a Description"></textarea>
                </div>

                <div class="categoryAndSelect">
                    <span>Category</span>
                    <div class="select-category-box">
                        <select id="category" onchange="showAddBox()" required>
                            <option value="" disabled selected>Select task category</option>
                            <option value="new">Create new category</option>
                            <option value="design">Design</option>
                            <option value="sales">Sales</option>
                            <option value="backoffice">Backoffice</option>
                            <option value="media">Media</option>
                            <option value="marketing">Marketing</option>
                        </select>
                        <button type="button" id="delete-category-btn" class="category-btn d-none" onclick="deleteCategory()">Delete</button>
                    </div>
                    <div id="new-category-box" class="d-none new-category-box">
                        <input id="new-category-input" class="" type="text" placeholder="Add new category" >
                        <button type="button" class="category-btn" onclick="addNewCategory()">Add</button>
                    </div>
                </div>
                
                <div class="assignedToAndSelect" id="assignedToAndSelect">
                    <span class="assignedToAndSelectFont">Assigned to <div type="button" onclick="closewarnNoChoseAssigned()" class="ChoseAssigned d-none" id="ChoseAssigned" >Chose a Assigned !!!</div></span>
                    <div type="button" onclick="showAllAssigned()" class="selectContactFrame"><div  id="selectContact"  class="selectContact" >Select contacts to assign</div>
                    <img id="selectContactImg" src="./img/dropdownArrow.png"  class="selectContactImg"></div>
                    <div onclick="stopingProgagation()" class="assignedTo d-none" id="assignedTo" required> 
                        
                    </div>
                </div> 
                <div class="assignedToList" id="assignedToList">
                </div>
            </div>

            <div class="borderline"></div>

            <div  class="contentRight">
                <div class="dueDateAndInput">
                    <span>Due Date</span>
                    <input type="date" id="date" required placeholder="dd/mm/yyyy" onchange="pushDate()">
                </div>

                <div class="prio">
                    <span>Prio</span>
                    <div class="prioButtons">
                        <button type="button" id="urgent" value="urgent" onclick="priorityStatus('urgent')">
                            Urgent
                            <img id="urgentIcon" src="./img/urgentIcon.png">
                        </button>

                        <button type="button" id="medium" value="medium" onclick="priorityStatus('medium')">
                            Medium
                            <img id="mediumIcon" src="./img/mediumIcon.png">
                        </button>

                        <button type="button" id="low" value="low" onclick="priorityStatus('low')">
                            Low
                            <img id="lowIcon" src="./img/lowIcon.png">
                        </button>
                    </div>
                </div>

                <div class="subtasksAndInput">
                    <span>Subtasks</span>

                    <div class="inputAndButton">
                        <input id="subtasks" placeholder="Add new subtask">
                        <button type="button" onclick="newSubtask()">
                            <img src="./img/subtaskIcon.png">
                        </button>
                    </div>
                </div>

                <div class="subtasksList" id="subtasksList">

                </div>
            </div>
        </div>
    `;
}
/**
 * 
 *  Render the Controll Buttons of AddTask
 */
function generateTwoButtonsContainer() {
    return /*html*/ `
        <div class="twoButtons">
            <button id="reset" type="reset" class="clearButton" onclick="clearFields(), priorityStatus('low')">
                Clear X
            </button>

            <button type="submit" class="createTaskButton" id="createTask">
                Create Task
                <img src="./img/checkIcon.png">
            </button>
        </div>
    `;
}

function closeAssignedforAddTask(){
    closeAllAssigned();
}

function addingAssignedByName(i){
    document.getElementById(`assignedFrame${i}`).addEventListener("click", () => {
        if(!document.getElementById(`assignedCheckbox${i}`).checked)
        {document.getElementById(`assignedCheckbox${i}`).checked = true;
        renderAssignedInitial();
    }else{
        document.getElementById(`assignedCheckbox${i}`).checked = false;
        renderAssignedInitial();
    }
    });
    stopingProgagation();
}

function stopingProgagation(){
    event.stopPropagation()
}
