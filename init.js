function init(){
    let button = document.querySelector(".reset");
    button.onclick = function(){storage_init()};
}

function storage_init(){
    set_list_init();
}

function set_list_init(){
    chrome.storage.local.clear();
    chrome.storage.local.set({"base" : []});
    /*
    let categories = new Map();
    let modList = new Map();
    modList.set("blank", "testspace")
    categories.set("default", modList);
    console.log(categories);
    let categories_json = JSON.stringify(categories);
    console.log(categories_json);
    chrome.storage.local.clear();
    chrome.storage.local.set({"base" : categories_json}).then(function(){
        test();
    });
    let favorite_default = {};
    let categories_default = {"favorite" : favorite_default};
    let games = {game_name : categories_default};
    let base = {"base" : games}; */
}

function test(){
    let base = chrome.storage.local.get("base");
    base.then(function(){
        console.log(base);
    })
}

init()