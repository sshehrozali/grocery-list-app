let itemsListCounter = 0;   // Keep Counting total list items

// Recall all data from Local Storage once the page is loaded
document.addEventListener("DOMContentLoaded", function() {
    
    if (localStorage.length != 0) {
        document.getElementById("sampleText").style.display = "none";
    }

    for (var i = 1; i < localStorage.length + 1; i++) {
        itemsListCounter = localStorage.length;

        storedItem = localStorage.getItem(i);
        makeListItem(storedItem);
    }
  });

// Add Item
document.getElementById("addItem").addEventListener("click", function() {

    let item = document.getElementById("inputBox").value;
    
    if (item != "") {

        itemsListCounter = itemsListCounter + 1;

        localStorage.setItem(itemsListCounter, item);   // Store in Local Storage

        // Call function
        makeListItem(item);

        document.getElementById("sampleText").style.display = "none";
        document.getElementById("inputBox").value = "";

    }
});

// Function to make list item
function makeListItem(item) {
    
    let CardDiv = document.createElement("div");    // Create Main Card div
    CardDiv.classList.add("card");
    CardDiv.classList.add("mt-3");
    CardDiv.classList.add("bg-transparent");

    let InnerCardDiv = document.createElement("div");   // Create Inner Card div
    InnerCardDiv.classList.add("card-body");
    InnerCardDiv.classList.add("modifiedCard");
    InnerCardDiv.classList.add("bg-transparent");
    InnerCardDiv.innerText = item;      // Insert text
    InnerCardDiv.setAttribute("id", itemsListCounter);       // Set ID of element

    CardDiv.appendChild(InnerCardDiv);

    document.getElementById("itemsList").appendChild(CardDiv);      // Append in the main list div
}