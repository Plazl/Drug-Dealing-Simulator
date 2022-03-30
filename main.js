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
var boost = 1;
var boostReq = {
 'farmType':4,
 'farmCount':20
}
var farmsCost = {
 '1':100,
 '2':1000,
 '3':10000,
 '4':100000,
 '6':1000000,
 '7':10000000,
 '8':100000000
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
var a = document.getElementById('drugsMenu')
var hiddenDrug = 2
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
  if (farms[1] > 1) {
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
  farmsCost[2] = farmsCost[2] *1.05
  farm2interval = undefined;
 }
}
function buyFarm3() {
 if (moneu >= farmsCost[3]) {
  farms[3] = farms[3] + 1;
  moneu = moneu - Math.round(farmsCost[3])
  farmsCost[3] = farmsCost[3] *1.05
  farm3interval = undefined;
 }
}
function buyFarm4() {
 if (moneu >= farmsCost[4]) {
  farms[4] = farms[4] + 1;
  moneu = moneu - Math.round(farmsCost[4])
  farmsCost[4] = farmsCost[4] *1.05
  farm4interval = undefined;
 }
}
function buyFarm5() {
 if (moneu >= farmsCost[5]) {
  farms[5] = farms[5] + 1;
  moneu = moneu - Math.round(farmsCost[5])
  farmsCost[5] = farmsCost[5] *1.05
  farm5interval = undefined;
 }
}
function buyFarm6() {
 if (moneu >= farmsCost[6]) {
  farms[6] = farms[6] + 1;
  moneu = moneu - Math.round(farmsCost[6])
  farmsCost[6] = farmsCost[6] *1.05
  farm6interval = undefined;
 }
}
function buyFarm7() {
 if (moneu >= farmsCost[7]) {
  farms[7] = farms[7] + 1;
  moneu = moneu - Math.round(farmsCost[7])
  farmsCost[7] = farmsCost[7] *1.05
  farm7interval = undefined;
 }
}
function buyFarm8() {
 if (moneu >= farmsCost[8]) {
  farms[8] = farms[8] + 1;
  moneu = moneu - Math.round(farmsCost[8])
  farmsCost[8] = farmsCost[8] *1.05
  farm8interval = undefined;
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
 document.getElementById('moneu').innerHTML = moneu
 if (farms[1] >= 1 && farm1interval == undefined) {
   farm1interval = setInterval(spawnDrugs, t);
  return
 }
 
 
 if (farms[2] >= 1 && farm2interval == undefined) {
  farm2interval = setInterval(newFarm1, 50)
  return
 }
 
 if (farms[3] >= 1 && farm3interval == undefined) {
  farm2interval = setInterval(newFarm2, 50)
  return
 }
 if (farms[4] >= 1 && farm4interval == undefined) {
  farm2interval = setInterval(newFarm3, 50)
  return
 }
 
 if (farms[5] >= 1 && farm4interval == undefined) {
  farm2interval = setInterval(newFarm4, 50)
  return
 }
 
 if (farms[6] >= 1 && farm5interval == undefined) {
  farm2interval = setInterval(newFarm5, 50)
  return
 }
 
 if (farms[7] >= 1 && farm6interval == undefined) {
  farm2interval = setInterval(newFarm6, 50)
  return
 }
 
 if (farms[8] >= 1 && farm7interval == undefined) {
  farm2interval = setInterval(newFarm7, 50)
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
function newFarm1() {
aaa()
function aaa() {r = setInterval(function myFunc() {
 farms[1] = farms[1] + 1 * farms[2];
  t = t - 50
 clearInterval(r);
 setTimeout(function r() {
  aaa()
   },t)
  },t)
 }
}
function newFarm2() {
farms[2] = farms[2] + 1 * farms[3];
}
function newFarm3() {
  farms[3] = farms[3] + 1 * farms[4];
}
function newFarm4() {
  farms[4] = farms[4] + 1 * farms[5];
}
function newFarm5() {
 farms[5] = farms[5] + 1 * farms[6];
}
function newFarm6() {
 farms[6] = farms[6] + 1 * farms[7];
}
function newFarm7() {
 farms[7] = farms[7] + 1 * farms[8];
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
setInterval(updateDrug, 50);
