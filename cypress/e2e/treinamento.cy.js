


describe('Entradas', () => {
    it('Cadastrar uma entrada', () => {
        cy.visit("https://www.wcaquino.me/cypress/componentes.html");
        cy.get("#formNome").should("exist");
        cy.get('#formNome').type("Maria Lorem ipsum dolor sit ")
        cy.get('[data-cy="dataSobrenome"]').type("Souza Silva")
        cy.get('#formSexoFem').click();
        cy.get('#formComidaVegetariana').click();
        cy.get('[data-test="dataEscolaridade"]').select('Superior');
        cy.get('[value="Corrida"]').click();
        cy.get('#elementosForm\\:sugestoes').type("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.");
        // Campo Sugestões dá error quando excede quantidadde de letras 

        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(3) > input');
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(4) > input').click();
        cy.get(':nth-child(1) > :nth-child(5) > table > tbody > tr > td > input').click();
        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input').type("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.");

        cy.get(':nth-child(2) > :nth-child(3) > input');
        cy.get(':nth-child(2) > :nth-child(4) > input').click();
        cy.get(':nth-child(2) > :nth-child(5) > table > tbody > tr > td > input').click();
        cy.get(':nth-child(2) > :nth-child(6) > input').type("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.");

        cy.get(':nth-child(3) > :nth-child(3) > input');
        cy.get(':nth-child(3) > :nth-child(4) > input').click();
        cy.get(':nth-child(3) > :nth-child(5) > table > tbody > tr > td > input').click();
        cy.get(':nth-child(3) > :nth-child(6) > input').type("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.");

        cy.get(':nth-child(4) > :nth-child(3) > input');
        cy.get(':nth-child(4) > :nth-child(4)').click();
        cy.get(':nth-child(4) > :nth-child(5) > table > tbody > tr > td > input').click();
        cy.get(':nth-child(4) > :nth-child(6) > input').type("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.");

        cy.get(':nth-child(5) > :nth-child(3) > input');
        cy.get(':nth-child(5) > :nth-child(4) > input').click();
        cy.get(':nth-child(5) > :nth-child(5) > table > tbody > tr > td > input').click();
        cy.get(':nth-child(5) > :nth-child(6) > input').type("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.")
        
        cy.get('#formCadastrar').click();









   
   
   
    });
});