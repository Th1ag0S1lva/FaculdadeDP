const femininos = [
    { nome: "Lady Million", tamanhos: ["25ml", "50ml", "100ml"], valores: [50, 100, 150], imagem: "IMGPerfumes/F/Lady Million.jpeg" },
    { nome: "Angel", tamanhos: ["25ml", "50ml", "100ml"], valores: [50, 100, 150], imagem: "IMGPerfumes/F/Angel.jpeg" },
    { nome: "Chloe", tamanhos: ["25ml", "50ml", "100ml"], valores: [50, 100, 150], imagem: "IMGPerfumes/F/Chloe.webp" },
    { nome: "Gabriela Sabatini", tamanhos: ["25ml", "50ml", "100ml"], valores: [50, 100, 150], imagem: "IMGPerfumes/F/Gabriela Sabatini.jpeg" },
    { nome: "Good Girl", tamanhos: ["25ml", "50ml", "100ml"], valores: [50, 100, 150], imagem: "IMGPerfumes/F/Good Girl.jpeg" },
    { nome: "Amor Amor", tamanhos: ["25ml", "50ml", "100ml"], valores: [50, 100, 150], imagem: "IMGPerfumes/F/Amor Amor.jpeg" },
    { nome: "Scandal", tamanhos: ["25ml", "50ml", "100ml"], valores: [50, 100, 150], imagem: "IMGPerfumes/F/Scandal.jpeg" },
    { nome: "Euphoria CK", tamanhos: ["25ml", "50ml", "100ml"], valores: [50, 100, 150], imagem: "IMGPerfumes/F/Euphoria CK.jpeg" },
    { nome: "La Vie Est Belle", tamanhos: ["25ml", "50ml", "100ml"], valores: [50, 100, 150], imagem: "IMGPerfumes/F/La Vie Est Belle.jpeg" },
    { nome: "Prada Candy", tamanhos: ["25ml", "50ml", "100ml"], valores: [50, 100, 150], imagem: "IMGPerfumes/F/Prada Candy.jpeg" },
];

const masculinos = [
    { nome: "212 Vip Men", tamanhos: ["25ml", "50ml", "100ml"], valores: [50, 100, 150], imagem: "IMGPerfumes/M/212 VIP.png" },
    { nome: "Azzaro Silver Black", tamanhos: ["25ml", "50ml", "100ml"], valores: [50, 100, 150], imagem: "IMGPerfumes/M/Azzaro Silver Black.png" },
    { nome: "One Million", tamanhos: ["25ml", "50ml", "100ml"], valores: [50, 100, 150], imagem: "IMGPerfumes/M/One Million.jpeg" },
    { nome: "Ferrari Black", tamanhos: ["25ml", "50ml", "100ml"], valores: [50, 100, 150], imagem: "IMGPerfumes/M/Ferrari Black.jpeg" },
    { nome: "Animale", tamanhos: ["25ml", "50ml", "100ml"], valores: [50, 100, 150], imagem: "IMGPerfumes/M/Animale.jpeg" },
    { nome: "Sauvage", tamanhos: ["25ml", "50ml", "100ml"], valores: [50, 100, 150], imagem: "IMGPerfumes/M/Sauvage.jpeg" },
    { nome: "Dolce Gabana", tamanhos: ["25ml", "50ml", "100ml"], valores: [50, 100, 150], imagem: "IMGPerfumes/M/Dolce Gabana.png" },
    { nome: "Bad Boy", tamanhos: ["25ml", "50ml", "100ml"], valores: [50, 100, 150], imagem: "IMGPerfumes/M/Bad Boy.jpeg" },
    { nome: "Ultra Male", tamanhos: ["25ml", "50ml", "100ml"], valores: [50, 100, 150], imagem: "IMGPerfumes/M/Ultra Male.jpeg" },
    { nome: "Phantom", tamanhos: ["25ml", "50ml", "100ml"], valores: [50, 100, 150], imagem: "IMGPerfumes/M/Phantom.jpeg" },
];

function renderPerfumes(lista, container) {
    lista.forEach(perfume => {
        const perfumeItem = document.createElement("div");
        perfumeItem.classList.add("perfume-item");

        const imagem = document.createElement("img");
        imagem.src = perfume.imagem;
        imagem.alt = perfume.nome;
        imagem.width = 225;
        imagem.height = 225;
        imagem.style.cursor = "pointer";
        imagem.addEventListener("click", () => {
            window.location.href = `detalhes.html?nome=${encodeURIComponent(perfume.nome)}&imagem=${encodeURIComponent(perfume.imagem)}&valores=${JSON.stringify(perfume.valores)}`;
        });

        const titulo = document.createElement("h3");
        const tituloStrong = document.createElement("strong");
        tituloStrong.textContent = perfume.nome;
        tituloStrong.style.cursor = "pointer";
        tituloStrong.addEventListener("click", () => {
            window.location.href = `detalhes.html?nome=${encodeURIComponent(perfume.nome)}&imagem=${encodeURIComponent(perfume.imagem)}&valores=${JSON.stringify(perfume.valores)}`;
        });
        titulo.appendChild(tituloStrong);

        const valor = document.createElement("p");
        valor.classList.add("valor");
        valor.innerHTML = `R$ <span class="valor-atual">${perfume.valores[0]}</span>,00`;

        const tamanhos = document.createElement("div");
        tamanhos.classList.add("tamanhos");
        perfume.tamanhos.forEach((tamanho, index) => {
            const btnTamanho = document.createElement("button");
            btnTamanho.textContent = tamanho;
            btnTamanho.addEventListener("click", () => {
                selecionarTamanho(perfume.nome, index, valor);
            });
            tamanhos.appendChild(btnTamanho);
        });

        perfumeItem.appendChild(imagem);
        perfumeItem.appendChild(titulo);
        perfumeItem.appendChild(valor);
        perfumeItem.appendChild(tamanhos);

        container.appendChild(perfumeItem);
    });
}

const femininosList = document.getElementById("femininos-list");
const masculinosList = document.getElementById("masculinos-list");

if (femininosList) {
    renderPerfumes(femininos, femininosList);
}

if (masculinosList) {
    renderPerfumes(masculinos, masculinosList);
}

window.selecionarTamanho = function(nome, index, valorElement) {
    const valor = femininos.find(p => p.nome === nome)?.valores[index] || masculinos.find(p => p.nome === nome)?.valores[index];
    if (valor !== undefined) {
        valorElement.innerHTML = `R$ ${valor},00`;
    } else {
        console.log(`Valor não encontrado para ${nome} e índice ${index}`);
    }
}
