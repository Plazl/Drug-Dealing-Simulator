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
var boostReq = {
 'farmType':4,
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
var a = document.getElementById('drugsMenu')
function loadSave() {
   var game = JSON.parse(localStorage.getItem('gameSave'))
 if (typeof game !== "undefined") {
 if (typeof game.t1 !== "undefined") {t1 = game.t1}
 if (typeof game.t2 !== "undefined") {t2 = game.t2}
 if (typeof game.t3 !== "undefined") {t3 = game.t3}
 if (typeof game.t4 !== "undefined") {t4 = game.t4}
 if (typeof game.t5 !== "undefined") {t5 = game.t5}
 if (typeof game.t6 !== "undefined") {t6 = game.t6}
 if (typeof game.t7 !== "undefined") {t7 = game.t7}
 if (typeof game.t8 !== "undefined") {t8 = game.t8}
 if (typeof game.farm1interval !== "undefined") {farm1interval = game.farm1interval}
 if (typeof game.farm2interval !== "undefined") {farm2interval = game.farm2interval}
 if (typeof game.farm3interval !== "undefined") {farm3interval = game.farm3interval}
 if (typeof game.farm4interval !== "undefined") {farm4interval = game.farm4interval}
 if (typeof game.farm5interval !== "undefined") {farm5interval = game.farm5interval}
 if (typeof game.farm6interval !== "undefined") {farm6interval = game.farm6interval}
 if (typeof game.farm7interval !== "undefined") {farm7interval = game.farm7interval}
 if (typeof game.farm8interval !== "undefined") {farm8interval = game.farm8interval}
 if (typeof game.boost !== "undefined") {boost = game.boost}
 if (typeof game.boostMult !== "undefined") {boostMult = game.boostMult}
 if (typeof game.boostReq !== "undefined") {boostReq = game.boostReq}
 if (typeof game.farmsCost !== "undefined") {farmsCost = game.farmsCost}
 if (typeof game.farms !== "undefined") {farms = game.farms}
 if (typeof game.drugs !== "undefined") {drugs = game.drugs}
 if (typeof game.drugsWorth !== "undefined") {drugsWorth = game.drugsWorth}
 if (typeof game.unlockedDrugs !== "undefined") {unlockedDrugs = game.unlockedDrugs}
 if (typeof game.hiddenDrug !== "undefined") {hiddenDrug = game.t3}
 if (typeof game.dollars !== "undefined") {moneu = game.dollars}
 }
};

function openFarmsMenu() {
 if (openTab !== 1) {
   
 }
}
function openUpgrdsMenu() {
  if (openTab !== 2) {
   
 }
}
function openAchMenu() {
  if (openTab !== 3) {
   
 }
}
function openDrugsMenu() {
  if (openTab !== 4) {
   openTab = 4
   a.style.display = shown
 } else {
  a.style.display = hidden
 }
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
}
}
function sellDrugs() {
   moneu = moneu + drugsWorth.meth * drugs.meth + drugsWorth.crack * drugs.crack + drugsWorth.marujuana * drugs.marujuana + drugsWorth.aderall * drugs.aderall
 drugs.aderall = 0
 drugs.meth = 0
 drugs.marujuana = 0
 drugs.crack = 0
}
function gameLoop() {
 document.getElementById('moneu').innerHTML = Math.round(moneu);
 document.getElementById('farm1price').innerHTML = Math.round(farmsCost[1]);
 document.getElementById('farm2price').innerHTML = Math.round(farmsCost[2]);
 document.getElementById('farm3price').innerHTML = Math.round(farmsCost[3]);
 document.getElementById('farm4price').innerHTML = Math.round(farmsCost[4]);
 document.getElementById('farm5price').innerHTML = Math.round(farmsCost[5]);
 document.getElementById('farm6price').innerHTML = Math.round(farmsCost[6]);
 document.getElementById('farm7price').innerHTML = Math.round(farmsCost[7]);
 document.getElementById('farm8price').innerHTML = Math.round(farmsCost[8]);
 if (farms[1] >= 1 && farm1interval == undefined) {
   farm1interval = setInterval(spawnDrugs, t1);
  return
 }
 
 if (farms[2] >= 1 && farm2interval == undefined) {
  farm2interval = setInterval(farm2int, t2)
  return
 }
 
 if (farms[3] >= 1 && farm3interval == undefined) {
  farm3interval = setInterval(farm3int, t3)
  return
 }
 if (farms[4] >= 1 && farm4interval == undefined) {
  farm4interval = setInterval(farm4int, t4)
  return
 }
 
 if (farms[5] >= 1 && farm5interval == undefined) {
  farm5interval = setInterval(farm5int, t5)
  return
 }
 
 if (farms[6] >= 1 && farm6interval == undefined) {
  farm6interval = setInterval(farm6int, t6)
  return
 }
 
 if (farms[7] >= 1 && farm7interval == undefined) {
  farm7interval = setInterval(farm7int, t7)
  return
 }
 
 if (farms[8] >= 1 && farm8interval == undefined) {
  farm8interval = setInterval(farm8int, t8)
  return
 }
 document.getElementById('drugs').innerHTML = drugs.aderall + drugs.marujuana + drugs.crack + drugs.meth;
}
function spawnDrugs() {
  drugs.aderall = drugs.aderall + 1 * boost
 if (unlockedDrugs.marujuana == 1) {
  drugs.marujuana = drugs.marujuana + 1 * boost
  
 }; if (unlockedDrugs.crack == 1) {
  drugs.crack = drugs.crack + 1 * boost
 }; if (unlockedDrugs.meth == 1) {
  drugs.meth = drugs.meth + 1 * boost
 }
}

function farm2int() {
  drugs.aderall = drugs.aderall + 2 * boost
 if (unlockedDrugs.marujuana == 1) {
  drugs.marujuana = drugs.marujuana + 2 * boost
  
 }; if (unlockedDrugs.crack == 1) {
  drugs.crack = drugs.crack + 2 * boost
 }; if (unlockedDrugs.meth == 1) {
  drugs.meth = drugs.meth + 2 * boost
 }
}
function farm3int() {
  drugs.aderall = drugs.aderall + 3 * boost
 if (unlockedDrugs.marujuana == 1) {
  drugs.marujuana = drugs.marujuana + 3 * boost
  
 }; if (unlockedDrugs.crack == 1) {
  drugs.crack = drugs.crack + 3 * boost
 }; if (unlockedDrugs.meth == 1) {
  drugs.meth = drugs.meth + 3 * boost
 }
}
function farm4int() {
  drugs.aderall = drugs.aderall + 4 * boost
 if (unlockedDrugs.marujuana == 1) {
  drugs.marujuana = drugs.marujuana + 4 * boost
  
 }; if (unlockedDrugs.crack == 1) {
  drugs.crack = drugs.crack + 4 * boost
 }; if (unlockedDrugs.meth == 1) {
  drugs.meth = drugs.meth + 4 * boost
 }
}
function farm5int() {
  drugs.aderall = drugs.aderall + 5 * boost
 if (unlockedDrugs.marujuana == 1) {
  drugs.marujuana = drugs.marujuana + 5 * boost
  
 }; if (unlockedDrugs.crack == 1) {
  drugs.crack = drugs.crack + 5 * boost
 }; if (unlockedDrugs.meth == 1) {
  drugs.meth = drugs.meth + 5 * boost
 }
}
function farm6int() {
  drugs.aderall = drugs.aderall + 6 * boost
 if (unlockedDrugs.marujuana == 1) {
  drugs.marujuana = drugs.marujuana + 6 * boost
  
 }; if (unlockedDrugs.crack == 1) {
  drugs.crack = drugs.crack + 6 * boost
 }; if (unlockedDrugs.meth == 1) {
  drugs.meth = drugs.meth + 6 * boost
 }
}
function farm7int() {
  drugs.aderall = drugs.aderall + 7 * boost
 if (unlockedDrugs.marujuana == 1) {
  drugs.marujuana = drugs.marujuana + 7 * boost
  
 }; if (unlockedDrugs.crack == 1) {
  drugs.crack = drugs.crack + 7 * boost
 }; if (unlockedDrugs.meth == 1) {
  drugs.meth = drugs.meth + 7 * boost
 }
}
function farm8int() {
  drugs.aderall = drugs.aderall + 8 * boost
 if (unlockedDrugs.marujuana == 1) {
  drugs.marujuana = drugs.marujuana + 8 * boost
  
 }; if (unlockedDrugs.crack == 1) {
  drugs.crack = drugs.crack + 8 * boost
 }; if (unlockedDrugs.meth == 1) {
  drugs.meth = drugs.meth + 8 * boost
 }
}
setInterval(gameLoop, 50);
function boostFarms() {
 if (boostReq.farmType == 8 && farms[8] >= boostReq.farmCount) {
  boost = boost * 2;
  boostReq.farmCount = boostReq.farmCount * 2; 
  farms[8] = farms[8] - boostReq.farmCount;
 }
}
function updateDrug() {
 if (unlockedDrugs.marujuana == 0 && unlockedDrugs.aderall == 1) {
  document.getElementById('hiddenDrug').innerHTML = 'marujuana for 100000 aderall'
 } else if (unlockedDrugs.crack == 0 && unlockedDrugs.marujuana == 1) {
  document.getElementById('hiddenDrug').innerHTML = 'crack for 10000000 marujuana'
 } else if (unlockedDrugs.meth == 0 && unlockedDrugs.crack == 1) {
  document.getElementById('hiddenDrug').innerHTML = 'meth for 1000000000 crack'
 } 
}
setInterval(saveGame, 30000)
setInterval(updateDrug, 50);
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
 'farm1interval':farm1interval,
 'farm2interval':farm2interval,
 'farm3interval':farm3interval,
 'farm4interval':farm4interval,
 'farm5interval':farm5interval,
 'farm6interval':farm6interval,
 'farm7interval':farm7interval,
 'farm8interval':farm8interval,
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
window.beforeUnLoad = saveGame()
