var obj = {}

function hideAll(){
    document.getElementById("large_outbound_form").classList.add("not-visible");
}

function reloadElements(){
    var selected = document.getElementById("incident_type").value;
    obj["incident_type"] = selected;
    chrome.storage.session.set(obj);
    hideAll();
    switch(selected){
        case "Large Outbound Upload":
            var large_outbound_form = document.getElementById("large_outbound_form");
            large_outbound_form.classList.remove("not-visible");
            break;
    }
}

window.onload = function(){
    chrome.storage.session.get("incident_type", function(data){
        if(data["incident_type"] != undefined){
            document.getElementById("incident_type").value = "Large Outbound Upload";
        }
        reloadElements();
    });

    document.getElementById("incident_type").onchange = function(){
        reloadElements();
    };
}