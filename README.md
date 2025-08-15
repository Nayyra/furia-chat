
# Chat Furioso

## Visão Geral

Chat Furioso é um aplicativo de chat em tempo real desenvolvido com **React**, que utiliza o **Firebase** (Firestore e Authentication) como backend. O usuário pode fazer login usando sua conta **Google** e enviar/receber mensagens instantâneas em um ambiente compartilhado. Cada mensagem enviada é armazenada no Firestore e atualizada em tempo real para todos os usuários conectados. A interface é estilizada com **CSS puro**, garantindo uma experiência visual simples e responsiva. O projeto é open-source e está hospedado via **GitHub Pages**, permitindo acesso fácil sem necessidade de servidor próprio.

## Funcionalidades

* **Autenticação via Google**: Login e logout usando a conta Google do usuário (Firebase Authentication).
* **Chat em tempo real**: Envio e recepção instantânea de mensagens entre usuários usando o Firestore em modo **Real-time Database**.
* **Armazenamento persistente**: Todas as mensagens são salvas no Firestore, permitindo histórico contínuo mesmo após reiniciar o app.
* **Interface amigável**: Layout simples e intuitivo, criado com CSS puro, incluindo lista de mensagens e campo de entrada de texto.
* **Responsividade básica**: Funciona em diferentes tamanhos de tela, adaptando a interface aos dispositivos.
* **Deploy automátizado**: Fácil publicação do projeto usando GitHub Pages.

## Tecnologias Utilizadas

* **React**: Biblioteca JavaScript para construção da interface (criada com Create React App).
* **Firebase**: Backend como serviço do Google, usando:

  * **Firestore**: Banco de dados em nuvem para armazenar mensagens em tempo real.
  * **Authentication**: Autenticação de usuários via Google.
* **CSS Puro**: Estilização customizada da interface, sem frameworks adicionais.
* **JavaScript (ES6+)**: Linguagem de programação do front-end.
* **Node.js & npm**: Ambiente de desenvolvimento local e gerenciador de pacotes (para instalar dependências e executar scripts).
* **Git e GitHub**: Controle de versão e hospedagem do código-fonte.
* **GitHub Pages**: Plataforma de hospedagem para a versão estática do app.
* **gh-pages** (npm package): Ferramenta para facilitar o deploy no GitHub Pages.

## Como Executar Localmente

Para rodar o projeto na sua máquina local, siga os passos abaixo:

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/chat-furioso.git
   ```
2. **Acesse a pasta do projeto**:

   ```bash
   cd chat-furioso
   ```
3. **Instale as dependências**:

   ```bash
   npm install
   ```
4. **Configure o Firebase**:

   * Crie um projeto no [Firebase Console](https://console.firebase.google.com) e habilite:

     * *Authentication* → provedor Google.
     * *Cloud Firestore* (modo de teste ou regras adequadas).
   * No seu projeto local, crie um arquivo chamado `.env.local` na raiz (ao lado de `package.json`) e adicione suas credenciais do Firebase obtidas em *Configurações do Projeto*:

     ```env
     REACT_APP_FIREBASE_API_KEY=<sua-api-key>
     REACT_APP_FIREBASE_AUTH_DOMAIN=<seu-auth-domain>
     REACT_APP_FIREBASE_PROJECT_ID=<seu-project-id>
     REACT_APP_FIREBASE_STORAGE_BUCKET=<seu-storage-bucket>
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<seu-messaging-sender-id>
     REACT_APP_FIREBASE_APP_ID=<seu-app-id>
     ```

     Substitua cada valor pelo correspondente do seu projeto Firebase.
5. **Inicie o servidor de desenvolvimento**:

   ```bash
   npm start
   ```

   O aplicativo estará disponível em `http://localhost:3000` no seu navegador.

> **Observação:** Certifique-se de ter o Node.js e o npm instalados (versão estável recomendada, como Node 14 ou superior). Se usar outro gerenciador, adapte os comandos conforme necessário.


## Estrutura de Pastas

A estrutura principal do projeto é a seguinte:

* `public/`: contém arquivos estáticos públicos (como `index.html`, ícones e imagens).
* `src/`: contém todo o código-fonte da aplicação:

  * `components/`: componentes React reutilizáveis, por exemplo componentes de chat, lista de mensagens e botão de login.
  * `services/`: lógica de integração com serviços externos, como a configuração do Firebase, funções para login Google e operações no Firestore. Por exemplo, um arquivo `firebase.js` ou `firebaseConfig.js`.
  * `App.js`: componente principal que monta a estrutura geral do app, definindo rotas (se houver) e compondo os principais elementos da interface.
  * `index.js`: ponto de entrada da aplicação React; renderiza o `<App />` no DOM.
  * `styles/` (opcional): se aplicável, pasta para arquivos CSS (estilização) separados; caso contrário, os estilos podem estar próximos aos componentes ou em um arquivo único.
* Arquivos de configuração na raiz do projeto:

  * `package.json`: gerencia dependências, scripts e metadados do projeto.
  * `.env.local`: (não comitado) armazena variáveis de ambiente com as credenciais do Firebase.
  * `README.md`: este arquivo de documentação.
  * `LICENSE`: arquivo com a Licença MIT.

