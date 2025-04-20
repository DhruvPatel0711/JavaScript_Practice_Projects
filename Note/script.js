const btn = document.querySelector(".btn");
let counter = 0;

btn.addEventListener("click", () => {

    const note = document.createElement("div");
    note.classList.add("note1");

    const save = document.createElement("button");
    save.textContent = "Save";

    const remove = document.createElement("button");
    remove.textContent = "Remove";

    const text = document.createElement("textarea");

    counter++;
    text.id = "note-text-" + counter;
    text.name = "noteText-" + counter;
    text.placeholder = "Type Here";
    text.rows = 10;
    text.cols = 20;

    // Append elements to note
    note.append(save, remove, text);

    // Append note to the note container
    document.querySelector(".note-container").append(note);

    // Remove note when the remove button is clicked
    remove.addEventListener("click", () => {
        note.remove();
    });
});
