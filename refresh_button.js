function on_load(){
    refresh_page();
    let button = document.querySelector(".refresh");
    button.onclick = function(){
        refresh_page();
    };
}

function refresh_page(){
    getModList();
}

on_load()