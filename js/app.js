document.getElementById("addItem").addEventListener("click", function() {
    let item = document.getElementById("floatingInput").value;
    
    if (item != "") {
        document.getElementById("sampleText").style.display = "none";

        let listItem = document.createElement("p");
        listItem.innerText = item;
        document.getElementById("itemsList").appendChild(listItem);
        document.getElementById("floatingInput").value = "";
    }
})