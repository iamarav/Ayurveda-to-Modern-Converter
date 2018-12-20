function popMenu(inval){
	htmlVal = "";
	for (i = 0; i < allA.length; i++) {
		if (inval == allA[i][0][0]){
			htmlVal = htmlVal + "<li id='menuon'><a href='javascript:popMenu(\"" + allA[i][0][0] + "\");showSel(" + allA[i][0][1] + ");'>" + allA[i][0][0] + "</a></li> ";
		}else{
			htmlVal = htmlVal + "<li><a href='javascript:popMenu(\"" + allA[i][0][0] + "\");showSel(" + allA[i][0][1] + ");'>" + allA[i][0][0] + "</a></li> ";
		}
	}
	htmlVal = "<ul>" + htmlVal + "</ul>";
	gObj("topmenu").innerHTML = htmlVal;
}

var tempDescToUse = "Temperature";
if (typeof tempDesc !== 'undefined') tempDescToUse = tempDesc;

var lA = new Array();
lA[0] = new Array("Length","lA");

lA[1] = new Array("YAVODARA","iv*0.0024","iv/0.0024");
lA[2] = new Array("ANGULA","iv*0.0195","iv/0.0195");
lA[3] = new Array("BITAHASTI","iv*0.2286","iv/0.2286");
lA[4] = new Array("ARATNI","iv*0.4191","iv/0.4191");
lA[5] = new Array("HASTA","iv*0.4572","iv/0.4572");
lA[6] = new Array("RAJAHASTA (NRIPAHASTA)","iv*0.5588","iv/0.5588");
lA[7] = new Array("VYAMA","iv*1.8288","iv/1.8288");

lA[8] = new Array("Meter","iv","iv");
lA[9] = new Array("Kilometer","iv*1000","iv/1000");
lA[10] = new Array("Centimeter","iv*0.01","iv/0.01");
lA[11] = new Array("Millimeter","iv*0.001","iv/0.001");
lA[12] = new Array("Micrometer","iv*0.000001","iv/0.000001");
lA[13] = new Array("Nanometer","iv*0.000000001","iv/0.000000001");
lA[14] = new Array("Mile","iv*1609.35","iv/1609.35");
lA[15] = new Array("Yard","iv*0.9144","iv/0.9144");
lA[16] = new Array("Foot","iv*0.3048","iv/0.3048");
lA[17] = new Array("Inch","iv*0.0254","iv/0.0254");


var mA = new Array();
mA[0] = new Array("Time","mA");

mA[1] = new Array("KSANA","iv*0.38","iv/0.38");
mA[2] = new Array("LAVA","iv*0.77","iv/0.77");
mA[3] = new Array("NIMESHA","iv*1.55","iv/1.55");
mA[4] = new Array("KASTHA","iv*4.66","iv/4.66");
mA[5] = new Array("KALA","iv*140","iv/140");
mA[6] = new Array("GHATI","iv*1440","iv/1440");
mA[7] = new Array("MUHURTA","iv*2880","iv/2880");
mA[8] = new Array("AHORATRA","iv*86400","iv/86400");
mA[9] = new Array("PAKSA","iv*1296000","iv/1296000");
mA[10] = new Array("MASA","iv*2592000","iv/2592000");
mA[11] = new Array("RITU","iv*5184000","iv/5184000");
mA[12] = new Array("AYANA","iv*15778800","iv/15778800");
mA[13] = new Array("SAMVATSARA","iv*31557600","iv/31557600");
mA[14] = new Array("YUGA","iv*157788000","iv/157788000");

mA[15] = new Array("Second","iv","iv");
mA[16] = new Array("Millisecond", "iv*0.001", "iv/0.001");
mA[17] = new Array("Microsecond", "iv*0.000001", "iv/0.000001");
mA[18] = new Array("Nanosecond", "iv*0.000000001", "iv/0.000000001");
mA[19] = new Array("Picosecond", "iv*0.000000000001", "iv/0.000000000001");
mA[20] = new Array("Minute", "iv*60", "iv/60");
mA[21] = new Array("Hour", "iv*3600", "iv/3600");
mA[22] = new Array("Day", "iv*86400", "iv/86400");
mA[23] = new Array("Week", "iv*604800", "iv/604800");
mA[24] = new Array("Month", "iv*2629800", "iv/2629800");
mA[25] = new Array("Year", "iv*31557600", "iv/31557600");


var wA = new Array();
wA[0] = new Array("Weight","wA");

wA[1] = new Array("PARAMANU","iv*0.0000000016","iv/0.0000000016");
wA[2] = new Array("DHAVANSHI","iv*0.00000005","iv/0.00000005");
wA[3] = new Array("MARICHI","iv*0.00000032","iv/0.00000032");
wA[4] = new Array("LAL SARSHAP","iv*0.00000195","iv/0.00000195");
wA[5] = new Array("TUNDAL","iv*0.00001562","iv/0.00001562");
wA[6] = new Array("DHANYAMASH","iv*0.00003125","iv/0.00003125");
wA[7] = new Array("YAVA","iv*0.0000625","iv/0.0000625");
wA[8] = new Array("RATTI","iv*0.000125","iv/0.000125");
wA[9] = new Array("ANDIKA","iv*0.00025","iv/0.00025");
wA[10] = new Array("MASHAK (MASA)","iv*0.001","iv/0.001");
wA[11] = new Array("SHAAN","iv*0.003","iv/0.003");
wA[12] = new Array("KOL","iv*0.006","iv/0.006");
wA[13] = new Array("TOLA","iv*0.012","iv/0.012");
wA[14] = new Array("KARSHA","iv*0.012","iv/0.012");
wA[15] = new Array("SHUKTI","iv*0.024","iv/0.024");
wA[16] = new Array("PAL","iv*0.048","iv/0.048");
wA[17] = new Array("CHHATANK","iv*0.06","iv/0.06");
wA[18] = new Array("PRASRTIS","iv*0.096","iv/0.096");
wA[19] = new Array("CHHATAAK","iv*0.186","iv/0.186");
wA[20] = new Array("KUDAV","iv*0.192","iv/0.192");
wA[21] = new Array("MANIKA","iv*0.384","iv/0.384");
wA[22] = new Array("PRASTHA (PRASTH)","iv*0.768","iv/0.768");
wA[23] = new Array("SER (SERA or SEER)","iv*0.96","iv/0.96");
wA[24] = new Array("ADHAKA (AADAK)","iv*3.073","iv/3.073");
wA[25] = new Array("TULA","iv*4.8","iv/4.8");
wA[26] = new Array("DRONA (DRON)","iv*12.228","iv/12.228");
wA[27] = new Array("SURPA (SHOORP)","iv*24.576","iv/24.576");
wA[28] = new Array("DRONI","iv*49.152","iv/49.152");
wA[29] = new Array("BHARA","iv*96","iv/96");
wA[30] = new Array("KHARI","iv*196.608","iv/192.608");
//
wA[31] = new Array("Kilogram","iv","iv");
wA[32] = new Array("Gram", "iv*0.001", "iv/0.001");
wA[33] = new Array("Milligram", "iv*0.000001", "iv/0.000001");
wA[34] = new Array("Metric Ton", "iv*1000", "iv/1000");
wA[35] = new Array("Long Ton", "iv*1016.04608", "iv/1016.04608");
wA[36] = new Array("Short Ton", "iv*907.184", "iv/907.184");
wA[37] = new Array("Pound", "iv*0.453592", "iv/0.453592");
wA[38] = new Array("Ounce", "iv*0.0283495", "iv/0.0283495");
wA[39] = new Array("Carrat", "iv*0.0002", "iv/0.0002");


allA = new Array(lA,mA,wA);


function gnumberFormat(valToBeFormated){
	var gniTotalDigits = 12;
	var gniPareSize = 12;
	var valStr = "" + valToBeFormated;
	if (valStr.indexOf("N")>=0 || (valToBeFormated == 2*valToBeFormated && valToBeFormated == 1+valToBeFormated)) return "Error ";
	var i = valStr.indexOf("e")
	if (i>=0){
		var expStr = valStr.substring(i+1,valStr.length);
		if (i>11) i=11;  // max 11 digits
		valStr = valStr.substring(0,i);
		if (valStr.indexOf(".")<0){
			valStr += ".";
		}else{
			// remove trailing zeros
			j = valStr.length-1;
			while (j>=0 && valStr.charAt(j)=="0") --j;
			valStr = valStr.substring(0,j+1);
		}
		valStr += " " + expStr;
	}else{
		var valNeg = false;
		if (valToBeFormated < 0){
			valToBeFormated = -valToBeFormated;
			valNeg = true;
		}
		var valInt = Math.floor(valToBeFormated);
		var valFrac = valToBeFormated - valInt;
		var prec = gniTotalDigits - (""+valInt).length - 1;	// how many digits available after period

		var mult = " 1000000000000000000".substring(1,prec+2);
		if ((mult=="")||(mult==" ")){
			mult = 1;
		}else{
			mult = parseInt(mult);
		}
		var frac = Math.floor(valFrac * mult + 0.5);
		valInt = Math.floor(Math.floor(valToBeFormated * mult + .5) / mult);
		if (valNeg)
			valStr = "-" + valInt;
		else
			valStr = "" + valInt;
		var fracStr = "00000000000000"+frac;
		fracStr = fracStr.substring(fracStr.length-prec, fracStr.length);
		i = fracStr.length-1;

		// remove trailing zeros unless fixed during entry.
		while (i>=0 && fracStr.charAt(i)=="0") --i;
		fracStr = fracStr.substring(0,i+1);
		if (i>=0) valStr += "." + fracStr;
	}
	return valStr;
}

function isNum(sText){
	var ValidChars = "0123456789.-e";
	var Char;
	if (sText.length < 1) return false;
	for (i = 0; i < sText.length; i++) {
		Char = sText.charAt(i);
		if (ValidChars.indexOf(Char) == -1) return false;
	}
	return true;
}

function showSel(aName){
	document.calForm.calFrom.length = 0;
	document.calForm.calTo.length = 0;
	for(i=1; i<aName.length; i++){
		document.calForm.calFrom.options[(i-1)] = new Option(aName[i][0],i);
		document.calForm.calTo.options[(i-1)] = new Option(aName[i][0],i);
	}
	document.calForm.calFrom.options[0].selected = true;
	document.calForm.calTo.options[0].selected = true;
	document.calForm.toVal.value = "";
	currentAName = aName;
	calcul();
}

function calVal(id, iv){
	eval("rv = (" + currentAName[id][2] + ");");
	return gnumberFormat(rv);
}
function calcul(){
	selectFrom = document.calForm.calFrom;
	selectTo = document.calForm.calTo;
	fromVal = document.calForm.fromVal.value;
	selectFromID = 0;
	selectToID = 0;
	selectFromVal = "";
	selectToVal = "";
	stdval = 0;
	for (var i = 0; i < selectFrom.options.length; i++) {
		if(selectFrom.options[i].selected) {
			selectFromID = selectFrom.options[i].value;
			selectFromVal = selectFrom.options[i].text;
		}
	}
	for (var i = 0; i < selectTo.options.length; i++) {
		if(selectTo.options[i].selected) {
			selectToID = selectTo.options[i].value;
			selectToVal = selectTo.options[i].text;
		}
	}
	if ((selectFromID>0) && (isNum(fromVal))){
		iv = parseFloat(fromVal);
		stdval = 0;
		eval("stdval = " + currentAName[selectFromID][1]+ ";");
		document.calForm.calTo.length = 0;
		for(i=1; i<currentAName.length; i++){
			tempVal = calVal(i, stdval);
			selectTo.options[(i-1)] = new Option(currentAName[i][0] + " (" + tempVal + ")",i);
			if (selectToID == i) {
				selectTo.options[(i-1)].selected = true;
				document.calForm.toVal.value = tempVal;
			}
		}
	}
	if ((!(isNum(fromVal)))||(selectFromID<1)){
		for(i=1; i<currentAName.length; i++){
			tempVal = calVal(i, stdval);
			selectTo.options[(i-1)] = new Option(currentAName[i][0],i);
			if (selectToID == i) {
				selectTo.options[(i-1)].selected = true;
				document.calForm.toVal.value = "";
			}
		}
	}
}
