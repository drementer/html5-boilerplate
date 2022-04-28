export default function () {
	let cerez_popup = document.getElementById("cerez-popup");
	if (cerez_popup) {
		let cerez_politikasi__isim = "cerez-politikasi",
			cerez_politikasi__deger = localStorage.getItem(
				cerez_politikasi__isim
			),
			cerez_popup__tuslar = cerez_popup.querySelectorAll(
				".cerez-popup__butonlar > .buton"
			),
			cerez_popup__kapat = () => {
				cerez_popup.toggleAttribute("kapali");
			},
			cerez_popup__kabul_et = () => {
				localStorage.setItem(cerez_politikasi__isim, "kabul");
				cerez_popup__kapat();
			};

		cerez_popup__tuslar.forEach((tus) => {
			tus.addEventListener("click", () => {
				if (tus.matches(".buton--kabul")) {
					cerez_popup__kabul_et();
				} else {
					cerez_popup__kapat();
				}
			});
		});

		if (window.localStorage) {
			if (
				!cerez_politikasi__deger ||
				cerez_politikasi__deger !== "kabul"
			) {
				cerez_popup__kapat();
			}
		} else {
			console.error(
				"Taraycının çerez desteği kapalı, lütfen aktive edin!"
			);
		}
	}
}
