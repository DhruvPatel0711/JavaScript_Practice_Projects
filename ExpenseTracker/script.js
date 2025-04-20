// Access elements
const expenseNameInput = document.getElementById('expense-name');
const enterAmountInput = document.getElementById('enter-amount');
const expenseCategorySelect = document.getElementById('expense-category');
const dateInput = document.getElementById('Date');
const addExpenseButton = document.getElementById('btn');
const expenseListTableBody = document.querySelector('.expense-list');
let totalAmountDisplay = document.getElementById('total-amount');
let filter = document.getElementById("filter-category");

// Category totals
let totals = { Food: 0, Transport: 0, Entertainment: 0, Other: 0 };

// Calculate total amount
const calculateTotalAmount = () => {
    let total = 0;
    totals = { Food: 0, Transport: 0, Entertainment: 0, Other: 0 };
    expenseListTableBody.querySelectorAll("tr").forEach(row => {
        const price = parseFloat(row.querySelector("td:nth-child(2)").textContent.replace('₹', '').trim());
        const category = row.querySelector("td:nth-child(3)").textContent.trim();
        if (!isNaN(price)) {
            totals[category] += price || 0;
            total += price;
        }
    });
    return total;
};

// Add expense
addExpenseButton.addEventListener("click", () => {
    if (![expenseNameInput.value, enterAmountInput.value, expenseCategorySelect.value, dateInput.value].every(Boolean)) {
        alert("Please fill in all fields.");
        return;
    }

    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${expenseNameInput.value}</td>
        <td>₹${enterAmountInput.value}</td>
        <td>${expenseCategorySelect.value}</td>
        <td>${dateInput.value}</td>
        <td>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </td>`;
    expenseListTableBody.appendChild(tr);

    totalAmountDisplay.textContent = `₹${calculateTotalAmount()}`;
    [expenseNameInput.value, enterAmountInput.value, expenseCategorySelect.selectedIndex, dateInput.value] = ["", "", 0, ""];

    tr.querySelector(".edit").addEventListener("click", () => {
        expenseNameInput.value = tr.children[0].textContent;
        enterAmountInput.value = tr.children[1].textContent.replace('₹', '').trim();
        expenseCategorySelect.value = tr.children[2].textContent;
        dateInput.value = tr.children[3].textContent;
        tr.remove();
        totalAmountDisplay.textContent = `₹${calculateTotalAmount()}`;
    });

    tr.querySelector(".delete").addEventListener("click", () => {
        tr.remove();
        totalAmountDisplay.textContent = `₹${calculateTotalAmount()}`;
        filter.dispatchEvent(new Event("change"));
    });
});

// Filter expenses
filter.addEventListener("change", () => {
    let filteredTotal = 0;
    expenseListTableBody.querySelectorAll("tr").forEach(row => {
        const category = row.querySelector("td:nth-child(3)").textContent.trim();
        const amount = parseFloat(row.querySelector("td:nth-child(2)").textContent.replace('₹', '').trim());
        row.style.display = filter.value === "All" || filter.value === category ? "" : "none";
        if (filter.value === "All" || filter.value === category) filteredTotal += amount || 0;
    });
    totalAmountDisplay.textContent = `₹${filteredTotal}`;
});
