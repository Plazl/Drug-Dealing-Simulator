var openTab = 1;
var moneu = 100;
var farm1interval;
var farm2interval;
var farm3interval;
var farm4interval;
var farm5interval;
var farm6interval;
var farm7interval;
var farm8interval;
var boost = 1;
var boostMult = 1;
var savedGame;
var save;
var convertedDrugs;
var achivements = {
 '1stAch': 'You gotta start somewhere',
 '2ndAch': 'Why do you play this?',
 '3dAch': 'Do you have problems?',
 '4thAch': 'Do I need to get you a therapist?',
 '5thAch': 'Stop playing and take a break',
 '6thAch': 'I told you to take a break from this joke',
 '7thAch': 'oHH MAN, YOU REACHED A 7TH FARM',
 '8thAch': 'Too far to go back',
 '9thAch': 'Hard drugs',
 '10thAch': 'Automation 1, the addict',
 '11thAch': 'Automation 2, the problematic',
 '12thAch': 'Automation 3, the untrusted',
 '13thAch': 'Automation 4, the bored',
 '14thAch': 'Automation 5, the boring',
 '15thAch': 'Automation 6, the tired',
 '16thAch': 'Automation 7, the sad',
 '17thAch': 'Automation 8, the final',
 '18thAch': 'Automation 9, another one?',
 '19thAch': 'INFINITY!'
}
var unlockedAchs = {
'1':0,
'2':0,
'3':0,
'4':0,
'5':0,
'6':0,
'7':0,
'8':0,
'9':0,
'10':0,
'11':0,
'12':0,
'13':0,
'14':0,
'15':0,
'16':0,
'17':0,
'18':0
}
var displayMoney = moneu.toExponential(2);
var farmMults = {
 '1': 1,
 '2': 1,
 '3': 1,
 '4': 1,
 '5': 1,
 '6': 1,
 '7': 1,
 '8': 1
}
var boostReq = {
 'farmType':8,
 'farmCount':20
}
var farmsCost = {
 '1':100,
 '2':1000,
 '3':10000,
 '4':100000,
 '5':1000000,
 '6':10000000,
 '7':100000000,
 '8':1000000000
}
var farms = {
 '1':0,
 '2':0,
 '3':0,
 '4':0,
 '5':0,
 '6':0,
 '7':0,
 '8':0
}
var drugs = {
 'aderall':0,
 'marujuana':0,
 'crack':0,
 'meth':0
}
var unlockedDrugs = {
'aderall':1,
'marujuana':0,
'crack':0,
'meth':0
}
var drugsWorth = {
'aderall':1,
'marujuana':50,
'crack':500,
'meth':10000
}
var t1 = 500;
var t2 = 500;
var t3 = 500;
var t4 = 500;
var t5 = 500;
var t6 = 500;
var t7 = 500;
var t8 = 500;
var hiddenDrug = 2;
var autoBuyerOn = {
 '1':'off',
 '2':'off',
 '3':'off',
 '4':'off',
 '5':'off',
 '6':'off',
 '7':'off',
 '8':'off',
 'boost':'off'
}
var autobuyerMults = {
 '1':1,
 '2':1,
 '3':1,
 '4':1,
 '5':1,
 '6':1,
 '7':1,
 '8':1,
 'boost':1
}
var autobuyers = {
 '1':0,
 '2':0,
 '3':0,
 '4':0,
 '5':0,
 '6':0,
 '7':0,
 '8':0,
 'boost':0
}
var autoBuyerPrices = {
 '1':500,
 '2':1000,
 '3':2000,
 '4':4000,
 '5':8000,
 '6':16000,
 '7':32000,
 '8':64000,
 'boost':128000
}
var autoBuyerInt1 = 100;
var autoBuyerInt2 = 100;
var autoBuyerInt3 = 100;
var autoBuyerInt4 = 100;
var autoBuyerInt5 = 100;
var autoBuyerInt6 = 100;
var autoBuyerInt7 = 100;
var autoBuyerInt8 = 100;
var autoBuyerInt9 = 100;
var buyers = {
 'b1': parseInt(autoBuyerInt1 + "000"),
 'b2': parseInt(autoBuyerInt2 + "000"),
 'b3': parseInt(autoBuyerInt3 + "000"),
 'b4': parseInt(autoBuyerInt4 + "000"),
 'b5': parseInt(autoBuyerInt5 + "000"),
 'b6': parseInt(autoBuyerInt6 + "000"),
 'b7': parseInt(autoBuyerInt7 + "000"),
 'b8': parseInt(autoBuyerInt8 + "000"),
 'b9': parseInt(autoBuyerInt9 + "000")
}
var buyerInt1;
var buyerInt2;
var buyerInt3;
var buyerInt4;
var buyerInt5;
var buyerInt6;
var buyerInt7;
var buyerInt8;
var buyerInt9;
var displayFarms1 = farms[1].toExponential(2);
var displayFarms2 = farms[2].toExponential(2);
var displayFarms3 = farms[3].toExponential(2);
var displayFarms4 = farms[4].toExponential(2);
var displayFarms5 = farms[5].toExponential(2);
var displayFarms6 = farms[6].toExponential(2);
var displayFarms7 = farms[7].toExponential(2);
var displayFarms8 = farms[8].toExponential(2);
var displayFarmsCost1 = farmsCost[1].toExponential(2);
var displayFarmsCost2 = farmsCost[2].toExponential(2);
var displayFarmsCost3 = farmsCost[3].toExponential(2);
var displayFarmsCost4 = farmsCost[4].toExponential(2);
var displayFarmsCost5 = farmsCost[5].toExponential(2);
var displayFarmsCost6 = farmsCost[6].toExponential(2);
var displayFarmsCost7 = farmsCost[7].toExponential(2);
var displayFarmsCost8 = farmsCost[8].toExponential(2);
var displayDrugs1 = drugs.aderall.toExponential(2);
var displayDrugs2 = drugs.marujuana.toExponential(2);
var displayDrugs3 = drugs.crack.toExponential(2);
var displayDrugs4 = drugs.meth.toExponential(2);
var game = JSON.parse(localStorage.getItem('gameSave'));
var menu1 = document.getElementById('farms');
var menu2 = document.getElementById('upgrades');
var menu3 = document.getElementById('achivements');
var menu4 = document.getElementById('automation');
var displayDrugs = drugs.aderall + drugs.marujuana + drugs.crack + drugs.meth;
var convert = moneu => {
	    if (moneu < 1e3) return moneu;
	    if (moneu >= 1e3 && moneu < 1e6) return +(moneu / 1e3).toFixed(2) + "K";
            if (moneu >= 1e6 && moneu < 1e9) return +(moneu / 1e6).toFixed(2) + "M";
	    if (moneu >= 1e9 && moneu < 1e12) return +(moneu / 1e9).toFixed(2) + "B";
	    if (moneu >= 1e12 && moneu < 1e15) return +(moneu / 1e12).toFixed(2) + "T";
            if (moneu >= 1e15 && moneu < 1e18) return +(moneu / 1e15).toFixed(2) + "Qa";
            if (moneu >= 1e18 && moneu < 1e21) return +(moneu / 1e18).toFixed(2) + "Qi";
            if (moneu >= 1e21 && moneu < 1e24) return +(moneu / 1e21).toFixed(2) + "Sx";
            if (moneu >= 1e24 && moneu < 1e27) return +(moneu / 1e24).toFixed(2) + "Sp";
            if (moneu >= 1e27 && moneu < 1e30) return +(moneu / 1e27).toFixed(2) + "Oc";
            if (moneu >= 1e30 && moneu < 1e33) return +(moneu / 1e30).toFixed(2) + "No";
            if (moneu >= 1e31) return displayMoney.replace("+", "");; 
}
var convert1 = farms => {
	    if (farms[1] < 1e3) return farms[1];
	    if (farms[1] >= 1e3 && farms[1] < 1e6) return +(farms[1] / 1e3).toFixed(2) + "K";
            if (farms[1] >= 1e6 && farms[1] < 1e9) return +(farms[1] / 1e6).toFixed(2) + "M";
	    if (farms[1] >= 1e9 && farms[1] < 1e12) return +(farms[1] / 1e9).toFixed(2) + "B";
	    if (farms[1] >= 1e12 && farms[1] < 1e15) return +(farms[1] / 1e12).toFixed(2) + "T";
            if (farms[1] >= 1e15 && farms[1] < 1e18) return +(farms[1] / 1e15).toFixed(2) + "Qa";
            if (farms[1] >= 1e18 && farms[1] < 1e21) return +(farms[1] / 1e18).toFixed(2) + "Qi";
            if (farms[1] >= 1e21 && farms[1] < 1e24) return +(farms[1] / 1e21).toFixed(2) + "Sx";
            if (farms[1] >= 1e24 && farms[1] < 1e27) return +(farms[1] / 1e24).toFixed(2) + "Sp";
            if (farms[1] >= 1e27 && farms[1] < 1e30) return +(farms[1] / 1e27).toFixed(2) + "Oc";
            if (farms[1] >= 1e30 && farms[1] < 1e33) return +(farms[1] / 1e30).toFixed(2) + "No";
            if (farms[1] >= 1e31) return displayFarms1.replace("+", "");; 
}
var convert2 = farms => {
	    if (farms[2] < 1e3) return farms[2];
	    if (farms[2] >= 1e3 && farms[2] < 1e6) return +(farms[2] / 1e3).toFixed(2) + "K";
            if (farms[2] >= 1e6 && farms[2] < 1e9) return +(farms[2] / 1e6).toFixed(2) + "M";
	    if (farms[2] >= 1e9 && farms[2] < 1e12) return +(farms[2] / 1e9).toFixed(2) + "B";
	    if (farms[2] >= 1e12 && farms[2] < 1e15) return +(farms[2] / 1e12).toFixed(2) + "T";
            if (farms[2] >= 1e15 && farms[2] < 1e18) return +(farms[2] / 1e15).toFixed(2) + "Qa";
            if (farms[2] >= 1e18 && farms[2] < 1e21) return +(farms[2] / 1e18).toFixed(2) + "Qi";
            if (farms[2] >= 1e21 && farms[2] < 1e24) return +(farms[2] / 1e21).toFixed(2) + "Sx";
            if (farms[2] >= 1e24 && farms[2] < 1e27) return +(farms[2] / 1e24).toFixed(2) + "Sp";
            if (farms[2] >= 1e27 && farms[2] < 1e30) return +(farms[2] / 1e27).toFixed(2) + "Oc";
            if (farms[2] >= 1e30 && farms[2] < 1e33) return +(farms[2] / 1e30).toFixed(2) + "No";
            if (farms[2] >= 1e31) return displayFarms2.replace("+", "");; 
}
var convert3 = farms => {
	    if (farms[3] < 1e3) return farms[3];
	    if (farms[3] >= 1e3 && farms[3] < 1e6) return +(farms[3] / 1e3).toFixed(2) + "K";
            if (farms[3] >= 1e6 && farms[3] < 1e9) return +(farms[3] / 1e6).toFixed(2) + "M";
	    if (farms[3] >= 1e9 && farms[3] < 1e12) return +(farms[3] / 1e9).toFixed(2) + "B";
	    if (farms[3] >= 1e12 && farms[3] < 1e15) return +(farms[3] / 1e12).toFixed(2) + "T";
            if (farms[3] >= 1e15 && farms[3] < 1e18) return +(farms[3] / 1e15).toFixed(2) + "Qa";
            if (farms[3] >= 1e18 && farms[3] < 1e21) return +(farms[3] / 1e18).toFixed(2) + "Qi";
            if (farms[3] >= 1e21 && farms[3] < 1e24) return +(farms[3] / 1e21).toFixed(2) + "Sx";
            if (farms[3] >= 1e24 && farms[3] < 1e27) return +(farms[3] / 1e24).toFixed(2) + "Sp";
            if (farms[3] >= 1e27 && farms[3] < 1e30) return +(farms[3] / 1e27).toFixed(2) + "Oc";
            if (farms[3] >= 1e30 && farms[3] < 1e33) return +(farms[3] / 1e30).toFixed(2) + "No";
            if (farms[3] >= 1e31) return displayFarms3.replace("+", "");; 
}
var convert4 = farms => {
	    if (farms[4] < 1e3) return farms[4];
	    if (farms[4] >= 1e3 && farms[4] < 1e6) return +(farms[4] / 1e3).toFixed(2) + "K";
            if (farms[4] >= 1e6 && farms[4] < 1e9) return +(farms[4] / 1e6).toFixed(2) + "M";
	    if (farms[4] >= 1e9 && farms[4] < 1e12) return +(farms[4] / 1e9).toFixed(2) + "B";
	    if (farms[4] >= 1e12 && farms[4] < 1e15) return +(farms[4] / 1e12).toFixed(2) + "T";
            if (farms[4] >= 1e15 && farms[4] < 1e18) return +(farms[4] / 1e15).toFixed(2) + "Qa";
            if (farms[4] >= 1e18 && farms[4] < 1e21) return +(farms[4] / 1e18).toFixed(2) + "Qi";
            if (farms[4] >= 1e21 && farms[4] < 1e24) return +(farms[4] / 1e21).toFixed(2) + "Sx";
            if (farms[4] >= 1e24 && farms[4] < 1e27) return +(farms[4] / 1e24).toFixed(2) + "Sp";
            if (farms[4] >= 1e27 && farms[4] < 1e30) return +(farms[4] / 1e27).toFixed(2) + "Oc";
            if (farms[4] >= 1e30 && farms[4] < 1e33) return +(farms[4] / 1e30).toFixed(2) + "No";
            if (farms[4] >= 1e31) return displayFarms4.replace("+", "");; 
}
var convert5 = farms => {
	    if (farms[5] < 1e3) return farms[5];
	    if (farms[5] >= 1e3 && farms[5] < 1e6) return +(farms[5] / 1e3).toFixed(2) + "K";
            if (farms[5] >= 1e6 && farms[5] < 1e9) return +(farms[5] / 1e6).toFixed(2) + "M";
	    if (farms[5] >= 1e9 && farms[5] < 1e12) return +(farms[5] / 1e9).toFixed(2) + "B";
	    if (farms[5] >= 1e12 && farms[5] < 1e15) return +(farms[5] / 1e12).toFixed(2) + "T";
            if (farms[5] >= 1e15 && farms[5] < 1e18) return +(farms[5] / 1e15).toFixed(2) + "Qa";
            if (farms[5] >= 1e18 && farms[5] < 1e21) return +(farms[5] / 1e18).toFixed(2) + "Qi";
            if (farms[5] >= 1e21 && farms[5] < 1e24) return +(farms[5] / 1e21).toFixed(2) + "Sx";
            if (farms[5] >= 1e24 && farms[5] < 1e27) return +(farms[5] / 1e24).toFixed(2) + "Sp";
            if (farms[5] >= 1e27 && farms[5] < 1e30) return +(farms[5] / 1e27).toFixed(2) + "Oc";
            if (farms[5] >= 1e30 && farms[5] < 1e33) return +(farms[5] / 1e30).toFixed(2) + "No";
            if (farms[5] >= 1e31) return displayFarms5.replace("+", "");; 
}
var convert6 = farms => {
	    if (farms[6] < 1e3) return farms[6];
	    if (farms[6] >= 1e3 && farms[6] < 1e6) return +(farms[6] / 1e3).toFixed(2) + "K";
            if (farms[6] >= 1e6 && farms[6] < 1e9) return +(farms[6] / 1e6).toFixed(2) + "M";
	    if (farms[6] >= 1e9 && farms[6] < 1e12) return +(farms[6] / 1e9).toFixed(2) + "B";
	    if (farms[6] >= 1e12 && farms[6] < 1e15) return +(farms[6] / 1e12).toFixed(2) + "T";
            if (farms[6] >= 1e15 && farms[6] < 1e18) return +(farms[6] / 1e15).toFixed(2) + "Qa";
            if (farms[6] >= 1e18 && farms[6] < 1e21) return +(farms[6] / 1e18).toFixed(2) + "Qi";
            if (farms[6] >= 1e21 && farms[6] < 1e24) return +(farms[6] / 1e21).toFixed(2) + "Sx";
            if (farms[6] >= 1e24 && farms[6] < 1e27) return +(farms[6] / 1e24).toFixed(2) + "Sp";
            if (farms[6] >= 1e27 && farms[6] < 1e30) return +(farms[6] / 1e27).toFixed(2) + "Oc";
            if (farms[6] >= 1e30 && farms[6] < 1e33) return +(farms[6] / 1e30).toFixed(2) + "No";
            if (farms[6] >= 1e31) return displayFarms6.replace("+", "");; 
}
var convert7 = farms => {
	    if (farms[7] < 1e3) return farms[7];
	    if (farms[7] >= 1e3 && farms[7] < 1e6) return +(farms[7] / 1e3).toFixed(2) + "K";
            if (farms[7] >= 1e6 && farms[7] < 1e9) return +(farms[7] / 1e6).toFixed(2) + "M";
	    if (farms[7] >= 1e9 && farms[7] < 1e12) return +(farms[7] / 1e9).toFixed(2) + "B";
	    if (farms[7] >= 1e12 && farms[7] < 1e15) return +(farms[7] / 1e12).toFixed(2) + "T";
            if (farms[7] >= 1e15 && farms[7] < 1e18) return +(farms[7] / 1e15).toFixed(2) + "Qa";
            if (farms[7] >= 1e18 && farms[7] < 1e21) return +(farms[7] / 1e18).toFixed(2) + "Qi";
            if (farms[7] >= 1e21 && farms[7] < 1e24) return +(farms[7] / 1e21).toFixed(2) + "Sx";
            if (farms[7] >= 1e24 && farms[7] < 1e27) return +(farms[7] / 1e24).toFixed(2) + "Sp";
            if (farms[7] >= 1e27 && farms[7] < 1e30) return +(farms[7] / 1e27).toFixed(2) + "Oc";
            if (farms[7] >= 1e30 && farms[7] < 1e33) return +(farms[7] / 1e30).toFixed(2) + "No";
            if (farms[7] >= 1e31) return displayFarms7.replace("+", "");; 
}
var convert8 = farms => {
	    if (farms[8] < 1e3) return farms[8];
	    if (farms[8] >= 1e3 && farms[8] < 1e6) return +(farms[8] / 1e3).toFixed(2) + "K";
            if (farms[8] >= 1e6 && farms[8] < 1e9) return +(farms[8] / 1e6).toFixed(2) + "M";
	    if (farms[8] >= 1e9 && farms[8] < 1e12) return +(farms[8] / 1e9).toFixed(2) + "B";
	    if (farms[8] >= 1e12 && farms[8] < 1e15) return +(farms[8] / 1e12).toFixed(2) + "T";
            if (farms[8] >= 1e15 && farms[8] < 1e18) return +(farms[8] / 1e15).toFixed(2) + "Qa";
            if (farms[8] >= 1e18 && farms[8] < 1e21) return +(farms[8] / 1e18).toFixed(2) + "Qi";
            if (farms[8] >= 1e21 && farms[8] < 1e24) return +(farms[8] / 1e21).toFixed(2) + "Sx";
            if (farms[8] >= 1e24 && farms[8] < 1e27) return +(farms[8] / 1e24).toFixed(2) + "Sp";
            if (farms[8] >= 1e27 && farms[8] < 1e30) return +(farms[8] / 1e27).toFixed(2) + "Oc";
            if (farms[8] >= 1e30 && farms[8] < 1e33) return +(farms[8] / 1e30).toFixed(2) + "No";
            if (farms[8] >= 1e31) return displayFarms8.replace("+", "");; 
}
var convert9 = farmsCost => {
	    if (farmsCost[1] < 1e3) return farmsCost[1];
	    if (farmsCost[1] >= 1e3 && farmsCost[1] < 1e6) return +(farmsCost[1] / 1e3).toFixed(2) + "K";
            if (farmsCost[1] >= 1e6 && farmsCost[1] < 1e9) return +(farmsCost[1] / 1e6).toFixed(2) + "M";
	    if (farmsCost[1] >= 1e9 && farmsCost[1] < 1e12) return +(farmsCost[1] / 1e9).toFixed(2) + "B";
	    if (farmsCost[1] >= 1e12 && farmsCost[1] < 1e15) return +(farmsCost[1] / 1e12).toFixed(2) + "T";
            if (farmsCost[1] >= 1e15 && farmsCost[1] < 1e18) return +(farmsCost[1] / 1e15).toFixed(2) + "Qa";
            if (farmsCost[1] >= 1e18 && farmsCost[1] < 1e21) return +(farmsCost[1] / 1e18).toFixed(2) + "Qi";
            if (farmsCost[1] >= 1e21 && farmsCost[1] < 1e24) return +(farmsCost[1] / 1e21).toFixed(2) + "Sx";
            if (farmsCost[1] >= 1e24 && farmsCost[1] < 1e27) return +(farmsCost[1] / 1e24).toFixed(2) + "Sp";
            if (farmsCost[1] >= 1e27 && farmsCost[1] < 1e30) return +(farmsCost[1] / 1e27).toFixed(2) + "Oc";
            if (farmsCost[1] >= 1e30 && farmsCost[1] < 1e33) return +(farmsCost[1] / 1e30).toFixed(2) + "No";
            if (farmsCost[1] >= 1e31) return displayFarmsCost1.replace("+", "");; 
}
var convert10 = farmsCost => {
	    if (farmsCost[2] < 1e3) return farmsCost[2];
	    if (farmsCost[2] >= 1e3 && farmsCost[2] < 1e6) return +(farmsCost[2] / 1e3).toFixed(2) + "K";
            if (farmsCost[2] >= 1e6 && farmsCost[2] < 1e9) return +(farmsCost[2] / 1e6).toFixed(2) + "M";
	    if (farmsCost[2] >= 1e9 && farmsCost[2] < 1e12) return +(farmsCost[2] / 1e9).toFixed(2) + "B";
	    if (farmsCost[2] >= 1e12 && farmsCost[2] < 1e15) return +(farmsCost[2] / 1e12).toFixed(2) + "T";
            if (farmsCost[2] >= 1e15 && farmsCost[2] < 1e18) return +(farmsCost[2] / 1e15).toFixed(2) + "Qa";
            if (farmsCost[2] >= 1e18 && farmsCost[2] < 1e21) return +(farmsCost[2] / 1e18).toFixed(2) + "Qi";
            if (farmsCost[2] >= 1e21 && farmsCost[2] < 1e24) return +(farmsCost[2] / 1e21).toFixed(2) + "Sx";
            if (farmsCost[2] >= 1e24 && farmsCost[2] < 1e27) return +(farmsCost[2] / 1e24).toFixed(2) + "Sp";
            if (farmsCost[2] >= 1e27 && farmsCost[2] < 1e30) return +(farmsCost[2] / 1e27).toFixed(2) + "Oc";
            if (farmsCost[2] >= 1e30 && farmsCost[2] < 1e33) return +(farmsCost[2] / 1e30).toFixed(2) + "No";
            if (farmsCost[2] >= 1e31) return displayFarmsCost2.replace("+", "");; 
}
var convert11 = farmsCost => {
	    if (farmsCost[3] < 1e3) return farmsCost[3];
	    if (farmsCost[3] >= 1e3 && farmsCost[3] < 1e6) return +(farmsCost[3] / 1e3).toFixed(2) + "K";
            if (farmsCost[3] >= 1e6 && farmsCost[3] < 1e9) return +(farmsCost[3] / 1e6).toFixed(2) + "M";
	    if (farmsCost[3] >= 1e9 && farmsCost[3] < 1e12) return +(farmsCost[3] / 1e9).toFixed(2) + "B";
	    if (farmsCost[3] >= 1e12 && farmsCost[3] < 1e15) return +(farmsCost[3] / 1e12).toFixed(2) + "T";
            if (farmsCost[3] >= 1e15 && farmsCost[3] < 1e18) return +(farmsCost[3] / 1e15).toFixed(2) + "Qa";
            if (farmsCost[3] >= 1e18 && farmsCost[3] < 1e21) return +(farmsCost[3] / 1e18).toFixed(2) + "Qi";
            if (farmsCost[3] >= 1e21 && farmsCost[3] < 1e24) return +(farmsCost[3] / 1e21).toFixed(2) + "Sx";
            if (farmsCost[3] >= 1e24 && farmsCost[3] < 1e27) return +(farmsCost[3] / 1e24).toFixed(2) + "Sp";
            if (farmsCost[3] >= 1e27 && farmsCost[3] < 1e30) return +(farmsCost[3] / 1e27).toFixed(2) + "Oc";
            if (farmsCost[3] >= 1e30 && farmsCost[3] < 1e33) return +(farmsCost[3] / 1e30).toFixed(2) + "No";
            if (farmsCost[3] >= 1e31) return displayFarmsCost3.replace("+", "");; 
}
var convert12 = farmsCost => {
	    if (farmsCost[4] < 1e3) return farmsCost[4];
	    if (farmsCost[4] >= 1e3 && farmsCost[4] < 1e6) return +(farmsCost[4] / 1e3).toFixed(2) + "K";
            if (farmsCost[4] >= 1e6 && farmsCost[4] < 1e9) return +(farmsCost[4] / 1e6).toFixed(2) + "M";
	    if (farmsCost[4] >= 1e9 && farmsCost[4] < 1e12) return +(farmsCost[4] / 1e9).toFixed(2) + "B";
	    if (farmsCost[4] >= 1e12 && farmsCost[4] < 1e15) return +(farmsCost[4] / 1e12).toFixed(2) + "T";
            if (farmsCost[4] >= 1e15 && farmsCost[4] < 1e18) return +(farmsCost[4] / 1e15).toFixed(2) + "Qa";
            if (farmsCost[4] >= 1e18 && farmsCost[4] < 1e21) return +(farmsCost[4] / 1e18).toFixed(2) + "Qi";
            if (farmsCost[4] >= 1e21 && farmsCost[4] < 1e24) return +(farmsCost[4] / 1e21).toFixed(2) + "Sx";
            if (farmsCost[4] >= 1e24 && farmsCost[4] < 1e27) return +(farmsCost[4] / 1e24).toFixed(2) + "Sp";
            if (farmsCost[4] >= 1e27 && farmsCost[4] < 1e30) return +(farmsCost[4] / 1e27).toFixed(2) + "Oc";
            if (farmsCost[4] >= 1e30 && farmsCost[4] < 1e33) return +(farmsCost[4] / 1e30).toFixed(2) + "No";
            if (farmsCost[4] >= 1e31) return displayFarmsCost4.replace("+", "");; 
}
var convert13 = farmsCost => {
	    if (farmsCost[5] < 1e3) return farmsCost[5];
	    if (farmsCost[5] >= 1e3 && farmsCost[5] < 1e6) return +(farmsCost[5] / 1e3).toFixed(2) + "K";
            if (farmsCost[5] >= 1e6 && farmsCost[5] < 1e9) return +(farmsCost[5] / 1e6).toFixed(2) + "M";
	    if (farmsCost[5] >= 1e9 && farmsCost[5] < 1e12) return +(farmsCost[5] / 1e9).toFixed(2) + "B";
	    if (farmsCost[5] >= 1e12 && farmsCost[5] < 1e15) return +(farmsCost[5] / 1e12).toFixed(2) + "T";
            if (farmsCost[5] >= 1e15 && farmsCost[5] < 1e18) return +(farmsCost[5] / 1e15).toFixed(2) + "Qa";
            if (farmsCost[5] >= 1e18 && farmsCost[5] < 1e21) return +(farmsCost[5] / 1e18).toFixed(2) + "Qi";
            if (farmsCost[5] >= 1e21 && farmsCost[5] < 1e24) return +(farmsCost[5] / 1e21).toFixed(2) + "Sx";
            if (farmsCost[5] >= 1e24 && farmsCost[5] < 1e27) return +(farmsCost[5] / 1e24).toFixed(2) + "Sp";
            if (farmsCost[5] >= 1e27 && farmsCost[5] < 1e30) return +(farmsCost[5] / 1e27).toFixed(2) + "Oc";
            if (farmsCost[5] >= 1e30 && farmsCost[5] < 1e33) return +(farmsCost[5] / 1e30).toFixed(2) + "No";
            if (farmsCost[5] >= 1e31) return displayFarmsCost5.replace("+", "");; 
}
var convert14 = farmsCost => {
	    if (farmsCost[6] < 1e3) return farmsCost[6];
	    if (farmsCost[6] >= 1e3 && farmsCost[6] < 1e6) return +(farmsCost[6] / 1e3).toFixed(2) + "K";
            if (farmsCost[6] >= 1e6 && farmsCost[6] < 1e9) return +(farmsCost[6] / 1e6).toFixed(2) + "M";
	    if (farmsCost[6] >= 1e9 && farmsCost[6] < 1e12) return +(farmsCost[6] / 1e9).toFixed(2) + "B";
	    if (farmsCost[6] >= 1e12 && farmsCost[6] < 1e15) return +(farmsCost[6] / 1e12).toFixed(2) + "T";
            if (farmsCost[6] >= 1e15 && farmsCost[6] < 1e18) return +(farmsCost[6] / 1e15).toFixed(2) + "Qa";
            if (farmsCost[6] >= 1e18 && farmsCost[6] < 1e21) return +(farmsCost[6] / 1e18).toFixed(2) + "Qi";
            if (farmsCost[6] >= 1e21 && farmsCost[6] < 1e24) return +(farmsCost[6] / 1e21).toFixed(2) + "Sx";
            if (farmsCost[6] >= 1e24 && farmsCost[6] < 1e27) return +(farmsCost[6] / 1e24).toFixed(2) + "Sp";
            if (farmsCost[6] >= 1e27 && farmsCost[6] < 1e30) return +(farmsCost[6] / 1e27).toFixed(2) + "Oc";
            if (farmsCost[6] >= 1e30 && farmsCost[6] < 1e33) return +(farmsCost[6] / 1e30).toFixed(2) + "No";
            if (farmsCost[6] >= 1e31) return displayFarmsCost6.replace("+", "");; 
}
var convert15 = farmsCost => {
	    if (farmsCost[7] < 1e3) return farmsCost[7];
	    if (farmsCost[7] >= 1e3 && farmsCost[7] < 1e6) return +(farmsCost[7] / 1e3).toFixed(2) + "K";
            if (farmsCost[7] >= 1e6 && farmsCost[7] < 1e9) return +(farmsCost[7] / 1e6).toFixed(2) + "M";
	    if (farmsCost[7] >= 1e9 && farmsCost[7] < 1e12) return +(farmsCost[7] / 1e9).toFixed(2) + "B";
	    if (farmsCost[7] >= 1e12 && farmsCost[7] < 1e15) return +(farmsCost[7] / 1e12).toFixed(2) + "T";
            if (farmsCost[7] >= 1e15 && farmsCost[7] < 1e18) return +(farmsCost[7] / 1e15).toFixed(2) + "Qa";
            if (farmsCost[7] >= 1e18 && farmsCost[7] < 1e21) return +(farmsCost[7] / 1e18).toFixed(2) + "Qi";
            if (farmsCost[7] >= 1e21 && farmsCost[7] < 1e24) return +(farmsCost[7] / 1e21).toFixed(2) + "Sx";
            if (farmsCost[7] >= 1e24 && farmsCost[7] < 1e27) return +(farmsCost[7] / 1e24).toFixed(2) + "Sp";
            if (farmsCost[7] >= 1e27 && farmsCost[7] < 1e30) return +(farmsCost[7] / 1e27).toFixed(2) + "Oc";
            if (farmsCost[7] >= 1e30 && farmsCost[7] < 1e33) return +(farmsCost[7] / 1e30).toFixed(2) + "No";
            if (farmsCost[7] >= 1e31) return displayFarmsCost7.replace("+", "");; 
}
var convert16 = farmsCost => {
	    if (farmsCost[8] < 1e3) return farmsCost[8];
	    if (farmsCost[8] >= 1e3 && farmsCost[8] < 1e6) return +(farmsCost[8] / 1e3).toFixed(2) + "K";
            if (farmsCost[8] >= 1e6 && farmsCost[8] < 1e9) return +(farmsCost[8] / 1e6).toFixed(2) + "M";
	    if (farmsCost[8] >= 1e9 && farmsCost[8] < 1e12) return +(farmsCost[8] / 1e9).toFixed(2) + "B";
	    if (farmsCost[8] >= 1e12 && farmsCost[8] < 1e15) return +(farmsCost[8] / 1e12).toFixed(2) + "T";
            if (farmsCost[8] >= 1e15 && farmsCost[8] < 1e18) return +(farmsCost[8] / 1e15).toFixed(2) + "Qa";
            if (farmsCost[8] >= 1e18 && farmsCost[8] < 1e21) return +(farmsCost[8] / 1e18).toFixed(2) + "Qi";
            if (farmsCost[8] >= 1e21 && farmsCost[8] < 1e24) return +(farmsCost[8] / 1e21).toFixed(2) + "Sx";
            if (farmsCost[8] >= 1e24 && farmsCost[8] < 1e27) return +(farmsCost[8] / 1e24).toFixed(2) + "Sp";
            if (farmsCost[8] >= 1e27 && farmsCost[8] < 1e30) return +(farmsCost[8] / 1e27).toFixed(2) + "Oc";
            if (farmsCost[8] >= 1e30 && farmsCost[8] < 1e33) return +(farmsCost[8] / 1e30).toFixed(2) + "No";
            if (farmsCost[8] >= 1e31) return displayFarmsCost8.replace("+", "");; 
}
var convertDrugs = displayDrugs => {
	    if (displayDrugs < 1e3) return displayDrugs;
	    if (displayDrugs >= 1e3 && displayDrugs < 1e6) return +(displayDrugs / 1e3).toFixed(2) + "K";
            if (displayDrugs >= 1e6 && displayDrugs < 1e9) return +(displayDrugs / 1e6).toFixed(2) + "M";
	    if (displayDrugs >= 1e9 && displayDrugs < 1e12) return +(displayDrugs / 1e9).toFixed(2) + "B";
	    if (displayDrugs >= 1e12 && displayDrugs < 1e15) return +(displayDrugs / 1e12).toFixed(2) + "T";
            if (displayDrugs >= 1e15 && displayDrugs < 1e18) return +(displayDrugs / 1e15).toFixed(2) + "Qa";
            if (displayDrugs >= 1e18 && displayDrugs < 1e21) return +(displayDrugs / 1e18).toFixed(2) + "Qi";
            if (displayDrugs >= 1e21 && displayDrugs < 1e24) return +(displayDrugs / 1e21).toFixed(2) + "Sx";
            if (displayDrugs >= 1e24 && displayDrugs < 1e27) return +(displayDrugs / 1e24).toFixed(2) + "Sp";
            if (displayDrugs >= 1e27 && displayDrugs < 1e30) return +(displayDrugs / 1e27).toFixed(2) + "Oc";
            if (displayDrugs >= 1e30 && displayDrugs < 1e33) return +(displayDrugs / 1e30).toFixed(2) + "No";
            if (displayDrugs >= 1e31) return displayDrugs.replace("+", "");; 
}
function loadSave() {
 if (typeof game !== "undefined") {
 if (typeof game.t1 !== "undefined") {t1 = game.t1};
 if (typeof game.t2 !== "undefined") {t2 = game.t2};
 if (typeof game.t3 !== "undefined") {t3 = game.t3};
 if (typeof game.t4 !== "undefined") {t4 = game.t4};
 if (typeof game.t5 !== "undefined") {t5 = game.t5};
 if (typeof game.t6 !== "undefined") {t6 = game.t6};
 if (typeof game.t7 !== "undefined") {t7 = game.t7};
 if (typeof game.t8 !== "undefined") {t8 = game.t8};
 if (typeof game.boost !== "undefined") {boost = game.boost};
 if (typeof game.boostMult !== "undefined") {boostMult = game.boostMult};
 if (typeof game.boostReq !== "undefined") {boostReq = game.boostReq};
 if (typeof game.farmsCost !== "undefined") {farmsCost = game.farmsCost};
 if (typeof game.farms !== "undefined") {farms = game.farms};
 if (typeof game.drugs !== "undefined") {drugs = game.drugs};
 if (typeof game.drugsWorth !== "undefined") {drugsWorth = game.drugsWorth};
 if (typeof game.unlockedDrugs !== "undefined") {unlockedDrugs = game.unlockedDrugs};
 if (typeof game.hiddenDrug !== "undefined") {hiddenDrug = game.hiddenDrug};
 if (typeof game.dollars !== "undefined") {moneu = game.dollars};
 };
 loadGame();
};

function openFarmsMenu() {
   openTab = 1
}
function openUpgrdsMenu() {
   openTab = 2
}
function openAchMenu() {
   openTab = 3
}
function openAutomationMenu() {
   openTab = 4
}
function buyFarm1() {
 if (moneu >= farmsCost[1]) {
  farms[1] = farms[1] + 1;
  moneu = moneu - Math.round(farmsCost[1])
  farmsCost[1] = farmsCost[1] *1.05
  if (farms[1] > 1 && t1 !== 0) {
   t1 = t1 - 50;
  }
 clearInterval(farm1interval);
 farm1interval = undefined;
 }
}
function buyFarm2() {
 if (moneu >= farmsCost[2]) {
  farms[2] = farms[2] + 1;
  moneu = moneu - Math.round(farmsCost[2])
  farmsCost[2] = farmsCost[2] *1.06
  clearInterval(farm2interval);
  farm2interval = undefined;
  farmMults[1] += 1
  if (farms[2] > 1 && t2 !== 0) {
  t2 = t2 - 50
  }
 }
}
function buyFarm3() {
 if (moneu >= farmsCost[3]) {
  farms[3] = farms[3] + 1;
  moneu = moneu - Math.round(farmsCost[3])
  farmsCost[3] = farmsCost[3] *1.07
  clearInterval(farm3interval);
  farm3interval = undefined;
  farmMults[2] += 1
  if (farms[3] > 1 && t3 !== 0) {
  t3 = t3 - 50
  }
 }
}
function buyFarm4() {
 if (moneu >= farmsCost[4]) {
  farms[4] = farms[4] + 1;
  moneu = moneu - Math.round(farmsCost[4])
  farmsCost[4] = farmsCost[4] *1.08
  clearInterval(farm4interval);
  farm4interval = undefined;
  farmMults[3] += 1
  if (farms[4] > 1 && t4 !== 0) {
  t4 = t4 - 50
  }
 }
}
function buyFarm5() {
 if (moneu >= farmsCost[5]) {
  farms[5] = farms[5] + 1;
  moneu = moneu - Math.round(farmsCost[5])
  farmsCost[5] = farmsCost[5] *1.09
  clearInterval(farm5interval);
  farm5interval = undefined;
  farmMults[4] += 1
  if (farms[5] > 1 && t5 !== 0) {
  t5 = t5 - 50
  }
 }
}
function buyFarm6() {
 if (moneu >= farmsCost[6]) {
  farms[6] = farms[6] + 1;
  moneu = moneu - Math.round(farmsCost[6])
  farmsCost[6] = farmsCost[6] *1.10
  clearInterval(farm6interval);
  farm6interval = undefined;
  farmMults[5] += 1
  if (farms[6] > 1 && t6 !== 0) {
  t6 = t6 - 50
  }
 }
}
function buyFarm7() {
 if (moneu >= farmsCost[7]) {
  farms[7] = farms[7] + 1;
  moneu = moneu - Math.round(farmsCost[7])
  farmsCost[7] = farmsCost[7] *1.11
  clearInterval(farm7interval);
  farm7interval = undefined;
  farmMults[6] += 1
  if (farms[7] > 1 && t7 !== 0) {
  t7 = t7 - 50
  }
 }
}
function buyFarm8() {
 if (moneu >= farmsCost[8]) {
  farms[8] = farms[8] + 1;
  moneu = moneu - Math.round(farmsCost[8])
  farmsCost[8] = farmsCost[8] *1.12
  clearInterval(farm8interval);
  farm8interval = undefined;
  farmMults[7] += 1
  farmMults[8] += 1
  if (farms[8] > 1 && t8 !== 0) {
  t8 = t8 - 50; 
  }
 }
}
function unlockNewDrug() {
 if (unlockedDrugs.marujuana == 0 && drugs.aderall >= 100000) {
  unlockedDrugs.marujuana = 1;
 } else if (unlockedDrugs.crack == 0 && drugs.marujuana >= 10000000) {
  unlockedDrugs.crack = 1;
} else if (unlockedDrugs.meth == 0 && drugs.crack >= 1000000000) {
  unlockedDrugs.meth = 1;
} else if (unlockedDrugs.aderall == 1 && unlockedDrugs.marujuana == 1 && unlockedDrugs.crack == 1 && unlockedDrugs.meth == 1){
  bttn.style.display = 'none'
} else if (unlockedDrugs.marujuana == 0 || unlockedDrugs.crack == 0 || unlockedDrugs.meth == 0) {bttn.style.display = 'block'; return;}
}
function sellDrugs() {
   moneu = moneu + drugsWorth.meth * drugs.meth + drugsWorth.crack * drugs.crack + drugsWorth.marujuana * drugs.marujuana + drugsWorth.aderall * drugs.aderall
 drugs.aderall = 0
 drugs.meth = 0
 drugs.marujuana = 0
 drugs.crack = 0
}
function gameLoop() {
 document.getElementById('moneu').innerHTML = convert(Math.round(moneu));
 document.getElementById('1stfarms').innerHTML = convert1(farms);
 document.getElementById('2ndfarms').innerHTML = convert2(farms);
 document.getElementById('3dfarms').innerHTML = convert3(farms);
 document.getElementById('4thfarms').innerHTML = convert4(farms);
 document.getElementById('5thfarms').innerHTML = convert5(farms);
 document.getElementById('6thfarms').innerHTML = convert6(farms);
 document.getElementById('7thfarms').innerHTML = convert7(farms);
 document.getElementById('8thfarms').innerHTML = convert8(farms);
 document.getElementById('farm1price').innerHTML = convert9(farmsCost);
 document.getElementById('farm2price').innerHTML = convert10(farmsCost);
 document.getElementById('farm3price').innerHTML = convert11(farmsCost);
 document.getElementById('farm4price').innerHTML = convert12(farmsCost);
 document.getElementById('farm5price').innerHTML = convert13(farmsCost);
 document.getElementById('farm6price').innerHTML = convert14(farmsCost);
 document.getElementById('farm7price').innerHTML = convert15(farmsCost);
 document.getElementById('farm8price').innerHTML = convert16(farmsCost);
	displayMoney = moneu.toExponential(2)
	displayFarms1 = farms[1].toExponential(2);
	displayFarms2 = farms[2].toExponential(2);
	displayFarms3 = farms[3].toExponential(2);
	displayFarms4 = farms[4].toExponential(2);
	displayFarms5 = farms[5].toExponential(2);
	displayFarms6 = farms[6].toExponential(2);
	displayFarms7 = farms[7].toExponential(2);
	displayFarms8 = farms[8].toExponential(2);
	displayFarmsCost1 = farmsCost[1].toExponential(2);
	displayFarmsCost2 = farmsCost[2].toExponential(2);
	displayFarmsCost3 = farmsCost[3].toExponential(2);
	displayFarmsCost4 = farmsCost[4].toExponential(2);
	displayFarmsCost5 = farmsCost[5].toExponential(2);
	displayFarmsCost6 = farmsCost[6].toExponential(2);
	displayFarmsCost7 = farmsCost[7].toExponential(2);
	displayFarmsCost8 = farmsCost[8].toExponential(2);
  if (openTab !== 1) {
  menu1.style.display = "none"
 } else { 
  menu1.style.display = "block"
 }
  if (openTab !== 2) {
  menu2.style.display = "none"
 } else { 
  menu2.style.display = "block"
 }
  if (openTab !== 3) {
  menu3.style.display = "none"
 } else { 
  menu3.style.display = "block"
 }
  if (openTab !== 4) {
  menu4.style.display = "none"
 } else { 
  menu4.style.display = "contents"
 }
displayDrugs = drugs.aderall + drugs.marujuana + drugs.crack + drugs.meth
 document.getElementById('buyer1Cost').innerHTML = autoBuyerPrices[1]
 document.getElementById('buyer2Cost').innerHTML = autoBuyerPrices[2]
 document.getElementById('buyer3Cost').innerHTML = autoBuyerPrices[3]
 document.getElementById('buyer4Cost').innerHTML = autoBuyerPrices[4]
 document.getElementById('buyer5Cost').innerHTML = autoBuyerPrices[5]
 document.getElementById('buyer6Cost').innerHTML = autoBuyerPrices[6]
 document.getElementById('buyer7Cost').innerHTML = autoBuyerPrices[7]
 document.getElementById('buyer8Cost').innerHTML = autoBuyerPrices[8]
 document.getElementById('buyer9Cost').innerHTML = autoBuyerPrices.boost
 if (autoBuyerInt1 !== undefined) {document.getElementById('buyerInt1').innerHTML = autoBuyerInt1} else {};
 if (autoBuyerInt2 !== undefined) {document.getElementById('buyerInt2').innerHTML = autoBuyerInt2} else {};
 if (autoBuyerInt3 !== undefined) {document.getElementById('buyerInt3').innerHTML = autoBuyerInt3} else {};
 if (autoBuyerInt4 !== undefined) {document.getElementById('buyerInt4').innerHTML = autoBuyerInt4} else {};
 if (autoBuyerInt5 !== undefined) {document.getElementById('buyerInt5').innerHTML = autoBuyerInt5} else {};
 if (autoBuyerInt6 !== undefined) {document.getElementById('buyerInt6').innerHTML = autoBuyerInt6} else {};
 if (autoBuyerInt7 !== undefined) {document.getElementById('buyerInt7').innerHTML = autoBuyerInt7} else {};
 if (autoBuyerInt8 !== undefined) {document.getElementById('buyerInt8').innerHTML = autoBuyerInt8} else {};
 if (autoBuyerInt9 !== undefined) {document.getElementById('buyerInt9').innerHTML = autoBuyerInt9} else {};
 document.getElementById('farm1mult').innerHTML = farmMults[1]
 document.getElementById('farm2mult').innerHTML = farmMults[2]
 document.getElementById('farm3mult').innerHTML = farmMults[3]
 document.getElementById('farm4mult').innerHTML = farmMults[4]
 document.getElementById('farm5mult').innerHTML = farmMults[5]
 document.getElementById('farm6mult').innerHTML = farmMults[6]
 document.getElementById('farm7mult').innerHTML = farmMults[7]
 document.getElementById('farm8mult').innerHTML = farmMults[8]
 if (farms[1] >= 1 && farm1interval == undefined) {
   farm1interval = setInterval(spawnDrugs, t1);
  
 }
 
 if (farms[2] >= 1 && farm2interval == undefined) {
  farm2interval = setInterval(farm2int, t2)
  
 }
 
 if (farms[3] >= 1 && farm3interval == undefined) {
  farm3interval = setInterval(farm3int, t3)
  
 }
 if (farms[4] >= 1 && farm4interval == undefined) {
  farm4interval = setInterval(farm4int, t4)
  
 }
 
 if (farms[5] >= 1 && farm5interval == undefined) {
  farm5interval = setInterval(farm5int, t5)
  
 }
 
 if (farms[6] >= 1 && farm6interval == undefined) {
  farm6interval = setInterval(farm6int, t6)
  
 }
 
 if (farms[7] >= 1 && farm7interval == undefined) {
  farm7interval = setInterval(farm7int, t7)
  
 }
 
 if (farms[8] >= 1 && farm8interval == undefined) {
  farm8interval = setInterval(farm8int, t8)
  
 }	
 document.getElementById('drugs').innerHTML = convertDrugs(displayDrugs);
}
function spawnDrugs() {
  drugs.aderall = drugs.aderall + 1 * farms[1] * boost * farmMults[1]
 if (unlockedDrugs.marujuana == 1) {
  drugs.marujuana = drugs.marujuana + 1 * farms[1] * boost * farmMults[1]
  
 }; if (unlockedDrugs.crack == 1) {
  drugs.crack = drugs.crack + 1 * farms[1] * boost * farmMults[1]
 }; if (unlockedDrugs.meth == 1) {
  drugs.meth = drugs.meth + 1 * farms[1] * boost * farmMults[1]
 }
}

function farm2int() {
  drugs.aderall = drugs.aderall + 2 * farms[2] * boost * farmMults[2]
 if (unlockedDrugs.marujuana == 1) {
  drugs.marujuana = drugs.marujuana + 2 * farms[2] * boost * farmMults[2]
  
 }; if (unlockedDrugs.crack == 1) {
  drugs.crack = drugs.crack + 2 * farms[2] * boost * farmMults[2]
 }; if (unlockedDrugs.meth == 1) {
  drugs.meth = drugs.meth + 2 * farms[2] * boost * farmMults[2]
 }
}
function farm3int() {
  drugs.aderall = drugs.aderall + 3 * farms[3] * boost * farmMults[3] 
 if (unlockedDrugs.marujuana == 1) {
  drugs.marujuana = drugs.marujuana + 3 * farms[3] * boost * farmMults[3]
  
 }; if (unlockedDrugs.crack == 1) {
  drugs.crack = drugs.crack + 3 * farms[3] * boost * farmMults[3]
 }; if (unlockedDrugs.meth == 1) {
  drugs.meth = drugs.meth + 3 * farms[3] * boost * farmMults[3]
 }
}
function farm4int() {
  drugs.aderall = drugs.aderall + 4 * farms[4] * boost * farmMults[4] 
 if (unlockedDrugs.marujuana == 1) {
  drugs.marujuana = drugs.marujuana + 4 * farms[4] * boost * farmMults[4]
  
 }; if (unlockedDrugs.crack == 1) {
  drugs.crack = drugs.crack + 4 * farms[4] * boost * farmMults[4]
 }; if (unlockedDrugs.meth == 1) {
  drugs.meth = drugs.meth + 4 * farms[4] * boost * farmMults[4]
 }
}
function farm5int() {
  drugs.aderall = drugs.aderall + 5 * farms[5] * boost * farmMults[5]
 if (unlockedDrugs.marujuana == 1) {
  drugs.marujuana = drugs.marujuana + 5 * farms[5] * boost * farmMults[5]
  
 }; if (unlockedDrugs.crack == 1) {
  drugs.crack = drugs.crack + 5 * farms[5] * boost * farmMults[5]
 }; if (unlockedDrugs.meth == 1) {
  drugs.meth = drugs.meth + 5 * farms[5] * boost * farmMults[5]
 }
}
function farm6int() {
  drugs.aderall = drugs.aderall + 6 * farms[6] * boost * farmMults[6]
 if (unlockedDrugs.marujuana == 1) {
  drugs.marujuana = drugs.marujuana + 6 * farms[6] * boost * farmMults[6]
  
 }; if (unlockedDrugs.crack == 1) {
  drugs.crack = drugs.crack + 6 * farms[6] * boost * farmMults[6]
 }; if (unlockedDrugs.meth == 1) {
  drugs.meth = drugs.meth + 6 * farms[6] * boost * farmMults[6]
 }
}
function farm7int() {
  drugs.aderall = drugs.aderall + 7 * farms[7] * boost * farmMults[7]
 if (unlockedDrugs.marujuana == 1) {
  drugs.marujuana = drugs.marujuana + 7 * farms[7] * boost * farmMults[7]
  
 }; if (unlockedDrugs.crack == 1) {
  drugs.crack = drugs.crack + 7 * farms[7] * boost * farmMults[7]
 }; if (unlockedDrugs.meth == 1) {
  drugs.meth = drugs.meth + 7 * farms[7] * boost * farmMults[7]
 }
}
function farm8int() {
  drugs.aderall = drugs.aderall + 8 * farms[8] * boost * farmMults[8]
 if (unlockedDrugs.marujuana == 1) {
  drugs.marujuana = drugs.marujuana + 8 * farms[8] * boost * farmMults[8]
  
 }; if (unlockedDrugs.crack == 1) {
  drugs.crack = drugs.crack + 8 * farms[8] * boost * farmMults[8]
 }; if (unlockedDrugs.meth == 1) {
  drugs.meth = drugs.meth + 8 * farms[8] * boost * farmMults[8]
 }
}
function boostFarms() {
 if (farms[8] >= boostReq.farmCount) {
  boost += 1;
  farms[8] = farms[8] - boostReq.farmCount;
  boostReq.farmCount = boostReq.farmCount * 2; 
 }
}
function updateDrug() {
 if (unlockedDrugs.marujuana == 0 && unlockedDrugs.aderall == 1) {
  document.getElementById('hiddenDrug').innerHTML = 'marujuana for 100K aderall'
 } else if (unlockedDrugs.crack == 0 && unlockedDrugs.marujuana == 1) {
  document.getElementById('hiddenDrug').innerHTML = 'crack for 10M marujuana'
 } else if (unlockedDrugs.meth == 0 && unlockedDrugs.crack == 1) {
  document.getElementById('hiddenDrug').innerHTML = 'meth for 1B crack'
 } 
}
function saveGame() {
   savedGame = {
 't1':t1,
 't2':t2,
 't3':t3,
 't4':t4,
 't5':t5,
 't6':t6,
 't7':t7,
 't8':t8,
 'dollars':moneu,
 'boost':boost,
 'boostReq':boostReq,
 'boostMult':boostMult,
 'farmsCost':farmsCost,
 'farms':farms,
 'drugs':drugs,
 'unlockedDrugs':unlockedDrugs,
 'drugsWorth':drugsWorth,
 'hiddenDrug':hiddenDrug
 }
   save = JSON.stringify(savedGame);
 localStorage.setItem('gameSave', save)
}

function buyAutoBuyer1() {
 if (moneu >= autoBuyerPrices[1] && autoBuyerInt1 >= 0.10) {
  autobuyers[1] = autobuyers[1] + 1
  autoBuyerInt1 = autoBuyerInt1 -= 1;
  autoBuyerPrices[1] = Math.round(autoBuyerPrices[1] *= 1.11)
  autobuyerMults[1] += 1
  moneu = moneu - autoBuyerPrices[1]
  document.getElementById('buyer1Cost').innerHTML = autoBuyerPrices[1]
  document.getElementById('buyerInt1').innerHTML = autoBuyerInt1
  buyers.b1 -= 1;
  clearInterval(buyerInt1)
  buyerInt1 = undefined
  if (autobuyers[1] >= 1 && buyerInt1 == undefined) {
   buyerInt1 = setInterval(autoBuyer1, buyers.b1)
  }
 }
}
function buyAutoBuyer2() {
 if (moneu >= autoBuyerPrices[2] && autoBuyerInt2 >= 0.10) {
  autobuyers[2] = autobuyers[2] + 1
  autoBuyerInt2 = autoBuyerInt2 -= 1;
  autoBuyerPrices[2] = Math.round(autoBuyerPrices[2] *= 2.22)
  autobuyerMults[2] += 1
  moneu = moneu - autoBuyerPrices[2]
  document.getElementById('buyer2Cost').innerHTML = autoBuyerPrices[2]
  document.getElementById('buyerInt2').innerHTML = autoBuyerInt2
  buyers.b2 -= 1;
  clearInterval(buyerInt2)
  buyerInt2 = undefined
  if (autobuyers[2] >= 1 && buyerInt2 == undefined) {
   buyerInt2 = setInterval(autoBuyer2, buyers.b2)
  }
 }
}
function buyAutoBuyer3() {
 if (moneu >= autoBuyerPrices[3] && autoBuyerInt3 >= 0.10) {
  autobuyers[3] = autobuyers[3] + 1
  autoBuyerInt3 = autoBuyerInt3 -= 1;
  autoBuyerPrices[3] = Math.round(autoBuyerPrices[3] *= 3.33)
  autobuyerMults[3] += 1
  moneu = moneu - autoBuyerPrices[3]
  document.getElementById('buyer3Cost').innerHTML = autoBuyerPrices[3]
  document.getElementById('buyerInt3').innerHTML = autoBuyerInt3
  buyers.b3 -= 1;
  clearInterval(buyerInt3)
  buyerInt3 = undefined
  if (autobuyers[3] >= 1 && buyerInt3 == undefined) {
   buyerInt3 = setInterval(autoBuyer3, buyers.b3)
  }
 }
}
function buyAutoBuyer4() {
 if (moneu >= autoBuyerPrices[4] && autoBuyerInt4 >= 0.10) {
  autobuyers[4] = autobuyers[4] + 1
  autoBuyerInt4 = autoBuyerInt4 -= 1;
  autoBuyerPrices[4] = Math.round(autoBuyerPrices[4] *= 4.44)
  autobuyerMults[4] += 1
  moneu = moneu - autoBuyerPrices[4]
  document.getElementById('buyer4Cost').innerHTML = autoBuyerPrices[4]
  document.getElementById('buyerInt4').innerHTML = autoBuyerInt4
  buyers.b4 -= 1;
  clearInterval(buyerInt4)
  buyerInt4 = undefined
  if (autobuyers[4] >= 1 && buyerInt4 == undefined) {
   buyerInt4 = setInterval(autoBuyer4, buyers.b4)
  }
 }
}
function buyAutoBuyer5() {
 if (moneu >= autoBuyerPrices[5] && autoBuyerInt5 >= 0.10) {
  autobuyers[5] = autobuyers[5] + 1
  autoBuyerInt5 = autoBuyerInt5 -= 1;
  autoBuyerPrices[5] = Math.round(autoBuyerPrices[5] *= 5.55)
  autobuyerMults[5] += 1
  moneu = moneu - autoBuyerPrices[5]
  document.getElementById('buyer5Cost').innerHTML = autoBuyerPrices[5]
  document.getElementById('buyerInt5').innerHTML = autoBuyerInt5
  buyers.b5 -= 1;
  clearInterval(buyerInt5)
  buyerInt5 = undefined
  if (autobuyers[5] >= 1 && buyerInt5 == undefined) {
   buyerInt5 = setInterval(autoBuyer5, buyers.b5)
  }
 }
}
function buyAutoBuyer6() {
 if (moneu >= autoBuyerPrices[6] && autoBuyerInt6 >= 0.10) {
  autobuyers[6] = autobuyers[6] + 1
  autoBuyerInt6 = autoBuyerInt6 -= 1;
  autoBuyerPrices[6] = Math.round(autoBuyerPrices[6] *= 6.66)
  autobuyerMults[6] += 1
  moneu = moneu - autoBuyerPrices[6]
  document.getElementById('buyer6Cost').innerHTML = autoBuyerPrices[6]
  document.getElementById('buyerInt6').innerHTML = autoBuyerInt6
  buyers.b6 -= 1;
  clearInterval(buyerInt6)
  buyerInt6 = undefined
  if (autobuyers[6] >= 1 && buyerInt6 == undefined) {
   buyerInt6 = setInterval(autoBuyer6, buyers.b6)
  }
 }
}
function buyAutoBuyer7() {
 if (moneu >= autoBuyerPrices[7] && autoBuyerInt7 >= 0.10) {
  autobuyers[7] = autobuyers[7] + 1
  autoBuyerInt7 = autoBuyerInt7 -= 1;
  autoBuyerPrices[7] = Math.round(autoBuyerPrices[7] *= 7.77)
  autobuyerMults[7] += 1
  moneu = moneu - autoBuyerPrices[7]
  document.getElementById('buyer7Cost').innerHTML = autoBuyerPrices[7]
  document.getElementById('buyerInt7').innerHTML = autoBuyerInt7
  buyers.b7 -= 1;
  clearInterval(buyerInt7)
  buyerInt7 = undefined
  if (autobuyers[7] >= 1 && buyerInt1 == undefined) {
   buyerInt7 = setInterval(autoBuyer7, buyers.b7)
  }
 }
}
function buyAutoBuyer8() {
 if (moneu >= autoBuyerPrices[8] && autoBuyerInt8 >= 0.10) {
  autobuyers[8] = autobuyers[8] + 1
  autoBuyerInt8 = autoBuyerInt8 -= 1;
  autoBuyerPrices[8] = Math.round(autoBuyerPrices[8] *= 8.88)
  autobuyerMults[8] += 1
  moneu = moneu - autoBuyerPrices[8]
  document.getElementById('buyer8Cost').innerHTML = autoBuyerPrices[8]
  document.getElementById('buyerInt8').innerHTML = autoBuyerInt8
  buyers.b8 -= 1;
  clearInterval(buyerInt8)
  buyerInt8 = undefined
  if (autobuyers[8] >= 1 && buyerInt8 == undefined) {
   buyerInt8 = setInterval(autoBuyer8, buyers.b8)
  }
 }
}
function buyAutoBuyerBoost() {
 if (moneu >= autoBuyerPrices.boost && autoBuyerInt9 >= 0.10) {
  autobuyers.boost = autobuyers.boost + 1
  autoBuyerInt9 = autoBuyerInt9 -= 1;
  autoBuyerPrices.boost = Math.round(autoBuyerPrices.boost *= 9.99)
  autobuyerMults.boost += 1
  moneu = moneu - autoBuyerPrices.boost
  document.getElementById('buyer9Cost').innerHTML = autoBuyerPrices.boost
  document.getElementById('buyerInt9').innerHTML = autoBuyerInt9
  buyers.b9 -= 1;
  clearInterval(buyerInt9)
  buyerInt9 = undefined
  if (autobuyers.boost >= 1 && buyerInt9 == undefined) {
   buyerInt9 = setInterval(autoBuyer9, buyers.b9)
  }
 }
}

window.beforeUnLoad = saveGame()
gameLoop();
function loadGame() {
 setInterval(gameLoop, 50);
 setInterval(saveGame, 10000);
 setInterval(updateDrug, 50);
}
var bttn = document.getElementById('unlockDrug')
bttn.style.width = 150
bttn.style.height = 40
function autoBuyer1() {
 if (moneu >= farmsCost[1]) {
 farms[1] += 1 * autobuyers[1] * boost
 moneu -= farmsCost[1]
 }
}
function autoBuyer2() {
 if (moneu >= farmsCost[2]) {
 farms[2] += 1 * autobuyers[2] * boost
 moneu -= farmsCost[2]
 }
}
function autoBuyer3() {
 if (moneu >= farmsCost[3]) {
 farms[3] += 1 * autobuyers[3] * boost
 moneu -= farmsCost[3]
 }
}
function autoBuyer4() {
 if (moneu >= farmsCost[4]) {
 farms[4] += 1 * autobuyers[4] * boost
 moneu -= farmsCost[4]
 }
}
function autoBuyer5() {
 if (moneu >= farmsCost[5]) {
 farms[5] += 1 * autobuyers[5] * boost
 moneu -= farmsCost[5]
 }
}
function autoBuyer6() {
 if (moneu >= farmsCost[6]) {
 farms[6] += 1 * autobuyers[6] * boost
 moneu -= farmsCost[6]
 }
}
function autoBuyer7() {
 if (moneu >= farmsCost[7]) {
 farms[7] += 1 * autobuyers[7] * boost
 moneu -= farmsCost[7]
 }
}
function autoBuyer8() {
 if (moneu >= farmsCost[8]) {
 farms[8] += 1 * autobuyers[8] * boost
 moneu -= farmsCost[8]
 }
}
function autoBuyer9() {
 if (farms[8] >= boostReq.farmCount) {
 boost += 1 * autobuyers.boost * boost
 farms[8] -= boostReq.farmCount
 }
}
