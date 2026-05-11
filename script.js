import './js/ui.js';
import './js/storage.js';



// View notes

/* =========================
View notes
========================= */
let notes = ['banana', 'rasen mähen'];

function renderNotes() {

    let contentRef = document.getElementById("content");

  for (let  i  = 0;  i  < array.length;  i ++) {
    const element = array[ i ];
      contentRef.innerHTML = notes;
  }
}

renderNotes();



// add notes
// delete notes
// archives notes