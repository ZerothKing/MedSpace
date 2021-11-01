import React from 'react';

describe ('Start e2e testing', () => {
  it('Homepage Test', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.visit('/')
    cy.contains('Scroll').click()
  })

  it('Register Test', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    const email = "test2@gmail.com";
    const password = "testtest";
    const username = "test2"
    cy.visit('/login')
    cy.contains('REGISTER').click()

    cy.get('input[name=name]').type(username)

    cy.get('input[name=email]').type(email)

    // {enter} causes the form to submit
    cy.get('input[name=password]').type(`${password}{enter}`)

    // we should be redirected to /dashboard
    cy.url().should('include', '/login')
  })

  it('Login Test', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    const email = "sanjkeetjena@gmail.com";
    const password = "sanjkeet";
    cy.visit('/login')


    cy.get('input[name=loginEmail]').type(email).blur()

    // {enter} causes the form to submit
    cy.get('input[name=loginPassword]').type(`${password}{enter}`)

    // we should be redirected to /dashboard
    cy.url().should('include', '/account')
  })

  it('Profile Test', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    const email = "sanjkeetjena@gmail.com";
    const password = "sanjkeet";
    cy.visit('/login')


    cy.get('input[name=loginEmail]').type(email)

    // {enter} causes the form to submit
    cy.get('input[name=loginPassword]').type(`${password}{enter}`)

    // we should be redirected to /dashboard
    cy.url().should('include', '/account')
    cy.visit('/account')
    cy.contains("Sanjkeet")
  })

  it('Orders Test', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    const email = "sanjkeetjena@gmail.com";
    const password = "sanjkeet";
    cy.visit('/login')


    cy.get('input[name=loginEmail]').type(email)

    // {enter} causes the form to submit
    cy.get('input[name=loginPassword]').type(`${password}{enter}`)

    // we should be redirected to /dashboard
    cy.url().should('include', '/account')
    cy.visit('/account')
    cy.contains("Sanjkeet")
    cy.visit('/orders')
    cy.contains('Items Qty')
  })

  it('Edit Profile Test', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    const email = "sanjkeetjena@gmail.com";
    const password = "sanjkeet";
    cy.visit('/login')


    cy.get('input[name=loginEmail]').type(email)

    // {enter} causes the form to submit
    cy.get('input[name=loginPassword]').type(`${password}{enter}`)

    // we should be redirected to /dashboard
    cy.url().should('include', '/account')
    cy.visit('/account')
    cy.contains("Sanjkeet")
    cy.visit('/me/update')
    cy.contains('Update')
    const newName = 'Sanjkeet'
    cy.get('input[name=name]').type(`${newName}{enter}`)
  })

  it('Product Test', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    const email = "sanjkeetjena@gmail.com";
    const password = "sanjkeet";
    cy.visit('/login')


    cy.get('input[name=loginEmail]').type(email)

    // {enter} causes the form to submit
    cy.get('input[name=loginPassword]').type(`${password}{enter}`)

    // we should be redirected to /dashboard
    cy.url().should('include', '/account')

    cy.visit('/products')
    cy.get('[href="/product/617e8034867bb93c98286228"]').click()
    cy.url().should('include', '617e8034867bb93c98286228')
  })

  it('Product Review Test', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    const email = "sanjkeetjena@gmail.com";
    const password = "sanjkeet";
    cy.visit('/login')


    cy.get('input[name=loginEmail]').type(email)

    // {enter} causes the form to submit
    cy.get('input[name=loginPassword]').type(`${password}{enter}`)

    // we should be redirected to /dashboard
    cy.url().should('include', '/account')

    cy.visit('/products')
    cy.get('[href="/product/617e8034867bb93c98286228"]').click()
    cy.url().should('include', '617e8034867bb93c98286228')
    cy.get('.submitReview').click()
    cy.wait(3000)
    cy.get('.submitDialogTextArea').type("Bad Product")
    cy.get('.MuiButton-textPrimary > .MuiButton-label').click()

  })


  it('Cart Test', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    const email = "sanjkeetjena@gmail.com";
    const password = "sanjkeet";
    cy.visit('/login')


    cy.get('input[name=loginEmail]').type(email)

    // {enter} causes the form to submit
    cy.get('input[name=loginPassword]').type(`${password}{enter}`)

    // we should be redirected to /dashboard
    cy.url().should('include', '/account')

    cy.visit('/products')
    cy.get('[href="/product/617e8034867bb93c98286228"]').click()
    cy.url().should('include', '617e8034867bb93c98286228')
    cy.get('.detailsBlock-3-1 > :nth-child(2)').click()

    cy.visit('/cart')


    cy.contains('Check Out').click()
    cy.url().should('include', '/shipping')
  })

  it('Shipping Test', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    const email = "sanjkeetjena@gmail.com";
    const password = "sanjkeet";
    cy.visit('/login')


    cy.get('input[name=loginEmail]').type(email)

    // {enter} causes the form to submit
    cy.get('input[name=loginPassword]').type(`${password}{enter}`)

    // we should be redirected to /dashboard
    cy.url().should('include', '/account')

    cy.visit('/products')
    cy.get('[href="/product/617e8034867bb93c98286228"]').click()
    cy.url().should('include', '617e8034867bb93c98286228')
    cy.get('.detailsBlock-3-1 > :nth-child(2)').click()

    cy.visit('/cart')


    cy.contains('Check Out').click()
    cy.url().should('include', '/shipping')
    cy.get(':nth-child(1) > input').type("Random Address")
    cy.get('.shippingForm > :nth-child(2) > input').type("RandomCity")
    cy.get(':nth-child(3) > input').type("000000")
    cy.get(':nth-child(4) > input').type("9999999999")
    cy.get('select').select('India')
    cy.get(':nth-child(6) > select').select('Odisha')
    cy.get('.shippingBtn').click()
    cy.url().should('include', 'order/confirm')
    cy.get('.orderSummary > button').click()

  })

});
