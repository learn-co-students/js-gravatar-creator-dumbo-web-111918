function handleSubmit(e) {
  e.preventDefault()
  removeDomStyles()
  let text = e.target[0].value
  if (text.length) {
    let identicon = new Identicon(text)
    updateDOM(identicon)
  }
}

function removeDomStyles() {
  let spans = document.querySelectorAll("span")
  console.log(spans)
  spans.forEach(e => e.style.backgroundColor = "")
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
})
