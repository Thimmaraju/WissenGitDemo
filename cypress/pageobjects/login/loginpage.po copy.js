class LoginPage{

    orangehrmlogo(){

        return 'img[alt="company-branding"]'
    }

    usernameinput(){

        return '//input[@name="username"]'
    }

    passwordInput(){

        return 'input[name="password"]'

    }

    loginBtn(){

        return 'button[type="submit"]'
    }

    loginerrormessage(){

        return "Invalid credentials"
    }


    loginwithcreds(value1, value2){

        cy.xpath(this.usernameinput()).type(value1)
        cy.get(this.passwordInput(),{timeout:40000}).type(value2)
        cy.get(this.loginBtn()).click()
    }
}

export default LoginPage;