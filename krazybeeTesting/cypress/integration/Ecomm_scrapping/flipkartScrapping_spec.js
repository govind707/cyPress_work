describe("EcommScrapping-Flipkart Testing", () => {



    it("Flipkart 'Forward+Backward' Flow Testing", () => {


        cy.visit('/' + 'login', { failOnStatusCode: false })

      //  cy.screenshot('login_page')

        cy.wait(2000)


       //**********************login*********************

        cy.get('#app > div > div > div > div > div:nth-child(3) > div.skins__LoginBtnCon-fIoCIg.bfKfLI > div > div > div:nth-child(3) > div > a > a > span') 
        .should('contain','Login with Registered Mobile')
        .click()


        cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div > form > div.BInput__InCon-UCTdV.JspVP > table > tbody > tr > td.BInput__ErrCon-bianUW.kURtGg > input')
        .should('have.attr','placeholder','Enter your registered mobile number')
        .type(7477221726)

        cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div > form > div.skins__OtpCon-gQOXOO.eVXRnx > button')
        .should('contain','Get OTP')
        .click()

       // cy.screenshot('Enter_otp')

        cy.wait(15000)

        cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div > form > button')
        .should('contain','Submit')
        .click()

        cy.wait(2000)

        // *****************home********************

        cy.get('.skins__PdtListing-QkWkM.BcfPC', { failOnStatusCode: false }).as('loan_info')

       // cy.screenshot('home')

        cy.get('@loan_info')
            .children()
            .eq(3)
            .should('contain', 'Continue Application')
            .click()

        // *************profile/summary****************

        cy.wait(2000)

        cy.get('#app > div > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div > div > div.skins__SummaryCon-frilyS.hNQNNO').as('profile_summary')

        cy.get('@profile_summary')
            .children()
            .should('have.length', 6)

        cy.get('span.skins__ProgressLine-iqbNez.dUHnXo')
            .should('have.css', 'background-color', 'rgb(253, 213, 53)')

        cy.get('@profile_summary')
            .children()
            .eq(4)
            .should('contain', 'Additional Information')
            .click()
        cy.wait(2000)


        // *********************profile/Additional_Information*****************************

        cy.screenshot('Flipkart-Ecom-is-not-Done-yet')
        cy.get('#app > div > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div.skins__SummaryCon-eWQpKA.gXiRNK > div:nth-child(5) > div').as('profile_addInfo_ecom')


        cy.get('@profile_addInfo_ecom')
            .should('contain', 'E-commerce Connect')

        cy.get('@profile_addInfo_ecom')
            .children()
            .should('have.length', 2)

        cy.get('@profile_addInfo_ecom')
            .children()
            .eq(0)
            .children()
            .children()
            .children()
            .should('have.length', 3)
            .eq(2)   //selecting arrow column
            .children()
            .should('have.css', 'color', 'rgb(242, 177, 0)') // assertion for testing arrow


        cy.get('@profile_addInfo_ecom')
            .click()

           cy.wait(2000)

        // ******************** E-Commerce Scrapping ************************

        cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div > div.skins__StyledOptions-flVgwh.jxcLYf.skins__PDSelFixed-ebFJqK.evbfZN').as('amazon-flipkart')

        cy.get('@amazon-flipkart')
            .children()
            .should('have.length', 3)

        cy.get('@amazon-flipkart')
            .children()
            .eq(1)
            .should('contain', 'Use Flipkart Account')
            .click()

         cy.wait(1000)

        cy.get('@amazon-flipkart')
            .children()
            .eq(2)
            .click()

         cy.wait(2000)

        // ******************** Flipkart Sync **************************************

        cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div.skins__StyledHeader-bARYhf.JRMTC')
            .should('contain', 'Flipkart Sync')

        cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div.skins__StyledMiddleSection-fQnHBy.ksnYpt > div > div.skins__StyledSteps-kKtHyM.iTkqfP')
            .should('contain', 'STEPS')
            .siblings()
            .children() //table
            .children() //tbody
            .children() // rows containing paragraphs
            .should('have.length', 2)


        // Test for terms and conditions
        
        cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div.skins__StyledTnCWrapper-kQzcIn.cORojq > table > tbody > tr > td:nth-child(2) > p > span:nth-child(1) > a')
        .should('contain','Terms and Conditions')
        .click()
        .url()
        .should('eq','http://react-app-monica.s3-website-ap-southeast-1.amazonaws.com/store/tnc')
        

        cy.wait(1000)

      //  cy.screenshot('Terms-nd-Conditions')

        cy.get('#app > div > div > div > div.BPage__HeaderCon-kVnWyQ.hklIgC > img')   // // coming back to original flow
        .click()

        cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div.skins__StyledTnCWrapper-kQzcIn.cORojq > table > tbody > tr > td:nth-child(2) > p > span:nth-child(2) > a')
        .should('contain','Privacy Policy')
        .click()
        .url()
        .should('eq','http://react-app-monica.s3-website-ap-southeast-1.amazonaws.com/store/privacypolicy')

       

        cy.wait(1000)

       // cy.screenshot('Privacy-Policy')

        cy.get('#app > div > div > div > div.BPage__HeaderCon-kVnWyQ.hklIgC > img')   // coming back to original flow
        .click()


        cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > button')
            .should('have.css', 'background-color', 'rgb(253, 213, 53)')
            .should('have.text', ' Continue ')
            .click()

        cy.wait(1000)    

        //  *****************Flipkart Form ****************************

        cy.url()
            .should('eq', 'http://react-app-monica.s3-website-ap-southeast-1.amazonaws.com/extradetails/flipkartscrapping/form')


        cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.cFgZAX > div > form').as('form')

        // Test cases for Flipkart Forms before entring Account details

        cy.get('@form').then(frm => {
            expect(frm.children()).to.have.length(4)
            expect(frm.children().eq(3)).to.have.attr('disabled') //submit button is disabled 
            expect(frm.children().eq(0).children().eq(0)).to.have.css('visibility', 'hidden')  // labels are hidden 

        })

        // Test cases for Flipkart Forms after entering details

        cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.cFgZAX > div > form > div.BInput__InCon-UCTdV.JspVP > table > tbody > tr > td.BInput__ErrCon-bianUW.kURtGg > input')
            .should('have.attr', 'placeholder', 'Flipkart Account Mobile Number')
            .type(Cypress.env('Mobile_no'))

        cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.cFgZAX > div > form > div.BInput__InputBox-cDivfo.bTceFM > table > tbody > tr > td.BInput__ErrCon-bianUW.kURtGg > input')
            .should('have.attr', 'placeholder', 'Flipkart  account password')
            .type(Cypress.env('Pass'), { log: false })


       //cy.screenshot('FlipkartForm')    

        cy.get('@form')
            .children()
            .eq(3)
            .should('not.have.attr', 'disable') // Submit button is now enable

        cy.get('@form')
            .children()
            .eq(0)
            .children()
            .eq(0)
            .should('have.css', 'visibility', 'visible') //labels are visible


        // clicking on back button and then coming back to flipkart form page

        cy.get('#app > div > div > div > div.BPage__HeaderCon-kVnWyQ.hklIgC > img')
        .click()


        cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > button')
        .click()

        cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.cFgZAX > div > form > div.BInput__InCon-UCTdV.JspVP > table > tbody > tr > td.BInput__ErrCon-bianUW.kURtGg > input')
        .should('have.attr', 'placeholder', 'Flipkart Account Mobile Number')
        .type(Cypress.env('Mobile_no'))

        cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.cFgZAX > div > form > div.BInput__InputBox-cDivfo.bTceFM > table > tbody > tr > td.BInput__ErrCon-bianUW.kURtGg > input')
        .should('have.attr', 'placeholder', 'Flipkart  account password')
        .type(Cypress.env('Pass'), { log: false })


        cy.screenshot('Form_afterClickingOnBackButtonAndComingBack')


        cy.server()
      //   cy.route('POST','**/v1/me/extradetails/profile/flipkartscraping','') 
        cy.route('GET','**/v1/me/extradetails/profile/flipkartscraping','{"code":"200","msg":"Success","model":{"status":"success"}}')
        cy.route('GET','**/v1/me/extradetails/profile','fixture:flip_profile.json')
        cy.wait(5000)   

        cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.cFgZAX > div > form > button')
            .should('have.text', 'Submit')
            .should('have.css', 'background-color', 'rgb(253, 213, 53)')
            .click()
        cy.wait(2000)    
        cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div > div.skins__StyledBottomBtn-lfIsBx.ghKReN > button')
        .click()    

        cy.wait(2000)
        // // Refrsh button is disabled
        // cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div > div.skins__StyledBottomBtn-lfIsBx.ghKReN > button')
        // .should('contain','Refresh')
        // .should('have.attr','disable')


        cy.get('#app > div > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div.skins__SummaryCon-eWQpKA.gXiRNK > div:nth-child(5) > div > table > tbody > tr > td.skins__IconCon-bzCOwU.egfagA > i')
        .should('have.css','color','rgb(204, 204, 204)')

      //  cy.screenshot('Flipkart-Ecom-Done')
        cy.wait(1000)
    })



    it("pdInProfile: enable", () => {


        cy.server()
        cy.route({
            method: 'GET',
            url: '**/v1/me**',
            response: 'fixture:pdInProfile_enable.json'
        })
        cy.route('GET', '**/v1/home', 'fixture:home_enable.json')

        cy.wait(5000)


        cy.visit('/' + 'login', { failOnStatusCode: false })


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

        cy.route('GET', '**/v1/home', 'fixture:home_manual.json')

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
        cy.route('GET', '**/v1/home', 'fixture:home_processing.json')
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


    it.only("pdInProfile: disable", () => {

        cy.server()
        cy.route('GET', '**/v1/home', 'fixture:home_disable.json')

        cy.route({
            method: 'GET',
            url: '**/v1/me',
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