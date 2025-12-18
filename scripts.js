const amount = document.getElementById("amount")

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
