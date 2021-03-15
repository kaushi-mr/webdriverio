
/**
 * sub page containing specific selectors and methods for a specific page
 */
 class AddToCartPage {
    /**
     * define selectors using getter methods
     */
    get FirstProduct () { return $("(//a[@class='product_img_link']/img)[1]") }

    get productDetails () { return $("//div[contains(@class,'layer_cart_product')]/h2") }
    
    get addtocart () { return $("(//span[text()='Add to cart'])[1]") }
    
    get checkout () { return $("//a[@title='Proceed to checkout']") }
    
    async clickProduct () {
        await (await this.FirstProduct).scrollIntoView();
        await (await this.FirstProduct).moveTo();
        browser.pause(5000)
        await (await this.addtocart).click();
        browser.pause(5000)
        browser.acceptAlert();
        //await (await this.checkout).click();        
    }

}

export default new AddToCartPage();

