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
const femininosList = document.getElementById("femininos-list");
const masculinosList = document.getElementById("masculinos-list");

function renderPerfumes(lista, container) {
    lista.forEach(perfume => {
        const perfumeHTML = `
            <div class="perfume-item">
                <img 
                    src="${perfume.imagem}" 
                    alt="${perfume.nome}" 
                    width="225" 
                    height="225" 
                    onclick="window.location.href='detalhes.html?nome=${encodeURIComponent(perfume.nome)}&imagem=${encodeURIComponent(perfume.imagem)}&valores=${JSON.stringify(perfume.valores)}'">
                <h3>
                    <strong 
                        onclick="window.location.href='detalhes.html?nome=${encodeURIComponent(perfume.nome)}&imagem=${encodeURIComponent(perfume.imagem)}&valores=${JSON.stringify(perfume.valores)}'" 
                        style="cursor: pointer;">
                        ${perfume.nome}
                    </strong>
                </h3>
                <p class="valor" id="valor-${perfume.nome}">R$ <span class="valor-atual">${perfume.valores[0]}</span>,00</p>
                <div class="tamanhos">
                    ${perfume.tamanhos.map((tamanho, index) => `
                        <button onclick="selecionarTamanho('${perfume.nome}', ${index})">${tamanho}</button>
                    `).join("")}
                </div>
            </div>
        `;
        container.innerHTML += perfumeHTML;
    });
}

window.selecionarTamanho = function(nome, index, valorElement) {
    const valor = femininos.find(p => p.nome === nome)?.valores[index] || masculinos.find(p => p.nome === nome)?.valores[index];
    if (valor !== undefined) {
        valorElement.innerHTML = `R$ ${valor},00`;
    } else {
        console.log(`Valor não encontrado para ${nome} e índice ${index}`);
    }
}

if (femininosList) {
    renderPerfumes(femininos, femininosList);
}

if (masculinosList) {
    renderPerfumes(masculinos, masculinosList);
