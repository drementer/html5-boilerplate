const form_elemanlari = () => {
	/* Textarea */
	const ta_hizala = (element) => {
			element.style.height = "auto";
			element.style.height = element.scrollHeight + "px";
		},
		textarealar = document.querySelectorAll("textarea");
	textarealar.forEach((textarea) => {
		// Değer girildiğinde
		textarea.addEventListener("input", () => {
			ta_hizala(textarea);

			// İçeriği silindiğinde
			if (element.value == undefined || element.value == "") {
				element.style.height = "70px";
			}
		});
		textarea.onload = ta_hizala(textarea);
	});
	/* Textarea SON */

	/* İnputlar */
	const inputlar = document.querySelectorAll(".input");
	inputlar.forEach((input) => {
		let input_ogesi =
			input.querySelector("input") || input.querySelector("textarea");
		if (input_ogesi) {
			input_ogesi.addEventListener("input", () => {
				if (input_ogesi.checkValidity()) {
					input.removeAttribute("invalid");
				} else {
					input.setAttribute("invalid", "");
				}
			});
		}
	});
	/* İnputlar SON */

	/* Checkbox & Radio */
	const elementler = document.querySelectorAll(".checkbox, .radio");
	elementler.forEach((element) => {
		let element_input = element.querySelector("input");
		if (element.hasAttribute("checked")) {
			element_input.toggleAttribute("checked");
		}
	});
	/* Checkbox & Radio SON */
};

export default form_elemanlari;
