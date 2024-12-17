describe('Entradas', () => {
    beforeEach(() => {
        cy.visit("https://www.wcaquino.me/cypress/componentes.html");
    });

    it('Cadastrar uma entrada', () => {
        // Carregando dados externos
        cy.fixture('entradas').then((data) => {
            // Preenchendo dados principais
            cy.get("#formNome").should("exist").type(data.nome);
            cy.get('[data-cy="dataSobrenome"]').type(data.sobrenome);
            cy.get('#formSexoFem').click();
            cy.get('#formComidaVegetariana').click();
            cy.get('[data-test="dataEscolaridade"]').select('Superior');
            cy.get('[value="Corrida"]').click();
            cy.get('#elementosForm\\:sugestoes').type(data.sugestao);

            // Validação do campo sugestões
            cy.get('#elementosForm\\:sugestoes').should('have.value', data.sugestao);

            // Função auxiliar para preencher linhas da tabela
            const preencherLinha = (indice, texto) => {
                cy.get(`:nth-child(${indice}) > :nth-child(3) > input`).click();
                cy.get(`:nth-child(${indice}) > :nth-child(4) > input`).click();
                cy.get(`:nth-child(${indice}) > :nth-child(5) > table > tbody > tr > td > input`).click();
                cy.get(`:nth-child(${indice}) > :nth-child(6) > input`).type(texto);
            };

            // Iterando sobre linhas da tabela
            data.linhasTabela.forEach((linha) => {
                preencherLinha(linha.indice, linha.valor);
            });

            // Cadastrar
            cy.get('#formCadastrar').click();

            // Validação final (exemplo: mensagem de sucesso)
            cy.contains('Cadastrado!').should('be.visible');
        });
    });
});
