describe('Notification content', () => {
    it('should be able to create a notification content', () => {
        const content = new Content('Você recebeu um solicitação de amizade');
        // espero que esteja tudo ok
        expect(content).toBeTruthy();

    })
})