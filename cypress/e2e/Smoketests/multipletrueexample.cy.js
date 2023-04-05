
describe('Click on Multiple Matching element', () => {
 
    it('Multiple elememts click', () => {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.xpath("//button[text()='ADD TO CART']").click({ multiple: true })

        
        cy.wait(5000)
        cy.get('.increment').click({ multiple: true })
        cy.get('.increment').click({ multiple: true })

        //cy.xpath("//button[text()='ADD TO CART']").click({multiple : true})
    })
  })