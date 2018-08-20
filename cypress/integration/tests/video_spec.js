describe('it should play the video', function() {
    beforeEach(function() {
        cy.visit('http://127.0.0.1:8080/')
    })
    it('should play the video', function() {
        cy.get('video').click();
    })
})