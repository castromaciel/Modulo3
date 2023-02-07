
// fetch("https://rickandmortyapi.com/api/character")
//   .then(res => res.json())
  // .then(data => {

  //   let container = document.getElementById("container")
    
  //   data.results.forEach((character) => {
  //     const img = document.createElement('img')
  //     img.src = character.image

  //     container.appendChild(img)
  //   })

//   })


const fetchRickAndMortyCharacters = async () => {

  const response = await fetch("https://rickandmortyapi.com/api/character")
  const data = await response.json()

  return data

}

fetchRickAndMortyCharacters()
  .then(data => {

    let container = document.getElementById("container")
    // TODO: Crear funcion que genere las cards de los personajes
    data.results.forEach((character) => {
      const img = document.createElement('img')
      img.src = character.image

      container.appendChild(img)
    })
  })


// const getCharacters = async () => {
//   const response = await fetch("https://rickandmortyapi.com/api/character")
//   const characters = await response.json()

//   return characters
// }

// getCharacters().then(data => console.log(data))

// async function showCharacters() {

//   // leer nuestro JSON
//   const response = await fetch("https://rickandmortyapi.com/api/character");
//   const data = await response.json();

//   data.results.forEach((character) => {
//     const img = document.createElement('img');
//     img.src = character.image;
//     document.body.append(img);
//   })

//   // espera 3 segundos
//   await new Promise((resolve, reject) => setTimeout(resolve, 3000));

// }

// showCharacters();