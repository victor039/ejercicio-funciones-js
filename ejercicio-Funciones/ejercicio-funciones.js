function devuelveTrue(){return true;}



async function Promesa(){
    return  setTimeout(() => console.log("Saludos, soy una promesa"))
    
}

function* generadorIndice() {
    let indice = 0

    while (true) {
      yield indice
      indice += 2
    }
  }
  