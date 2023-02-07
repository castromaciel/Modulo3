const auto = {
  marca: 'Renault',
  modelo: '19',
  color: 'gris',
  rodado: '14',
}

const { color, rodado } = auto
console.log(`${color} ${rodado}`)


const alumnos = ['Paolo', 'Facundo', 'Nico', 'Cristhian']

// const alumno1 = alumnos[0]
// const alumno2 = alumnos[1]
// const alumno3 = alumnos[2]

const [,,,alumno4] = alumnos

// console.log(alumno4)
// console.log(estoEsUnaVariableCualquiera)

// const result = alumnos.find( (alumno) => {
//   return alumno === 'facundo'
// })

// console.log(result)

const numeros = [1,3,5]

const numerosAlCuadrado = numeros.map((num) => num * num)

// console.log(numerosAlCuadrado)

// const heroes = [
//   {id: 1, name: 'Iron man'},
//   {id: 2, name: 'Batman'},
//   {id: 3, name: 'Spider Man'},
// ]

// console.log(heroes)

// heroes.forEach((heroe) => {
//   console.log(heroe.name)
// })
console.log('------------------------------------------------')

const isActive = false
const hour = 12

isActive
  ? console.log('Estoy activo 😎')
  : hour > 12
    ? console.log('Estoy mimido')
    : console.log('No estoy activo')