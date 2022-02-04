/* Genel */
export var scrool_kapat = () => {
	document.querySelector("html, body").style.overflowY = "hidden";
};

export var scrool_ac = () => {
	document.querySelector("html, body").style.overflowY = "auto";
};
/* Genel SON */


/* Hero Slider oluşturucu */
export function hero_slider() {
	var hero_slider = document.querySelectorAll("div.__hero-slider");
	hero_slider.forEach((item) => {
		// Oluşturulacak alt eleman
		let yazi_sayisi = item.dataset.yaziSayi;

		// Minimum değerin altında giriş yapıldığında
		if (yazi_sayisi < 5 || yazi_sayisi == undefined) {
			console.warn(
				"Hero Slider yazi sayisi minimum 5 olabilir, bu yüzden otomatik olarak 5 ayarlandı."
			);
			yazi_sayisi = 5;
		}

		// Yaziları kapsayacak div oluşturuldu
		let hero_icerik = document.createElement("div");
		hero_icerik.classList.add("__icerik");

		// Yazilar için component oluşturuldu
		let yazi = document.createElement("div");
		yazi.classList.add("__yazi");
		yazi.innerHTML = item.dataset.yazi;

		// Ebeveyine kapsayici eklendi
		item.appendChild(hero_icerik);

		// Kapsayıcıya istenilen miktarda yazi eklendi
		for (let i = 1; i <= yazi_sayisi; i++) {
			hero_icerik.innerHTML += "";
			hero_icerik.appendChild(yazi);
		}
	});
}
/* Hero Slider oluşturucu SON */


/* Çerez Politikası ve Popup */

// Atamalar
var cerez_politikasi__ad = "cerez-politikasi",
	cerez_politikasi__deger = localStorage.getItem(cerez_politikasi__ad),
	cerez_popup = document.getElementById("cerez-popup"),
	cerez_popup__tuslar = cerez_popup.querySelectorAll(".__butonlar > .--buton");

// Çerez Popup tışlarına basıldığında ne olacağını belirler
var cerez_popuo__tuslar_olay = () => {
	cerez_popup__tuslar.forEach((tus) => {
		tus.addEventListener("click", function () {
			// Kabul ete basıldığında
			if (tus.classList.contains("--kabul")) {
				cerez_kabul_et();
			}
			// Daha sonra tuşuna basıldığında
			else {
				cerez_popup__kapat();
			}
		});
	});
};

// Cerez politikasının kabul edilip edilmediğini sorgular
var cerez_politikasi_kontrol = () => {
	// Tarayıcı çerezlerinin aktif olup olmadığına bakıyor
	if (window.localStorage) {
		if (cerez_politikasi__deger) {
			if (cerez_politikasi__deger === "kabul") {
				cerez_popup__kapat();
			}
		}
	} else {
		console.error("Taraycının çerez desteği kapalı, lütfen aktive edin!");
	}
};

// Çerez politikası kabul edildiğinde olacak
var cerez_kabul_et = () => {
	localStorage.setItem(cerez_politikasi__ad, "kabul");
	cerez_popup__kapat();
};

// Çerez Popup'ı kapatır
var cerez_popup__kapat = () => {
	if (!cerez_popup.classList.contains("--kapali")) {
		cerez_popup.classList.add("--kapali");
	}
};

// Çerez Popup olaylarını çalıştırır
var cerez_popup__calistir = () => {
	cerez_politikasi_kontrol();
	cerez_popuo__tuslar_olay();
};
/* Çerez Politikası ve Popup SON */


// Girilen fonksiyonları başlangıçta çalıştırmak üzere dışarı aktarır
export var app = () => {
	document.addEventListener("DOMContentLoaded", () => {
		cerez_popup__calistir();
	});
}