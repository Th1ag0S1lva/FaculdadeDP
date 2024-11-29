// Array de perfumes estáticos
const perfumes = [
    {
        nome: "212 VIP Men",
        imagem: "IMGPerfumes/M/212 VIP.jpg",
        descricao: "Perfume masculino marcante, ideal para ocasiões especiais.",
        genero: "M"
    },
    {
        nome: "Azzaro Silver Black",
        imagem: "IMGPerfumes/M/Azzaro Silver Black.png",
        descricao: "Azzaro Silver Black traz um toque de sofisticação e modernidade.",
        genero: "M"
    },
    {
        nome: "One Million",
        imagem: "IMGPerfumes/M/One Million.jpeg",
        descricao: "O One Million é um perfume ousado, cheio de energia e elegância.",
        genero: "M"
    },
    {
        nome: "Ferrari Black",
        imagem: "IMGPerfumes/M/Ferrari Black.jpeg",
        descricao: "Ferrari Black, a essência da potência e masculinidade.",
        genero: "M"
    },
    {
        nome: "Animale",
        imagem: "IMGPerfumes/M/Animale.jpeg",
        descricao: "Animale é para o homem que sabe o que quer.",
        genero: "M"
    },
    {
        nome: "Sauvage",
        imagem: "IMGPerfumes/M/Sauvage.jpeg",
        descricao: "Sauvage é um perfume para homens modernos e ousados.",
        genero: "M"
    },
    {
        nome: "Dolce Gabana",
        imagem: "IMGPerfumes/M/Dolce Gabana.png",
        descricao: "Dolce Gabana é a combinação perfeita de sofisticação e frescor.",
        genero: "M"
    },
    {
        nome: "Bad Boy",
        imagem: "IMGPerfumes/M/Bad Boy.jpeg",
        descricao: "Bad Boy é para o homem irreverente e destemido.",
        genero: "M"
    },
    {
        nome: "Ultra Male",
        imagem: "IMGPerfumes/M/Ultra Male.jpeg",
        descricao: "Ultra Male, para quem deseja deixar uma marca de ousadia.",
        genero: "M"
    },
    {
        nome: "Phantom",
        imagem: "IMGPerfumes/M/Phantom.jpeg",
        descricao: "Phantom é um perfume enigmático e cheio de personalidade.",
        genero: "M"
    },
    {
        nome: "A&F Fierce",
        imagem: "IMGPerfumes/M/A&F Fierce.jpeg",
        descricao: "A&F Fierce é um perfume jovem e energizante, para quem busca se destacar.",
        genero: "M"
    },
    {
        nome: "Acqua Dio Gio Profumo",
        imagem: "IMGPerfumes/M/Acqua Dio Gio Profumo.jpg",
        descricao: "Acqua Dio Gio Profumo traz uma fragrância fresca e sofisticada.",
        genero: "M"
    },
    {
        nome: "Allure Blanche",
        imagem: "IMGPerfumes/M/Allure Blanche.jpg",
        descricao: "Allure Blanche é suave e elegante, perfeita para ocasiões especiais.",
        genero: "M"
    },
    {
        nome: "Allure Sport",
        imagem: "IMGPerfumes/M/Allure Sport.jpg",
        descricao: "Allure Sport é energético e refrescante, para o homem ativo e moderno.",
        genero: "M"
    },
    {
        nome: "Armani Code Profumo",
        imagem: "IMGPerfumes/M/Armani Code Profumo.jpeg",
        descricao: "Armani Code Profumo é sofisticado e sedutor, perfeito para a noite.",
        genero: "M"
    },
    {
        nome: "Boss Bottled",
        imagem: "IMGPerfumes/M/Boss Bottled.jpeg",
        descricao: "Boss Bottled é o perfume clássico para o homem moderno e confiante.",
        genero: "M"
    },
    {
        nome: "Bvlgary Man In Black",
        imagem: "IMGPerfumes/M/Bvlgary Man In Black.jpeg",
        descricao: "Bvlgary Man In Black é um perfume intenso e misterioso.",
        genero: "M"
    },
    {
        nome: "Dior Homme Intense",
        imagem: "IMGPerfumes/M/Dior Homme Intense.jpg",
        descricao: "Dior Homme Intense é um perfume sofisticado e amadeirado.",
        genero: "M"
    },
    {
        nome: "Emblem",
        imagem: "IMGPerfumes/M/Emblem.jpeg",
        descricao: "Emblem é um perfume que combina elegância com um toque de mistério.",
        genero: "M"
    },
    {
        nome: "Eternity",
        imagem: "IMGPerfumes/M/Eternity.jpeg",
        descricao: "Eternity é uma fragrância fresca e atemporal, ideal para o dia a dia.",
        genero: "M"
    },
    {
        nome: "Fahrenheit",
        imagem: "IMGPerfumes/M/Fahrenheit.jpg",
        descricao: "Fahrenheit é um perfume quente e envolvente, perfeito para a noite.",
        genero: "M"
    },
    {
        nome: "Invictus",
        imagem: "IMGPerfumes/M/Invictus.jpeg",
        descricao: "Invictus é um perfume energizante e poderoso, ideal para o homem vencedor.",
        genero: "M"
    },
    {
        nome: "Kouros Body'YSL",
        imagem: "IMGPerfumes/M/Kouros Body'YSL.jpg",
        descricao: "Kouros Body é uma fragrância ousada e intensa, para homens confiantes.",
        genero: "M"
    },
    {
        nome: "Lacoste",
        imagem: "IMGPerfumes/M/Lacoste.jpg",
        descricao: "Lacoste é um perfume fresco e esportivo, para o homem moderno.",
        genero: "M"
    },
    {
        nome: "Silver Scent",
        imagem: "IMGPerfumes/M/Silver Scent.png",
        descricao: "Silver Scent é um perfume sofisticado com notas ambaradas e cítricas.",
        genero: "M"
    },
    {
        nome: "Strong Me",
        imagem: "IMGPerfumes/M/Strong Me.jpg",
        descricao: "Strong Me é para o homem que quer se destacar com uma fragrância marcante.",
        genero: "M"
    },
    {
        nome: "Tobacco Vanille",
        imagem: "IMGPerfumes/M/Tobacco Vanille.jpeg",
        descricao: "Tobacco Vanille é uma fragrância quente e envolvente, com notas de tabaco e baunilha.",
        genero: "M"
    },
    {
        nome: "Versace Eros",
        imagem: "IMGPerfumes/M/Versace Eros.jpeg",
        descricao: "Versace Eros é um perfume que combina sensualidade e sofisticação.",
        genero: "M"
    },
    // Perfumes Femininos
    {
        nome: "Lady Million",
        imagem: "IMGPerfumes/F/Lady Million.jpeg",
        descricao: "Lady Million é para a mulher que deseja destacar sua presença.",
        genero: "F"
    },
    {
        nome: "Angel",
        imagem: "IMGPerfumes/F/Angel.jpeg",
        descricao: "Angel é um perfume doce e envolvente, perfeito para qualquer ocasião.",
        genero: "F"
    },
    {
        nome: "Chloe",
        imagem: "IMGPerfumes/F/Chloe.webp",
        descricao: "Chloe é um perfume elegante, perfeito para o dia a dia.",
        genero: "F"
    },
    {
        nome: "Gabriela Sabatini",
        imagem: "IMGPerfumes/F/Gabriela Sabatini.jpeg",
        descricao: "Gabriela Sabatini é um perfume envolvente e sedutor.",
        genero: "F"
    },
    {
        nome: "Good Girl",
        imagem: "IMGPerfumes/F/Good Girl.jpeg",
        descricao: "Good Girl é um perfume ousado e sofisticado para mulheres confiantes.",
        genero: "F"
    },
    {
        nome: "Amor Amor",
        imagem: "IMGPerfumes/F/Amor Amor.jpeg",
        descricao: "Amor Amor é doce e envolvente, ideal para um encontro romântico.",
        genero: "F"
    },
    {
        nome: "Scandal",
        imagem: "IMGPerfumes/F/Scandal.jpeg",
        descricao: "Scandal é um perfume provocante e cheio de personalidade.",
        genero: "F"
    },
    {
        nome: "Euphoria CK",
        imagem: "IMGPerfumes/F/Euphoria CK.jpeg",
        descricao: "Euphoria CK é perfeito para a mulher que deseja exalar confiança.",
        genero: "F"
    },
    {
        nome: "La Vie Est Belle",
        imagem: "IMGPerfumes/F/La Vie Est Belle.jpeg",
        descricao: "La Vie Est Belle é para mulheres que buscam um perfume doce e elegante.",
        genero: "F"
    },
    {
        nome: "Prada Candy",
        imagem: "IMGPerfumes/F/Prada Candy.jpeg",
        descricao: "Prada Candy é doce e irresistível, ideal para mulheres sensuais.",
        genero: "F"
    },
    {
        nome: "212 Vip Rose",
        imagem: "IMGPerfumes/F/212 Vip Rose.jpeg",
        descricao: "212 Vip Rose é perfeito para a mulher jovem e moderna.",
        genero: "F"
    },
    {
        nome: "Ange ou Demon",
        imagem: "IMGPerfumes/F/Ange ou Demon.jpeg",
        descricao: "Ange ou Demon é um perfume envolvente e misterioso.",
        genero: "F"
    },
    {
        nome: "Black Opium YSL",
        imagem: "IMGPerfumes/F/Black Opium YSL.jpeg",
        descricao: "Black Opium YSL é um perfume ousado e sedutor.",
        genero: "F"
    },
    {
        nome: "Burberry Her",
        imagem: "IMGPerfumes/F/Burbrery Her.jpeg",
        descricao: "Burberry Her é uma fragrância feminina e sofisticada.",
        genero: "F"
    },
    {
        nome: "CH Woman",
        imagem: "IMGPerfumes/F/CH Woman.jpeg",
        descricao: "CH Woman é ideal para mulheres que buscam um perfume clássico e elegante.",
        genero: "F"
    },
    {
        nome: "Chance Tendre",
        imagem: "IMGPerfumes/F/Chance Tendre.jpeg",
        descricao: "Chance Tendre é uma fragrância suave e floral.",
        genero: "F"
    },
    {
        nome: "Coco Mademoiselle",
        imagem: "IMGPerfumes/F/Coco Mademoiselle.jpeg",
        descricao: "Coco Mademoiselle é um clássico que combina elegância e frescor.",
        genero: "F"
    },
    {
        nome: "Flowerbomb V&R",
        imagem: "IMGPerfumes/F/Flowerbomb V&R.jpeg",
        descricao: "Flowerbomb é doce e floral, perfeito para a mulher moderna e confiante.",
        genero: "F"
    },
    {
        nome: "Idole",
        imagem: "IMGPerfumes/F/Idole.jpeg",
        descricao: "Idole é um perfume moderno e radiante, para mulheres de atitude.",
        genero: "F"
    },
    {
        nome: "J'Adore",
        imagem: "IMGPerfumes/F/J'Adore.jpeg",
        descricao: "J'Adore é um perfume sofisticado e atemporal.",
        genero: "F"
    },
    {
        nome: "La Belle",
        imagem: "IMGPerfumes/F/La Belle.jpeg",
        descricao: "La Belle é doce, floral e encantadora.",
        genero: "F"
    },
    {
        nome: "La Nuit Tresor",
        imagem: "IMGPerfumes/F/La Nuit Tresor.jpeg",
        descricao: "La Nuit Tresor é uma fragrância sedutora, perfeita para a noite.",
        genero: "F"
    },
    {
        nome: "Olympea",
        imagem: "IMGPerfumes/F/Olympea.jpeg",
        descricao: "Olympea é um perfume envolvente e sensual.",
        genero: "F"
    },
    {
        nome: "The One D&G",
        imagem: "IMGPerfumes/F/The One D&G.jpeg",
        descricao: "The One D&G é um perfume sofisticado e moderno.",
        genero: "F"
    },
    {
        nome: "Wanted Girl",
        imagem: "IMGPerfumes/F/Wanted Girl.jpeg",
        descricao: "Wanted Girl é doce, floral e irresistível.",
        genero: "F"
    }
    // (Adicionar os outros perfumes femininos)
];

function renderPerfumes(genero, container) {
    container.innerHTML = ''; // Limpa o container antes de renderizar

    const lista = perfumes.filter(perfume => perfume.genero === genero);

    if (lista.length === 0) {
        container.innerHTML = '<p>Nenhum perfume encontrado.</p>';
        return;
    }

    lista.forEach(perfume => {
        const perfumeItem = document.createElement("div");
        perfumeItem.classList.add("perfume-item");

        // Criando a tag <img> e atribuindo o caminho da imagem
        const imagem = document.createElement("img");
        imagem.src = perfume.imagem;
        imagem.alt = perfume.nome;
        imagem.width = 225;
        imagem.height = 225;
        imagem.style.cursor = "pointer";

        // Nome do perfume
        const titulo = document.createElement("h3");
        const tituloStrong = document.createElement("strong");
        tituloStrong.textContent = perfume.nome; // Exibe o nome do perfume
        titulo.appendChild(tituloStrong);

        // Descrição do perfume
        const descricao = document.createElement("p");
        descricao.textContent = perfume.descricao;

        // Adiciona a imagem, nome e descrição ao item do perfume
        perfumeItem.appendChild(imagem);
        perfumeItem.appendChild(titulo);
        

        // Adiciona uma ação de clique para redirecionar para a página de detalhes
        perfumeItem.onclick = () => {
            // Cria a URL de detalhes, passando os dados do perfume como parâmetros
            const detalhesURL = `detalhes.html?nome=${encodeURIComponent(perfume.nome)}&imagem=${encodeURIComponent(perfume.imagem)}&descricao=${encodeURIComponent(perfume.descricao)}`;
            window.location.href = detalhesURL;  // Redireciona para a página de detalhes
        };

        container.appendChild(perfumeItem);
    });
}

// Garantir que o DOM esteja completamente carregado antes de rodar o script
document.addEventListener("DOMContentLoaded", function () {
    const femininosList = document.getElementById("femininos-list");
    const masculinosList = document.getElementById("masculinos-list");

    // Renderiza os perfumes femininos na página PF.html
    if (femininosList) {
        renderPerfumes("F", femininosList);
    }

    // Renderiza os perfumes masculinos na página PM.html
    if (masculinosList) {
        renderPerfumes("M", masculinosList);
    }
});
