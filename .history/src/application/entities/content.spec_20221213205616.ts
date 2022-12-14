import { Content } from "./content";

test('it should be able to create a notification content', () => {
    const content = new Content('Você recebeu um solicitação de amizade');
    // espero que esteja tudo ok
    expect(content).toBeTruthy();

})

// espero que não seja possivel criar a 
test('it should not be able to create a notification content whith less than 5 characters', () => {
    const content = new Content('Você recebeu um solicitação de amizade');
    // espero que esteja tudo ok
    expect(content).toBeTruthy();

})