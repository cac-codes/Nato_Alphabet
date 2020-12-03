
let letterArray = {
	a: "ALFA",
	b: "BRAVO",
	c: "CHARLIE",
	d: "DELTA",
	e: "ECHO",
	f: "FOXTROT",
	g: "GOLF",
	h: "HOTEL",
	i: "INDIA",
	j: "JULIETT",
	k: "KILO",
	l: "LIMA",
	m: "MIKE",
	n: "NOVEMBER",
	o: "OSCAR",
	p: "PAPA",
	q: "QUEBEC",
	r: "ROMEO",
	s: "SIERRA",
	t: "TANGO",
	u: "UNIFORM",
	v: "VICTOR",
	w: "WHISKEY",
	x: "X-RAY",
	y: "YANKEE",
	z: "ZULU",
	A: "ALFA",
	B: "BRAVO",
	C: "CHARLIE",
	D: "DELTA",
	E: "ECHO",
	F: "FOXTROT",
	G: "GOLF",
	H: "HOTEL",
	I: "INDIA",
	J: "JULIETT",
	K: "KILO",
	L: "LIMA",
	M: "MIKE",
	N: "NOVEMBER",
	O: "OSCAR",
	P: "PAPA",
	Q: "QUEBEC",
	R: "ROMEO",
	S: "SIERRA",
	T: "TANGO",
	U: "UNIFORM",
	V: "VICTOR",
	W: "WHISKEY",
	X: "X-RAY",
	Y: "YANKEE",
	Z: "ZULU",
	1: "ONE",
	2: "TWO",
	3: "THREE",
	4: "FOUR",
	5: "FIVE",
	6: "SIX",
	7: "SEVEN",
	8: "EIGHT",
	9: "NINE-ER",
	0: "ZERO",
	" ": "SPACE",
	"-": "DASH",
	".": "STOP",
};

let letterArrayCode = {
	Keya: "ALFA",
	Keyb: "BRAVO",
	Keyc: "CHARLIE",
	Keyd: "DELTA",
	Keye: "ECHO",
	Keyf: "FOXTROT",
	Keyg: "GOLF",
	Keyh: "HOTEL",
	Keyi: "INDIA",
	Keyj: "JULIETT",
	Keyk: "KILO",
	Keyl: "LIMA",
	Keym: "MIKE",
	Keyn: "NOVEMBER",
	Keyo: "OSCAR",
	Keyp: "PAPA",
	Keyq: "QUEBEC",
	Keyr: "ROMEO",
	Keys: "SIERRA",
	Keyt: "TANGO",
	Keyu: "UNIFORM",
	Keyv: "VICTOR",
	Keyw: "WHISKEY",
	Keyx: "X-RAY",
	Keyy: "YANKEE",
	Keyz: "ZULU",
	KeyA: "ALFA",
	KeyB: "BRAVO",
	KeyC: "CHARLIE",
	KeyD: "DELTA",
	KeyE: "ECHO",
	KeyF: "FOXTROT",
	KeyG: "GOLF",
	KeyH: "HOTEL",
	KeyI: "INDIA",
	KeyJ: "JULIETT",
	KeyK: "KILO",
	KeyL: "LIMA",
	KeyM: "MIKE",
	KeyN: "NOVEMBER",
	KeyO: "OSCAR",
	KeyP: "PAPA",
	KeyQ: "QUEBEC",
	KeyR: "ROMEO",
	KeyS: "SIERRA",
	KeyT: "TANGO",
	KeyU: "UNIFORM",
	KeyV: "VICTOR",
	KeyW: "WHISKEY",
	KeyX: "X-RAY",
	KeyY: "YANKEE",
	KeyZ: "ZULU",
	Digit1: "ONE",
	Digit2: "TWO",
	Digit3: "THREE",
	Digit4: "FOUR",
	Digit5: "FIVE",
	Digit6: "SIX",
	Digit7: "SEVEN",
	Digit8: "EIGHT",
	Digit9: "NINE-ER",
	Digit0: "ZERO",
	Space: "SPACE",
	Minus: "DASH",
	Period: "STOP",
};

var RadioImages = [
	"./img/cb01.gif",
	"./img/cb02.gif",
	"./img/cb03.gif",
	"./img/cb04.gif",
	"./img/cb05.gif",
	"./img/cb06.gif",
	"./img/cb07.gif",
	"./img/cb08.gif",
	"./img/cb09.gif",
	"./img/cb10.gif",
	"./img/cb11.gif",
	"./img/cb12.gif",
	"./img/cb13.gif",
];

var keyboardMap = [
	"", // [0]
	"", // [1]
	"", // [2]
	"CANCEL", // [3]
	"", // [4]
	"", // [5]
	"HELP", // [6]
	"", // [7]
	"BACK_SPACE", // [8]
	"TAB", // [9]
	"", // [10]
	"", // [11]
	"CLEAR", // [12]
	"ENTER", // [13]
	"ENTER_SPECIAL", // [14]
	"", // [15]
	"SHIFT", // [16]
	"CONTROL", // [17]
	"ALT", // [18]
	"PAUSE", // [19]
	"CAPS_LOCK", // [20]
	"KANA", // [21]
	"EISU", // [22]
	"JUNJA", // [23]
	"FINAL", // [24]
	"HANJA", // [25]
	"", // [26]
	"ESCAPE", // [27]
	"CONVERT", // [28]
	"NONCONVERT", // [29]
	"ACCEPT", // [30]
	"MODECHANGE", // [31]
	"SPACE", // [32]
	"PAGE_UP", // [33]
	"PAGE_DOWN", // [34]
	"END", // [35]
	"HOME", // [36]
	"LEFT", // [37]
	"UP", // [38]
	"RIGHT", // [39]
	"DOWN", // [40]
	"SELECT", // [41]
	"PRINT", // [42]
	"EXECUTE", // [43]
	"PRINTSCREEN", // [44]
	"INSERT", // [45]
	"DELETE", // [46]
	"", // [47]
	"0", // [48]
	"1", // [49]
	"2", // [50]
	"3", // [51]
	"4", // [52]
	"5", // [53]
	"6", // [54]
	"7", // [55]
	"8", // [56]
	"9", // [57]
	"COLON", // [58]
	"SEMICOLON", // [59]
	"LESS_THAN", // [60]
	"EQUALS", // [61]
	"GREATER_THAN", // [62]
	"QUESTION_MARK", // [63]
	"AT", // [64]
	"A", // [65]
	"B", // [66]
	"C", // [67]
	"D", // [68]
	"E", // [69]
	"F", // [70]
	"G", // [71]
	"H", // [72]
	"I", // [73]
	"J", // [74]
	"K", // [75]
	"L", // [76]
	"M", // [77]
	"N", // [78]
	"O", // [79]
	"P", // [80]
	"Q", // [81]
	"R", // [82]
	"S", // [83]
	"T", // [84]
	"U", // [85]
	"V", // [86]
	"W", // [87]
	"X", // [88]
	"Y", // [89]
	"Z", // [90]
	"OS_KEY", // [91] Windows Key (Windows) or Command Key (Mac)
	"", // [92]
	"CONTEXT_MENU", // [93]
	"", // [94]
	"SLEEP", // [95]
	"NUMPAD0", // [96]
	"NUMPAD1", // [97]
	"NUMPAD2", // [98]
	"NUMPAD3", // [99]
	"NUMPAD4", // [100]
	"NUMPAD5", // [101]
	"NUMPAD6", // [102]
	"NUMPAD7", // [103]
	"NUMPAD8", // [104]
	"NUMPAD9", // [105]
	"MULTIPLY", // [106]
	"ADD", // [107]
	"SEPARATOR", // [108]
	"SUBTRACT", // [109]
	"DECIMAL", // [110]
	"DIVIDE", // [111]
	"F1", // [112]
	"F2", // [113]
	"F3", // [114]
	"F4", // [115]
	"F5", // [116]
	"F6", // [117]
	"F7", // [118]
	"F8", // [119]
	"F9", // [120]
	"F10", // [121]
	"F11", // [122]
	"F12", // [123]
	"F13", // [124]
	"F14", // [125]
	"F15", // [126]
	"F16", // [127]
	"F17", // [128]
	"F18", // [129]
	"F19", // [130]
	"F20", // [131]
	"F21", // [132]
	"F22", // [133]
	"F23", // [134]
	"F24", // [135]
	"", // [136]
	"", // [137]
	"", // [138]
	"", // [139]
	"", // [140]
	"", // [141]
	"", // [142]
	"", // [143]
	"NUM_LOCK", // [144]
	"SCROLL_LOCK", // [145]
	"WIN_OEM_FJ_JISHO", // [146]
	"WIN_OEM_FJ_MASSHOU", // [147]
	"WIN_OEM_FJ_TOUROKU", // [148]
	"WIN_OEM_FJ_LOYA", // [149]
	"WIN_OEM_FJ_ROYA", // [150]
	"", // [151]
	"", // [152]
	"", // [153]
	"", // [154]
	"", // [155]
	"", // [156]
	"", // [157]
	"", // [158]
	"", // [159]
	"CIRCUMFLEX", // [160]
	"EXCLAMATION", // [161]
	"DOUBLE_QUOTE", // [162]
	"HASH", // [163]
	"DOLLAR", // [164]
	"PERCENT", // [165]
	"AMPERSAND", // [166]
	"UNDERSCORE", // [167]
	"OPEN_PAREN", // [168]
	"CLOSE_PAREN", // [169]
	"ASTERISK", // [170]
	"PLUS", // [171]
	"PIPE", // [172]
	"HYPHEN_MINUS", // [173]
	"OPEN_CURLY_BRACKET", // [174]
	"CLOSE_CURLY_BRACKET", // [175]
	"TILDE", // [176]
	"", // [177]
	"", // [178]
	"", // [179]
	"", // [180]
	"VOLUME_MUTE", // [181]
	"VOLUME_DOWN", // [182]
	"VOLUME_UP", // [183]
	"", // [184]
	"", // [185]
	"SEMICOLON", // [186]
	"EQUALS", // [187]
	"COMMA", // [188]
	"MINUS", // [189]
	"PERIOD", // [190]
	"SLASH", // [191]
	"BACK_QUOTE", // [192]
	"", // [193]
	"", // [194]
	"", // [195]
	"", // [196]
	"", // [197]
	"", // [198]
	"", // [199]
	"", // [200]
	"", // [201]
	"", // [202]
	"", // [203]
	"", // [204]
	"", // [205]
	"", // [206]
	"", // [207]
	"", // [208]
	"", // [209]
	"", // [210]
	"", // [211]
	"", // [212]
	"", // [213]
	"", // [214]
	"", // [215]
	"", // [216]
	"", // [217]
	"", // [218]
	"OPEN_BRACKET", // [219]
	"BACK_SLASH", // [220]
	"CLOSE_BRACKET", // [221]
	"QUOTE", // [222]
	"", // [223]
	"META", // [224]
	"ALTGR", // [225]
	"", // [226]
	"WIN_ICO_HELP", // [227]
	"WIN_ICO_00", // [228]
	"", // [229]
	"WIN_ICO_CLEAR", // [230]
	"", // [231]
	"", // [232]
	"WIN_OEM_RESET", // [233]
	"WIN_OEM_JUMP", // [234]
	"WIN_OEM_PA1", // [235]
	"WIN_OEM_PA2", // [236]
	"WIN_OEM_PA3", // [237]
	"WIN_OEM_WSCTRL", // [238]
	"WIN_OEM_CUSEL", // [239]
	"WIN_OEM_ATTN", // [240]
	"WIN_OEM_FINISH", // [241]
	"WIN_OEM_COPY", // [242]
	"WIN_OEM_AUTO", // [243]
	"WIN_OEM_ENLW", // [244]
	"WIN_OEM_BACKTAB", // [245]
	"ATTN", // [246]
	"CRSEL", // [247]
	"EXSEL", // [248]
	"EREOF", // [249]
	"PLAY", // [250]
	"ZOOM", // [251]
	"", // [252]
	"PA1", // [253]
	"WIN_OEM_CLEAR", // [254]
	"" // [255]
  ];
/////////random start image/////////////
var size = RadioImages.length
var x = Math.floor(size*Math.random())
document.getElementById('images').src=RadioImages[x];



////////audio//////////
(function AudioKeys(){
	var keyElements	= document.getElementsByTagName('keysound'),
		i = keyElements.length,
        keys = {};
        

	while (i--){
        var cur	= (keyElements[i].getAttribute('keys')||"").toString().split(''),
        
			v= cur.length,
			audio	= keyElements[i].getAttribute('src'),
			caseinsensitive	= keyElements[i].getAttribute('anycase')!==null?true:false,
			regexp	= keyElements[i].getAttribute('audioplayer')!==null?true:false;
		if (audio){
			while (v--){
        cur[v] = caseinsensitive ? cur[v] : cur[v].toLowerCase();
        
				var src=!regexp?audio:
				audio.replace('${key}', cur[v])
				.replace('${code}', cur[v].charCodeAt(0));
				var element = document.createElement('audio');
				element.src = src;
				document.body.appendChild(element);
				(keys[cur[v]] = keys[cur[v]] || []).push(element);

				if (caseinsensitive) {
            
					(keys[cur[v].toUpperCase()] = keys[cur[v].toUpperCase()] || []).push(element);
				}
			}
		}
    }
    
        

  console.log(keys); 
  window.addEventListener('keydown', function(event){

    var clist	= keys[event.key] || [],
        clen	= clist.length;
    while (clen--){
        try { clist[clen].play() } catch(e) {}
	};
	/////////letter/////////////
	
	var keyPressed = event.key;

	document.getElementById("letters").innerHTML = 
	"YOU KEYED: " + keyPressed;

	console.log(event.key);
	console.log(event.code);

	/////////words/////////////

	var keyPressed = event.key;
	var keyPressedcode = event.code;
	
	if (keyPressedcode in letterArrayCode){
		document.getElementById("words").innerHTML = 
		letterArray[keyPressed]
	} 
	else {document.getElementById("words").innerHTML = 
	event.key;
}
	///////////images////////////

	var idkImages = [
		"./img/idk01.gif",
		"./img/idk02.gif",
		"./img/idk03.gif",
		"./img/idk04.gif",
		"./img/idk05.gif",
		
	];
	
	var x = event.key;

	var size = idkImages.length

	var y = Math.floor(size*Math.random())

	var keyPressed = event.key;
	
	var keyPressedcode = event.code;
	
	if (keyPressedcode in letterArrayCode){
		document.getElementById("images").src = 
				src="./img/" + (event.code) + ".gif"
	} 
	else {document.getElementById('images').src= idkImages[y];
}

});

////////page load focus on box ////////////
	window.onload = function() {
		var input = document.getElementById("textInputArea").focus();

////////page pre-load gifs ////////////	
		var images = [];
		function preloadGifs() {
			for (var i = 0; i < arguments.length; i++) {
				images[i] = new Image();
				images[i].src = preloadGifs.arguments[i];
			}
		}	
	  }
	  preloadGifs(
		"/img/KeyA.gif",
		"/img/KeyB.gif",
		"/img/KeyC.gif",
		"/img/KeyD.gif",
		"/img/KeyE.gif",
		"/img/KeyF.gif",
		"/img/KeyG.gif",
		"/img/KeyH.gif",
		"/img/KeyI.gif",
		"/img/KeyJ.gif",
		"/img/KeyK.gif",
		"/img/KeyL.gif",
		"/img/KeyM.gif",
		"/img/KeyN.gif",
		"/img/KeyO.gif",
		"/img/KeyP.gif",
		"/img/KeyQ.gif",
		"/img/KeyR.gif",
		"/img/KeyS.gif",
		"/img/KeyT.gif",
		"/img/KeyU.gif",
		"/img/KeyV.gif",
		"/img/KeyW.gif",
		"/img/KeyX.gif",
		"/img/KeyY.gif",
		"/img/KeyZ.gif",
		"/img/Digit0.gif",
		"/img/Digit1.gif",
		"/img/Digit2.gif",
		"/img/Digit3.gif",
		"/img/Digit4.gif",
		"/img/Digit5.gif",
		"/img/Digit6.gif",
		"/img/Digit7.gif",
		"/img/Digit8.gif",
		"/img/Digit9.gif",
		"/img/Space.gif",
		"/img/Period.gif",
		"/img/Minus.gif",
		"/img/idk01.gif",
		"/img/idk02.gif",
		"/img/idk03.gif",
		"/img/idk04.gif",
		"/img/idk05.gif",
	)

	
})();