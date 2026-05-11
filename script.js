import "./js/ui.js";
import "./js/storage.js";

/* =========================
View notes
========================= */
let notes = ["banana", "rasen mähen"];

window.renderNotes = function () {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";

  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    const note = notes[indexNote];

    contentRef.innerHTML += getNoteTemplate(note);
  }
};

function getNoteTemplate(note) {
  return `<p class="note">${note}</p>`;
}

/* =========================
add notes
========================= */

window.addNotes = function () {
  let noteInputRef = document.getElementById("note_Input");

  let noteInput = noteInputRef.value;

  notes.push(noteInput);

  renderNotes();

  noteInputRef.value = "";
};

// delete notes
// archives notes
