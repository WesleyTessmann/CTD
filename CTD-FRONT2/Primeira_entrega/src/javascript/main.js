//  Criação da variavel para o formulario 
const formulario = document.querySelector('form');

// Criação da variavel para a div que receberá os dados informados no form. 
const cardRecebidos = document.querySelector('.CardCar');

// Criação do array vazio
const cardCarro = [];

// Adicionando o event de submit para o formulario
formulario.addEventListener('submit', function (event) {

  // O método Object.fromEntries() transforma um array em um objeto.
  // objeto FormData será preenchido com as chaves/valores atuais do formulário usando a propriedade name/value, e Transforma em um novo objeto. 
  const informacoes = Object.fromEntries(new FormData(formulario).entries());

  // Invoca a função no momento do evento submit
  adicionarCarro(informacoes)

  // previnindo que a página seja carregada
  event.preventDefault();
});

// Criação da função para adicionar os cartões ao cardRecebidos 
function adicionarCarro(informacoes) {

  // adiciona os valores ao array vazio, que coletamos no obj do form.
  cardCarro.push(informacoes)

  // Iniciamos para modificar o conteudo HTML
  cardRecebidos.innerHTML = "";

  cardCarro.forEach((infCarro) => {

    const cards = document.createElement('div');
    cards.innerHTML =
      `
    <div class="cartoes-Carro">
        <!-- Cartão de Retorno do Carro -->
        <div class="cartao-carro">
          <div class="cartao-topo">
            <div class="detalhes">
              <h2 class="nome"> ${infCarro.modeloCarro}</h2>
              <span> #${infCarro.cvInfo}</span>
            </div>
            <span class="tipo">${infCarro.tipoCarro}</span>
            <div class="cartao-imagem">
              <img src="${infCarro.urlImg}" alt="Imagem do Carro">
            </div>
          </div>
          <div class="cartao-informacoes">
            <div class="Informações">
              <h3>Informações</h3>
              <ul>
                <li>Potência: ${infCarro.cvInfo} </li>
                <li>Kms Rodados: ${infCarro.kmRodadoInfo}</li>
                <li>Aceleração 0 à 100: ${infCarro.AcelaracaoInfo} </li>
                <li>Velocidade Máxima: ${infCarro.velocidadeMaxInfo} </li>
              </ul>
            </div>
            <div class="Modificações">
              <h3>Modificações</h3>
              <ul>
                <li>${infCarro.primeiraModificação}</li>
                <li>${infCarro.segundaModificação}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `
    // Setando a classe da div (card)
    cards.setAttribute('class', 'cards');

    // Setando que o card é filho do cardRecebidos
    cardRecebidos.appendChild(cards);
  })
}