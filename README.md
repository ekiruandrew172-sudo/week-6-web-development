# SpendWise Budget Tracker

## Project Description

SpendWise is a simple budget and expense tracking application designed to help users manage their spending.

This week, the project was improved from a basic visual dashboard into an interactive application. Users can now enter expenses through a form, store multiple expenses, view their expenses in a table, and see their total expenses and remaining balance automatically updated.

## Improvements Made This Week

The following improvements were made to SpendWise:

* Added an interactive Add Expense form.
* Added JavaScript event handling.
* Added an array to store multiple expenses.
* Added expense objects containing name, amount, and category.
* Added conditional statements for input validation.
* Added automatic calculation of total expenses.
* Added automatic calculation of the remaining balance.
* Added DOM manipulation to update the dashboard.
* Added dynamic expense table updates.
* Added validation messages for incorrect input.
* Added budget balance status using conditional statements.

## How Conditionals Are Used

Conditional statements are used to validate user input and monitor the remaining budget.

For example:

```javascript
if (name === "") {
    message.textContent = "Please enter an expense name.";
}
```

Conditionals are also used to determine the status of the remaining balance:

```javascript
if (remainingBalance < 0) {
    balanceDisplay.style.color = "red";
} else if (remainingBalance <= 2000) {
    balanceDisplay.style.color = "orange";
} else {
    balanceDisplay.style.color = "green";
}
```

This allows SpendWise to respond differently depending on the user's financial situation.

## How Arrays Are Used

An array called `expenses` is used to store multiple expense records.

```javascript
let expenses = [];
```

When the user adds an expense, an expense object is created and added to the array using `push()`:

```javascript
const expense = {
    name: name,
    amount: amount,
    category: category
};

expenses.push(expense);
```

The array allows the application to keep track of multiple expenses instead of only one expense.

## How the DOM Is Updated

The Document Object Model (DOM) is used to update the webpage whenever the user adds an expense.

For example, JavaScript updates the total budget:

```javascript
budgetDisplay.textContent =
    "KSh " + budget.toFixed(2);
```

The expense table is also updated dynamically using `createElement()` and `appendChild()`:

```javascript
const row = document.createElement("tr");

row.innerHTML = `
    <td>${expense.name}</td>
    <td>KSh ${expense.amount.toFixed(2)}</td>
    <td>${expense.category}</td>
`;

expenseList.appendChild(row);
```

This means the webpage changes automatically without the user having to refresh it.

## How User Interactions Are Handled Through Events

SpendWise uses an event listener to detect when the user submits the Add Expense form.

```javascript
expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Process the expense
});
```

The `submit` event is triggered when the user clicks the Add Expense button.

The `event.preventDefault()` method prevents the browser from refreshing the page.

JavaScript then collects the user's input, validates it, stores the expense, updates the table, and recalculates the dashboard.

## Budget Calculations

SpendWise calculates total expenses by adding the amounts stored in the expenses array.

```javascript
function calculateTotalExpenses() {

    let total = 0;

    expenses.forEach(function(expense) {
        total += expense.amount;
    });

    return total;
}
```

The remaining balance is calculated by subtracting total expenses from the budget:

```javascript
function calculateRemainingBalance() {

    const totalExpenses = calculateTotalExpenses();

    return budget - totalExpenses;
}
```

## Challenges Encountered and Solutions

### Challenge 1: Updating the Expense Table

One challenge was displaying newly added expenses without manually editing the HTML.

**Solution:** JavaScript DOM methods such as `createElement()`, `innerHTML`, and `appendChild()` were used to create and display new table rows automatically.

### Challenge 2: Validating User Input

Another challenge was preventing empty expense names and invalid or negative amounts from being added.

**Solution:** Conditional statements were used to check the user's input before adding an expense to the array.

### Challenge 3: Keeping the Balance Updated

The remaining balance needed to change whenever a new expense was added.

**Solution:** Functions were created to calculate the total expenses and remaining balance. These functions are called every time a new expense is submitted.

### Challenge 4: Preventing Page Refresh

Submitting the form normally causes the browser to refresh the page.

**Solution:** The `submit` event listener uses `event.preventDefault()` so the application can process the data without refreshing the page.

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Git
* GitHub

## Project Structure

```text
SpendWise/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run the Project

1. Clone or download the SpendWise repository.
2. Open the project folder.
3. Make sure all four files are in the same folder.
4. Open `index.html` in a web browser.
5. Enter an expense name.
6. Enter the expense amount.
7. Select an expense category.
8. Click **Add Expense**.
9. Check the expense table and dashboard.
10. Open the browser Developer Tools and select **Console** to view the JavaScript output.

## Testing

The application was tested by:

* Adding multiple expenses.
* Testing different expense categories.
* Testing valid expense amounts.
* Testing empty expense names.
* Testing invalid expense amounts.
* Checking that expenses appear in the table.
* Checking that total expenses update correctly.
* Checking that the remaining balance updates correctly.
* Checking that conditional balance indicators work.
* Checking that the page does not refresh when an expense is submitted.
* Checking the browser console for correctly labeled results.

## Submission

The final project contains:

* `index.html`
* `style.css`
* `script.js`
* `README.md`

The project should be pushed to a **public GitHub repository**.

The GitHub repository link should then be copied and submitted through the LMS.

## Author

SpendWise Budget Tracker Project
