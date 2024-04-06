function damagecalc() {

const attack = document.getElementById("attack").value;
const armor = document.getElementById("armor").value;
const armortoughness = document.getElementById("armortoughness").value;
const prot = document.getElementById("prot").value;

//attack + sharpness * 1.25 + power * 3 - weakened * 4
//prot

const reductionrate1 = ( armor - ( attack / ( 2 + armortoughness / 4 ))) / 25;
//const reductionrate1 = ( armor - ( attack * 4 / ( 8 + armortoughness))) / 25;
const reductionrate2 = armor / 125;
document.getElementById("reductionrate1").textContent = (reductionrate1 * 100).toFixed(1) ;
document.getElementById("reductionrate2").textContent = (reductionrate2 * 100).toFixed(1) ;


let selectedreductionrate = reductionrate1 > reductionrate2 ? reductionrate1 : reductionrate2;
document.getElementById("whichmethod").textContent = reductionrate1 > reductionrate2 ? "防具強度込" : "防具値のみ";

  let rawdamage = selectedreductionrate > 0.8 ? 0.2 * attack : (1 - selectedreductionrate) * attack;
  let damage = rawdamage * (1 - (prot * 0.04));

  document.getElementById("calculateddamage").textContent = damage.toFixed(5);
}