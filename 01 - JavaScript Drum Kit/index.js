//gets a node list of all the elements with a class of key
let allKeys = document.querySelectorAll(".key");

for (i = 0; i < 9; i++) {
  console.log(allKeys[i]);
}

let addingClasstoA = allKeys[0];

addingClasstoA.onclick = function () {
  let list = addingClasstoA.classList;
  if (list[1] === "playing") {
      console.log('here');
    addingClasstoA.classList.remove("playing");
  } else {
    addingClasstoA.className += " playing";
  }
};

const log = document.getElementsByTagName('body');


document.addEventListener('keypress', logkey);

function logkey(e){
    let ev = e.key;
    
    if(ev === 'a'){
        console.log('howdy');
    }else if(ev === 's'){

    }
    
}
//  document.onkeypress = function(e){
//      e = e || window.event; 
//      console.log(KeyboardEvent.key);
//     //  switch(e){
//     //     case 1: 
//     //     e === 'a';
//     //     console.log(true);
//     //     break;
//     //     default:
//     //          //
//     //  }
//  }





//gets the individual key
let a = allKeys[0].dataset.key;
let s = allKeys[1].dataset.key;
let d = allKeys[2].dataset.key;
let f = allKeys[3].dataset.key;
let g = allKeys[4].dataset.key;
let h = allKeys[5].dataset.key;
let j = allKeys[6].dataset.key;
let k = allKeys[7].dataset.key;
let l = allKeys[8].dataset.key;

console.log(a, s);
