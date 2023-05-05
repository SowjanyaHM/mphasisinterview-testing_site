describe('Verify Title', () => {
  it('Opens URL and verifies the title', () => {
    cy.visit('https://www.moneycorp.com/en-gb/', { 
      chromeWebSecurity: false 
    })
    cy.title().should('include', 'Moneycorp | Global Payments')
    cy.get('#language-dropdown-flag').click({force: true}) // Click on the dropdown button
    cy.contains('USA English').click({force: true}) // Click on the 'USA English' option
    cy.get('#language-dropdown-flag img[alt="English"]').should('be.visible')
    cy.get(':nth-child(7) > .o-wrapper > .teaser-block__wrapper > :nth-child(1) > .copy > .c-btn').click({force: true})
    cy.get('body > section:nth-child(4) > header:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > form:nth-child(1) > input:nth-child(1)').type("international payments");
    cy.wait(10000)
    cy.get('.article-list-item a').each(($a) => {
      // Get the href attribute of the link
      const href = $a.attr('href');
      expect(href).to.match(/^https:\/\/www.moneycorp.com\/en-us\//);
    });

  })
})