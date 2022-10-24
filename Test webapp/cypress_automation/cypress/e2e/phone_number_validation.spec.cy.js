const { assert, expect } = require("chai")
const { it } = require("mocha")

describe('Fill in the registration form with incorrect phone number format', () => {
  it('visit form', () => {
    cy.visit('https://revolgy-forms-case-study-master.staging.axiory.com/jp/registration/demo')
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
    cy.get('#phone').click().type('777dvatrinula000')
    cy.contains('.error-messages')
  })
})