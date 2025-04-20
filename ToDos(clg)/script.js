const ToDoNameInput = document.getElementById("ToDo-name");
const ToDoCategorySelect = document.getElementById("expense-category");
const DueDateInput = document.getElementById("Due");
const addToDoButton = document.getElementById("btn");
const ToDoListTableBody = document.querySelector(".ToDo-list");
const filter = document.getElementById("filter-category");

addToDoButton.addEventListener("click", () => {
    if (![ToDoNameInput.value, ToDoCategorySelect.value, DueDateInput.value].every(Boolean)) {
        alert("Please fill in all fields.");
        return;
    }

    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${ToDoNameInput.value}</td>
        <td>${ToDoCategorySelect.value}</td>
        <td>${new Date().toLocaleString()}</td>
        <td>${DueDateInput.value}</td>
        <td>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </td>`;
    ToDoListTableBody.appendChild(tr);

    ToDoNameInput.value = "";
    ToDoCategorySelect.selectedIndex = 0;
    DueDateInput.value = "";

    tr.querySelector(".edit").addEventListener("click", () => {
        ToDoNameInput.value = tr.children[0].textContent;
        ToDoCategorySelect.value = tr.children[1].textContent;
        DueDateInput.value = tr.children[3].textContent;
        tr.remove();
    });

    tr.querySelector(".delete").addEventListener("click", () => {
        tr.remove();
    });

    
    filter.addEventListener("change", () => {
        if (filter.value === "Duedate") {

            const rows = Array.from(ToDoListTableBody.querySelectorAll("tr"));

            rows.sort((a, b) => {
                const dueDateA = new Date(a.cells[3].textContent); 
                const dueDateB = new Date(b.cells[3].textContent);

                if (isNaN(dueDateA) || isNaN(dueDateB)) return 0; 
                return dueDateA - dueDateB; 
            });
            rows.forEach(row => ToDoListTableBody.appendChild(row));

        } else {
            ToDoListTableBody.querySelectorAll("tr").forEach(row => {
                const category = row.querySelector("td:nth-child(2)").textContent.trim();
                row.style.display = filter.value === "All" || filter.value === category ? "" : "none";
            });
        }
    });
});

