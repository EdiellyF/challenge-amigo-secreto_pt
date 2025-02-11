//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomePessoas = [];


const adicionarListaAoBody = () => {
    let elementList = document.querySelector("#listaAmigos");
    elementList.innerHTML = "";
 
    nomePessoas.forEach(pessoa =>  {
        let li = document.createElement('li');
        li.innerHTML = pessoa;
        elementList.appendChild(li)
    })
 }

 
const adicionarAmigo = () => {
   let campoAmigo = document.querySelector('.input-name');
   const amigo = campoAmigo.value.trim();
  
    if(!amigo){
        alert('Por favor, insira um nome!')
    } else {
        nomePessoas.push(amigo)
        adicionarListaAoBody()

    }

    campoAmigo.value = "";
}

const gerarNumeroAleatorio = () =>  Math.floor(Math.random() * nomePessoas.length);

function sortearAmigo() {
    let sorteado = document.querySelector("#resultado");
    sorteado.innerHTML = '';
    if(nomePessoas.length === 0){
       alert('não há amigos disponiveis')
    } else {
        const indice  =  gerarNumeroAleatorio()
        sorteado.innerHTML = `Amigo sorteado ${nomePessoas[indice]}!!!`
    }
}

 

