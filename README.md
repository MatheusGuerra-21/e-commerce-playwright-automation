🛒 Automação E2E com Playwright & TypeScript | E-commerce

🎯 Sobre o Projeto

Este projeto é um estudo prático focado na automação de testes End-to-End (E2E) para aplicações Web. O objetivo é demonstrar a validação de fluxos críticos de negócios em um e-commerce (simulado através do Sauce Demo), desde a autenticação do usuário até a finalização de uma compra.

O projeto foi construído utilizando Playwright com TypeScript, focando em performance, estabilidade e nas melhores práticas do mercado de Quality Assurance (QA).

🚀 Diferenciais e Boas Práticas (Highlights para Recrutadores)

Arquitetura Page Object Model (POM): Separação clara entre a lógica de negócios das páginas e os scripts de teste, garantindo alta manutenibilidade, encapsulamento e reaproveitamento de código (DRY).

Testes Negativos e Mapeamento de Bugs: Inclusão de testes com perfis anômalos (problem_user) para validar resiliência do sistema e garantir que as mensagens de erro de interface (front-end) estão sendo disparadas corretamente em caso de falha de componentes.

Seletores Resilientes: Uso de atributos customizados (data-test) e locators dinâmicos (Template Literals) para interagir com múltiplos produtos através de uma única função inteligente.

Tipagem Estática: Uso de TypeScript para prevenir erros em tempo de desenvolvimento.

CI/CD Ready: Configuração otimizada para integração contínua. As screenshots e vídeos são capturados apenas quando um teste falha, economizando armazenamento.

📂 Estrutura do Projeto

📦 e-commerce-playwright-automation
 ┣ 📂 pages                 # Classes do Page Object Model (POM)
 ┃ ┣ 📜 LoginPage.ts        # Mapeamento e ações da tela de Login
 ┃ ┣ 📜 InventoryPage.ts    # Mapeamento e métodos dinâmicos de produtos
 ┃ ┣ 📜 CartPage.ts         # Gerenciamento de itens no carrinho
 ┃ ┗ 📜 CheckoutPage.ts     # Preenchimento de dados e validações de erro
 ┣ 📂 tests                 # Arquivos de especificação de testes
 ┃ ┗ 📜 checkout.spec.ts    # Casos de teste (Caminho Feliz, Validações e Erros)
 ┣ 📜 playwright.config.ts  # Configurações globais (Browsers, Retries, Reporters)
 ┣ 📜 tsconfig.json         # Configurações do TypeScript e ambiente Node
 ┣ 📜 package.json          # Dependências do projeto
 ┗ 📜 README.md             # Esta documentação


⚙️ Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

Node.js (Versão 16 ou superior)

Git

🛠️ Instalação

Clone este repositório:

git clone https://github.com/MatheusGuerra-21/e-commerce-playwright-automation.git


Acesse a pasta do projeto:

cd e-commerce-playwright-automation


Instale as dependências e os navegadores do Playwright:

npm install
npx playwright install


▶️ Como Executar os Testes

Para rodar todos os testes em modo headless (sem interface, ideal para CI/CD):

npx playwright test


Para rodar os testes com o navegador visível (modo headed, ótimo para debugar):

npx playwright test --headed


📊 Relatórios e Evidências

Após a execução, o Playwright gera um relatório detalhado. Para visualizá-lo, execute:

npx playwright show-report


💡 Dica: O projeto está configurado para que, caso um teste falhe (ex: elemento não encontrado, comportamento inesperado), uma screenshot e um vídeo do momento exato da falha sejam anexados automaticamente ao relatório HTML.

👨‍💻 Autor

Matheus Guerra Lobo de Miranda Costa

💼 LinkedIn: www.linkedin.com/in/matheus-guerra-c21

🐙 GitHub: https://github.com/MatheusGuerra-21

✉️ Email:  Matheusguerra2106@gmail.com