const lastName2 = 'Matrix'
const phoneNr = '111222333'

describe('Fill in some fields of the form', () => {
  it('Visit the form', () => {
    cy.visit('https://revolgy-forms-case-study-master.staging.axiory.com/jp/registration/demo')
    cy.contains('.logo')
  })
  it('Fill in the family name', ()=>{
    cy.get('#firstname').click().type(lastName2)
  })
  it('Fill in phone number', ()=>{
    cy.get('#phone').click().type(phoneNr)
  })
  it('Select the account type', ()=>{
    cy.get('#accountType').select('nano').should('have.value', 'nano')
  })
  it('Check the agree checkbox', ()=>{
    cy.get('[type="checkbox"]').check()
  })
  it('Submit the form', ()=>{
    cy.get('form').submit()
    cy.contains('Internal Server Error')
  })
})