const sliders = () => {
	let ayarlar, slide, href, main, sub, sub_ayarlar;
	document.addEventListener("DOMContentLoaded", function () {
		/* Slide */
		ayarlar = {
			rewind: true,
		};
		href = document.querySelector("header .splide");
		if (href) {
			slide = new Splide(href, ayarlar);
			slide.mount();
		}
		/* Slide SON */

		/* Slide */
		ayarlar = {
			type: "loop",
		};
		sub_ayarlar = {
			fixedHeight: "auto",
		};
		main = document.querySelector(".ana-gorseller");
		sub = document.querySelector(".sub-gorseller");
		if (main && sub) {
			main = new Splide(main, ayarlar);
			sub = new Splide(sub, sub_ayarlar);

			main.sync(sub);
			main.mount();
			sub.mount();
		}
		/* Slide SON */
	});
};

export default sliders;
