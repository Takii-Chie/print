var kanji = [
	[ "算数", "さんすう" ],
	[ "最小", "さいしょう" ],
	[ "最大", "さいだい" ],
	[ "公倍数", "こうばいすう" ],
	[ "公約数", "こうやくすう" ],
	[ "倍数", "ばいすう" ],
	[ "約数", "やくすう" ],
	[ "表示", "ひょうじ" ],
	[ "変数", "へんすう" ],
	[ "増やし", "ふやし" ],
	[ "余り", "あまり" ],
	[ "求める", "もとめる" ],
	[ "使う", "つかう" ],
	[ "使って", "つかって" ],
	[ "記号", "きごう" ],
	[ "意味", "いみ" ],
	[ "両方", "りょうほう" ],
	[ "共通", "きょうつう" ],
	[ "確認", "かくにん" ],
	[ "同士", "どうし" ],
	[ "計算", "けいさん" ],
	[ "素数", "そすう" ],
	[ "素数", "そすう" ],
	[ "実験", "じっけん" ],
	[ "実行", "じっこう" ],
	[ "用意", "ようい" ],
	[ "掛け算", "かけざん" ],
	[ "割り算", "わりざん" ],
	[ "数え", "かぞえ" ],
	[ "増え", "ふえ" ],
	[ "割って", "わって" ],
	[ "割り切れ", "わりきれ" ],
	[ "数", "かず" ],
	[ "桁", "けた" ],
	[ "何", "なに" ],
];

window.onload = function() {
	var flg = document.location.hash.indexOf("kana") >= 0;
	if (flg) {
		var s = document.body.innerHTML;
		for (var i = 0; i < kanji.length; i++) {
			var k = kanji[i];
			s = s.replace(new RegExp(k[0], "g"), k[1]);
		}
		document.body.innerHTML = s;
	}
};