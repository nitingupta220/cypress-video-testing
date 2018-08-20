describe('it should play the video', function() {
    beforeEach(
        cy.visit('https://nitingupta220.github.io/cypress-video-testing/')
    )
    it('should play the video', function() {
        cy.get('video').click();
    })
})