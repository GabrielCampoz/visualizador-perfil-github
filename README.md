<div align="center">

# 🔎 Visualizador de Perfil do GitHub

Explore perfis e descubra seus repositórios mais recentes em um só lugar.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub API](https://img.shields.io/badge/GitHub_API-181717?style=for-the-badge&logo=github&logoColor=white)

</div>

## 💻 Sobre o projeto

Aplicação desenvolvida com HTML, CSS e JavaScript para consultar perfis pela API pública do GitHub. Ao buscar um nome de usuário, a página apresenta suas informações e até **10 repositórios públicos mais recentemente criados**.

Os repositórios aparecem em cards com suas estatísticas e um link direto para o GitHub, em uma interface que se adapta a diferentes tamanhos de tela.

## 🌐 Acesso

Publicação planejada no **GitHub Pages**. Endereço previsto após a configuração:

[**Abrir o Visualizador de Perfil do GitHub →**](https://gabrielcampoz.github.io/visualizador-perfil-github/)

## ✨ Funcionalidades

- Busca de perfis pelo nome de usuário do GitHub.
- Exibição de avatar, nome, biografia, seguidores e pessoas seguindo.
- Listagem de até 10 repositórios, ordenados do mais novo ao mais antigo por data de criação.
- Cards com stars, forks, watchers e linguagem principal.
- Abertura do repositório em uma nova aba ao clicar no card.
- Grade responsiva com até três colunas.
- Indicador de carregamento durante a consulta.
- Mensagens para campo vazio, usuário inexistente, falhas na consulta e ausência de repositórios públicos.

## 🛠️ Tecnologias e conceitos

| Tecnologia | Uso no projeto |
| --- | --- |
| HTML5 | Estrutura da página |
| CSS3 | Estilização, CSS Grid, Flexbox e media queries |
| JavaScript | Manipulação do DOM e organização em módulos |
| Fetch API | Requisições HTTP à API do GitHub |
| Async/await e Promise.all | Busca assíncrona de perfil e repositórios em paralelo |

O projeto não utiliza frameworks nem exige uma etapa de build.

## 📁 Estrutura

```text
visualizador-perfil-github/
├── index.html
├── README.md
└── src/
    ├── css/
    │   ├── animations.css
    │   ├── reset.css
    │   ├── responsive.css
    │   └── styles.css
    └── js/
        ├── github-api.js
        ├── index.js
        └── profile-view.js
```

- **github-api.js:** consulta os dados do perfil e dos repositórios.
- **index.js:** coordena a busca, o carregamento e o tratamento de erros.
- **profile-view.js:** cria os elementos da interface e exibe os resultados.

## 🚀 Executar localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/GabrielCampoz/visualizador-perfil-github.git
   ```

2. Abra a pasta no VS Code.
3. Com a extensão **Live Server** instalada, clique com o botão direito em `index.html` e selecione **Open with Live Server**.
4. Digite um nome de usuário do GitHub e clique em **Buscar**.

Não é necessário instalar dependências. Use um servidor HTTP local, pois o JavaScript utiliza módulos ES. É preciso ter conexão com a internet para consultar os perfis.

## 🔌 Consultas à API

```http
GET https://api.github.com/users/{username}
GET https://api.github.com/users/{username}/repos?sort=created&direction=desc&per_page=10
```

As consultas são feitas sem token de autenticação e exibem dados públicos.

## 👨‍💻 Autor

Desenvolvido por [Gabriel Campoz](https://github.com/GabrielCampoz).
