# Visualizador de Perfil do GitHub

![GitHub](https://img.shields.io/badge/GitHub-API-black?style=flat&logo=github)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 📋 Sobre o Projeto

Este é um visualizador de perfil do GitHub que permite aos usuários buscar e visualizar informações de qualquer perfil do GitHub de forma rápida e fácil. O projeto utiliza a API pública do GitHub e foi desenvolvido com JavaScript moderno (ES6+).

## ✨ Funcionalidades

- 🔍 Busca de usuários do GitHub por nome de usuário
- 👤 Visualização de informações básicas do perfil
- 📊 Exibição do número de seguidores e seguindo
- 🖼️ Visualização da foto do perfil
- 📝 Exibição da bio do usuário

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3 (com animações e responsividade)
- JavaScript (ES6+ Modules)
- API do GitHub
- Devicon para ícones

## 📦 Estrutura do Projeto

```
├── index.html
└── src/
    ├── css/
    │   ├── animations.css
    │   ├── reset.css
    │   ├── responsive.css
    │   └── styles.css
    └── js/
        ├── index.js
        └── modules/
            ├── config.js
            ├── elements.js
            ├── githubService.js
            └── renderer.js
```

## 💻 Como Executar

1. Clone este repositório:
   ```bash
   git clone https://github.com/mateus-soares28/visualizador-perfil-Github.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd visualizador-perfil-Github
   ```

3. Devido ao uso de módulos ES6, você precisa executar o projeto através de um servidor local. Algumas opções:
   - Usar a extensão Live Server no VS Code
   - Usar o Python para criar um servidor local:
     ```bash
     python -m http.server 8000
     ```
   - Usar o Node.js com um pacote como `http-server`

4. Abra o navegador e acesse o endereço local (exemplo: `http://localhost:8000`)

## 🌟 Recursos e Melhorias Futuras

- [ ] Adicionar mais informações do perfil (repositórios, stars, etc.)
- [ ] Implementar tema escuro/claro
- [ ] Adicionar gráficos de contribuições
- [ ] Salvar histórico de buscas
- [ ] Adicionar suporte para visualização de organizações

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Faça commit das suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👤 Autor

Mateus Soares
- GitHub: [@mateus-soares28](https://github.com/mateus-soares28)

## 🙏 Agradecimentos

- GitHub pela disponibilização da API
- Comunidade DevQuest pelo suporte e aprendizado