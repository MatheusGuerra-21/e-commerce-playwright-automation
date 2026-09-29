import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly checkoutButton: Locator;
  readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
  }

  /**
   * Remove um produto específico de dentro do carrinho
   */
  async removeProduct(productNameId: string) {
    const removeButton = this.page.locator(`[data-test="remove-${productNameId}"]`);
    await removeButton.click();
  }

  /**
   * Avança para a etapa de checkout
   */
  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}