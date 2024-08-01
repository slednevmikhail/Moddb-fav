function addButton(){
    let modContainers = document.querySelectorAll('.table > div[class^="row rowcontent rowcategory');
    modContainers.forEach(modContainer => {
        let saveButton = document.createElement("button");
        saveButton.innerText = "+";
        saveButton.onclick = function(){saveMod(modContainer)};
        saveButton.classList.add("addToFavorite");
        modContainer.lastElementChild.appendChild(saveButton);       
    });
}
function saveMod(modContainer){
    let imgLink = modContainer.querySelector("img").src;
    let modContent = modContainer.querySelector(".content");
    let modName = modContent.querySelector("h4 > a").innerText;
    let modSubHeader = modContent.querySelector(".subheading").innerText;
    let modDescription = modContent.querySelector("p").innerText;
    let modLink = "https://moddb.com" + modContent.querySelector("h4 > a").pathname;
    let modData = serialize_data(modLink, imgLink, modName, modSubHeader, modDescription);
    save_data(modData);
}

function serialize_data(link, imgLink, name, subheader, desc){
    return {"name" : name, "link" : link, "imgLink" : imgLink, "subheader" : subheader, "desc" : desc};
}

function save_data(modData){
    chrome.storage.local.get("base").then(function(result){
        result["base"] = [...result["base"], modData];
        console.log(result);
        chrome.storage.local.set({"base" : result["base"]}).then(function(result1){
            console.log(result1);
            console.log("save success ||  " + JSON.stringify(result1));
        })
    });
}

addButton();
