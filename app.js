//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomePessoas = [];

const adicionarListaAoBody = () => {
    let elementList = document.querySelector("#listaAmigos");
    elementList.innerHTML = "";

    nomePessoas.forEach(pessoa => {
        let li = document.createElement('li');
        li.innerHTML = pessoa;
        elementList.appendChild(li);
    });
};

const adicionarAmigo = () => {
    let campoAmigo = document.querySelector('.input-name');
    const amigo = campoAmigo.value.trim();

    
    if (!amigo) {
        alert('Por favor, insira um nome!');
    } else if (nomePessoas.includes(amigo)) {
        alert('Esse nome já foi adicionado!');
    } else {
        nomePessoas.push(amigo);
        adicionarListaAoBody();
    }

    campoAmigo.value = ""; 
};

const gerarNumeroAleatorio = () => Math.floor(Math.random() * nomePessoas.length);

function sortearAmigo() {
    let sorteado = document.querySelector("#resultado");
    sorteado.innerHTML = '';

    if (nomePessoas.length === 0) {
        alert('Não há amigos disponíveis');
    } else {
        const indice = gerarNumeroAleatorio();
        sorteado.innerHTML = `Amigo sorteado: ${nomePessoas[indice]}!!!`;
        dispararConfete();
    }

    
    nomePessoas = [];
    adicionarListaAoBody();
}

function dispararConfete() {
    var count = 200;
    var defaults = {
        origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
        confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio)
        });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
}
