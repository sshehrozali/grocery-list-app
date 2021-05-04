let listCounter = 0;

// for (var i = 1; i < listCounter + 1; i++) {
//     document.getElementsByClassName("itemsList")[i - 1].addEventListener("click", function() {
//         console.log("I am ID no", i);
//     })
// }

document.getElementById("addItem").addEventListener("click", function() {

    let item = document.getElementById("inputBox").value;
    
    if (item != "") {

        listCounter = listCounter + 1;
        console.log(listCounter);

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
        InnerCardDiv.setAttribute("id", listCounter);       // Set ID of element

        CardDiv.appendChild(InnerCardDiv);

        document.getElementById("itemsList").appendChild(CardDiv);      // Append in the main list div
        document.getElementById("inputBox").value = "";

        console.log(document.getElementsByClassName("card"))

        document.getElementsByClassName("card")[1].addEventListener("click", function() {
            console.log("I am ID no", document.getElementsByClassName("card")[0].id);
        })
    }
})