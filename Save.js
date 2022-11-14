
function E(x){return new ExpantaNum(x)};

function ex(x){

    let nx = new E(0);

    nx.array = x.array;

    nx.sign = x.sign;

    nx.layer = x.layer;

    return nx;

}
function wipe() {

    player = {
    KE: E(0);
    }
    }
    function save(){

    if (localStorage.getItem("incrementalMassSave") == '') wipe()

    localStorage.setItem("Save",btoa(JSON.stringify(player)))

}

function load(x){

    if(typeof x == "string" & x != ''){

        loadPlayer(JSON.parse(atob(x)))

    } else {

        wipe()

    }

}

function exporty() {

    save();

    let file = new Blob([btoa(JSON.stringify(player))], {type: "text/plain"})

    window.URL = window.URL || window.webkitURL;

    let a = document.createElement("a")

    a.href = window.URL.createObjectURL(file)

    a.download = "Energy Incremental Save.txt"

    a.click()

}

function importy() {

    let loadgame = prompt("Paste in your save WARNING: WILL OVERWRITE YOUR CURRENT SAVE")

    if (loadgame != null) {

        load(loadgame)

    }

}
function loadPlayer(load) {
player.KE = ex(load.KE)
}
function loadGame() {

    wipe()

    load(localStorage.getItem("Save"))


    setInterval(save,1000)

}