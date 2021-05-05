let itemsListCounter = 0;   // Keep Counting total list items
let itemID;     // Var to store item ID




// Recall all data from Local Storage once the page is loaded
document.addEventListener("DOMContentLoaded", function () {

    if (localStorage.length != 0) {
        document.getElementById("sampleText").style.display = "none";
    }

    for (var i = 1; i < localStorage.length + 1; i++) {
        itemsListCounter = localStorage.length;


        let retrieveItem = localStorage.getItem(i);   // Get item 
        let JSONObj = JSON.parse(retrieveItem);       // Parse JSON

        let storedItem = JSONObj[0];
        let itemStatus = JSONObj[1];
        let key = i;



        console.log(storedItem, itemStatus, key);


        // Call function
        let ReturnedDiv = ReAddItems(storedItem, key);

        // Update each item status
        if (itemStatus == "Active") {
            ReturnedDiv.classList.add("modifiedCard");
            ReturnedDiv.style.textDecoration = "none";

        }

        if (itemStatus == "Disable") {
            ReturnedDiv.classList.add("disabledCard");
            ReturnedDiv.style.textDecoration = "line-through";
        }

    }
});




// When "Add Items" btn is clicked
document.getElementById("addItem").addEventListener("click", function () {

    let item = document.getElementById("inputBox").value;

    if (item != "") {

        itemsListCounter = itemsListCounter + 1;

        // Call function
        newListItem(item);

        document.getElementById("sampleText").style.display = "none";
        document.getElementById("inputBox").value = "";
    }
});




// Create new item
function createItem(item) {

    let CardDiv = document.createElement("div");    // Create Main Card div
    CardDiv.classList.add("card");
    CardDiv.classList.add("mt-3");
    CardDiv.classList.add("bg-transparent");

    let InnerCardDiv = document.createElement("div");   // Create Inner Card div
    InnerCardDiv.classList.add("card-body");
    InnerCardDiv.classList.add("modifiedCard");
    InnerCardDiv.classList.add("bg-transparent");
    InnerCardDiv.classList.add("itemText");

    InnerCardDiv.innerText = item      // Insert text
    InnerCardDiv.setAttribute("id", itemsListCounter);       // Set ID of element

    CardDiv.appendChild(InnerCardDiv);

    document.getElementById("itemsList").appendChild(CardDiv);      // Append in the main list div

    return InnerCardDiv;
}




// Add new item in the list
function newListItem(item) {

    // First create new item
    let ReturnedDiv = createItem(item);

    localStorage.setItem(itemsListCounter, JSON.stringify([item, ""]));   // Add JSON in Local Storage

    ReturnedDiv.addEventListener("click", function () {

        itemID = ReturnedDiv.id;
        console.log(itemID)

        if (ReturnedDiv.style.textDecoration == "line-through") {
            ReturnedDiv.classList.remove("disabledCard");
            ReturnedDiv.style.textDecoration = "none";

            // Update JSON 
            localStorage.setItem(itemID, JSON.stringify([item, "Active"]));
        }

        else {
            ReturnedDiv.classList.add("disabledCard");
            ReturnedDiv.style.textDecoration = "line-through";

            // Update JSON
            localStorage.setItem(itemID, JSON.stringify([item, "Disable"]));
        }
    });
}




// Readd Items in the list when DOM content is loaded
function ReAddItems(item, key) {

    let ReloadedDiv = createItem(item);

    ReloadedDiv.addEventListener("click", function () {

        if (ReloadedDiv.style.textDecoration == "line-through") {
            ReloadedDiv.classList.remove("disabledCard");
            ReloadedDiv.style.textDecoration = "none";

            // Update JSON 
            localStorage.setItem(key, JSON.stringify([item, "Active"]));
        }

        else {
            ReloadedDiv.classList.add("disabledCard");
            ReloadedDiv.style.textDecoration = "line-through";

            // Update JSON
            localStorage.setItem(key, JSON.stringify([item, "Disable"]));
        }

    });

    return ReloadedDiv;
}