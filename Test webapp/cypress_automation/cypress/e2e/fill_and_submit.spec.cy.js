const { assert, expect } = require("chai")
const { it } = require("mocha")

describe('Fill in the registration form', () => {
  it('visit form', () => {
    cy.visit('https://revolgy-forms-case-study-master.staging.axiory.com/jp/registration/demo')
    cy.contains('.logo')
  })
  it('Fill in first name', ()=>{
    cy.get('#lastname').click().type('krestniJmeno')
    expect('test').to.be.a('string')
  })
  it('Fill in last name', ()=>{
    cy.get('#firstname').click().type('prijmeni')
    expect('prijmeni').to.be.a('string')
  })
  it('Fill in phone number', ()=>{
    cy.get('#phone').click().type('111222333')
    expect(111222333).to.equal(111222333)
  })
  it('Fill in the country', ()=>{
    cy.get('#countryLabel').click().type('Earth')
  })
  it('Fill in the e-mail address', ()=>{
    cy.get('#email').click().type('email@mail.com')
  })
  it('Select the platform', ()=>{
    cy.get('#platform').select('mt4').should('have.value', 'mt4')
  })
  it('Select the account type', ()=>{
    cy.get('#accountType').select('nano').should('have.value', 'nano')
  })
  it('Select the leverage', ()=>{
    cy.get('#leverage').select('1:1').should('have.value', '1:1')
  })
  it('Select the currency', ()=>{
    cy.get('#currency').select('USD').should('have.value', 'USD')
  })
  it('Initial deposit amount', ()=>{
    cy.get('#deposit').click().type('1500')
    expect('1500').to.equal('1500')
  })
  it('Check the agree checkbox', ()=>{
    cy.get('[type="checkbox"]').check()
  })
  it('Submit the form', ()=>{
    cy.get('form').submit()
  })
})
