
import Page from './page';

// let randomNumber = 1 + Math.floor(Math.random());
// console.log(randomNumber);

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PersonalInfoPage extends Page {
    /**
     * define selectors using getter methods
     */
    get personalInfo () { return $("//h3[contains(text(),'Your personal information')]") }

    get title () { return $("//input[@id='id_gender1']") }

    get FirstName () { return $("//input[@id='customer_firstname']") }

    get LastName () { return $("//input[@id='customer_lastname']") }

    get password () { return $("//input[@id='passwd']") }

    get dobDay () { return $("//select[@id='days']") }

    get dobMonth () { return $("//select[@id='months']") }

    get dobYear () { return $("//select[@id='years']") }

    get addFirstName () { return $("//input[@id='firstname']") }

    get addLastName () { return $("//input[@id='lastname']") }

    get address () { return $("//input[@id='address1']") }

    get city () { return $("//input[@id='city']") }

    get state () { return $("//select[@id='id_state']") }

    get postcode () { return $("//input[@id='postcode']") }

    get country () { return $("//select[@id='id_country']") }

    get mobileNum () { return $("//input[@id='phone_mobile']") }

    get alias () { return $("//input[@id='alias']") }

    get register () { return $("//button[@id='submitAccount']") }
    
    get verifyUser () { return $("//a[@class='account']/span") }
    
    get verifyloggedinUser () { return $("//span[text()='testing lastname']") }
    
    async enterPersonalInfo () {
        await (await this.title).click();
        await (await this.FirstName).setValue('testing');
        await (await this.LastName).setValue('lastname');
        await (await this.password).setValue('1234567');
        await (await this.dobDay).selectByAttribute("value", "5");
        await (await this.dobMonth).selectByAttribute("value", "6");
        await (await this.dobYear).selectByAttribute("value", "1986");
        // await (await this.addFirstName).setValue('testing');
        // await (await this.addLastName).setValue('lastname');
        await (await this.address).setValue('1700 Highway 146 North,');
        await (await this.city).setValue('Texas City');
        await (await this.state).selectByAttribute("value", "43");
        await (await this.postcode).setValue('77590');
        await (await this.country).selectByAttribute("value", "21");
        await (await this.mobileNum).setValue('+1 409-945-6500');
        //await (await this.alias).setValue('Home');
        await (await this.register).click();
    }
 
    
}



export default new PersonalInfoPage();

