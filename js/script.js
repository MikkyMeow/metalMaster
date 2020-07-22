let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let height = 100

function note() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  function button(x, y, color) {
    ctx.fillStyle = color
    ctx.fillRect(x, y, 50, 50)
  }
  
  let red = button(canvas.width / 2 - 250, canvas.height - 100, 'lime')
  
  addEventListener('click', function(e) {
    if (e.keyCode === 37) {
      if (height > canvas.height - 105 && height < canvas.height - 45) {
        height = 500
      } 
    }
  })

  function line() {
    ctx.beginPath()
    ctx.moveTo(canvas.width / 2 - 225, 100)
    ctx.lineTo(canvas.width / 2 - 225, canvas.height - 100)
    ctx.closePath()
    ctx.stroke()
  }
  
  line()
  
  ctx.beginPath()
  ctx.arc(canvas.width / 2 - 225, height, 20, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fill()
  if (height < canvas.height) {
    height += 5
  } else {
    height = 100
  }
  setTimeout(note, 10)
}

note()
