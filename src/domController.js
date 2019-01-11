function updateDOM(obj) {
  let c = 0
  let r = 0
  let blockColor = `rgb(${obj.hash[0]}, ${obj.hash[1]}, ${obj.hash[2]})`
  for (let i = 0; i < obj.hash.length-1; i++) {
    let number = obj.hash[i]
    if (r === 5) {
      c++
      r = 0
    }
    if (number % 2 === 0) {
      document.getElementById(`${r}-${c}`).style.backgroundColor = blockColor
    }
    r++
  }
  clone(obj.hash, blockColor)
}

function clone (array, color) {
	let c = 4
  	let r = 0
	for (let i = 0; i < 10; i++) {
		let number = array[i]
	    if (r === 5) {
	      c--
	      r = 0
	    }
	    if (number % 2 === 0) {
	      document.getElementById(`${r}-${c}`).style.backgroundColor = color
	    }
	    r++
	}
}