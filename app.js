// Lista onde os nomes serão armazenados
const listaDeAmigos = [];

// Adicionar um nome à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    // Validação: campo não pode estar vazio
    if (nome === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    // Adiciona o nome à lista e limpa o campo
    listaDeAmigos.push(nome);
    input.value = '';

    // Atualiza a exibição da lista
    atualizarLista();
}

// Atualizar a lista de amigos
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa lista atual

    // Cria um item para cada nome
    listaDeAmigos.forEach((nome) => {
        const item = document.createElement('li');
        item.textContent = nome;
        lista.appendChild(item);
    });
}

// Sortear um amigo aleatoriamente
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa resultado anterior

    // Verifica se há nomes suficientes
    if (listaDeAmigos.length === 0) {
        alert('Adicione pelo menos um nome para sortear.');
        return;
    }

    // Gera um número aleatório com base no tamanho da lista
    const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    const nomeSorteado = listaDeAmigos[indiceSorteado];

    // Exibe o resultado
    const itemResultado = document.createElement('li');
    itemResultado.textContent = `🎉 O amigo secreto é: ${nomeSorteado}!`;
    resultado.appendChild(itemResultado);
}
