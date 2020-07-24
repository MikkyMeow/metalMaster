const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

//clear filed
function clear() {
  ctx.fillStyle = '#4d4d4d'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

//create string
function string(widthTop, widthBottom) {
  ctx.beginPath()
  ctx.strokeStyle = '#868686'
  ctx.moveTo(widthTop, 30)
  ctx.lineTo(widthBottom, canvas.height - 50)
  ctx.closePath()
  ctx.stroke()
}

//add strings in field
function addStrings() {
  string(canvas.width / 2 - 150, canvas.width / 2 - 150)
  string(canvas.width / 2 - 100, canvas.width / 2 - 100)
  string(canvas.width / 2 - 50, canvas.width / 2 - 50)
  string(canvas.width / 2, canvas.width / 2)
  string(canvas.width / 2 + 50, canvas.width / 2 + 50)
  string(canvas.width / 2 + 100, canvas.width / 2 + 100)
  string(canvas.width / 2 + 150, canvas.width / 2 + 150)
}

//create note
function Note(x, y, color) {
  this.x = x
  this.y = y
  this.fillColor = color
}

let notes = []

let redNote = {
  x: canvas.width / 2 - 125,
  color: 'red'
}
let limeNote = {
  x: canvas.width / 2 - 75,
  color: 'lime'
}
let yellowNote = {
  x: canvas.width / 2 - 25,
  color: 'yellow'
}
let blueNote = {
  x: canvas.width / 2 + 25,
  color: 'blue'
}
let orangeNote = {
  x: canvas.width / 2 + 75,
  color: 'orange'
}
let purpleNote = {
  x: canvas.width / 2 + 125,
  color: 'purple'
}

function addNote(objNote) {
  let note = new Note(objNote.x, 50, objNote.color)
  notes.push(note)
}

addEventListener('keydown', function(e) {
  console.log(e.keyCode);
  if(e.keyCode === 65) {
    addNote(redNote)
  }
  if(e.keyCode === 83) {
    addNote(limeNote)
  }
  if(e.keyCode === 68) {
    addNote(yellowNote)
  }
  if(e.keyCode === 74) {
    addNote(blueNote)
  }
  if(e.keyCode === 75) {
    addNote(orangeNote)
  }
  if(e.keyCode === 76) {
    addNote(purpleNote)
  }
})

function loop() {
  clear()
  addStrings()

  for (let i = 0; i < notes.length; i++) {
    let note = notes[i]
    
    if (note.y < canvas.height) {
      note.y += 10
    }
    ctx.beginPath()
    ctx.fillStyle = note.fillColor
    ctx.arc(note.x, note.y, 20, 0, Math.PI*2)
    ctx.stroke()
    ctx.fill()
  }
  setTimeout("loop()", 20)
}

loop()
