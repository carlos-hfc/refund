const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")

const expenseList = document.querySelector("ul")

amount.oninput = () => {
  let value = amount.value.replace(/\D+/g, "")

  value = Number(value) / 100

  amount.value = formatCurrencyBRL(value)
}

function formatCurrencyBRL(value) {
  return value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
  })
}

form.onsubmit = event => {
  event.preventDefault()

  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    categoryId: category.value,
    categoryName: category.options[category.selectedIndex].text,
    amount: amount.value,
    createdAt: new Date()
  }

  addExpense(newExpense)
}

function addExpense(expense) {
  try {
    const expenseItem = document.createElement("li")
    expenseItem.classList.add("expense")

    const expenseIcon = document.createElement("img")
    expenseIcon.src = `./img/${expense.categoryId}.svg`
    expenseIcon.alt = expense.categoryName

    const expenseInfo = document.createElement("div")
    expenseInfo.classList.add("expense-info")

    const expenseName = document.createElement("strong")
    expenseName.textContent = expense.expense

    const expenseCategory = document.createElement("span")
    expenseCategory.textContent = expense.categoryName

    expenseInfo.append(expenseName, expenseCategory)

    const expenseSymbol = document.createElement("small")
    expenseSymbol.textContent = "R$"

    const expenseAmount = document.createElement("span")
    expenseAmount.classList.add("expense-amount")
    expenseAmount.append(expenseSymbol, expense.amount.toUpperCase().replace("R$", ""))

    const removeIcon = document.createElement("img")
    removeIcon.classList.add("remove-icon")
    removeIcon.src = "./img/remove.svg"
    removeIcon.alt = "Remover item"

    expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon)

    expenseList.append(expenseItem)
  } catch (error) {
    alert("Não foi possível atualizar a lista de despesas.")
    console.log(error)
  }
}