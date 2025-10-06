# Trabalho Prático 05 - Semanas 7 e 8

**Páginas de detalhes dinâmicas**

Nessa etapa, vamos evoluir o trabalho anterior, acrescentando a página de detalhes, conforme o  projeto escolhido. Imagine que a página principal (home-page) mostre um visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado pra a página de detalhes. A página de detalhe vai mostrar todas as informações sobre o item do seu projeto. seja esse item uma notícia, filme, receita, lugar turístico ou evento.

Leia o enunciado completo no Canvas. 

**IMPORTANTE:** Assim como informado anteriormente, capriche na etapa pois você vai precisar dessa parte para as próximas semanas. 

**IMPORTANTE:** Você deve trabalhar e alterar apenas arquivos dentro da pasta **`public`,** mantendo os arquivos **`index.html`**, **`styles.css`** e **`app.js`** com estes nomes, conforme enunciado. Deixe todos os demais arquivos e pastas desse repositório inalterados. **PRESTE MUITA ATENÇÃO NISSO.**

## Informações Gerais

- Nome: Vitor Ibraim
- Matricula: 2024001234
- Proposta de projeto escolhida: Portal de Notícias Locais
- Breve descrição sobre seu projeto: Um portal de notícias locais que apresenta diversas categorias de notícias (Cidades, Tecnologia, Cultura, Ciência e Legislação) com navegação dinâmica entre a página inicial e páginas de detalhes de cada notícia.

## Print da Home-Page

<<  COLOQUE A IMAGEM AQUI >>

## Print da página de detalhes do item

<<  COLOQUE A IMAGEM AQUI >>

## Cole aqui abaixo a estrutura JSON utilizada no app.js

```javascript
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
]
```