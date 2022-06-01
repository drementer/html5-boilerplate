/*!
 * @author drementer
 * klncarslanburak@gmail.com
 * @license MIT (https://github.com/drementer/dred/blob/master/LICENSE)
*/

/* İmport */
import {
	scroll_ac,
	scroll_kapat,
	log,
	go_top,
	pozisyon,
} from "./scripts/__functions.js";

// Çerez
import cerez from "./components/__cerez-popup.js";
cerez();

// Sliders
import sliders from "./scripts/__sliders.js";
sliders();

// Lazy Load
import lazy_load from "./scripts/__lazy-load.js";
lazy_load();

// Form Elemanları
import form_elemanlari from "./components/__form-elemanlari.js";
form_elemanlari();

// Cursor
import cursor from "./components/__cursor.js";
cursor();

// Go Top
import got_top from "./components/__go-top.js";
got_top();

// Loader
import loader from "./components/__loader.js";
loader();
/* İmport SON */

/* Atamalar */
const doc = document,
	body = doc.body;
