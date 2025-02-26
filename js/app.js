let jogosAlugados = 0;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    
    // Se gameClicado for null, evita erro e mostra no console
    if (!gameClicado) {
        console.error(`Elemento com ID game-${id} não encontrado.`);
        return;
    }

    let imagemContainer = gameClicado.querySelector('.dashboard__item__img'); // Selecionando a div que contém a imagem
    let botao = gameClicado.querySelector('.dashboard__item__button'); // Selecionando o botão correto

    if (!imagemContainer || !botao) {
        console.error("Erro ao buscar elementos internos do jogo.");
        return;
    }

    if (imagemContainer.classList.contains('dashboard__item__img--rented')) {
        let confirmar = confirm("Você clicou em 'Devolver'. Tem certeza?");
        if (!confirmar) return;

        imagemContainer.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        jogosAlugados--;
    } else {
        let confirmar = confirm("Você clicou em 'Alugar'. Tem certeza?");
        if (!confirmar) return;

        imagemContainer.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;
    }

    contarEExibirJogosAlugados();
}