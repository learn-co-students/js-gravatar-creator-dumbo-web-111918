document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)

  const input = document.querySelector("#identicon-form > div > input")
  input.addEventListener("keydown", clearGrav)
})
