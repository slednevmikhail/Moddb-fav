
function getModList(){ 
    var modList = [];
    chrome.storage.local.get("base").then(function(result){
        modList = result["base"];
        mainElement = document.querySelector(".content")
        modList.map(function(modData, index){
            let container = createContainer(modData, index);
            mainElement.appendChild(container);
        })
    })
}

function createContainer(modData, index){
    let modContainer = document.createElement("div");
    modContainer.className = "mod-container";
    modContainer.id = "" + index;
    let modName = addName(modData);
    let modImg = addImg(modData);
    let subheader = addSubh(modData);
    let desc = addDesc(modData);
    modContainer.appendChild(modImg);
    modContainer.appendChild(modName);
    modContainer.appendChild(subheader);
    modContainer.appendChild(desc);
    return modContainer;
}
function addImg(modData){
    let img = document.createElement("img");
    img.className = "mod-img";
    img.src = modData.imgLink;
    return img;
}

function addName(modData){
    let name = document.createElement("a");
    name.className = "mod-name";
    name.href = modData.link;
    name.innerText = modData.name;
    return name;
}

function addSubh(modData){
    let subh = document.createElement("p");
    subh.className = "mod-subheader";
    subh.innerText = modData.subheader;
    return subh;
}

function addDesc(modData){
    let desc = document.createElement("p");
    desc.className = "description";
    desc.innerText = modData.desc;
    return desc;
}