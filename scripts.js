const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")

const expenseList = document.querySelector("ul")
const expenseQuantity = document.querySelector("aside header p span")
const expenseTotal = document.querySelector("aside header h2")

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

    clearForm()
    
    updateTotals()
  } catch (error) {
    alert("Não foi possível atualizar a lista de despesas.")
    console.log(error)
  }
}

function updateTotals() {
  try {
    const items = expenseList.children

    expenseQuantity.textContent = `${items.length} despesa(s)`

    let total = 0

    for (let index = 0; index < items.length; index++) {
      const itemAmount = items[index].querySelector(".expense-amount")
      let value = itemAmount.textContent.replace(/[^\d,]/g, "").replace(",", ".")

      value = parseFloat(value)

      if (isNaN(value)) {
        return alert("Não foi possível calcular o total. O valor não parece ser um número.")
      }

      total += Number(value)
    }

    const symbol = document.createElement("small")
    symbol.textContent = "R$"

    total = formatCurrencyBRL(total).toUpperCase().replace("R$", "")

    expenseTotal.replaceChildren()
    expenseTotal.append(symbol, total)
  } catch (error) {
    console.log(error)
    alert("Não foi possível atualizar os totais.")
  }
}

expenseList.addEventListener("click", event => {
  if (event.target.classList.contains("remove-icon")) {
    const item = event.target.closest(".expense")
    item.remove()
  }

  updateTotals()
})

function clearForm() {
  expense.value = ""
  category.value = ""
  amount.value = ""

  expense.focus()
}