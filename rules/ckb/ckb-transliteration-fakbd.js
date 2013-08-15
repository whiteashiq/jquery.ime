( function ( $ ) {
	'use strict';

	var ckbTransliterationFakbd = {
		id: 'ckb-transliteration-fakbd',
		name: 'ڕۆژھەڵاتی',
		description: 'Central Kurdish keyboard based on Persian keyboard',
		date: '2013-07-06',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Çalak',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			['`', 'پ'],
			['1', '١'],
			['2', '٢'],
			['3', '٣'],
			['4', '٤'],
			['5', '٥'],
			['6', '٦'],
			['7', '٧'],
			['8', '٨'],
			['9', '٩'],
			['0', '٠'],

			['q', 'ڵ'],
			['w', 'ۆ'],
			['e', 'ێ'],
			['r', 'ق'],
			['t', 'ف'],
			['y', 'غ'],
			['u', 'ع'],
			['i', 'ە'],
			['o', 'خ'],
			['p', 'ح'],
			['\\[', 'ج'],
			['\\]', 'چ'],
			['\\\\', 'ژ'],

			['a', 'ش'],
			['s', 'س'],
			['d', 'ی'],
			['f', 'ب'],
			['g', 'ل'],
			['h', 'ا'],
			['j', 'ت'],
			['k', 'ن'],
			['l', 'م'],
			['\\;', 'ک'],
			['\'', 'گ'],

			['z', 'ڤ'],
			['x', 'ھ'],
			['c', 'ز'],
			['v', 'ر'],
			['b', 'ڕ'],
			['n', 'د'],
			['m', 'ئ'],
			['\\,', 'و'],
			['\\.', '.'],
			['/', '/'],

			['\\%', '٪'],
			['\\(', ')'],
			['\\)', '('],

			['Q', 'ض'],
			['W', 'ص'],
			['E', 'ث'],
			['R', 'ك'],
			['T', '،'],
			['Y', '؛'],
			['U', '\\'],
			['I', ']'],
			['O', '['],
			['P', '\''],
			['\\{', '}'],
			['\\}', '{'],

			['A', 'ڎ'],
			['S', 'إ'],
			['D', 'ي'],
			['F', 'ة'],
			['G', 'ۀ'],
			['H', 'آ'],
			['J', 'ـ'],
			['K', '»'],
			['L', '«'],

			['Z', 'ظ'],
			['X', 'ط'],
			['C', 'ژ'],
			['V', 'ؤ'],
			['B', 'ذ'],
			['N', '‌أ'],
			['M', 'ء'],
			['\\<', '>'],
			['\\>', '<'],
			['\\?', '؟']
		]
	};
	$.ime.register( ckbTransliterationFakbd );

}( jQuery ) );
