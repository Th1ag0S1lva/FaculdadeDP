const femininosList = document.getElementById("femininos-list");
const masculinosList = document.getElementById("masculinos-list");

// Função para buscar perfumes
function fetchPerfumes(genero, container) {
    fetch(`/api/perfumes?genero=${genero}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar perfumes');
            }
            return response.json();
        })
        .then(data => renderPerfumes(data, container))
        .catch(error => console.error('Erro ao buscar perfumes:', error));
}

// Função para renderizar os perfumes
function renderPerfumes(lista, container) {
    container.innerHTML = ''; // Limpa o container antes de renderizar
    if (lista.length === 0) {
        container.innerHTML = '<p>Nenhum perfume encontrado.</p>';
        return;
    }

    lista.forEach(perfume => {
        const perfumeItem = document.createElement("div");
        perfumeItem.classList.add("perfume-item");

        // Caminho correto para a imagem baseado no gênero do perfume
        const caminhoImagem = perfume.Genero === 'M' 
            ? `/${perfume.Imagem}`  // Para perfumes masculinos
            : `/${perfume.Imagem}`; // Para perfumes femininos

        // Criando a tag <img> e atribuindo o caminho da imagem
        const imagem = document.createElement("img");
        imagem.src = caminhoImagem; // Aqui usamos o caminho correto
        imagem.alt = perfume['Nome do Perfume']; // Nome do perfume como alt
        imagem.width = 225;
        imagem.height = 225;
        imagem.style.cursor = "pointer";

        // Nome do perfume
        const titulo = document.createElement("h3");
        const tituloStrong = document.createElement("strong");
        tituloStrong.textContent = perfume['Nome do Perfume']; // Nome do perfume
        titulo.appendChild(tituloStrong);

        // Adiciona a imagem e o nome ao item do perfume
        perfumeItem.appendChild(imagem);
        perfumeItem.appendChild(titulo);

        // Adiciona uma ação de clique para redirecionar para a página de detalhes
        perfumeItem.onclick = () => {
            window.location.href = `/detalhes.html?nome=${perfume['Nome do Perfume']}&imagem=${perfume.Imagem}&valores=${JSON.stringify([perfume.Valor])}`;
        };

        container.appendChild(perfumeItem);
    });
}

// Fetch dos perfumes
fetchPerfumes('F', femininosList); // Ajuste o gênero conforme necessário
fetchPerfumes('M', masculinosList); // Ajuste o gênero conforme necessário
