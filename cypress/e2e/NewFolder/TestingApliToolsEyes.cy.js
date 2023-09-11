//import { loginPage } from "../PageObjects/LoginPage.js"


describe('Testing ApliToolsEyes', () => {
    beforeEach(() => {

        // Open Eyes to start visual testing.
        // Each test should open its own Eyes for its own snapshots.
        cy.eyesOpen({

            // The name of the application under test.
            // All tests for the same app should share the same app name.
            // Set this name wisely: Applitools features rely on a shared app name across tests.
            appName: 'Testing Week Steam storage example',
            batchName: Cypress.currentTest.title,
            matchLevel: 'layout',

            // The name of the test case for the given application.
            // Additional unique characteristics of the test may also be specified as part of the test name,
            // such as localization information ("Home Page - EN") or different user permissions ("Login by admin"). 
            testName: Cypress.currentTest.title,
        })
    })

    it('Testing Steam Store man page page and page post filter', () => {

        cy.visit("https://store.steampowered.com/")
        cy.eyesCheckWindow({
            tag: "Landing page",
            target: 'window',
            fully: true
        });

        cy.get('#store_nav_search_term').type("Baldur's Gate 3")
        cy.get("#search_suggestion_contents > a").first().click()

        cy.eyesCheckWindow({
            tag: "Post filter page",
            target: 'window',
            fully: false,
            matchLevel: 'strict',
            ignoreRegions: [{left: 100, top: 100, width: 200, height: 50 } ],
            floatingRegions: [{ region: { left: 100, top: 100, width: 200, height: 50 }, maxUpOffset: 5, maxDownOffset: 5, maxLeftOffset: 5, maxRightOffset: 5 }],
            accessibilityValidation:true
        });
        
    })




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



    // This method performs cleanup after each test.
    after(() => {
        cy.eyesGetAllTestResults().then(summary => {
            console.log(summary)
        })
    })
})


