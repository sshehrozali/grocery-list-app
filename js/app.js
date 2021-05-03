document.getElementById("addItem").addEventListener("click", function() {
    let item = document.getElementById("inputBox").value;
    
    if (item != "") {
        document.getElementById("sampleText").style.display = "none";

        let CardDiv = document.createElement("div");    // Create Main Card div
        CardDiv.classList.add("card");
        CardDiv.classList.add("mt-3");
        CardDiv.classList.add("bg-transparent");

        let InnerCardDiv = document.createElement("div");   // Create Inner Card div
        InnerCardDiv.classList.add("card-body");
        InnerCardDiv.classList.add("modifiedCard");
        InnerCardDiv.classList.add("bg-transparent");
        InnerCardDiv.innerText = item;      // Insert text

        CardDiv.appendChild(InnerCardDiv);

        document.getElementById("itemsList").appendChild(CardDiv);      // Append in the main list div
        document.getElementById("inputBox").value = "";
    }
})