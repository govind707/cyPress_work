

describe('Login', () => {
    it.skip('Login through Google', () => {
     // cy.visit("https://www.bikewale.com/")  
      const username ="govind.thakur201097@gmail.com"
      const password = "govind@123"
      const loginUrl = "https://account.oneplus.in/signin"
      const cookieName = '__Secure-3PSIDCC'
      
      const socialLoginOptions = {
        username,
        password,
        loginUrl,
        headless: true,
        logs: false,
        loginSelector: '#sign-in-main > div > div > div:nth-child(1) > div > div > div.third-login.clearfix > a.third-login-btn.google-btn',
        postLoginSelector: '#store-nav'
      }
  
      return cy.task('GoogleSocialLogin', socialLoginOptions).then(({cookies}) => {
        cy.clearCookies()
  
        const cookie = cookies.filter(cookie => cookie.name === cookieName).pop()
        if (cookie) {
          cy.setCookie(cookie.name, cookie.value, {
            domain: cookie.domain,
            expiry: cookie.expires,
            httpOnly: cookie.httpOnly,
            path: cookie.path,
            secure: cookie.secure
          })
  
          Cypress.Cookies.defaults({
            preserve: cookieName
          })
        }
      })
    })
  })