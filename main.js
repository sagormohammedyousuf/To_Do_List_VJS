const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask () {
    if (inputBox.value === "") {
        alert("You must write something!") // if input box is empty then alert something // 
    }else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); // add something //

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span); // add cross icon // 
    }

    inputBox.value = "" // clear input fill after something adding //
    saveData() // save data // 
}

listContainer.addEventListener("click" , function (e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // add checked class //
        saveData() 
    }else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove() // when click on corse  remove li list //
        saveData()
    }
}, false)



// save data // 

function saveData () {
    localStorage.setItem("data", listContainer.innerHTML)
}


// when open window  then save data showing //

function showTask () {
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask()