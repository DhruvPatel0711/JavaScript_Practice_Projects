const add = document.querySelector(".btn1");
const link = document.querySelector(".text");
const deleteAll = document.querySelector(".btn2");
const bookmarkContainer = document.querySelector(".bookmarkContainer");

add.addEventListener("click", () => {
    bookmarkContainer.style.display = "block";
    const bookmark = document.createElement("div"); // Create a new container for each bookmark
    let text = document.createElement("input");
    let edit = document.createElement("button");
    let remove = document.createElement("button");

    // Initial properties
    text.setAttribute("readonly", true);
    edit.textContent = "Edit";
    remove.textContent = "Delete";

    // Styling
    bookmark.style.display = "flex";
    bookmark.style.gap = "0.5rem";
    bookmark.style.margin = "0.5rem 0.5rem";

    // Append elements to the bookmark div
    bookmark.appendChild(text);
    bookmark.appendChild(edit);
    bookmark.appendChild(remove);

    // Append the bookmark div to the container
    bookmarkContainer.appendChild(bookmark);

    // Set input value

    // Edit functionality
    edit.addEventListener("click", () => {
        if (!text.hasAttribute("readonly")) {
            text.setAttribute("readonly", true);
            edit.textContent = "Edit";
        } else {
            text.removeAttribute("readonly");
            edit.textContent = "Save";
        }
    });

    // Remove functionality
    remove.addEventListener("click", () => {
        bookmark.remove(); // Removes the specific bookmark
    });

    // Clear the input field after adding
    link.value = "";
});

// Delete All functionality
deleteAll.addEventListener("click", () => {
    bookmarkContainer.innerHTML = ""; // Clear all bookmarks
    bookmarkContainer.style.display = "none"; // Optionally hide the container
});
