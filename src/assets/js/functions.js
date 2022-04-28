/* Genel */
let scroll_kapat = () => {
		document.querySelector("html, body").style.overflowY = "hidden";
	},
	scroll_ac = () => {
		document.querySelector("html, body").style.overflowY = "auto";
	},
	log = console.log.bind(document),
	is_string = (value) => {
		return typeof value === "string" || value instanceof String;
	},
	is_null = (value) => {
		return value !== null || value !== undefined;
	},
	is_number = (value) => {
		return !isNaN(value);
	},
	gtt = () => window.scrollTo(0, 0),
	is_dark_mode =
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches;
/* Genel SON */

/*  */
///		(function () {
///			some private code that will be executed automatically
///		})();
///		(function (a, b) {
///			var result = a + b;
///			return result;
///		})(10, 20);
/*  */

/* Export */
export {
	scroll_ac,
	scroll_kapat,
	log,
	is_string,
	is_null,
	is_number,
	gtt,
	is_dark_mode,
};
/* Export SON */
