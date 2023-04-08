// from: https://zoe.kittycat.homes/links/buddies/
// licence: https://git.kittycat.homes/zoe/kittycat-homes-opensource-license-v1#kittycat-homes-opensource-license-v1
// not my code (obv), though I may modify it. 

const buttons = document.getElementsByClassName("randomword-button");

export function randomizeWords() {
  registerButtons();
}

function registerButtons() {
  for (let button of buttons) {
    button.addEventListener("click", function () {
      button.innerHTML = processWordlist(
        button.getAttribute("data-wordlist"),
        button.innerHTML
      );
      // do this so people dont have to click twice
    });
    button.click();
  }
}

// takes all the words and returns only one
function processWordlist(wordlist, old) {
  let seperated = wordlist.split(",");
  for (let word of wordlist) {
    word = word.trim();
  }
  if (seperated.length <= 0) {
    return "error! empty";
  }
  if (seperated.length == 1) {
    return seperated[0];
  }
  seperated = seperated.filter((e) => e !== old);
  return seperated.random();
}

Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};
