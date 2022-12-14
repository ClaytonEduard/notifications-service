import { Content } from "./content";
import { Notification } from "./notification";

describe('Notification', () => {
    it('should be able to create a notification content', () => {
        const notification = new Notification({
            content: new Content('Nova solicitação de amizade'),
            category: new Category(''),
        });
        // espero que esteja tudo ok
        expect(content).toBeTruthy();

    })
})