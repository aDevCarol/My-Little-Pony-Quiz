// Definição dos ponies e suas características
const ponies = {
    "Fluttershy": {
        color: "Amarelo",
        animal: "Coelho",
        activity: "Contato com a natureza",
        trait: "Tímida",
        element: "Bondade",
        profession: "Veterinária",
        sadness: "Choro e busco um tempo para mim",
        falseFreindship: "Me afastaria aos poucos para não me fazer mais mal",
        music: "Músicas calmas que me permitam sentir o ambiente, como lo-fi",
        siblings: "Tenho um irmão/irmã mais velho mas não mantemos muito contato pois somos muito diferentes.",
    },
    "Pinkie Pie": {
        color: "Rosa",
        animal: "Jacaré",
        activity: "Organizar festas",
        trait: "Alto astral",
        element: "Bom humor",
        profession: "Confeiteira",
        sadness: "Tento ver o lado positivo apesar de tudo",
        falseFreindship: "Tento mostrar para ela que ela está errada e tiro satisfação",
        music: "Tudo que combine bem com uma grande festa e transmita alegria para todos",
        siblings: "Sou de uma família com muitos irmãos mas a distância e nossas personalidades nos mantém distantes.",
    },
    "Twilight Sparkle": {
        color: "Roxo",
        animal: "Coruja",
        activity: "Ler e aprender",
        trait: "Inteligente",
        element: "Magia",
        profession: "Bibliotecária",
        sadness: "Tiro um tempo para pensar sobre",
        falseFreindship: "Ficaria quieta até a hora de agir",
        music: "Música clássica e R&B, tudo para acompanhar uma boa leitura.",
        siblings: "Tenho um irmão mais velho muito responsável com quem aprendo bastante",
    },
    "Rarity": {
        color: "Branco",
        animal: "Gato",
        activity: "Costurar e desenhar",
        trait: "Vaidosa",
        element: "Generosidade",
        profession: "Estilista",
        sadness: "Procuro minhas amigas para desabafar",
        falseFreindship: "Seria falsa com ela também",
        music: "Música pop e grandes sucessos das divas que me inspiram",
        siblings: "Sou a irmã mais velha e tento ensinar meu irmão/irmã mais novo com muito amor",
    },
    "Rainbow Dash": {
        color: "Azul",
        animal: "Tartaruga",
        activity: "Esportes",
        trait: "Esportista",
        element: "Lealdade",
        profession: "Atleta",
        sadness: "Tento me distrair para esquecer a tristeza",
        falseFreindship: "Bateria nela",
        music: "Rock e tudo que tenha muita energia",
        siblings: "Tenho apenas os irmãos que a vida me deu no caminho",
    },
    "Applejack": {
        color: "Laranja",
        animal: "Cachorro",
        activity: "Tempo com a família",
        trait: "Competitiva",
        element: "Honestidade",
        profession: "Fazendeira",
        sadness: "Entro de cabeça no trabalho e busco apoio na minha família",
        falseFreindship: "Jogaria ela num buraco",
        music: "Música country que me reconecte com a natureza e com as minhas raízes.",
        siblings: "Sou filha/filho do meio e tenho muito apego aos meus irmãos, somos muito próximos e unidos.",
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quizForm');
    const resultContainer = document.querySelector('.resultado-content');

    if (quizForm) {
        quizForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(quizForm);
            const answers = Object.fromEntries(formData);
            localStorage.setItem('quizAnswers', JSON.stringify(answers));
            window.location.href = 'resultado.html';
        });
    }

    if (window.location.pathname.includes('resultado.html')) {
        const answers = JSON.parse(localStorage.getItem('quizAnswers'));
        const scores = Object.keys(ponies).reduce((acc, pony) => ({ ...acc, [pony]: 0 }), {});

        // Comparando as respostas com as características dos ponies
        Object.entries(answers).forEach(([question, answer]) => {
            Object.entries(ponies).forEach(([pony, traits]) => {
                if (traits[question] === answer) {
                    scores[pony]++;
                }
            });
        });

        // Encontrando o pony com a maior pontuação
        const result = Object.entries(scores).reduce((max, [pony, score]) => 
            score > max[1] ? [pony, score] : max
        , ['', -Infinity])[0];


let description = "";
let imageUrl = ""; // Variável para armazenar o caminho da imagem


switch (result){

    case "Fluttershy":
        imageUrl = "Imagens/fluttershy.png"
        description = "Fluttershy é uma pônei muito doce e tímida, com um amor profundo pelos animais e pela natureza. Sua bondade é seu maior poder, e ela sempre procura ajudar seus amigos com um coração gentil. Trabalha como veterinária e ama passar o tempo com seu coelho de estimação. Embora seja reservada, ela é uma amiga leal e confiável."
        break

    case "Pinkie Pie":
        imageUrl = "Imagens/pinkie_pie.png"
        description = "Pinkie Pie é a alma da festa, sempre com um sorriso no rosto e pronta para espalhar alegria por onde passa. Ela ama organizar festas e trazer felicidade para todos ao seu redor. Mesmo nos momentos mais difíceis, Pinkie tenta manter seu bom humor e ver o lado positivo das coisas. Ela é confeiteira e adora doces, sempre com sua energia contagiante."
        break

    case "Twilight Sparkle":
        imageUrl = "Imagens/twilight_sparkle.png"
        description = "Twilight Sparkle é uma pônei extremamente inteligente e dedicada aos estudos. Ela adora ler e aprender coisas novas, e sua magia é uma das mais poderosas entre os pôneis. Twilight é conhecida por sua liderança e busca constante de conhecimento. Seu amor pela leitura e seu desejo de ajudar os outros a tornam uma amiga valiosa."
        break

    case "Rarity":
        imageUrl = "Imagens/rarity.png"
        description = "Rarity é uma estilista talentosa e vaidosa, com um grande senso de moda e estilo. Ela adora criar roupas deslumbrantes e está sempre em busca da perfeição. Apesar de sua vaidade, Rarity é extremamente generosa e sempre coloca as necessidades dos outros antes das suas. Sua criatividade e generosidade fazem dela uma amiga inestimável."
        break
    
    case "Rainbow Dash":
        imageUrl = "Imagens/rainbow_dash.png"
        description = "Rainbow Dash é uma pônei atlética e corajosa, sempre disposta a enfrentar novos desafios. Ela é leal até o fim e valoriza profundamente suas amizades. Como atleta, Rainbow Dash adora esportes e está sempre se esforçando para ser a melhor. Sua energia e espírito competitivo a tornam uma amiga dinâmica e confiável."
        break
    
    case "Applejack":
        imageUrl = "Imagens/applejack.png"
        description = "Applejack é uma pônei trabalhadora e honesta, com um grande amor pela família e pela vida na fazenda. Ela é competitiva, mas sempre leal e sincera com seus amigos. Applejack valoriza suas raízes e adora passar tempo ao ar livre, cuidando da fazenda e se conectando com a natureza. Sua força e honestidade a tornam uma amiga verdadeira."
        break
}

// Aqui você pode usar imageUrl e description para atualizar a interface
// Por exemplo, se você tiver um elemento <img> e <p> no HTML:
document.getElementById("characterImage").src = imageUrl; // Atualiza a imagem
 // Atualiza a descrição

        resultContainer.innerHTML = `
            <h2>Você é ${result}!</h2>
            ${description}
        `;
    }
});