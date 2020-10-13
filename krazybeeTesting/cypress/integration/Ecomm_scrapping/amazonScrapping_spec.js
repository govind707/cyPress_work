describe("KreditBee App", () => {
    it.skip("Ecomm Scrapping- amazon", () => {
        cy.visit('/' + 'login', { failOnStatusCode: false })

        cy.wait(2000)



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

        cy.get('@loan_info')
        .children()
        .should('have.length', 4)

            

        // cy.screenshot("SS_50,000",{log:true})
        cy.get('@loan_info')
        .children()
        .eq(0)
        .should('contain', '50,000')

        // cy.screenshot("SS_2,0000")
        cy.get('@loan_info')
        .children()
        .eq(1)
        .should('contain', '2,00,000')

        cy.server()
        cy.route('GET','https://uf2b19n372.execute-api.ap-south-1.amazonaws.com/v1/me/extradetails/profile','fixture:profileAmazon.json')


        cy.wait(3000)

        cy.get('@loan_info')
        .children()
        .eq(3)
        .should('contain', 'Continue Application')
        .click()

        cy.wait(2000)


        cy.get('#app > div > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div > div > div.skins__SummaryCon-frilyS.hNQNNO > div:nth-child(5) > div > table > tbody > tr > td:nth-child(2) > p.skins__ItemTitle-hTcyCH.EVgyM')
        .click()
        cy.wait(3000)

       // cy.get('#app > div > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div.skins__SummaryCon-eWQpKA.gXiRNK > div:nth-child(1) > div > table > tbody > tr > td:nth-child(2) > p.skins__ItemTitle-drBBZl.bmrahQ')
        //.should('contain','Mobile Number Verification')

        cy.get('#app > div > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div.skins__SummaryCon-eWQpKA.gXiRNK').as('profile_info')

        cy.get('@profile_info')
        .children()
        .should('have.length', 7)

        cy.get('@profile_info')
        .children()
        .eq(4)
        .should('contain','Ecomm Scrapping')
        .click()

        cy.wait(2000)

        cy.url()
        .should('eq','http://react-app-monica.s3-website-ap-southeast-1.amazonaws.com/extradetails/ecommoffers?source=profile')

        cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div > div.skins__StyledOptions-flVgwh.jxcLYf.skins__PDSelFixed-ebFJqK.evbfZN').as('scrapp_optns')
        .children()
        .should('have.length',3)


        cy.get('@scrapp_optns')
        .children()
        .eq(0)
        .should('contain','Use Amazon Account')
        .click()

        cy.wait(1000)

        cy.get('@scrapp_optns')
        .children()
        .eq(1)
        .should('contain','Use Flipkart Account')

        cy.get('@scrapp_optns')
        .children()
        .eq(2)
        .should('contain','Continue')
        .click()

        cy.wait(1000)

        cy.url()
        .should('eq','http://react-app-monica.s3-website-ap-southeast-1.amazonaws.com/extradetails/amazonscrapping/info?source=profile')

        cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > button')
        .should('contain','Continue')
        .click()

        cy.wait(1000)

        cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.cFgZAX > div > form > div:nth-child(1) > table > tbody > tr > td.BInput__ErrCon-bianUW.kURtGg > input')
        .should('have.attr','placeholder',"Email ID/ Mobile number")
        .type(Cypress.env('Mobile_no'))

        cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.cFgZAX > div > form > div:nth-child(2) > table > tbody > tr > td.BInput__ErrCon-bianUW.kURtGg > input')
        .should('have.attr','placeholder',"Amazon  account password")
        .type(Cypress.env('pass'))

        cy.server()
        cy.route({
            method: 'GET',
            url: 'https://uf2b19n372.execute-api.ap-south-1.amazonaws.com/v1/me/extradetails/profile/amazonscraping',
            response: {
              // simulate a redirect to another page
             // code:200,
              redirect: 'http://react-app-monica.s3-website-ap-southeast-1.amazonaws.com/profile/additionalinfo'
            }
          })

       // cy.route('POST','https://sentry.io/api/1194255/store/?sentry_version=7&sentry_client=raven-js%2F3.24.2&sentry_key=f9de8e7fc2664bca8411f64559f095b5','{"code": 200, "msg": "Success"}')  

        cy.wait(5000)  

        cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.cFgZAX > div > form > button')
        .should('have.css','color','rgb(25, 25, 25)')
      
        //.click()
        
    })
})