describe("EcommScrapping-Flipkart Testing", () => {
   
   
   
    it.only("Flipkart 'Forward+Backward' Flow Testing", () => {


        cy.visit('/' + 'login', { failOnStatusCode: false })

        // cy.wait(2000)



        // cy.get('#app > div > div > div > div > div:nth-child(3) > div.skins__LoginBtnCon-fIoCIg.bfKfLI > div > div > div:nth-child(3) > div > a > a > span') 
        // .should('contain','Login with Registered Mobile')
        // .click()


        // cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div > form > div.BInput__InCon-UCTdV.JspVP > table > tbody > tr > td.BInput__ErrCon-bianUW.kURtGg > input')
        // .should('have.attr','placeholder','Enter your registered mobile number')
        // .type(7477221726)

        // cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div > form > div.skins__OtpCon-gQOXOO.eVXRnx > button')
        // .should('contain','Get OTP')
        // .click()

        // cy.wait(20000)

        // cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div > form > button')
        // .should('contain','Submit')
        // .click()

       // cy.wait(2000)

        cy.get('.skins__PdtListing-QkWkM.BcfPC').as('loan_info')

        cy.get('@loan_info')
            .children()
            .eq(3)
            .should('contain', 'Continue Application')
            .click()


        cy.wait(2000)

        cy.get('#app > div > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div > div > div.skins__SummaryCon-frilyS.hNQNNO').as('profile_summary')

        cy.get('@profile_summary')
            .children()
            .should('have.length', 6)

        cy.get('span.skins__ProgressLine-iqbNez.dUHnXo')
        .should('have.css','background-color','rgb(253, 213, 53)')    

        cy.get('@profile_summary')
            .children()
            .eq(4)
            .should('contain', 'Additional Information')   
            .click() 

        cy.get('#app > div > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div.skins__SummaryCon-eWQpKA.gXiRNK').as('profile_addInfo')
        

        cy.get('@profile_addInfo')
        .should('have.length',6)

            
          //  .should('have.css','')

        //   cy.get('@profile_summary')
        //   .children()
        //   .eq(4)
        //   .children()   
        //   .children()  
        //   .eq(1)
        //   .children()
        //   .should('have.css','width','10%')

        
        // .then( wdth => {
        //   return  wdth
        // }).should('eq','10%')
       // .should('have.value','width','10%')
    })    



    it("pdInProfile: enable", () => {


        cy.server()
        cy.route({
            method: 'GET',
            url: '**/v1/me**',
            response: 'fixture:pdInProfile_enable.json'
        })
        cy.route('GET','**/v1/home','fixture:home_enable.json')

        cy.wait(5000)


        cy.visit('/' + 'login', { failOnStatusCode: false })

        // cy.wait(2000)



        // cy.get('#app > div > div > div > div > div:nth-child(3) > div.skins__LoginBtnCon-fIoCIg.bfKfLI > div > div > div:nth-child(3) > div > a > a > span') 
        // .should('contain','Login with Registered Mobile')
        // .click()


        // cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div > form > div.BInput__InCon-UCTdV.JspVP > table > tbody > tr > td.BInput__ErrCon-bianUW.kURtGg > input')
        // .should('have.attr','placeholder','Enter your registered mobile number')
        // .type(7477221726)

        // cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div > form > div.skins__OtpCon-gQOXOO.eVXRnx > button')
        // .should('contain','Get OTP')
        // .click()

        // cy.wait(25000)

        // cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div > form > button')
        // .should('contain','Submit')
        // .click()

        cy.get('.skins__PdtListing-QkWkM.BcfPC').as('loan_info')

        

        //cy.wait(5000)

        cy.get('@loan_info')
            .children()
            .eq(3)
            .should('contain', 'Continue Application')
            .click()

          cy.wait(2000)



        // cy.get('#app > div > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div > div > div.skins__SummaryCon-frilyS.hNQNNO').as('profile_summary')

        // cy.get('@profile_summary')
        //     .children()
        //     .should('have.length', 6)

        // cy.get('@profile_summary')
        //     .children()
        //     .eq(4)
        //     .should('contain', 'Additional Information')

    })

    it("pdInProfile: manual", () => {


        cy.server()
        cy.route({
            method: 'GET',
            url: '**/v1/me/**',
            response: 'fixture:pdInProfile_manual.json'
        })

        cy.route('GET','**/v1/home','fixture:home_manual.json')

        cy.wait(5000)



        cy.visit('/' + 'login', { failOnStatusCode: false })

        // cy.wait(2000)

        cy.get('.skins__PdtListing-QkWkM.BcfPC').as('loan_info')

    
        cy.wait(5000)

        cy.get('@loan_info')
            .children()
            .eq(3)
            .should('contain', 'Continue Application')
            .click()

          cy.wait(2000)



        // cy.get('#app > div > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div > div > div.skins__SummaryCon-frilyS.hNQNNO').as('profile_summary')

        // cy.get('@profile_summary')
        //     .children()
        //     .should('have.length', 6)

        // cy.get('@profile_summary')
        //     .children()
        //     .eq(4)
        //     .should('contain', 'Additional Information')

    })


    it("pdInProfile: processing", () => {

        cy.server()
        cy.route('GET','**/v1/home','fixture:home_processing.json')
        cy.route({
            method: 'GET',
            url: '**/v1/me/**',
            response: 'fixture:pdInProfile_processing.json'
        })


        cy.route({
            method: 'GET',
            url: '**/v1/me/**',
            response: 'fixture:pdInProfile_processing.json'
        })

        cy.wait(5000)




        cy.visit('/' + 'login', { failOnStatusCode: false })

        // cy.wait(2000)

        cy.get('.skins__PdtListing-QkWkM.BcfPC').as('loan_info')



        cy.get('@loan_info')
            .children()
            .eq(3)
            .should('contain', 'Continue Application')
            .click()

          cy.wait(2000)



        // cy.get('#app > div > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div > div > div.skins__SummaryCon-frilyS.hNQNNO').as('profile_summary')

        // cy.get('@profile_summary')
        //     .children()
        //     .should('have.length', 6)

        // cy.get('@profile_summary')
        //     .children()
        //     .eq(4)
        //     .should('contain', 'Additional Information')

    })


    it("pdInProfile: disable", () => {

        cy.server()
        cy.route('GET','**/v1/home','fixture:home_disable.json')

        cy.route({
            method: 'GET',
            url: '**/v1/me/**',
            response: 'fixture:pdInProfile_disable.json'
        })


        cy.wait(5000)



        cy.visit('/' + 'login', { failOnStatusCode: false })

        // cy.wait(2000)

        cy.get('.skins__PdtListing-QkWkM.BcfPC').as('loan_info')

      
       

        cy.get('@loan_info')
            .children()
            .eq(3)
            .should('contain', 'Continue Application')
            .click()

          cy.wait(2000)



    //     cy.get('#app > div > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div > div > div.skins__SummaryCon-frilyS.hNQNNO').as('profile_summary')

    //     cy.get('@profile_summary')
    //         .children()
    //         .should('have.length', 6)

    //     cy.get('@profile_summary')
    //         .children()
    //         .eq(4)
    //         .should('contain', 'Additional Information')

     })


})    