// ========================================
// SpendWise Budget Tracker
// Week 6 JavaScript
// ========================================

// ----------------------------------------
// APPLICATION DATA
// ----------------------------------------

let budget = 10000;

// Array used to store expense data
let expenses = [];

// ----------------------------------------
// DOM ELEMENTS
// ----------------------------------------

const expenseForm = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");

const budgetDisplay = document.getElementById("budget-display");
const expenseDisplay = document.getElementById("expense-display");
const balanceDisplay = document.getElementById("balance-display");

const message = document.getElementById("message");

// ----------------------------------------
// CALCULATE TOTAL EXPENSES
// ----------------------------------------

function calculateTotalExpenses() {

```
let total = 0;

expenses.forEach(function(expense) {
    total += expense.amount;
});

return total;
```

}

// ----------------------------------------
// CALCULATE REMAINING BALANCE
// ----------------------------------------

function calculateRemainingBalance() {

```
const totalExpenses = calculateTotalExpenses();

return budget - totalExpenses;
```

}

// ----------------------------------------
// UPDATE DASHBOARD
// ----------------------------------------

function updateDashboard() {

```
const totalExpenses = calculateTotalExpenses();
const remainingBalance = calculateRemainingBalance();

budgetDisplay.textContent =
    "KSh " + budget.toFixed(2);

expenseDisplay.textContent =
    "KSh " + totalExpenses.toFixed(2);

balanceDisplay.textContent =
    "KSh " + remainingBalance.toFixed(2);


// Conditional statement
if (remainingBalance < 0) {

    balanceDisplay.style.color = "red";

} else if (remainingBalance <= 2000) {

    balanceDisplay.style.color = "orange";

} else {

    balanceDisplay.style.color = "green";
}


// Display results in console
console.log("========== SpendWise ==========");
console.log("Budget: KSh " + budget.toFixed(2));
console.log("Total Expenses: KSh " + totalExpenses.toFixed(2));
console.log("Remaining Balance: KSh " + remainingBalance.toFixed(2));
console.log("===============================");
```

}

// ----------------------------------------
// DISPLAY EXPENSES
// ----------------------------------------

function displayExpenses() {

```
// Clear the existing table
expenseList.innerHTML = "";


// Use the array to display each expense
expenses.forEach(function(expense) {

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${expense.name}</td>
        <td>KSh ${expense.amount.toFixed(2)}</td>
        <td>${expense.category}</td>
    `;

    expenseList.appendChild(row);
});
```

}

// ----------------------------------------
// HANDLE FORM SUBMISSION
// ----------------------------------------

expenseForm.addEventListener("submit", function(event) {

```
// Prevent the page from refreshing
event.preventDefault();


// Collect user input
const name = document.getElementById("expense-name").value.trim();

const amount = parseFloat(
    document.getElementById("expense-amount").value
);

const category =
    document.getElementById("expense-category").value;


// Conditional validation
if (name === "") {

    message.textContent = "Please enter an expense name.";
    message.style.color = "red";
    return;
}


if (isNaN(amount) || amount <= 0) {

    message.textContent =
        "Please enter a valid expense amount.";

    message.style.color = "red";
    return;
}


if (category === "") {

    message.textContent =
        "Please select an expense category.";

    message.style.color = "red";
    return;
}


// Create an expense object
const expense = {
    name: name,
    amount: amount,
    category: category
};


// Add expense object to the array
expenses.push(expense);


// Update the webpage
displayExpenses();

updateDashboard();


// Display success message
message.textContent =
    "Expense added successfully!";

message.style.color = "green";


// Clear the form
expenseForm.reset();
```

});

// ----------------------------------------
// INITIAL DISPLAY
// ----------------------------------------

updateDashboard();
