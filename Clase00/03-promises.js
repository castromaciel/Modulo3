const heroes = [
  {id: 1, name: 'Iron man'},
  {id: 2, name: 'Batman'},
  {id: 3, name: 'Spider Man'},
]

const getHeroes = () => {
  return new Promise((resolve, reject) => {
    
    // if (users.length) {
    //   reject(new Error('No users'))
    // }

    if (heroes.length === 0) {
      reject(new Error('No se encontraron resultados'))
    }
    
    setTimeout(() => {
      resolve(heroes)
    }, 1500)})

}

getHeroes()
  .then(heroes => console.log(heroes))
  .catch(error => console.error(error))
  .finally(() => console.log('La petición ya finalizó'))

