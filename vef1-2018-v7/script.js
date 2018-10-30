/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;
var r = 0;


/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */

function start() {
  var r = confirm('Viltu spila aftur?');
  if(r === true) {
    alert('Þú átt að svara 10 spurningum eins hratt og þú getur.');
    play();
  }
  else {
    return;
  }

  
  
 
  
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
 
  
  questions = [ask(), ask(), ask(), ask(), ask(), ask(), ask(), ask(), ask(), spurning()];
  total = questions.length;
  correct = questions.filter(Boolean).length;
    
  timi = (t1 - t0);
  medaltimi = (timi/10);

  alert( "Þú náðir "+correct+"/"+total+' rétt. Tíminn var: ' + timi + 'sekúndur. Meðaltími á spurningu var ' + medaltimi + 'sekúndur.');

  start();
  
}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {
  

  
  t0 = Math.floor(Date.now() / 100);
  var a = randomNumber(1, 100);
  var b = randomNumber(1, 100);
  var x = randomNumber(1, 10);
  var y = randomNumber(1, 10);
  var u = randomNumber(2, 10);
  var v = randomNumber(2, 10);
  var op = ["*", "+", "/", "-"][Math.floor(Math.random()*4)];
  if (op === '/'){
    return prompt("Hvað er " + u*v + " " + op + " " + v + "?") == eval( u*v + op + v);
  } else if (op === '*') {
    return prompt("Hvað er " + x + " " + op + " " + y + "?") == eval( x + op + y);
  } else {
    return prompt("Hvað er " + a + " " + op + " " + b + "?") == eval( a + op + b);
  }
  
}
  


function spurning(){
  var a = randomNumber(1, 100);
  var b = randomNumber(1, 100);
  t1 = Math.floor(Date.now() / 100);
  return prompt("Hvað er " + a + " " + '+' + " " + b + "?") == eval( a +  b);
  
}


questions = [ask(), ask(), ask(), ask(), ask(), ask(), ask(), ask(), ask(), spurning()];
total = questions.length;
correct = questions.filter(Boolean).length;
    
timi = (t1 - t0);
medaltimi = (timi/10);

alert( "Þú náðir "+correct+"/"+total+' rétt. Tíminn var: ' + timi + 'sekúndur. Meðaltími á spurningu var ' + medaltimi + 'sekúndur.');



/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Byrjar leik
start();
