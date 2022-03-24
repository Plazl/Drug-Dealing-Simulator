var openTab = 1;
var moneu = 100;
var farmsCost = {
 '1':10,
 '2':100,
 '3':1000,
 '4':10000,
 '6':100000,
 '7':1000000,
 '8':10000000};
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
   
 }
}
function buyFarm1() {
 if (moneu >= farmsCost[1]) {
  farms[1] = farms[1] + 1;
  moneu = moneu - farmsCost[1]
  farmsCost[1] = farmsCost[1] *1.05
 }
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
  farms[8] = farms[] + 1;
  moneu = moneu - farmsCost[8]
  farmsCost[8] = farmsCost[8] *1.05
 }
}
