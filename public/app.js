// Estrutura JSON com dados das notícias
const dados = [
  {
    "id": 1,
    "titulo": "Prefeitura Lança Novo Plano de Mobilidade Urbana",
    "descricao": "Novo plano visa melhorar o transporte público e reduzir o trânsito na cidade.",
    "conteudo": "A Prefeitura apresentou nesta segunda-feira um novo plano de mobilidade urbana que inclui a criação de corredores exclusivos de ônibus, ciclovias e a requalificação de vias principais. O projeto será implementado ao longo dos próximos dois anos e contará com investimentos de R$ 50 milhões do governo federal. A iniciativa também prevê a integração de diferentes modais de transporte, incluindo ônibus, bicicletas e pedestres, criando uma rede de mobilidade mais eficiente e sustentável para a cidade.",
    "categoria": "Cidades",
    "autor": "Joana Ribeiro",
    "data": "2025-03-30",
    "imagem": "img/mobilidade.jpg"
  },
  {
    "id": 2,
    "titulo": "Tecnologia 6G Está em Desenvolvimento",
    "descricao": "Pesquisadores anunciam avanços na próxima geração de redes móveis.",
    "conteudo": "Universidades e empresas de telecomunicação já estão testando tecnologias que poderão compor a infraestrutura do 6G. A expectativa é que a nova geração seja 100 vezes mais rápida que o 5G e amplie a integração entre dispositivos inteligentes. O 6G promete revolucionar áreas como realidade aumentada, internet das coisas e inteligência artificial, com latência extremamente baixa e capacidade de processamento em tempo real. Especialistas estimam que a tecnologia estará disponível comercialmente até 2030.",
    "categoria": "Tecnologia",
    "autor": "Carlos Mendes",
    "data": "2025-03-28",
    "imagem": "img/tecnologia_6g.jpg"
  },
  {
    "id": 3,
    "titulo": "Festival de Música Reúne Mais de 50 Mil Pessoas",
    "descricao": "Evento cultural movimentou o final de semana com atrações nacionais e internacionais.",
    "conteudo": "Durante três dias de programação, o festival contou com a participação de mais de 40 artistas e promoveu atividades culturais e gastronômicas em paralelo. A prefeitura estima um impacto positivo no turismo local, com hotéis e restaurantes registrando ocupação de 95%. O evento também gerou mais de 2.000 empregos temporários e movimentou a economia local em cerca de R$ 15 milhões. Artistas como Anitta, Caetano Veloso e Coldplay se apresentaram nos palcos principais.",
    "categoria": "Cultura",
    "autor": "Ana Clara Silva",
    "data": "2025-03-27",
    "imagem": "img/festival_musica.jpg"
  },
  {
    "id": 4,
    "titulo": "Descoberta Nova Espécie de Peixe no Rio Amazonas",
    "descricao": "Pesquisadores brasileiros identificam peixe endêmico com características únicas.",
    "conteudo": "Uma equipe de biólogos da Universidade Federal do Amazonas descobriu uma nova espécie de peixe no Rio Amazonas, batizada de 'Hyphessobrycon amazonicus'. O animal possui escamas iridescentes e é endêmico de uma região específica do rio. A descoberta foi publicada na revista científica Nature e representa um avanço importante para a biodiversidade brasileira. O peixe mede cerca de 5 centímetros e se alimenta principalmente de pequenos crustáceos.",
    "categoria": "Ciência",
    "autor": "Dr. Roberto Santos",
    "data": "2025-03-25",
    "imagem": "img/peixe_amazonas.jpg"
  },
  {
    "id": 5,
    "titulo": "Nova Lei de Proteção de Dados Entra em Vigor",
    "descricao": "Legislação brasileira estabelece regras mais rígidas para empresas.",
    "conteudo": "A nova Lei Geral de Proteção de Dados (LGPD) entrou em vigor com alterações significativas que impactam empresas de todos os portes. As mudanças incluem maior rigor na coleta de dados pessoais, obrigatoriedade de consentimento explícito e multas que podem chegar a 2% do faturamento da empresa. As organizações têm 180 dias para se adequar às novas regras. Especialistas em direito digital recomendam que empresas iniciem imediatamente o processo de adequação para evitar penalidades.",
    "categoria": "Legislação",
    "autor": "Marina Oliveira",
    "data": "2025-03-23",
    "imagem": "img/lgpd.jpg"
  }
];

// Função para formatar data
function formatarData(data) {
  const date = new Date(data);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

// Função para criar card de notícia
function criarCardNoticia(noticia) {
  return `
    <article class="noticia-card" onclick="navegarParaDetalhes(${noticia.id})">
      <div class="noticia-imagem">
        ${noticia.imagem}
      </div>
      <div class="noticia-conteudo">
        <span class="noticia-categoria">${noticia.categoria}</span>
        <h2 class="noticia-titulo">${noticia.titulo}</h2>
        <p class="noticia-descricao">${noticia.descricao}</p>
        <div class="noticia-meta">
          <span class="noticia-autor">${noticia.autor}</span>
          <span class="noticia-data">${formatarData(noticia.data)}</span>
        </div>
      </div>
    </article>
  `;
}

// Função para navegar para página de detalhes
function navegarParaDetalhes(id) {
  window.location.href = `detalhes.html?id=${id}`;
}

// Função para carregar página home
function carregarPaginaHome() {
  const container = document.getElementById('noticias-container');
  
  if (!container) return;
  
  container.innerHTML = '<div class="noticias-grid"></div>';
  const grid = container.querySelector('.noticias-grid');
  
  dados.forEach(noticia => {
    grid.innerHTML += criarCardNoticia(noticia);
  });
}

// Função para obter parâmetro da URL
function obterParametroUrl(nome) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nome);
}

// Função para encontrar notícia por ID
function encontrarNoticiaPorId(id) {
  return dados.find(noticia => noticia.id === parseInt(id));
}

// Função para criar página de detalhes
function criarPaginaDetalhes(noticia) {
  return `
    <article class="detalhes-noticia">
      <div class="detalhes-header">
        <span class="detalhes-categoria">${noticia.categoria}</span>
        <h1 class="detalhes-titulo">${noticia.titulo}</h1>
        <div class="detalhes-meta">
          <span class="detalhes-autor">Por ${noticia.autor}</span>
          <span class="detalhes-data">${formatarData(noticia.data)}</span>
        </div>
      </div>
      <div class="detalhes-imagem">
        ${noticia.imagem}
      </div>
      <div class="detalhes-conteudo">
        <p class="detalhes-texto">${noticia.conteudo}</p>
      </div>
    </article>
  `;
}

// Função para carregar página de detalhes
function carregarPaginaDetalhes() {
  const container = document.getElementById('detalhes-container');
  
  if (!container) return;
  
  const id = obterParametroUrl('id');
  
  if (!id) {
    container.innerHTML = '<div class="detalhes-noticia"><div class="detalhes-conteudo"><p>Notícia não encontrada.</p></div></div>';
    return;
  }
  
  const noticia = encontrarNoticiaPorId(id);
  
  if (!noticia) {
    container.innerHTML = '<div class="detalhes-noticia"><div class="detalhes-conteudo"><p>Notícia não encontrada.</p></div></div>';
    return;
  }
  
  container.innerHTML = criarPaginaDetalhes(noticia);
}

// Inicialização da página
document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname.split('/').pop();
  
  if (currentPage === 'index.html' || currentPage === '') {
    carregarPaginaHome();
  } else if (currentPage === 'detalhes.html') {
    carregarPaginaDetalhes();
  }
});
