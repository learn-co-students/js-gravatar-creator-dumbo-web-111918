function handleSubmit(e) {

  if (e.target[0].value === "") {
    clearGrav()
    return false
  }

  e.preventDefault()

  let check;

  const iden = new Identicon(e.target[0].value)
  // column 1 & 5
  for (let i = 0; i < 15; i++) {
    col1 = document.getElementById(`${i}-0`)
    col5 = document.getElementById(`${i}-4`)

    col2 = document.getElementById(`${i-5}-1`)
    col4 = document.getElementById(`${i-5}-3`)

    col3 = document.getElementById(`${i-10}-2`)

    check = iden.hashed[i] % 2 === 0
    if (!check) {
      if (i < 5) {
        col1.style.background = iden.color
        col5.style.background = iden.color
      } else if (i >= 5 && i < 10) {
        col2.style.background = iden.color
        col4.style.background = iden.color
      } else if (i >= 10) {
        col3.style.background = iden.color
      }
    }
  }
  return true
}

function clearGrav() {
  let allSq = document.querySelectorAll("#identicon > span")
  allSq.forEach(e => e.style.background = "")
}
