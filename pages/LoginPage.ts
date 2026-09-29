import { Page, Locator } from '@playwright/test';

export class LoginPage {
// 'readonly' significa que esses atributos não podem ser reatribuídos depois de criados.
// Page é a aba do navegador. Locator é uma referência a um elemento na tela.
readonly page: Page;
readonly usernameInput: Locator;
readonly passwordInput: Locator;
readonly loginButton: Locator;
readonly errorMessage: Locator;

// O constructor é o primeiro método executado quando fazemos 'new LoginPage(page)'
// Ele recebe a página do teste e mapeia onde cada elemento está na tela usando seletores.
constructor(page: Page) {
this.page = page;
// Buscamos os elementos pelo atributo 'data-test', que é a melhor prática para automação
this.usernameInput = page.locator('[data-test="username"]');
this.passwordInput = page.locator('[data-test="password"]');
this.loginButton = page.locator('[data-test="login-button"]');
this.errorMessage = page.locator('[data-test="error"]');
}

// Método para abrir a URL base do site
async navigate() {
await this.page.goto('https://www.saucedemo.com/'); //Usando site pois é um ambiente criado para prática e demosntração de testes automatizados 
}

// Método que encapsula a ação de fazer login, recebendo usuário e senha 
async login(username: string, password: string) {
await this.usernameInput.fill(username); 
await this.passwordInput.fill(password); 
await this.loginButton.click();          
}
}