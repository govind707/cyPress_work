//Cypress.on('fail',(err, runnable) => { debugger }) 

describe("Play with kreditBee App", () => {
    it.skip("Mobile Number Authentication: Basic", () => {

        // cy.server()
        // cy.route('GET', 'https://uf2b19n372.execute-api.ap-south-1.amazonaws.com/v1/home', 'fixture:home.json')
        // cy.wait(10000)

        cy.visit('/' + 'login', { failOnStatusCode: false, delay:5000 })

        cy.wait(2000)



        // cy.get('#app > div > div > div > div > div:nth-child(3) > div.skins__LoginBtnCon-fIoCIg.bfKfLI > div > div > div:nth-child(3) > div > a > a > span') 
        // .should('contain','Login with Registered Mobile')
        // .click()


        // cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div > form > div.BInput__InCon-UCTdV.JspVP > table > tbody > tr > td.BInput__ErrCon-bianUW.kURtGg > input')
        // .should('have.attr','placeholder','Enter your registered mobile number')
        // .type(8003356924)

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
        .should('have.length', 3)

            

        // cy.screenshot("SS_50,000",{log:true})
        cy.get('@loan_info')
        .children()
        .eq(0)
        .should('contain', '75,000')

        // cy.screenshot("SS_2,0000")
        cy.get('@loan_info')
        .children()
        .eq(1)
        .should('contain', '1,50,000')


        // cy.wait(3000)

        cy.get('@loan_info')
        .children()
        .eq(3)
        .should('contain', 'Continue Application')
        .click()


        cy.route('GET', 'https://uf2b19n372.execute-api.ap-south-1.amazonaws.com/v1/me/extradetails/profile', 'fixture:profile.json')
        cy.wait(2000)

        cy.get('#app > div > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div > div > div.skins__SummaryCon-frilyS.hNQNNO > div:nth-child(5) > div > table > tbody > tr > td:nth-child(2) > p.skins__ItemTitle-hTcyCH.EVgyM')
        .click()
        cy.wait(3000)

        cy.get('#app > div > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div.skins__SummaryCon-eWQpKA.gXiRNK > div:nth-child(1) > div > table > tbody > tr > td:nth-child(2) > p.skins__ItemTitle-drBBZl.bmrahQ')
        .should('contain','Mobile Number Verification : Basic')

        cy.get('.skins__SummaryCon-eWQpKA.gXiRNK').as('profile_info')

        cy.get('@profile_info')
        .children()
        .should('have.length', 4)


        cy.get('#app > div > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div.skins__SummaryCon-eWQpKA.gXiRNK > div:nth-child(1)')
        .click()

        cy.wait(2000)

        cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div.skins__StyledMiddleSection-fQnHBy.ksnYpt > div.skins__StyledDetails-eindFe.fSOCOT > div:nth-child(1)')
        .should('contain', "7477221726")

        cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div.skins__StyledMiddleSection-fQnHBy.ksnYpt > div.skins__StyledDetails-eindFe.fSOCOT > div:nth-child(2) > b')
        .should('contain', 'idea users')

        cy.wait(2000)

        cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > button')
        .click()


        cy.route('GET','https://uf2b19n372.execute-api.ap-south-1.amazonaws.com/v1/me/extradetails/profile','fixture:stage1.json').as('stage1').then(() => {
            cy.wait(5000)
            cy.route('GET','https://uf2b19n372.execute-api.ap-south-1.amazonaws.com/v1/me/extradetails/profile/basicmoblogin','{"code":"200","msg":"Mobile number verified","model":{}}')
            cy.route('POST','https://uf2b19n372.execute-api.ap-south-1.amazonaws.com/v1/me/extradetails/profile/basicmoblogin','{"code":"200","msg":"Success","model":{}}')
            cy.get('#app > div > div > div > div.BPage__BodyCon-hjhObv.giSHwH > div > button')
            .should('contain','Accept and continue')
            .click()
        })


        cy.wait(5000)

        

        cy.route('GET','https://uf2b19n372.execute-api.ap-south-1.amazonaws.com/v1/me/extradetails/profile','fixture:stage2.json')
        cy.wait(5000)
        cy.route('GET','https://uf2b19n372.execute-api.ap-south-1.amazonaws.com/v1/me/extradetails/profile/basicmoblogin','{"code":"200","msg":"Mobile number verified","model":{}}')
        cy.reload()

        cy.wait(5000)
       

    });

    
});