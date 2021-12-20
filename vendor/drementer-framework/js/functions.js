/* Genel */
export function scrool_kapat(){
    document.querySelector("html, body").style.overflowY = "hidden";
}

export function scrool_ac(){
    document.querySelector("html, body").style.overflowY = "auto";
}
/* Genel SON */


/* Hero Slider oluşturucu */
export function hero_slider(){
    var hero_slider = document.querySelectorAll("div.__hero-slider");
    hero_slider.forEach(item => {

        // Oluşturulacak alt eleman
        let yazi_sayisi = item.dataset.sayi;

        // Minimum değerin altında giriş yapıldığında
        if(yazi_sayisi < 5 || yazi_sayisi == undefined){
            console.warn("Hero Slider yazi sayisi minimum 5 olabilir, bu yüzden otomatik olarak 5 ayarlandı.");
            yazi_sayisi = 5;
        }

        // Component oluşturuluyor
        let yazi = document.createElement("div");
        // Oluşturulan componente .__yazi class eklendi
        yazi.classList.add("__yazi");
        // Oluşturulan componente ebeveyine girilen data-yazi attr si içerik olarak eklendi
        yazi.innerHTML = item.dataset.yazi;
        // Ebeveyine girilen data-sayi attr kadar ebeveyine oluşturulan component eklendi
        for(let i = 1; i<= yazi_sayisi; i++){
            item.innerHTML += "";
            item.appendChild(yazi);
        }
    })
}
/* Hero Slider oluşturucu SON */


// Girilen fonksiyonlar varsayılan olarak dışa atıldı
export function app(){
    hero_slider();
}