// import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

// addMatchImageSnapshotCommand();
// addMatchImageSnapshotPlugin(on, config);

describe("kreditBee App Snapshot Testing ", () => {

    it.skip("snapshots", () => {
        cy.visit('/' + 'login', { failOnStatusCode: false })

        cy.wait(2000)

        cy.matchImageSnapshot('home')


        cy.get('.skins__PdtListing-QkWkM.BcfPC', { failOnStatusCode: false }).as('loan_info')

        cy.get('@loan_info')
            .children()
            .eq(3)
            .should('contain', 'Continue Application')
            .matchImageSnapshot('before-clicking-continue-button')
           // .click()


        cy.get('@loan_info')
            .children()
            .eq(3)
            .click({force:true})
        // cy.wait(2000)    
        // cy.matchImageSnapshot('after-clicking-continue-button')

        //cy.wait(5000)

    })
})