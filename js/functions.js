export function scrool_kapat(){
    document.querySelector("html, body").style.overflowY = "hidden";
}

export function scrool_ac(){
    document.querySelector("html, body").style.overflowY = "auto";
}

export function kart_arkaplan(){
    var kart = document.getElementsByClassName("kart");
    for(let i = 0; i < kart.length; i++){
        let item = kart[i];
        let kart_gorsel = item.getElementsByClassName("__gorsel")[0];
        let kart_gorsel_url = kart_gorsel.dataset.ap;
        kart_gorsel.style.backgroundImage = 'url("'+kart_gorsel_url+'")';
    }
}