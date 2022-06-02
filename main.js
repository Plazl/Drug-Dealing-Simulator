var power = 1;
var powerCost = 100000000000;
var openTab = 1;
var moneu = 100;
var priceDiv = 1;
var priceDivCost = 100000000000000000;
var d = new Date();
var seconds1 = Math.round(d.getTime() / 1000);
var seconds2;
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
var resetting = false;
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
 '19thAch': 'INFINITY!',
 '20thAch': 'No name'
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
'18':0,
'19':0,
'20':0
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
var t1 = 1500;
var t2 = 1500;
var t3 = 1500;
var t4 = 1500;
var t5 = 1500;
var t6 = 1500;
var t7 = 1500;
var t8 = 1500;
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
var game = JSON.parse(localStorage.getItem("gameSave"));
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
var convert17 = farmMults => {
	    if (farmMults[1] < 1e3) return farmMults[1];
	    if (farmMults[1] >= 1e3 && farmMults[1] < 1e6) return +(farmMults[1] / 1e3).toFixed(2) + "K";
            if (farmMults[1] >= 1e6 && farmMults[1] < 1e9) return +(farmMults[1] / 1e6).toFixed(2) + "M";
	    if (farmMults[1] >= 1e9 && farmMults[1] < 1e12) return +(farmMults[1] / 1e9).toFixed(2) + "B";
	    if (farmMults[1] >= 1e12 && farmMults[1] < 1e15) return +(farmMults[1] / 1e12).toFixed(2) + "T";
            if (farmMults[1] >= 1e15 && farmMults[1] < 1e18) return +(farmMults[1] / 1e15).toFixed(2) + "Qa";
            if (farmMults[1] >= 1e18 && farmMults[1] < 1e21) return +(farmMults[1] / 1e18).toFixed(2) + "Qi";
            if (farmMults[1] >= 1e21 && farmMults[1] < 1e24) return +(farmMults[1] / 1e21).toFixed(2) + "Sx";
            if (farmMults[1] >= 1e24 && farmMults[1] < 1e27) return +(farmMults[1] / 1e24).toFixed(2) + "Sp";
            if (farmMults[1] >= 1e27 && farmMults[1] < 1e30) return +(farmMults[1] / 1e27).toFixed(2) + "Oc";
            if (farmMults[1] >= 1e30 && farmMults[1] < 1e33) return +(farmMults[1] / 1e30).toFixed(2) + "No";
            if (farmMults[1] >= 1e31) return farmMults[1];; 
}
var convert18 = farmMults => {
	    if (farmMults[2] < 1e3) return farmMults[2];
	    if (farmMults[2] >= 1e3 && farmMults[2] < 1e6) return +(farmMults[2] / 1e3).toFixed(2) + "K";
            if (farmMults[2] >= 1e6 && farmMults[2] < 1e9) return +(farmMults[2] / 1e6).toFixed(2) + "M";
	    if (farmMults[2] >= 1e9 && farmMults[2] < 1e12) return +(farmMults[2] / 1e9).toFixed(2) + "B";
	    if (farmMults[2] >= 1e12 && farmMults[2] < 1e15) return +(farmMults[2] / 1e12).toFixed(2) + "T";
            if (farmMults[2] >= 1e15 && farmMults[2] < 1e18) return +(farmMults[2] / 1e15).toFixed(2) + "Qa";
            if (farmMults[2] >= 1e18 && farmMults[2] < 1e21) return +(farmMults[2] / 1e18).toFixed(2) + "Qi";
            if (farmMults[2] >= 1e21 && farmMults[2] < 1e24) return +(farmMults[2] / 1e21).toFixed(2) + "Sx";
            if (farmMults[2] >= 1e24 && farmMults[2] < 1e27) return +(farmMults[2] / 1e24).toFixed(2) + "Sp";
            if (farmMults[2] >= 1e27 && farmMults[2] < 1e30) return +(farmMults[2] / 1e27).toFixed(2) + "Oc";
            if (farmMults[2] >= 1e30 && farmMults[2] < 1e33) return +(farmMults[2] / 1e30).toFixed(2) + "No";
            if (farmMults[2] >= 1e31) return farmMults[2];; 
}
var convert19 = farmMults => {
	    if (farmMults[3] < 1e3) return farmMults[3];
	    if (farmMults[3] >= 1e3 && farmMults[3] < 1e6) return +(farmMults[3] / 1e3).toFixed(2) + "K";
            if (farmMults[3] >= 1e6 && farmMults[3] < 1e9) return +(farmMults[3] / 1e6).toFixed(2) + "M";
	    if (farmMults[3] >= 1e9 && farmMults[3] < 1e12) return +(farmMults[3] / 1e9).toFixed(2) + "B";
	    if (farmMults[3] >= 1e12 && farmMults[3] < 1e15) return +(farmMults[3] / 1e12).toFixed(2) + "T";
            if (farmMults[3] >= 1e15 && farmMults[3] < 1e18) return +(farmMults[3] / 1e15).toFixed(2) + "Qa";
            if (farmMults[3] >= 1e18 && farmMults[3] < 1e21) return +(farmMults[3] / 1e18).toFixed(2) + "Qi";
            if (farmMults[3] >= 1e21 && farmMults[3] < 1e24) return +(farmMults[3] / 1e21).toFixed(2) + "Sx";
            if (farmMults[3] >= 1e24 && farmMults[3] < 1e27) return +(farmMults[3] / 1e24).toFixed(2) + "Sp";
            if (farmMults[3] >= 1e27 && farmMults[3] < 1e30) return +(farmMults[3] / 1e27).toFixed(2) + "Oc";
            if (farmMults[3] >= 1e30 && farmMults[3] < 1e33) return +(farmMults[3] / 1e30).toFixed(2) + "No";
            if (farmMults[3] >= 1e31) return farmMults[3];; 
}
var convert20 = farmMults => {
	    if (farmMults[4] < 1e3) return farmMults[4];
	    if (farmMults[4] >= 1e3 && farmMults[4] < 1e6) return +(farmMults[4] / 1e3).toFixed(2) + "K";
            if (farmMults[4] >= 1e6 && farmMults[4] < 1e9) return +(farmMults[4] / 1e6).toFixed(2) + "M";
	    if (farmMults[4] >= 1e9 && farmMults[4] < 1e12) return +(farmMults[4] / 1e9).toFixed(2) + "B";
	    if (farmMults[4] >= 1e12 && farmMults[4] < 1e15) return +(farmMults[4] / 1e12).toFixed(2) + "T";
            if (farmMults[4] >= 1e15 && farmMults[4] < 1e18) return +(farmMults[4] / 1e15).toFixed(2) + "Qa";
            if (farmMults[4] >= 1e18 && farmMults[4] < 1e21) return +(farmMults[4] / 1e18).toFixed(2) + "Qi";
            if (farmMults[4] >= 1e21 && farmMults[4] < 1e24) return +(farmMults[4] / 1e21).toFixed(2) + "Sx";
            if (farmMults[4] >= 1e24 && farmMults[4] < 1e27) return +(farmMults[4] / 1e24).toFixed(2) + "Sp";
            if (farmMults[4] >= 1e27 && farmMults[4] < 1e30) return +(farmMults[4] / 1e27).toFixed(2) + "Oc";
            if (farmMults[4] >= 1e30 && farmMults[4] < 1e33) return +(farmMults[4] / 1e30).toFixed(2) + "No";
            if (farmMults[4] >= 1e31) return farmMults[4];; 
}
var convert21 = farmMults => {
	    if (farmMults[5] < 1e3) return farmMults[5];
	    if (farmMults[5] >= 1e3 && farmMults[5] < 1e6) return +(farmMults[5] / 1e3).toFixed(2) + "K";
            if (farmMults[5] >= 1e6 && farmMults[5] < 1e9) return +(farmMults[5] / 1e6).toFixed(2) + "M";
	    if (farmMults[5] >= 1e9 && farmMults[5] < 1e12) return +(farmMults[5] / 1e9).toFixed(2) + "B";
	    if (farmMults[5] >= 1e12 && farmMults[5] < 1e15) return +(farmMults[5] / 1e12).toFixed(2) + "T";
            if (farmMults[5] >= 1e15 && farmMults[5] < 1e18) return +(farmMults[5] / 1e15).toFixed(2) + "Qa";
            if (farmMults[5] >= 1e18 && farmMults[5] < 1e21) return +(farmMults[5] / 1e18).toFixed(2) + "Qi";
            if (farmMults[5] >= 1e21 && farmMults[5] < 1e24) return +(farmMults[5] / 1e21).toFixed(2) + "Sx";
            if (farmMults[5] >= 1e24 && farmMults[5] < 1e27) return +(farmMults[5] / 1e24).toFixed(2) + "Sp";
            if (farmMults[5] >= 1e27 && farmMults[5] < 1e30) return +(farmMults[5] / 1e27).toFixed(2) + "Oc";
            if (farmMults[5] >= 1e30 && farmMults[5] < 1e33) return +(farmMults[5] / 1e30).toFixed(2) + "No";
            if (farmMults[5] >= 1e31) return farmMults[5];; 
}
var convert22 = farmMults => {
	    if (farmMults[6] < 1e3) return farmMults[6];
	    if (farmMults[6] >= 1e3 && farmMults[6] < 1e6) return +(farmMults[6] / 1e3).toFixed(2) + "K";
            if (farmMults[6] >= 1e6 && farmMults[6] < 1e9) return +(farmMults[6] / 1e6).toFixed(2) + "M";
	    if (farmMults[6] >= 1e9 && farmMults[6] < 1e12) return +(farmMults[6] / 1e9).toFixed(2) + "B";
	    if (farmMults[6] >= 1e12 && farmMults[6] < 1e15) return +(farmMults[6] / 1e12).toFixed(2) + "T";
            if (farmMults[6] >= 1e15 && farmMults[6] < 1e18) return +(farmMults[6] / 1e15).toFixed(2) + "Qa";
            if (farmMults[6] >= 1e18 && farmMults[6] < 1e21) return +(farmMults[6] / 1e18).toFixed(2) + "Qi";
            if (farmMults[6] >= 1e21 && farmMults[6] < 1e24) return +(farmMults[6] / 1e21).toFixed(2) + "Sx";
            if (farmMults[6] >= 1e24 && farmMults[6] < 1e27) return +(farmMults[6] / 1e24).toFixed(2) + "Sp";
            if (farmMults[6] >= 1e27 && farmMults[6] < 1e30) return +(farmMults[6] / 1e27).toFixed(2) + "Oc";
            if (farmMults[6] >= 1e30 && farmMults[6] < 1e33) return +(farmMults[6] / 1e30).toFixed(2) + "No";
            if (farmMults[6] >= 1e31) return farmMults[6];; 
}
var convert23 = farmMults => {
	    if (farmMults[7] < 1e3) return farmMults[7];
	    if (farmMults[7] >= 1e3 && farmMults[7] < 1e6) return +(farmMults[7] / 1e3).toFixed(2) + "K";
            if (farmMults[7] >= 1e6 && farmMults[7] < 1e9) return +(farmMults[7] / 1e6).toFixed(2) + "M";
	    if (farmMults[7] >= 1e9 && farmMults[7] < 1e12) return +(farmMults[7] / 1e9).toFixed(2) + "B";
	    if (farmMults[7] >= 1e12 && farmMults[7] < 1e15) return +(farmMults[7] / 1e12).toFixed(2) + "T";
            if (farmMults[7] >= 1e15 && farmMults[7] < 1e18) return +(farmMults[7] / 1e15).toFixed(2) + "Qa";
            if (farmMults[7] >= 1e18 && farmMults[7] < 1e21) return +(farmMults[7] / 1e18).toFixed(2) + "Qi";
            if (farmMults[7] >= 1e21 && farmMults[7] < 1e24) return +(farmMults[7] / 1e21).toFixed(2) + "Sx";
            if (farmMults[7] >= 1e24 && farmMults[7] < 1e27) return +(farmMults[7] / 1e24).toFixed(2) + "Sp";
            if (farmMults[7] >= 1e27 && farmMults[7] < 1e30) return +(farmMults[7] / 1e27).toFixed(2) + "Oc";
            if (farmMults[7] >= 1e30 && farmMults[7] < 1e33) return +(farmMults[7] / 1e30).toFixed(2) + "No";
            if (farmMults[7] >= 1e31) return farmMults[7];; 
}
var convert24 = farmMults => {
	    if (farmMults[8] < 1e3) return farmMults[8];
	    if (farmMults[8] >= 1e3 && farmMults[8] < 1e6) return +(farmMults[8] / 1e3).toFixed(2) + "K";
            if (farmMults[8] >= 1e6 && farmMults[8] < 1e9) return +(farmMults[8] / 1e6).toFixed(2) + "M";
	    if (farmMults[8] >= 1e9 && farmMults[8] < 1e12) return +(farmMults[8] / 1e9).toFixed(2) + "B";
	    if (farmMults[8] >= 1e12 && farmMults[8] < 1e15) return +(farmMults[8] / 1e12).toFixed(2) + "T";
            if (farmMults[8] >= 1e15 && farmMults[8] < 1e18) return +(farmMults[8] / 1e15).toFixed(2) + "Qa";
            if (farmMults[8] >= 1e18 && farmMults[8] < 1e21) return +(farmMults[8] / 1e18).toFixed(2) + "Qi";
            if (farmMults[8] >= 1e21 && farmMults[8] < 1e24) return +(farmMults[8] / 1e21).toFixed(2) + "Sx";
            if (farmMults[8] >= 1e24 && farmMults[8] < 1e27) return +(farmMults[8] / 1e24).toFixed(2) + "Sp";
            if (farmMults[8] >= 1e27 && farmMults[8] < 1e30) return +(farmMults[8] / 1e27).toFixed(2) + "Oc";
            if (farmMults[8] >= 1e30 && farmMults[8] < 1e33) return +(farmMults[8] / 1e30).toFixed(2) + "No";
            if (farmMults[8] >= 1e31) return farmMults[8];; 
}
var convert25 = autoBuyerPrices => {
	    if (autoBuyerPrices[1] < 1e3) return autoBuyerPrices[1];
	    if (autoBuyerPrices[1] >= 1e3 && autoBuyerPrices[1] < 1e6) return +(autoBuyerPrices[1] / 1e3).toFixed(2) + "K";
            if (autoBuyerPrices[1] >= 1e6 && autoBuyerPrices[1] < 1e9) return +(autoBuyerPrices[1] / 1e6).toFixed(2) + "M";
	    if (autoBuyerPrices[1] >= 1e9 && autoBuyerPrices[1] < 1e12) return +(autoBuyerPrices[1] / 1e9).toFixed(2) + "B";
	    if (autoBuyerPrices[1] >= 1e12 && autoBuyerPrices[1] < 1e15) return +(autoBuyerPrices[1] / 1e12).toFixed(2) + "T";
            if (autoBuyerPrices[1] >= 1e15 && autoBuyerPrices[1] < 1e18) return +(autoBuyerPrices[1] / 1e15).toFixed(2) + "Qa";
            if (autoBuyerPrices[1] >= 1e18 && autoBuyerPrices[1] < 1e21) return +(autoBuyerPrices[1] / 1e18).toFixed(2) + "Qi";
            if (autoBuyerPrices[1] >= 1e21 && autoBuyerPrices[1] < 1e24) return +(autoBuyerPrices[1] / 1e21).toFixed(2) + "Sx";
            if (autoBuyerPrices[1] >= 1e24 && autoBuyerPrices[1] < 1e27) return +(autoBuyerPrices[1] / 1e24).toFixed(2) + "Sp";
            if (autoBuyerPrices[1] >= 1e27 && autoBuyerPrices[1] < 1e30) return +(autoBuyerPrices[1] / 1e27).toFixed(2) + "Oc";
            if (autoBuyerPrices[1] >= 1e30 && autoBuyerPrices[1] < 1e33) return +(autoBuyerPrices[1] / 1e30).toFixed(2) + "No";
            if (autoBuyerPrices[1] >= 1e31) return autoBuyerPrices[1];; 
}
var convert26 = autoBuyerPrices => {
	    if (autoBuyerPrices[2] < 1e3) return autoBuyerPrices[2];
	    if (autoBuyerPrices[2] >= 1e3 && autoBuyerPrices[2] < 1e6) return +(autoBuyerPrices[2] / 1e3).toFixed(2) + "K";
            if (autoBuyerPrices[2] >= 1e6 && autoBuyerPrices[2] < 1e9) return +(autoBuyerPrices[2] / 1e6).toFixed(2) + "M";
	    if (autoBuyerPrices[2] >= 1e9 && autoBuyerPrices[2] < 1e12) return +(autoBuyerPrices[2] / 1e9).toFixed(2) + "B";
	    if (autoBuyerPrices[2] >= 1e12 && autoBuyerPrices[2] < 1e15) return +(autoBuyerPrices[2] / 1e12).toFixed(2) + "T";
            if (autoBuyerPrices[2] >= 1e15 && autoBuyerPrices[2] < 1e18) return +(autoBuyerPrices[2] / 1e15).toFixed(2) + "Qa";
            if (autoBuyerPrices[2] >= 1e18 && autoBuyerPrices[2] < 1e21) return +(autoBuyerPrices[2] / 1e18).toFixed(2) + "Qi";
            if (autoBuyerPrices[2] >= 1e21 && autoBuyerPrices[2] < 1e24) return +(autoBuyerPrices[2] / 1e21).toFixed(2) + "Sx";
            if (autoBuyerPrices[2] >= 1e24 && autoBuyerPrices[2] < 1e27) return +(autoBuyerPrices[2] / 1e24).toFixed(2) + "Sp";
            if (autoBuyerPrices[2] >= 1e27 && autoBuyerPrices[2] < 1e30) return +(autoBuyerPrices[2] / 1e27).toFixed(2) + "Oc";
            if (autoBuyerPrices[2] >= 1e30 && autoBuyerPrices[2] < 1e33) return +(autoBuyerPrices[2] / 1e30).toFixed(2) + "No";
            if (autoBuyerPrices[2] >= 1e31) return autoBuyerPrices[2];; 
}
var convert27 = autoBuyerPrices => {
	    if (autoBuyerPrices[3] < 1e3) return autoBuyerPrices[3];
	    if (autoBuyerPrices[3] >= 1e3 && autoBuyerPrices[3] < 1e6) return +(autoBuyerPrices[3] / 1e3).toFixed(2) + "K";
            if (autoBuyerPrices[3] >= 1e6 && autoBuyerPrices[3] < 1e9) return +(autoBuyerPrices[3] / 1e6).toFixed(2) + "M";
	    if (autoBuyerPrices[3] >= 1e9 && autoBuyerPrices[3] < 1e12) return +(autoBuyerPrices[3] / 1e9).toFixed(2) + "B";
	    if (autoBuyerPrices[3] >= 1e12 && autoBuyerPrices[3] < 1e15) return +(autoBuyerPrices[3] / 1e12).toFixed(2) + "T";
            if (autoBuyerPrices[3] >= 1e15 && autoBuyerPrices[3] < 1e18) return +(autoBuyerPrices[3] / 1e15).toFixed(2) + "Qa";
            if (autoBuyerPrices[3] >= 1e18 && autoBuyerPrices[3] < 1e21) return +(autoBuyerPrices[3] / 1e18).toFixed(2) + "Qi";
            if (autoBuyerPrices[3] >= 1e21 && autoBuyerPrices[3] < 1e24) return +(autoBuyerPrices[3] / 1e21).toFixed(2) + "Sx";
            if (autoBuyerPrices[3] >= 1e24 && autoBuyerPrices[3] < 1e27) return +(autoBuyerPrices[3] / 1e24).toFixed(2) + "Sp";
            if (autoBuyerPrices[3] >= 1e27 && autoBuyerPrices[3] < 1e30) return +(autoBuyerPrices[3] / 1e27).toFixed(2) + "Oc";
            if (autoBuyerPrices[3] >= 1e30 && autoBuyerPrices[3] < 1e33) return +(autoBuyerPrices[3] / 1e30).toFixed(2) + "No";
            if (autoBuyerPrices[3] >= 1e31) return autoBuyerPrices[3];; 
}
var convert28 = autoBuyerPrices => {
	    if (autoBuyerPrices[4] < 1e3) return autoBuyerPrices[4];
	    if (autoBuyerPrices[4] >= 1e3 && autoBuyerPrices[4] < 1e6) return +(autoBuyerPrices[4] / 1e3).toFixed(2) + "K";
            if (autoBuyerPrices[4] >= 1e6 && autoBuyerPrices[4] < 1e9) return +(autoBuyerPrices[4] / 1e6).toFixed(2) + "M";
	    if (autoBuyerPrices[4] >= 1e9 && autoBuyerPrices[4] < 1e12) return +(autoBuyerPrices[4] / 1e9).toFixed(2) + "B";
	    if (autoBuyerPrices[4] >= 1e12 && autoBuyerPrices[4] < 1e15) return +(autoBuyerPrices[4] / 1e12).toFixed(2) + "T";
            if (autoBuyerPrices[4] >= 1e15 && autoBuyerPrices[4] < 1e18) return +(autoBuyerPrices[4] / 1e15).toFixed(2) + "Qa";
            if (autoBuyerPrices[4] >= 1e18 && autoBuyerPrices[4] < 1e21) return +(autoBuyerPrices[4] / 1e18).toFixed(2) + "Qi";
            if (autoBuyerPrices[4] >= 1e21 && autoBuyerPrices[4] < 1e24) return +(autoBuyerPrices[4] / 1e21).toFixed(2) + "Sx";
            if (autoBuyerPrices[4] >= 1e24 && autoBuyerPrices[4] < 1e27) return +(autoBuyerPrices[4] / 1e24).toFixed(2) + "Sp";
            if (autoBuyerPrices[4] >= 1e27 && autoBuyerPrices[4] < 1e30) return +(autoBuyerPrices[4] / 1e27).toFixed(2) + "Oc";
            if (autoBuyerPrices[4] >= 1e30 && autoBuyerPrices[4] < 1e33) return +(autoBuyerPrices[4] / 1e30).toFixed(2) + "No";
            if (autoBuyerPrices[4] >= 1e31) return autoBuyerPrices[4];; 
}
var convert29 = autoBuyerPrices => {
	    if (autoBuyerPrices[5] < 1e3) return autoBuyerPrices[5];
	    if (autoBuyerPrices[5] >= 1e3 && autoBuyerPrices[5] < 1e6) return +(autoBuyerPrices[5] / 1e3).toFixed(2) + "K";
            if (autoBuyerPrices[5] >= 1e6 && autoBuyerPrices[5] < 1e9) return +(autoBuyerPrices[5] / 1e6).toFixed(2) + "M";
	    if (autoBuyerPrices[5] >= 1e9 && autoBuyerPrices[5] < 1e12) return +(autoBuyerPrices[5] / 1e9).toFixed(2) + "B";
	    if (autoBuyerPrices[5] >= 1e12 && autoBuyerPrices[5] < 1e15) return +(autoBuyerPrices[5] / 1e12).toFixed(2) + "T";
            if (autoBuyerPrices[5] >= 1e15 && autoBuyerPrices[5] < 1e18) return +(autoBuyerPrices[5] / 1e15).toFixed(2) + "Qa";
            if (autoBuyerPrices[5] >= 1e18 && autoBuyerPrices[5] < 1e21) return +(autoBuyerPrices[5] / 1e18).toFixed(2) + "Qi";
            if (autoBuyerPrices[5] >= 1e21 && autoBuyerPrices[5] < 1e24) return +(autoBuyerPrices[5] / 1e21).toFixed(2) + "Sx";
            if (autoBuyerPrices[5] >= 1e24 && autoBuyerPrices[5] < 1e27) return +(autoBuyerPrices[5] / 1e24).toFixed(2) + "Sp";
            if (autoBuyerPrices[5] >= 1e27 && autoBuyerPrices[5] < 1e30) return +(autoBuyerPrices[5] / 1e27).toFixed(2) + "Oc";
            if (autoBuyerPrices[5] >= 1e30 && autoBuyerPrices[5] < 1e33) return +(autoBuyerPrices[5] / 1e30).toFixed(2) + "No";
            if (autoBuyerPrices[5] >= 1e31) return autoBuyerPrices[5];; 
}
var convert30 = autoBuyerPrices => {
	    if (autoBuyerPrices[6] < 1e3) return autoBuyerPrices[6];
	    if (autoBuyerPrices[6] >= 1e3 && autoBuyerPrices[6] < 1e6) return +(autoBuyerPrices[6] / 1e3).toFixed(2) + "K";
            if (autoBuyerPrices[6] >= 1e6 && autoBuyerPrices[6] < 1e9) return +(autoBuyerPrices[6] / 1e6).toFixed(2) + "M";
	    if (autoBuyerPrices[6] >= 1e9 && autoBuyerPrices[6] < 1e12) return +(autoBuyerPrices[6] / 1e9).toFixed(2) + "B";
	    if (autoBuyerPrices[6] >= 1e12 && autoBuyerPrices[6] < 1e15) return +(autoBuyerPrices[6] / 1e12).toFixed(2) + "T";
            if (autoBuyerPrices[6] >= 1e15 && autoBuyerPrices[6] < 1e18) return +(autoBuyerPrices[6] / 1e15).toFixed(2) + "Qa";
            if (autoBuyerPrices[6] >= 1e18 && autoBuyerPrices[6] < 1e21) return +(autoBuyerPrices[6] / 1e18).toFixed(2) + "Qi";
            if (autoBuyerPrices[6] >= 1e21 && autoBuyerPrices[6] < 1e24) return +(autoBuyerPrices[6] / 1e21).toFixed(2) + "Sx";
            if (autoBuyerPrices[6] >= 1e24 && autoBuyerPrices[6] < 1e27) return +(autoBuyerPrices[6] / 1e24).toFixed(2) + "Sp";
            if (autoBuyerPrices[6] >= 1e27 && autoBuyerPrices[6] < 1e30) return +(autoBuyerPrices[6] / 1e27).toFixed(2) + "Oc";
            if (autoBuyerPrices[6] >= 1e30 && autoBuyerPrices[6] < 1e33) return +(autoBuyerPrices[6] / 1e30).toFixed(2) + "No";
            if (autoBuyerPrices[6] >= 1e31) return autoBuyerPrices[6];; 
}
var convert31 = autoBuyerPrices => {
	    if (autoBuyerPrices[7] < 1e3) return autoBuyerPrices[7];
	    if (autoBuyerPrices[7] >= 1e3 && autoBuyerPrices[7] < 1e6) return +(autoBuyerPrices[7] / 1e3).toFixed(2) + "K";
            if (autoBuyerPrices[7] >= 1e6 && autoBuyerPrices[7] < 1e9) return +(autoBuyerPrices[7] / 1e6).toFixed(2) + "M";
	    if (autoBuyerPrices[7] >= 1e9 && autoBuyerPrices[7] < 1e12) return +(autoBuyerPrices[7] / 1e9).toFixed(2) + "B";
	    if (autoBuyerPrices[7] >= 1e12 && autoBuyerPrices[7] < 1e15) return +(autoBuyerPrices[7] / 1e12).toFixed(2) + "T";
            if (autoBuyerPrices[7] >= 1e15 && autoBuyerPrices[7] < 1e18) return +(autoBuyerPrices[7] / 1e15).toFixed(2) + "Qa";
            if (autoBuyerPrices[7] >= 1e18 && autoBuyerPrices[7] < 1e21) return +(autoBuyerPrices[7] / 1e18).toFixed(2) + "Qi";
            if (autoBuyerPrices[7] >= 1e21 && autoBuyerPrices[7] < 1e24) return +(autoBuyerPrices[7] / 1e21).toFixed(2) + "Sx";
            if (autoBuyerPrices[7] >= 1e24 && autoBuyerPrices[7] < 1e27) return +(autoBuyerPrices[7] / 1e24).toFixed(2) + "Sp";
            if (autoBuyerPrices[7] >= 1e27 && autoBuyerPrices[7] < 1e30) return +(autoBuyerPrices[7] / 1e27).toFixed(2) + "Oc";
            if (autoBuyerPrices[7] >= 1e30 && autoBuyerPrices[7] < 1e33) return +(autoBuyerPrices[7] / 1e30).toFixed(2) + "No";
            if (autoBuyerPrices[7] >= 1e31) return autoBuyerPrices[7];; 
}
var convert32 = autoBuyerPrices => {
	    if (autoBuyerPrices[8] < 1e3) return autoBuyerPrices[8];
	    if (autoBuyerPrices[8] >= 1e3 && autoBuyerPrices[8] < 1e6) return +(autoBuyerPrices[8] / 1e3).toFixed(2) + "K";
            if (autoBuyerPrices[8] >= 1e6 && autoBuyerPrices[8] < 1e9) return +(autoBuyerPrices[8] / 1e6).toFixed(2) + "M";
	    if (autoBuyerPrices[8] >= 1e9 && autoBuyerPrices[8] < 1e12) return +(autoBuyerPrices[8] / 1e9).toFixed(2) + "B";
	    if (autoBuyerPrices[8] >= 1e12 && autoBuyerPrices[8] < 1e15) return +(autoBuyerPrices[8] / 1e12).toFixed(2) + "T";
            if (autoBuyerPrices[8] >= 1e15 && autoBuyerPrices[8] < 1e18) return +(autoBuyerPrices[8] / 1e15).toFixed(2) + "Qa";
            if (autoBuyerPrices[8] >= 1e18 && autoBuyerPrices[8] < 1e21) return +(autoBuyerPrices[8] / 1e18).toFixed(2) + "Qi";
            if (autoBuyerPrices[8] >= 1e21 && autoBuyerPrices[8] < 1e24) return +(autoBuyerPrices[8] / 1e21).toFixed(2) + "Sx";
            if (autoBuyerPrices[8] >= 1e24 && autoBuyerPrices[8] < 1e27) return +(autoBuyerPrices[8] / 1e24).toFixed(2) + "Sp";
            if (autoBuyerPrices[8] >= 1e27 && autoBuyerPrices[8] < 1e30) return +(autoBuyerPrices[8] / 1e27).toFixed(2) + "Oc";
            if (autoBuyerPrices[8] >= 1e30 && autoBuyerPrices[8] < 1e33) return +(autoBuyerPrices[8] / 1e30).toFixed(2) + "No";
            if (autoBuyerPrices[8] >= 1e31) return autoBuyerPrices[1];; 
}
var convert33 = autoBuyerPrices => {
	    if (autoBuyerPrices.boost < 1e3) return autoBuyerPrices.boost;
	    if (autoBuyerPrices.boost >= 1e3 && autoBuyerPrices.boost < 1e6) return +(autoBuyerPrices.boost / 1e3).toFixed(2) + "K";
            if (autoBuyerPrices.boost >= 1e6 && autoBuyerPrices.boost < 1e9) return +(autoBuyerPrices.boost / 1e6).toFixed(2) + "M";
	    if (autoBuyerPrices.boost >= 1e9 && autoBuyerPrices.boost < 1e12) return +(autoBuyerPrices.boost / 1e9).toFixed(2) + "B";
	    if (autoBuyerPrices.boost >= 1e12 && autoBuyerPrices.boost < 1e15) return +(autoBuyerPrices.boost / 1e12).toFixed(2) + "T";
            if (autoBuyerPrices.boost >= 1e15 && autoBuyerPrices.boost < 1e18) return +(autoBuyerPrices.boost / 1e15).toFixed(2) + "Qa";
            if (autoBuyerPrices.boost >= 1e18 && autoBuyerPrices.boost < 1e21) return +(autoBuyerPrices.boost / 1e18).toFixed(2) + "Qi";
            if (autoBuyerPrices.boost >= 1e21 && autoBuyerPrices.boost < 1e24) return +(autoBuyerPrices.boost / 1e21).toFixed(2) + "Sx";
            if (autoBuyerPrices.boost >= 1e24 && autoBuyerPrices.boost < 1e27) return +(autoBuyerPrices.boost / 1e24).toFixed(2) + "Sp";
            if (autoBuyerPrices.boost >= 1e27 && autoBuyerPrices.boost < 1e30) return +(autoBuyerPrices.boost / 1e27).toFixed(2) + "Oc";
            if (autoBuyerPrices.boost >= 1e30 && autoBuyerPrices.boost < 1e33) return +(autoBuyerPrices.boost / 1e30).toFixed(2) + "No";
            if (autoBuyerPrices.boost >= 1e31) return autoBuyerPrices.boost;; 
}
var convert34 = powerCost => {
	    if (powerCost < 1e3) return powerCost;
	    if (powerCost >= 1e3 && powerCost < 1e6) return +(powerCost / 1e3).toFixed(2) + "K";
            if (powerCost >= 1e6 && powerCost < 1e9) return +(powerCost / 1e6).toFixed(2) + "M";
	    if (powerCost >= 1e9 && powerCost < 1e12) return +(powerCost / 1e9).toFixed(2) + "B";
	    if (powerCost >= 1e12 && powerCost < 1e15) return +(powerCost / 1e12).toFixed(2) + "T";
            if (powerCost >= 1e15 && powerCost < 1e18) return +(powerCost / 1e15).toFixed(2) + "Qa";
            if (powerCost >= 1e18 && powerCost < 1e21) return +(powerCost / 1e18).toFixed(2) + "Qi";
            if (powerCost >= 1e21 && powerCost < 1e24) return +(powerCost / 1e21).toFixed(2) + "Sx";
            if (powerCost >= 1e24 && powerCost < 1e27) return +(powerCost / 1e24).toFixed(2) + "Sp";
            if (powerCost >= 1e27 && powerCost < 1e30) return +(powerCost / 1e27).toFixed(2) + "Oc";
            if (powerCost >= 1e30 && powerCost < 1e33) return +(powerCost / 1e30).toFixed(2) + "No";
            if (powerCost >= 1e31) return powerCost; 
}
var convert35 = priceDivCost => {
	    if (priceDivCost < 1e3) return priceDivCost;
	    if (priceDivCost >= 1e3 && priceDivCost < 1e6) return +(priceDivCost / 1e3).toFixed(2) + "K";
            if (priceDivCost >= 1e6 && priceDivCost < 1e9) return +(priceDivCost / 1e6).toFixed(2) + "M";
	    if (priceDivCost >= 1e9 && priceDivCost < 1e12) return +(priceDivCost / 1e9).toFixed(2) + "B";
	    if (priceDivCost >= 1e12 && priceDivCost < 1e15) return +(priceDivCost / 1e12).toFixed(2) + "T";
            if (priceDivCost >= 1e15 && priceDivCost < 1e18) return +(priceDivCost / 1e15).toFixed(2) + "Qa";
            if (priceDivCost >= 1e18 && priceDivCost < 1e21) return +(priceDivCost / 1e18).toFixed(2) + "Qi";
            if (priceDivCost >= 1e21 && priceDivCost < 1e24) return +(priceDivCost / 1e21).toFixed(2) + "Sx";
            if (priceDivCost >= 1e24 && priceDivCost < 1e27) return +(priceDivCost / 1e24).toFixed(2) + "Sp";
            if (priceDivCost >= 1e27 && priceDivCost < 1e30) return +(priceDivCost / 1e27).toFixed(2) + "Oc";
            if (priceDivCost >= 1e30 && priceDivCost < 1e33) return +(priceDivCost / 1e30).toFixed(2) + "No";
            if (priceDivCost >= 1e31) return priceDivCost; 
}

var change = drugs.aderall + drugs.marujuana + drugs.crack + drugs.meth; 
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
 if (typeof game.farmMults !== "undefined") {farmMults = game.farmMults};
 if (typeof game.autobuyerMults !== "undefined") {autobuyerMults = game.autobuyerMults};
 if (typeof game.autobuyers !== "undefined") {autobuyers = game.autobuyers};
 if (typeof game.autoBuyerInt1 !== "undefined") {autoBuyerInt1 = game.autoBuyerInt1};
 if (typeof game.autoBuyerInt2 !== "undefined") {autoBuyerInt1 = game.autoBuyerInt2};
 if (typeof game.autoBuyerInt3 !== "undefined") {autoBuyerInt1 = game.autoBuyerInt3};
 if (typeof game.autoBuyerInt4 !== "undefined") {autoBuyerInt1 = game.autoBuyerInt4};
 if (typeof game.autoBuyerInt5 !== "undefined") {autoBuyerInt1 = game.autoBuyerInt5};
 if (typeof game.autoBuyerInt6 !== "undefined") {autoBuyerInt1 = game.autoBuyerInt6};
 if (typeof game.autoBuyerInt7 !== "undefined") {autoBuyerInt1 = game.autoBuyerInt7};
 if (typeof game.autoBuyerInt8 !== "undefined") {autoBuyerInt1 = game.autoBuyerInt8};
 if (typeof game.autoBuyerInt9 !== "undefined") {autoBuyerInt1 = game.autoBuyerInt9};
 if (typeof game.autoBuyerPrices !== "undefined") {autoBuyerPrices = game.autoBuyerPrices};
 if (typeof game.buyers !== "undefined") {buyers = game.buyers};
 if (typeof game.unlockedAchs !== "undefined") {unlockedAchs = game.unlockedAchs};
 if (typeof game.power !== "undefined") {power = game.power};
 if (typeof game.powerCost !== "undefined") {powerCost = game.powerCost};
 if (typeof game.priceDiv !== "undefined") {priceDiv = game.priceDiv};
 if (typeof game.priceDivCost !== "undefined") {unlockedAchs = game.priceDivCost};
 };
 drugs.aderall = drugs.aderall + seconds1 - seconds2 * change;
};
 loadSave();
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
 if (moneu >= farmsCost[1] / priceDiv) {
  farms[1] = farms[1] + 1;
  moneu = moneu - Math.round(farmsCost[1] / priceDiv)
  farmsCost[1] = farmsCost[1] *1.05
  if (farmsCost[1] < 1000) {
   farmsCost[1] = Math.round(farmsCost[1])
  }
  if (farms[1] > 1 && t1 !== 0) {
   t1 = t1 - 50;
  }
 clearInterval(farm1interval);
 farm1interval = undefined;
 }
}
function buyFarm2() {
 if (moneu >= farmsCost[2] / priceDiv) {
  farms[2] = farms[2] + 1;
  moneu = moneu - Math.round(farmsCost[2] / priceDiv)
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
 if (moneu >= farmsCost[3] / priceDiv) {
  farms[3] = farms[3] + 1;
  moneu = moneu - Math.round(farmsCost[3] / priceDiv)
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
 if (moneu >= farmsCost[4] / priceDiv) {
  farms[4] = farms[4] + 1;
  moneu = moneu - Math.round(farmsCost[4] / priceDiv)
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
 if (moneu >= farmsCost[5] / priceDiv) {
  farms[5] = farms[5] + 1;
  moneu = moneu - Math.round(farmsCost[5] / priceDiv)
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
 if (moneu >= farmsCost[6] / priceDiv) {
  farms[6] = farms[6] + 1;
  moneu = moneu - Math.round(farmsCost[6] / priceDiv)
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
 if (moneu >= farmsCost[7] / priceDiv) {
  farms[7] = farms[7] + 1;
  moneu = moneu - Math.round(farmsCost[7] / priceDiv)
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
 if (moneu >= farmsCost[8] / priceDiv) {
  farms[8] = farms[8] + 1;
  moneu = moneu - Math.round(farmsCost[8] / priceDiv)
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
updateAchivements();
displayDrugs = drugs.aderall + drugs.marujuana + drugs.crack + drugs.meth
 document.getElementById('buyer1Cost').innerHTML = convert25(autoBuyerPrices)
 document.getElementById('buyer2Cost').innerHTML = convert26(autoBuyerPrices)
 document.getElementById('buyer3Cost').innerHTML = convert27(autoBuyerPrices)
 document.getElementById('buyer4Cost').innerHTML = convert28(autoBuyerPrices)
 document.getElementById('buyer5Cost').innerHTML = convert29(autoBuyerPrices)
 document.getElementById('buyer6Cost').innerHTML = convert30(autoBuyerPrices)
 document.getElementById('buyer7Cost').innerHTML = convert31(autoBuyerPrices)
 document.getElementById('buyer8Cost').innerHTML = convert32(autoBuyerPrices)
 document.getElementById('buyer9Cost').innerHTML = convert33(autoBuyerPrices)
 if (autoBuyerInt1 !== undefined) {document.getElementById('buyerInt1').innerHTML = autoBuyerInt1} else {};
 if (autoBuyerInt2 !== undefined) {document.getElementById('buyerInt2').innerHTML = autoBuyerInt2} else {};
 if (autoBuyerInt3 !== undefined) {document.getElementById('buyerInt3').innerHTML = autoBuyerInt3} else {};
 if (autoBuyerInt4 !== undefined) {document.getElementById('buyerInt4').innerHTML = autoBuyerInt4} else {};
 if (autoBuyerInt5 !== undefined) {document.getElementById('buyerInt5').innerHTML = autoBuyerInt5} else {};
 if (autoBuyerInt6 !== undefined) {document.getElementById('buyerInt6').innerHTML = autoBuyerInt6} else {};
 if (autoBuyerInt7 !== undefined) {document.getElementById('buyerInt7').innerHTML = autoBuyerInt7} else {};
 if (autoBuyerInt8 !== undefined) {document.getElementById('buyerInt8').innerHTML = autoBuyerInt8} else {};
 if (autoBuyerInt9 !== undefined) {document.getElementById('buyerInt9').innerHTML = autoBuyerInt9} else {};
 document.getElementById('farm1mult').innerHTML = convert17(farmMults)
 document.getElementById('farm2mult').innerHTML = convert18(farmMults)
 document.getElementById('farm3mult').innerHTML = convert19(farmMults)
 document.getElementById('farm4mult').innerHTML = convert20(farmMults)
 document.getElementById('farm5mult').innerHTML = convert21(farmMults)
 document.getElementById('farm6mult').innerHTML = convert22(farmMults)
 document.getElementById('farm7mult').innerHTML = convert23(farmMults)
 document.getElementById('farm8mult').innerHTML = convert24(farmMults)
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
  drugs.aderall = drugs.aderall + 1 * farms[1] * boost * farmMults[1] * power
 if (unlockedDrugs.marujuana == 1) {
  drugs.marujuana = drugs.marujuana + 1 * farms[1] * boost * farmMults[1] * power
  
 }; if (unlockedDrugs.crack == 1) {
  drugs.crack = drugs.crack + 1 * farms[1] * boost * farmMults[1] * power
 }; if (unlockedDrugs.meth == 1) {
  drugs.meth = drugs.meth + 1 * farms[1] * boost * farmMults[1] * power
 }
}

function farm2int() {
  drugs.aderall = drugs.aderall + 2 * farms[2] * boost * farmMults[2] * power
 if (unlockedDrugs.marujuana == 1) {
  drugs.marujuana = drugs.marujuana + 2 * farms[2] * boost * farmMults[2] * power
  
 }; if (unlockedDrugs.crack == 1) {
  drugs.crack = drugs.crack + 2 * farms[2] * boost * farmMults[2] * power
 }; if (unlockedDrugs.meth == 1) {
  drugs.meth = drugs.meth + 2 * farms[2] * boost * farmMults[2] * power
 }
}
function farm3int() {
  drugs.aderall = drugs.aderall + 3 * farms[3] * boost * farmMults[3] * power 
 if (unlockedDrugs.marujuana == 1) {
  drugs.marujuana = drugs.marujuana + 3 * farms[3] * boost * farmMults[3] * power
  
 }; if (unlockedDrugs.crack == 1) {
  drugs.crack = drugs.crack + 3 * farms[3] * boost * farmMults[3] * power
 }; if (unlockedDrugs.meth == 1) {
  drugs.meth = drugs.meth + 3 * farms[3] * boost * farmMults[3] * power
 }
}
function farm4int() {
  drugs.aderall = drugs.aderall + 4 * farms[4] * boost * farmMults[4] * power 
 if (unlockedDrugs.marujuana == 1) {
  drugs.marujuana = drugs.marujuana + 4 * farms[4] * boost * farmMults[4] * power
  
 }; if (unlockedDrugs.crack == 1) {
  drugs.crack = drugs.crack + 4 * farms[4] * boost * farmMults[4] * power
 }; if (unlockedDrugs.meth == 1) {
  drugs.meth = drugs.meth + 4 * farms[4] * boost * farmMults[4] * power
 }
}
function farm5int() {
  drugs.aderall = drugs.aderall + 5 * farms[5] * boost * farmMults[5] * power
 if (unlockedDrugs.marujuana == 1) {
  drugs.marujuana = drugs.marujuana + 5 * farms[5] * boost * farmMults[5] * power
  
 }; if (unlockedDrugs.crack == 1) {
  drugs.crack = drugs.crack + 5 * farms[5] * boost * farmMults[5] * power
 }; if (unlockedDrugs.meth == 1) {
  drugs.meth = drugs.meth + 5 * farms[5] * boost * farmMults[5] * power
 }
}
function farm6int() {
  drugs.aderall = drugs.aderall + 6 * farms[6] * boost * farmMults[6] * power
 if (unlockedDrugs.marujuana == 1) {
  drugs.marujuana = drugs.marujuana + 6 * farms[6] * boost * farmMults[6] * power
  
 }; if (unlockedDrugs.crack == 1) {
  drugs.crack = drugs.crack + 6 * farms[6] * boost * farmMults[6] * power
 }; if (unlockedDrugs.meth == 1) {
  drugs.meth = drugs.meth + 6 * farms[6] * boost * farmMults[6] * power
 }
}
function farm7int() {
  drugs.aderall = drugs.aderall + 7 * farms[7] * boost * farmMults[7] * power
 if (unlockedDrugs.marujuana == 1) {
  drugs.marujuana = drugs.marujuana + 7 * farms[7] * boost * farmMults[7] * power
  
 }; if (unlockedDrugs.crack == 1) {
  drugs.crack = drugs.crack + 7 * farms[7] * boost * farmMults[7] * power
 }; if (unlockedDrugs.meth == 1) {
  drugs.meth = drugs.meth + 7 * farms[7] * boost * farmMults[7] * power
 }
}
function farm8int() {
  drugs.aderall = drugs.aderall + 8 * farms[8] * boost * farmMults[8] * power
 if (unlockedDrugs.marujuana == 1) {
  drugs.marujuana = drugs.marujuana + 8 * farms[8] * boost * farmMults[8] * power
  
 }; if (unlockedDrugs.crack == 1) {
  drugs.crack = drugs.crack + 8 * farms[8] * boost * farmMults[8] * power
 }; if (unlockedDrugs.meth == 1) {
  drugs.meth = drugs.meth + 8 * farms[8] * boost * farmMults[8] * power
 }
}
function boostFarms() {
 if (farms[8] >= boostReq.farmCount) {
  boost += 1;
  farms[8] = farms[8] - boostReq.farmCount;
  boostReq.farmCount = boostReq.farmCount * 2; 
  document.getElementById('requiredFarms').innerHTML = boostReq.farmCount;
 }
}
function updateDrug() {
 if (unlockedDrugs.marujuana == 0 && unlockedDrugs.aderall == 1) {
  document.getElementById('hiddenDrug').innerHTML = 'marujuana for 100K aderall'
 } else if (unlockedDrugs.crack == 0 && unlockedDrugs.marujuana == 1) {
  document.getElementById('hiddenDrug').innerHTML = 'crack for 10M marujuana'
 } else if (unlockedDrugs.meth == 0 && unlockedDrugs.crack == 1) {
  document.getElementById('hiddenDrug').innerHTML = 'meth for 1B crack'
 } else if (unlockedDrugs.marujuana == 1 && unlockedDrugs.aderall == 1 && unlockedDrugs.meth == 1 && unlockedDrugs.crack == 1) {
  document.getElementById('hiddenDrug').style.display = 'none'
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
 'hiddenDrug':hiddenDrug,
 'farmMults':farmMults,
 'unlockedAchs':unlockedAchs,
 'autobuyers':autobuyers,
 'autoBuyerPrices':autoBuyerPrices,
 'autobuyerMults':autobuyerMults,
 'autoBuyerInt1':autoBuyerInt1,
 'autoBuyerInt2':autoBuyerInt2,
 'autoBuyerInt3':autoBuyerInt3,
 'autoBuyerInt4':autoBuyerInt4,
 'autoBuyerInt5':autoBuyerInt5,
 'autoBuyerInt6':autoBuyerInt6,
 'autoBuyerInt7':autoBuyerInt7,
 'autoBuyerInt8':autoBuyerInt8,
 'autoBuyerInt9':autoBuyerInt9,
 'buyers':buyers,
 'power':power,
 'powerCost':powerCost,
 'priceDiv':priceDiv,
 'priceDivCost':priceDivCost,
 'seconds':seconds2
 }
   save = JSON.stringify(savedGame)
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

function boostTick() {
   if (moneu >= powerCost) {
 power *= 1.5
 power = Math.round(power)
 moneu = moneu - powerCost
 powerCost = Math.round(Math.pow(powerCost,1.07))
 document.getElementById('requiredMoney').innerHTML = convert34(powerCost)
} else {console.log('no')}
}
function buyPriceDivide() {
 if (moneu >= priceDivCost && priceDiv < 10) {
  priceDiv += 1;
  moneu -= priceDivCost;
  priceDivCost *= 5;
  document.getElementById('priceDivCost').innerHTML = convert35(priceDivCost)
 }
}
function updateAchivements() {
 if (unlockedAchs[1] !== 1 && farms[1] == 1 && moneu == 0) {
  unlockedAchs[1] = 1
  document.getElementById('achspn1').innerHTML = 'unlocked'
 } 
 else if (unlockedAchs[2] !== 1 && farms[2] == 1) {
  unlockedAchs[2] = 1
  document.getElementById('achspn2').innerHTML = 'unlocked'
 } 
 else if (unlockedAchs[3] !== 1 && farms[3] == 1) {
  unlockedAchs[3] = 1
  document.getElementById('achspn3').innerHTML = 'unlocked'
 }
 else if (unlockedAchs[4] !== 1 && farms[4] == 1) {
  unlockedAchs[4] = 1
  document.getElementById('achspn4').innerHTML = 'unlocked'
 }
 else if (unlockedAchs[5] !== 1 && farms[5] == 1) {
  unlockedAchs[5] = 1
  document.getElementById('achspn5').innerHTML = 'unlocked'
 }
 else if (unlockedAchs[6] !== 1 && farms[6] == 1) {
  unlockedAchs[6] = 1
  document.getElementById('achspn6').innerHTML = 'unlocked'
 }
 else if (unlockedAchs[7] !== 1 && farms[7] == 1) {
  unlockedAchs[7] = 1
  document.getElementById('achspn7').innerHTML = 'unlocked'
 }
 else if (unlockedAchs[8] !== 1 && farms[8] == 1) {
  unlockedAchs[8] = 1
  document.getElementById('achspn8').innerHTML = 'unlocked'
 }
 else if (unlockedAchs[9] !== 1 && moneu == 100000000000) {
  unlockedAchs[9] = 1
  document.getElementById('achspn9').innerHTML = 'unlocked'
 }
 else if (unlockedAchs[10] !== 1 && moneu == 1000000000000) {
  unlockedAchs[10] = 1
  document.getElementById('achspn10').innerHTML = 'unlocked'
 }
 else if (unlockedAchs[11] !== 1) {
  unlockedAchs[11] = 1
  document.getElementById('achspn11').innerHTML = 'unlocked'
 }
 else if (unlockedAchs[12] !== 1) {
  unlockedAchs[12] = 1
  document.getElementById('achspn12').innerHTML = 'unlocked'
 }
 else if (unlockedAchs[13] !== 1) {
  unlockedAchs[13] = 1
  document.getElementById('achspn13').innerHTML = 'unlocked'
 } 
 else if (unlockedAchs[14] !== 1) {
  unlockedAchs[14] = 1
  document.getElementById('achspn14').innerHTML = 'unlocked'
 }
 else if (unlockedAchs[15] !== 1) {
  unlockedAchs[15] = 1
  document.getElementById('achspn15').innerHTML = 'unlocked'
 }
 else if (unlockedAchs[16] !== 1) {
  unlockedAchs[16] = 1
  document.getElementById('achspn16').innerHTML = 'unlocked'
 }
 else if (unlockedAchs[17] !== 1) {
  unlockedAchs[17] = 1
  document.getElementById('achspn17').innerHTML = 'unlocked'
 } 
 else if (unlockedAchs[18] !== 1) {
  unlockedAchs[18] = 1
  document.getElementById('achspn18').innerHTML = 'unlocked'
 }
 else if (unlockedAchs[19] !== 1) {
  unlockedAchs[19] = 1
  document.getElementById('achspn19').innerHTML = 'unlocked'
 }
 else if (unlockedAchs[20] !== 1) {
  unlockedAchs[20] = 1
  document.getElementById('achspn20').innerHTML = 'unlocked'
 }
}
window.addEventListener("beforeunload", function( event ) {
    if (resetting == false) {
        saveGame()
    } else if (resetting == true) {
	savedGame = undefined;
	game = undefined;
        this.removeEventListener("beforeunload",arguments.callee,false)
	location.reload()
    }
});
setInterval(function e() {change = drugs.aderall + drugs.marujuana + drugs.crack + drugs.meth; console.log(change);seconds1 = Math.round(d.getTime() / 1000);}, 1000);
function resetGame() {
 resetting = true
}
}
