export function scrool_kapat(){
    document.querySelector("html, body").style.overflowY = "hidden";
}

export function scrool_ac(){
    document.querySelector("html, body").style.overflowY = "auto";
}

export function hero_slider(){
    let yazi_sayisi = 5;
    var hero_slider = document.querySelectorAll("div.__hero-slider");
    for(let i = 0; i < hero_slider.length; i++){
        let item = hero_slider[i];
        let yazi = document.createElement("div");
        yazi.classList.add("__yazi");
        yazi.innerHTML = item.dataset.yazi;
        for(let i = 1; i<= yazi_sayisi; i++){
            item.innerHTML += "";
            item.appendChild(yazi);
        }
    }
}

export function app(){
    hero_slider();
}