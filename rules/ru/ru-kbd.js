( function ( $ ) {
	'use strict';

	var ruKbd = {
		id: 'ru-kbd',
		name: 'Russian kbd',
		description: 'Russian kbd keyboard layout',
		date: '2013-02-12',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Parag Nemade',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
  			["`", "ё"],
			["q", "й"],
			["w", "ц"],
			["e", "у"],
			["r", "к"],
			["t", "е"],
			["y", "н"],
			["u", "г"],
			["i", "ш"],
			["o", "щ"],
			["p", "з"],
			["\\[", "х"],
			["\\]", "ъ"],
			["a", "ф"],
			["s", "ы"],
			["d", "в"],
			["f", "а"],
			["g", "п"],
			["h", "р"],
			["j", "о"],
			["k", "л"],
			["l", "д"],
			[";", "ж"],
			["'", "э"],
			["\\\\", "\\"],
			["z", "я"],
			["x", "ч"],
			["c", "с"],
			["v", "м"],
			["b", "и"],
			["n", "т"],
			["m", "ь"],
			[",", "б"],
			[".", "ю"],
			["/", "."],
			["\\!", "!"],
			["\\@", "\""],
			["\\#", "№"],
			["\\$", "\;"],
			["\\%", "%"],
			["\\^", ":"],
			["\\&", "?"],
			["\\*", "*"],
			["\\(", "\("],
			["\\)", "\)"],
			["\\_", "_"],
			["\\+", "+"],
			["\\~", "Ё"],
			["Q", "Й"],
			["W", "Ц"],
			["E", "У"],
			["R", "К"],
			["T", "Е"],
			["Y", "Н"],
			["U", "Г"],
			["I", "Ш"],
			["O", "Щ"],
			["P", "З"],
			["\\{", "Х"],
			["\\}", "Ъ"],
			["A", "Ф"],
			["S", "Ы"],
			["D", "В"],
			["F", "А"],
			["G", "П"],
			["H", "Р"],
			["J", "О"],
			["K", "Л"],
			["L", "Д"],
			[":", "Ж"],
			["\"", "Э"],
			["\\|", "\|"],
			["Z", "Я"],
			["X", "Ч"],
			["C", "С"],
			["V", "М"],
			["B", "И"],
			["N", "Т"],
			["M", "Ь"],
			["\\<", "Б"],
			["\\>", "Ю"],
			["\\?", ","]]
	};
	$.ime.register( ruKbd );

}( jQuery ) );

