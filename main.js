var openTab = 1;
var moneu = 100;
var farmsCost = {
 '1':100,
 '2':1000,
 '3':10000,
 '4':100000,
 '6':1000000,
 '7':10000000,
 '8':100000000};
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
var t = 500;
var a = document.getElementById('drugsMenu')
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
  moneu = moneu - farmsCost[1]
  farmsCost[1] = farmsCost[1] *1.05
 }
}
function addFarm1() {
 t = t - 50;
 clearInterval(farm1interval);
}
function buyFarm2() {
 if (moneu >= farmsCost[2]) {
  farms[2] = farms[2] + 1;
  moneu = moneu - farmsCost[2]
  farmsCost[2] = farmsCost[2] *1.05
 }
}
function buyFarm3() {
 if (moneu >= farmsCost[3]) {
  farms[3] = farms[3] + 1;
  moneu = moneu - farmsCost[3]
  farmsCost[3] = farmsCost[3] *1.05
 }
}
function buyFarm4() {
 if (moneu >= farmsCost[4]) {
  farms[4] = farms[4] + 1;
  moneu = moneu - farmsCost[4]
  farmsCost[4] = farmsCost[4] *1.05
 }
}
function buyFarm5() {
 if (moneu >= farmsCost[5]) {
  farms[5] = farms[5] + 1;
  moneu = moneu - farmsCost[5]
  farmsCost[5] = farmsCost[5] *1.05
 }
}
function buyFarm6() {
 if (moneu >= farmsCost[6]) {
  farms[6] = farms[6] + 1;
  moneu = moneu - farmsCost[6]
  farmsCost[6] = farmsCost[6] *1.05
 }
}
function buyFarm7() {
 if (moneu >= farmsCost[7]) {
  farms[7] = farms[7] + 1;
  moneu = moneu - farmsCost[1]
  farmsCost[7] = farmsCost[7] *1.05
 }
}
function buyFarm8() {
 if (moneu >= farmsCost[8]) {
  farms[8] = farms[8] + 1;
  moneu = moneu - farmsCost[8]
  farmsCost[8] = farmsCost[8] *1.05
 }
}
function onlockNewDrug() {
 if (unlockedDrugs.marujuana == 0 && unlockedDrugs.aderall >= 100000) {
  unlockedDrugs.marujuana = 1;
 } else if (unlockedDrugs.crack == 0 && unlockedDrugs.marujuana >= 10000000) {
  unlockedDrugs.crack = 1;
} else if (unlockedDrugs.meth == 0 && unlockedDrugs.crack >= 1000000000) {
  unlockedDrugs.meth = 1;
}
}
function sellDrugs() {
   moneu = drugsWorth.meth * drugs.meth + drugsWorth.crack * drugs.crack + drugsWorth.marujuana * drugs.marujuana + drugsWorth.aderall * drugs.aderall 
}
function gameLoop {
 document.getElementById('moneu').innerHTML = moneu
 if (farms[1] >= 1) {
  var farm1interval = setInterval(spawnDrugs, t);
 }
}
function spawnDrugs() {
  drugs.aderall = drugs.aderall + 1
}
setInterval(gameLoop, 50);
