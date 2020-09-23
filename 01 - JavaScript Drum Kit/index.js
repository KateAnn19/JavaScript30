//gets a node list of all the elements with a class of key
let allKeys = document.querySelectorAll(".key");
let allAudio = document.querySelectorAll("audio");
//gets the individual key
let a = allKeys[0];
let s = allKeys[1];
let d = allKeys[2];
let f = allKeys[3];
let g = allKeys[4];
let h = allKeys[5];
let j = allKeys[6];
let k = allKeys[7];
let l = allKeys[8];
//let l = allKeys[8].dataset.key; ---> this accesses the key number

// for (i = 0; i < 9; i++) {
//   console.log(allKeys[i]);
// }

// addingClasstoA.onclick = function () {
//   let list = addingClasstoA.classList;
//   if (list[1] === "playing") {
//     console.log("here");
//     addingClasstoA.classList.remove("playing");
//   } else {
//     addingClasstoA.className += " playing";
//   }
// };

document.addEventListener("keyup", (event) => {
  let ev = event.key;
  if (ev === "a") {
    a.classList.remove("playing");
  } else if (ev === "s") {
    s.classList.remove("playing");
  } else if (ev === "d") {
    d.classList.remove("playing");
  }
  else if (ev === "f") {
    f.classList.remove("playing");
  }
  else if (ev === "g") {
    g.classList.remove("playing");
  }
  else if (ev === "h") {
    h.classList.remove("playing");
  }
  else if (ev === "j") {
    j.classList.remove("playing");
  }
  else if (ev === "k") {
    k.classList.remove("playing");
  }
  else if (ev === "l") {
    l.classList.remove("playing");
  }
});

document.addEventListener("keypress", logkey);

function logkey(e) {
  let ev = e.key;
  if (ev === "a") {
    a.className += " playing";
    allAudio[0].play();
  } else if (ev === "s") {
    s.className += " playing";
    allAudio[1].play();
  } else if (ev === "d") {
    d.className += " playing";
    allAudio[2].play();
  }
  else if (ev === "f") {
    f.className += " playing";
    allAudio[3].play();
  }
  else if (ev === "g") {
    g.className += " playing";
    allAudio[4].play();
  }
  else if (ev === "h") {
    h.className += " playing";
    allAudio[5].play();
  }
  else if (ev === "j") {
    j.className += " playing";
    allAudio[6].play();
  }
  else if (ev === "k") {
    k.className += " playing";
    allAudio[7].play();
  }
  else if (ev === "l") {
    l.className += " playing";
    allAudio[8].play();
  }
  
}
