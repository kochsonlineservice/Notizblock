import "./js/ui.js";
import "./js/storage.js";
import "./js/ui.js";
import "./js/storage.js";

/* =========================
View notes
========================= */

let notes = ["banana", "kartoffeln", "apfel", "Kiwi"];

window.renderNotes = function () {

  let contentRef = document.getElementById("content");

  contentRef.innerHTML = "";

  for (let indexNote = 0; indexNote < notes.length; indexNote++) {

    contentRef.innerHTML += getNoteTemplate(indexNote);
  }
};

function getNoteTemplate(indexNote) {

  return `
    <p class="note">
      ${notes[indexNote]}
      <button class="delete" onclick="deleteNote(${indexNote})">
        X
      </button>
    </p>
  `;
}

/* =========================
add notes
========================= */

window.addNotes = function () {

  let noteInputRef = document.getElementById("note_Input");

  let noteInput = noteInputRef.value;

  if (noteInput.trim() == "") {
    return;
  }

  notes.push(noteInput);

  renderNotes();

  noteInputRef.value = "";
};

/* =========================
delete notes
========================= */

window.deleteNote = function (indexNote) {

  notes.splice(indexNote, 1);

  renderNotes();
};
