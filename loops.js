const lugaresQueVisitei = ['Rio de janeiro', 'Grécia', 'Estados Unidos', 'Flórida'];

for(let i = 0; i < lugaresQueVisitei.length; i++){
    console.log(`Já fui para o ${lugaresQueVisitei[i]}, foi incrivel!`)
}

const lugaresAmiguinhos = ['Santa Catarina', 'Rio de janeiro', 'Argentina', 'Fóz do Iguaçu']

const lugaresEmComum = []

for (let i = 0; i < lugaresQueVisitei.length; i++) {
    for (let j = 0; j < lugaresAmiguinhos.length; j++) {
      if (lugaresQueVisitei[i] === lugaresAmiguinhos[j]) {
        lugaresEmComum.push(lugaresQueVisitei[i]);
      }
    }
  }
console.log(lugaresEmComum)

const amigosDoFace = ['Bordinassi', 'Gabriel', 'Giovanna']
const amigosDoFaceDoKaian = ['Bordinassi', 'Gabriel', 'André', 'Marco']
const amigosEmComum = []

for (let i = 0; i < amigosDoFace.length; i++) {
    for (let j = 0; j < amigosDoFaceDoKaian.length; j++) {
      if (amigosDoFace[i] === amigosDoFaceDoKaian[j]) {
        amigosEmComum.push(amigosDoFace[i]);
      }
    }
  }
  
console.log(amigosEmComum)

const SecretNumber = 4
let tentativa = 0

while (tentativa != 5){
    let PalpiteAtual = parseInt(window.prompt('Adivinhe um número: '))
    if(tentativa == 4){
        console.log('Não houveram vençedores, seus horriveis')
        break
    }
    else if(PalpiteAtual == SecretNumber){
        console.log('Ganhou')
        break
    }else if(PalpiteAtual != SecretNumber){
        tentativa ++
    }         
}
    