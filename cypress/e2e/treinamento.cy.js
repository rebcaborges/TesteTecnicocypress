describe('Entradas', () => {
    beforeEach(() => {
        cy.visit("https://www.wcaquino.me/cypress/componentes.html");
    });

    it('Cadastrar uma entrada', () => {
        cy.fixture('entradas').then((data) => {
            cy.get("#formNome").should("exist").type("Maria");
            cy.get('[data-cy="dataSobrenome"]').type("Silva Souza");
            cy.get('#formSexoFem').click();
            cy.get('#formComidaVegetariana').click();
            cy.get('[data-test="dataEscolaridade"]').select('Superior');
            cy.get('[value="Corrida"]').click();
            cy.get('#elementosForm\\:sugestoes').type(data.sugestao);



            cy.get('#elementosForm\\:sugestoes').should('have.value', data.sugestao);

            const preencherLinha = (indice, texto) => {
                const linha = `tbody > tr:nth-child(${indice + 1})`;
                const valores = ['Teste 01', 'Teste 02', 'Teste 03', 'Teste 04'];
                valores.forEach((valor, i) => {
                cy.get(`#tabelaUsuarios > tbody > tr:nth-child(${i + 1}) > td:nth-child(6) > input`)
                .clear()
                .type(valor);
                });             
              
            };

            data.linhasTabela.forEach((linha) => {
                preencherLinha(linha.indice, linha.valor);
            });

            cy.get('#formCadastrar').click();

            cy.contains('Cadastrado!').should('be.visible');
        });
    });
});
