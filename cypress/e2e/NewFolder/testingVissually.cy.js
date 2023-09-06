//import { loginPage } from "../PageObjects/LoginPage.js"


describe('Testing Week testing ', () => {
    beforeEach(() => {

        // Open Eyes to start visual testing.
        // Each test should open its own Eyes for its own snapshots.
        cy.eyesOpen({

            // The name of the application under test.
            // All tests for the same app should share the same app name.
            // Set this name wisely: Applitools features rely on a shared app name across tests.
            appName: 'buscando diferencias',
            batchName: Cypress.currentTest.title,

            // The name of the test case for the given application.
            // Additional unique characteristics of the test may also be specified as part of the test name,
            // such as localization information ("Home Page - EN") or different user permissions ("Login by admin"). 
            testName: Cypress.currentTest.title,
        })
    })

    it('Vissually test 1', () => {

        cy.visit("https://store.steampowered.com/")
        cy.eyesCheckWindow({
            tag: "Landing page",
            target: 'window',
            fully: true
        });

        cy.get('#store_nav_search_term').type("Baldur's Gate 3")
        cy.get("#search_suggestion_contents > a").first().click()

        cy.eyesCheckWindow({
            tag: "Main page",
            target: 'window',
            fully: false,
            matchLevel: 'Layout',
            ignoreRegions: [{left: 100, top: 100, width: 200, height: 50 } ],
            floatingRegions: [{ region: { left: 100, top: 100, width: 200, height: 50 }, maxUpOffset: 5, maxDownOffset: 5, maxLeftOffset: 5, maxRightOffset: 5 }],
            accessibilityValidation:true
        });
        
    })



    it('should log into a bank account', () => {

        // Load the login page.
        cy.visit('https://demo.applitools.com')

        // Verify the full login page loaded correctly.
        cy.eyesCheckWindow({
            tag: "Login page",
            target: 'window',
            fully: true
        });

        // Perform login.
        cy.get('#username').type('andy')
        cy.get('#password').type('i<3pandas')
        cy.get('#log-in').click()

        // Verify the full main page loaded correctly.
        // This snapshot uses LAYOUT match level to avoid differences in closing time text.
        cy.eyesCheckWindow({
            tag: "Main page",
            target: 'window',
            fully: true,
            matchLevel: 'Layout'
        });
    })
    it('Vissually test 2', () => {
        cy.visit("https://drive.google.com/file/d/18PKPPYr2IFvz7i7gryT-VCc0vhufJ7K0/view?usp=drive_link")
        
        
        cy.eyesCheckWindow({
            tag: "Diff",
            target: 'window',
            fully: true,
            matchLevel: 'Layout'
        });


        /*
        cy.get('#store_nav_search_term').type("Baldur's Gate 3")
        cy.wait(2)
        cy.get("#search_suggestion_contents > a.match.match_app.match_v2.match_category_top.ds_collapse_flag.app_impression_tracked").first().click()
        cy.wait(2)
        cy.get('#logo_holder > a > img').click()

        //https://drive.google.com/file/d/1sP26GLyk-DbKnNev3cLe11plEVewBq8C/view?usp=drive_link modif
        //https://drive.google.com/file/d/18PKPPYr2IFvz7i7gryT-VCc0vhufJ7K0/view?usp=drive_link baseline


        C:\Users\lmartin\testingWeek\cypress\videos\testingVissually.cy.js.mp4
        */

    })



    // This method performs cleanup after each test.
    afterEach(() => {

        // Close Eyes to tell the server it should display the results.
        cy.eyesClose()
    })
})

