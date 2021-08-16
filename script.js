const keys = document.querySelectorAll(".piano-key");
const piano = document.querySelector(".piano");
const lettersButton = document.querySelector(".btn-letters");
const notesButton = document.querySelector(".btn-notes");

// on-CLICK play note feature_START
keys.forEach((key) => {
  key.addEventListener("mousedown", playNote);
});

function playNote(e) {
  let key = e.target;
  //console.log(key);
  let note = document.getElementById(key.dataset.note);
  key.classList.add("active");
  note.currentTime = 0;
  note.play();

  setTimeout(function () {
    key.classList.remove("active");
  }, 150);
}
// on-CLICK play note feature_END

// mouseover feature_START

keys.forEach((key) => {
  key.addEventListener("mouseover", (e) => {
    if (e.which == 1) {
      //console.log("it works");
      let note = document.getElementById(key.dataset.note);
      key.classList.add("active");
      note.currentTime = 0;
      note.play();

      setTimeout(function () {
        key.classList.remove("active");
      }, 150);
    }
    //console.log(e.which);
  });
});
// mouseover feature_END

// on keydown play note feature_START

window.addEventListener("keydown", playNoteKeyDown);

function playNoteKeyDown(e) {
  if (!e.repeat) {
    const keyCode = e.code;
    //console.log(keyCode[3]);
    const defNote = document.querySelector(`div[data-letter="${keyCode[3]}"]`);
    //console.log(defNote);
    if (defNote === null) {
      return;
    } else {
      defNote.classList.add("active");
      const note = defNote.getAttribute("data-note");
      //console.log(note);
      const elm = document.getElementById(`${note}`);
      //console.log(elm);
      elm.currentTime = 0;
      elm.play();
      setTimeout(function () {
        defNote.classList.remove("active");
      }, 150);
    }
  }
}

// on keydown play note feature_END

// letters/notes switch feature_START

lettersButton.addEventListener("click", toLetters);

function toLetters() {
  //console.log("letters click");
  document.querySelector(".btn-letters").classList.add("btn-active");
  document.querySelector(".btn-notes").classList.remove("btn-active");
  const keysToToggle = document.querySelectorAll(".piano-key");
  keysToToggle.forEach(function (elem) {
    elem.classList.remove("notes-style");
    elem.classList.add("letters-style");
  });
}

notesButton.addEventListener("click", toButtons);

function toButtons() {
  //console.log("buttons click");
  document.querySelector(".btn-letters").classList.remove("btn-active");
  document.querySelector(".btn-notes").classList.add("btn-active");
  const keysToToggle = document.querySelectorAll(".piano-key");
  keysToToggle.forEach(function (elem) {
    elem.classList.remove("letters-style");
    elem.classList.add("notes-style");
  });
}

// letters/notes switch feature_END

// add full-screen feature_START
document
  .querySelector(".openfullscreen")
  .addEventListener("click", toggleFullScreen); // add EVENT-listener

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
// add full-screen feature_END
