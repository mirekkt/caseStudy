const { assert, expect } = require("chai")
const { it } = require("mocha")

const phoneNr = '777dvatrinula000';
const firstName = 'KrestniJmeno';
const lastName = 'Prijmeni'

describe('Fill in the registration form with incorrect phone number format', () => {
  it('visit form', () => {
    cy.visit('https://revolgy-forms-case-study-master.staging.axiory.com/jp/registration/demo')
  })
  it('Fill in first name', ()=>{
    cy.get('#lastname').click().type(firstName)
    expect('test').to.be.a('string')
  })
  it('Fill in last name', ()=>{
    cy.get('#firstname').click().type(lastName)
    expect('prijmeni').to.be.a('string')
  })
  it('Fill in phone number', ()=>{
    cy.get('#phone').click().type(phoneNr)
    cy.contains('.error-messages')
  })
})