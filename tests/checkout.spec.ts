import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Fluxo End-to-End E-commerce', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;

  test.beforeEach(async ({ page }) => {
    // Inicialização de todas as páginas
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
    
    await loginPage.navigate();
  });

  test('Deve exibir erro ao tentar login com credenciais inválidas', async () => {
    await loginPage.login('usuario_falso', 'senha_falsa');
    await expect(loginPage.errorMessage).toBeVisible();
  });

  test('Fluxo completo: Login, Adicionar ao Carrinho e Checkout', async () => {
    // 1. Login
    await loginPage.login('standard_user', 'secret_sauce');
    
    // 2. Adicionar produtos
    await inventoryPage.addProductToCart('sauce-labs-backpack');
    await inventoryPage.addProductToCart('sauce-labs-bike-light');
    await expect(inventoryPage.cartBadge).toHaveText('2');

    // 3. Gerir Carrinho
    await inventoryPage.goToCart();
    await cartPage.removeProduct('sauce-labs-backpack');
    await expect(inventoryPage.cartBadge).toHaveText('1');
    await cartPage.proceedToCheckout();
    
    // 4. Checkout e Finalização
    await checkoutPage.fillInformationAndContinue('João', 'Silva', '12345');
    await checkoutPage.finishOrder();

    // Validação Final
    await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
  });

  test('Deve capturar o bug de preenchimento no checkout com problem_user', async () => {
    // 1. Login com o usuário problemático
    await loginPage.login('problem_user', 'secret_sauce');
    
    // 2. Adicionamos qualquer produto e vamos direto para o checkout
    await inventoryPage.addProductToCart('sauce-labs-backpack');
    await inventoryPage.goToCart();
    await cartPage.proceedToCheckout();
    
    // 3. Tentamos preencher os dados (O bug do site vai impedir o Last Name de ser preenchido)
    await checkoutPage.fillInformationAndContinue('João', 'Silva', '12345');
    
    // 4. Validamos que a interface barrou o avanço e exibiu o erro correto
    await expect(checkoutPage.errorMessage).toBeVisible();
    await expect(checkoutPage.errorMessage).toHaveText('Error: Last Name is required');
  });
});