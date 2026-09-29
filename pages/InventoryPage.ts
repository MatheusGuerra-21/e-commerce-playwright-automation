import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly cartLink: Locator;
  readonly cartBadge: Locator;
  readonly pageTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    // Mapeamento dos elementos gerais da página
    this.cartLink = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.pageTitle = page.locator('.title');
  }

  //Método dinâmico para adicionar produtos.
   
   
  async addProductToCart(productNameId: string) {
    const addToCartButton = this.page.locator(`[data-test="add-to-cart-${productNameId}"]`);
    await addToCartButton.click();
  }

  // Método dinâmico para remover produtos.
  async removeProductFromCart(productNameId: string) {
    const removeButton = this.page.locator(`[data-test="remove-${productNameId}"]`);
    await removeButton.click();
  }

  //Navega para a página do carrinho
  async goToCart() {
    await this.cartLink.click();
  }
}