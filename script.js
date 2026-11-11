

var historyStack = ['screen-home'];

function showScreen(id, opts) {
  opts = opts || {};
  var current = document.querySelector('.screen.active');
  if (current) current.classList.remove('active');
  document.getElementById(id).classList.add('active');

  if (opts.reset) {
    historyStack = [id];
  } else {
    historyStack.push(id);
  }
  updateBottomNav(id);
  closeAllModals();
  var conteudo = document.querySelector('#' + id + ' .app-content');
  if (conteudo) conteudo.scrollTop = 0;
}

function goBack() {
  if (historyStack.length > 1) {
    historyStack.pop();
    var prev = historyStack[historyStack.length - 1];
    document.querySelector('.screen.active').classList.remove('active');
    document.getElementById(prev).classList.add('active');
    updateBottomNav(prev);
    closeAllModals();
  } else {
    goHome();
  }
}

function goHome() {
  showScreen('screen-home', { reset: true });
}

function updateBottomNav(screenId) {
  var tela = document.getElementById(screenId);
  var tab = tela.dataset.tab;
  tela.querySelectorAll('.nav-item').forEach(function (el) {
    el.classList.toggle('active', el.dataset.tab === tab);
  });
}



function openModal(id) { document.getElementById(id).classList.add('show'); }
function closeModal(id) { document.getElementById(id).classList.remove('show'); }
function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(function (m) { m.classList.remove('show'); });
}


var SEG_A_SEX = function (abre, fecha) {
  return [
    { letra: 'S', nome: 'Segunda-feira', status: 'Aberto', hora: abre + ' – ' + fecha },
    { letra: 'T', nome: 'Terça-feira', status: 'Aberto', hora: abre + ' – ' + fecha },
    { letra: 'Q', nome: 'Quarta-feira', status: 'Aberto', hora: abre + ' – ' + fecha },
    { letra: 'Q', nome: 'Quinta-feira', status: 'Aberto', hora: abre + ' – ' + fecha },
    { letra: 'S', nome: 'Sexta-feira', status: 'Aberto', hora: abre + ' – ' + fecha }
  ];
};

var LOJAS = {
  mercearia: {
    nome: 'Mercearia Leve Mais',
    categoria: 'Mercearia',
    nota: '⭐ 5,0',
    avaliacoes: '250 avaliações',
    status: 'Aberto · fecha às 20:30',
    tempo: '20 a 30 min',
    taxa: 'R$ 3,00',
    sobre: 'Hortifrúti, mercearia e itens de conveniência para o dia a dia.',
    modalidade: 'Somente entrega',
    hoje: '07:30 às 20:30',
    semana: '07:30 – 20:30',
    pagApp: ['PIX Online'],
    pagEntrega: ['Cartão de Crédito', 'Cartão de Débito', 'Dinheiro', 'PIX QR Code'],
    endereco: 'Rua Quinze de Novembro, 88, Centro, Buriti Alegre.',
    imagem: 'img/mercearia.png',
    dias: SEG_A_SEX('07:30', '20:30').concat([
      { letra: 'S', nome: 'Sábado', status: 'Horário especial', hora: '08:00 – 18:00' },
      { letra: 'D', nome: 'Domingo', status: 'Não há atendimento', hora: 'Fechado', fechado: true }
    ])
  },

  bigvariedades: {
    nome: 'Big Variedades',
    categoria: 'Loja de variedades',
    nota: '⭐ 4,8',
    avaliacoes: '134 avaliações',
    status: 'Aberto · fecha às 18:00',
    tempo: '10 a 15 min',
    taxa: 'R$ 5,99 a 9,99',
    sobre: 'Pijamas, eletrônicos e muito mais.',
    modalidade: 'Entrega e retirada',
    hoje: '08:00 às 18:00',
    semana: '08:00 – 18:00',
    pagApp: ['PIX Online', 'Cartão de Crédito no App'],
    pagEntrega: ['Cartão de Crédito', 'Cartão de Débito', 'Dinheiro', 'PIX QR Code'],
    endereco: 'Av. Senador Hermenegildo, 474, ao lado da Igreja Cristã Evangélica, Centro.',
    dias: SEG_A_SEX('08:00', '18:00').concat([
      { letra: 'S', nome: 'Sábado', status: 'Horário especial', hora: '08:00 – 13:00' },
      { letra: 'D', nome: 'Domingo', status: 'Não há atendimento', hora: 'Fechado', fechado: true }
    ])
  },

  pizzaria: {
    nome: 'Pizzaria da Nena',
    categoria: 'Pizzaria',
    nota: '⭐ 5,0',
    avaliacoes: '318 avaliações',
    status: 'Aberto · fecha às 23:00',
    tempo: '30 a 40 min',
    taxa: 'R$ 3,00 a 5,00',
    sobre: 'Pizzas artesanais, esfihas e calzones assados na hora.',
    modalidade: 'Entrega e retirada',
    hoje: '18:00 às 23:00',
    semana: '18:00 – 23:00',
    pagApp: ['PIX Online', 'Cartão de Crédito no App'],
    pagEntrega: ['Cartão de Crédito', 'Cartão de Débito', 'Dinheiro', 'PIX QR Code'],
    endereco: 'Rua das Flores, 120, Centro, Buriti Alegre.',
    dias: SEG_A_SEX('18:00', '23:00').concat([
      { letra: 'S', nome: 'Sábado', status: 'Aberto', hora: '18:00 – 23:59' },
      { letra: 'D', nome: 'Domingo', status: 'Aberto', hora: '18:00 – 23:00' }
    ])
  },

  distribuidora: {
    nome: 'Distribuidora Dois Corações',
    categoria: 'Bebidas',
    nota: '⭐ 3,17',
    avaliacoes: '62 avaliações',
    status: 'Aberto · 24 horas',
    tempo: '15 a 20 min',
    taxa: 'R$ 3,00 a 5,00',
    sobre: 'Bebidas geladas, gelo e conveniência com entrega 24 horas.',
    modalidade: 'Somente entrega',
    hoje: '24 horas',
    semana: '24 horas',
    pagApp: ['PIX Online'],
    pagEntrega: ['Cartão de Crédito', 'Cartão de Débito', 'Dinheiro', 'PIX QR Code'],
    endereco: 'Av. Brasil, 305, Setor Central, Buriti Alegre.',
    dias: SEG_A_SEX('00:00', '23:59').concat([
      { letra: 'S', nome: 'Sábado', status: 'Aberto', hora: '00:00 – 23:59' },
      { letra: 'D', nome: 'Domingo', status: 'Aberto', hora: '00:00 – 23:59' }
    ])
  },

  confeitaria: {
    nome: 'Confeitaria Gourmet JT',
    categoria: 'Bolos e doces',
    nota: '⭐ 4,47',
    avaliacoes: '97 avaliações',
    status: 'Aberto · fecha às 19:00',
    tempo: '20 a 30 min',
    taxa: 'R$ 5,00 a 8,00',
    sobre: 'Bolos, doces finos e tortas sob encomenda.',
    modalidade: 'Entrega e retirada',
    hoje: '09:00 às 19:00',
    semana: '09:00 – 19:00',
    pagApp: ['PIX Online', 'Cartão de Crédito no App'],
    pagEntrega: ['Cartão de Crédito', 'Cartão de Débito', 'Dinheiro'],
    endereco: 'Rua São Sebastião, 57, Centro, Buriti Alegre.',
    dias: SEG_A_SEX('09:00', '19:00').concat([
      { letra: 'S', nome: 'Sábado', status: 'Horário especial', hora: '09:00 – 14:00' },
      { letra: 'D', nome: 'Domingo', status: 'Não há atendimento', hora: 'Fechado', fechado: true }
    ])
  }
};

/* loja atualmente aberta na tela de detalhe */
var lojaAtual = null;
/* favoritos marcados pelo usuário, por loja */
var favoritos = {};

/* =====================================================================
   TELA DE DETALHE DO ESTABELECIMENTO
   ===================================================================== */

function abrirEstabelecimento(id) {
  var loja = LOJAS[id];
  if (!loja) return;
  lojaAtual = id;

  document.getElementById('det-header-nome').textContent = loja.nome;
  document.getElementById('det-nome').textContent = loja.nome;
  document.getElementById('det-categoria').textContent = loja.categoria;
  document.getElementById('det-nota').textContent = loja.nota;
  document.getElementById('det-avaliacoes').textContent = loja.avaliacoes;
  document.getElementById('det-status').textContent = loja.status;
  document.getElementById('det-tempo').textContent = loja.tempo;
  document.getElementById('det-taxa').textContent = loja.taxa;
  document.getElementById('det-taxa2').textContent = loja.taxa;
  document.getElementById('det-modalidade').textContent = loja.modalidade;
  document.getElementById('det-hoje').textContent = loja.hoje;
  document.getElementById('det-sobre').textContent = loja.sobre;
  document.getElementById('det-endereco').textContent = loja.endereco;

  // banner: usa a foto da loja quando existir
  var hero = document.getElementById('det-hero');
  if (loja.imagem) {
    hero.innerHTML = '<img src="' + loja.imagem + '" alt="' + loja.nome + '">';
  } else {
    hero.innerHTML = loja.nome;
  }

  // formas de pagamento agrupadas (app x entrega)
  document.getElementById('det-pag-app').innerHTML = listaPagamento(loja.pagApp);
  document.getElementById('det-pag-entrega').innerHTML = listaPagamento(loja.pagEntrega);

  // estado do botão de favorito desta loja
  var btnFav = document.getElementById('det-fav');
  var marcado = favoritos[id] === true;
  btnFav.textContent = marcado ? '♥' : '♡';
  btnFav.classList.toggle('ativo', marcado);
  btnFav.setAttribute('aria-pressed', marcado ? 'true' : 'false');

  // reinicia abas, busca e acordeão
  trocarAba('info', document.querySelectorAll('#screen-estabelecimento .tab')[2]);
  document.getElementById('busca-loja').value = '';
  filtrarInfo('');
  fecharPagamento();

  showScreen('screen-estabelecimento');
}

function listaPagamento(itens) {
  return itens.map(function (i) {
    return '<div class="payment-item"><span class="dot"></span>' + i + '</div>';
  }).join('');
}

function alternarFavorito() {
  if (!lojaAtual) return;
  var marcado = !favoritos[lojaAtual];
  favoritos[lojaAtual] = marcado;

  var btn = document.getElementById('det-fav');
  btn.textContent = marcado ? '♥' : '♡';
  btn.classList.toggle('ativo', marcado);
  btn.setAttribute('aria-pressed', marcado ? 'true' : 'false');

  alert(marcado
    ? LOJAS[lojaAtual].nome + ' foi adicionada aos favoritos.'
    : LOJAS[lojaAtual].nome + ' foi removida dos favoritos.');
}

/* abas internas da loja: Produtos | Avaliações | Informações */
function trocarAba(nome, botao) {
  document.querySelectorAll('#screen-estabelecimento .tab').forEach(function (t) {
    t.classList.remove('active');
  });
  if (botao) botao.classList.add('active');

  document.querySelectorAll('#screen-estabelecimento .tab-panel').forEach(function (p) {
    p.classList.remove('active');
  });
  document.getElementById('painel-' + nome).classList.add('active');
}

/* remove acentos para que "endereco" encontre "endereço" */
function semAcento(texto) {
  return texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

/* busca dentro da loja: filtra os cartões de informação */
function filtrarInfo(termo) {
  var busca = semAcento(termo.trim());
  var encontrados = 0;

  document.querySelectorAll('#painel-info .buscavel').forEach(function (card) {
    var texto = semAcento(card.dataset.busca + ' ' + card.textContent);
    var bate = busca === '' || texto.indexOf(busca) !== -1;
    card.style.display = bate ? '' : 'none';
    if (bate) encontrados++;
  });

  document.getElementById('busca-vazia').style.display =
    (busca !== '' && encontrados === 0) ? 'block' : 'none';
}

/* acordeão das formas de pagamento */
function alternarPagamento() {
  var detalhes = document.getElementById('detalhes-pagamento');
  var botao = document.getElementById('btn-pagamento');
  var aberto = detalhes.hasAttribute('hidden');

  if (aberto) {
    detalhes.removeAttribute('hidden');
  } else {
    detalhes.setAttribute('hidden', '');
  }
  botao.classList.toggle('aberto', aberto);
  botao.setAttribute('aria-expanded', aberto ? 'true' : 'false');
}

function fecharPagamento() {
  document.getElementById('detalhes-pagamento').setAttribute('hidden', '');
  document.getElementById('btn-pagamento').classList.remove('aberto');
  document.getElementById('btn-pagamento').setAttribute('aria-expanded', 'false');
}

function verRota() {
  alert('Esta ação abriria o mapa, uma página fora do escopo deste protótipo.');
}

function copiarEndereco() {
  alert('Endereço copiado.');
}



function abrirHorarios() {
  if (!lojaAtual) return;
  var loja = LOJAS[lojaAtual];

  document.getElementById('hor-nome').textContent = loja.nome;
  document.getElementById('hor-semana').textContent = loja.semana;

  document.getElementById('hor-lista').innerHTML = loja.dias.map(function (d) {
    return '<div class="dia-horario' + (d.fechado ? ' fechado' : '') + '">' +
      '<div class="dia-icone">' + d.letra + '</div>' +
      '<div class="dia-info"><strong>' + d.nome + '</strong><span>' + d.status + '</span></div>' +
      '<strong class="hora">' + d.hora + '</strong>' +
      '</div>';
  }).join('');

  showScreen('screen-horarios');
}

/* =====================================================================
   AÇÕES DO MÓDULO FIDELIDADE
   ===================================================================== */

function girarAgora() {
  alert('Girando a roleta... (ação de demonstração — nenhum sorteio real é processado)');
}

function verInstagram() {
  alert('Este link seria redirecionado ao Instagram, fora do escopo deste protótipo.');
}

function logout() {
  if (confirm('Deseja realmente sair da conta?')) {
    goHome();
  }
}

function emConstrucao() {
  alert('Esta tela não faz parte do escopo avaliado neste protótipo.');
}

/* itens bloqueados: avisam pelo alert e mantêm o usuário na Fidelidade */
function avisarIndiqueGanhe() {
  alert('Indisponível na sua região.\n\n' +
    'O programa Indique e Ganhe ainda não está ativo em Buriti Alegre. ' +
    'Assim que for liberado para a sua cidade, ele aparecerá desbloqueado aqui.');
}

function avisarCadastroPremiado() {
  alert('Indisponível na sua região.\n\n' +
    'Não há Cadastro Premiado ativo em Buriti Alegre no momento. ' +
    'Assim que uma nova premiação for liberada para a sua cidade, ela aparecerá desbloqueada aqui.');
}

/* 6ª opção da Fidelidade: confirma antes de sair para um link externo.
   Ao recusar, nada muda e o usuário permanece na tela Fidelidade. */
function abrirGrupoCupons() {
  var continuar = confirm('Você será direcionado para um link externo (grupo de WhatsApp).\n\n' +
    'Deseja continuar?');
  if (continuar) {
    alert('Este item redireciona para um grupo externo de WhatsApp.\n' +
      'Redirecionamento externo não simulado neste protótipo.');
  }
}
