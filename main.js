let number = document.getElementById('number')
let incremento = document.getElementById('incremento')
let incremento10 = document.getElementById('incremento10')
let incremento100 = document.getElementById('incremento100')
let incremento1000 = document.getElementById('incremento1000')
let decremento = document.getElementById('decremento')
let decremento10 = document.getElementById('decremento10')
let decremento100 = document.getElementById('decremento100')
let decremento1000 = document.getElementById('decremento1000')
let zero = document.getElementById('zero')
let contador = 0

number.innerHTML = contador

incremento.addEventListener('click', function () {
  contador++

  number.innerHTML = contador
})

incremento10.addEventListener('click', function () {
  contador += 10

  number.innerHTML = contador
})

incremento100.addEventListener('click', function () {
  contador += 100

  number.innerHTML = contador
})

incremento1000.addEventListener('click', function () {
  contador += 1000

  number.innerHTML = contador
})

zero.addEventListener('click', function () {
  contador = 0

  number.innerHTML = contador
})

decremento.addEventListener('click', function () {
  contador--
  number.innerHTML = contador
})

decremento10.addEventListener('click', function () {
  contador -= 10
  number.innerHTML = contador
})

decremento100.addEventListener('click', function () {
  contador -= 100
  number.innerHTML = contador
})

decremento1000.addEventListener('click', function () {
  contador -= 1000
  number.innerHTML = contador
})
