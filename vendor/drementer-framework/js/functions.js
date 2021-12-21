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


/* Çerezler */
var cerez_ad = "cerez-politikasi";
var cerez = localStorage.getItem(cerez_ad);
var cerez_popup = document.getElementById("cerez-popup");
var cerez_tuslar = cerez_popup.querySelectorAll(".__tuslar > .__tus");
function cerez_tus_event(){
    cerez_tuslar.forEach(tus => {
        tus.addEventListener("click", function(){
            if(tus.classList.contains("--kabul")){
                cerez_kabul_et();
                console.log("Çerez politikası kabul edildiği için Çerez Popup kapatıldı.");
            }else{
                cerez_popup__kapat();
            }
        })
    })
}

function cerez_kontrol(){
    /* console.log("Çerezler kontrol ediliyor..."); */
    // Tarayıcı çerezlerinin aktif olup olmadığına bakıyor
    if (window.localStorage) {

        // Daha önce çerezin ayarlanıp ayarlanmadığına bakıyor
        // Kullanıcı sayfayı ilk kez ziyaret ediyorsa
        if (!cerez) {
            // Çerez politikası henüz belirlenmemiş ayarlandı
            localStorage.setItem(cerez_ad, 'belirlenmedi');
        }
        // Kullanıcı sayfayı tekrar ziyaret ediyorsa
        else{
            // Kullanıcı çerez politikasını kabul etmiş mi diye bakıyoruz
            if(cerez == "kabul"){
                // Eğerki daha önce kabul edildiyse Çerez Popup'ı kapatıyoruz
                console.log("Çerez politikası daha önce kabul edildiği için Çerez Popup açılmadı.");
                cerez_popup__kapat();
            }
        }
    }else{
        console.error("Taraycının çerez desteki kapalı, lütfen aktive edin!");
    }
}

function cerez_kabul_et(){
	localStorage.setItem(cerez_ad, 'kabul');
	cerez_popup__kapat();
}

function cerez_popup__kapat(){
	if(!cerez_popup.classList.contains("--kapali")){
		cerez_popup.classList.add("--kapali");
	}
}
/* Çerezler SON */


// Girilen fonksiyonlar varsayılan olarak dışa atıldı
export function app(){
    hero_slider();
    cerez_kontrol();
    cerez_tus_event();
}